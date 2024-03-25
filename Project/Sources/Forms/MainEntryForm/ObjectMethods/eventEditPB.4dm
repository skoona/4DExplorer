// Events Edit Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentEventsItemPosition#0)
			
			SET QUERY DESTINATION:C396(Into current selection:K19:1)
			FORM SET INPUT:C55([Event:3]; "Input")
			
			QUERY:C277([Event:3]; [Event:3]ID:1=Form:C1466.currentEventsItem.ID)
			If (ok=1)
				
				$winRef:=Open form window:C675([Event:3]; "Input"; Modal form dialog box:K39:7)
				
				MODIFY RECORD:C57([Event:3])
				
				If (ok=1)
					
					Form:C1466.currentEventsItem.reload()
					LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW:C154($winRef)
				
			End if 
			
		End if 
		
End case 
