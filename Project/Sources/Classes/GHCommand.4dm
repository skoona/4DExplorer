/* Class: GHCommand.4dm
*
* CompileProject commands
* - https://doc.4d.com/4Dv19/4D/19.6/Compile-project.301-6269659.en.html
*
*/

Class constructor($params : Object)
	This:C1470.params:=$params
	This:C1470.projectName:=Folder:C1567("/PROJECT").files().query("extension = :1"; ".4DProject").first().name
	
Function getCommand()->$t : Text
	$t:=This:C1470.params.command
	
Function getProjectName()->$t : Text
	$t:=This:C1470.projectName
	
Function execute()->$status : Object
	$status:=New object:C1471()
	