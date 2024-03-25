// Identifers Edit Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentIdentifiersItemPosition#0)
			
			SET QUERY DESTINATION:C396(Into current selection:K19:1)
			FORM SET INPUT:C55([Identifers:2]; "Input")
			
			QUERY:C277([Identifers:2]; [Identifers:2]ID:1=Form:C1466.currentIdentifiersItem.ID)
			If (ok=1)
				
				$winRef:=Open form window:C675([Identifers:2]; "Input"; Modal form dialog box:K39:7)
				MODIFY RECORD:C57([Identifers:2])
				
				If (ok=1)
					
					Form:C1466.currentIdentifiersItem.reload()
					LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition)
					
				End if 
				
				CLOSE WINDOW:C154($winRef)
				
			End if 
			
		End if 
		
End case 
