//%attributes = {}
// CM_FindAndUpdateMainWindow
// - Find main window and refresh core data


ARRAY LONGINT:C221($allWindowRefs; 0)
WINDOW LIST:C442($allWindowRefs)
C_LONGINT:C283($index; $winRef; $selected)
$selected:=0

// Find window reference
For ($index; 1; Size of array:C274($allWindowRefs))
	$winRef:=$allWindowRefs{$index}
	
	If (Window kind:C445($winRef)=Regular window:K27:1)
		
		If (Get window title:C450($winRef)="Contact Manager")
			$selected:=$winRef
		End if 
		
	End if 
	
End for 

// call proc is window was open
If ($selected#0)
	CALL FORM:C1391($selected; "CM_MainWindowDataUpdate")
End if 

CLEAR VARIABLE:C89($allWindowRefs)

