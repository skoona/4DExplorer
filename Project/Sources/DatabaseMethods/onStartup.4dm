// On Startup

ON ERR CALL("error_logger"; ek global)

var $pid : Integer

$pid:=New process("CM_MainEntry"; 0; "Main Entry"; *)

