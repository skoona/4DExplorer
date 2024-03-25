//Searchpicker sample code

Case of 
		
	: (Form event code:C388=On Load:K2:1)
		
		// Init the var itself
		// this can be done anywhere else in your code
		C_TEXT:C284(vSearch)
		
		// the let's customise the SearchPicker (if needed)
		
		C_BOOLEAN:C305($Customise)
		$Customise:=True:C214
		
		C_TEXT:C284($ObjectName)
		$ObjectName:=OBJECT Get name:C1087(Object current:K67:2)
		
		// The exemple below shows how to set a label (ex : "name") inside the search zone
		
		If ($Customise)
			
			SearchPicker SET HELP TEXT($ObjectName; "Name")
			
		End if 
		
	: (Form event code:C388=On Data Change:K2:15)
		
		C_OBJECT:C1216($prior)
		
		If (vSearch="")
			If (Form:C1466.currentPersonItem#Null:C1517)
				$selectedPerson:=Form:C1466.currentPersonItem
				$prior:=Form:C1466.searchResults
				Form:C1466.searchResults:=Form:C1466.persons
				
				$selectionPosition:=$selectedPerson.indexOf(Form:C1466.persons)+1
				OBJECT SET SCROLL POSITION:C906(*; "es_NamesLB"; $selectionPosition)
				LISTBOX SELECT ROW:C912(*; "es_NamesLB"; $selectionPosition; lk replace selection:K53:1)
				Form:C1466.currentPersonItem:=$selectedPerson
				ToggleActions(True:C214)
				
			Else 
				$prior:=Form:C1466.searchResults
				Form:C1466.searchResults:=Form:C1466.persons
				ToggleActions(False:C215)
				
			End if 
			
		Else 
			$prior:=Form:C1466.searchResults
			Form:C1466.searchResults:=Form:C1466.persons.query("names  = :1"; "@"+vSearch+"@")
			ToggleActions(False:C215)
			
		End if 
		
		CLEAR VARIABLE:C89($prior)
		
End case 
