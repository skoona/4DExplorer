// Events Edit Icon

var $winRef : Real

Case of 
	: (Form event code=On Clicked)
		
		If (Form.currentEventsItemPosition#0)
			
			SET QUERY DESTINATION(Into current selection)
			FORM SET INPUT([Event]; "Input")
			
			QUERY([Event]; [Event]ID=Form.currentEventsItem.ID)
			If (ok=1)
				
				$winRef:=Open form window([Event]; "Input"; Modal form dialog box)
				
				MODIFY RECORD([Event])
				
				If (ok=1)
					
					Form.currentEventsItem.reload()
					LISTBOX SELECT ROW(*; "es_NamesLB"; Form.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW($winRef)
				
			End if 
			
		End if 
		
End case 
