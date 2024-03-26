//%attributes = {}
// GH_UserParamHandler

#DECLARE($userParam : Text; $testing : Boolean)

var $commandFactory : cs:C1710.GHCommandFactory
var $command : cs:C1710.GHCommand
var $result : Object
var $startTime : Integer

LOG EVENT:C667(Into system standard outputs:K38:9; Timestamp:C1445+" - user-param: "+$userParam+"\n"; Information message:K38:1)

$startTime:=Milliseconds:C459
$status:=New object:C1471
$result:=New object:C1471

$commandFactory:=cs:C1710.GHCommandFactory.new()
$command:=$commandFactory.getCommand($userParam)

If ($command#Null:C1517)
	$status.command:=$command.execute()
	
	$status.durationMS:=Milliseconds:C459-$startTime
	
	Folder:C1567("/PROJECT").file($command.getProjectName()+"_ci-"+$userParam+"_results.json").setText(JSON Stringify:C1217($status))
End if 

if($testing)
	return
End if

QUIT 4D

