//Searchpicker sample code

var $selectedPerson : 4D.Entity
var $selectionPosition : Integer
var $prior : 4D.EntitySelection
var $Customise : Boolean
var $ObjectName; vSearch : Text

Case of 
		
	: (Form event code=On Load)
		
		// Init the var itself
		// this can be done anywhere else in your code
		// the let's customise the SearchPicker (if needed)
		
		$Customise:=True
		
		$ObjectName:=OBJECT Get name(Object current)
		
		// The exemple below shows how to set a label (ex : "name") inside the search zone
		
		If ($Customise)
			
			SearchPicker SET HELP TEXT($ObjectName; "Name")
			
		End if 
		
	: (Form event code=On Data Change)
		
		If (vSearch="")
			If (Form.currentPersonItem#Null)
				$selectedPerson:=Form.currentPersonItem
				$prior:=Form.searchResults
				Form.searchResults:=Form.persons
				
				$selectionPosition:=$selectedPerson.indexOf(Form.persons)+1
				OBJECT SET SCROLL POSITION(*; "es_NamesLB"; $selectionPosition)
				LISTBOX SELECT ROW(*; "es_NamesLB"; $selectionPosition; lk replace selection)
				Form.currentPersonItem:=$selectedPerson
				ToggleActions(True)
				
			Else 
				$prior:=Form.searchResults
				Form.searchResults:=Form.persons
				ToggleActions(False)
				
			End if 
			
		Else 
			$prior:=Form.searchResults
			Form.searchResults:=Form.persons.query("names  = :1"; "@"+vSearch+"@")
			ToggleActions(False)
			
		End if 
		
		CLEAR VARIABLE($prior)
		
End case 
