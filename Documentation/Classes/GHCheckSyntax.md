<!-- Type your summary here -->

# Class: GHCheckSyntax
## Description
This class performs a 4D syntax check on the current project and produces an artifacts detailing the result.

#### References
* [4D Compile project](https://doc.4d.com/4Dv20R3/4D/20-R3/Compile-project.301-6531339.en.html)

#### It is composed of:
* [Class constructor](#class-constructor)
* [Function execute](#function-execute)
* [Function checkSyntax](#function-checkSyntax)


## Usage Example
```4d
see: GHPipeline_EntryPoint_P
```

<h3 id="class-constructor">Class constructor</h3>

```4D
Class constructor($command : Text)
```
| Parameter | Type | in/out | Description |
|---|---|---|---|
| $command | Text | in | text "checksyntax" used to initialize the GHCommand super class |

Constructs a instance.

<h3 id="function-execute">Function execute</h3>

```4D
Function execute()->$status : Object
```
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| $status | object | out | json results of check syntax operation |

Performs the syntax check and composes a json response object with clear indicators of success and/or errors.

<h3 id="function-checkSyntax">Function checkSyntax</h3>

```4D
Function checkSyntax($checkSyntaxOptions : Object)->$status : Object
```
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| $checkSyntaxOptions | Object | in | Compile project command options for syntax |
| $status | object | out | json results of check syntax operation |

Based on options provided performs the operation of checking code syntax.



