//%attributes = {}
// CM_MainEntry  project method
// 
// Prepares a FORM object to contain all Person records and define a few key vars
// Opens the main Contacts For for User Interaction
// SEE: Project Method -- LoadSampleDataFromFaker to initialize database data

var $form : Object
var $persons; $personsFiltered : cs.PersonSelection
var $personFiltered : cs.PersonEntity
var vSearch : Text
var $mainWindow : Real

ARRAY TEXT($actionButtonObjects; 0)

DEFAULT TABLE([Person])
SET QUERY DESTINATION(Into current selection)

$persons:=ds.Person.all().orderBy("names")
$personFiltered:=$persons

// See: ToggleActions project method
// personAddPB") -- ignored as always allowed
APPEND TO ARRAY($actionButtonObjects; "personEditPB")
APPEND TO ARRAY($actionButtonObjects; "personDeletePB")
APPEND TO ARRAY($actionButtonObjects; "touchEditPB")
APPEND TO ARRAY($actionButtonObjects; "touchDeletePB")
APPEND TO ARRAY($actionButtonObjects; "touchAddPB")
APPEND TO ARRAY($actionButtonObjects; "eventEditPB")
APPEND TO ARRAY($actionButtonObjects; "eventDeletePB")
APPEND TO ARRAY($actionButtonObjects; "eventAddPB")
APPEND TO ARRAY($actionButtonObjects; "BevelButton2")

$form:=New object()
$form.persons:=$persons
$form.searchResults:=$personFiltered
$form.actionButtonsObjectsArray:=->$actionButtonObjects

$mainWindow:=Open form window("MainEntryForm")
SET WINDOW TITLE("Contact Manager")

DIALOG("MainEntryForm"; $form)
SHOW WINDOW($mainWindow)

CLEAR VARIABLE($personsFiltered)
CLEAR VARIABLE($persons)
CLEAR VARIABLE($personsFiltered)
CLEAR VARIABLE($actionButtonObjects)
CLOSE WINDOW($mainWindow)

