// Person Delete Icon


Case of 
	: (Form event code:C388=On Clicked:K2:4)
		
		If (Form:C1466.currentPersonPosition#0)
			
			C_OBJECT:C1216($result; $current; $prior; $prior2)
			
			$current:=Form:C1466.currentPersonItem
			$result:=$current.drop()
			If ($result.success)
				
				Form:C1466.persons:=Form:C1466.persons.minus($current)
				Form:C1466.searchResults:=Form:C1466.searchResults.minus($current)
				LISTBOX SELECT ROW:C912(*; "es_NamesLB"; 0; lk remove from selection:K53:3)
				
			Else 
				ALERT:C41("Deleting "+$current.names+" Failed!  Cause: "+$result.statusText)
				
			End if 
			
			CLEAR VARIABLE:C89($result)
			CLEAR VARIABLE:C89($prior)
			CLEAR VARIABLE:C89($prior2)
			CLEAR VARIABLE:C89($current)
			
		End if 
		
End case 
