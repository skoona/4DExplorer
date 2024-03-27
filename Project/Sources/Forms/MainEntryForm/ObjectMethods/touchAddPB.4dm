// Identifers Add Icon

var $winRef : Real

Case of 
	: (Form event code=On Clicked)
		
		If (Form.currentPersonPosition#0)
			
			FORM SET INPUT([Identifers]; "Input")
			
			$winRef:=Open form window([Identifers]; "Input"; Modal form dialog box)
			
			CREATE RECORD([Identifers])
			[Identifers]ID_Person:=Form.currentPersonItem.ID
			DIALOG([Identifers]; "Input")
			If (ok=1)
				SAVE RECORD([Identifers])
				RELATE MANY([Person])
				
				LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
				
			End if 
			
			CLOSE WINDOW($winRef)
			
		End if 
		
End case 
