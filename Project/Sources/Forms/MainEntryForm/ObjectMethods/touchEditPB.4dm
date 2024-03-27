// Identifers Edit Icon

var $winRef : Real


Case of 
	: (Form event code=On Clicked)
		
		If (Form.currentIdentifiersItemPosition#0)
			
			SET QUERY DESTINATION(Into current selection)
			FORM SET INPUT([Identifers]; "Input")
			
			QUERY([Identifers]; [Identifers]ID=Form.currentIdentifiersItem.ID)
			If (ok=1)
				
				$winRef:=Open form window([Identifers]; "Input"; Modal form dialog box)
				MODIFY RECORD([Identifers])
				
				If (ok=1)
					
					Form.currentIdentifiersItem.reload()
					LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW($winRef)
				
			End if 
			
		End if 
		
End case 
