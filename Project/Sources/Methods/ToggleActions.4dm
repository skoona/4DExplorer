//%attributes = {}
// ToggleActions -- toggles the visibility of a predefinded list of action buttons
// $1 overrides toggling default


// personEditPB
C_BOOLEAN:C305($1)
C_POINTER:C301($actionButtons)

$actionButtons:=Form:C1466.actionButtonsObjectsArray
If ($actionButtons#Null:C1517)
	
	$currentState:=OBJECT Get visible:C1075(*; $actionButtons->{1})
	
	If (Count parameters:C259=0)
		$currentState:=Choose:C955($currentState; False:C215; True:C214)
		
	Else 
		$currentState:=$1
		
	End if 
	
	For ($index; 1; Size of array:C274($actionButtons->))
		OBJECT SET VISIBLE:C603(*; $actionButtons->{$index}; $currentState)
		
	End for 
	
End if 