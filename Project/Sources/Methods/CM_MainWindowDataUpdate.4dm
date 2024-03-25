//%attributes = {}
// CM_MainWIndowDataUpdate
// Update EntitySelections in Main Window

C_OBJECT:C1216($prior; $prior2)
$prior:=Form:C1466.persons
$prior2:=Form:C1466.searchResults

DEFAULT TABLE:C46([Person:1])
SET QUERY DESTINATION:C396(Into current selection:K19:1)
ALL RECORDS:C47([Person:1])

Form:C1466.persons:=ds:C1482.Person.all().orderBy("names")
Form:C1466.searchResults:=Form:C1466.persons

CLEAR VARIABLE:C89($prior)
CLEAR VARIABLE:C89($prior2)

ALERT:C41("Call Form Record Count: "+String:C10(Records in table:C83([Person:1])))

