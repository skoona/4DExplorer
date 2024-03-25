// Person Add Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		FORM SET INPUT:C55([Person:1]; "Input")
		
		$winRef:=Open form window:C675([Person:1]; "Input"; Modal form dialog box:K39:7)
		
		CREATE RECORD:C68([Person:1])
		DIALOG:C40([Person:1]; "Input")
		
		If (ok=1)
			
			C_OBJECT:C1216($rec)
			
			SAVE RECORD:C53([Person:1])
			$rec:=ds:C1482.Person.get([Person:1]ID:1)
			Form:C1466.persons.add($rec)
			Form:C1466.searchResults.add($rec)
			LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition)
			CLEAR VARIABLE:C89($rec)
			
		End if 
		
		CLOSE WINDOW:C154($winRef)
		CLEAR VARIABLE:C89($rec)
		
End case 
