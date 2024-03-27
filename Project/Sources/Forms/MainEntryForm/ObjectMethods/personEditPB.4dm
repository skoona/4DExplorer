// Person Edit Icon
var $winRef : Real


Case of 
	: (Form event code=On Clicked)
		
		If (Form.currentPersonPosition#0)
			
			FORM SET INPUT([Person]; "Input")
			
			QUERY([Person]; [Person]ID=Form.currentPersonItem.ID)
			If (ok=1)
				$winRef:=Open form window([Person]; "Input"; Modal form dialog box)
				
				MODIFY RECORD([Person])
				
				If (ok=1)
					
					// Reload Changed Record
					Form.currentPersonItem.reload()
					LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW($winRef)
				
			End if 
			
		End if 
		
End case 
