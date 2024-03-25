//%attributes = {}
// LoadSampleData
// 
// Parses a sample data file in the following format
//  Applies the results to the Database structure
// Intended to be a singleshot operation or ONETIME setup step

// Attempts to load default picture file,
// then asks for data file
// data file generator: https://www.onlinedatagenerator.com

//  FILE STRUCTURE:
// { 
//"objects": [
//{
//"EmailAddress": "Chadwick_Page 8383@irrepsy.com",
//"FirstNameLastName": "Chadwick Page ",
//"street": "Besson  Rue, 5035",
//"City": "Hayward",
//"State": "Oklahoma",
//"zipCode": "50731",
//"phone": "4-842-553-4537",
//"events": "Foolish Games"
//}]
// }


C_OBJECT:C1216($obInfo; $source; $person; $touch; $event; $original)
C_TEXT:C284($jsonText; $selectedFile)
C_LONGINT:C283($initialPersons)
C_BOOLEAN:C305($foundDefaultPicture)

C_PICTURE:C286($commonPic)  // default picture for Person Table Entries -- must be located next to DB file
READ PICTURE FILE:C678("person.png"; $commonPic)  // empty "" in position 1 will will cause a open popup
If (ok=1)
	$foundDefaultPicture:=True:C214
End if 


$initialPersons:=Records in table:C83([Person:1])

// Resources/SampleData/sampleContacts.json
$selectedFile:=Get 4D folder:C485(Current resources folder:K5:16)+"SampleData:sampleContacts.json"
If (Test path name:C476($selectedFile)=Is a document:K24:1)
	
	// Remove Prior Records
	$original:=ds:C1482.Person.all()
	$original.drop()
	$initialPersons:=Records in table:C83([Person:1])
	
	$jsonText:=Document to text:C1236($selectedFile)
	$obInfo:=JSON Parse:C1218($jsonText; Is object:K8:27)
	
	START TRANSACTION:C239
	
	For each ($source; $obInfo.objects)
		
		$person:=ds:C1482.Person.query("names = :1"; $source.FirstNameLastName)
		
		If ($person.length=0)  // skip existing records
			
			$person:=ds:C1482.Person.new()
			$person.names:=$source.FirstNameLastName
			$person.street:=$source.street
			$person.city:=$source.City
			$person.state:=$source.State
			$person.zipCode:=$source.zipCode
			If ($foundDefaultPicture)
				$person.picture:=$commonPic
			End if 
			$person.save()
			
			$touch:=ds:C1482.Identifers.new()
			$touch.ID_Person:=$person.ID
			$touch.key:="email"
			$touch.value:=$source.EmailAddress
			$touch.primary:=False:C215
			$touch.save()
			
			$touch:=ds:C1482.Identifers.new()
			$touch.ID_Person:=$person.ID
			$touch.key:="home phone"
			$touch.value:=$source.phone
			$touch.primary:=True:C214
			$touch.save()
			
			$event:=ds:C1482.Event.new()
			$event.ID_Person:=$person.ID
			$event.type:="Favorite Song"
			$event.date:=Current date:C33
			$event.content:=$source.events
			$event.save()
			
			CLEAR VARIABLE:C89($person)
		End if 
		
	End for each 
	
	VALIDATE TRANSACTION:C240
	If (ok=1)
		ALERT:C41("Loaded "+String:C10(Records in table:C83([Person:1])-$initialPersons)+" Sample Data Records.")
	Else 
		// transaction was cancelled
		ALERT:C41("Failed to load sample data.")
	End if 
	
	CLEAR VARIABLE:C89($jsonText)
	CLEAR VARIABLE:C89($obInfo)
	CLEAR VARIABLE:C89($source)
	CLEAR VARIABLE:C89($initialPersons)
	
End if 


