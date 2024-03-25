// Event Delete Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentEventsItemPosition#0)
			
			C_OBJECT:C1216($result; $current)
			
			$current:=Form:C1466.currentEventsItem
			$result:=$current.drop()
			If ($result.success)
				
				RELATE MANY:C262([Person:1])
				LISTBOX SELECT ROW:C912(*; "es_NamesLB"; Form:C1466.currentPersonPosition; lk replace selection:K53:1)
				
			Else 
				ALERT:C41("Deleting "+$current.type+" on "+$current.date+", Failed!  Cause: "+$result.statusText)
				
			End if 
			
			CLEAR VARIABLE:C89($result)
			CLEAR VARIABLE:C89($current)
			
		End if 
		
End case 
