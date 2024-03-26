//%attributes = {}
// error_logger

C_OBJECT:C1216($oError; $oFile)
C_COLLECTION:C1488($cCallChain; $cErrorStack)
C_LONGINT:C283(gError)  // establish error feedback
C_COLLECTION:C1488(cErrors)

C_TEXT:C284($tTimestamp)
ARRAY LONGINT:C221($alCodes; 0)
ARRAY TEXT:C222($atComps; 0)
ARRAY TEXT:C222($atErrors; 0)

$cErrorStack:=New collection:C1472
$cCallChain:=Get call chain:C1662
$tTimestamp:=Timestamp:C1445
If (cErrors=Null:C1517)
	cErrors:=New shared collection:C1527
End if 

GET LAST ERROR STACK:C1015($alCodes; $atComps; $atErrors)
ARRAY TO COLLECTION:C1563($cErrorStack; $alCodes; "code"; $atComps; "component"; $atErrors; "error")

// put it all together 
$oError:=New object:C1471()
$oError.timestamp:=$tTimestamp
$oError.user_4d:=Current user:C182
$oError.user_system:=Current system user:C484
$oError.machine:=Current machine:C483
$oError.method:=Error method
$oError.error:=Error
$oError.line:=Error line
$oError.formula:=Error formula
$oError.deep:=$cCallChain.length
$oError.callChain:=$cCallChain
$oError.errorStack:=$cErrorStack

// Store the error in a file located in the database logs folder
$tTimestamp:=Replace string:C233($tTimestamp; ":"; "-")
$oFile:=Folder:C1567(fk logs folder:K87:17; *).folder("error").file("error_"+$tTimestamp+".json")
$oFile.setText(JSON Stringify:C1217($oError))

// Try to save error info
Use (cErrors)
	cErrors.push(JSON Stringify:C1217($oError))
End use 
