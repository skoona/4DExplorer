/* Class: GHCompileAndBuild
* - CalledBy: GHCommandFactory
*/

Class extends GHCommand

Class constructor($command : Text)
	Super(New object("command"; $command))
	
	
Function execute()->$status : Object
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Compile and Build Project...\n"; Information message)
		
	$status:=This.compileAndBuild()
	
	$status.action:=This.getCommand()
	$status.action_timestamp:=String(Current date; ISO date; Current time)
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - End Compile and Build, status: "+String($status.success)+"\n"; Information message)
	
Function compileAndBuild()->$status : Object
	$status:=New object()
	
	If (Get application info.headless)
		MESSAGES OFF  // no progress bar
	End if 
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Begin Compile Project...\n"; Information message)
	
	// compiles the opened project using the options defined in the Structure Settings
	$status:=Compile project()
	If ($status.success)
		$status.packaging:=This.package()
	Else 
		$status.packaging:=New collection()
	End if 
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - End Compile, status: "+String($status.success)+"\n"; Information message)
	
Function package()->$status : Object
	var $buildDir; $structureFolder; $packageDir : 4D.Folder
	var $path : 4D.File
	var $deletePaths : Collection
	var $zipStructure : Object
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - Begin Packaging Project...\n"; Information message)
	
	// Package for 4DZ
	$packageDir:=Folder(Folder(fk database folder).platformPath; fk platform path)
	$buildDir:=$packageDir.folder("Compiled Database/")
	If ($buildDir.exists)
		$buildDir.delete(Delete with contents)
	End if 
	$buildDir.create()
	$structureFolder:=$buildDir.folder(This.getProjectName()+"/")
	$structureFolder.create()
	
	// Documentation
	$buildDir:=$packageDir.folder("Documentation/")
	$buildDir.copyTo($structureFolder; fk overwrite)
	// Libraries
	$buildDir:=$packageDir.folder("Libraries/")
	If ($buildDir.exists)  // Empty the structure folder
		$buildDir.copyTo($structureFolder; fk overwrite)
	End if 
	// Project
	$buildDir:=$packageDir.folder("Project/")
	$buildDir.copyTo($structureFolder; fk overwrite)
	// Resources
	$buildDir:=$packageDir.folder("Resources/")
	$buildDir.copyTo($structureFolder; fk overwrite)
	
	// Remove source methods
	$structureFolder.folder("Project/Sources/Classes/").delete(Delete with contents)
	$structureFolder.folder("Project/Sources/DatabaseMethods/").delete(Delete with contents)
	$structureFolder.folder("Project/Sources/Methods/").delete(Delete with contents)
	$structureFolder.folder("Project/Sources/Triggers/").delete(Delete with contents)
	$structureFolder.folder("Project/Trash/").delete(Delete with contents)
	
	// Table Form, Form and Form object methods
	$deletePaths:=$structureFolder.files(fk recursive).query("extension =:1"; ".4DM")
	For each ($path; $deletePaths)
		If (Test path name($path.platformPath)>=0)
			$path.delete()
		End if 
	End for each 
	
	// <projectName>.4DZ
	$zipStructure:=New object
	$zipStructure.files:=New collection($structureFolder.folder("Project"))
	$zipStructure.encryption:=ZIP Encryption none
	$status:=ZIP Create archive($zipStructure; $structureFolder.file(This.getProjectName()+".4DZ"))
	
	If ($status.success)
		$structureFolder.folder("Project").delete(Delete with contents)
		$status.package:=$structureFolder.path
	End if 
	
	LOG EVENT(Into system standard outputs; "::notice "+Timestamp+" - End packaging, status: "+JSON Stringify($status)+"\n"; Information message)
	
	