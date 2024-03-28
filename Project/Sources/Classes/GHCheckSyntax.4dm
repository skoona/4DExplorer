/* Class: GHCheckSyntax
  - CalledBy: GHCommandFactory
*/

Class extends GHCommand

Class constructor($command : Text)
	Super(New object("command"; $command))
	
Function execute()->$status : Object
	var $options : Object
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Checking Syntax...\n"; Information message)
	
	$options:=New object()
	$options.targets:=New collection
	
	$status:=This.checkSyntax($options)
	
	$status.action:=This.getCommand()
	$status.action_timestamp:=String(Current date; ISO date; Current time)
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - End Syntax Check, status: "+String($status.success)+"\n"; Information message)
	
Function checkSyntax($checkSyntaxOptions : Object)->$status : Object
	
	// writes a log to: PACKAGE/Data/Logs/<projectname>_errors.xml
	// keys: <ErrorList><Method>[<Error>]
	$status:=Compile project($checkSyntaxOptions)
	
	If (Folder("/LOGS").file(This.getProjectName()+"_errors.xml").exists)
		$status.artifact:=Folder("/LOGS").file(This.getProjectName()+"_errors.xml").getText()
	End if 
	