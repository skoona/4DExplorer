

Case of 
	: (FORM Event:C1606.code=On Load:K2:1)
		C_LONGINT:C283($index; $position)
		
		ARRAY TEXT:C222(at_persons; 0)
		ARRAY LONGINT:C221(al_id_persons; 0)
		
		
		If (Form:C1466.directAssignment)
			[Event:3]ID_Person:2:=Form:C1466.personID
		End if 
		
		
		If ([Event:3]ID_Person:2#0)
			$persons:=ds:C1482.Person.query("ID = :1"; [Event:3]ID_Person:2)
		Else 
			$persons:=ds:C1482.Person.all().orderBy("names")
			
		End if 
		
		For each ($person; $persons)
			$index:=$index+1
			APPEND TO ARRAY:C911(at_persons; $person.names)
			APPEND TO ARRAY:C911(al_id_persons; $person.ID)
			
			If ($person.ID=[Event:3]ID_Person:2)
				$position:=$index
			End if 
			
		End for each 
		
		at_persons:=$position
		
		
	: (FORM Event:C1606.code=On Data Change:K2:15)
		C_LONGINT:C283($pos)
		
		$pos:=at_persons
		[Event:3]ID_Person:2:=al_id_persons{$pos}
		
	: (FORM Event:C1606.code=On Unload:K2:2)
		
		CLEAR VARIABLE:C89(at_persons)
		CLEAR VARIABLE:C89(al_id_persons)
		
End case 
