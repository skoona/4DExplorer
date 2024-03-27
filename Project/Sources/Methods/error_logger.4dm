//%attributes = {}
// error_logger

var $oError; $oFile : Object
var $cCallChain; $cErrorStack; cErrors : Collection
var gError : Integer
var $tTimestamp : Text

ARRAY LONGINT($alCodes; 0)
ARRAY TEXT($atComps; 0)
ARRAY TEXT($atErrors; 0)

$cErrorStack:=New collection
$cCallChain:=Get call chain
$tTimestamp:=Timestamp
If (cErrors=Null)
	cErrors:=New shared collection
End if 

GET LAST ERROR STACK($alCodes; $atComps; $atErrors)
ARRAY TO COLLECTION($cErrorStack; $alCodes; "code"; $atComps; "component"; $atErrors; "error")

// put it all together 
$oError:=New object()
$oError.timestamp:=$tTimestamp
$oError.user_4d:=Current user
$oError.user_system:=Current system user
$oError.machine:=Current machine
$oError.method:=Error method
$oError.error:=Error
$oError.line:=Error line
$oError.formula:=Error formula
$oError.deep:=$cCallChain.length
$oError.callChain:=$cCallChain
$oError.errorStack:=$cErrorStack

// Store the error in a file located in the database logs folder
$tTimestamp:=Replace string($tTimestamp; ":"; "-")
$oFile:=Folder(fk logs folder; *).folder("error").file("error_"+$tTimestamp+".json")
$oFile.setText(JSON Stringify($oError))

// Try to save error info
Use (cErrors)
	cErrors.push(JSON Stringify($oError))
End use 
