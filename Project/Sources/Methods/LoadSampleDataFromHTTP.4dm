//%attributes = {}
// LoadSampleDataFromHTTP
// 
// Retrieves sample data from HTTP Faker API
//  Applies the results to the Database structure
// Intended to be a singleshot operation or ONETIME setup step
// When called from menu, PASS any type of parameter to clear existing tables
// When called with no param; will add 1000 new records, skipping duplicate names


// Attempts to load default picture file,
// Makes HTTP Request to get sample data

//  RESPONSE STRUCTURE:
//{
//"url": "https://fakerapi.it/api/v1/custom?_quantity=1&names=name&street=streetAddress&city=city&state=state&zipCode=postcode&phone=phone&url=website&eventDate=date&content=text",
//"response": {
//      "status": "OK",
//      "code": 200,
//.    "total": 1,
//.    "data": [
//          {
//.               "names": "Maia Kutch",
//.               "email": "somebody@somebody.com",
//.               "street": "27226 Schmidt Parkways",
//.               "city": "Langoshview",
//.               "state": "Maine",
//.               "zipCode": "52869",
//.               "phone": "+4473884707289",
//.               "url": "boyer.com",
//                "eventDate": "1997-08-24",
//                "content": "All the time he was speaking, and this he handed over to herself, 'Why, they're only a pack of cards!' At this moment the King, who had not gone much farther before she made it out loud. 'Thinking."
//.          }
//      ]}
// }

C_VARIANT:C1683($1)
C_TEXT:C284($getURL)
C_LONGINT:C283($getCode)
C_OBJECT:C1216($source; $person; $touch; $event; $original; $responseObject)
C_LONGINT:C283($initialPersons; $ProgressID; $recordCount; $indexRecord)
C_BOOLEAN:C305($foundDefaultPicture; $bProgressStop)
C_PICTURE:C286($commonPic)  // default picture for Person Table Entries -- must be located next to DB file

$ProgressID:=Progress New  // create a new progress bar
Progress SET BUTTON ENABLED($ProgressID; True:C214)
Progress SET TITLE($ProgressID; "Loading sample data from HTTP API.")

$getURL:="https://fakerapi.it/api/v1/custom?_quantity=1000&names=name&email=email&street=streetAddress&city=city&state=state&zipCode=postcode&phone=phone&url=website&eventDate=date&content=text"
$initialPersons:=Records in table:C83([Person:1])

$getCode:=HTTP Get:C1157($getURL; $responseObject)
If ($getCode=200)
	
	Progress SET PROGRESS($ProgressID; 0.1)
	$recordCount:=$responseObject.total
	$indexRecord:=0
	
	If (Count parameters:C259=0)
		// Menus pass 0 params to indicate full reload
		// Remove Prior Records
		Progress SET TITLE($ProgressID; "Purge current database of "+String:C10($initialPersons)+" data records.")
		
		$original:=ds:C1482.Person.all()
		$original.drop()
		$initialPersons:=Records in table:C83([Person:1])
		Progress SET PROGRESS($ProgressID; 0.2)
		
		CLEAR VARIABLE:C89($original)
		
	Else 
		Progress SET TITLE($ProgressID; "Appending an additional "+String:C10($recordCount)+" records to current database of "+String:C10($initialPersons)+" records.")
		Progress SET PROGRESS($ProgressID; 0.2)
		
	End if 
	
	READ PICTURE FILE:C678("person.png"; $commonPic)  // empty "" in position 1 will will cause a open popup
	If (ok=1)
		$foundDefaultPicture:=True:C214
	End if 
	
	
	Progress SET PROGRESS($ProgressID; $indexRecord/$recordCount)
	
	$bProgressStop:=Progress Stopped($ProgressID)
	If (Not:C34($bProgressStop))
		Progress SET TITLE($ProgressID; "Loading "+String:C10($recordCount)+" sample data records.")
		
		
		START TRANSACTION:C239
		
		For each ($source; $responseObject.data)
			$bProgressStop:=Progress Stopped($ProgressID)
			$indexRecord:=$indexRecord+1
			
			If (Not:C34($bProgressStop))
				Progress SET PROGRESS($ProgressID; $indexRecord/$recordCount)
				
				$person:=ds:C1482.Person.query("names = :1"; $source.names)
				
				If ($person.length=0)  // skip existing records
					
					$person:=ds:C1482.Person.new()
					$person.names:=$source.names
					$person.street:=$source.street
					$person.city:=$source.city
					$person.state:=$source.state
					$person.zipCode:=$source.zipCode
					If ($foundDefaultPicture)
						$person.picture:=$commonPic
					End if 
					$person.save()
					
					$touch:=ds:C1482.Identifers.new()
					$touch.ID_Person:=$person.ID
					$touch.key:="email"
					$touch.value:=$source.email
					$touch.primary:=False:C215
					$touch.save()
					
					$touch:=ds:C1482.Identifers.new()
					$touch.ID_Person:=$person.ID
					$touch.key:="home phone"
					$touch.value:=$source.phone
					$touch.primary:=True:C214
					$touch.save()
					
					$touch:=ds:C1482.Identifers.new()
					$touch.ID_Person:=$person.ID
					$touch.key:="URL"
					$touch.value:=$source.url
					$touch.primary:=False:C215
					$touch.save()
					
					$event:=ds:C1482.Event.new()
					$event.ID_Person:=$person.ID
					$event.type:="Comment"
					$event.date:=$source.eventDate
					$event.content:=$source.content
					$event.save()
					
				End if 
			End if 
			
		End for each 
		
		Progress QUIT($ProgressID)
		
		If (Not:C34($bProgressStop))
			VALIDATE TRANSACTION:C240
			
			If (ok=1)
				ALERT:C41("Loaded "+String:C10(Records in table:C83([Person:1])-$initialPersons)+" Sample Data Records. Total records: "+String:C10(Records in table:C83([Person:1])))
				
				// Update Main Window with New Data
				CM_FindAndUpdateMainWindow()
				
			Else 
				// transaction was cancelled
				ALERT:C41("Failed to VALIDATE sample data.")
			End if 
			
		Else 
			CANCEL TRANSACTION:C241
			ALERT:C41("Stop requested by User; No data Loaded!")
			
		End if 
		
		CLEAR VARIABLE:C89($responseObject)
		CLEAR VARIABLE:C89($initialPersons)
		CLEAR VARIABLE:C89($commonPic)
		
	Else 
		Progress QUIT($ProgressID)
		ALERT:C41("Stop requested by User; No data Loaded!")
		
	End if 
	
Else 
	ALERT:C41("Faker URL Failed! HTTPCODE: "+String:C10($getCode))
	
End if 


