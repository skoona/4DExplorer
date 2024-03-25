// es_NamesLB Object Method to controll picture buttons
//

Case of 
	: (FORM Event:C1606.code=On Load:K2:1)
		ToggleActions(False:C215)
		
	: (FORM Event:C1606.code=On Clicked:K2:4)
		ToggleActions(True:C214)
		
	: (FORM Event:C1606.code=On Data Change:K2:15)
		ToggleActions(False:C215)
		
	: (FORM Event:C1606.code=On Selection Change:K2:29)
		
		If (Form:C1466.currentPersonItem#Null:C1517)
			ToggleActions(True:C214)
		Else 
			ToggleActions(False:C215)
		End if 
		
End case 