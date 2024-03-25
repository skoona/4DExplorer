//%attributes = {}
// error_logger

C_OBJECT:C1216($error; $file)
C_COLLECTION:C1488($_callChain)
C_TEXT:C284($timestamp_t)

// get last error stack into a collection 
$errorStack:=New collection:C1472
ARRAY TEXT:C222($errors_at; 0)
ARRAY LONGINT:C221($codes_al; 0)
ARRAY TEXT:C222($comps_at; 0)
GET LAST ERROR STACK:C1015($codes_al; $comps_at; $errors_at)
ARRAY TO COLLECTION:C1563($errorStack; $codes_al; "code"; $comps_at; "component"; $errors_at; "error")

// get call chain into a collection 
$_callChain:=Get call chain:C1662

// get current timestamp 
$timestamp_t:=Timestamp:C1445

// put it all together 
$error:=New object:C1471
$error.timestamp:=$timestamp_t
$error.user_4d:=Current user:C182
$error.user_system:=Current system user:C484
$error.machine:=Current machine:C483
$error.method:=Error method
$error.error:=Error
$error.line:=Error line
$error.formula:=Error formula
$error.deep:=$_callChain.length
$error.callChain:=$_callChain
$error.errorStack:=$errorStack

// Store the error in a file located in the database logs folder
$timestamp_t:=Replace string:C233($timestamp_t; ":"; "-")
$file:=Folder:C1567(fk logs folder:K87:17; *).folder("error").file("error_"+$timestamp_t+".json")
$file.setText(JSON Stringify:C1217($error))

