// Person Add Icon

var $winRef : Real
var $rec : cs.PersonEntity

Case of 
	: (Form event code=On Clicked)
		
		FORM SET INPUT([Person]; "Input")
		
		$winRef:=Open form window([Person]; "Input"; Modal form dialog box)
		
		CREATE RECORD([Person])
		DIALOG([Person]; "Input")
		
		If (ok=1)
			
			
			SAVE RECORD([Person])
			$rec:=ds.Person.get([Person]ID)
			Form.persons.add($rec)
			Form.searchResults.add($rec)
			LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
			
		End if 
		
		CLOSE WINDOW($winRef)
		CLEAR VARIABLE($rec)
		
End case 
