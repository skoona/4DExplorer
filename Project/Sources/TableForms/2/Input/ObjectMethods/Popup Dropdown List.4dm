ARRAY TEXT:C222(at_persons; 0)
ARRAY LONGINT:C221(al_id_persons; 0)

Case of 
	: (FORM Event:C1606.code=On Load:K2:1)
		$persons:=ds:C1482.Person.all().orderBy("names")
		
		For each ($person; $persons)
			APPEND TO ARRAY:C911(at_persons; $person.names)
			APPEND TO ARRAY:C911(al_id_persons; $person.ID)
			
		End for each 
		
		$position:=Find in array:C230(al_id_persons; [Identifers:2]ID_Person:2)
		If ($position=-1)
			at_persons:=0
		Else 
			at_persons:=$position
		End if 
		
		
	: (FORM Event:C1606.code=On Data Change:K2:15)
		
		$position:=at_persons
		[Identifers:2]ID_Person:2:=al_id_persons{$position}
		
	: (FORM Event:C1606.code=On Unload:K2:2)
		
		CLEAR VARIABLE:C89(at_persons)
		CLEAR VARIABLE:C89(al_id_persons)
		
End case 