//%attributes = {}
// GHPipeline_EntryPoint_P entry point for Tool4D
/*
example command line:
$TOOL4D  --opening-mode=interpreted --project=$PROJECT --user-param=$ACTION --skip-onstartup  --create-data --startup-method=GH_SyntaxCheck_P 
*/

var $realVal : Real
var $userParam : Text
var $callerType : Boolean

ON ERR CALL("error_logger"; ek global)

$realVal:=Get database parameter(User param value; $userParam)

$callerType:=(Application type = 6 ? True : False)

LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Executing method: GH_SyntaxCheck_P("+$userParam+") \n"; Information message)

GH_UserParamHandler($userParam; $callerType)
