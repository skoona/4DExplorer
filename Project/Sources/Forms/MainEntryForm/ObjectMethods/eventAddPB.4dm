// Events Add Icon

var $winRef : Real

Case of 
	: (Form event code=On Clicked)
		
		If (Form.currentPersonPosition#0)
			
			FORM SET INPUT([Event]; "Input")
			
			$winRef:=Open form window([Event]; "Input"; Modal form dialog box)
			
			CREATE RECORD([Event])
			[Event]ID_Person:=Form.currentPersonItem.ID
			DIALOG([Event]; "Input")
			
			If (ok=1)
				SAVE RECORD([Event])
				RELATE MANY([Person])
				
				LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
				
			End if 
			
			CLOSE WINDOW($winRef)
			
		End if 
		
End case 
