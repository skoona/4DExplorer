<!-- Type your summary here -->

# Class: GHCompileAndBuild
## Description
This class will compile and package the current project into a 4DZ file.

#### References
* [4D Compile project](https://doc.4d.com/4Dv20R3/4D/20-R3/Compile-project.301-6531339.en.html)

#### It is composed of:
* [Class constructor](#class-constructor)
* [Function execute](#function-execute)
* [Function compileAndBuild](#function-compileAndBuild)
* [Function package](#function-package)


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
| $command | Text | in | text "compileproject" used to initialize the GHCommand super class |

Constructs a instance.

<h3 id="function-execute">Function execute</h3>

```4D
Function execute()->$status : Object
```
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| $status | object | out | json results of check syntax operation |

Compiles and packages the project and returns a json response object with clear indicators of success and/or errors.

<h3 id="function-compileAndBuild">Function compileAndBuild</h3>

```4D
Function compileAndBuild()->$status : Object
```
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| $status | object | out | json results of check syntax operation |

Compiles the project.

<h3 id="function-package">Function package</h3>

```4D
Function package()->$status : Object
```
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| $status | object | out | json results of packaging operation |

Zips up the project artifacts into a 4DZ file.



