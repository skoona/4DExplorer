/* Class: GHCompileAndBuild
* - CalledBy: GHCommandFactory
*/

Class extends GHCommand

Class constructor($command : Text)
	Super:C1705(New object:C1471("command"; $command))
	
	
Function execute()->$status : Object
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - Compile and Build Project...\n"; Information message:K38:1)
	
	If (Folder:C1567("/PROJECT").file(This:C1470.getProjectName()+"_ci-compileproject_results.json").exists)
		Folder:C1567("/PROJECT").file(This:C1470.getProjectName()+"_ci-compileproject_results.json").delete()
	End if 
	
	$status:=This:C1470.compileAndBuild()
	
	$status.action:=This:C1470.getCommand()
	$status.action_timestamp:=String:C10(Current date:C33; ISO date:K1:8; Current time:C178)
	
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - End Compile and Build, status: "+JSON Stringify:C1217($status)+"\n"; Information message:K38:1)
	
Function compileAndBuild()->$status : Object
	$status:=New object:C1471()
	
	If (Get application info:C1599.headless)
		MESSAGES OFF:C175  // no progress bar
	End if 
	
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - Begin Compile Project...\n"; Information message:K38:1)
	
	// compiles the opened project using the options defined in the Structure Settings
	$status:=Compile project:C1760()
	
	$status.packaging:=This:C1470.package()
	
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - End Compile, status: "+JSON Stringify:C1217($status)+"\n"; Information message:K38:1)
	
Function package()->$return : Object
	var $buildDir; $structureFolder; $packageDir : 4D:C1709.Folder
	var $path : 4D:C1709.File
	var $deletePaths : Collection
	var $zipStructure : Object
	
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - Begin Packaging Project...\n"; Information message:K38:1)
	
	// Package for 4DZ
	$packageDir:=Folder:C1567(Folder:C1567("/PACKAGE").platformPath; fk platform path:K87:2)
	$buildDir:=$packageDir.parent.folder("Compiled Database/")
	If ($buildDir.exists)
		$buildDir.delete(Delete with contents:K24:24)
	End if 
	$buildDir.create()
	$structureFolder:=$buildDir.folder(This:C1470.getProjectName()+"/")
	$structureFolder.create()
	
	// Documentation
	$buildDir:=$packageDir.folder("Documentation/")
	$buildDir.copyTo($structureFolder; fk overwrite:K87:5)
	// Libraries
	$buildDir:=$packageDir.folder("Libraries/")
	If ($buildDir.exists)  // Empty the structure folder
		$buildDir.copyTo($structureFolder; fk overwrite:K87:5)
	End if 
	// Project
	$buildDir:=$packageDir.folder("Project/")
	$buildDir.copyTo($structureFolder; fk overwrite:K87:5)
	// Resources
	$buildDir:=$packageDir.folder("Resources/")
	$buildDir.copyTo($structureFolder; fk overwrite:K87:5)
	
	// Remove source methods
	$structureFolder.folder("Project/Sources/Classes/").delete(Delete with contents:K24:24)
	$structureFolder.folder("Project/Sources/DatabaseMethods/").delete(Delete with contents:K24:24)
	$structureFolder.folder("Project/Sources/Methods/").delete(Delete with contents:K24:24)
	$structureFolder.folder("Project/Sources/Triggers/").delete(Delete with contents:K24:24)
	$structureFolder.folder("Project/Trash/").delete(Delete with contents:K24:24)
	
	// Table Form, Form and Form object methods
	$deletePaths:=$structureFolder.files(fk recursive:K87:7).query("extension =:1"; ".4DM")
	For each ($path; $deletePaths)
		If (Test path name:C476($path.platformPath)>=0)
			$path.delete()
		End if 
	End for each 
	
	// <projectName>.4DZ
	$zipStructure:=New object:C1471
	$zipStructure.files:=New collection:C1472($structureFolder.folder("Project"))
	$zipStructure.encryption:=ZIP Encryption none:K91:3
	$return:=ZIP Create archive:C1640($zipStructure; $structureFolder.file(This:C1470.getProjectName()+".4DZ"))
	
	If ($return.success)
		$structureFolder.folder("Project").delete(Delete with contents:K24:24)
	End if 
	
	LOG EVENT:C667(Into system standard outputs:K38:9; "::notice "+Timestamp:C1445+" - End packaging, status: "+JSON Stringify:C1217($return)+"\n"; Information message:K38:1)
	