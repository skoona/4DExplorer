//%attributes = {}
// CM_MainEntry  project method
// 
// Prepares a FORM object to contain all Person records and define a few key vars
// Opens the main Contacts For for User Interaction
// SEE: Project Method -- LoadSampleDataFromFaker to initialize database data

C_OBJECT:C1216($form; $persons; $personsFiltered)
C_TEXT:C284(vSearch)
C_VARIANT:C1683($mainWindow)
ARRAY TEXT:C222($actionButtonObjects; 0)

DEFAULT TABLE:C46([Person:1])
SET QUERY DESTINATION:C396(Into current selection:K19:1)

$persons:=ds:C1482.Person.all().orderBy("names")
$personFiltered:=$persons

// See: ToggleActions project method
// personAddPB") -- ignored as always allowed
APPEND TO ARRAY:C911($actionButtonObjects; "personEditPB")
APPEND TO ARRAY:C911($actionButtonObjects; "personDeletePB")
APPEND TO ARRAY:C911($actionButtonObjects; "touchEditPB")
APPEND TO ARRAY:C911($actionButtonObjects; "touchDeletePB")
APPEND TO ARRAY:C911($actionButtonObjects; "touchAddPB")
APPEND TO ARRAY:C911($actionButtonObjects; "eventEditPB")
APPEND TO ARRAY:C911($actionButtonObjects; "eventDeletePB")
APPEND TO ARRAY:C911($actionButtonObjects; "eventAddPB")
APPEND TO ARRAY:C911($actionButtonObjects; "BevelButton2")

$form:=New object:C1471()
$form.persons:=$persons
$form.searchResults:=$personFiltered
$form.actionButtonsObjectsArray:=->$actionButtonObjects

$mainWindow:=Open form window:C675("MainEntryForm")
SET WINDOW TITLE:C213("Contact Manager")

DIALOG:C40("MainEntryForm"; $form)
SHOW WINDOW:C435($mainWindow)

CLEAR VARIABLE:C89($personsFiltered)
CLEAR VARIABLE:C89($persons)
CLEAR VARIABLE:C89($personsFiltered)
CLEAR VARIABLE:C89($actionButtonObjects)
CLOSE WINDOW:C154($mainWindow)

