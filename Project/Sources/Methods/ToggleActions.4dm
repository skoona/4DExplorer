//%attributes = {}
// ToggleActions -- toggles the visibility of a predefinded list of action buttons
// $1 overrides toggling default


// personEditPB
#DECLARE($currentState : Boolean)
var $actionButtons : Pointer
var $index : Integer

$actionButtons:=Form.actionButtonsObjectsArray
If ($actionButtons#Null)
	
	$currentState:=OBJECT Get visible(*; $actionButtons->{1})
	
	If (Count parameters=0)
		$currentState:=Choose($currentState; False; True)
		
	Else 
		$currentState:=$1
		
	End if 
	
	For ($index; 1; Size of array($actionButtons->))
		OBJECT SET VISIBLE(*; $actionButtons->{$index}; $currentState)
		
	End for 
	
End if 