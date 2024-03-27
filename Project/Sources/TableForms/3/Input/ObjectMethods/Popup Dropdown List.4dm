
var $person : cs.PersonEntity
var $persons : cs.PersonSelection
var $position; $index : Integer

Case of 
	: (FORM Event.code=On Load)
		C_LONGINT($index; $position)
		
		ARRAY TEXT(at_persons; 0)
		ARRAY LONGINT(al_id_persons; 0)
		
		
		If (Form.directAssignment)
			[Event]ID_Person:=Form.personID
		End if 
		
		
		If ([Event]ID_Person#0)
			$persons:=ds.Person.query("ID = :1"; [Event]ID_Person)
		Else 
			$persons:=ds.Person.all().orderBy("names")
			
		End if 
		
		For each ($person; $persons)
			$index:=$index+1
			APPEND TO ARRAY(at_persons; $person.names)
			APPEND TO ARRAY(al_id_persons; $person.ID)
			
			If ($person.ID=[Event]ID_Person)
				$position:=$index
			End if 
			
		End for each 
		
		at_persons:=$position
		
		
	: (FORM Event.code=On Data Change)
		C_LONGINT($pos)
		
		$pos:=at_persons
		[Event]ID_Person:=al_id_persons{$pos}
		
	: (FORM Event.code=On Unload)
		
		CLEAR VARIABLE(at_persons)
		CLEAR VARIABLE(al_id_persons)
		
End case 
