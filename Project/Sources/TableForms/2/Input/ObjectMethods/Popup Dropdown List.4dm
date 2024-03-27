var $person : cs.PersonEntity
var $persons : cs.PersonSelection
var $position : Integer

ARRAY TEXT(at_persons; 0)
ARRAY LONGINT(al_id_persons; 0)

Case of 
	: (FORM Event.code=On Load)
		$persons:=ds.Person.all().orderBy("names")
		
		For each ($person; $persons)
			APPEND TO ARRAY(at_persons; $person.names)
			APPEND TO ARRAY(al_id_persons; $person.ID)
			
		End for each 
		
		$position:=Find in array(al_id_persons; [Identifers]ID_Person)
		If ($position=-1)
			at_persons:=0
		Else 
			at_persons:=$position
		End if 
		
		
	: (FORM Event.code=On Data Change)
		
		$position:=at_persons
		[Identifers]ID_Person:=al_id_persons{$position}
		
	: (FORM Event.code=On Unload)
		
		CLEAR VARIABLE(at_persons)
		CLEAR VARIABLE(al_id_persons)
		
End case 