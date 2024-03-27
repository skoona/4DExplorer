//%attributes = {}
// GH_SyntaxCheck_P entry point for Tool4D

var $realVal : Real
var $userParam : Text

$realVal:=Get database parameter(User param value; $userParam)

LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Executing method: GH_SyntaxCheck_P("+$userParam+") \n"; Information message)

GH_UserParamHandler($userParam; True)
