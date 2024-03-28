//%attributes = {}
// GH_UserParamHandler

#DECLARE($userParam : Text; $skipExit : Boolean)

var $commandFactory : cs.GHCommandFactory
var $command : cs.GHCommand
var $result; $status : Object
var $startTime : Integer

LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Processing Started for User Param: "+$userParam+"\n"; Information message)

$startTime:=Milliseconds
$status:=New object
$result:=New object

$commandFactory:=cs.GHCommandFactory.new()
$command:=$commandFactory.getCommand($userParam)

If ($command#Null)
	$status.command:=$command.execute()
	
	$status.durationMS:=Milliseconds-$startTime
	
	Folder("/PROJECT").file($command.getProjectName()+"_ci-"+$userParam+"_results.json").setText(JSON Stringify($status))
End if 

LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Processing Complete for User Param: "+$userParam+"\n"; Information message)

If ($skipExit)
	return 
End if 

QUIT 4D

