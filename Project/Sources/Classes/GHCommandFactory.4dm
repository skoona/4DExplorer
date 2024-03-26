/* Class: CHCommandFactory.4dm
* - CalledBy: GH_UserParamHandler
*/
Class constructor()
	
Function getCommand($keyword : Text)->$command : cs:C1710.GHCommand
	
	Case of 
			
		: ($keyword="checksyntax")
			$command:=cs:C1710.GHCheckSyntax.new($keyword)
			
		: ($keyword="compileproject")
			$command:=cs:C1710.GHCompileAndBuild.new($keyword)
			
		Else 
			return Null:C1517
			
	End case 
	
	
	