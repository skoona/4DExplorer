/* Class: GHCheckSyntax
  - CalledBy: GHCommandFactory
*/

Class extends GHCommand

Class constructor($command : Text)
	Super:C1705(New object:C1471("command"; $command))
	
Function execute()->$status : Object
	var $options : Object
	
	$options:=New object:C1471()
	$options.targets:=New collection:C1472
	
	$status:=This:C1470.checkSyntax($options)
	
	$status.action:=This:C1470.getCommand()
	$status.action_timestamp:=String:C10(Current date:C33; ISO date:K1:8; Current time:C178)
	
Function checkSyntax($checkSyntaxOptions : Object)->$status : Object
	LOG EVENT:C667(Into system standard outputs:K38:9; Timestamp:C1445+" - Checking Syntax...\n"; Information message:K38:1)
	
	// writes a log to: PACKAGE/Data/Logs/Symphony_errors.xml
	// keys: <ErrorList><Method>[<Error>]
	$status:=Compile project:C1760($checkSyntaxOptions)
	
	If (Folder:C1567("/LOGS").file("Symphony_errors.xml").exists)
		$status.artifact:=Folder:C1567("/LOGS").file("Symphony_errors.xml").getText()
	End if 
	
	LOG EVENT:C667(Into system standard outputs:K38:9; Timestamp:C1445+" - "+JSON Stringify:C1217($status)+"\n"; Information message:K38:1)
	