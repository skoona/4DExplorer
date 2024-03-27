// On Startup

ON ERR CALL("error_logger"; ek global)

// Check for User-Param on Command Line 
var $realVal : Real
var $pid : Integer
var $userParam : Text

$realVal:=Get database parameter(User param value; $userParam)

Case of 
	: (($userParam="tool4d")
		LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - OnStartup ByPassed \n"; Information message)
		
	: (($userParam="checksyntax") | ($userParam="compileproject"))
		LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Evaluating UserParam: "+$userParam+"\n"; Information message)
		$pid:=New process("GH_UserParamHandler"; 0; "GitHub Handler"; $userParam; False; *)
		
	Else 
		$pid:=New process("CM_MainEntry"; 0; "Main Entry"; *)
		
End case 

