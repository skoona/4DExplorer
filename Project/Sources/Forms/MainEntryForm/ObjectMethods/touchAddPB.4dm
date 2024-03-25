// Identifers Add Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentPersonPosition#0)
			
			FORM SET INPUT:C55([Identifers:2]; "Input")
			
			$winRef:=Open form window:C675([Identifers:2]; "Input"; Modal form dialog box:K39:7)
			
			CREATE RECORD:C68([Identifers:2])
			[Identifers:2]ID_Person:2:=Form:C1466.currentPersonItem.ID
			DIALOG:C40([Identifers:2]; "Input")
			If (ok=1)
				SAVE RECORD:C53([Identifers:2])
				RELATE MANY:C262([Person:1])
				
				LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition)
				
			End if 
			
			CLOSE WINDOW:C154($winRef)
			
		End if 
		
End case 
