// On Startup

ON ERR CALL:C155("error_logger"; ek global:K92:2)

// Check for User-Param on Command Line 
var $realVal : Real
var $pid : Integer
var $userParam : Text

$realVal:=Get database parameter:C643(User param value:K37:94; $userParam)

Case of 
		
	: (($userParam="checksyntax") | ($userParam="compileproject"))
		LOG EVENT:C667(Into system standard outputs:K38:9; Timestamp:C1445+" - Evaluating UserParam: "+$userParam+"\n"; Information message:K38:1)
		$pid:=New process:C317("GH_UserParamHandler"; 0; "GitHub Handler"; $userParam; False:C215; *)
		
	Else 
		$pid:=New process:C317("CM_MainEntry"; 0; "Main Entry"; *)
		
End case 

