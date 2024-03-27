//%attributes = {}
// GH_Test_SyntaxCheck

CALL WORKER("GitHub Handler"; "GH_UserParamHandler"; "checksyntax"; True)
CALL WORKER("GitHub Handler"; "GH_UserParamHandler"; "compileproject"; True)
