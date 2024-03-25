// Itdentifer Delete Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentIdentifiersItemPosition#0)
			
			C_OBJECT:C1216($result; $current)
			
			$current:=Form:C1466.currentIdentifiersItem
			$result:=$current.drop()
			If ($result.success)
				
				RELATE MANY:C262([Person:1])
				LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition; lk replace selection:K53:1)
				
			Else 
				ALERT:C41("Deleting "+$current.key+" Failed!  Cause: "+$result.statusText)
				
			End if 
			
			CLEAR VARIABLE:C89($current)
			CLEAR VARIABLE:C89($result)
			
		End if 
		
End case 
