// Person Edit Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentPersonPosition#0)
			
			FORM SET INPUT:C55([Person:1]; "Input")
			
			QUERY:C277([Person:1]; [Person:1]ID:1=Form:C1466.currentPersonItem.ID)
			If (ok=1)
				$winRef:=Open form window:C675([Person:1]; "Input"; Modal form dialog box:K39:7)
				
				MODIFY RECORD:C57([Person:1])
				
				If (ok=1)
					
					// Reload Changed Record
					Form:C1466.currentPersonItem.reload()
					LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW:C154($winRef)
				
			End if 
			
		End if 
		
End case 
