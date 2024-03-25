// PrintSelection

Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentPersonItem#Null:C1517)
			
			DEFAULT TABLE:C46([Person:1])
			FORM SET OUTPUT:C54([Person:1]; "MainPrintForm")
			SET QUERY DESTINATION:C396(Into current selection:K19:1)
			QUERY:C277([Person:1]; [Person:1]ID:1=Form:C1466.currentPersonItem.ID)
			PRINT SELECTION:C60([Person:1])
			
		End if 
		
End case 