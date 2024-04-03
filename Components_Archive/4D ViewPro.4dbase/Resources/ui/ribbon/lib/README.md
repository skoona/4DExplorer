## SpreadJS Designer Component

For complete information on how you can customize the Designer, refer to our online documentation - https://www.grapecity.com/spreadjs/docs/v14/online/spreadjs_designer_components.html

### Description
The SpreadJS Designer Component is a control that can be embedded into your web application easily.  It also provides a flexible, customizable configuration to achieve your business logic. 

The Designer Angular/React/Vue wrapper allows you to embed the component into your React/Angular/Vue framework easily.

### Customization
1. Create a command named "Welcome" and mount this command under the commandMap property of the config.  The key for CommandMap and the CustomCommand name are the same.
```js
let customCommand = {
	title: "Welcome",
	text: "Welcome",
	iconClass: "ribbon-button-welcome",
	bigButton: "true",
	commandName: "Welcome",
	execute: async (context, propertyName) => {
		alert('Welcome to new designer.');
	}
}
config.commandMap = {
	Welcome: customCommand
}
```

2. Find the location where you want your command to go, and add the Command name to the config.
For example, I've added a Welcome command in the ribbon before Undo, and the name of the command is 'Welcome'.
```js
{
    "label":"NewDesigner",
    "thumbnailClass":"welcome",
    "commandGroup":{
        "children":[
            {
                "direction":"vertical",
                "commands":[
                    "Welcome"
                ]
            }
        ]
    }
}
```

3. Pass the custom Config into the Designer.
```js
var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"), customConfig, spread);
```

### Public API

**constructor**   
Creating an Instance of Designer
```js
///* GC.Spread.Sheets.Designer.Designer(host: HTMLElement, config?: any, spread?: GC.Spread.Sheets.Workbook)
/**
 * @property {HTMLElement}  - This is the HTML area that the Designer Component mounts.
 * @property {Object} [config] - the designer config object.
 * @property {GC.Spread.Sheets.Workbook} [workbook] - the workbook instance.
 * @property {GC.Spread.Sheets.IWorkBookDefaultOptions} spread - The workbook initialization options.
 * @example
 * var designer = GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
 * var customDesigner = GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"), customConfig);
 */
```
**refresh**   
Update designer's Layout
```js
///* function refresh(): void
/**
 * @example
 * designer.refresh();
 */
```
**setConfig**   
Customize config.
```js
///* function setConfig(config: any): void
/**
 * @property {object}  - Custom spread object.
 * @example
 * designer.setConfig(config);
 */
```
**setWorkbook**   
Customize spread.
```js
///* function setWorkbook(spread: GC.Spread.Sheets.Workbook): void
/**
 * @property {object}  - Custom config object.
 * @example
 * designer.setWorkbook(spread);
 */
```
**getWorkbook**   
Get the Spread with Designer instance.
```js
///* function getWorkbook(): GC.Spread.Sheets.Workbook
/**
 * @example
 * var spread = designer.getWorkbook();
 * spread.getActiveSheet();
 */
```
**destroy**   
destroy designer
```js
///* function destroy(): void
/**
 * @example
 * designer.destroy();
 */
```

### Designer Localization
The Designer Preview currently does not include a separate resource file for localizing the strings. This feature will be included in the release version. If any string customizations need to be made now, you can update the config files.