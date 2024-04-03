declare module GC.Spread.Sheets{
    /**
     * Specifies the cell value pattern type.
     * @enum {number}
     */
    export enum PatternType{
        /**
         * Specifies the pattern type is solid.
         */
        solid= 1,
        /**
         * Specifies the pattern type is darkGray.
         */
        darkGray= 2,
        /**
         * Specifies the pattern type is mediumGray.
         */
        mediumGray= 3,
        /**
         * Specifies the pattern type is lightGray.
         */
        lightGray= 4,
        /**
         * Specifies the pattern type is gray125.
         */
        gray125= 5,
        /**
         * Specifies the pattern type is gray0625.
         */
        gray0625= 6,
        /**
         * Specifies the pattern type is darkHorizontal.
         */
        darkHorizontal= 7,
        /**
         * Specifies the pattern type is darkVertical.
         */
        darkVertical= 8,
        /**
         * Specifies the pattern type is darkDown.
         */
        darkDown= 9,
        /**
         * Specifies the pattern type is darkUp.
         */
        darkUp= 10,
        /**
         * Specifies the pattern type is darkGrid.
         */
        darkGrid= 11,
        /**
         * Specifies the pattern type is darkTrellis.
         */
        darkTrellis= 12,
        /**
         * Specifies the pattern type is lightHorizontal.
         */
        lightHorizontal= 13,
        /**
         * Specifies the pattern type is lightVertical.
         */
        lightVertical= 14,
        /**
         * Specifies the pattern type is lightDown.
         */
        lightDown= 15,
        /**
         * Specifies the pattern type is lightUp.
         */
        lightUp= 16,
        /**
         * Specifies the pattern type is lightGrid.
         */
        lightGrid= 17,
        /**
         * Specifies the pattern type is lightTrellis.
         */
        lightTrellis= 18
    }

    module Designer{
        /**
         * Represents the default config of designer
         */
        var DefaultConfig: IDesignerConfig;
        /**
         * Represents the license key for evaluation version and production version.
         */
        var LicenseKey: string;
        /**
         * Represents the toolbar mode config of designer
         */
        var ToolBarModeConfig: IDesignerConfig;
        /**
         * Close an opening dialog.
         * @param {string} templateName - The opening template name, the template must be registered in designer.
         * @param {boolean} submitValue - Whether submit the opening template value after closing the dialog or not.
         * @example Sometimes users want to close the dialog directly without UI, they can use closeDialog and decide whether submit the values after closing the dialog.
         *   var inputCommand = {
         *       title: "Input",
         *       text: "Input",
         *       iconClass: "ribbon-button-input-text",
         *       bigButton: true,
         *       commandName: "inputText",
         *       execute: (context, propertyName) => {
         *           var dialogOption = {
         *               text: "",
         *           };
         *           GC.Spread.Sheets.Designer.showDialog("setText", dialogOption, (result) => {
         *               if (!result) {
         *                   return;
         *               }
         *               var text = result.text;
         *               var spread = context.getWorkbook();
         *               var sheet = spread.getActiveSheet();
         *               var column = sheet.getActiveColumnIndex();
         *               var row = sheet.getActiveRowIndex();
         *               sheet.setValue(row, column, text);
         *               clearInterval(showTipsInterval);
         *           }, (error) => {
         *               console.error(error);
         *           }, checkResult);
         *           var showTips = document.querySelector(".show-tips");
         *           var i = 4;
         *           var showTipsInterval = setInterval(() => {
         *               showTips.innerText = "You must input valid value within " + i + " seconds!";
         *               i--;
         *               if (i === -1) {
         *                   clearInterval(showTipsInterval);
         *                   GC.Spread.Sheets.Designer.closeDialog("setText", false);
         *               }
         *           }, 1000);
         *       }
         *   };
         *   var config = GC.Spread.Sheets.Designer.DefaultConfig;
         *   config.commandMap = {
         *       input: inputCommand,
         *   };
         *   var inputCommandGroup = {
         *       label: "input",
         *       thumbnailClass: "input",
         *       commandGroup: {
         *           children: [
         *               {
         *                   direction: "vertical",
         *                   commands: [
         *                       "input"
         *                   ]
         *               }
         *           ]
         *       }
         *   };
         *   if (config && config.ribbon) {
         *   config.ribbon[0].buttonGroups.push(inputCommandGroup);
         *   }
         *   var setTextTemplate = {
         *       title: "demo",
         *       content: [
         *           {
         *               type: "ColumnSet",
         *               children: [
         *                   {
         *                       type: "Column",
         *                       children: [
         *                           {
         *                               type: "TextBlock",
         *                               text: "Text:",
         *                           }
         *                       ]
         *                   },
         *                   {
         *                       type: "Column",
         *                       children: [
         *                           {
         *                               type: "TextEditor",
         *                               margin: "0 0 0 10px",
         *                               bindingPath: "text"
         *                           }
         *                       ]
         *                   }
         *               ]
         *           },
         *           {
         *               type: "TextBlock",
         *               text: "You must input valid value within 5 seconds!",
         *               className: "show-tips"
         *           },
         *       ]
         *   };
         *   GC.Spread.Sheets.Designer.registerTemplate("setText", setTextTemplate);
         *   function checkResult(value) {
         *       if (value.text === "") {
         *           GC.Spread.Sheets.Designer.showMessageBox("Please do not input a null value.", "Warning", GC.Spread.Sheets.Designer.MessageBoxIcon.warning);
         *           return false;
         *       } else {
         *           return true;
         *       }
         *   }
         *   var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config);
         */
        function closeDialog(templateName: string,  submitValue: boolean): void;
        /**
         * Get the designer instance of an existing HTMLElement
         * @param {HTMLElement | string} host - The target HTMLElement
         * @returns {GC.Spread.Sheets.Designer.Designer | undefined} The designer instance of an existing HTMLElement
         * @example
         * // This example will get the designer instance of an existing HTMLElement
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
         * var designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("hostDiv"));
         * var designer = GC.Spread.Sheets.Designer.findControl("hostDiv");
         */
        function findControl(host: HTMLElement | string): GC.Spread.Sheets.Designer.Designer | undefined;
        /**
         * This function will only get the command in the commandMap using the command name, or the all commands registered in commandMap.
         * @param {string | undefined} commandName - Name of command, uniquely identifies one command, if commandName is empty, will return all registered commands.
         * @returns {Object | undefined} - Command found by command name.
         * @example The user wants to custom font family.
         * var config = GC.Spread.Sheets.Designer.DefaultConfig;
         * var customCommand = GC.Spread.Sheets.Designer.getCommand("fontFamily");
         * customCommand.dropdownList.push({
         *     text: "customFont",
         *     value: "customFont"
         * });
         * if (config && config.ribbon) {
         * config.ribbon[0].buttonGroups[2].commandGroup.children[0].commands[0] = 'customFont';
         * }
         * config.commandMap = {
         *      customFont: customCommand
         * }
         * designer.setConfig(config);
         */
        function getCommand(commandName?: string): GC.Spread.Sheets.Designer.ICommand | undefined;
        /**
         * Get the global designer working resources object.
         * @returns {Object} - The designer working resources.
         * @example The user wants to change some resources in ribbon or template, they need get the origin designer res and modify it, then set it back before initializing designer.
         * var resources = GC.Spread.Sheets.Designer.getResources();
         * resources.ok = "OK!";
         * resources.formatDialog.title = "Format Dialog!"
         * resources.ribbon.home.home = "HOME!";
         * resources.ribbon.home.paste = "Paste!";
         * GC.Spread.Sheets.Designer.setResources(resources);
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
         */
        function getResources(): Object;
        /**
         * A copy of a registered template can be found through the Template name. The template should be registered to the templateMap.
         * @param {string} templateName - The template should be registered to the templateMap. a copy of a registered template can be found through the Template name.
         * @returns {Object | null} - Template found by template name
         * @example The user wants to change the title of insert formate cells Dialog in designer to 'Custom'.
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
         * var formatCellsTemplate = GC.Spread.Sheets.Designer.getTemplate("formatDialogTemplate").
         * formatCellsTemplate.title = "Custom";
         * //The same TemplateName washes out the original template.
         * GC.Spread.Sheets.Designer.registerTemplate("formatDialogTemplate", formatCellsTemplate);
         */
        function getTemplate(templateName: string): GC.Spread.Sheets.Designer.IDialogTemplate | null;
        /**
         * Register a template to templateMap so that designer can find the template.
         * @param {string} templateName - Name of template, uniquely identifies one template.
         * @param {Object} template - The template instance.
         * @example
         * //For example, the following code will open templateExample and the option will be used in the template, after click ok, will set text and set horizontal alignment.
         * var inputCommand = {
         *     title: "Input",
         *     text: "Input",
         *     iconClass: "ribbon-button-input-text",
         *     bigButton: true,
         *     commandName: "inputText",
         *     execute: (context, propertyName) => {
         *         var dialogOption = {
         *             text: "",
         *             isCenter: false,
         *         };
         *         GC.Spread.Sheets.Designer.showDialog("setText", dialogOption, (result) => {
         *             if (!result) {
         *                  return;
         *              }
         *             var text = result.text;
         *             var isCenter = result.isCenter;
         *             var spread = context.getWorkbook();
         *             var sheet = spread.getActiveSheet();
         *             var column = sheet.getActiveColumnIndex();
         *             var row = sheet.getActiveRowIndex();
         *             sheet.setValue(row, column, text);
         *             if (isCenter) {
         *                 var style = new GC.Spread.Sheets.Style();
         *                 style.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
         *                 sheet.setStyle(row, column, style);
         *             }
         *         }, (error) => {
         *             console.error(error);
         *         }, checkResult);
         *     }
         * };
         * var config = GC.Spread.Sheets.Designer.DefaultConfig;
         * config.commandMap = {
         *     input: inputCommand,
         * };
         * var inputCommandGroup = {
         *     label: "input",
         *     thumbnailClass: "input",
         *     commandGroup: {
         *         children: [
         *             {
         *                 direction: "vertical",
         *                 commands: [
         *                     "input"
         *                 ]
         *             }
         *         ]
         *     }
         * };
         * if (config && config.ribbon) {
         * config.ribbon[0].buttonGroups.push(inputCommandGroup);
         * }
         * var setTextTemplate = {
         *     title: "demo",
         *     content: [
         *         {
         *             type: "ColumnSet",
         *             children: [
         *                 {
         *                     type: "Column",
         *                     children: [
         *                         {
         *                             type: "TextBlock",
         *                             text: "Text:",
         *                         }
         *                     ]
         *                 },
         *                 {
         *                     type: "Column",
         *                     children: [
         *                         {
         *                             type: "TextEditor",
         *                             margin: "0 0 0 10px",
         *                             bindingPath: "text"
         *                         }
         *                      ]
         *                 }
         *             ]
         *         },
         *         {
         *             type: "CheckBox",
         *             bindingPath: "isCenter",
         *             text: "Center",
         *          },
         *     ]
         * };
         * GC.Spread.Sheets.Designer.registerTemplate("setText", setTextTemplate);
         * function checkResult(value) {
         *     if (value.text === "") {
         *         GC.Spread.Sheets.Designer.showMessageBox("Please do not input a null value.", "Warning", GC.Spread.Sheets.Designer.MessageBoxIcon.warning);
         *         return false;
         *     } else {
         *         return true;
         *     }
         * }
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config);
         */
        function registerTemplate(templateName: string,  template: GC.Spread.Sheets.Designer.IDialogTemplate): void;
        /**
         * Set the global designer working resources object.
         * @param {Object} - The setting designer working resources
         * @example The user wants to change some resources in ribbon or template, they need get the origin designer res and modify it, then set it back before initializing designer.
         * var resources = GC.Spread.Sheets.Designer.getResources();
         * resources.ok = "OK!";
         * resources.formatDialog.title = "Format Dialog!"
         * resources.ribbon.home.home = "HOME!";
         * resources.ribbon.home.paste = "Paste!";
         * GC.Spread.Sheets.Designer.setResources(resources);
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
         */
        function setResources(resources: Object): void;
        /**
         * This function will show a dialog with the option, the option will be used in the dialog template got by template name.
         * @param {string} templateName - The template name.
         * @param {Object} bindingData - The dialog bindingData.
         * @param {Function} successCallback - After the dialog is closed, this method executes. If the OK button is selected, the dialog data is returned, and if cancel or 'X' is selected, null is returned.
         * @param {Function} errCallback - Dialog executes this method when an exception occurs.
         * @param {Function} validCallback - The dialog callback function, will change the result or do something after click ok and closing the dialog but before return the result, then return the operated result.
         * @param {HTMLElement} popupElement - The dialog target HTMLElement which the template depends on.
         * @example
         * //For example, the following code will open templateExample and the option will be used in the template, after click ok, will set text and set horizontal alignment.
         * var inputCommand = {
         *     title: "Input",
         *     text: "Input",
         *     iconClass: "ribbon-button-input-text",
         *     bigButton: true,
         *     commandName: "inputText",
         *     execute: (context, propertyName) => {
         *         var dialogOption = {
         *             text: "",
         *             isCenter: false,
         *         };
         *         GC.Spread.Sheets.Designer.showDialog("setText", dialogOption, (result) => {
         *             if (!result) {
         *                  return;
         *              }
         *             var text = result.text;
         *             var isCenter = result.isCenter;
         *             var spread = context.getWorkbook();
         *             var sheet = spread.getActiveSheet();
         *             var column = sheet.getActiveColumnIndex();
         *             var row = sheet.getActiveRowIndex();
         *             sheet.setValue(row, column, text);
         *             if (isCenter) {
         *                 var style = new GC.Spread.Sheets.Style();
         *                 style.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
         *                 sheet.setStyle(row, column, style);
         *             }
         *         }, (error) => {
         *             console.error(error);
         *         }, checkResult);
         *     }
         * };
         * var config = GC.Spread.Sheets.Designer.DefaultConfig;
         * config.commandMap = {
         *     input: inputCommand,
         * };
         * var inputCommandGroup = {
         *     label: "input",
         *     thumbnailClass: "input",
         *     commandGroup: {
         *         children: [
         *             {
         *                 direction: "vertical",
         *                 commands: [
         *                     "input"
         *                 ]
         *             }
         *         ]
         *     }
         * };
         * if (config && config.ribbon) {
         * config.ribbon[0].buttonGroups.push(inputCommandGroup);
         * }
         * var setTextTemplate = {
         *     title: "demo",
         *     content: [
         *         {
         *             type: "ColumnSet",
         *             children: [
         *                 {
         *                     type: "Column",
         *                     children: [
         *                         {
         *                             type: "TextBlock",
         *                             text: "Text:",
         *                         }
         *                     ]
         *                 },
         *                 {
         *                     type: "Column",
         *                     children: [
         *                         {
         *                             type: "TextEditor",
         *                             margin: "0 0 0 10px",
         *                             bindingPath: "text"
         *                         }
         *                      ]
         *                 }
         *             ]
         *         },
         *         {
         *             type: "CheckBox",
         *             bindingPath: "isCenter",
         *             text: "Center",
         *          },
         *     ]
         * };
         * GC.Spread.Sheets.Designer.registerTemplate("setText", setTextTemplate);
         * function checkResult(value) {
         *     if (value.text === "") {
         *         GC.Spread.Sheets.Designer.showMessageBox("Please do not input a null value.", "Warning", GC.Spread.Sheets.Designer.MessageBoxIcon.warning);
         *         return false;
         *     } else {
         *         return true;
         *     }
         * }
         * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config);
         */
        function showDialog(templateName: string,  bindingData: Object,  successCallback: Function,  errCallback?: Function,  validCallback?: Function,  popupElement?: HTMLElement): void;
        /**
         * This function will show a messageBox with input option.
         * @param {string} text - The error text of the messageBox
         * @param {string} title - The title of the messageBox
         * @param {GC.Spread.Sheets.Designer.MessageBoxIcon} icon - The icon of the messageBox
         * @param {Function} successCallback - After dialog is closed, this method executes. The parameter "data" indicates which button is clicked, its type is GC.Spread.Sheets.Designer.MessageBoxResult, 1 is "ok", 2 is "yes", 3 is "no" and 4 is "cancel".
         * @param {Function} errCallback - Dialog executes this method when an exception occurs.
         * @param {GC.Spread.Sheets.Designer.MessageBoxButtons} buttons - The buttons of the messageBox
         * @example
         * //For example, the following code will show a messageBox with title "this is title", text "this is error text" and icon yellow triangle exclamation mark.
         * var showCommand = {
         *     title: "show",
         *     text: "show",
         *     iconClass: "ribbon-button-show",
         *     bigButton: true,
         *     commandName: "show",
         *     execute: (context, propertyName) => {
         *         GC.Spread.Sheets.Designer.showMessageBox("this is title", "this is error text", GC.Spread.Sheets.Designer.MessageBoxIcon.warning);  // Show Message Box
         *     }
         * };
         * var config = GC.Spread.Sheets.Designer.DefaultConfig;
         * config.commandMap = {
         *     showMessage: showCommand
         * };
         * var showCommandGroup = {
         *     label: "Show",
         *     thumbnailClass: "Show",
         *     commandGroup: {
         *         children: [
         *             {
         *                 direction: "vertical",
         *                 commands: [
         *                     "showMessage"
         *                 ]
         *             }
         *         ]
         *     }
         * };
         * if (config && config.ribbon) {
         * config.ribbon[0].buttonGroups.push(showCommandGroup);
         * }
         * var d = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config);
         */
        function showMessageBox(text: string,  title: string,  icon: GC.Spread.Sheets.Designer.MessageBoxIcon,  successCallback?: Function,  errCallback?: Function,  buttons?: GC.Spread.Sheets.Designer.MessageBoxButtons): void;

        export interface IBindingComponentBaseOption extends IComponentBaseOption{
            bindingPath?: string;
            mutexWith?: string;
        }


        export interface IBoxSizePickerOption extends IBindingComponentBaseOption{
            type: "BoxSizePicker";
            gapWidth: number;
            numberEditorWidth: number;
        }


        export interface IButtonComboEditorOption extends IBindingComponentBaseOption{
            type: "ButtonComboEditor";
            generateItemsFunc: (v: any) => IListGroupItemData[];
            setValueFunc?: (instance: any, v: any) => void;
            getValueFunc?: (instance: any) => any;
            buttonClassName: string;
            popupWidth: number;
        }


        export interface IButtonGroup{
            class?: string;
            label?: string;
            thumbnailClass?: string;
            indicator?: string;
            commandGroup: GC.Spread.Sheets.Designer.ICommandGroup;
            overflow?: boolean;
            overflowTitle?: string;
            buttonGroupName?: string;
        }


        export interface IButtonOption extends IBindingComponentBaseOption{
            type: "Button";
            text?: string;
            width?: number | string;
            height?: number;
            iconClass?: string;
            iconPosition?: "top" | "left";
            iconWidth?: number;
            iconHeight?: number;
            template?: string;
        }


        export interface ICalcFieldDialogEditorOption extends IBindingComponentBaseOption{
            type: "CalcFieldDialogEditor";
        }


        export interface ICalcItemDialogEditorOption extends IBindingComponentBaseOption{
            type: "CalcItemDialogEditor";
        }


        export interface ICalcItemSolveOrderDialogEditorOption extends IBindingComponentBaseOption{
            type: "CalcItemSolveOrderDialogEditor";
        }


        export interface ICheckBoxGroupItem{
            text?: string;
            value: string;
            checked?: boolean;
            visible?: boolean;
            enable?: boolean;
        }


        export interface ICheckBoxGroupOption extends IBindingComponentBaseOption{
            type: "CheckBoxGroup";
            items?: GC.Spread.Sheets.Designer.ICheckBoxGroupItem[];
            columnCount?: number;
        }


        export interface ICheckBoxOption extends IBindingComponentBaseOption{
            type: "CheckBox";
            text?: string;
            isThreeState?: boolean;
            hideIcon?: boolean;
            canChangeThreeState?: boolean;
        }


        export interface IChildrenItemBaseOption{
            key: string;
            text?: string;
            className?: string;
            children?: GC.Spread.Sheets.Designer.IComponentRenderType[];
        }


        export interface ICollapsePanelItemOption extends IChildrenItemBaseOption{
            active: boolean;
        }


        export interface ICollapsePanelOption extends IComponentBaseOption{
            type: "CollapsePanel";
            children: GC.Spread.Sheets.Designer.ICollapsePanelItemOption[];
        }


        export interface IColorComboEditorItemsOption extends IBindingComponentBaseOption{
            type: "ColorComboEditorItems";
            label: string;
            isThemeColor?: boolean;
        }


        export interface IColorComboEditorOption extends IBindingComponentBaseOption{
            type: "ColorComboEditor";
            showNoColor?: boolean;
            showMoreColor?: boolean;
            defaultColor?: string;
            isThemeColor?: boolean;
        }


        export interface IColorGroup{
            name: string;
            colors: string[][];
        }


        export interface IColorIconComboEditorOption extends IBindingComponentBaseOption{
            type: "ColorIconComboEditor";
            iconType: GC.Spread.Sheets.Designer.IconType;
            showNoColor?: boolean;
            showMoreColor?: boolean;
            isThemeColor?: boolean;
        }


        export interface IColorLineStyleComboEditorOption extends IBindingComponentBaseOption{
            type: "ColorLineStyleComboEditor";
        }


        export interface IColorPickerOption extends IBindingComponentBaseOption{
            type: "ColorPicker";
            showNoColor?: boolean;
            showMoreColor?: boolean;
            colorWidth?: number;
            colorGroups?: GC.Spread.Sheets.Designer.IColorGroup[];
            defaultColor?: string;
            themeColorList?: any;
            isThemeColor?: boolean;
        }


        export interface IColorPreviewOption extends IBindingComponentBaseOption{
            type: "ColorPreview";
            height?: number;
            defaultColor?: string;
        }


        export interface IColumnOption extends IContainerBaseOption{
            type: "Column";
            width?: string;
            text?: string;
        }


        export interface IColumnSetOption extends IComponentBaseOption{
            type: "ColumnSet";
            alignItems?: string;
            children?: GC.Spread.Sheets.Designer.IColumnOption[];
        }


        export interface ICommand{
            title?: string;
            text?: string;
            iconClass?: string;
            type?: GC.Spread.Sheets.Designer.CommandType;
            bigButton?: boolean | string;
            direction?: string;
            commandName: string;
            commandOptions?: any;
            showDropdownButton?: boolean;
            comboWidth?: number;
            comboHeight?: number;
            group?: string;
            isGroupItem?: boolean;
            textBoxWidth?: number;
            textBoxHeight?: number;
            listContent?: IListGroupItemData[];
            maxWidth?: number;
            maxHeight?: number;
            iconWidth?: number;
            iconHeight?: number;
            needAsyncUpdate?: boolean;
            visibleContext?: string;
            enableContext?: string;
            getState?: Function;
            execute?: Function;
            init?: Function;
            dropdownList?: GC.Spread.Sheets.Designer.IListGroupItemData[];
            subCommands?: string[];
            dropdownMaxWidth?: number;
            dropdownMaxHeight?:number;
            commandMap?: Object;
            keepFocusInSpread?: boolean;
            visiblePriority?: number;
            hidden?: boolean;
        }


        export interface ICommandGroup{
            commands?: string[];
            children?: GC.Spread.Sheets.Designer.ICommandGroup[];
            type?: "group" | "separator" | "dropdown";
            direction?: string;
            command?: string;
            dropdownMaxWidth?: number;
            dropdownMaxHeight?:number;
            showDropdownButton?: boolean;
            visiblePriority?: number;
            hidden?: boolean;
        }


        export interface IComponentBaseOption{
            id?: string;
            className?: string;
            visibleWhen?: string;
            enableWhen?: string;
            margin?: string;
        }


        export interface IComponentDialogButtonOption{
            text: string;
            buttonType?: "Ok" | "Cancel";
            click?: Function;
            closeAfterClick?: boolean;
            disabled?: boolean;
            visibleWhen?: string;
            bindingPath?: string;
        }


        export interface IContainerBaseOption extends IComponentBaseOption{
            children?: GC.Spread.Sheets.Designer.IComponentRenderType[];
        }


        export interface IContainerOption extends IContainerBaseOption{
            type: "Container";
            text?: string;
            attributes?: GC.Spread.Sheets.Designer.IHtmlTagAttribute[];
        }


        export interface IDataManagerColumnsList extends IBindingComponentBaseOption{
            type: "DataManagerColumnsList";
        }


        export interface IDataManagerController extends IBindingComponentBaseOption{
            type: "DataManagerController";
        }


        export interface IDataManagerTableColumnController extends IBindingComponentBaseOption{
            type: "DataManagerTableColumnController";
        }


        export interface IDataManagerTableList extends IBindingComponentBaseOption{
            type: "DataManagerTableList";
        }


        export interface IDataManagerTableListController extends IBindingComponentBaseOption{
            type: "DataManagerTableListController";
        }


        export interface IDesignerConfig{
            templateMap?: GC.Spread.Sheets.Designer.TemplateMap,
            commandMap?: GC.Spread.Sheets.Designer.CommandMap,
            quickAccessBar?: string[];
            ribbon?: GC.Spread.Sheets.Designer.IRibbonPanel[] | GC.Spread.Sheets.Designer.IRibbonPanelConfig;
            contextMenu?: string[];
            sidePanels?: GC.Spread.Sheets.Designer.ISidePanel[];
            fileMenu?: string;
        }


        export interface IDialogTemplate{
            templateName: string;
            title?: string;
            modal?: boolean;
            content: GC.Spread.Sheets.Designer.IComponentRenderType[];
            buttons?: GC.Spread.Sheets.Designer.IComponentDialogButtonOption[];
        }


        export interface IFieldListTreeOption extends IBindingComponentBaseOption{
            type: "FieldListTree";
        }


        export interface IFileSelectorOption extends IBindingComponentBaseOption{
            type: "FileSelector";
            title?: string;
            selectType?: number;
            style?: string;
            editorType?: string;
            width?: number;
            text?: string;
            clearOldSelWhenValueIsEmptyStr?: boolean;
            noPreview?: boolean;
        }


        export interface IFillDialogOption extends IBindingComponentBaseOption{
            type: "fillEditor";
        }


        export interface IFillEffectOption extends IBindingComponentBaseOption{
            type: "GradientColorEditor";
        }


        export interface IFlexContainerOption extends IContainerBaseOption{
            type: "FlexContainer";
        }


        export interface IFocusableComponentOption extends IBindingComponentBaseOption{
            needFocus?:boolean;
        }


        export interface IFontDialogEditorOption extends IBindingComponentBaseOption{
            type: "FontDialogEditor";
        }


        export interface IFontEffectOption extends IBindingComponentBaseOption{
            type: "FontEffect";
        }


        export interface IFontEffectsAndUnderlineOption extends IBindingComponentBaseOption{
            type: "FontEffectsAndUnderline";
        }


        export interface IFontPickerOption extends IBindingComponentBaseOption{
            type: "FontPicker";
            showFontFamily?: boolean;
            showFontSize?: boolean;
            showFontWeight?: boolean;
            showFontStyle?: boolean;
            showForeColor?: boolean;
            showUnderline?: boolean;
            showDoubleUnderline?: boolean;
            isFontSizeNumber?: boolean;
            isThemeColor?: boolean;
        }


        export interface IFontPreviewOption extends IBindingComponentBaseOption{
            type: "FontPreview";
        }


        export interface IFunctionLambdaEditorOption extends IBindingComponentBaseOption{
            type: "functionLambdaEditor";
        }


        export interface IFunctionLetEditorOption extends IBindingComponentBaseOption{
            type: "functionLetEditor";
        }


        export interface IGaugeColorComboEditorItemsOption extends IBindingComponentBaseOption{
            type: "GaugeColorComboEditorItems";
            label: string;
        }


        export interface IGradientColorStopsEditorOption extends IBindingComponentBaseOption{
            type: "GradientColorStopsEditor";
        }


        export interface IHtmlTagAttribute{
            key: string;
            value: string;
        }


        export interface IImageSparklineEditorOption extends IBindingComponentBaseOption{
            type: "ImageSparklineEditor";
        }


        export interface ILabelContainerOption extends IContainerBaseOption{
            type: "LabelContainer";
            text?: string;
            size?: ISize;
            showText?: boolean;
        }


        export interface ILabelLineOption extends IComponentBaseOption{
            type: "LabelLine";
            text?: string;
            displayLine?: boolean;
            showText?: boolean;
        }


        export interface IListComboEditorOption extends IBindingComponentBaseOption{
            type: "ListComboEditor";
            items?: GC.Spread.Sheets.Designer.IListSubItemData[];
            popupWidth?: number;
            popupClassName?: string;
            editable?: boolean;
        }


        export interface IListEditorOption extends IBindingComponentBaseOption{
            type: "ListEditor";
            items?: GC.Spread.Sheets.Designer.IListSubItemData[];
            keyboardSearch?: boolean;
            allowSelection?: boolean;
        }


        export interface IListGroupItemData extends IListItemData{
            groupName?: string;
            groupItems?: GC.Spread.Sheets.Designer.IListItemData[];
            contextMenu?: GC.Spread.Sheets.Designer.IListItemData[];
        }


        export interface IListItemData extends IListSubItemData{
            subListWidth?: number;
        }


        export interface IListOption extends IBindingComponentBaseOption{
            type: "List";
            items?: GC.Spread.Sheets.Designer.IListSubItemData[];
            ListDirection?: "horizontal" | "vertical";
            allowSelection?: boolean;
            wrap?: boolean;
            keyboardSearch?: boolean;
            dblClickSubmit?: boolean;
            maxWidth?: number;
            maxHeight?: number;
        }


        export interface IListSubItemData{
            text?: string;
            textClass?: string;
            value?: string | number;
            unionValue?: boolean;
            iconClass?: string;
            subItems?: GC.Spread.Sheets.Designer.IListGroupItemData[];
            type?: "listItem" | "separator";
            dom?: HTMLElement;
            bigIcon?: boolean;
            iconWidth?: number;
            iconHeight?: number;
            tip?: string;
            selected?: boolean;
            visible?: boolean;
            enabled?: boolean;
            className?: string;
            commandName?: string;
        }


        export interface IMarginEditorOption extends IBindingComponentBaseOption{
            type: "MarginEditor";
        }


        export interface IMarkItem{
            style?: { [key: string]: string };
            label: any;
        }


        export interface IMultiColumnListOption extends IBindingComponentBaseOption{
            type: "MultiColumnList",
            columns?: GC.Spread.Sheets.Designer.IMultiListColumn[];
            itemHeight?: number;
            needUpdateSelection?: boolean; // whether need update selection effect while clicking
        }


        export interface IMultiColumnPickerEditorOption extends IBindingComponentBaseOption{
            type: "multiColumnPickerEditor";
        }


        export interface IMultiListColumn{
            id: string;
            text?: string;
            width?: number | string;
            className?: string;
            render?: Function;
        }


        export interface IMultiSelectListOption extends IFocusableComponentOption{
            type: "MultiSelectList";
            items?: GC.Spread.Sheets.Designer.IListSubItemData[];
            allowMouseScroll?: boolean;
            dblClickSubmit?: boolean;
            selectedValues?: any[];
            selectedIndexes?: number[];
        }


        export interface INumberEditorOption extends IBindingComponentBaseOption{
            type: "NumberEditor";
            ruleType?: GC.Spread.Sheets.Designer.RuleType;
            min?: number;
            max?: number;
            step?: number;
            precision?: number;
            notNeedSpin?: boolean;
            disableWheelEvent?: boolean;
        }


        export interface IPatternTypeComboEditorOption extends IBindingComponentBaseOption{
            type: "patternStyleComboEditor";
            items: GC.Spread.Sheets.Designer.IPatternTypePickItemOption[];
            defaultColor?: string;
        }


        export interface IPatternTypePickerOption extends IComponentBaseOption{
            type: 'patternTypePicker';
            items: GC.Spread.Sheets.Designer.IPatternTypePickItemOption[];
        }


        export interface IPatternTypePickItemOption{
            value: GC.Spread.Sheets.PatternType;
            iconClass: string;
            title?: string;
        }


        export interface IPatternTypePreviewOption extends IBindingComponentBaseOption{
            type: "patternPreview";
        }


        export interface IRadioItemData{
            text: string;
            value: number | string | boolean;
            alwaysEnabled?: boolean;
            iconClass?: string;
            template?: GC.Spread.Sheets.Designer.IComponentRenderType;
            space?: number;
        }


        export interface IRadioOption extends IBindingComponentBaseOption{
            type: "Radio";
            title?: string;
            columnCount?: number;
            items: GC.Spread.Sheets.Designer.IRadioItemData[];
        }


        export interface IRangeSelectOption extends IBindingComponentBaseOption{
            type: "RangeSelect";
            title?: string;
            needEqualSign?: boolean
            absoluteReference?: boolean,
            needSheetName?: boolean,
            isOneRange?: boolean,
            isSingleCell?: boolean,
            text?: string;
            canSingleCellInputCustomValue?: boolean;
        }


        export interface IRangeTemplateEditorOption extends GC.Spread.Sheets.Designer.IBindingComponentBaseOption{
            type: "rangeTemplateEditor";
        }


        export interface IResetTextEditorOption extends IBindingComponentBaseOption{
            type: "ResetTextEditor";
            contentType?: number;
        }


        export interface IRibbonPanel{
            id: string;
            text: string;
            buttonGroups: GC.Spread.Sheets.Designer.IButtonGroup[];
            visibleWhen?: string;
            overflow?: boolean;
            _attr?: string;
        }


        export interface IRibbonPanelConfig{
            panels: GC.Spread.Sheets.Designer.IRibbonPanel[];
            ribbonHeight?: number;
        }


        export interface ISheetListComboEditorOption extends IBindingComponentBaseOption{
            type: "sheetListComboEditor";
            items?: IListSubItemData[];
            popupWidth?: number;
            popupClassName?: string;
        }


        export interface ISidePanel{
            position: "left" | "right" | "top" | "bottom" | "full";
            width?: string;
            command?: string;
            allowResize?: boolean;
            showCloseButton?: boolean;
            uiTemplate: string;
            classList?: string[];
        }


        export interface ISize{
            width: number;
            height: number;
        }


        export interface ISliderOption extends IBindingComponentBaseOption{
            type: "Slider";
            min?: number;
            max?: number;
            prefixCls?: string;
            dots?: boolean;
            range?: boolean;
            disabled?: boolean;
            step?: number;
            direction?: "horizontal" | "vertical";
            included?: boolean;
            marks?: { [kye: string]: GC.Spread.Sheets.Designer.IMarkItem };
            tooltipVisible?: boolean;
            width?: number;
            height?: number;
        }


        export interface ISortColorComboEditorOption extends IBindingComponentBaseOption{
            type: "SortColorComboEditor";
        }


        export interface ISortColorEditorOption extends IBindingComponentBaseOption{
            type: "SortColorEditor";
        }


        export interface ISpreadContainerOption extends IBindingComponentBaseOption{
            type: "SpreadContainer";
            width?: string;
            height?: string;
        }


        export interface ISpreadTemplateOption extends IBindingComponentBaseOption{
            type: "SpreadTemplate";
            width?: string;
            height?: string;
            data: any;
            initSpreadFunctions?: ((spread: Object, data: any) => void)[];
            updateValueFunctions?: ((spread: Object, data: any) => any)[];
            updateUIFunctions?: ((spread: Object, data: any) => void)[];
            isEqualValueFunctions?: ((value: any, oldValue: any) => boolean)[];
        }


        export interface ITabControlItemOption extends IChildrenItemBaseOption{
            tip?: string;
            iconClass?: string;
            selectedClass?: string;
        }


        export interface ITabControlOption extends IBindingComponentBaseOption{
            type: "TabControl";
            width?: number;
            height?: number;
            children?: GC.Spread.Sheets.Designer.ITabControlItemOption[];
            showHeader?: boolean;
            activeTab?: string;
            showTabList?: string[];
        }


        export interface ITableSheetPanelEditor extends IBindingComponentBaseOption{
            type: "TableSheetPanelEditor";
        }


        export interface ITabSelectorOption extends IBindingComponentBaseOption{
            type: "TabSelector";
        }


        export interface ITextBlockOption extends IBindingComponentBaseOption{
            type: "TextBlock";
            text?: string;
            style?: string;
            tip?: string;
        }


        export interface ITextEditorOption extends IFocusableComponentOption{
            type: "TextEditor";
            multiLine?: boolean;
            resize?: boolean;
            style?: string;
            editorType?: string;
            fireEventOnInput?: boolean;
            isPassword?: boolean;
            placeholder?: string;
        }


        export type CommandMap = {
            [key in string]: GC.Spread.Sheets.Designer.ICommand;
        }


        export type CommandType = "button" | "dropdown" | "separator" | "checkbox" | "comboBox" | "text" | "spinner" | "list-preview" | "colorPicker" | "groupHeader" | "chartFormat" | "tableFooter" | "SparklineColorPicker" | "textBox" | "listContent" | string;


        export type IComponentRenderType = GC.Spread.Sheets.Designer.INumberEditorOption
            | GC.Spread.Sheets.Designer.IRadioOption
            | GC.Spread.Sheets.Designer.IFileSelectorOption
            | GC.Spread.Sheets.Designer.IResetTextEditorOption
            | GC.Spread.Sheets.Designer.ISliderOption
            | GC.Spread.Sheets.Designer.ITextBlockOption
            | GC.Spread.Sheets.Designer.ITextEditorOption
            | GC.Spread.Sheets.Designer.IColumnOption
            | GC.Spread.Sheets.Designer.IColumnSetOption
            | GC.Spread.Sheets.Designer.IFlexContainerOption
            | GC.Spread.Sheets.Designer.ILabelLineOption
            | GC.Spread.Sheets.Designer.IButtonOption
            | GC.Spread.Sheets.Designer.ILabelContainerOption
            | GC.Spread.Sheets.Designer.ICheckBoxOption
            | GC.Spread.Sheets.Designer.IContainerOption
            | GC.Spread.Sheets.Designer.IListOption
            | GC.Spread.Sheets.Designer.IMultiSelectListOption
            | GC.Spread.Sheets.Designer.ITabControlOption
            | GC.Spread.Sheets.Designer.IRangeSelectOption
            | GC.Spread.Sheets.Designer.IColorPickerOption
            | GC.Spread.Sheets.Designer.IListComboEditorOption
            | GC.Spread.Sheets.Designer.IListEditorOption
            | GC.Spread.Sheets.Designer.IFontPickerOption
            | GC.Spread.Sheets.Designer.IFontDialogEditorOption
            | GC.Spread.Sheets.Designer.IColorLineStyleComboEditorOption
            | GC.Spread.Sheets.Designer.IColorIconComboEditorOption
            | GC.Spread.Sheets.Designer.IColorComboEditorItemsOption
            | GC.Spread.Sheets.Designer.IColorPreviewOption
            | GC.Spread.Sheets.Designer.ICollapsePanelOption
            | GC.Spread.Sheets.Designer.ICheckBoxGroupOption
            | GC.Spread.Sheets.Designer.IColorComboEditorOption
            | GC.Spread.Sheets.Designer.IFillDialogOption
            | GC.Spread.Sheets.Designer.IFillEffectOption
            | GC.Spread.Sheets.Designer.IPatternTypeComboEditorOption
            | GC.Spread.Sheets.Designer.IPatternTypePickerOption
            | GC.Spread.Sheets.Designer.IPatternTypePreviewOption
            | GC.Spread.Sheets.Designer.ISheetListComboEditorOption
            | GC.Spread.Sheets.Designer.IMultiColumnPickerEditorOption
            | GC.Spread.Sheets.Designer.IFunctionLetEditorOption
            | GC.Spread.Sheets.Designer.IFunctionLambdaEditorOption
            | GC.Spread.Sheets.Designer.IFontEffectsAndUnderlineOption
            | GC.Spread.Sheets.Designer.IFontEffectOption
            | GC.Spread.Sheets.Designer.IFontPreviewOption
            | GC.Spread.Sheets.Designer.IGaugeColorComboEditorItemsOption
            | GC.Spread.Sheets.Designer.IBoxSizePickerOption
            | GC.Spread.Sheets.Designer.ITabSelectorOption
            | GC.Spread.Sheets.Designer.IGradientColorStopsEditorOption
            | GC.Spread.Sheets.Designer.IButtonComboEditorOption
            | GC.Spread.Sheets.Designer.IImageSparklineEditorOption
            | GC.Spread.Sheets.Designer.ICalcFieldDialogEditorOption
            | GC.Spread.Sheets.Designer.IFieldListTreeOption
            | GC.Spread.Sheets.Designer.ISpreadContainerOption
            | GC.Spread.Sheets.Designer.ISortColorComboEditorOption
            | GC.Spread.Sheets.Designer.ISortColorEditorOption
            | GC.Spread.Sheets.Designer.IMultiColumnListOption
            | GC.Spread.Sheets.Designer.IMarginEditorOption
            | GC.Spread.Sheets.Designer.ISpreadTemplateOption
            | GC.Spread.Sheets.Designer.IDataManagerController
            | GC.Spread.Sheets.Designer.IDataManagerTableListController
            | GC.Spread.Sheets.Designer.IDataManagerTableColumnController
            | GC.Spread.Sheets.Designer.IDataManagerTableList
            | GC.Spread.Sheets.Designer.IDataManagerColumnsList
            | GC.Spread.Sheets.Designer.ITableSheetPanelEditor
            ;


        export type IconType = "foreColor" | "backColor" | "sparklineColor";


        export type RuleType = "Defaults" | "Float" | "Currency"   | "Percent" ;


        export type TemplateMap = {
            [key in string]: GC.Spread.Sheets.Designer.IDialogTemplate;
        }

        /**
         * @enum {number}
         * This enum is used to judge the import file type
         */
        export enum FileType{
            /**
             * Specifies the import file type is json.
             */
            Json= 1,
            /**
             * Specifies the import file type is excel.
             */
            Excel= 2,
            /**
             * Specifies the import file type is csv.
             */
            Csv= 3
        }

        /**
         * @enum {number}
         * This enum is used to judge the MessageBoxButtons type
         */
        export enum MessageBoxButtons{
            /**
             * Specifies the button type of messageBox is ok
             */
            ok= 0,
            /**
             * Specifies the button type of messageBox is okCancel
             */
            okCancel= 1,
            /**
             * Specifies the button type of messageBox is yesNoCancel
             */
            yesNoCancel= 2
        }

        /**
         * @enum {number}
         * This enum is used to judge the messageBoxIcon type
         */
        export enum MessageBoxIcon{
            /**
             * Specifies the icon type of messageBox is info
             */
            info= 1,
            /**
             * Specifies the icon type of messageBox is warning
             */
            warning= 2,
            /**
             * Specifies the icon type of messageBox is error
             */
            error= 3
        }

        /**
         * @enum {number}
         * This enum is used to judge the MessageBoxResult type
         */
        export enum MessageBoxResult{
            /**
             * Specifies the result type of messageBox is none
             */
            none= 0,
            /**
             * Specifies the result type of messageBox is ok
             */
            ok= 1,
            /**
             * Specifies the result type of messageBox is yes
             */
            yes= 2,
            /**
             * Specifies the result type of messageBox is no
             */
            no= 3,
            /**
             * Specifies the result type of messageBox is cancel
             */
            cancel= 4
        }


        export class AtomicComponentBase<ValueType, OptionsType>{
            /**
             * Represent a abstract class define atomical component.
             * @class
             * @param {HTMLDivElement} host - This is the HTML area that the Component mounts.
             * @param {Object} options - The component options.
             */
            constructor(host: HTMLElement,  options: OptionsType);
            /**
             * set inner html here. will invoke when mount host to DOM.
             */
            getTemplate(options: OptionsType): string;
            /**
             * invoke when component will destroy.
             */
            onDestroy(host: HTMLElement): void;
            /**
             * Invoke this function when value status changed.
             */
            onEnableChanged(prevEnable: boolean,  nextEnable: boolean,  host: HTMLElement,  options: OptionsType): void;
            /**
             * invoke when component is initializing itself.
             */
            onInit(options: OptionsType): void;
            /**
             * invoke when component's host is append to DOM tree.
             */
            onMounted(host: HTMLElement,  options: OptionsType): void;
            /**
             *Invoke this function when enable status changed.
             */
            onValueChanged(prevValue: ValueType,  nextValue: ValueType,  host: HTMLElement,  options: OptionsType): void;
            /**
             * raise the value changed event to Designer, which will call the execute function of command.
             */
            raiseValueChanged(): void;
            /**
             * get the latest component value. Invoked when framework needs component value.
             */
            updateValue(host: HTMLElement,  options: OptionsType): ValueType;
        }

        export class CommandNames{
            /**
             * Defines the command name supported in SpreadDesigner.
             * @class
             */
            constructor();
            /**
             * Get the command name AccountingFormat.
             * @name GC.Spread.Sheets.Designer#AccountingFormat
             * @example
             * // This example get the AccountingFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AccountingFormat);
             */
            static AccountingFormat: string;
            /**
             * Get the command name Active.
             * @name GC.Spread.Sheets.Designer#Active
             * @example
             * // This example get the Active by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Active);
             */
            static Active: string;
            /**
             * Get the command name AddCellState.
             * @name GC.Spread.Sheets.Designer#AddCellState
             * @example
             * // This example get the AddCellState by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AddCellState);
             */
            static AddCellState: string;
            /**
             * Get the command name AddChartElement.
             * @name GC.Spread.Sheets.Designer#AddChartElement
             * @example
             * // This example get the AddChartElement by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AddChartElement);
             */
            static AddChartElement: string;
            /**
             * Get the command name Alignment.
             * @name GC.Spread.Sheets.Designer#Alignment
             * @example
             * // This example get the Alignment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Alignment);
             */
            static Alignment: string;
            /**
             * Get the command name AlignmentMergeList.
             * @name GC.Spread.Sheets.Designer#AlignmentMergeList
             * @example
             * // This example get the AlignmentMergeList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AlignmentMergeList);
             */
            static AlignmentMergeList: string;
            /**
             * Get the command name AllBorder.
             * @name GC.Spread.Sheets.Designer#AllBorder
             * @example
             * // This example get the AllBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AllBorder);
             */
            static AllBorder: string;
            /**
             * Get the command name AllowAddNew.
             * @name GC.Spread.Sheets.Designer#AllowAddNew
             * @example
             * // This example get the AllowAddNew by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AllowAddNew);
             */
            static AllowAddNew: string;
            /**
             * Get the command name AlternatingBlankRowStep.
             * @name GC.Spread.Sheets.Designer#AlternatingBlankRowStep
             * @example
             * // This example get the AlternatingBlankRowStep by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AlternatingBlankRowStep);
             */
            static AlternatingBlankRowStep: string;
            /**
             * Get the command name AlternatingFillRowStep.
             * @name GC.Spread.Sheets.Designer#AlternatingFillRowStep
             * @example
             * // This example get the AlternatingFillRowStep by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AlternatingFillRowStep);
             */
            static AlternatingFillRowStep: string;
            /**
             * Get the command name AlternatingRowStyle.
             * @name GC.Spread.Sheets.Designer#AlternatingRowStyle
             * @example
             * // This example get the AlternatingRowStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AlternatingRowStyle);
             */
            static AlternatingRowStyle: string;
            /**
             * Get the command name AreaChart.
             * @name GC.Spread.Sheets.Designer#AreaChart
             * @example
             * // The example get the AreaChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AreaChart);
             */
            static AreaChart: string;
            /**
             * Get the command name AreaChartGroup.
             * @name GC.Spread.Sheets.Designer#AreaChartGroup
             * @example
             * // The example get the AreaChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AreaChartGroup);
             */
            static AreaChartGroup: string;
            /**
             * Get the command name AreaChartPanel.
             * @name GC.Spread.Sheets.Designer#AreaChartPanel
             * @example
             * // This example get the AreaChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AreaChartPanel);
             */
            static AreaChartPanel: string;
            /**
             * Get the command name AreaStacked100Chart.
             * @name GC.Spread.Sheets.Designer#AreaStacked100Chart
             * @example
             * // The example get the AreaStacked100Chart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AreaStacked100Chart);
             */
            static AreaStacked100Chart: string;
            /**
             * Get the command name AreaStackedChart.
             * @name GC.Spread.Sheets.Designer#AreaStackedChart
             * @example
             * // The example get the AreaStackedChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AreaStackedChart);
             */
            static AreaStackedChart: string;
            /**
             * Get the command name AutoGenerateLabel.
             * @name GC.Spread.Sheets.Designer#AutoGenerateLabel
             * @example
             * // This example get the AutoGenerateLabel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoGenerateLabel);
             */
            static AutoGenerateLabel: string;
            /**
             * Get the command name AutoOutline.
             * @name GC.Spread.Sheets.Designer#AutoOutline
             * @example
             * // This example get the AutoOutline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoOutline);
             */
            static AutoOutline: string;
            /**
             * Get the command name AutoSumAverage.
             * @name GC.Spread.Sheets.Designer#AutoSumAverage
             * @example
             * // This example get the AutoSumAverage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoSumAverage);
             */
            static AutoSumAverage: string;
            /**
             * Get the command name AutoSumCountNumber.
             * @name GC.Spread.Sheets.Designer#AutoSumCountNumber
             * @example
             * // This example get the AutoSumCountNumber by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoSumCountNumber);
             */
            static AutoSumCountNumber: string;
            /**
             * Get the command name AutoSumMax.
             * @name GC.Spread.Sheets.Designer#AutoSumMax
             * @example
             * // This example get the AutoSumMax by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoSumMax);
             */
            static AutoSumMax: string;
            /**
             * Get the command name AutoSumMin.
             * @name GC.Spread.Sheets.Designer#AutoSumMin
             * @example
             * // This example get the AutoSumMin by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AutoSumMin);
             */
            static AutoSumMin: string;
            /**
             * Get the command name Axes.
             * @name GC.Spread.Sheets.Designer#Axes
             * @example
             * // This example get the Axes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Axes);
             */
            static Axes: string;
            /**
             * Get the command name AxisTitles.
             * @name GC.Spread.Sheets.Designer#AxisTitles
             * @example
             * // This example get the AxisTitles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.AxisTitles);
             */
            static AxisTitles: string;
            /**
             * Get the command name BackColor.
             * @name GC.Spread.Sheets.Designer#BackColor
             * @example
             * // This example get the BackColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BackColor);
             */
            static BackColor: string;
            /**
             * Get the command name Background.
             * @name GC.Spread.Sheets.Designer#Background
             * @example
             * // This example get the Background by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Background);
             */
            static Background: string;
            /**
             * Get the command name BarChartGroup.
             * @name GC.Spread.Sheets.Designer#BarChartGroup
             * @example
             * // The example get the BarChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BarChartGroup);
             */
            static BarChartGroup: string;
            /**
             * Get the command name BarChartPanel.
             * @name GC.Spread.Sheets.Designer#BarChartPanel
             * @example
             * // This example get the BarChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BarChartPanel);
             */
            static BarChartPanel: string;
            /**
             * Get the command name BarCodeSetting.
             * @name GC.Spread.Sheets.Designer#BarCodeSetting
             * @example
             * // This example get the BarCodeSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BarCodeSetting);
             */
            static BarCodeSetting: string;
            /**
             * Get the command name BarSparklineGroup.
             * @name GC.Spread.Sheets.Designer#BarSparklineGroup
             * @example
             * // The example get the BarSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BarSparklineGroup);
             */
            static BarSparklineGroup: string;
            /**
             * Get the command name Border.
             * @name GC.Spread.Sheets.Designer#Border
             * @example
             * // This example get the Border by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Border);
             */
            static Border: string;
            /**
             * Get the command name BottomAlign.
             * @name GC.Spread.Sheets.Designer#BottomAlign
             * @example
             * // This example get the BottomAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BottomAlign);
             */
            static BottomAlign: string;
            /**
             * Get the command name BottomBorder.
             * @name GC.Spread.Sheets.Designer#BottomBorder
             * @example
             * // This example get the BottomBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BottomBorder);
             */
            static BottomBorder: string;
            /**
             * Get the command name BottomDoubleBorder.
             * @name GC.Spread.Sheets.Designer#BottomDoubleBorder
             * @example
             * // This example get the BottomDoubleBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BottomDoubleBorder);
             */
            static BottomDoubleBorder: string;
            /**
             * Get the command name Breaks.
             * @name GC.Spread.Sheets.Designer#Breaks
             * @example
             * // This example get the Breaks by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Breaks);
             */
            static Breaks: string;
            /**
             * Get the command name BubbleChart.
             * @name GC.Spread.Sheets.Designer#BubbleChart
             * @example
             * // The example get the BubbleChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BubbleChart);
             */
            static BubbleChart: string;
            /**
             * Get the command name BubbleChartGroup.
             * @name GC.Spread.Sheets.Designer#BubbleChartGroup
             * @example
             * // The example get the BubbleChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.BubbleChartGroup);
             */
            static BubbleChartGroup: string;
            /**
             * Get the command name ButtonListCellType.
             * @name GC.Spread.Sheets.Designer#ButtonListCellType
             * @example
             * // This example get the ButtonListCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ButtonListCellType);
             */
            static ButtonListCellType: string;
            /**
             * Get the command name CalculatorCellType.
             * @name GC.Spread.Sheets.Designer#CalculatorCellType
             * @example
             * // This example get the CalculatorCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CalculatorCellType);
             */
            static CalculatorCellType: string;
            /**
             * Get the command name CalendarSparklineGroup.
             * @name GC.Spread.Sheets.Designer#CalendarSparklineGroup
             * @example
             * // The example get the CalendarSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CalendarSparklineGroup);
             */
            static CalendarSparklineGroup: string;
            /**
             * Get the command name CancelTableSheetChanges.
             * @name GC.Spread.Sheets.Designer#CancelTableSheetChanges
             * @example
             * // This example get the CancelTableSheetChanges by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CancelTableSheetChanges);
             */
            static CancelTableSheetChanges: string;
            /**
             * Get the command name CaptionName.
             * @name GC.Spread.Sheets.Designer#CaptionName
             * @example
             * // This example get the CaptionName by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CaptionName);
             */
            static CaptionName: string;
            /**
             * Get the command name CellDropdowns.
             * @name GC.Spread.Sheets.Designer#CellDropdowns
             * @example
             * // This example get the CellDropdowns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellDropdowns);
             */
            static CellDropdowns: string;
            /**
             * Get the command name CellEditors.
             * @name GC.Spread.Sheets.Designer#CellEditors
             * @example
             * // This example get the CellEditors by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellEditors);
             */
            static CellEditors: string;
            /**
             * Get the command name CellsDelete.
             * @name GC.Spread.Sheets.Designer#CellsDelete
             * @example
             * // This example get the CellsDelete by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsDelete);
             */
            static CellsDelete: string;
            /**
             * Get the command name CellsDeleteCell.
             * @name GC.Spread.Sheets.Designer#CellsDeleteCell
             * @example
             * // This example get the CellsDeleteCell by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsDeleteCell);
             */
            static CellsDeleteCell: string;
            /**
             * Get the command name CellsDeleteSheet.
             * @name GC.Spread.Sheets.Designer#CellsDeleteSheet
             * @example
             * // This example get the CellsDeleteSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsDeleteSheet);
             */
            static CellsDeleteSheet: string;
            /**
             * Get the command name CellsDeleteSheetColumn.
             * @name GC.Spread.Sheets.Designer#CellsDeleteSheetColumn
             * @example
             * // This example get the CellsDeleteSheetColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsDeleteSheetColumn);
             */
            static CellsDeleteSheetColumn: string;
            /**
             * Get the command name CellsDeleteSheetRow.
             * @name GC.Spread.Sheets.Designer#CellsDeleteSheetRow
             * @example
             * // This example get the CellsDeleteSheetRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsDeleteSheetRow);
             */
            static CellsDeleteSheetRow: string;
            /**
             * Get the command name CellsFormat.
             * @name GC.Spread.Sheets.Designer#CellsFormat
             * @example
             * // This example get the CellsFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormat);
             */
            static CellsFormat: string;
            /**
             * Get the command name CellsFormatAutoFitColumnWidth.
             * @name GC.Spread.Sheets.Designer#CellsFormatAutoFitColumnWidth
             * @example
             * // This example get the CellsFormatAutoFitColumnWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatAutoFitColumnWidth);
             */
            static CellsFormatAutoFitColumnWidth: string;
            /**
             * Get the command name CellsFormatAutoFitRowHeight.
             * @name GC.Spread.Sheets.Designer#CellsFormatAutoFitRowHeight
             * @example
             * // This example get the CellsFormatAutoFitRowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatAutoFitRowHeight);
             */
            static CellsFormatAutoFitRowHeight: string;
            /**
             * Get the command name CellsFormatColumnWidth.
             * @name GC.Spread.Sheets.Designer#CellsFormatColumnWidth
             * @example
             * // This example get the CellsFormatColumnWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatColumnWidth);
             */
            static CellsFormatColumnWidth: string;
            /**
             * Get the command name CellsFormatDefaultHeight.
             * @name GC.Spread.Sheets.Designer#CellsFormatDefaultHeight
             * @example
             * // This example get the CellsFormatDefaultHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatDefaultHeight);
             */
            static CellsFormatDefaultHeight: string;
            /**
             * Get the command name CellsFormatDefaultWidth.
             * @name GC.Spread.Sheets.Designer#CellsFormatDefaultWidth
             * @example
             * // This example get the CellsFormatDefaultWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatDefaultWidth);
             */
            static CellsFormatDefaultWidth: string;
            /**
             * Get the command name CellsFormatHideColumns.
             * @name GC.Spread.Sheets.Designer#CellsFormatHideColumns
             * @example
             * // This example get the CellsFormatHideColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatHideColumns);
             */
            static CellsFormatHideColumns: string;
            /**
             * Get the command name CellsFormatHideRows.
             * @name GC.Spread.Sheets.Designer#CellsFormatHideRows
             * @example
             * // This example get the CellsFormatHideRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatHideRows);
             */
            static CellsFormatHideRows: string;
            /**
             * Get the command name CellsFormatLockCells.
             * @name GC.Spread.Sheets.Designer#CellsFormatLockCells
             * @example
             * // This example get the CellsFormatLockCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatLockCells);
             */
            static CellsFormatLockCells: string;
            /**
             * Get the command name CellsFormatProtectSheet.
             * @name GC.Spread.Sheets.Designer#CellsFormatProtectSheet
             * @example
             * // This example get the CellsFormatProtectSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatProtectSheet);
             */
            static CellsFormatProtectSheet: string;
            /**
             * Get the command name CellsFormatRowHeight.
             * @name GC.Spread.Sheets.Designer#CellsFormatRowHeight
             * @example
             * // This example get the CellsFormatRowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatRowHeight);
             */
            static CellsFormatRowHeight: string;
            /**
             * Get the command name CellsFormatUnhideColumns.
             * @name GC.Spread.Sheets.Designer#CellsFormatUnhideColumns
             * @example
             * // This example get the CellsFormatUnhideColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatUnhideColumns);
             */
            static CellsFormatUnhideColumns: string;
            /**
             * Get the command name CellsFormatUnhideRows.
             * @name GC.Spread.Sheets.Designer#CellsFormatUnhideRows
             * @example
             * // This example get the CellsFormatUnhideRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatUnhideRows);
             */
            static CellsFormatUnhideRows: string;
            /**
             * Get the command name CellsFormatUnLockCells.
             * @name GC.Spread.Sheets.Designer#CellsFormatUnLockCells
             * @example
             * // This example get the CellsFormatUnLockCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatUnLockCells);
             */
            static CellsFormatUnLockCells: string;
            /**
             * Get the command name CellsFormatUnprotectSheet.
             * @name GC.Spread.Sheets.Designer#CellsFormatUnprotectSheet
             * @example
             * // This example get the CellsFormatUnprotectSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsFormatUnprotectSheet);
             */
            static CellsFormatUnprotectSheet: string;
            /**
             * Get the command name CellsInsert.
             * @name GC.Spread.Sheets.Designer#CellsInsert
             * @example
             * // This example get the CellsInsert by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellsInsert);
             */
            static CellsInsert: string;
            /**
             * Get the command name CellStates.
             * @name GC.Spread.Sheets.Designer#CellStates
             * @example
             * // This example get the CellStates by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellStates);
             */
            static CellStates: string;
            /**
             * Get the command name CellStyles.
             * @name GC.Spread.Sheets.Designer#CellStyles
             * @example
             * // This example get the CellStyles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellStyles);
             */
            static CellStyles: string;
            /**
             * Get the command name CellStylesListContent.
             * @name GC.Spread.Sheets.Designer#CellStylesListContent
             * @example
             * // This example get the CellStylesListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellStylesListContent);
             */
            static CellStylesListContent: string;
            /**
             * Get the command name CellTag.
             * @name GC.Spread.Sheets.Designer#CellTag
             * @example
             * // This example get the CellTag by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellTag);
             */
            static CellTag: string;
            /**
             * Get the command name CellType.
             * @name GC.Spread.Sheets.Designer#CellType
             * @example
             * // This example get the CellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CellType);
             */
            static CellType: string;
            /**
             * Get the command name CenterAlign.
             * @name GC.Spread.Sheets.Designer#CenterAlign
             * @example
             * // This example get the CenterAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CenterAlign);
             */
            static CenterAlign: string;
            /**
             * Get the command name ChangeChartType.
             * @name GC.Spread.Sheets.Designer#ChangeChartType
             * @example
             * // This example get the ChangeChartType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeChartType);
             */
            static ChangeChartType: string;
            /**
             * Get the command name ChangeColors.
             * @name GC.Spread.Sheets.Designer#ChangeColors
             * @example
             * // This example get the ChangeColors by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeColors);
             */
            static ChangeColors: string;
            /**
             * Get the command name ChangeColorsListContent.
             * @name GC.Spread.Sheets.Designer#ChangeColorsListContent
             * @example
             * // This example get the ChangeColorsListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeColorsListContent);
             */
            static ChangeColorsListContent: string;
            /**
             * Get the command name ChangeShape.
             * @name GC.Spread.Sheets.Designer#ChangeShape
             * @example
             * // This example get the ChangeShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeShape);
             */
            static ChangeShape: string;
            /**
             * Get the command name ChangeShapeHeight.
             * @name GC.Spread.Sheets.Designer#ChangeShapeHeight
             * @example
             * // This example get the ChangeShapeHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeShapeHeight);
             */
            static ChangeShapeHeight: string;
            /**
             * Get the command name ChangeShapeWidth.
             * @name GC.Spread.Sheets.Designer#ChangeShapeWidth
             * @example
             * // This example get the ChangeShapeWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeShapeWidth);
             */
            static ChangeShapeWidth: string;
            /**
             * Get the command name ChangeSheetTabPosition.
             * @name GC.Spread.Sheets.Designer#ChangeSheetTabPosition
             * @example
             * // This example get the ChangeSheetTabPosition by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeSheetTabPosition);
             */
            static ChangeSheetTabPosition: string;
            /**
             * Get the command name ChartAltText.
             * @name GC.Spread.Sheets.Designer#ChartAltText
             * @example
             * // This example get the ChartAltText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAltText);
             */
            static ChartAltText: string;
            /**
             * Get the command name ChartAltTextPanel.
             * @name GC.Spread.Sheets.Designer#ChartAltTextPanel
             * @example
             * // This example get the ChartAltTextPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAltTextPanel);
             */
            static ChartAltTextPanel: string;
            /**
             * Get the command name ChartAxesMoreAxisOption.
             * @name GC.Spread.Sheets.Designer#ChartAxesMoreAxisOption
             * @example
             * // This example get the ChartAxesMoreAxisOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxesMoreAxisOption);
             */
            static ChartAxesMoreAxisOption: string;
            /**
             * Get the command name ChartAxesPrimaryHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartAxesPrimaryHorizontal
             * @example
             * // This example get the ChartAxesPrimaryHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxesPrimaryHorizontal);
             */
            static ChartAxesPrimaryHorizontal: string;
            /**
             * Get the command name ChartAxesPrimaryVertical.
             * @name GC.Spread.Sheets.Designer#ChartAxesPrimaryVertical
             * @example
             * // This example get the ChartAxesPrimaryVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxesPrimaryVertical);
             */
            static ChartAxesPrimaryVertical: string;
            /**
             * Get the command name ChartAxesSecondaryHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartAxesSecondaryHorizontal
             * @example
             * // This example get the ChartAxesSecondaryHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxesSecondaryHorizontal);
             */
            static ChartAxesSecondaryHorizontal: string;
            /**
             * Get the command name ChartAxesSecondaryVertical.
             * @name GC.Spread.Sheets.Designer#ChartAxesSecondaryVertical
             * @example
             * // This example get the ChartAxesSecondaryVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxesSecondaryVertical);
             */
            static ChartAxesSecondaryVertical: string;
            /**
             * Get the command name ChartAxisTitlesMoreAxisTitlesOption.
             * @name GC.Spread.Sheets.Designer#ChartAxisTitlesMoreAxisTitlesOption
             * @example
             * // This example get the ChartAxisTitlesMoreAxisTitlesOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxisTitlesMoreAxisTitlesOption);
             */
            static ChartAxisTitlesMoreAxisTitlesOption: string;
            /**
             * Get the command name ChartAxisTitlesPrimaryHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartAxisTitlesPrimaryHorizontal
             * @example
             * // This example get the ChartAxisTitlesPrimaryHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxisTitlesPrimaryHorizontal);
             */
            static ChartAxisTitlesPrimaryHorizontal: string;
            /**
             * Get the command name ChartAxisTitlesPrimaryVertical.
             * @name GC.Spread.Sheets.Designer#ChartAxisTitlesPrimaryVertical
             * @example
             * // This example get the ChartAxisTitlesPrimaryVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxisTitlesPrimaryVertical);
             */
            static ChartAxisTitlesPrimaryVertical: string;
            /**
             * Get the command name ChartAxisTitlesSecondaryHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartAxisTitlesSecondaryHorizontal
             * @example
             * // This example get the ChartAxisTitlesSecondaryHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxisTitlesSecondaryHorizontal);
             */
            static ChartAxisTitlesSecondaryHorizontal: string;
            /**
             * Get the command name ChartAxisTitlesSecondaryVertical.
             * @name GC.Spread.Sheets.Designer#ChartAxisTitlesSecondaryVertical
             * @example
             * // This example get the ChartAxisTitlesSecondaryVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartAxisTitlesSecondaryVertical);
             */
            static ChartAxisTitlesSecondaryVertical: string;
            /**
             * Get the command name ChartChartErrorBarMoreOption.
             * @name GC.Spread.Sheets.Designer#ChartChartErrorBarMoreOption
             * @example
             * // This example get the ChartChartErrorBarMoreOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartErrorBarMoreOption);
             */
            static ChartChartErrorBarMoreOption: string;
            /**
             * Get the command name ChartChartErrorBarNone.
             * @name GC.Spread.Sheets.Designer#ChartChartErrorBarNone
             * @example
             * // This example get the ChartChartErrorBarNone by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartErrorBarNone);
             */
            static ChartChartErrorBarNone: string;
            /**
             * Get the command name ChartChartErrorBarPercentage.
             * @name GC.Spread.Sheets.Designer#ChartChartErrorBarPercentage
             * @example
             * // This example get the ChartChartErrorBarPercentage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartErrorBarPercentage);
             */
            static ChartChartErrorBarPercentage: string;
            /**
             * Get the command name ChartChartErrorBarStandardDeviation.
             * @name GC.Spread.Sheets.Designer#ChartChartErrorBarStandardDeviation
             * @example
             * // This example get the ChartChartErrorBarStandardDeviation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartErrorBarStandardDeviation);
             */
            static ChartChartErrorBarStandardDeviation: string;
            /**
             * Get the command name ChartChartErrorBarStandardError.
             * @name GC.Spread.Sheets.Designer#ChartChartErrorBarStandardError
             * @example
             * // This example get the ChartChartErrorBarStandardError by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartErrorBarStandardError);
             */
            static ChartChartErrorBarStandardError: string;
            /**
             * Get the command name ChartChartTitleAboveChart.
             * @name GC.Spread.Sheets.Designer#ChartChartTitleAboveChart
             * @example
             * // This example get the ChartChartTitleAboveChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartTitleAboveChart);
             */
            static ChartChartTitleAboveChart: string;
            /**
             * Get the command name ChartChartTitleMoreChartTitleOption.
             * @name GC.Spread.Sheets.Designer#ChartChartTitleMoreChartTitleOption
             * @example
             * // This example get the ChartChartTitleMoreChartTitleOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartTitleMoreChartTitleOption);
             */
            static ChartChartTitleMoreChartTitleOption: string;
            /**
             * Get the command name ChartChartTitleNone.
             * @name GC.Spread.Sheets.Designer#ChartChartTitleNone
             * @example
             * // This example get the ChartChartTitleNone by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartChartTitleNone);
             */
            static ChartChartTitleNone: string;
            /**
             * Get the command name ChartDataLabelBestFitPieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelBestFitPieGroup
             * @example
             * // This example get the ChartDataLabelBestFitPieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelBestFitPieGroup);
             */
            static ChartDataLabelBestFitPieGroup: string;
            /**
             * Get the command name ChartDataLabelsAboveLineGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsAboveLineGroup
             * @example
             * // This example get the ChartDataLabelsAboveLineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsAboveLineGroup);
             */
            static ChartDataLabelsAboveLineGroup: string;
            /**
             * Get the command name ChartDataLabelsAboveScatterGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsAboveScatterGroup
             * @example
             * // This example get the ChartDataLabelsAboveScatterGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsAboveScatterGroup);
             */
            static ChartDataLabelsAboveScatterGroup: string;
            /**
             * Get the command name ChartDataLabelsBelowLineGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsBelowLineGroup
             * @example
             * // This example get the ChartDataLabelsBelowLineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsBelowLineGroup);
             */
            static ChartDataLabelsBelowLineGroup: string;
            /**
             * Get the command name ChartDataLabelsBelowScatterGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsBelowScatterGroup
             * @example
             * // This example get the ChartDataLabelsBelowScatterGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsBelowScatterGroup);
             */
            static ChartDataLabelsBelowScatterGroup: string;
            /**
             * Get the command name ChartDataLabelsCenter.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenter
             * @example
             * // This example get the ChartDataLabelsCenter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenter);
             */
            static ChartDataLabelsCenter: string;
            /**
             * Get the command name ChartDataLabelsCenterFunnelGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenterFunnelGroup
             * @example
             * // This example get the ChartDataLabelsCenterFunnelGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenterFunnelGroup);
             */
            static ChartDataLabelsCenterFunnelGroup: string;
            /**
             * Get the command name ChartDataLabelsCenterLineGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenterLineGroup
             * @example
             * // This example get the ChartDataLabelsCenterLineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenterLineGroup);
             */
            static ChartDataLabelsCenterLineGroup: string;
            /**
             * Get the command name ChartDataLabelsCenterPieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenterPieGroup
             * @example
             * // This example get the ChartDataLabelsCenterPieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenterPieGroup);
             */
            static ChartDataLabelsCenterPieGroup: string;
            /**
             * Get the command name ChartDataLabelsCenterScatterGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenterScatterGroup
             * @example
             * // This example get the ChartDataLabelsCenterScatterGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenterScatterGroup);
             */
            static ChartDataLabelsCenterScatterGroup: string;
            /**
             * Get the cChartDataLabelsCenterSunburstGroupmmand name ChartDataLabelsCenterSunburstGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsCenterSunburstGroup
             * @example
             * // This example get the ChartDataLabelsCenterSunburstGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsCenterSunburstGroup);
             */
            static ChartDataLabelsCenterSunburstGroup: string;
            /**
             * Get the command name ChartDataLabelsInsideEnd.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsInsideEnd
             * @example
             * // This example get the ChartDataLabelsInsideEnd by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsInsideEnd);
             */
            static ChartDataLabelsInsideEnd: string;
            /**
             * Get the command name ChartDataLabelsInsideEndPieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsInsideEndPieGroup
             * @example
             * // This example get the ChartDataLabelsInsideEndPieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsInsideEndPieGroup);
             */
            static ChartDataLabelsInsideEndPieGroup: string;
            /**
             * Get the command name ChartDataLabelsMoreDataLabelsOption.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsMoreDataLabelsOption
             * @example
             * // This example get the ChartDataLabelsMoreDataLabelsOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsMoreDataLabelsOption);
             */
            static ChartDataLabelsMoreDataLabelsOption: string;
            /**
             * Get the command name ChartDataLabelsNone.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNone
             * @example
             * // This example get the ChartDataLabelsNone by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNone);
             */
            static ChartDataLabelsNone: string;
            /**
             * Get the command name ChartDataLabelsNoneDoughnutGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneDoughnutGroup
             * @example
             * // This example get the ChartDataLabelsNoneDoughnutGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneDoughnutGroup);
             */
            static ChartDataLabelsNoneDoughnutGroup: string;
            /**
             * Get the command name ChartDataLabelsNoneFunnelGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneFunnelGroup
             * @example
             * // This example get the ChartDataLabelsNoneFunnelGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneFunnelGroup);
             */
            static ChartDataLabelsNoneFunnelGroup: string;
            /**
             * Get the command name ChartDataLabelsNoneLineGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneLineGroup
             * @example
             * // This example get the ChartDataLabelsNoneLineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneLineGroup);
             */
            static ChartDataLabelsNoneLineGroup: string;
            /**
             * Get the command name ChartDataLabelsNonePieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNonePieGroup
             * @example
             * // This example get the ChartDataLabelsNonePieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNonePieGroup);
             */
            static ChartDataLabelsNonePieGroup: string;
            /**
             * Get the command name ChartDataLabelsNoneScatterGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneScatterGroup
             * @example
             * // This example get the ChartDataLabelsNoneScatterGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneScatterGroup);
             */
            static ChartDataLabelsNoneScatterGroup: string;
            /**
             * Get the command name ChartDataLabelsNoneSunburstGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneSunburstGroup
             * @example
             * // This example get the ChartDataLabelsNoneSunburstGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneSunburstGroup);
             */
            static ChartDataLabelsNoneSunburstGroup: string;
            /**
             * Get the command name ChartDataLabelsNoneTreeMapGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsNoneTreeMapGroup
             * @example
             * // This example get the ChartDataLabelsNoneTreeMapGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsNoneTreeMapGroup);
             */
            static ChartDataLabelsNoneTreeMapGroup: string;
            /**
             * Get the command name ChartDataLabelsOutsideEnd.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsOutsideEnd
             * @example
             * // This example get the ChartDataLabelsOutsideEnd by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsOutsideEnd);
             */
            static ChartDataLabelsOutsideEnd: string;
            /**
             * Get the command name ChartDataLabelsOutsideEndPieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsOutsideEndPieGroup
             * @example
             * // This example get the ChartDataLabelsOutsideEndPieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsOutsideEndPieGroup);
             */
            static ChartDataLabelsOutsideEndPieGroup: string;
            /**
             * Get the command name ChartDataLabelsShow.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsShow
             * @example
             * // This example get the ChartDataLabelsShow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsShow);
             */
            static ChartDataLabelsShow: string;
            /**
             * Get the command name ChartDataLabelsShowDoughnutGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsShowDoughnutGroup
             * @example
             * // This example get the ChartDataLabelsShowDoughnutGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsShowDoughnutGroup);
             */
            static ChartDataLabelsShowDoughnutGroup: string;
            /**
             * Get the command name ChartDataLabelsShowPieGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsShowPieGroup
             * @example
             * // This example get the ChartDataLabelsShowPieGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsShowPieGroup);
             */
            static ChartDataLabelsShowPieGroup: string;
            /**
             * Get the command name ChartDataLabelsShowTreeMapGroup.
             * @name GC.Spread.Sheets.Designer#ChartDataLabelsShowTreeMapGroup
             * @example
             * // This example get the ChartDataLabelsShowTreeMapGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartDataLabelsShowTreeMapGroup);
             */
            static ChartDataLabelsShowTreeMapGroup: string;
            /**
             * Get the command name ChartGridLinesMoreGridLinesOption.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesMoreGridLinesOption
             * @example
             * // This example get the ChartGridLinesMoreGridLinesOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesMoreGridLinesOption);
             */
            static ChartGridLinesMoreGridLinesOption: string;
            /**
             * Get the command name ChartGridLinesPrimaryMajorHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesPrimaryMajorHorizontal
             * @example
             * // This example get the ChartGridLinesPrimaryMajorHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesPrimaryMajorHorizontal);
             */
            static ChartGridLinesPrimaryMajorHorizontal: string;
            /**
             * Get the command name ChartGridLinesPrimaryMajorVertical.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesPrimaryMajorVertical
             * @example
             * // This example get the ChartGridLinesPrimaryMajorVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesPrimaryMajorVertical);
             */
            static ChartGridLinesPrimaryMajorVertical: string;
            /**
             * Get the command name ChartGridLinesPrimaryMinorHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesPrimaryMinorHorizontal
             * @example
             * // This example get the ChartGridLinesPrimaryMinorHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesPrimaryMinorHorizontal);
             */
            static ChartGridLinesPrimaryMinorHorizontal: string;
            /**
             * Get the command name ChartGridLinesPrimaryMinorVertical.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesPrimaryMinorVertical
             * @example
             * // This example get the ChartGridLinesPrimaryMinorVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesPrimaryMinorVertical);
             */
            static ChartGridLinesPrimaryMinorVertical: string;
            /**
             * Get the command name ChartGridLinesSecondaryMajorHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesSecondaryMajorHorizontal
             * @example
             * // This example get the ChartGridLinesSecondaryMajorHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesSecondaryMajorHorizontal);
             */
            static ChartGridLinesSecondaryMajorHorizontal: string;
            /**
             * Get the command name ChartGridLinesSecondaryMajorVertical.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesSecondaryMajorVertical
             * @example
             * // This example get the ChartGridLinesSecondaryMajorVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesSecondaryMajorVertical);
             */
            static ChartGridLinesSecondaryMajorVertical: string;
            /**
             * Get the command name ChartGridLinesSecondaryMinorHorizontal.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesSecondaryMinorHorizontal
             * @example
             * // This example get the ChartGridLinesSecondaryMinorHorizontal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesSecondaryMinorHorizontal);
             */
            static ChartGridLinesSecondaryMinorHorizontal: string;
            /**
             * Get the command name ChartGridLinesSecondaryMinorVertical.
             * @name GC.Spread.Sheets.Designer#ChartGridLinesSecondaryMinorVertical
             * @example
             * // This example get the ChartGridLinesSecondaryMinorVertical by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartGridLinesSecondaryMinorVertical);
             */
            static ChartGridLinesSecondaryMinorVertical: string;
            /**
             * Get the command name ChartLegendBottom.
             * @name GC.Spread.Sheets.Designer#ChartLegendBottom
             * @example
             * // This example get the ChartLegendBottom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendBottom);
             */
            static ChartLegendBottom: string;
            /**
             * Get the command name ChartLegendLeft.
             * @name GC.Spread.Sheets.Designer#ChartLegendLeft
             * @example
             * // This example get the ChartLegendLeft by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendLeft);
             */
            static ChartLegendLeft: string;
            /**
             * Get the command name ChartLegendMoreLegendOption.
             * @name GC.Spread.Sheets.Designer#ChartLegendMoreLegendOption
             * @example
             * // This example get the ChartLegendMoreLegendOption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendMoreLegendOption);
             */
            static ChartLegendMoreLegendOption: string;
            /**
             * Get the command name ChartLegendNone.
             * @name GC.Spread.Sheets.Designer#ChartLegendNone
             * @example
             * // This example get the ChartLegendNone by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendNone);
             */
            static ChartLegendNone: string;
            /**
             * Get the command name ChartLegendRight.
             * @name GC.Spread.Sheets.Designer#ChartLegendRight
             * @example
             * // This example get the ChartLegendRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendRight);
             */
            static ChartLegendRight: string;
            /**
             * Get the command name ChartLegendTop.
             * @name GC.Spread.Sheets.Designer#ChartLegendTop
             * @example
             * // This example get the ChartLegendTop by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartLegendTop);
             */
            static ChartLegendTop: string;
            /**
             * Get the command name ChartStyles.
             * @name GC.Spread.Sheets.Designer#ChartStyles
             * @example
             * // This example get the ChartStyles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartStyles);
             */
            static ChartStyles: string;
            /**
             * Get the command name ChartStylesListContent.
             * @name GC.Spread.Sheets.Designer#ChartStylesListContent
             * @example
             * // This example get the ChartStylesListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartStylesListContent);
             */
            static ChartStylesListContent: string;
            /**
             * Get the command name ChartTitle.
             * @name GC.Spread.Sheets.Designer#ChartTitle
             * @example
             * // This example get the ChartTitle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTitle);
             */
            static ChartTitle: string;
            /**
             * Get the command name ChartTrendlineExponential.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineExponential
             * @example
             * // This example get the ChartTrendlineExponential by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineExponential);
             */
            static ChartTrendlineExponential: string;
            /**
             * Get the command name ChartTrendlineLinear.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineLinear
             * @example
             * // This example get the ChartTrendlineLinear by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineLinear);
             */
            static ChartTrendlineLinear: string;
            /**
             * Get the command name ChartTrendlineLinearForecast.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineLinearForecast
             * @example
             * // This example get the ChartTrendlineLinearForecast by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineLinearForecast);
             */
            static ChartTrendlineLinearForecast: string;
            /**
             * Get the command name ChartTrendlineMoreOptions.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineMoreOptions
             * @example
             * // This example get the ChartTrendlineMoreOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineMoreOptions);
             */
            static ChartTrendlineMoreOptions: string;
            /**
             * Get the command name ChartTrendlineMovingAverage.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineMovingAverage
             * @example
             * // This example get the ChartTrendlineMovingAverage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineMovingAverage);
             */
            static ChartTrendlineMovingAverage: string;
            /**
             * Get the command name ChartTrendlineNone.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineNone
             * @example
             * // This example get the ChartTrendlineNone by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChartTrendlineNone);
             */
            static ChartTrendlineNone: string;
            /**
             * Get the command name CheckboxCellType.
             * @name GC.Spread.Sheets.Designer#CheckboxCellType
             * @example
             * // This example get the CheckboxCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CheckboxCellType);
             */
            static CheckboxCellType: string;
            /**
             * Get the command name CheckboxListCellType.
             * @name GC.Spread.Sheets.Designer#CheckboxListCellType
             * @example
             * // This example get the CheckboxListCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CheckboxListCellType);
             */
            static CheckboxListCellType: string;
            /**
             * Get the command name CircleInvalidDataCommand.
             * @name GC.Spread.Sheets.Designer#CircleInvalidDataCommand
             * @example
             * // This example get the CircleInvalidDataCommand by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CircleInvalidDataCommand);
             */
            static CircleInvalidDataCommand: string;
            /**
             * Get the command name Clear.
             * @name GC.Spread.Sheets.Designer#Clear
             * @example
             * // This example get the Clear by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Clear);
             */
            static Clear: string;
            /**
             * Get the command name ClearAll.
             * @name GC.Spread.Sheets.Designer#ClearAll
             * @example
             * // This example get the ClearAll by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearAll);
             */
            static ClearAll: string;
            /**
             * Get the command name ClearBindingPath.
             * @name GC.Spread.Sheets.Designer#ClearBindingPath
             * @example
             * // This example get the ClearBindingPath by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearBindingPath);
             */
            static ClearBindingPath: string;
            /**
             * Get the command name ClearCellDropdown.
             * @name GC.Spread.Sheets.Designer#ClearCellDropdown
             * @example
             * // This example get the ClearCellDropdown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearCellDropdown);
             */
            static ClearCellDropdown: string;
            /**
             * Get the command name ClearCellRules.
             * @name GC.Spread.Sheets.Designer#ClearCellRules
             * @example
             * // This example get the ClearCellRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearCellRules);
             */
            static ClearCellRules: string;
            /**
             * Get the command name ClearCellType.
             * @name GC.Spread.Sheets.Designer#ClearCellType
             * @example
             * // This example get the ClearCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearCellType);
             */
            static ClearCellType: string;
            /**
             * Get the command name ClearComments.
             * @name GC.Spread.Sheets.Designer#ClearComments
             * @example
             * // This example get the ClearComments by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearComments);
             */
            static ClearComments: string;
            /**
             * Get the command name ClearContent.
             * @name GC.Spread.Sheets.Designer#ClearContent
             * @example
             * // This example get the ClearContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearContent);
             */
            static ClearContent: string;
            /**
             * Get the command name ClearContents.
             * @name GC.Spread.Sheets.Designer#ClearContents
             * @example
             * // This example get the ClearContents by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearContents);
             */
            static ClearContents: string;
            /**
             * Get the command name ClearFilter.
             * @name GC.Spread.Sheets.Designer#ClearFilter
             * @example
             * // This example get the ClearFilter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearFilter);
             */
            static ClearFilter: string;
            /**
             * Get the command name ClearFilterData.
             * @name GC.Spread.Sheets.Designer#ClearFilterData
             * @example
             * // This example get the ClearFilterData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearFilterData);
             */
            static ClearFilterData: string;
            /**
             * Get the command name ClearFormat.
             * @name GC.Spread.Sheets.Designer#ClearFormat
             * @example
             * // This example get the ClearFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearFormat);
             */
            static ClearFormat: string;
            /**
             * Get the command name ClearInvalidCircles.
             * @name GC.Spread.Sheets.Designer#ClearInvalidCircles
             * @example
             * // This example get the ClearInvalidCircles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearInvalidCircles);
             */
            static ClearInvalidCircles: string;
            /**
             * Get the command name ClearOutline.
             * @name GC.Spread.Sheets.Designer#ClearOutline
             * @example
             * // This example get the ClearOutline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearOutline);
             */
            static ClearOutline: string;
            /**
             * Get the command name ClearPivotTableStyle.
             * @name GC.Spread.Sheets.Designer#ClearPivotTableStyle
             * @example
             * // This example get the ClearPivotTableStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearPivotTableStyle);
             */
            static ClearPivotTableStyle: string;
            /**
             * Get the command name ClearPrintArea.
             * @name GC.Spread.Sheets.Designer#ClearPrintArea
             * @example
             * // This example get the ClearPrintArea by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearPrintArea);
             */
            static ClearPrintArea: string;
            /**
             * Get the command name ClearRules.
             * @name GC.Spread.Sheets.Designer#ClearRules
             * @example
             * // This example get the ClearRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearRules);
             */
            static ClearRules: string;
            /**
             * Get the command name ClearSelectedSparkline.
             * @name GC.Spread.Sheets.Designer#ClearSelectedSparkline
             * @example
             * // This example get the ClearSelectedSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearSelectedSparkline);
             */
            static ClearSelectedSparkline: string;
            /**
             * Get the command name ClearSelectedSparklineGroups.
             * @name GC.Spread.Sheets.Designer#ClearSelectedSparklineGroups
             * @example
             * // This example get the ClearSelectedSparklineGroups by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearSelectedSparklineGroups);
             */
            static ClearSelectedSparklineGroups: string;
            /**
             * Get the command name ClearSheetRules.
             * @name GC.Spread.Sheets.Designer#ClearSheetRules
             * @example
             * // This example get the ClearSheetRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearSheetRules);
             */
            static ClearSheetRules: string;
            /**
             * Get the command name ClearSparkline.
             * @name GC.Spread.Sheets.Designer#ClearSparkline
             * @example
             * // This example get the ClearSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearSparkline);
             */
            static ClearSparkline: string;
            /**
             * Get the command name ClearSparklineDropdown.
             * @name GC.Spread.Sheets.Designer#ClearSparklineDropdown
             * @example
             * // This example get the ClearSparklineDropdown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearSparklineDropdown);
             */
            static ClearSparklineDropdown: string;
            /**
             * Get the command name ClearTableSheetColumnConditionalFormat.
             * @name GC.Spread.Sheets.Designer#ClearTableSheetColumnConditionalFormat
             * @example
             * // This example get the ClearTableSheetColumnConditionalFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearTableSheetColumnConditionalFormat);
             */
            static ClearTableSheetColumnConditionalFormat: string;
            /**
             * Get the command name ClearTableStyle.
             * @name GC.Spread.Sheets.Designer#ClearTableStyle
             * @example
             * // This example get the ClearTableStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClearTableStyle);
             */
            static ClearTableStyle: string;
            /**
             * Get the command name ClusteredBarChart.
             * @name GC.Spread.Sheets.Designer#ClusteredBarChart
             * @example
             * // The example get the ClusteredBarChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClusteredBarChart);
             */
            static ClusteredBarChart: string;
            /**
             * Get the command name ClusteredColumnChart.
             * @name GC.Spread.Sheets.Designer#ClusteredColumnChart
             * @example
             * // The example get the ClusteredColumnChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ClusteredColumnChart);
             */
            static ClusteredColumnChart: string;
            /**
             * Get the command name ColorPickerCellType.
             * @name GC.Spread.Sheets.Designer#ColorPickerCellType
             * @example
             * // This example get the ColorPickerCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorPickerCellType);
             */
            static ColorPickerCellType: string;
            /**
             * Get the command name ColorScaleBwr.
             * @name GC.Spread.Sheets.Designer#ColorScaleBwr
             * @example
             * // This example get the ColorScaleBwr by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleBwr);
             */
            static ColorScaleBwr: string;
            /**
             * Get the command name ColorScaleGw.
             * @name GC.Spread.Sheets.Designer#ColorScaleGw
             * @example
             * // This example get the ColorScaleGw by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleGw);
             */
            static ColorScaleGw: string;
            /**
             * Get the command name ColorScaleGwr.
             * @name GC.Spread.Sheets.Designer#ColorScaleGwr
             * @example
             * // This example get the ColorScaleGwr by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleGwr);
             */
            static ColorScaleGwr: string;
            /**
             * Get the command name ColorScaleGy.
             * @name GC.Spread.Sheets.Designer#ColorScaleGy
             * @example
             * // This example get the ColorScaleGy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleGy);
             */
            static ColorScaleGy: string;
            /**
             * Get the command name ColorScaleGyr.
             * @name GC.Spread.Sheets.Designer#ColorScaleGyr
             * @example
             * // This example get the ColorScaleGyr by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleGyr);
             */
            static ColorScaleGyr: string;
            /**
             * Get the command name ColorScaleRw.
             * @name GC.Spread.Sheets.Designer#ColorScaleRw
             * @example
             * // This example get the ColorScaleRw by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleRw);
             */
            static ColorScaleRw: string;
            /**
             * Get the command name ColorScaleRwb.
             * @name GC.Spread.Sheets.Designer#ColorScaleRwb
             * @example
             * // This example get the ColorScaleRwb by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleRwb);
             */
            static ColorScaleRwb: string;
            /**
             * Get the command name ColorScaleRwg.
             * @name GC.Spread.Sheets.Designer#ColorScaleRwg
             * @example
             * // This example get the ColorScaleRwg by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleRwg);
             */
            static ColorScaleRwg: string;
            /**
             * Get the command name ColorScaleRyg.
             * @name GC.Spread.Sheets.Designer#ColorScaleRyg
             * @example
             * // This example get the ColorScaleRyg by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleRyg);
             */
            static ColorScaleRyg: string;
            /**
             * Get the command name ColorScalesList.
             * @name GC.Spread.Sheets.Designer#ColorScalesList
             * @example
             * // This example get the ColorScalesList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScalesList);
             */
            static ColorScalesList: string;
            /**
             * Get the command name ColorScalesList2.
             * @name GC.Spread.Sheets.Designer#ColorScalesList2
             * @example
             * // This example get the ColorScalesList2 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScalesList2);
             */
            static ColorScalesList2: string;
            /**
             * Get the command name ColorScaleWg.
             * @name GC.Spread.Sheets.Designer#ColorScaleWg
             * @example
             * // This example get the ColorScaleWg by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleWg);
             */
            static ColorScaleWg: string;
            /**
             * Get the command name ColorScaleWr.
             * @name GC.Spread.Sheets.Designer#ColorScaleWr
             * @example
             * // This example get the ColorScaleWr by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleWr);
             */
            static ColorScaleWr: string;
            /**
             * Get the command name ColorScaleYg.
             * @name GC.Spread.Sheets.Designer#ColorScaleYg
             * @example
             * // This example get the ColorScaleYg by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColorScaleYg);
             */
            static ColorScaleYg: string;
            /**
             * Get the command name ColTag.
             * @name GC.Spread.Sheets.Designer#ColTag
             * @example
             * // This example get the ColTag by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColTag);
             */
            static ColTag: string;
            /**
             * Get the command name ColumnChartGroup.
             * @name GC.Spread.Sheets.Designer#ColumnChartGroup
             * @example
             * // The example get the ColumnChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnChartGroup);
             */
            static ColumnChartGroup: string;
            /**
             * Get the command name ColumnChartPanel.
             * @name GC.Spread.Sheets.Designer#ColumnChartPanel
             * @example
             * // This example get the ColumnChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnChartPanel);
             */
            static ColumnChartPanel: string;
            /**
             * Get the command name ColumnChartPreview.
             * @name GC.Spread.Sheets.Designer#ColumnChartPreview
             * @example
             * // This example get the ColumnChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnChartPreview);
             */
            static ColumnChartPreview: string;
            /**
             * Get the command name ColumnCount.
             * @name GC.Spread.Sheets.Designer#ColumnCount
             * @example
             * // This example get the ColumnCount by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnCount);
             */
            static ColumnCount: string;
            /**
             * Get the command name ColumnHeaderInsertCopiedCells.
             * @name GC.Spread.Sheets.Designer#ColumnHeaderInsertCopiedCells
             * @example
             * // This example get the ColumnHeaderInsertCopiedCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnHeaderInsertCopiedCells);
             */
            static ColumnHeaderInsertCopiedCells: string;
            /**
             * Get the command name ColumnHeaderInsertCutCells.
             * @name GC.Spread.Sheets.Designer#ColumnHeaderInsertCutCells
             * @example
             * // This example get the ColumnHeaderInsertCutCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnHeaderInsertCutCells);
             */
            static ColumnHeaderInsertCutCells: string;
            /**
             * Get the command name ColumnHeaders.
             * @name GC.Spread.Sheets.Designer#ColumnHeaders
             * @example
             * // This example get the ColumnHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnHeaders);
             */
            static ColumnHeaders: string;
            /**
             * Get the command name ColumnOrBarChartPreview.
             * @name GC.Spread.Sheets.Designer#ColumnOrBarChartPreview
             * @example
             * // This example get the ColumnOrBarChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnCharPreview);
             */
            static ColumnOrBarChartPreview: string;
            /**
             * Get the command name ColumnSparkline.
             * @name GC.Spread.Sheets.Designer#ColumnSparkline
             * @example
             * // This example get the ColumnSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnSparkline);
             */
            static ColumnSparkline: string;
            /**
             * Get the command name ColumnWidth.
             * @name GC.Spread.Sheets.Designer#ColumnWidth
             * @example
             * // This example get the ColumnWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ColumnWidth);
             */
            static ColumnWidth: string;
            /**
             * Get the command name ComboBoxCellType.
             * @name GC.Spread.Sheets.Designer#ComboBoxCellType
             * @example
             * // This example get the ComboBoxCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboBoxCellType);
             */
            static ComboBoxCellType: string;
            /**
             * Get the command name ComboChartColumnAndArea.
             * @name GC.Spread.Sheets.Designer#ComboChartColumnAndArea
             * @example
             * // The example get the ComboChartColumnAndArea by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartColumnAndArea);
             */
            static ComboChartColumnAndArea: string;
            /**
             * Get the command name ComboChartColumnAndLine.
             * @name GC.Spread.Sheets.Designer#ComboChartColumnAndLine
             * @example
             * // The example get the ComboChartColumnAndLine by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartColumnAndLine);
             */
            static ComboChartColumnAndLine: string;
            /**
             * Get the command name ComboChartColumnAndLineAxis.
             * @name GC.Spread.Sheets.Designer#ComboChartColumnAndLineAxis
             * @example
             * // The example get the ComboChartColumnAndLineAxis by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartColumnAndLineAxis);
             */
            static ComboChartColumnAndLineAxis: string;
            /**
             * Get the command name ComboChartGroup.
             * @name GC.Spread.Sheets.Designer#ComboChartGroup
             * @example
             * // The example get the ComboChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartGroup);
             */
            static ComboChartGroup: string;
            /**
             * Get the command name ComboChartPanel.
             * @name GC.Spread.Sheets.Designer#ComboChartPanel
             * @example
             * // This example get the ComboChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartPanel);
             */
            static ComboChartPanel: string;
            /**
             * Get the command name ComboChartPreview.
             * @name GC.Spread.Sheets.Designer#ComboChartPreview
             * @example
             * // The example get the ComboChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ComboChartPreview);
             */
            static ComboChartPreview: string;
            /**
             * Get the command name ConditionFormat.
             * @name GC.Spread.Sheets.Designer#ConditionFormat
             * @example
             * // This example get the ConditionFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ConditionFormat);
             */
            static ConditionFormat: string;
            /**
             * Get the command name ConditionFormatManageRule.
             * @name GC.Spread.Sheets.Designer#ConditionFormatManageRule
             * @example
             * // This example get the ConditionFormatManageRule by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ConditionFormatManageRule);
             */
            static ConditionFormatManageRule: string;
            /**
             * Get the command name ConditionFormatNewRule.
             * @name GC.Spread.Sheets.Designer#ConditionFormatNewRule
             * @example
             * // This example get the ConditionFormatNewRule by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ConditionFormatNewRule);
             */
            static ConditionFormatNewRule: string;
            /**
             * Get the command name ContextMenuChangeChartType.
             * @name GC.Spread.Sheets.Designer#ContextMenuChangeChartType
             * @example
             * // This example get the ContextMenuChangeChartType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuChangeChartType);
             */
            static ContextMenuChangeChartType: string;
            /**
             * Get the command name ContextMenuCopy.
             * @name GC.Spread.Sheets.Designer#ContextMenuCopy
             * @example
             * // This example get the ContextMenuCopy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuCopy);
             */
            static ContextMenuCopy: string;
            /**
             * Get the command name ContextMenuCut.
             * @name GC.Spread.Sheets.Designer#ContextMenuCut
             * @example
             * // This example get the ContextMenuCut by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuCut);
             */
            static ContextMenuCut: string;
            /**
             * Get the command name ContextMenuMoveChart.
             * @name GC.Spread.Sheets.Designer#ContextMenuMoveChart
             * @example
             * // This example get the ContextMenuMoveChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuMoveChart);
             */
            static ContextMenuMoveChart: string;
            /**
             * Get the command name ContextMenuOutlineColumn.
             * @name GC.Spread.Sheets.Designer#ContextMenuOutlineColumn
             * @example
             * // This example get the ContextMenuOutlineColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuOutlineColumn);
             */
            static ContextMenuOutlineColumn: string;
            /**
             * Get the command name ContextMenuPaste.
             * @name GC.Spread.Sheets.Designer#ContextMenuPaste
             * @example
             * // This example get the ContextMenuPaste by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuPaste);
             */
            static ContextMenuPaste: string;
            /**
             * Get the command name ContextMenuPasteAll.
             * @name GC.Spread.Sheets.Designer#ContextMenuPasteAll
             * @example
             * // This example get the ContextMenuPasteAll by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuPasteAll);
             */
            static ContextMenuPasteAll: string;
            /**
             * Get the command name ContextMenuSlicerSetting.
             * @name GC.Spread.Sheets.Designer#ContextMenuSlicerSetting
             * @example
             * // This example get the ContextMenuSlicerSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ContextMenuSlicerSetting);
             */
            static ContextMenuSlicerSetting: string;
            /**
             * Get the command name ConvertToRange.
             * @name GC.Spread.Sheets.Designer#ConvertToRange
             * @example
             * // This example get the ConvertToRange by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ConvertToRange);
             */
            static ConvertToRange: string;
            /**
             * Get the command name Copy.
             * @name GC.Spread.Sheets.Designer#Copy
             * @example
             * // This example get the Copy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Copy);
             */
            static Copy: string;
            /**
             * Get the command name CopyShapes.
             * @name GC.Spread.Sheets.Designer#CopyShapes
             * @example
             * // This example get the CopyShapes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CopyShapes);
             */
            static CopyShapes: string;
            /**
             * Get the command name CtxGroupShape.
             * @name GC.Spread.Sheets.Designer#CtxGroupShape
             * @example
             * // This example get the CtxGroupShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CtxGroupShape);
             */
            static CtxGroupShape: string;
            /**
             * Get the command name CurrencyFormat.
             * @name GC.Spread.Sheets.Designer#CurrencyFormat
             * @example
             * // This example get the CurrencyFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CurrencyFormat);
             */
            static CurrencyFormat: string;
            /**
             * Get the command name CustomMargins.
             * @name GC.Spread.Sheets.Designer#CustomMargins
             * @example
             * // This example get the CustomMargins by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CustomMargins);
             */
            static CustomMargins: string;
            /**
             * Get the command name CustomSort.
             * @name GC.Spread.Sheets.Designer#CustomSort
             * @example
             * // This example get the CustomSort by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CustomSort);
             */
            static CustomSort: string;
            /**
             * Get the command name CustomSortData.
             * @name GC.Spread.Sheets.Designer#CustomSortData
             * @example
             * // This example get the CustomSortData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CustomSortData);
             */
            static CustomSortData: string;
            /**
             * Get the command name CustomSortEditing.
             * @name GC.Spread.Sheets.Designer#CustomSortEditing
             * @example
             * // This example get the CustomSortEditing by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CustomSortEditing);
             */
            static CustomSortEditing: string;
            /**
             * Get the command name Cut.
             * @name GC.Spread.Sheets.Designer#Cut
             * @example
             * // This example get the Cut by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Cut);
             */
            static Cut: string;
            /**
             * Get the command name CutShapes.
             * @name GC.Spread.Sheets.Designer#CutShapes
             * @example
             * // This example get the CutShapes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.CutShapes);
             */
            static CutShapes: string;
            /**
             * Get the command name DataBar.
             * @name GC.Spread.Sheets.Designer#DataBar
             * @example
             * // This example get the DataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DataBar);
             */
            static DataBar: string;
            /**
             * Get the command name DataLabels.
             * @name GC.Spread.Sheets.Designer#DataLabels
             * @example
             * // This example get the DataLabels by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DataLabels);
             */
            static DataLabels: string;
            /**
             * Get the command name DataValidation.
             * @name GC.Spread.Sheets.Designer#DataValidation
             * @example
             * // This example get the DataValidation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DataValidation);
             */
            static DataValidation: string;
            /**
             * Get the command name DataValidationList.
             * @name GC.Spread.Sheets.Designer#DataValidationList
             * @example
             * // This example get the DataValidationList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DataValidationList);
             */
            static DataValidationList: string;
            /**
             * Get the command name DateTimePickerCellType.
             * @name GC.Spread.Sheets.Designer#DateTimePickerCellType
             * @example
             * // This example get the DateTimePickerCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DateTimePickerCellType);
             */
            static DateTimePickerCellType: string;
            /**
             * Get the command name DecreaseDecimal.
             * @name GC.Spread.Sheets.Designer#DecreaseDecimal
             * @example
             * // This example get the DecreaseDecimal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DecreaseDecimal);
             */
            static DecreaseDecimal: string;
            /**
             * Get the command name DecreaseFontsize.
             * @name GC.Spread.Sheets.Designer#DecreaseFontsize
             * @example
             * // This example get the DecreaseFontsize by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DecreaseFontsize);
             */
            static DecreaseFontsize: string;
            /**
             * Get the command name DecreaseIndent.
             * @name GC.Spread.Sheets.Designer#DecreaseIndent
             * @example
             * // This example get the DecreaseIndent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DecreaseIndent);
             */
            static DecreaseIndent: string;
            /**
             * Get the command name DefineName.
             * @name GC.Spread.Sheets.Designer#DefineName
             * @example
             * // This example get the DefineName by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DefineName);
             */
            static DefineName: string;
            /**
             * Get the command name DeleteBackgroun.
             * @name GC.Spread.Sheets.Designer#DeleteBackgroun
             * @example
             * // This example get the DeleteBackgroun by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteBackgroun);
             */
            static DeleteBackgroun: string;
            /**
             * Get the command name DeleteColumns.
             * @name GC.Spread.Sheets.Designer#DeleteColumns
             * @example
             * // This example get the DeleteColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteColumns);
             */
            static DeleteColumns: string;
            /**
             * Get the command name DeleteComment.
             * @name GC.Spread.Sheets.Designer#DeleteComment
             * @example
             * // This example get the DeleteComment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteComment);
             */
            static DeleteComment: string;
            /**
             * Get the command name DeleteDialog.
             * @name GC.Spread.Sheets.Designer#DeleteDialog
             * @example
             * // This example get the DeleteDialog by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteDialog);
             */
            static DeleteDialog: string;
            /**
             * Get the command name DeleteRows.
             * @name GC.Spread.Sheets.Designer#DeleteRows
             * @example
             * // This example get the DeleteRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteRows);
             */
            static DeleteRows: string;
            /**
             * Get the command name DeleteSheet.
             * @name GC.Spread.Sheets.Designer#DeleteSheet
             * @example
             * // This example get the DeleteSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DeleteSheet);
             */
            static DeleteSheet: string;
            /**
             * Get the command name DesignerMoreFunctions.
             * @name GC.Spread.Sheets.Designer#DesignerMoreFunctions
             * @example
             * // This example get the DesignerMoreFunctions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerMoreFunctions);
             */
            static DesignerMoreFunctions: string;
            /**
             * Get the command name DesignerPasteAll.
             * @name GC.Spread.Sheets.Designer#DesignerPasteAll
             * @example
             * // This example get the DesignerPasteAll by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerPasteAll);
             */
            static DesignerPasteAll: string;
            /**
             * Get the command name DesignerPasteFormatting.
             * @name GC.Spread.Sheets.Designer#DesignerPasteFormatting
             * @example
             * // This example get the DesignerPasteFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerPasteFormatting);
             */
            static DesignerPasteFormatting: string;
            /**
             * Get the command name DesignerPasteFormula.
             * @name GC.Spread.Sheets.Designer#DesignerPasteFormula
             * @example
             * // This example get the DesignerPasteFormula by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerPasteFormula);
             */
            static DesignerPasteFormula: string;
            /**
             * Get the command name DesignerPasteFormulaFormatting.
             * @name GC.Spread.Sheets.Designer#DesignerPasteFormulaFormatting
             * @example
             * // This example get the DesignerPasteFormulaFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerPasteFormulaFormatting);
             */
            static DesignerPasteFormulaFormatting: string;
            /**
             * Get the command name DesignerPasteValues.
             * @name GC.Spread.Sheets.Designer#DesignerPasteValues
             * @example
             * // This example get the DesignerPasteValues by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignerPasteValues);
             */
            static DesignerPasteValues: string;
            /**
             * Get the command name DesignMode.
             * @name GC.Spread.Sheets.Designer#DesignMode
             * @example
             * // This example get the DesignMode by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignMode);
             */
            static DesignMode: string;
            /**
             * Get the command name Directional.
             * @name GC.Spread.Sheets.Designer#Directional
             * @example
             * // This example get the Directional by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Directional);
             */
            static Directional: string;
            /**
             * Get the command name DoughnutChart.
             * @name GC.Spread.Sheets.Designer#DoughnutChart
             * @example
             * // The example get the DoughnutChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DoughnutChart);
             */
            static DoughnutChart: string;
            /**
             * Get the command name DoughnutChartGroup.
             * @name GC.Spread.Sheets.Designer#DoughnutChartGroup
             * @example
             * // The example get the DoughnutChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DoughnutChartGroup);
             */
            static DoughnutChartGroup: string;
            /**
             * Get the command name DropdownDataValidation.
             * @name GC.Spread.Sheets.Designer#DropdownDataValidation
             * @example
             * // This example get the DropdownDataValidation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DropdownDataValidation);
             */
            static DropdownDataValidation: string;
            /**
             * Get the command name EditCellDropdowns.
             * @name GC.Spread.Sheets.Designer#EditCellDropdowns
             * @example
             * // This example get the EditCellDropdowns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditCellDropdowns);
             */
            static EditCellDropdowns: string;
            /**
             * Get the command name EditCellType.
             * @name GC.Spread.Sheets.Designer#EditCellType
             * @example
             * // This example get the EditCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditCellType);
             */
            static EditCellType: string;
            /**
             * Get the command name EditComment.
             * @name GC.Spread.Sheets.Designer#EditComment
             * @example
             * // This example get the EditComment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditComment);
             */
            static EditComment: string;
            /**
             * Get the command name EditHyperlink.
             * @name GC.Spread.Sheets.Designer#EditHyperlink
             * @example
             * // This example get the EditHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditHyperlink);
             */
            static EditHyperlink: string;
            /**
             * Get the command name EditingAutoSum.
             * @name GC.Spread.Sheets.Designer#EditingAutoSum
             * @example
             * // This example get the EditingAutoSum by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingAutoSum);
             */
            static EditingAutoSum: string;
            /**
             * Get the command name EditingAutoSumList.
             * @name GC.Spread.Sheets.Designer#EditingAutoSumList
             * @example
             * // This example get the EditingAutoSumList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingAutoSumList);
             */
            static EditingAutoSumList: string;
            /**
             * Get the command name EditingClearAllList.
             * @name GC.Spread.Sheets.Designer#EditingClearAllList
             * @example
             * // This example get the EditingClearAllList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingClearAllList);
             */
            static EditingClearAllList: string;
            /**
             * Get the command name EditingFillDown.
             * @name GC.Spread.Sheets.Designer#EditingFillDown
             * @example
             * // This example get the EditingFillDown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingFillDown);
             */
            static EditingFillDown: string;
            /**
             * Get the command name EditingFillDownList.
             * @name GC.Spread.Sheets.Designer#EditingFillDownList
             * @example
             * // This example get the EditingFillDownList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingFillDownList);
             */
            static EditingFillDownList: string;
            /**
             * Get the command name EditingFind.
             * @name GC.Spread.Sheets.Designer#EditingFind
             * @example
             * // This example get the EditingFind by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingFind);
             */
            static EditingFind: string;
            /**
             * Get the command name EditingSortFilter.
             * @name GC.Spread.Sheets.Designer#EditingSortFilter
             * @example
             * // This example get the EditingSortFilter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditingSortFilter);
             */
            static EditingSortFilter: string;
            /**
             * Get the command name EditLinks.
             * @name GC.Spread.Sheets.Designer#EditLinks
             * @example
             * // This example get the EditLinks by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditLinks);
             */
            static EditLinks: string;
            /**
             * Get the command name EditShapeHyperlink.
             * @name GC.Spread.Sheets.Designer#EditShapeHyperlink
             * @example
             * // This example get the EditShapeHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditShapeHyperlink);
             */
            static EditShapeHyperlink: string;
            /**
             * Get the command name EditShapeText.
             * @name GC.Spread.Sheets.Designer#EditShapeText
             * @example
             * // This example get the EditShapeText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.EditShapeText);
             */
            static EditShapeText: string;
            /**
             * Get the command name ErrorBars.
             * @name GC.Spread.Sheets.Designer#ErrorBars
             * @example
             * // This example get the ErrorBars by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ErrorBars);
             */
            static ErrorBars: string;
            /**
             * Get the command name FieldListTreePanel.
             * @name GC.Spread.Sheets.Designer#FieldListTreePanel
             * @example
             * // This example get the FieldListTreePanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FieldListTreePanel);
             */
            static FieldListTreePanel: string;
            /**
             * Get the command name FileMenuButton.
             * @name GC.Spread.Sheets.Designer#FileMenuButton
             * @example
             * // This example get the FileMenuButton by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FileMenuButton);
             */
            static FileMenuButton: string;
            /**
             * Get the command name FileMenuPanel.
             * @name GC.Spread.Sheets.Designer#FileMenuPanel
             * @example
             * // This example get the FileMenuPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FileMenuPanel);
             */
            static FileMenuPanel: string;
            /**
             * Get the command name FillDown.
             * @name GC.Spread.Sheets.Designer#FillDown
             * @example
             * // This example get the FillDown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FillDown);
             */
            static FillDown: string;
            /**
             * Get the command name FilledRadarChart.
             * @name GC.Spread.Sheets.Designer#FilledRadarChart
             * @example
             * // The example get the FilledRadarChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FilledRadarChart);
             */
            static FilledRadarChart: string;
            /**
             * Get the command name FillLeft.
             * @name GC.Spread.Sheets.Designer#FillLeft
             * @example
             * // This example get the FillLeft by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FillLeft);
             */
            static FillLeft: string;
            /**
             * Get the command name FillRight.
             * @name GC.Spread.Sheets.Designer#FillRight
             * @example
             * // This example get the FillRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FillRight);
             */
            static FillRight: string;
            /**
             * Get the command name FillSeries.
             * @name GC.Spread.Sheets.Designer#FillSeries
             * @example
             * // This example get the FillSeries by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FillSeries);
             */
            static FillSeries: string;
            /**
             * Get the command name FillUp.
             * @name GC.Spread.Sheets.Designer#FillUp
             * @example
             * // This example get the FillUp by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FillUp);
             */
            static FillUp: string;
            /**
             * Get the command name Filter.
             * @name GC.Spread.Sheets.Designer#Filter
             * @example
             * // This example get the Filter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Filter);
             */
            static Filter: string;
            /**
             * Get the command name FindDialogFind.
             * @name GC.Spread.Sheets.Designer#FindDialogFind
             * @example
             * // This example get the FindDialogFind by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FindDialogFind);
             */
            static FindDialogFind: string;
            /**
             * Get the command name FindDialogGoto.
             * @name GC.Spread.Sheets.Designer#FindDialogGoto
             * @example
             * // This example get the FindDialogGoto by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FindDialogGoto);
             */
            static FindDialogGoto: string;
            /**
             * Get the command name FindDialogGotoSpecial.
             * @name GC.Spread.Sheets.Designer#FindDialogGotoSpecial
             * @example
             * // This example get the FindDialogGotoSpecial by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FindDialogGotoSpecial);
             */
            static FindDialogGotoSpecial: string;
            /**
             * Get the command name FindDialogReplace.
             * @name GC.Spread.Sheets.Designer#FindDialogReplace
             * @example
             * // This example get the FindDialogReplace by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FindDialogReplace);
             */
            static FindDialogReplace: string;
            /**
             * Get the command name FitPageScale.
             * @name GC.Spread.Sheets.Designer#FitPageScale
             * @example
             * // This example get the FitPageScale by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FitPageTall);
             */
            static FitPageScale: string;
            /**
             * Get the command name FitPageTall.
             * @name GC.Spread.Sheets.Designer#FitPageTall
             * @example
             * // This example get the FitPageTall by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FitPageTall);
             */
            static FitPageTall: string;
            /**
             * Get the command name FitPageWidth.
             * @name GC.Spread.Sheets.Designer#FitPageWidth
             * @example
             * // This example get the FitPageWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FitPageWidth);
             */
            static FitPageWidth: string;
            /**
             * Get the command name FloatingObjectCopy.
             * @name GC.Spread.Sheets.Designer#FloatingObjectCopy
             * @example
             * // This example get the FloatingObjectCopy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FloatingObjectCopy);
             */
            static FloatingObjectCopy: string;
            /**
             * Get the command name FloatingObjectCut.
             * @name GC.Spread.Sheets.Designer#FloatingObjectCut
             * @example
             * // This example get the FloatingObjectCut by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FloatingObjectCut);
             */
            static FloatingObjectCut: string;
            /**
             * Get the command name FontDoubleUnderline.
             * @name GC.Spread.Sheets.Designer#FontDoubleUnderline
             * @example
             * // This example get the FontDoubleUnderline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontDoubleUnderline);
             */
            static FontDoubleUnderline: string;
            /**
             * Get the command name FontFamily.
             * @name GC.Spread.Sheets.Designer#FontFamily
             * @example
             * // This example get the FontFamily by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontFamily);
             */
            static FontFamily: string;
            /**
             * Get the command name FontItalic.
             * @name GC.Spread.Sheets.Designer#FontItalic
             * @example
             * // This example get the FontItalic by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontItalic);
             */
            static FontItalic: string;
            /**
             * Get the command name FontSize.
             * @name GC.Spread.Sheets.Designer#FontSize
             * @example
             * // This example get the FontSize by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontSize);
             */
            static FontSize: string;
            /**
             * Get the command name FontUnderline.
             * @name GC.Spread.Sheets.Designer#FontUnderline
             * @example
             * // This example get the FontUnderline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontUnderline);
             */
            static FontUnderline: string;
            /**
             * Get the command name FontWeight.
             * @name GC.Spread.Sheets.Designer#FontWeight
             * @example
             * // This example get the FontWeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FontWeight);
             */
            static FontWeight: string;
            /**
             * Get the command name ForeColor.
             * @name GC.Spread.Sheets.Designer#ForeColor
             * @example
             * // This example get the ForeColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ForeColor);
             */
            static ForeColor: string;
            /**
             * Get the command name FormatCells.
             * @name GC.Spread.Sheets.Designer#FormatCells
             * @example
             * // This example get the FormatCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatCells);
             */
            static FormatCells: string;
            /**
             * Get the command name FormatChart.
             * @name GC.Spread.Sheets.Designer#FormatChart
             * @example
             * // This example get the FormatChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatChart);
             */
            static FormatChart: string;
            /**
             * Get the command name FormatComma.
             * @name GC.Spread.Sheets.Designer#FormatComma
             * @example
             * // This example get the FormatComma by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatComma);
             */
            static FormatComma: string;
            /**
             * Get the command name FormatComment.
             * @name GC.Spread.Sheets.Designer#FormatComment
             * @example
             * // This example get the FormatComment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatComment);
             */
            static FormatComment: string;
            /**
             * Get the command name FormatGeneral.
             * @name GC.Spread.Sheets.Designer#FormatGeneral
             * @example
             * // This example get the FormatGeneral by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatGeneral);
             */
            static FormatGeneral: string;
            /**
             * Get the command name FormatMore.
             * @name GC.Spread.Sheets.Designer#FormatMore
             * @example
             * // This example get the FormatMore by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatMore);
             */
            static FormatMore: string;
            /**
             * Get the command name FormatPercentage.
             * @name GC.Spread.Sheets.Designer#FormatPercentage
             * @example
             * // This example get the FormatPercentage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatPercentage);
             */
            static FormatPercentage: string;
            /**
             * Get the command name FormatShapes.
             * @name GC.Spread.Sheets.Designer#FormatShapes
             * @example
             * // This example get the FormatShapes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatShapes);
             */
            static FormatShapes: string;
            /**
             * Get the command name FormatTable.
             * @name GC.Spread.Sheets.Designer#FormatTable
             * @example
             * // This example get the FormatTable by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatTable);
             */
            static FormatTable: string;
            /**
             * Get the command name FormatTable2.
             * @name GC.Spread.Sheets.Designer#FormatTable2
             * @example
             * // This example get the FormatTable2 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatTable2);
             */
            static FormatTable2: string;
            /**
             * Get the command name FormatTableListContent.
             * @name GC.Spread.Sheets.Designer#FormatTableListContent
             * @example
             * // This example get the FormatTableListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatTableListContent);
             */
            static FormatTableListContent: string;
            /**
             * Get the command name FormatTableSheet.
             * @name GC.Spread.Sheets.Designer#FormatTableSheet
             * @example
             * // This example get the FormatTableSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatTableSheet);
             */
            static FormatTableSheet: string;
            /**
             * Get the command name FormatTableSheetListContent.
             * @name GC.Spread.Sheets.Designer#FormatTableSheetListContent
             * @example
             * // This example get the FormatTableSheetListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormatTableSheetListContent);
             */
            static FormatTableSheetListContent: string;
            /**
             * Get the command name FormulaAutoSum.
             * @name GC.Spread.Sheets.Designer#FormulaAutoSum
             * @example
             * // This example get the FormulaAutoSum by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaAutoSum);
             */
            static FormulaAutoSum: string;
            /**
             * Get the command name FormulaBarPanel.
             * @name GC.Spread.Sheets.Designer#FormulaBarPanel
             * @example
             * // This example get the FormulaBarPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaBarPanel);
             */
            static FormulaBarPanel: string;
            /**
             * Get the command name FormulaDateTime.
             * @name GC.Spread.Sheets.Designer#FormulaDateTime
             * @example
             * // This example get the FormulaDateTime by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaDateTime);
             */
            static FormulaDateTime: string;
            /**
             * Get the command name FormulaFinancial.
             * @name GC.Spread.Sheets.Designer#FormulaFinancial
             * @example
             * // This example get the FormulaFinancial by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaFinancial);
             */
            static FormulaFinancial: string;
            /**
             * Get the command name FormulaLookupReference.
             * @name GC.Spread.Sheets.Designer#FormulaLookupReference
             * @example
             * // This example get the FormulaLookupReference by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaLookupReference);
             */
            static FormulaLookupReference: string;
            /**
             * Get the command name FormulaLookupReferenceAllowDynamicArray.
             * @name GC.Spread.Sheets.Designer#FormulaLookupReferenceAllowDynamicArray
             * @example
             * // This example get the FormulaLookupReferenceAllowDynamicArray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaLookupReferenceAllowDynamicArray);
             */
            static FormulaLookupReferenceAllowDynamicArray: string;
            /**
             * Get the command name FormulaMathTrig.
             * @name GC.Spread.Sheets.Designer#FormulaMathTrig
             * @example
             * // This example get the FormulaMathTrig by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaMathTrig);
             */
            static FormulaMathTrig: string;
            /**
             * Get the command name FormulaMathTrigAllowDynamicArray.
             * @name GC.Spread.Sheets.Designer#FormulaMathTrigAllowDynamicArray
             * @example
             * // This example get the FormulaMathTrigAllowDynamicArray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaMathTrigAllowDynamicArray);
             */
            static FormulaMathTrigAllowDynamicArray: string;
            /**
             * Get the command name FormulasAndFormatting.
             * @name GC.Spread.Sheets.Designer#FormulasAndFormatting
             * @example
             * // This example get the FormulasAndFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulasAndFormatting);
             */
            static FormulasAndFormatting: string;
            /**
             * Get the command name FormulaSparklineSetting.
             * @name GC.Spread.Sheets.Designer#FormulaSparklineSetting
             * @example
             * // This example get the FormulaSparklineSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaSparklineSetting);
             */
            static FormulaSparklineSetting: string;
            /**
             * Get the command name FormulaText.
             * @name GC.Spread.Sheets.Designer#FormulaText
             * @example
             * // This example get the FormulaText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FormulaText);
             */
            static FormulaText: string;
            /**
             * Get the command name FractionFormat.
             * @name GC.Spread.Sheets.Designer#FractionFormat
             * @example
             * // This example get the FractionFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FractionFormat);
             */
            static FractionFormat: string;
            /**
             * Get the command name FreezeBottomRow.
             * @name GC.Spread.Sheets.Designer#FreezeBottomRow
             * @example
             * // This example get the FreezeBottomRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FreezeBottomRow);
             */
            static FreezeBottomRow: string;
            /**
             * Get the command name FreezeFirstColumn.
             * @name GC.Spread.Sheets.Designer#FreezeFirstColumn
             * @example
             * // This example get the FreezeFirstColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FreezeFirstColumn);
             */
            static FreezeFirstColumn: string;
            /**
             * Get the command name FreezeLastColumn.
             * @name GC.Spread.Sheets.Designer#FreezeLastColumn
             * @example
             * // This example get the FreezeLastColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FreezeLastColumn);
             */
            static FreezeLastColumn: string;
            /**
             * Get the command name FreezePanes.
             * @name GC.Spread.Sheets.Designer#FreezePanes
             * @example
             * // This example get the FreezePanes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FreezePanes);
             */
            static FreezePanes: string;
            /**
             * Get the command name FreezeTopRow.
             * @name GC.Spread.Sheets.Designer#FreezeTopRow
             * @example
             * // This example get the FreezeTopRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FreezeTopRow);
             */
            static FreezeTopRow: string;
            /**
             * Get the command name FunnelChart.
             * @name GC.Spread.Sheets.Designer#FunnelChart
             * @example
             * // The example get the FunnelChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FunnelChart);
             */
            static FunnelChart: string;
            /**
             * Get the command name FunnelChartGroup.
             * @name GC.Spread.Sheets.Designer#FunnelChartGroup
             * @example
             * // The example get the FunnelChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FunnelChartGroup);
             */
            static FunnelChartGroup: string;
            /**
             * Get the command name FunnelChartPanel.
             * @name GC.Spread.Sheets.Designer#FunnelChartPanel
             * @example
             * // This example get the FunnelChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FunnelChartPanel);
             */
            static FunnelChartPanel: string;
            /**
             * Get the command name FunnelOrStockChartPreview.
             * @name GC.Spread.Sheets.Designer#FunnelOrStockChartPreview
             * @example
             * // The example get the FunnelOrStockChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.FunnelOrStockChartPreview);
             */
            static FunnelOrStockChartPreview: string;
            /**
             * Get the command name GradientFill.
             * @name GC.Spread.Sheets.Designer#GradientFill
             * @example
             * // This example get the GradientFill by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFill);
             */
            static GradientFill: string;
            /**
             * Get the command name GradientFillBlueDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillBlueDataBar
             * @example
             * // This example get the GradientFillBlueDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillBlueDataBar);
             */
            static GradientFillBlueDataBar: string;
            /**
             * Get the command name GradientFillGreenDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillGreenDataBar
             * @example
             * // This example get the GradientFillGreenDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillGreenDataBar);
             */
            static GradientFillGreenDataBar: string;
            /**
             * Get the command name GradientFillLightBlueDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillLightBlueDataBar
             * @example
             * // This example get the GradientFillLightBlueDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillLightBlueDataBar);
             */
            static GradientFillLightBlueDataBar: string;
            /**
             * Get the command name GradientFillOrangeDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillOrangeDataBar
             * @example
             * // This example get the GradientFillOrangeDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillOrangeDataBar);
             */
            static GradientFillOrangeDataBar: string;
            /**
             * Get the command name GradientFillPurpleDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillPurpleDataBar
             * @example
             * // This example get the GradientFillPurpleDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillPurpleDataBar);
             */
            static GradientFillPurpleDataBar: string;
            /**
             * Get the command name GradientFillRedDataBar.
             * @name GC.Spread.Sheets.Designer#GradientFillRedDataBar
             * @example
             * // This example get the GradientFillRedDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GradientFillRedDataBar);
             */
            static GradientFillRedDataBar: string;
            /**
             * Get the command name GridLines.
             * @name GC.Spread.Sheets.Designer#GridLines
             * @example
             * // This example get the GridLines by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.GridLines);
             */
            static GridLines: string;
            /**
             * Get the command name Group.
             * @name GC.Spread.Sheets.Designer#Group
             * @example
             * // This example get the Group by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Group);
             */
            static Group: string;
            /**
             * Get the command name Headers.
             * @name GC.Spread.Sheets.Designer#Headers
             * @example
             * // This example get the Headers by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Headers);
             */
            static Headers: string;
            /**
             * Get the command name HideColumns.
             * @name GC.Spread.Sheets.Designer#HideColumns
             * @example
             * // This example get the HideColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HideColumns);
             */
            static HideColumns: string;
            /**
             * Get the command name HideDetail.
             * @name GC.Spread.Sheets.Designer#HideDetail
             * @example
             * // This example get the HideDetail by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HideDetail);
             */
            static HideDetail: string;
            /**
             * Get the command name HideFieldList.
             * @name GC.Spread.Sheets.Designer#HideFieldList
             * @example
             * // This example get the HideFieldList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HideFieldList);
             */
            static HideFieldList: string;
            /**
             * Get the command name HideRows.
             * @name GC.Spread.Sheets.Designer#HideRows
             * @example
             * // This example get the HideRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HideRows);
             */
            static HideRows: string;
            /**
             * Get the command name HideSheet.
             * @name GC.Spread.Sheets.Designer#HideSheet
             * @example
             * // This example get the HideSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HideSheet);
             */
            static HideSheet: string;
            /**
             * Get the command name HighlightCellsMoreRules.
             * @name GC.Spread.Sheets.Designer#HighlightCellsMoreRules
             * @example
             * // This example get the HighlightCellsMoreRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsMoreRules);
             */
            static HighlightCellsMoreRules: string;
            /**
             * Get the command name HighlightCellsRules.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRules
             * @example
             * // This example get the HighlightCellsRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRules);
             */
            static HighlightCellsRules: string;
            /**
             * Get the command name HighlightCellsRulesBetween.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesBetween
             * @example
             * // This example get the HighlightCellsRulesBetween by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesBetween);
             */
            static HighlightCellsRulesBetween: string;
            /**
             * Get the command name HighlightCellsRulesContains.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesContains
             * @example
             * // This example get the HighlightCellsRulesContains by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesContains);
             */
            static HighlightCellsRulesContains: string;
            /**
             * Get the command name HighlightCellsRulesDateOccurring.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesDateOccurring
             * @example
             * // This example get the HighlightCellsRulesDateOccurring by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesDateOccurring);
             */
            static HighlightCellsRulesDateOccurring: string;
            /**
             * Get the command name HighlightCellsRulesDuplicateValues.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesDuplicateValues
             * @example
             * // This example get the HighlightCellsRulesDuplicateValues by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesDuplicateValues);
             */
            static HighlightCellsRulesDuplicateValues: string;
            /**
             * Get the command name HighlightCellsRulesEqualTo.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesEqualTo
             * @example
             * // This example get the HighlightCellsRulesEqualTo by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesEqualTo);
             */
            static HighlightCellsRulesEqualTo: string;
            /**
             * Get the command name HighlightCellsRulesGreaterThan.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesGreaterThan
             * @example
             * // This example get the HighlightCellsRulesGreaterThan by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesGreaterThan);
             */
            static HighlightCellsRulesGreaterThan: string;
            /**
             * Get the command name HighlightCellsRulesLessThan.
             * @name GC.Spread.Sheets.Designer#HighlightCellsRulesLessThan
             * @example
             * // This example get the HighlightCellsRulesLessThan by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HighlightCellsRulesLessThan);
             */
            static HighlightCellsRulesLessThan: string;
            /**
             * Get the command name HyperlinkCellType.
             * @name GC.Spread.Sheets.Designer#HyperlinkCellType
             * @example
             * // This example get the HyperlinkCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.HyperlinkCellType);
             */
            static HyperlinkCellType: string;
            /**
             * Get the command name IconSet3Triangles.
             * @name GC.Spread.Sheets.Designer#IconSet3Triangles
             * @example
             * // This example get the IconSet3Triangles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSet3Triangles);
             */
            static IconSet3Triangles: string;
            /**
             * Get the command name IconSetFiveArrowsColored.
             * @name GC.Spread.Sheets.Designer#IconSetFiveArrowsColored
             * @example
             * // This example get the IconSetFiveArrowsColored by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFiveArrowsColored);
             */
            static IconSetFiveArrowsColored: string;
            /**
             * Get the command name IconSetFiveArrowsGray.
             * @name GC.Spread.Sheets.Designer#IconSetFiveArrowsGray
             * @example
             * // This example get the IconSetFiveArrowsGray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFiveArrowsGray);
             */
            static IconSetFiveArrowsGray: string;
            /**
             * Get the command name IconSetFiveBoxes.
             * @name GC.Spread.Sheets.Designer#IconSetFiveBoxes
             * @example
             * // This example get the IconSetFiveBoxes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFiveBoxes);
             */
            static IconSetFiveBoxes: string;
            /**
             * Get the command name IconSetFiveQuarters.
             * @name GC.Spread.Sheets.Designer#IconSetFiveQuarters
             * @example
             * // This example get the IconSetFiveQuarters by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFiveQuarters);
             */
            static IconSetFiveQuarters: string;
            /**
             * Get the command name IconSetFiveRatings.
             * @name GC.Spread.Sheets.Designer#IconSetFiveRatings
             * @example
             * // This example get the IconSetFiveRatings by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFiveRatings);
             */
            static IconSetFiveRatings: string;
            /**
             * Get the command name IconSetFourArrowsColored.
             * @name GC.Spread.Sheets.Designer#IconSetFourArrowsColored
             * @example
             * // This example get the IconSetFourArrowsColored by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFourArrowsColored);
             */
            static IconSetFourArrowsColored: string;
            /**
             * Get the command name IconSetFourArrowsGray.
             * @name GC.Spread.Sheets.Designer#IconSetFourArrowsGray
             * @example
             * // This example get the IconSetFourArrowsGray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFourArrowsGray);
             */
            static IconSetFourArrowsGray: string;
            /**
             * Get the command name IconSetFourRatings.
             * @name GC.Spread.Sheets.Designer#IconSetFourRatings
             * @example
             * // This example get the IconSetFourRatings by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFourRatings);
             */
            static IconSetFourRatings: string;
            /**
             * Get the command name IconSetFourRedToBlack.
             * @name GC.Spread.Sheets.Designer#IconSetFourRedToBlack
             * @example
             * // This example get the IconSetFourRedToBlack by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFourRedToBlack);
             */
            static IconSetFourRedToBlack: string;
            /**
             * Get the command name IconSetFourTrafficLights.
             * @name GC.Spread.Sheets.Designer#IconSetFourTrafficLights
             * @example
             * // This example get the IconSetFourTrafficLights by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetFourTrafficLights);
             */
            static IconSetFourTrafficLights: string;
            /**
             * Get the command name IconSetList.
             * @name GC.Spread.Sheets.Designer#IconSetList
             * @example
             * // This example get the IconSetList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetList);
             */
            static IconSetList: string;
            /**
             * Get the command name IconSetThreeArrowsColored.
             * @name GC.Spread.Sheets.Designer#IconSetThreeArrowsColored
             * @example
             * // This example get the IconSetThreeArrowsColored by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeArrowsColored);
             */
            static IconSetThreeArrowsColored: string;
            /**
             * Get the command name IconSetThreeArrowsGray.
             * @name GC.Spread.Sheets.Designer#IconSetThreeArrowsGray
             * @example
             * // This example get the IconSetThreeArrowsGray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeArrowsGray);
             */
            static IconSetThreeArrowsGray: string;
            /**
             * Get the command name IconSetThreeFlags.
             * @name GC.Spread.Sheets.Designer#IconSetThreeFlags
             * @example
             * // This example get the IconSetThreeFlags by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeFlags);
             */
            static IconSetThreeFlags: string;
            /**
             * Get the command name IconSetThreeSigns.
             * @name GC.Spread.Sheets.Designer#IconSetThreeSigns
             * @example
             * // This example get the IconSetThreeSigns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeSigns);
             */
            static IconSetThreeSigns: string;
            /**
             * Get the command name IconSetThreeStars.
             * @name GC.Spread.Sheets.Designer#IconSetThreeStars
             * @example
             * // This example get the IconSetThreeStars by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeStars);
             */
            static IconSetThreeStars: string;
            /**
             * Get the command name IconSetThreeSymbolsCircled.
             * @name GC.Spread.Sheets.Designer#IconSetThreeSymbolsCircled
             * @example
             * // This example get the IconSetThreeSymbolsCircled by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeSymbolsCircled);
             */
            static IconSetThreeSymbolsCircled: string;
            /**
             * Get the command name IconSetThreeSymbolsUnCircled.
             * @name GC.Spread.Sheets.Designer#IconSetThreeSymbolsUnCircled
             * @example
             * // This example get the IconSetThreeSymbolsUnCircled by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeSymbolsUnCircled);
             */
            static IconSetThreeSymbolsUnCircled: string;
            /**
             * Get the command name IconSetThreeTrafficLightsRimmed.
             * @name GC.Spread.Sheets.Designer#IconSetThreeTrafficLightsRimmed
             * @example
             * // This example get the IconSetThreeTrafficLightsRimmed by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeTrafficLightsRimmed);
             */
            static IconSetThreeTrafficLightsRimmed: string;
            /**
             * Get the command name IconSetThreeTrafficLightsUnRimmed.
             * @name GC.Spread.Sheets.Designer#IconSetThreeTrafficLightsUnRimmed
             * @example
             * // This example get the IconSetThreeTrafficLightsUnRimmed by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IconSetThreeTrafficLightsUnRimmed);
             */
            static IconSetThreeTrafficLightsUnRimmed: string;
            /**
             * Get the command name IncreaseDecimal.
             * @name GC.Spread.Sheets.Designer#IncreaseDecimal
             * @example
             * // This example get the IncreaseDecimal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IncreaseDecimal);
             */
            static IncreaseDecimal: string;
            /**
             * Get the command name IncreaseFontsize.
             * @name GC.Spread.Sheets.Designer#IncreaseFontsize
             * @example
             * // This example get the IncreaseFontsize by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IncreaseFontsize);
             */
            static IncreaseFontsize: string;
            /**
             * Get the command name IncreaseIndent.
             * @name GC.Spread.Sheets.Designer#IncreaseIndent
             * @example
             * // This example get the IncreaseIndent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IncreaseIndent);
             */
            static IncreaseIndent: string;
            /**
             * Get the command name IndicatorAlignment.
             * @name GC.Spread.Sheets.Designer#IndicatorAlignment
             * @example
             * // This example get the IndicatorAlignment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorAlignment);
             */
            static IndicatorAlignment: string;
            /**
             * Get the command name IndicatorFonts.
             * @name GC.Spread.Sheets.Designer#IndicatorFonts
             * @example
             * // This example get the IndicatorFonts by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorFonts);
             */
            static IndicatorFonts: string;
            /**
             * Get the command name IndicatorHeaderOrFooter.
             * @name GC.Spread.Sheets.Designer#IndicatorHeaderOrFooter
             * @example
             * // This example get the IndicatorHeaderOrFooter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorHeaderOrFooter);
             */
            static IndicatorHeaderOrFooter: string;
            /**
             * Get the command name IndicatorMargins.
             * @name GC.Spread.Sheets.Designer#IndicatorMargins
             * @example
             * // This example get the IndicatorMargins by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorMargins);
             */
            static IndicatorMargins: string;
            /**
             * Get the command name IndicatorNumbers.
             * @name GC.Spread.Sheets.Designer#IndicatorNumbers
             * @example
             * // This example get the IndicatorNumbers by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorNumbers);
             */
            static IndicatorNumbers: string;
            /**
             * Get the command name IndicatorOutline.
             * @name GC.Spread.Sheets.Designer#IndicatorOutline
             * @example
             * // This example get the IndicatorOutline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorOutline);
             */
            static IndicatorOutline: string;
            /**
             * Get the command name IndicatorPage.
             * @name GC.Spread.Sheets.Designer#IndicatorPage
             * @example
             * // This example get the IndicatorPage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorPage);
             */
            static IndicatorPage: string;
            /**
             * Get the command name Indicators.
             * @name GC.Spread.Sheets.Designer#Indicators
             * @example
             * // This example get the Indicators by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Indicators);
             */
            static Indicators: string;
            /**
             * Get the command name IndicatorSheet.
             * @name GC.Spread.Sheets.Designer#IndicatorSheet
             * @example
             * // This example get the IndicatorSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.IndicatorSheet);
             */
            static IndicatorSheet: string;
            /**
             * Get the command name InnerGroup.
             * @name GC.Spread.Sheets.Designer#InnerGroup
             * @example
             * // This example get the InnerGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InnerGroup);
             */
            static InnerGroup: string;
            /**
             * Get the command name InnerUngroup.
             * @name GC.Spread.Sheets.Designer#InnerUngroup
             * @example
             * // This example get the InnerUngroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InnerUngroup);
             */
            static InnerUngroup: string;
            /**
             * Get the command name InsertBarCode.
             * @name GC.Spread.Sheets.Designer#InsertBarCode
             * @example
             * // This example get the InsertBarCode by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertBarCode);
             */
            static InsertBarCode: string;
            /**
             * Get the command name InsertCameraShape.
             * @name GC.Spread.Sheets.Designer#InsertCameraShape
             * @example
             * // This example get the InsertCameraShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCameraShape);
             */
            static InsertCameraShape: string;
            /**
             * Get the command name InsertCellsInRibbon.
             * @name GC.Spread.Sheets.Designer#InsertCellsInRibbon
             * @example
             * // This example get the InsertCellsInRibbon by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCellsInRibbon);
             */
            static InsertCellsInRibbon: string;
            /**
             * Get the command name InsertChart.
             * @name GC.Spread.Sheets.Designer#InsertChart
             * @example
             * // This example get the InsertChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertChart);
             */
            static InsertChart: string;
            /**
             * Get the command name InsertColumns.
             * @name GC.Spread.Sheets.Designer#InsertColumns
             * @example
             * // This example get the InsertColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertColumns);
             */
            static InsertColumns: string;
            /**
             * Get the command name InsertComment.
             * @name GC.Spread.Sheets.Designer#InsertComment
             * @example
             * // This example get the InsertComment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertComment);
             */
            static InsertComment: string;
            /**
             * Get the command name InsertCopiedCells.
             * @name GC.Spread.Sheets.Designer#InsertCopiedCells
             * @example
             * // This example get the InsertCopiedCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCopiedCells);
             */
            static InsertCopiedCells: string;
            /**
             * Get the command name InsertCopiedCellsShiftCellsDown.
             * @name GC.Spread.Sheets.Designer#InsertCopiedCellsShiftCellsDown
             * @example
             * // This example get the InsertCopiedCellsShiftCellsDown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCopiedCellsShiftCellsDown);
             */
            static InsertCopiedCellsShiftCellsDown: string;
            /**
             * Get the command name InsertCopiedCellsShiftCellsRight.
             * @name GC.Spread.Sheets.Designer#InsertCopiedCellsShiftCellsRight
             * @example
             * // This example get the InsertCopiedCellsShiftCellsRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCopiedCellsShiftCellsRight);
             */
            static InsertCopiedCellsShiftCellsRight: string;
            /**
             * Get the command name InsertCutCells.
             * @name GC.Spread.Sheets.Designer#InsertCutCells
             * @example
             * // This example get the InsertCutCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCutCells);
             */
            static InsertCutCells: string;
            /**
             * Get the command name InsertCutCellsShiftCellsDown.
             * @name GC.Spread.Sheets.Designer#InsertCutCellsShiftCellsDown
             * @example
             * // This example get the InsertCutCellsShiftCellsDown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCutCellsShiftCellsDown);
             */
            static InsertCutCellsShiftCellsDown: string;
            /**
             * Get the command name InsertCutCellsShiftCellsRight.
             * @name GC.Spread.Sheets.Designer#InsertCutCellsShiftCellsRight
             * @example
             * // This example get the InsertCutCellsShiftCellsRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertCutCellsShiftCellsRight);
             */
            static InsertCutCellsShiftCellsRight: string;
            /**
             * Get the command name InsertDataManager.
             * @name GC.Spread.Sheets.Designer#InsertDataManager
             * @example
             * // This example get the InsertDataManager by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertDataManager);
             */
            static InsertDataManager: string;
            /**
             * Get the command name InsertDialog.
             * @name GC.Spread.Sheets.Designer#InsertDialog
             * @example
             * // This example get the InsertDialog by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertDialog);
             */
            static InsertDialog: string;
            /**
             * Get the command name InsertFunction.
             * @name GC.Spread.Sheets.Designer#InsertFunction
             * @example
             * // This example get the InsertFunction by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertFunction);
             */
            static InsertFunction: string;
            /**
             * Get the command name InsertHyperLink.
             * @name GC.Spread.Sheets.Designer#InsertHyperLink
             * @example
             * // This example get the InsertHyperLink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertHyperLink);
             */
            static InsertHyperLink: string;
            /**
             * Get the command name InsertPageBreak.
             * @name GC.Spread.Sheets.Designer#InsertPageBreak
             * @example
             * // This example get the InsertPageBreak by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertPageBreak);
             */
            static InsertPageBreak: string;
            /**
             * Get the command name InsertPicture.
             * @name GC.Spread.Sheets.Designer#InsertPicture
             * @example
             * // This example get the InsertPicture by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertPicture);
             */
            static InsertPicture: string;
            /**
             * Get the command name InsertPivotSlicer.
             * @name GC.Spread.Sheets.Designer#InsertPivotSlicer
             * @example
             * // This example get the InsertPivotSlicer by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertPivotSlicer);
             */
            static InsertPivotSlicer: string;
            /**
             * Get the command name InsertPivotTable.
             * @name GC.Spread.Sheets.Designer#InsertPivotTable
             * @example
             * // This example get the InsertPivotTable by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertPivotTable);
             */
            static InsertPivotTable: string;
            /**
             * Get the command name InsertPivotTimeline.
             * @name GC.Spread.Sheets.Designer#InsertPivotTimeline
             * @example
             * // This example get the InsertPivotTimeline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertPivotTimeline);
             */
            static InsertPivotTimeline: string;
            /**
             * Get the command name InsertRows.
             * @name GC.Spread.Sheets.Designer#InsertRows
             * @example
             * // This example get the InsertRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertRows);
             */
            static InsertRows: string;
            /**
             * Get the command name InsertShape.
             * @name GC.Spread.Sheets.Designer#InsertShape
             * @example
             * // This example get the InsertShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertShape);
             */
            static InsertShape: string;
            /**
             * Get the command name InsertShapeList.
             * @name GC.Spread.Sheets.Designer#InsertShapeList
             * @example
             * // This example get the InsertShapeList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertShapeList);
             */
            static InsertShapeList: string;
            /**
             * Get the command name InsertSheet.
             * @name GC.Spread.Sheets.Designer#InsertSheet
             * @example
             * // This example get the InsertSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertSheet);
             */
            static InsertSheet: string;
            /**
             * Get the command name InsertSheetColumns.
             * @name GC.Spread.Sheets.Designer#InsertSheetColumns
             * @example
             * // This example get the InsertSheetColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertSheetColumns);
             */
            static InsertSheetColumns: string;
            /**
             * Get the command name InsertSheetInRibbon.
             * @name GC.Spread.Sheets.Designer#InsertSheetInRibbon
             * @example
             * // This example get the InsertSheetInRibbon by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertSheetInRibbon);
             */
            static InsertSheetInRibbon: string;
            /**
             * Get the command name InsertSheetRows.
             * @name GC.Spread.Sheets.Designer#InsertSheetRows
             * @example
             * // This example get the InsertSheetRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertSheetRows);
             */
            static InsertSheetRows: string;
            /**
             * Get the command name InsertSlicer.
             * @name GC.Spread.Sheets.Designer#InsertSlicer
             * @example
             * // This example get the InsertSlicer by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertSlicer);
             */
            static InsertSlicer: string;
            /**
             * Get the command name InsertTable.
             * @name GC.Spread.Sheets.Designer#InsertTable
             * @example
             * // This example get the InsertTable by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertTable);
             */
            static InsertTable: string;
            /**
             * Get the command name InsertTableSheet.
             * @name GC.Spread.Sheets.Designer#InsertTableSheet
             * @example
             * // This example get the InsertTableSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.InsertTableSheet);
             */
            static InsertTableSheet: string;
            /**
             * Get the command name ItemHeight.
             * @name GC.Spread.Sheets.Designer#ItemHeight
             * @example
             * // This example get the ItemHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ItemHeight);
             */
            static ItemHeight: string;
            /**
             * Get the command name LeftAlign.
             * @name GC.Spread.Sheets.Designer#LeftAlign
             * @example
             * // This example get the LeftAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LeftAlign);
             */
            static LeftAlign: string;
            /**
             * Get the command name LeftBorder.
             * @name GC.Spread.Sheets.Designer#LeftBorder
             * @example
             * // This example get the LeftBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LeftBorder);
             */
            static LeftBorder: string;
            /**
             * Get the command name Legend.
             * @name GC.Spread.Sheets.Designer#Legend
             * @example
             * // This example get the Legend by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Legend);
             */
            static Legend: string;
            /**
             * Get the command name LineChart.
             * @name GC.Spread.Sheets.Designer#LineChart
             * @example
             * // The example get the LineChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineChart);
             */
            static LineChart: string;
            /**
             * Get the command name LineChartGroup.
             * @name GC.Spread.Sheets.Designer#LineChartGroup
             * @example
             * // The example get the LineChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineChartGroup);
             */
            static LineChartGroup: string;
            /**
             * Get the command name LineChartPanel.
             * @name GC.Spread.Sheets.Designer#LineChartPanel
             * @example
             * // This example get the LineChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineChartPanel);
             */
            static LineChartPanel: string;
            /**
             * Get the command name LineMarkersChart.
             * @name GC.Spread.Sheets.Designer#LineMarkersChart
             * @example
             * // The example get the LineMarkersChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineMarkersChart);
             */
            static LineMarkersChart: string;
            /**
             * Get the command name LineMarkersStacked100Chart.
             * @name GC.Spread.Sheets.Designer#LineMarkersStacked100Chart
             * @example
             * // The example get the LineMarkersStacked100Chart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineMarkersStacked100Chart);
             */
            static LineMarkersStacked100Chart: string;
            /**
             * Get the command name LineMarkersStackedChart.
             * @name GC.Spread.Sheets.Designer#LineMarkersStackedChart
             * @example
             * // The example get the LineMarkersStackedChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineMarkersStackedChart);
             */
            static LineMarkersStackedChart: string;
            /**
             * Get the command name LineOrAreaChartPreview.
             * @name GC.Spread.Sheets.Designer#LineOrAreaChartPreview
             * @example
             * // The example get the LineOrAreaChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineOrAreaChartPreview);
             */
            static LineOrAreaChartPreview: string;
            /**
             * Get the command name LineSparkline.
             * @name GC.Spread.Sheets.Designer#LineSparkline
             * @example
             * // This example get the LineSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineSparkline);
             */
            static LineSparkline: string;
            /**
             * Get the command name LineSparklineGroup.
             * @name GC.Spread.Sheets.Designer#LineSparklineGroup
             * @example
             * // The example get the LineSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineSparklineGroup);
             */
            static LineSparklineGroup: string;
            /**
             * Get the command name LineStacked100Chart.
             * @name GC.Spread.Sheets.Designer#LineStacked100Chart
             * @example
             * // The example get the LineStacked100Chart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineStacked100Chart);
             */
            static LineStacked100Chart: string;
            /**
             * Get the command name LineStackedChart.
             * @name GC.Spread.Sheets.Designer#LineStackedChart
             * @example
             * // The example get the LineStackedChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LineStackedChart);
             */
            static LineStackedChart: string;
            /**
             * Get the command name Link.
             * @name GC.Spread.Sheets.Designer#Link
             * @example
             * // This example get the Link by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Link);
             */
            static Link: string;
            /**
             * Get the command name ListCellType.
             * @name GC.Spread.Sheets.Designer#ListCellType
             * @example
             * // This example get the ListCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ListCellType);
             */
            static ListCellType: string;
            /**
             * Get the command name LoadSchema.
             * @name GC.Spread.Sheets.Designer#LoadSchema
             * @example
             * // This example get the LoadSchema by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LoadSchema);
             */
            static LoadSchema: string;
            /**
             * Get the command name LogicalFormula.
             * @name GC.Spread.Sheets.Designer#LogicalFormula
             * @example
             * // This example get the LogicalFormula by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LogicalFormula);
             */
            static LogicalFormula: string;
            /**
             * Get the command name LogicalFormulaAllowDynamicArray.
             * @name GC.Spread.Sheets.Designer#LogicalFormulaAllowDynamicArray
             * @example
             * // This example get the LogicalFormulaAllowDynamicArray by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LogicalFormulaAllowDynamicArray);
             */
            static LogicalFormulaAllowDynamicArray: string;
            /**
             * Get the command name LongDateformat.
             * @name GC.Spread.Sheets.Designer#LongDateformat
             * @example
             * // This example get the LongDateformat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.LongDateformat);
             */
            static LongDateformat: string;
            /**
             * Get the command name ManageCellState.
             * @name GC.Spread.Sheets.Designer#ManageCellState
             * @example
             * // This example get the ManageCellState by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ManageCellState);
             */
            static ManageCellState: string;
            /**
             * Get the command name Margins.
             * @name GC.Spread.Sheets.Designer#Margins
             * @example
             * // This example get the Margins by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Margins);
             */
            static Margins: string;
            /**
             * Get the command name MarginSelector.
             * @name GC.Spread.Sheets.Designer#MarginSelector
             * @example
             * // This example get the MarginSelector by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MarginSelector);
             */
            static MarginSelector: string;
            /**
             * Get the command name MarginsLastCustom.
             * @name GC.Spread.Sheets.Designer#MarginsLastCustom
             * @example
             * // This example get the MarginsLastCustom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MarginsLastCustom);
             */
            static MarginsLastCustom: string;
            /**
             * Get the command name MarginsNarrow.
             * @name GC.Spread.Sheets.Designer#MarginsNarrow
             * @example
             * // This example get the MarginsNarrow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MarginsNarrow);
             */
            static MarginsNarrow: string;
            /**
             * Get the command name MarginsNormal.
             * @name GC.Spread.Sheets.Designer#MarginsNormal
             * @example
             * // This example get the MarginsNormal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MarginsNormal);
             */
            static MarginsNormal: string;
            /**
             * Get the command name MarginsWide.
             * @name GC.Spread.Sheets.Designer#MarginsWide
             * @example
             * // This example get the MarginsWide by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MarginsWide);
             */
            static MarginsWide: string;
            /**
             * Get the command name MergeAcross.
             * @name GC.Spread.Sheets.Designer#MergeAcross
             * @example
             * // This example get the MergeAcross by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MergeAcross);
             */
            static MergeAcross: string;
            /**
             * Get the command name MergeCells.
             * @name GC.Spread.Sheets.Designer#MergeCells
             * @example
             * // This example get the MergeCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MergeCells);
             */
            static MergeCells: string;
            /**
             * Get the command name MergeCenter.
             * @name GC.Spread.Sheets.Designer#MergeCenter
             * @example
             * // This example get the MergeCenter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MergeCenter);
             */
            static MergeCenter: string;
            /**
             * Get the command name MergeCenterButton.
             * @name GC.Spread.Sheets.Designer#MergeCenterButton
             * @example
             * // This example get the MergeCenterButton by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MergeCenterButton);
             */
            static MergeCenterButton: string;
            /**
             * Get the command name MiddleAlign.
             * @name GC.Spread.Sheets.Designer#MiddleAlign
             * @example
             * // This example get the MiddleAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MiddleAlign);
             */
            static MiddleAlign: string;
            /**
             * Get the command name MonthPickerCellType.
             * @name GC.Spread.Sheets.Designer#MonthPickerCellType
             * @example
             * // This example get the MonthPickerCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MonthPickerCellType);
             */
            static MonthPickerCellType: string;
            /**
             * Get the command name MoreBorder.
             * @name GC.Spread.Sheets.Designer#MoreBorder
             * @example
             * // This example get the MoreBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreBorder);
             */
            static MoreBorder: string;
            /**
             * Get the command name MoreColorScaleRules.
             * @name GC.Spread.Sheets.Designer#MoreColorScaleRules
             * @example
             * // This example get the MoreColorScaleRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreColorScaleRules);
             */
            static MoreColorScaleRules: string;
            /**
             * Get the command name MoreColumnChart.
             * @name GC.Spread.Sheets.Designer#MoreColumnChart
             * @example
             * // The example get the MoreColumnChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreColumnChart);
             */
            static MoreColumnChart: string;
            /**
             * Get the command name MoreComboChart.
             * @name GC.Spread.Sheets.Designer#MoreComboChart
             * @example
             * // The example get the MoreComboChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreComboChart);
             */
            static MoreComboChart: string;
            /**
             * Get the command name MoreDataBarRules.
             * @name GC.Spread.Sheets.Designer#MoreDataBarRules
             * @example
             * // This example get the MoreDataBarRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreDataBarRules);
             */
            static MoreDataBarRules: string;
            /**
             * Get the command name MoreFunctions.
             * @name GC.Spread.Sheets.Designer#MoreFunctions
             * @example
             * // This example get the MoreFunctions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreFunctions);
             */
            static MoreFunctions: string;
            /**
             * Get the command name MoreHierarchyChart.
             * @name GC.Spread.Sheets.Designer#MoreHierarchyChart
             * @example
             * // The example get the MoreHierarchyChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreHierarchyChart);
             */
            static MoreHierarchyChart: string;
            /**
             * Get the command name MoreIconSetRules.
             * @name GC.Spread.Sheets.Designer#MoreIconSetRules
             * @example
             * // This example get the MoreIconSetRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreIconSetRules);
             */
            static MoreIconSetRules: string;
            /**
             * Get the command name MoreLineChart.
             * @name GC.Spread.Sheets.Designer#MoreLineChart
             * @example
             * // The example get the MoreLineChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreLineChart);
             */
            static MoreLineChart: string;
            /**
             * Get the command name MoreOptions.
             * @name GC.Spread.Sheets.Designer#MoreOptions
             * @example
             * // This example get the MoreOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreOptions);
             */
            static MoreOptions: string;
            /**
             * Get the command name MorePaperSizes.
             * @name GC.Spread.Sheets.Designer#MorePaperSizes
             * @example
             * // This example get the MorePaperSizes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MorePaperSizes);
             */
            static MorePaperSizes: string;
            /**
             * Get the command name MorePieChart.
             * @name GC.Spread.Sheets.Designer#MorePieChart
             * @example
             * // The example get the MorePieChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MorePieChart);
             */
            static MorePieChart: string;
            /**
             * Get the command name MoreScatterChart.
             * @name GC.Spread.Sheets.Designer#MoreScatterChart
             * @example
             * // The example get the MoreScatterChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreScatterChart);
             */
            static MoreScatterChart: string;
            /**
             * Get the command name MoreStockChart.
             * @name GC.Spread.Sheets.Designer#MoreStockChart
             * @example
             * // The example get the MoreStockChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoreStockChart);
             */
            static MoreStockChart: string;
            /**
             * Get the command name MoveChart.
             * @name GC.Spread.Sheets.Designer#MoveChart
             * @example
             * // This example get the MoveChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MoveChart);
             */
            static MoveChart: string;
            /**
             * Get the command name MultiColumnPicker.
             * @name GC.Spread.Sheets.Designer#MultiColumnPicker
             * @example
             * // This example get the MultiColumnPicker by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.MultiColumnPicker);
             */
            static MultiColumnPicker: string;
            /**
             * Get the command name NameManager.
             * @name GC.Spread.Sheets.Designer#NameManager
             * @example
             * // This example get the NameManager by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NameManager);
             */
            static NameManager: string;
            /**
             * Get the command name NewCellStyle.
             * @name GC.Spread.Sheets.Designer#NewCellStyle
             * @example
             * // This example get the NewCellStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NewCellStyle);
             */
            static NewCellStyle: string;
            /**
             * Get the command name NewPivotTableStyle.
             * @name GC.Spread.Sheets.Designer#NewPivotTableStyle
             * @example
             * // This example get the NewPivotTableStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NewPivotTableStyle);
             */
            static NewPivotTableStyle: string;
            /**
             * Get the command name NewSlicerStyle.
             * @name GC.Spread.Sheets.Designer#NewSlicerStyle
             * @example
             * // This example get the NewSlicerStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NewSlicerStyle);
             */
            static NewSlicerStyle: string;
            /**
             * Get the command name NewTableStyle.
             * @name GC.Spread.Sheets.Designer#NewTableStyle
             * @example
             * // This example get the NewTableStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NewTableStyle);
             */
            static NewTableStyle: string;
            /**
             * Get the command name NewTimelineStyle.
             * @name GC.Spread.Sheets.Designer#NewTimelineStyle
             * @example
             * // This example get the NewTimelineStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NewTimelineStyle);
             */
            static NewTimelineStyle: string;
            /**
             * Get the command name NoBorder.
             * @name GC.Spread.Sheets.Designer#NoBorder
             * @example
             * // This example get the NoBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NoBorder);
             */
            static NoBorder: string;
            /**
             * Get the command name NumberFormat.
             * @name GC.Spread.Sheets.Designer#NumberFormat
             * @example
             * // This example get the NumberFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.NumberFormat);
             */
            static NumberFormat: string;
            /**
             * Get the command name Open.
             * @name GC.Spread.Sheets.Designer#Open
             * @example
             * // This example get the Open by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Open);
             */
            static Open: string;
            /**
             * Get the command name OpenHyperlink.
             * @name GC.Spread.Sheets.Designer#OpenHyperlink
             * @example
             * // This example get the OpenHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OpenHyperlink);
             */
            static OpenHyperlink: string;
            /**
             * Get the command name OpenShapeHyperlink.
             * @name GC.Spread.Sheets.Designer#OpenShapeHyperlink
             * @example
             * // This example get the OpenShapeHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OpenShapeHyperlink);
             */
            static OpenShapeHyperlink: string;
            /**
             * Get the command name Orientation.
             * @name GC.Spread.Sheets.Designer#Orientation
             * @example
             * // This example get the Orientation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Orientation);
             */
            static Orientation: string;
            /**
             * Get the command name OrientationAngleClockwise.
             * @name GC.Spread.Sheets.Designer#OrientationAngleClockwise
             * @example
             * // This example get the OrientationAngleClockwise by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationAngleClockwise);
             */
            static OrientationAngleClockwise: string;
            /**
             * Get the command name OrientationAngleCounterclockwise.
             * @name GC.Spread.Sheets.Designer#OrientationAngleCounterclockwise
             * @example
             * // This example get the OrientationAngleCounterclockwise by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationAngleCounterclockwise);
             */
            static OrientationAngleCounterclockwise: string;
            /**
             * Get the command name OrientationFormatCellAlignment.
             * @name GC.Spread.Sheets.Designer#OrientationFormatCellAlignment
             * @example
             * // This example get the OrientationFormatCellAlignment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationFormatCellAlignment);
             */
            static OrientationFormatCellAlignment: string;
            /**
             * Get the command name OrientationLandscape.
             * @name GC.Spread.Sheets.Designer#OrientationLandscape
             * @example
             * // This example get the OrientationLandscape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationLandscape);
             */
            static OrientationLandscape: string;
            /**
             * Get the command name OrientationList.
             * @name GC.Spread.Sheets.Designer#OrientationList
             * @example
             * // This example get the OrientationList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationList);
             */
            static OrientationList: string;
            /**
             * Get the command name OrientationPortrait.
             * @name GC.Spread.Sheets.Designer#OrientationPortrait
             * @example
             * // This example get the OrientationPortrait by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationPortrait);
             */
            static OrientationPortrait: string;
            /**
             * Get the command name OrientationRotateTextDown.
             * @name GC.Spread.Sheets.Designer#OrientationRotateTextDown
             * @example
             * // This example get the OrientationRotateTextDown by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationRotateTextDown);
             */
            static OrientationRotateTextDown: string;
            /**
             * Get the command name OrientationRotateTextUp.
             * @name GC.Spread.Sheets.Designer#OrientationRotateTextUp
             * @example
             * // This example get the OrientationRotateTextUp by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationRotateTextUp);
             */
            static OrientationRotateTextUp: string;
            /**
             * Get the command name OrientationVerticalText.
             * @name GC.Spread.Sheets.Designer#OrientationVerticalText
             * @example
             * // This example get the OrientationVerticalText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OrientationVerticalText);
             */
            static OrientationVerticalText: string;
            /**
             * Get the command name OtherSparklineGroup.
             * @name GC.Spread.Sheets.Designer#OtherSparklineGroup
             * @example
             * // The example get the OtherSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OtherSparklineGroup);
             */
            static OtherSparklineGroup: string;
            /**
             * Get the command name OutsideBorder.
             * @name GC.Spread.Sheets.Designer#OutsideBorder
             * @example
             * // This example get the OutsideBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.OutsideBorder);
             */
            static OutsideBorder: string;
            /**
             * Get the command name PageLayoutGridlinesText.
             * @name GC.Spread.Sheets.Designer#PageLayoutGridlinesText
             * @example
             * // This example get the PageLayoutGridlinesText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutGridlinesText);
             */
            static PageLayoutGridlinesText: string;
            /**
             * Get the command name PageLayoutHeadingsText.
             * @name GC.Spread.Sheets.Designer#PageLayoutHeadingsText
             * @example
             * // This example get the PageLayoutHeadingsText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutHeadingsText);
             */
            static PageLayoutHeadingsText: string;
            /**
             * Get the command name PageLayoutPrintGridlines.
             * @name GC.Spread.Sheets.Designer#PageLayoutPrintGridlines
             * @example
             * // This example get the PageLayoutPrintGridlines by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutPrintGridlines);
             */
            static PageLayoutPrintGridlines: string;
            /**
             * Get the command name PageLayoutPrintHeadings.
             * @name GC.Spread.Sheets.Designer#PageLayoutPrintHeadings
             * @example
             * // This example get the PageLayoutPrintHeadings by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutPrintHeadings);
             */
            static PageLayoutPrintHeadings: string;
            /**
             * Get the command name PageLayoutViewGridlines.
             * @name GC.Spread.Sheets.Designer#PageLayoutViewGridlines
             * @example
             * // This example get the PageLayoutViewGridlines by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutViewGridlines);
             */
            static PageLayoutViewGridlines: string;
            /**
             * Get the command name PageLayoutViewHeadings.
             * @name GC.Spread.Sheets.Designer#PageLayoutViewHeadings
             * @example
             * // This example get the PageLayoutViewHeadings by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PageLayoutViewHeadings);
             */
            static PageLayoutViewHeadings: string;
            /**
             * Get the command name PaperKindSelector.
             * @name GC.Spread.Sheets.Designer#PaperKindSelector
             * @example
             * // This example get the PaperKindSelector by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperKindSelector);
             */
            static PaperKindSelector: string;
            /**
             * Get the command name PaperSize.
             * @name GC.Spread.Sheets.Designer#PaperSize
             * @example
             * // This example get the PaperSize by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSize);
             */
            static PaperSize: string;
            /**
             * Get the command name PaperSizeA3.
             * @name GC.Spread.Sheets.Designer#PaperSizeA3
             * @example
             * // This example get the PaperSizeA3 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeA3);
             */
            static PaperSizeA3: string;
            /**
             * Get the command name PaperSizeA4.
             * @name GC.Spread.Sheets.Designer#PaperSizeA4
             * @example
             * // This example get the PaperSizeA4 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeA4);
             */
            static PaperSizeA4: string;
            /**
             * Get the command name PaperSizeA5.
             * @name GC.Spread.Sheets.Designer#PaperSizeA5
             * @example
             * // This example get the PaperSizeA5 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeA5);
             */
            static PaperSizeA5: string;
            /**
             * Get the command name PaperSizeB4.
             * @name GC.Spread.Sheets.Designer#PaperSizeB4
             * @example
             * // This example get the PaperSizeB4 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeB4);
             */
            static PaperSizeB4: string;
            /**
             * Get the command name PaperSizeB5.
             * @name GC.Spread.Sheets.Designer#PaperSizeB5
             * @example
             * // This example get the PaperSizeB5 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeB5);
             */
            static PaperSizeB5: string;
            /**
             * Get the command name PaperSizeExecutive.
             * @name GC.Spread.Sheets.Designer#PaperSizeExecutive
             * @example
             * // This example get the PaperSizeExecutive by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeExecutive);
             */
            static PaperSizeExecutive: string;
            /**
             * Get the command name PaperSizeLegal.
             * @name GC.Spread.Sheets.Designer#PaperSizeLegal
             * @example
             * // This example get the PaperSizeLegal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeLegal);
             */
            static PaperSizeLegal: string;
            /**
             * Get the command name PaperSizeLetter.
             * @name GC.Spread.Sheets.Designer#PaperSizeLetter
             * @example
             * // This example get the PaperSizeLetter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeLetter);
             */
            static PaperSizeLetter: string;
            /**
             * Get the command name PaperSizeStatement.
             * @name GC.Spread.Sheets.Designer#PaperSizeStatement
             * @example
             * // This example get the PaperSizeStatement by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeStatement);
             */
            static PaperSizeStatement: string;
            /**
             * Get the command name PaperSizeTabloid.
             * @name GC.Spread.Sheets.Designer#PaperSizeTabloid
             * @example
             * // This example get the PaperSizeTabloid by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PaperSizeTabloid);
             */
            static PaperSizeTabloid: string;
            /**
             * Get the command name Paste.
             * @name GC.Spread.Sheets.Designer#Paste
             * @example
             * // This example get the Paste by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Paste);
             */
            static Paste: string;
            /**
             * Get the command name PasteAll.
             * @name GC.Spread.Sheets.Designer#PasteAll
             * @example
             * // This example get the PasteAll by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteAll);
             */
            static PasteAll: string;
            /**
             * Get the command name PasteFormatting.
             * @name GC.Spread.Sheets.Designer#PasteFormatting
             * @example
             * // This example get the PasteFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteFormatting);
             */
            static PasteFormatting: string;
            /**
             * Get the command name PasteFormulas.
             * @name GC.Spread.Sheets.Designer#PasteFormulas
             * @example
             * // This example get the PasteFormulas by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteFormulas);
             */
            static PasteFormulas: string;
            /**
             * Get the command name PasteShapes.
             * @name GC.Spread.Sheets.Designer#PasteShapes
             * @example
             * // This example get the PasteShapes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteShapes);
             */
            static PasteShapes: string;
            /**
             * Get the command name PasteValues.
             * @name GC.Spread.Sheets.Designer#PasteValues
             * @example
             * // This example get the PasteValues by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteValues);
             */
            static PasteValues: string;
            /**
             * Get the command name PasteValuesFormatting.
             * @name GC.Spread.Sheets.Designer#PasteValuesFormatting
             * @example
             * // This example get the PasteValuesFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PasteValuesFormatting);
             */
            static PasteValuesFormatting: string;
            /**
             * Get the command name PercentageFormat.
             * @name GC.Spread.Sheets.Designer#PercentageFormat
             * @example
             * // This example get the PercentageFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PercentageFormat);
             */
            static PercentageFormat: string;
            /**
             * Get the command name PictureAltText.
             * @name GC.Spread.Sheets.Designer#PictureAltText
             * @example
             * // This example get the PictureAltText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PictureAltText);
             */
            static PictureAltText: string;
            /**
             * Get the command name PictureAltTextPanel.
             * @name GC.Spread.Sheets.Designer#PictureAltTextPanel
             * @example
             * // This example get the PictureAltTextPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PictureAltTextPanel);
             */
            static PictureAltTextPanel: string;
            /**
             * Get the command name PieChart.
             * @name GC.Spread.Sheets.Designer#PieChart
             * @example
             * // The example get the PieChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PieChart);
             */
            static PieChart: string;
            /**
             * Get the command name PieChartGroup.
             * @name GC.Spread.Sheets.Designer#PieChartGroup
             * @example
             * // The example get the PieChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PieChartGroup);
             */
            static PieChartGroup: string;
            /**
             * Get the command name PieChartPanel.
             * @name GC.Spread.Sheets.Designer#PieChartPanel
             * @example
             * // This example get the PieChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PieChartPanel);
             */
            static PieChartPanel: string;
            /**
             * Get the command name PieOrDoughnutChartPreview.
             * @name GC.Spread.Sheets.Designer#PieOrDoughnutChartPreview
             * @example
             * // The example get the PieOrDoughnutChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PieOrDoughnutChartPreview);
             */
            static PieOrDoughnutChartPreview: string;
            /**
             * Get the command name PieSparklineGroup.
             * @name GC.Spread.Sheets.Designer#PieSparklineGroup
             * @example
             * // The example get the PieSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PieSparklineGroup);
             */
            static PieSparklineGroup: string;
            /**
             * Get the command name PivotFilterConnections.
             * @name GC.Spread.Sheets.Designer#PivotFilterConnections
             * @example
             * // This example get the PivotFilterConnections by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotFilterConnections);
             */
            static PivotFilterConnections: string;
            /**
             * Get the command name PivotTableActiveField.
             * @name GC.Spread.Sheets.Designer#PivotTableActiveField
             * @example
             * // This example get the PivotTableActiveField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableActiveField);
             */
            static PivotTableActiveField: string;
            /**
             * Get the command name PivotTableAutoFitColumn.
             * @name GC.Spread.Sheets.Designer#PivotTableAutoFitColumn
             * @example
             * // This example get the PivotTableAutoFitColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableAutoFitColumn);
             */
            static PivotTableAutoFitColumn: string;
            /**
             * Get the command name PivotTableBandedColumns.
             * @name GC.Spread.Sheets.Designer#PivotTableBandedColumns
             * @example
             * // This example get the PivotTableBandedColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableBandedColumns);
             */
            static PivotTableBandedColumns: string;
            /**
             * Get the command name PivotTableBandedRows.
             * @name GC.Spread.Sheets.Designer#PivotTableBandedRows
             * @example
             * // This example get the PivotTableBandedRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableBandedRows);
             */
            static PivotTableBandedRows: string;
            /**
             * Get the command name PivotTableBlankRows.
             * @name GC.Spread.Sheets.Designer#PivotTableBlankRows
             * @example
             * // This example get the PivotTableBlankRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableBlankRows);
             */
            static PivotTableBlankRows: string;
            /**
             * Get the command name PivotTableButtons.
             * @name GC.Spread.Sheets.Designer#PivotTableButtons
             * @example
             * // This example get the PivotTableButtons by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableButtons);
             */
            static PivotTableButtons: string;
            /**
             * Get the command name PivotTableChangeDataSource.
             * @name GC.Spread.Sheets.Designer#PivotTableChangeDataSource
             * @example
             * // This example get the PivotTableChangeDataSource by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableChangeDataSource);
             */
            static PivotTableChangeDataSource: string;
            /**
             * Get the command name PivotTableClearAll.
             * @name GC.Spread.Sheets.Designer#PivotTableClearAll
             * @example
             * // This example get the PivotTableClearAll by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableClearAll);
             */
            static PivotTableClearAll: string;
            /**
             * Get the command name PivotTableClearFilterFrom.
             * @name GC.Spread.Sheets.Designer#PivotTableClearFilterFrom
             * @example
             * // This example get the PivotTableClearFilterFrom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableClearFilterFrom);
             */
            static PivotTableClearFilterFrom: string;
            /**
             * Get the command name PivotTableClearFilters.
             * @name GC.Spread.Sheets.Designer#PivotTableClearFilters
             * @example
             * // This example get the PivotTableClearFilters by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableClearFilters);
             */
            static PivotTableClearFilters: string;
            /**
             * Get the command name PivotTableClearList.
             * @name GC.Spread.Sheets.Designer#PivotTableClearList
             * @example
             * // This example get the PivotTableClearList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableClearList);
             */
            static PivotTableClearList: string;
            /**
             * Get the command name PivotTableCollapse.
             * @name GC.Spread.Sheets.Designer#PivotTableCollapse
             * @example
             * // This example get the PivotTableCollapse by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableCollapse);
             */
            static PivotTableCollapse: string;
            /**
             * Get the command name PivotTableCollapseEntireField.
             * @name GC.Spread.Sheets.Designer#PivotTableCollapseEntireField
             * @example
             * // This example get the PivotTableCollapseEntireField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableCollapseEntireField);
             */
            static PivotTableCollapseEntireField: string;
            /**
             * Get the command name PivotTableCollapseField.
             * @name GC.Spread.Sheets.Designer#PivotTableCollapseField
             * @example
             * // This example get the PivotTableCollapseField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableCollapseField);
             */
            static PivotTableCollapseField: string;
            /**
             * Get the command name PivotTableColumnHeaders.
             * @name GC.Spread.Sheets.Designer#PivotTableColumnHeaders
             * @example
             * // This example get the PivotTableColumnHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableColumnHeaders);
             */
            static PivotTableColumnHeaders: string;
            /**
             * Get the command name PivotTableContextMenuGroup.
             * @name GC.Spread.Sheets.Designer#PivotTableContextMenuGroup
             * @example
             * // This example get the PivotTableContextMenuGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableContextMenuGroup);
             */
            static PivotTableContextMenuGroup: string;
            /**
             * Get the command name PivotTableContextMenuOptions.
             * @name GC.Spread.Sheets.Designer#PivotTableContextMenuOptions
             * @example
             * // This example get the PivotTableContextMenuOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableContextMenuOptions);
             */
            static PivotTableContextMenuOptions: string;
            /**
             * Get the command name PivotTableContextMenuRefresh.
             * @name GC.Spread.Sheets.Designer#PivotTableContextMenuRefresh
             * @example
             * // This example get the PivotTableContextMenuRefresh by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableContextMenuRefresh);
             */
            static PivotTableContextMenuRefresh: string;
            /**
             * Get the command name PivotTableContextMenuUnGroup.
             * @name GC.Spread.Sheets.Designer#PivotTableContextMenuUnGroup
             * @example
             * // This example get the PivotTableContextMenuUnGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableContextMenuUnGroup);
             */
            static PivotTableContextMenuUnGroup: string;
            /**
             * Get the command name PivotTableExpand.
             * @name GC.Spread.Sheets.Designer#PivotTableExpand
             * @example
             * // This example get the PivotTableExpand by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableExpand);
             */
            static PivotTableExpand: string;
            /**
             * Get the command name PivotTableExpandEntireField.
             * @name GC.Spread.Sheets.Designer#PivotTableExpandEntireField
             * @example
             * // This example get the PivotTableExpandEntireField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableExpandEntireField);
             */
            static PivotTableExpandEntireField: string;
            /**
             * Get the command name PivotTableExpandField.
             * @name GC.Spread.Sheets.Designer#PivotTableExpandField
             * @example
             * // This example get the PivotTableExpandField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableExpandField);
             */
            static PivotTableExpandField: string;
            /**
             * Get the command name PivotTableExpandOrCollapse.
             * @name GC.Spread.Sheets.Designer#PivotTableExpandOrCollapse
             * @example
             * // This example get the PivotTableExpandOrCollapse by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableExpandOrCollapse);
             */
            static PivotTableExpandOrCollapse: string;
            /**
             * Get the command name PivotTableFieldList.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldList
             * @example
             * // This example get the PivotTableFieldList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableFieldList);
             */
            static PivotTableFieldList: string;
            /**
             * Get the command name PivotTableFieldSetting.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldSetting
             * @example
             * // This example get the PivotTableFieldSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableFieldSetting);
             */
            static PivotTableFieldSetting: string;
            /**
             * Get the command name PivotTableFieldsItemsSets.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldsItemsSets
             * @example
             * // This example get the PivotTableFieldsItemsSets by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableFieldsItemsSets);
             */
            static PivotTableFieldsItemsSets: string;
            /**
             * Get the command name PivotTableFilter.
             * @name GC.Spread.Sheets.Designer#PivotTableFilter
             * @example
             * // This example get the PivotTableFilter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableFilter);
             */
            static PivotTableFilter: string;
            /**
             * Get the command name PivotTableGrandTotals.
             * @name GC.Spread.Sheets.Designer#PivotTableGrandTotals
             * @example
             * // This example get the PivotTableGrandTotals by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGrandTotals);
             */
            static PivotTableGrandTotals: string;
            /**
             * Get the command name PivotTableGrandTotalsOffRowColumn.
             * @name GC.Spread.Sheets.Designer#PivotTableGrandTotalsOffRowColumn
             * @example
             * // This example get the PivotTableGrandTotalsOffRowColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGrandTotalsOffRowColumn);
             */
            static PivotTableGrandTotalsOffRowColumn: string;
            /**
             * Get the command name PivotTableGrandTotalsOnColumnOnly.
             * @name GC.Spread.Sheets.Designer#PivotTableGrandTotalsOnColumnOnly
             * @example
             * // This example get the PivotTableGrandTotalsOnColumnOnly by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGrandTotalsOnColumnOnly);
             */
            static PivotTableGrandTotalsOnColumnOnly: string;
            /**
             * Get the command name PivotTableGrandTotalsOnRowColumn.
             * @name GC.Spread.Sheets.Designer#PivotTableGrandTotalsOnRowColumn
             * @example
             * // This example get the PivotTableGrandTotalsOnRowColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGrandTotalsOnRowColumn);
             */
            static PivotTableGrandTotalsOnRowColumn: string;
            /**
             * Get the command name PivotTableGrandTotalsOnRowOnly.
             * @name GC.Spread.Sheets.Designer#PivotTableGrandTotalsOnRowOnly
             * @example
             * // This example get the PivotTableGrandTotalsOnRowOnly by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGrandTotalsOnRowOnly);
             */
            static PivotTableGrandTotalsOnRowOnly: string;
            /**
             * Get the command name PivotTableGroupField.
             * @name GC.Spread.Sheets.Designer#PivotTableGroupField
             * @example
             * // This example get the PivotTableGroupField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGroupField);
             */
            static PivotTableGroupField: string;
            /**
             * Get the command name PivotTableGroupSelection.
             * @name GC.Spread.Sheets.Designer#PivotTableGroupSelection
             * @example
             * // This example get the PivotTableGroupSelection by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableGroupSelection);
             */
            static PivotTableGroupSelection: string;
            /**
             * Get the command name PivotTableHideSelectedItems.
             * @name GC.Spread.Sheets.Designer#PivotTableHideSelectedItems
             * @example
             * // This example get the PivotTableHideSelectedItems by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableHideSelectedItems);
             */
            static PivotTableHideSelectedItems: string;
            /**
             * Get the command name PivotTableInsertBlankRows.
             * @name GC.Spread.Sheets.Designer#PivotTableInsertBlankRows
             * @example
             * // This example get the PivotTableInsertBlankRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableInsertBlankRows);
             */
            static PivotTableInsertBlankRows: string;
            /**
             * Get the command name PivotTableKeepOnlySelectedItems.
             * @name GC.Spread.Sheets.Designer#PivotTableKeepOnlySelectedItems
             * @example
             * // This example get the PivotTableKeepOnlySelectedItems by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableKeepOnlySelectedItems);
             */
            static PivotTableKeepOnlySelectedItems: string;
            /**
             * Get the command name PivotTableLabelFilters.
             * @name GC.Spread.Sheets.Designer#PivotTableLabelFilters
             * @example
             * // This example get the PivotTableLabelFilters by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableLabelFilters);
             */
            static PivotTableLabelFilters: string;
            /**
             * Get the command name PivotTableListFormulas.
             * @name GC.Spread.Sheets.Designer#PivotTableListFormulas
             * @example
             * // This example get the PivotTableListFormulas by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableListFormulas);
             */
            static PivotTableListFormulas: string;
            /**
             * Get the command name PivotTableMove.
             * @name GC.Spread.Sheets.Designer#PivotTableMove
             * @example
             * // This example get the PivotTableMove by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableMove);
             */
            static PivotTableMove: string;
            /**
             * Get the command name PivotTableName.
             * @name GC.Spread.Sheets.Designer#PivotTableName
             * @example
             * // This example get the PivotTableName by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableName);
             */
            static PivotTableName: string;
            /**
             * Get the command name PivotTableOptions.
             * @name GC.Spread.Sheets.Designer#PivotTableOptions
             * @example
             * // This example get the PivotTableOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableOptions);
             */
            static PivotTableOptions: string;
            /**
             * Get the command name PivotTableOptionsList.
             * @name GC.Spread.Sheets.Designer#PivotTableOptionsList
             * @example
             * // This example get the PivotTableOptionsList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableOptionsList);
             */
            static PivotTableOptionsList: string;
            /**
             * Get the command name PivotTableOptionsSub.
             * @name GC.Spread.Sheets.Designer#PivotTableOptionsSub
             * @example
             * // This example get the PivotTableOptionsSub by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableOptionsSub);
             */
            static PivotTableOptionsSub: string;
            /**
             * Get the command name PivotTablePanel.
             * @name GC.Spread.Sheets.Designer#PivotTablePanel
             * @example
             * // This example get the PivotTablePanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTablePanel);
             */
            static PivotTablePanel: string;
            /**
             * Get the command name PivotTableRefresh.
             * @name GC.Spread.Sheets.Designer#PivotTableRefresh
             * @example
             * // This example get the PivotTableRefresh by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRefresh);
             */
            static PivotTableRefresh: string;
            /**
             * Get the command name PivotTableRefreshList.
             * @name GC.Spread.Sheets.Designer#PivotTableRefreshList
             * @example
             * // This example get the PivotTableRefreshList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRefreshList);
             */
            static PivotTableRefreshList: string;
            /**
             * Get the command name PivotTableRemoveBlankRows.
             * @name GC.Spread.Sheets.Designer#PivotTableRemoveBlankRows
             * @example
             * // This example get the PivotTableRemoveBlankRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRemoveBlankRows);
             */
            static PivotTableRemoveBlankRows: string;
            /**
             * Get the command name PivotTableRemoveField.
             * @name GC.Spread.Sheets.Designer#PivotTableRemoveField
             * @example
             * // This example get the PivotTableRemoveField by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRemoveField);
             */
            static PivotTableRemoveField: string;
            /**
             * Get the command name PivotTableRemoveGrandTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableRemoveGrandTotal
             * @example
             * // This example get the PivotTableRemoveGrandTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRemoveGrandTotal);
             */
            static PivotTableRemoveGrandTotal: string;
            /**
             * Get the command name PivotTableReportLayout.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayout
             * @example
             * // This example get the PivotTableReportLayout by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayout);
             */
            static PivotTableReportLayout: string;
            /**
             * Get the command name PivotTableReportLayoutNotRepeatAllItemLabels.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayoutNotRepeatAllItemLabels
             * @example
             * // This example get the PivotTableReportLayoutNotRepeatAllItemLabels by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayoutNotRepeatAllItemLabels);
             */
            static PivotTableReportLayoutNotRepeatAllItemLabels: string;
            /**
             * Get the command name PivotTableReportLayoutRepeatAllItemLabels.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayoutRepeatAllItemLabels
             * @example
             * // This example get the PivotTableReportLayoutRepeatAllItemLabels by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayoutRepeatAllItemLabels);
             */
            static PivotTableReportLayoutRepeatAllItemLabels: string;
            /**
             * Get the command name PivotTableReportLayoutShowInCompact.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayoutShowInCompact
             * @example
             * // This example get the PivotTableReportLayoutShowInCompact by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayoutShowInCompact);
             */
            static PivotTableReportLayoutShowInCompact: string;
            /**
             * Get the command name PivotTableReportLayoutShowInOutline.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayoutShowInOutline
             * @example
             * // This example get the PivotTableReportLayoutShowInOutline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayoutShowInOutline);
             */
            static PivotTableReportLayoutShowInOutline: string;
            /**
             * Get the command name PivotTableReportLayoutShowInTabular.
             * @name GC.Spread.Sheets.Designer#PivotTableReportLayoutShowInTabular
             * @example
             * // This example get the PivotTableReportLayoutShowInTabular by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableReportLayoutShowInTabular);
             */
            static PivotTableReportLayoutShowInTabular: string;
            /**
             * Get the command name PivotTableRibbonRefresh.
             * @name GC.Spread.Sheets.Designer#PivotTableRibbonRefresh
             * @example
             * // This example get the PivotTableRibbonRefresh by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRibbonRefresh);
             */
            static PivotTableRibbonRefresh: string;
            /**
             * Get the command name PivotTableRowHeaders.
             * @name GC.Spread.Sheets.Designer#PivotTableRowHeaders
             * @example
             * // This example get the PivotTableRowHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableRowHeaders);
             */
            static PivotTableRowHeaders: string;
            /**
             * Get the command name PivotTableShowDetails.
             * @name GC.Spread.Sheets.Designer#PivotTableShowDetails
             * @example
             * // This example get the PivotTableShowDetails by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowDetails);
             */
            static PivotTableShowDetails: string;
            /**
             * Get the command name PivotTableShowHeaders.
             * @name GC.Spread.Sheets.Designer#PivotTableShowHeaders
             * @example
             * // This example get the PivotTableShowHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowHeaders);
             */
            static PivotTableShowHeaders: string;
            /**
             * Get the command name PivotTableShowReportFilterPages.
             * @name GC.Spread.Sheets.Designer#PivotTableShowReportFilterPages
             * @example
             * // This example get the PivotTableShowReportFilterPages by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowReportFilterPages);
             */
            static PivotTableShowReportFilterPages: string;
            /**
             * Get the command name PivotTableShowValueAs.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAs
             * @example
             * // This example get the PivotTableShowValueAs by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAs);
             */
            static PivotTableShowValueAs: string;
            /**
             * Get the command name PivotTableShowValueAsDifferenceFrom.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsDifferenceFrom
             * @example
             * // This example get the PivotTableShowValueAsDifferenceFrom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsDifferenceFrom);
             */
            static PivotTableShowValueAsDifferenceFrom: string;
            /**
             * Get the command name PivotTableShowValueAsIndex.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsIndex
             * @example
             * // This example get the PivotTableShowValueAsIndex by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsIndex);
             */
            static PivotTableShowValueAsIndex: string;
            /**
             * Get the command name PivotTableShowValueAsMoreOptions.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsMoreOptions
             * @example
             * // This example get the PivotTableShowValueAsMoreOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsMoreOptions);
             */
            static PivotTableShowValueAsMoreOptions: string;
            /**
             * Get the command name PivotTableShowValueAsNoCalculation.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsNoCalculation
             * @example
             * // This example get the PivotTableShowValueAsNoCalculation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsNoCalculation);
             */
            static PivotTableShowValueAsNoCalculation: string;
            /**
             * Get the command name PivotTableShowValueAsParentColumnTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsParentColumnTotal
             * @example
             * // This example get the PivotTableShowValueAsParentColumnTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsParentColumnTotal);
             */
            static PivotTableShowValueAsParentColumnTotal: string;
            /**
             * Get the command name PivotTableShowValueAsParentRowTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsParentRowTotal
             * @example
             * // This example get the PivotTableShowValueAsParentRowTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsParentRowTotal);
             */
            static PivotTableShowValueAsParentRowTotal: string;
            /**
             * Get the command name PivotTableShowValueAsParentTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsParentTotal
             * @example
             * // This example get the PivotTableShowValueAsParentTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsParentTotal);
             */
            static PivotTableShowValueAsParentTotal: string;
            /**
             * Get the command name PivotTableShowValueAsPercentDifferenceFrom.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentDifferenceFrom
             * @example
             * // This example get the PivotTableShowValueAsPercentDifferenceFrom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentDifferenceFrom);
             */
            static PivotTableShowValueAsPercentDifferenceFrom: string;
            /**
             * Get the command name PivotTableShowValueAsPercentOf.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentOf
             * @example
             * // This example get the PivotTableShowValueAsPercentOf by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentOf);
             */
            static PivotTableShowValueAsPercentOf: string;
            /**
             * Get the command name PivotTableShowValueAsPercentOfColumnTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentOfColumnTotal
             * @example
             * // This example get the PivotTableShowValueAsPercentOfColumnTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentOfColumnTotal);
             */
            static PivotTableShowValueAsPercentOfColumnTotal: string;
            /**
             * Get the command name PivotTableShowValueAsPercentOfGrandTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentOfGrandTotal
             * @example
             * // This example get the PivotTableShowValueAsPercentOfGrandTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentOfGrandTotal);
             */
            static PivotTableShowValueAsPercentOfGrandTotal: string;
            /**
             * Get the command name PivotTableShowValueAsPercentOfRowTotal.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentOfRowTotal
             * @example
             * // This example get the PivotTableShowValueAsPercentOfRowTotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentOfRowTotal);
             */
            static PivotTableShowValueAsPercentOfRowTotal: string;
            /**
             * Get the command name PivotTableShowValueAsPercentRunningTotalIn.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsPercentRunningTotalIn
             * @example
             * // This example get the PivotTableShowValueAsPercentRunningTotalIn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsPercentRunningTotalIn);
             */
            static PivotTableShowValueAsPercentRunningTotalIn: string;
            /**
             * Get the command name PivotTableShowValueAsRankLargestToSmallest.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsRankLargestToSmallest
             * @example
             * // This example get the PivotTableShowValueAsRankLargestToSmallest by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsRankLargestToSmallest);
             */
            static PivotTableShowValueAsRankLargestToSmallest: string;
            /**
             * Get the command name PivotTableShowValueAsRankSmallestToLargest.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsRankSmallestToLargest
             * @example
             * // This example get the PivotTableShowValueAsRankSmallestToLargest by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsRankSmallestToLargest);
             */
            static PivotTableShowValueAsRankSmallestToLargest: string;
            /**
             * Get the command name PivotTableShowValueAsRunningTotalIn.
             * @name GC.Spread.Sheets.Designer#PivotTableShowValueAsRunningTotalIn
             * @example
             * // This example get the PivotTableShowValueAsRunningTotalIn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableShowValueAsRunningTotalIn);
             */
            static PivotTableShowValueAsRunningTotalIn: string;
            /**
             * Get the command name PivotTableSort.
             * @name GC.Spread.Sheets.Designer#PivotTableSort
             * @example
             * // This example get the PivotTableSort by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSort);
             */
            static PivotTableSort: string;
            /**
             * Get the command name PivotTableSortAToZ.
             * @name GC.Spread.Sheets.Designer#PivotTableSortAToZ
             * @example
             * // This example get the V by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSortAToZ);
             */
            static PivotTableSortAToZ: string;
            /**
             * Get the command name PivotTableSortZToA.
             * @name GC.Spread.Sheets.Designer#PivotTableSortZToA
             * @example
             * // This example get the V by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSortZToA);
             */
            static PivotTableSortZToA: string;
            /**
             * Get the command name PivotTableStyle.
             * @name GC.Spread.Sheets.Designer#PivotTableStyle
             * @example
             * // This example get the PivotTableStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableStyle);
             */
            static PivotTableStyle: string;
            /**
             * Get the command name PivotTableStyleListContent.
             * @name GC.Spread.Sheets.Designer#PivotTableStyleListContent
             * @example
             * // This example get the PivotTableStyleListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableStyleListContent);
             */
            static PivotTableStyleListContent: string;
            /**
             * Get the command name PivotTableSubtotals.
             * @name GC.Spread.Sheets.Designer#PivotTableSubtotals
             * @example
             * // This example get the PivotTableSubtotals by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSubtotals);
             */
            static PivotTableSubtotals: string;
            /**
             * Get the command name PivotTableSubtotalsAtBottom.
             * @name GC.Spread.Sheets.Designer#PivotTableSubtotalsAtBottom
             * @example
             * // This example get the PivotTableSubtotalsAtBottom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSubtotalsAtBottom);
             */
            static PivotTableSubtotalsAtBottom: string;
            /**
             * Get the command name PivotTableSubtotalsAtTop.
             * @name GC.Spread.Sheets.Designer#PivotTableSubtotalsAtTop
             * @example
             * // This example get the PivotTableSubtotalsAtTop by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSubtotalsAtTop);
             */
            static PivotTableSubtotalsAtTop: string;
            /**
             * Get the command name PivotTableSubtotalsIncludeFilters.
             * @name GC.Spread.Sheets.Designer#PivotTableSubtotalsIncludeFilters
             * @example
             * // This example get the PivotTableSubtotalsIncludeFilters by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSubtotalsIncludeFilters);
             */
            static PivotTableSubtotalsIncludeFilters: string;
            /**
             * Get the command name PivotTableSubtotalsNotShow.
             * @name GC.Spread.Sheets.Designer#PivotTableSubtotalsNotShow
             * @example
             * // This example get the PivotTableSubtotalsNotShow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSubtotalsNotShow);
             */
            static PivotTableSubtotalsNotShow: string;
            /**
             * Get the command name PivotTableSummarizeValuesBy.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesBy
             * @example
             * // This example get the PivotTableSummarizeValuesBy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesBy);
             */
            static PivotTableSummarizeValuesBy: string;
            /**
             * Get the command name PivotTableSummarizeValuesByAverage.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesByAverage
             * @example
             * // This example get the PivotTableSummarizeValuesByAverage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesByAverage);
             */
            static PivotTableSummarizeValuesByAverage: string;
            /**
             * Get the command name PivotTableSummarizeValuesByCount.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesByCount
             * @example
             * // This example get the PivotTableSummarizeValuesByCount by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesByCount);
             */
            static PivotTableSummarizeValuesByCount: string;
            /**
             * Get the command name PivotTableSummarizeValuesByMax.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesByMax
             * @example
             * // This example get the PivotTableSummarizeValuesByMax by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesByMax);
             */
            static PivotTableSummarizeValuesByMax: string;
            /**
             * Get the command name PivotTableSummarizeValuesByMin.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesByMin
             * @example
             * // This example get the PivotTableSummarizeValuesByMin by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesByMin);
             */
            static PivotTableSummarizeValuesByMin: string;
            /**
             * Get the command name PivotTableSummarizeValuesByProduct.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesByProduct
             * @example
             * // This example get the PivotTableSummarizeValuesByProduct by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesByProduct);
             */
            static PivotTableSummarizeValuesByProduct: string;
            /**
             * Get the command name PivotTableSummarizeValuesBySum.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesBySum
             * @example
             * // This example get the PivotTableSummarizeValuesBySum by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesBySum);
             */
            static PivotTableSummarizeValuesBySum: string;
            /**
             * Get the command name PivotTableSummarizeValuesMoreOptions.
             * @name GC.Spread.Sheets.Designer#PivotTableSummarizeValuesMoreOptions
             * @example
             * // This example get the PivotTableSummarizeValuesMoreOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableSummarizeValuesMoreOptions);
             */
            static PivotTableSummarizeValuesMoreOptions: string;
            /**
             * Get the command name PivotTableTop10.
             * @name GC.Spread.Sheets.Designer#PivotTableTop10
             * @example
             * // This example get the PivotTableTop10 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableTop10);
             */
            static PivotTableTop10: string;
            /**
             * Get the command name PivotTableUnGroup.
             * @name GC.Spread.Sheets.Designer#PivotTableUnGroup
             * @example
             * // This example get the PivotTableUnGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableUnGroup);
             */
            static PivotTableUnGroup: string;
            /**
             * Get the command name PivotTableValueFieldSetting.
             * @name GC.Spread.Sheets.Designer#PivotTableValueFieldSetting
             * @example
             * // This example get the PivotTableValueFieldSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableValueFieldSetting);
             */
            static PivotTableValueFieldSetting: string;
            /**
             * Get the command name PivotTableValueFilters.
             * @name GC.Spread.Sheets.Designer#PivotTableValueFilters
             * @example
             * // This example get the PivotTableValueFilters by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PivotTableValueFilters);
             */
            static PivotTableValueFilters: string;
            /**
             * Get the command name PrintArea.
             * @name GC.Spread.Sheets.Designer#PrintArea
             * @example
             * // This example get the PrintArea by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PrintArea);
             */
            static PrintArea: string;
            /**
             * Get the command name PrintLineVisible.
             * @name GC.Spread.Sheets.Designer#PrintLineVisible
             * @example
             * // This example get the PrintLineVisible by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PrintLineVisible);
             */
            static PrintLineVisible: string;
            /**
             * Get the command name PrintTitles.
             * @name GC.Spread.Sheets.Designer#PrintTitles
             * @example
             * // This example get the PrintTitles by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.PrintTitles);
             */
            static PrintTitles: string;
            /**
             * Get the command name ProtectSheet.
             * @name GC.Spread.Sheets.Designer#ProtectSheet
             * @example
             * // This example get the ProtectSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ProtectSheet);
             */
            static ProtectSheet: string;
            /**
             * Get the command name QuickLayout.
             * @name GC.Spread.Sheets.Designer#QuickLayout
             * @example
             * // This example get the QuickLayout by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.QuickLayout);
             */
            static QuickLayout: string;
            /**
             * Get the command name QuickLayoutListContent.
             * @name GC.Spread.Sheets.Designer#QuickLayoutListContent
             * @example
             * // This example get the QuickLayoutListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.QuickLayoutListContent);
             */
            static QuickLayoutListContent: string;
            /**
             * Get the command name RadarChart.
             * @name GC.Spread.Sheets.Designer#RadarChart
             * @example
             * // The example get the RadarChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RadarChart);
             */
            static RadarChart: string;
            /**
             * Get the command name RadarChartGroup.
             * @name GC.Spread.Sheets.Designer#RadarChartGroup
             * @example
             * // The example get the RadarChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RadarChartGroup);
             */
            static RadarChartGroup: string;
            /**
             * Get the command name RadarChartPanel.
             * @name GC.Spread.Sheets.Designer#RadarChartPanel
             * @example
             * // This example get the RadarChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RadarChartPanel);
             */
            static RadarChartPanel: string;
            /**
             * Get the command name RadarWithMarkersChart.
             * @name GC.Spread.Sheets.Designer#RadarWithMarkersChart
             * @example
             * // The example get the RadarWithMarkersChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RadarWithMarkersChart);
             */
            static RadarWithMarkersChart: string;
            /**
             * Get the command name RadioListCellType.
             * @name GC.Spread.Sheets.Designer#RadioListCellType
             * @example
             * // This example get the RadioListCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RadioListCellType);
             */
            static RadioListCellType: string;
            /**
             * Get the command name RangeTemplateCellType.
             * @name GC.Spread.Sheets.Designer#RangeTemplateCellType
             * @example
             * // This example get the RangeTemplateCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RangeTemplateCellType);
             */
            static RangeTemplateCellType: string;
            /**
             * Get the command name Ratings.
             * @name GC.Spread.Sheets.Designer#Ratings
             * @example
             * // This example get the Ratings by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Ratings);
             */
            static Ratings: string;
            /**
             * Get the command name ReapplyFilter.
             * @name GC.Spread.Sheets.Designer#ReapplyFilter
             * @example
             * // This example get the ReapplyFilter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ReapplyFilter);
             */
            static ReapplyFilter: string;
            /**
             * Get the command name ReapplyFilterData.
             * @name GC.Spread.Sheets.Designer#ReapplyFilterData
             * @example
             * // This example get the ReapplyFilterData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ReapplyFilterData);
             */
            static ReapplyFilterData: string;
            /**
             * Get the command name Redo.
             * @name GC.Spread.Sheets.Designer#Redo
             * @example
             * // This example get the Redo by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Redo);
             */
            static Redo: string;
            /**
             * Get the command name RedoList.
             * @name GC.Spread.Sheets.Designer#RedoList
             * @example
             * // This example get the RedoList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RedoList);
             */
            static RedoList: string;
            /**
             * Get the command name RemoveDuplicates.
             * @name GC.Spread.Sheets.Designer#RemoveDuplicates
             * @example
             * // This example get the RemoveDuplicates by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemoveDuplicates);
             */
            static RemoveDuplicates: string;
            /**
             * Get the command name RemoveHyperlink.
             * @name GC.Spread.Sheets.Designer#RemoveHyperlink
             * @example
             * // This example get the RemoveHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemoveHyperlink);
             */
            static RemoveHyperlink: string;
            /**
             * Get the command name RemoveHyperlinks.
             * @name GC.Spread.Sheets.Designer#RemoveHyperlinks
             * @example
             * // This example get the RemoveHyperlinks by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemoveHyperlinks);
             */
            static RemoveHyperlinks: string;
            /**
             * Get the command name RemovePageBreak.
             * @name GC.Spread.Sheets.Designer#RemovePageBreak
             * @example
             * // This example get the RemovePageBreak by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemovePageBreak);
             */
            static RemovePageBreak: string;
            /**
             * Get the command name RemoveShapeHyperlink.
             * @name GC.Spread.Sheets.Designer#RemoveShapeHyperlink
             * @example
             * // This example get the RemoveShapeHyperlink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemoveShapeHyperlink);
             */
            static RemoveShapeHyperlink: string;
            /**
             * Get the command name RemoveSlicer.
             * @name GC.Spread.Sheets.Designer#RemoveSlicer
             * @example
             * // This example get the RemoveSlicer by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RemoveSlicer);
             */
            static RemoveSlicer: string;
            /**
             * Get the command name Reset.
             * @name GC.Spread.Sheets.Designer#Reset
             * @example
             * // This example get the Reset by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Reset);
             */
            static Reset: string;
            /**
             * Get the command name ResetAllPageBreaks.
             * @name GC.Spread.Sheets.Designer#ResetAllPageBreaks
             * @example
             * // This example get the ResetAllPageBreaks by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ResetAllPageBreaks);
             */
            static ResetAllPageBreaks: string;
            /**
             * Get the command name ResetChartColor.
             * @name GC.Spread.Sheets.Designer#ResetChartColor
             * @example
             * // This example get the ResetChartColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ResetChartColor);
             */
            static ResetChartColor: string;
            /**
             * Get the command name ResizeTable.
             * @name GC.Spread.Sheets.Designer#ResizeTable
             * @example
             * // This example get the ResizeTable by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ResizeTable);
             */
            static ResizeTable: string;
            /**
             * Get the command name RibbonButtonButtonCellType.
             * @name GC.Spread.Sheets.Designer#RibbonButtonButtonCellType
             * @example
             * // This example get the RibbonButtonButtonCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RibbonButtonButtonCellType);
             */
            static RibbonButtonButtonCellType: string;
            /**
             * Get the command name RibbonCopy.
             * @name GC.Spread.Sheets.Designer#RibbonCopy
             * @example
             * // This example get the RibbonCopy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RibbonCopy);
             */
            static RibbonCopy: string;
            /**
             * Get the command name RibbonCut.
             * @name GC.Spread.Sheets.Designer#RibbonCut
             * @example
             * // This example get the RibbonCut by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RibbonCut);
             */
            static RibbonCut: string;
            /**
             * Get the command name RibbonFormatPainter.
             * @name GC.Spread.Sheets.Designer#RibbonFormatPainter
             * @example
             * // This example get the RibbonFormatPainter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RibbonFormatPainter);
             */
            static RibbonFormatPainter: string;
            /**
             * Get the command name ChangeShapeStyle.
             * @name GC.Spread.Sheets.Designer#ChangeShapeStyle
             * @example
             * // This example get the ChangeShapeStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ChangeShapeStyle);
             */
            static RibbonModeChangeShapeStyle: string;
            /**
             * Get the command name RibbonNumberFormat.
             * @name GC.Spread.Sheets.Designer#RibbonNumberFormat
             * @example
             * // This example get the RibbonNumberFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RibbonNumberFormat);
             */
            static RibbonNumberFormat: string;
            /**
             * Get the command name RichText.
             * @name GC.Spread.Sheets.Designer#RichText
             * @example
             * // This example get the RichText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RichText);
             */
            static RichText: string;
            /**
             * Get the command name RightAlign.
             * @name GC.Spread.Sheets.Designer#RightAlign
             * @example
             * // This example get the RightAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RightAlign);
             */
            static RightAlign: string;
            /**
             * Get the command name RightBorder.
             * @name GC.Spread.Sheets.Designer#RightBorder
             * @example
             * // This example get the RightBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RightBorder);
             */
            static RightBorder: string;
            /**
             * Get the command name RotateShape.
             * @name GC.Spread.Sheets.Designer#RotateShape
             * @example
             * // This example get the RotateShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RotateShape);
             */
            static RotateShape: string;
            /**
             * Get the command name RowHeaderInsertCopiedCells.
             * @name GC.Spread.Sheets.Designer#RowHeaderInsertCopiedCells
             * @example
             * // This example get the RowHeaderInsertCopiedCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RowHeaderInsertCopiedCells);
             */
            static RowHeaderInsertCopiedCells: string;
            /**
             * Get the command name RowHeaderInsertCutCells.
             * @name GC.Spread.Sheets.Designer#RowHeaderInsertCutCells
             * @example
             * // This example get the RowHeaderInsertCutCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RowHeaderInsertCutCells);
             */
            static RowHeaderInsertCutCells: string;
            /**
             * Get the command name RowHeaders.
             * @name GC.Spread.Sheets.Designer#RowHeaders
             * @example
             * // This example get the RowHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RowHeaders);
             */
            static RowHeaders: string;
            /**
             * Get the command name RowHeight.
             * @name GC.Spread.Sheets.Designer#RowHeight
             * @example
             * // This example get the RowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RowHeight);
             */
            static RowHeight: string;
            /**
             * Get the command name RowTag.
             * @name GC.Spread.Sheets.Designer#RowTag
             * @example
             * // This example get the RowTag by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.RowTag);
             */
            static RowTag: string;
            /**
             * Get the command name Save.
             * @name GC.Spread.Sheets.Designer#Save
             * @example
             * // This example get the Save by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Save);
             */
            static Save: string;
            /**
             * Get the command name SaveSchema.
             * @name GC.Spread.Sheets.Designer#SaveSchema
             * @example
             * // This example get the SaveSchema by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SaveSchema);
             */
            static SaveSchema: string;
            /**
             * Get the command name ScaleToFitHeightText.
             * @name GC.Spread.Sheets.Designer#ScaleToFitHeightText
             * @example
             * // This example get the ScaleToFitHeightText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScaleToFitHeightText);
             */
            static ScaleToFitHeightText: string;
            /**
             * Get the command name ScaleToFitScaleForToolbar.
             * @name GC.Spread.Sheets.Designer#ScaleToFitScaleForToolbar
             * @example
             * // This example get the ScaleToFitScaleForToolbar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScaleToFitScaleForToolbar);
             */
            static ScaleToFitScaleForToolbar: string;
            /**
             * Get the command name ScaleToFitScaleText.
             * @name GC.Spread.Sheets.Designer#ScaleToFitScaleText
             * @example
             * // This example get the ScaleToFitScaleText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScaleToFitScaleText);
             */
            static ScaleToFitScaleText: string;
            /**
             * Get the command name ScaleToFitWidthText.
             * @name GC.Spread.Sheets.Designer#ScaleToFitWidthText
             * @example
             * // This example get the ScaleToFitWidthText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScaleToFitWidthText);
             */
            static ScaleToFitWidthText: string;
            /**
             * Get the command name ScatterChart.
             * @name GC.Spread.Sheets.Designer#ScatterChart
             * @example
             * // The example get the ScatterChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterChart);
             */
            static ScatterChart: string;
            /**
             * Get the command name ScatterChartGroup.
             * @name GC.Spread.Sheets.Designer#ScatterChartGroup
             * @example
             * // The example get the ScatterChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterChartGroup);
             */
            static ScatterChartGroup: string;
            /**
             * Get the command name ScatterChartPanel.
             * @name GC.Spread.Sheets.Designer#ScatterChartPanel
             * @example
             * // This example get the ScatterChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterChartPanel);
             */
            static ScatterChartPanel: string;
            /**
             * Get the command name ScatterOrBubbleChartPreview.
             * @name GC.Spread.Sheets.Designer#ScatterOrBubbleChartPreview
             * @example
             * // The example get the ScatterOrBubbleChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterOrBubbleChartPreview);
             */
            static ScatterOrBubbleChartPreview: string;
            /**
             * Get the command name ScatterSmoothChart.
             * @name GC.Spread.Sheets.Designer#ScatterSmoothChart
             * @example
             * // The example get the ScatterSmoothChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterSmoothChart);
             */
            static ScatterSmoothChart: string;
            /**
             * Get the command name ScatterSmoothMarkersChart.
             * @name GC.Spread.Sheets.Designer#ScatterSmoothMarkersChart
             * @example
             * // The example get the ScatterSmoothMarkersChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterSmoothMarkersChart);
             */
            static ScatterSmoothMarkersChart: string;
            /**
             * Get the command name ScatterSparklineGroup.
             * @name GC.Spread.Sheets.Designer#ScatterSparklineGroup
             * @example
             * // The example get the ScatterSparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterSparklineGroup);
             */
            static ScatterSparklineGroup: string;
            /**
             * Get the command name ScatterStraightChart.
             * @name GC.Spread.Sheets.Designer#ScatterStraightChart
             * @example
             * // The example get the ScatterStraightChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterStraightChart);
             */
            static ScatterStraightChart: string;
            /**
             * Get the command name ScatterStraightMarkers.
             * @name GC.Spread.Sheets.Designer#ScatterStraightMarkers
             * @example
             * // The example get the ScatterStraightMarkers by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScatterStraightMarkers);
             */
            static ScatterStraightMarkers: string;
            /**
             * Get the command name ScientificFormat.
             * @name GC.Spread.Sheets.Designer#ScientificFormat
             * @example
             * // This example get the ScientificFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ScientificFormat);
             */
            static ScientificFormat: string;
            /**
             * Get the command name SelectChartData.
             * @name GC.Spread.Sheets.Designer#SelectChartData
             * @example
             * // This example get the SelectChartData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SelectChartData);
             */
            static SelectChartData: string;
            /**
             * Get the command name SelectData.
             * @name GC.Spread.Sheets.Designer#SelectData
             * @example
             * // This example get the SelectData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SelectData);
             */
            static SelectData: string;
            /**
             * Get the command name SelectionPane.
             * @name GC.Spread.Sheets.Designer#SelectionPane
             * @example
             * // This example get the SelectionPane by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SelectionPane);
             */
            static SelectionPane: string;
            /**
             * Get the command name SelectionPaneButton.
             * @name GC.Spread.Sheets.Designer#SelectionPaneButton
             * @example
             * // This example get the SelectionPaneButton by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SelectionPaneButton);
             */
            static SelectionPaneButton: string;
            /**
             * Get the command name Separator.
             * @name GC.Spread.Sheets.Designer#Separator
             * @example
             * // This example get the Separator by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Separator);
             */
            static Separator: string;
            /**
             * Get the command name SetFilter.
             * @name GC.Spread.Sheets.Designer#SetFilter
             * @example
             * // This example get the SetFilter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetFilter);
             */
            static SetFilter: string;
            /**
             * Get the command name SetFilterData.
             * @name GC.Spread.Sheets.Designer#SetFilterData
             * @example
             * // This example get the SetFilterData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetFilterData);
             */
            static SetFilterData: string;
            /**
             * Get the command name SetPrintArea.
             * @name GC.Spread.Sheets.Designer#SetPrintArea
             * @example
             * // This example get the SetPrintArea by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetPrintArea);
             */
            static SetPrintArea: string;
            /**
             * Get the command name SetTableSheetColumnCaption.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnCaption
             * @example
             * // This example get the SetTableSheetColumnCaption by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnCaption);
             */
            static SetTableSheetColumnCaption: string;
            /**
             * Get the command name SetTableSheetColumnDataType.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataType
             * @example
             * // This example get the SetTableSheetColumnDataType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataType);
             */
            static SetTableSheetColumnDataType: string;
            /**
             * Get the command name SetTableSheetColumnDataTypeBoolean.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataTypeBoolean
             * @example
             * // This example get the SetTableSheetColumnDataTypeBoolean by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataTypeBoolean);
             */
            static SetTableSheetColumnDataTypeBoolean: string;
            /**
             * Get the command name SetTableSheetColumnDataTypeDate.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataTypeDate
             * @example
             * // This example get the SetTableSheetColumnDataTypeDate by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataTypeDate);
             */
            static SetTableSheetColumnDataTypeDate: string;
            /**
             * Get the command name SetTableSheetColumnDataTypeNumber.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataTypeNumber
             * @example
             * // This example get the SetTableSheetColumnDataTypeNumber by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataTypeNumber);
             */
            static SetTableSheetColumnDataTypeNumber: string;
            /**
             * Get the command name SetTableSheetColumnDataTypeString.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataTypeString
             * @example
             * // This example get the SetTableSheetColumnDataTypeString by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataTypeString);
             */
            static SetTableSheetColumnDataTypeString: string;
            /**
             * Get the command name SetTableSheetColumnDataValidation.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDataValidation
             * @example
             * // This example get the SetTableSheetColumnDataValidation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDataValidation);
             */
            static SetTableSheetColumnDataValidation: string;
            /**
             * Get the command name SetTableSheetColumnDefaultValue.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnDefaultValue
             * @example
             * // This example get the SetTableSheetColumnDefaultValue by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnDefaultValue);
             */
            static SetTableSheetColumnDefaultValue: string;
            /**
             * Get the command name SetTableSheetColumnHeaderFit.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnHeaderFit
             * @example
             * // This example get the SetTableSheetColumnHeaderFit by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnHeaderFit);
             */
            static SetTableSheetColumnHeaderFit: string;
            /**
             * Get the command name SetTableSheetColumnHeaderStyle.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnHeaderStyle
             * @example
             * // This example get the SetTableSheetColumnHeaderStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnHeaderStyle);
             */
            static SetTableSheetColumnHeaderStyle: string;
            /**
             * Get the command name SetTableSheetColumnIsPrimaryKey.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnIsPrimaryKey
             * @example
             * // This example get the SetTableSheetColumnIsPrimaryKey by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnIsPrimaryKey);
             */
            static SetTableSheetColumnIsPrimaryKey: string;
            /**
             * Get the command name SetTableSheetColumnReadonly.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnReadonly
             * @example
             * // This example get the SetTableSheetColumnReadonly by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnReadonly);
             */
            static SetTableSheetColumnReadonly: string;
            /**
             * Get the command name SetTableSheetColumnRequired.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnRequired
             * @example
             * // This example get the SetTableSheetColumnRequired by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnRequired);
             */
            static SetTableSheetColumnRequired: string;
            /**
             * Get the command name SetTableSheetColumnStyle.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnStyle
             * @example
             * // This example get the SetTableSheetColumnStyle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnStyle);
             */
            static SetTableSheetColumnStyle: string;
            /**
             * Get the command name SetTableSheetColumnValue.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnValue
             * @example
             * // This example get the SetTableSheetColumnValue by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnValue);
             */
            static SetTableSheetColumnValue: string;
            /**
             * Get the command name SetTableSheetColumnWidth.
             * @name GC.Spread.Sheets.Designer#SetTableSheetColumnWidth
             * @example
             * // This example get the SetTableSheetColumnWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetColumnWidth);
             */
            static SetTableSheetColumnWidth: string;
            /**
             * Get the command name SetTableSheetHeaderRowHeight.
             * @name GC.Spread.Sheets.Designer#SetTableSheetHeaderRowHeight
             * @example
             * // This example get the SetTableSheetHeaderRowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetHeaderRowHeight);
             */
            static SetTableSheetHeaderRowHeight: string;
            /**
             * Get the command name SetTableSheetRowHeight.
             * @name GC.Spread.Sheets.Designer#SetTableSheetRowHeight
             * @example
             * // This example get the SetTableSheetRowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetRowHeight);
             */
            static SetTableSheetRowHeight: string;
            /**
             * Get the command name SetTableSheetStackRowHeight.
             * @name GC.Spread.Sheets.Designer#SetTableSheetStackRowHeight
             * @example
             * // This example get the SetTableSheetStackRowHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SetTableSheetStackRowHeight);
             */
            static SetTableSheetStackRowHeight: string;
            /**
             * Get the command name ShapeAlignBottom.
             * @name GC.Spread.Sheets.Designer#ShapeAlignBottom
             * @example
             * // This example get the ShapeAlignBottom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignBottom);
             */
            static ShapeAlignBottom: string;
            /**
             * Get the command name ShapeAlignCenter.
             * @name GC.Spread.Sheets.Designer#ShapeAlignCenter
             * @example
             * // This example get the ShapeAlignCenter by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignCenter);
             */
            static ShapeAlignCenter: string;
            /**
             * Get the command name ShapeAlignLeft.
             * @name GC.Spread.Sheets.Designer#ShapeAlignLeft
             * @example
             * // This example get the ShapeAlignLeft by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignLeft);
             */
            static ShapeAlignLeft: string;
            /**
             * Get the command name ShapeAlignMiddle.
             * @name GC.Spread.Sheets.Designer#ShapeAlignMiddle
             * @example
             * // This example get the ShapeAlignMiddle by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignMiddle);
             */
            static ShapeAlignMiddle: string;
            /**
             * Get the command name ShapeAlignRight.
             * @name GC.Spread.Sheets.Designer#ShapeAlignRight
             * @example
             * // This example get the ShapeAlignRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignRight);
             */
            static ShapeAlignRight: string;
            /**
             * Get the command name ShapeAlignTop.
             * @name GC.Spread.Sheets.Designer#ShapeAlignTop
             * @example
             * // This example get the ShapeAlignTop by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAlignTop);
             */
            static ShapeAlignTop: string;
            /**
             * Get the command name ShapeAltText.
             * @name GC.Spread.Sheets.Designer#ShapeAltText
             * @example
             * // This example get the ShapeAltText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAltText);
             */
            static ShapeAltText: string;
            /**
             * Get the command name ShapeAltTextPanel.
             * @name GC.Spread.Sheets.Designer#ShapeAltTextPanel
             * @example
             * // This example get the ShapeAltTextPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeAltTextPanel);
             */
            static ShapeAltTextPanel: string;
            /**
             * Get the command name ShapeCommandAlign.
             * @name GC.Spread.Sheets.Designer#ShapeCommandAlign
             * @example
             * // This example get the ShapeCommandAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeCommandAlign);
             */
            static ShapeCommandAlign: string;
            /**
             * Get the command name ShapeCommandGroup.
             * @name GC.Spread.Sheets.Designer#ShapeCommandGroup
             * @example
             * // This example get the ShapeCommandGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeCommandGroup);
             */
            static ShapeCommandGroup: string;
            /**
             * Get the command name ShapeGroup.
             * @name GC.Spread.Sheets.Designer#ShapeGroup
             * @example
             * // This example get the ShapeGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeGroup);
             */
            static ShapeGroup: string;
            /**
             * Get the command name ShapeHorizontalDistribute.
             * @name GC.Spread.Sheets.Designer#ShapeHorizontalDistribute
             * @example
             * // This example get the ShapeHorizontalDistribute by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeHorizontalDistribute);
             */
            static ShapeHorizontalDistribute: string;
            /**
             * Get the command name ShapeLeftRotate.
             * @name GC.Spread.Sheets.Designer#ShapeLeftRotate
             * @example
             * // This example get the ShapeLeftRotate by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeLeftRotate);
             */
            static ShapeLeftRotate: string;
            /**
             * Get the command name ShapeLink.
             * @name GC.Spread.Sheets.Designer#ShapeLink
             * @example
             * // This example get the ShapeLink by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeLink);
             */
            static ShapeLink: string;
            /**
             * Get the command name ShapePanel.
             * @name GC.Spread.Sheets.Designer#ShapePanel
             * @example
             * // This example get the ShapePanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapePanel);
             */
            static ShapePanel: string;
            /**
             * Get the command name ShapeRightRotate.
             * @name GC.Spread.Sheets.Designer#ShapeRightRotate
             * @example
             * // This example get the ShapeRightRotate by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeRightRotate);
             */
            static ShapeRightRotate: string;
            /**
             * Get the command name Shapes.
             * @name GC.Spread.Sheets.Designer#Shapes
             * @example
             * // This example get the Shapes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Shapes);
             */
            static Shapes: string;
            /**
             * Get the command name ShapeSnapToGrid.
             * @name GC.Spread.Sheets.Designer#ShapeSnapToGrid
             * @example
             * // This example get the ShapeSnapToGrid by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeSnapToGrid);
             */
            static ShapeSnapToGrid: string;
            /**
             * Get the command name ShapeSnapToShape.
             * @name GC.Spread.Sheets.Designer#ShapeSnapToShape
             * @example
             * // This example get the ShapeSnapToShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeSnapToShape);
             */
            static ShapeSnapToShape: string;
            /**
             * Get the command name ShapeUnGroup.
             * @name GC.Spread.Sheets.Designer#ShapeUnGroup
             * @example
             * // This example get the ShapeUnGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeUnGroup);
             */
            static ShapeUnGroup: string;
            /**
             * Get the command name ShapeVerticalDistribute.
             * @name GC.Spread.Sheets.Designer#ShapeVerticalDistribute
             * @example
             * // This example get the ShapeVerticalDistribute by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShapeVerticalDistribute);
             */
            static ShapeVerticalDistribute: string;
            /**
             * Get the command name SheetSettingGeneral.
             * @name GC.Spread.Sheets.Designer#SheetSettingGeneral
             * @example
             * // This example get the SheetSettingGeneral by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetSettingGeneral);
             */
            static SheetSettingGeneral: string;
            /**
             * Get the command name SheetSettingGridLine.
             * @name GC.Spread.Sheets.Designer#SheetSettingGridLine
             * @example
             * // This example get the SheetSettingGridLine by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetSettingGridLine);
             */
            static SheetSettingGridLine: string;
            /**
             * Get the command name SheetSettingHeaders.
             * @name GC.Spread.Sheets.Designer#SheetSettingHeaders
             * @example
             * // This example get the SheetSettingHeaders by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetSettingHeaders);
             */
            static SheetSettingHeaders: string;
            /**
             * Get the command name SheetTabBottom.
             * @name GC.Spread.Sheets.Designer#SheetTabBottom
             * @example
             * // This example get the SheetTabBottom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTabBottom);
             */
            static SheetTabBottom: string;
            /**
             * Get the command name SheetTabLeft.
             * @name GC.Spread.Sheets.Designer#SheetTabLeft
             * @example
             * // This example get the SheetTabLeft by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTabLeft);
             */
            static SheetTabLeft: string;
            /**
             * Get the command name SheetTabMoveOrCopy.
             * @name GC.Spread.Sheets.Designer#SheetTabMoveOrCopy
             * @example
             * // This example get the SheetTabMoveOrCopy by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTabMoveOrCopy);
             */
            static SheetTabMoveOrCopy: string;
            /**
             * Get the command name SheetTabRight.
             * @name GC.Spread.Sheets.Designer#SheetTabRight
             * @example
             * // This example get the SheetTabRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTabRight);
             */
            static SheetTabRight: string;
            /**
             * Get the command name SheetTabTop.
             * @name GC.Spread.Sheets.Designer#SheetTabTop
             * @example
             * // This example get the SheetTabTop by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTabTop);
             */
            static SheetTabTop: string;
            /**
             * Get the command name SheetTag.
             * @name GC.Spread.Sheets.Designer#SheetTag
             * @example
             * // This example get the SheetTag by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SheetTag);
             */
            static SheetTag: string;
            /**
             * Get the command name ShortDateFormat.
             * @name GC.Spread.Sheets.Designer#ShortDateFormat
             * @example
             * // This example get the ShortDateFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShortDateFormat);
             */
            static ShortDateFormat: string;
            /**
             * Get the command name ShowDetail.
             * @name GC.Spread.Sheets.Designer#ShowDetail
             * @example
             * // This example get the ShowDetail by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowDetail);
             */
            static ShowDetail: string;
            /**
             * Get the command name ShowFieldList.
             * @name GC.Spread.Sheets.Designer#ShowFieldList
             * @example
             * // This example get the ShowFieldList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowFieldList);
             */
            static ShowFieldList: string;
            /**
             * Get the command name ShowFirstPoint.
             * @name GC.Spread.Sheets.Designer#ShowFirstPoint
             * @example
             * // This example get the ShowFirstPoint by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowFirstPoint);
             */
            static ShowFirstPoint: string;
            /**
             * Get the command name ShowFormulas.
             * @name GC.Spread.Sheets.Designer#ShowFormulas
             * @example
             * // This example get the ShowFormulas by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowFormulas);
             */
            static ShowFormulas: string;
            /**
             * Get the command name ShowHideColumnHeader.
             * @name GC.Spread.Sheets.Designer#ShowHideColumnHeader
             * @example
             * // This example get the ShowHideColumnHeader by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideColumnHeader);
             */
            static ShowHideColumnHeader: string;
            /**
             * Get the command name ShowHideHGridLine.
             * @name GC.Spread.Sheets.Designer#ShowHideHGridLine
             * @example
             * // This example get the ShowHideHGridLine by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideHGridLine);
             */
            static ShowHideHGridLine: string;
            /**
             * Get the command name ShowHideNewTab.
             * @name GC.Spread.Sheets.Designer#ShowHideNewTab
             * @example
             * // This example get the ShowHideNewTab by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideNewTab);
             */
            static ShowHideNewTab: string;
            /**
             * Get the command name ShowHideRowHeader.
             * @name GC.Spread.Sheets.Designer#ShowHideRowHeader
             * @example
             * // This example get the ShowHideRowHeader by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideRowHeader);
             */
            static ShowHideRowHeader: string;
            /**
             * Get the command name ShowHideTabStrip.
             * @name GC.Spread.Sheets.Designer#ShowHideTabStrip
             * @example
             * // This example get the ShowHideTabStrip by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideTabStrip);
             */
            static ShowHideTabStrip: string;
            /**
             * Get the command name ShowHideVGridLine.
             * @name GC.Spread.Sheets.Designer#ShowHideVGridLine
             * @example
             * // This example get the ShowHideVGridLine by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHideVGridLine);
             */
            static ShowHideVGridLine: string;
            /**
             * Get the command name ShowHighpoint.
             * @name GC.Spread.Sheets.Designer#ShowHighpoint
             * @example
             * // This example get the ShowHighpoint by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowHighpoint);
             */
            static ShowHighpoint: string;
            /**
             * Get the command name ShowLastPoint.
             * @name GC.Spread.Sheets.Designer#ShowLastPoint
             * @example
             * // This example get the ShowLastPoint by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowLastPoint);
             */
            static ShowLastPoint: string;
            /**
             * Get the command name ShowLowPoint.
             * @name GC.Spread.Sheets.Designer#ShowLowPoint
             * @example
             * // This example get the ShowLowPoint by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowLowPoint);
             */
            static ShowLowPoint: string;
            /**
             * Get the command name ShowMarkers.
             * @name GC.Spread.Sheets.Designer#ShowMarkers
             * @example
             * // This example get the ShowMarkers by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowMarkers);
             */
            static ShowMarkers: string;
            /**
             * Get the command name ShowNegativePoint.
             * @name GC.Spread.Sheets.Designer#ShowNegativePoint
             * @example
             * // This example get the ShowNegativePoint by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowNegativePoint);
             */
            static ShowNegativePoint: string;
            /**
             * Get the command name ShowTabColor.
             * @name GC.Spread.Sheets.Designer#ShowTabColor
             * @example
             * // This example get the ShowTabColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ShowTabColor);
             */
            static ShowTabColor: string;
            /**
             * Get the command name SlicerFormat.
             * @name GC.Spread.Sheets.Designer#SlicerFormat
             * @example
             * // This example get the SlicerFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerFormat);
             */
            static SlicerFormat: string;
            /**
             * Get the command name SlicerFormatListContent.
             * @name GC.Spread.Sheets.Designer#SlicerFormatListContent
             * @example
             * // This example get the SlicerFormatListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerFormatListContent);
             */
            static SlicerFormatListContent: string;
            /**
             * Get the command name SlicerHeight.
             * @name GC.Spread.Sheets.Designer#SlicerHeight
             * @example
             * // This example get the SlicerHeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerHeight);
             */
            static SlicerHeight: string;
            /**
             * Get the command name SlicerPasteOptions.
             * @name GC.Spread.Sheets.Designer#SlicerPasteOptions
             * @example
             * // This example get the SlicerPasteOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerPasteOptions);
             */
            static SlicerPasteOptions: string;
            /**
             * Get the command name SlicerProperty.
             * @name GC.Spread.Sheets.Designer#SlicerProperty
             * @example
             * // This example get the SlicerProperty by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerProperty);
             */
            static SlicerProperty: string;
            /**
             * Get the command name SlicerReportConnections.
             * @name GC.Spread.Sheets.Designer#SlicerReportConnections
             * @example
             * // This example get the SlicerReportConnections by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerReportConnections);
             */
            static SlicerReportConnections: string;
            /**
             * Get the command name SlicerSetting.
             * @name GC.Spread.Sheets.Designer#SlicerSetting
             * @example
             * // This example get the SlicerSetting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerSetting);
             */
            static SlicerSetting: string;
            /**
             * Get the command name SlicerSortAscend.
             * @name GC.Spread.Sheets.Designer#SlicerSortAscend
             * @example
             * // This example get the SlicerSortAscend by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerSortAscend);
             */
            static SlicerSortAscend: string;
            /**
             * Get the command name SlicerSortDescend.
             * @name GC.Spread.Sheets.Designer#SlicerSortDescend
             * @example
             * // This example get the SlicerSortDescend by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerSortDescend);
             */
            static SlicerSortDescend: string;
            /**
             * Get the command name SlicerStyleListContent.
             * @name GC.Spread.Sheets.Designer#SlicerStyleListContent
             * @example
             * // This example get the SlicerStyleListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerStyleListContent);
             */
            static SlicerStyleListContent: string;
            /**
             * Get the command name SlicerWidth.
             * @name GC.Spread.Sheets.Designer#SlicerWidth
             * @example
             * // This example get the SlicerWidth by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SlicerWidth);
             */
            static SlicerWidth: string;
            /**
             * Get the command name SliderCellType.
             * @name GC.Spread.Sheets.Designer#SliderCellType
             * @example
             * // This example get the SliderCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SliderCellType);
             */
            static SliderCellType: string;
            /**
             * Get the command name SolidFill.
             * @name GC.Spread.Sheets.Designer#SolidFill
             * @example
             * // This example get the SolidFill by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFill);
             */
            static SolidFill: string;
            /**
             * Get the command name SolidFillBlueDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillBlueDataBar
             * @example
             * // This example get the SolidFillBlueDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillBlueDataBar);
             */
            static SolidFillBlueDataBar: string;
            /**
             * Get the command name SolidFillGreenDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillGreenDataBar
             * @example
             * // This example get the SolidFillGreenDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillGreenDataBar);
             */
            static SolidFillGreenDataBar: string;
            /**
             * Get the command name SolidFillLightBlueDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillLightBlueDataBar
             * @example
             * // This example get the SolidFillLightBlueDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillLightBlueDataBar);
             */
            static SolidFillLightBlueDataBar: string;
            /**
             * Get the command name SolidFillOrangeDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillOrangeDataBar
             * @example
             * // This example get the SolidFillOrangeDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillOrangeDataBar);
             */
            static SolidFillOrangeDataBar: string;
            /**
             * Get the command name SolidFillPurpleDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillPurpleDataBar
             * @example
             * // This example get the SolidFillPurpleDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillPurpleDataBar);
             */
            static SolidFillPurpleDataBar: string;
            /**
             * Get the command name SolidFillRedDataBar.
             * @name GC.Spread.Sheets.Designer#SolidFillRedDataBar
             * @example
             * // This example get the SolidFillRedDataBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SolidFillRedDataBar);
             */
            static SolidFillRedDataBar: string;
            /**
             * Get the command name Sort.
             * @name GC.Spread.Sheets.Designer#Sort
             * @example
             * // This example get the Sort by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Sort);
             */
            static Sort: string;
            /**
             * Get the command name SortAtoZ.
             * @name GC.Spread.Sheets.Designer#SortAtoZ
             * @example
             * // This example get the SortAtoZ by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortAtoZ);
             */
            static SortAtoZ: string;
            /**
             * Get the command name SortAZ.
             * @name GC.Spread.Sheets.Designer#SortAZ
             * @example
             * // This example get the SortAZ by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortAZ);
             */
            static SortAZ: string;
            /**
             * Get the command name SortAZData.
             * @name GC.Spread.Sheets.Designer#SortAZData
             * @example
             * // This example get the SortAZData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortAZData);
             */
            static SortAZData: string;
            /**
             * Get the command name SortZA.
             * @name GC.Spread.Sheets.Designer#SortZA
             * @example
             * // This example get the SortZA by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortZA);
             */
            static SortZA: string;
            /**
             * Get the command name SortZAData.
             * @name GC.Spread.Sheets.Designer#SortZAData
             * @example
             * // This example get the SortZAData by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortZAData);
             */
            static SortZAData: string;
            /**
             * Get the command name SortZtoA.
             * @name GC.Spread.Sheets.Designer#SortZtoA
             * @example
             * // This example get the SortZtoA by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SortZtoA);
             */
            static SortZtoA: string;
            /**
             * Get the command name SparklineColor.
             * @name GC.Spread.Sheets.Designer#SparklineColor
             * @example
             * // This example get the SparklineColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineColor);
             */
            static SparklineColor: string;
            /**
             * Get the command name SparklineGallery.
             * @name GC.Spread.Sheets.Designer#SparklineGallery
             * @example
             * // The example get the SparklineGallery by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineGallery);
             */
            static SparklineGallery: string;
            /**
             * Get the command name SparklineGroup.
             * @name GC.Spread.Sheets.Designer#SparklineGroup
             * @example
             * // This example get the SparklineGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineGroup);
             */
            static SparklineGroup: string;
            /**
             * Get the command name SparklineImageSparkline.
             * @name GC.Spread.Sheets.Designer#SparklineImageSparkline
             * @example
             * // This example get the SparklineImageSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineImageSparkline);
             */
            static SparklineImageSparkline: string;
            /**
             * Get the command name SparklineMarkerColor.
             * @name GC.Spread.Sheets.Designer#SparklineMarkerColor
             * @example
             * // This example get the SparklineMarkerColor by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineMarkerColor);
             */
            static SparklineMarkerColor: string;
            /**
             * Get the command name SparklinesAreaSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesAreaSparkline
             * @example
             * // This example get the SparklinesAreaSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesAreaSparkline);
             */
            static SparklinesAreaSparkline: string;
            /**
             * Get the command name SparklinesBoxPlotSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesBoxPlotSparkline
             * @example
             * // This example get the SparklinesBoxPlotSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesBoxPlotSparkline);
             */
            static SparklinesBoxPlotSparkline: string;
            /**
             * Get the command name SparklinesBulletSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesBulletSparkline
             * @example
             * // This example get the SparklinesBulletSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesBulletSparkline);
             */
            static SparklinesBulletSparkline: string;
            /**
             * Get the command name SparklinesCascadeSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesCascadeSparkline
             * @example
             * // This example get the SparklinesCascadeSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesCascadeSparkline);
             */
            static SparklinesCascadeSparkline: string;
            /**
             * Get the command name SparklinesColumnSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesColumnSparkline
             * @example
             * // This example get the SparklinesColumnSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesColumnSparkline);
             */
            static SparklinesColumnSparkline: string;
            /**
             * Get the command name SparklinesGaugeKPISparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesGaugeKPISparkline
             * @example
             * // This example get the SparklinesGaugeKPISparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesGaugeKPISparkline);
             */
            static SparklinesGaugeKPISparkline: string;
            /**
             * Get the command name SparklinesHBarSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesHBarSparkline
             * @example
             * // This example get the SparklinesHBarSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesHBarSparkline);
             */
            static SparklinesHBarSparkline: string;
            /**
             * Get the command name SparklinesHistogramSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesHistogramSparkline
             * @example
             * // This example get the SparklinesHistogram by the command name.
             * var command  = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesHistogramSparkline);
             */
            static SparklinesHistogramSparkline: string;
            /**
             * Get the command name SparklinesLineSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesLineSparkline
             * @example
             * // This example get the SparklinesLineSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesLineSparkline);
             */
            static SparklinesLineSparkline: string;
            /**
             * Get the command name SparklinesMonthSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesMonthSparkline
             * @example
             * // This example get the SparklinesMonthSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesMonthSparkline);
             */
            static SparklinesMonthSparkline: string;
            /**
             * Get the command name SparklinesParetoSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesParetoSparkline
             * @example
             * // This example get the SparklinesParetoSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesParetoSparkline);
             */
            static SparklinesParetoSparkline: string;
            /**
             * Get the command name SparklinesPieSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesPieSparkline
             * @example
             * // This example get the SparklinesPieSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesPieSparkline);
             */
            static SparklinesPieSparkline: string;
            /**
             * Get the command name SparklinesRangeBlockSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesRangeBlockSparkline
             * @example
             * // This example get the SparklinesRangeBlockSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesRangeBlockSparkline);
             */
            static SparklinesRangeBlockSparkline: string;
            /**
             * Get the command name SparklinesScatterSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesScatterSparkline
             * @example
             * // This example get the SparklinesScatterSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesScatterSparkline);
             */
            static SparklinesScatterSparkline: string;
            /**
             * Get the command name SparklinesSpreadsSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesSpreadsSparkline
             * @example
             * // This example get the SparklinesSpreadsSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesSpreadsSparkline);
             */
            static SparklinesSpreadsSparkline: string;
            /**
             * Get the command name SparklinesStackedSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesStackedSparkline
             * @example
             * // This example get the SparklinesStackedSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesStackedSparkline);
             */
            static SparklinesStackedSparkline: string;
            /**
             * Get the command name SparklinesVarianceSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesVarianceSparkline
             * @example
             * // This example get the SparklinesVarianceSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesVarianceSparkline);
             */
            static SparklinesVarianceSparkline: string;
            /**
             * Get the command name SparklinesVBarSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesVBarSparkline
             * @example
             * // This example get the SparklinesVBarSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesVBarSparkline);
             */
            static SparklinesVBarSparkline: string;
            /**
             * Get the command name SparklinesWinLossSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesWinLossSparkline
             * @example
             * // This example get the SparklinesWinLossSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesWinLossSparkline);
             */
            static SparklinesWinLossSparkline: string;
            /**
             * Get the command name SparklinesYearSparkline.
             * @name GC.Spread.Sheets.Designer#SparklinesYearSparkline
             * @example
             * // This example get the SparklinesYearSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklinesYearSparkline);
             */
            static SparklinesYearSparkline: string;
            /**
             * Get the command name SparklineUngroup.
             * @name GC.Spread.Sheets.Designer#SparklineUngroup
             * @example
             * // This example get the SparklineUngroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineUngroup);
             */
            static SparklineUngroup: string;
            /**
             * Get the command name SparklineWeight.
             * @name GC.Spread.Sheets.Designer#SparklineWeight
             * @example
             * // This example get the SparklineWeight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SparklineWeight);
             */
            static SparklineWeight: string;
            /**
             * Get the command name SpreadSettingCalculation.
             * @name GC.Spread.Sheets.Designer#SpreadSettingCalculation
             * @example
             * // This example get the SpreadSettingCalculation by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SpreadSettingCalculation);
             */
            static SpreadSettingCalculation: string;
            /**
             * Get the command name SpreadSettingGeneral.
             * @name GC.Spread.Sheets.Designer#SpreadSettingGeneral
             * @example
             * // This example get the SpreadSettingGeneral by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SpreadSettingGeneral);
             */
            static SpreadSettingGeneral: string;
            /**
             * Get the command name SpreadSettingScrollBar.
             * @name GC.Spread.Sheets.Designer#SpreadSettingScrollBar
             * @example
             * // This example get the SpreadSettingScrollBar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SpreadSettingScrollBar);
             */
            static SpreadSettingScrollBar: string;
            /**
             * Get the command name SpreadSettingTabStrip.
             * @name GC.Spread.Sheets.Designer#SpreadSettingTabStrip
             * @example
             * // This example get the SpreadSettingTabStrip by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SpreadSettingTabStrip);
             */
            static SpreadSettingTabStrip: string;
            /**
             * Get the command name StackedBar100Chart.
             * @name GC.Spread.Sheets.Designer#StackedBar100Chart
             * @example
             * // The example get the StackedBar100Chart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StackedBar100Chart);
             */
            static StackedBar100Chart: string;
            /**
             * Get the command name StackedBarChart.
             * @name GC.Spread.Sheets.Designer#StackedBarChart
             * @example
             * // The example get the StackedBarChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StackedBarChart);
             */
            static StackedBarChart: string;
            /**
             * Get the command name StackedColumn100Chart.
             * @name GC.Spread.Sheets.Designer#StackedColumn100Chart
             * @example
             * // The example get the StackedColumn100Chart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StackedColumn100Chart);
             */
            static StackedColumn100Chart: string;
            /**
             * Get the command name StackedColumnChart.
             * @name GC.Spread.Sheets.Designer#StackedColumnChart
             * @example
             * // The example get the StackedColumnChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StackedColumnChart);
             */
            static StackedColumnChart: string;
            /**
             * Get the command name StateRules.
             * @name GC.Spread.Sheets.Designer#StateRules
             * @example
             * // This example get the StateRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StateRules);
             */
            static StateRules: string;
            /**
             * Get the command name StatusBarPanel.
             * @name GC.Spread.Sheets.Designer#StatusBarPanel
             * @example
             * // This example get the StatusBarPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StatusBarPanel);
             */
            static StatusBarPanel: string;
            /**
             * Get the command name StockChartGroup.
             * @name GC.Spread.Sheets.Designer#StockChartGroup
             * @example
             * // The example get the StockChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockChartGroup);
             */
            static StockChartGroup: string;
            /**
             * Get the command name StockChartPanel.
             * @name GC.Spread.Sheets.Designer#StockChartPanel
             * @example
             * // This example get the StockChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockChartPanel);
             */
            static StockChartPanel: string;
            /**
             * Get the command name StockHLCChart.
             * @name GC.Spread.Sheets.Designer#StockHLCChart
             * @example
             * // The example get the StockHLCChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockHLCChart);
             */
            static StockHLCChart: string;
            /**
             * Get the command name StockOHLCChart.
             * @name GC.Spread.Sheets.Designer#StockOHLCChart
             * @example
             * // The example get the StockOHLCChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockOHLCChart);
             */
            static StockOHLCChart: string;
            /**
             * Get the command name StockVHLCChart.
             * @name GC.Spread.Sheets.Designer#StockVHLCChart
             * @example
             * // The example get the StockVHLCChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockVHLCChart);
             */
            static StockVHLCChart: string;
            /**
             * Get the command name StockVOHLCChart.
             * @name GC.Spread.Sheets.Designer#StockVOHLCChart
             * @example
             * // The example get the StockVOHLCChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.StockVOHLCChart);
             */
            static StockVOHLCChart: string;
            /**
             * Get the command name SubmitTableSheetChanges.
             * @name GC.Spread.Sheets.Designer#SubmitTableSheetChanges
             * @example
             * // This example get the SubmitTableSheetChanges by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SubmitTableSheetChanges);
             */
            static SubmitTableSheetChanges: string;
            /**
             * Get the command name Subtotal.
             * @name GC.Spread.Sheets.Designer#Subtotal
             * @example
             * // This example get the Subtotal by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Subtotal);
             */
            static Subtotal: string;
            /**
             * Get the command name SunburstChart.
             * @name GC.Spread.Sheets.Designer#SunburstChart
             * @example
             * // The example get the SunburstChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SunburstChart);
             */
            static SunburstChart: string;
            /**
             * Get the command name SunburstChartGroup.
             * @name GC.Spread.Sheets.Designer#SunburstChartGroup
             * @example
             * // The example get the SunburstChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SunburstChartGroup);
             */
            static SunburstChartGroup: string;
            /**
             * Get the command name SunburstChartPanel.
             * @name GC.Spread.Sheets.Designer#SunburstChartPanel
             * @example
             * // This example get the SunburstChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SunburstChartPanel);
             */
            static SunburstChartPanel: string;
            /**
             * Get the command name SwitchRowColumn.
             * @name GC.Spread.Sheets.Designer#SwitchRowColumn
             * @example
             * // This example get the SwitchRowColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.SwitchRowColumn);
             */
            static SwitchRowColumn: string;
            /**
             * Get the command name Table.
             * @name GC.Spread.Sheets.Designer#Table
             * @example
             * // This example get the Table by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Table);
             */
            static Table: string;
            /**
             * Get the command name TableAllowAutoExpand.
             * @name GC.Spread.Sheets.Designer#TableAllowAutoExpand
             * @example
             * // This example get the TableAllowAutoExpand by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableAllowAutoExpand);
             */
            static TableAllowAutoExpand: string;
            /**
             * Get the command name TableDelete.
             * @name GC.Spread.Sheets.Designer#TableDelete
             * @example
             * // This example get the TableDelete by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableDelete);
             */
            static TableDelete: string;
            /**
             * Get the command name TableDeleteColumns.
             * @name GC.Spread.Sheets.Designer#TableDeleteColumns
             * @example
             * // This example get the TableDeleteColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableDeleteColumns);
             */
            static TableDeleteColumns: string;
            /**
             * Get the command name TableDeleteRows.
             * @name GC.Spread.Sheets.Designer#TableDeleteRows
             * @example
             * // This example get the TableDeleteRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableDeleteRows);
             */
            static TableDeleteRows: string;
            /**
             * Get the command name TableInsert.
             * @name GC.Spread.Sheets.Designer#TableInsert
             * @example
             * // This example get the TableInsert by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableInsert);
             */
            static TableInsert: string;
            /**
             * Get the command name TableInsertColumnsLeft.
             * @name GC.Spread.Sheets.Designer#TableInsertColumnsLeft
             * @example
             * // This example get the TableInsertColumnsLeft by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableInsertColumnsLeft);
             */
            static TableInsertColumnsLeft: string;
            /**
             * Get the command name TableInsertColumnsRight.
             * @name GC.Spread.Sheets.Designer#TableInsertColumnsRight
             * @example
             * // This example get the TableInsertColumnsRight by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableInsertColumnsRight);
             */
            static TableInsertColumnsRight: string;
            /**
             * Get the command name TableInsertRowAbove.
             * @name GC.Spread.Sheets.Designer#TableInsertRowAbove
             * @example
             * // This example get the TableInsertRowAbove by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableInsertRowAbove);
             */
            static TableInsertRowAbove: string;
            /**
             * Get the command name TableInsertRowsBelow.
             * @name GC.Spread.Sheets.Designer#TableInsertRowsBelow
             * @example
             * // This example get the TableInsertRowsBelow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableInsertRowsBelow);
             */
            static TableInsertRowsBelow: string;
            /**
             * Get the command name TableName.
             * @name GC.Spread.Sheets.Designer#TableName
             * @example
             * // This example get the TableName by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableName);
             */
            static TableName: string;
            /**
             * Get the command name TablesheetConditionFormatManageRule.
             * @name GC.Spread.Sheets.Designer#TablesheetConditionFormatManageRule
             * @example
             * // This example get the TablesheetConditionFormatManageRule by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TablesheetConditionFormatManageRule);
             */
            static TablesheetConditionFormatManageRule: string;
            /**
             * Get the command name TableSheetPanel.
             * @name GC.Spread.Sheets.Designer#TableSheetPanel
             * @example
             * // This example get the TableSheetPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableSheetPanel);
             */
            static TableSheetPanel: string;
            /**
             * Get the command name TableSheetPaste.
             * @name GC.Spread.Sheets.Designer#TableSheetPaste
             * @example
             * // This example get the TableSheetPaste by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableSheetPaste);
             */
            static TableSheetPaste: string;
            /**
             * Get the command name TableSheetPinColumns.
             * @name GC.Spread.Sheets.Designer#TableSheetPinColumns
             * @example
             * // This example get the TableSheetPinColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableSheetPinColumns);
             */
            static TableSheetPinColumns: string;
            /**
             * Get the command name TableSheetPinRows.
             * @name GC.Spread.Sheets.Designer#TableSheetPinRows
             * @example
             * // This example get the TableSheetPinRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableSheetPinRows);
             */
            static TableSheetPinRows: string;
            /**
             * Get the command name TableStyleBandedColumns.
             * @name GC.Spread.Sheets.Designer#TableStyleBandedColumns
             * @example
             * // This example get the TableStyleBandedColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleBandedColumns);
             */
            static TableStyleBandedColumns: string;
            /**
             * Get the command name TableStyleBandedRows.
             * @name GC.Spread.Sheets.Designer#TableStyleBandedRows
             * @example
             * // This example get the TableStyleBandedRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleBandedRows);
             */
            static TableStyleBandedRows: string;
            /**
             * Get the command name TableStyleFilterButton.
             * @name GC.Spread.Sheets.Designer#TableStyleFilterButton
             * @example
             * // This example get the TableStyleFilterButton by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleFilterButton);
             */
            static TableStyleFilterButton: string;
            /**
             * Get the command name TableStyleFirstColumn.
             * @name GC.Spread.Sheets.Designer#TableStyleFirstColumn
             * @example
             * // This example get the TableStyleFirstColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleFirstColumn);
             */
            static TableStyleFirstColumn: string;
            /**
             * Get the command name TableStyleHeaderRow.
             * @name GC.Spread.Sheets.Designer#TableStyleHeaderRow
             * @example
             * // This example get the TableStyleHeaderRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleHeaderRow);
             */
            static TableStyleHeaderRow: string;
            /**
             * Get the command name TableStyleLastColumn.
             * @name GC.Spread.Sheets.Designer#TableStyleLastColumn
             * @example
             * // This example get the TableStyleLastColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleLastColumn);
             */
            static TableStyleLastColumn: string;
            /**
             * Get the command name TableStyleOptions.
             * @name GC.Spread.Sheets.Designer#TableStyleOptions
             * @example
             * // This example get the TableStyleOptions by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleOptions);
             */
            static TableStyleOptions: string;
            /**
             * Get the command name TableStyleResizeHandler.
             * @name GC.Spread.Sheets.Designer#TableStyleResizeHandler
             * @example
             * // This example get the TableStyleResizeHandler by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleResizeHandler);
             */
            static TableStyleResizeHandler: string;
            /**
             * Get the command name TableStyleTotalRow.
             * @name GC.Spread.Sheets.Designer#TableStyleTotalRow
             * @example
             * // This example get the TableStyleTotalRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleTotalRow);
             */
            static TableStyleTotalRow: string;
            /**
             * Get the command name TableStyleTotalRowList.
             * @name GC.Spread.Sheets.Designer#TableStyleTotalRowList
             * @example
             * // This example get the TableStyleTotalRowList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableStyleTotalRowList);
             */
            static TableStyleTotalRowList: string;
            /**
             * Get the command name TableToRange.
             * @name GC.Spread.Sheets.Designer#TableToRange
             * @example
             * // This example get the TableToRange by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableToRange);
             */
            static TableToRange: string;
            /**
             * Get the command name TableTotalRow.
             * @name GC.Spread.Sheets.Designer#TableTotalRow
             * @example
             * // This example get the TableTotalRow by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TableTotalRow);
             */
            static TableTotalRow: string;
            /**
             * Get the command name TextFormat.
             * @name GC.Spread.Sheets.Designer#TextFormat
             * @example
             * // This example get the TextFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TextFormat);
             */
            static TextFormat: string;
            /**
             * Get the command name TextToColumn.
             * @name GC.Spread.Sheets.Designer#TextToColumn
             * @example
             * // This example get the TextToColumn by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TextToColumn);
             */
            static TextToColumn: string;
            /**
             * Get the command name ThickBottomBorder.
             * @name GC.Spread.Sheets.Designer#ThickBottomBorder
             * @example
             * // This example get the ThickBottomBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ThickBottomBorder);
             */
            static ThickBottomBorder: string;
            /**
             * Get the command name ThickBoxBorder.
             * @name GC.Spread.Sheets.Designer#ThickBoxBorder
             * @example
             * // This example get the ThickBoxBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ThickBoxBorder);
             */
            static ThickBoxBorder: string;
            /**
             * Get the command name TimeFormat.
             * @name GC.Spread.Sheets.Designer#TimeFormat
             * @example
             * // This example get the TimeFormat by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimeFormat);
             */
            static TimeFormat: string;
            /**
             * Get the command name TimelineCaptionName.
             * @name GC.Spread.Sheets.Designer#TimelineCaptionName
             * @example
             * // This example get the TimelineCaptionName by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineCaptionName);
             */
            static TimelineCaptionName: string;
            /**
             * Get the command name TimelineShowHeader.
             * @name GC.Spread.Sheets.Designer#TimelineShowHeader
             * @example
             * // This example get the TimelineShowHeader by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineShowHeader);
             */
            static TimelineShowHeader: string;
            /**
             * Get the command name TimelineShowScrollbar.
             * @name GC.Spread.Sheets.Designer#TimelineShowScrollbar
             * @example
             * // This example get the TimelineShowScrollbar by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineShowScrollbar);
             */
            static TimelineShowScrollbar: string;
            /**
             * Get the command name TimelineShowSelectionLabel.
             * @name GC.Spread.Sheets.Designer#TimelineShowSelectionLabel
             * @example
             * // This example get the TimelineShowSelectionLabel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineShowSelectionLabel);
             */
            static TimelineShowSelectionLabel: string;
            /**
             * Get the command name TimelineShowTimeLevel.
             * @name GC.Spread.Sheets.Designer#TimelineShowTimeLevel
             * @example
             * // This example get the TimelineShowTimeLevel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineShowTimeLevel);
             */
            static TimelineShowTimeLevel: string;
            /**
             * Get the command name TimelineStyleListContent.
             * @name GC.Spread.Sheets.Designer#TimelineStyleListContent
             * @example
             * // This example get the TimelineStyleListContent by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimelineStyleListContent);
             */
            static TimelineStyleListContent: string;
            /**
             * Get the command name TimePickerCellType.
             * @name GC.Spread.Sheets.Designer#TimePickerCellType
             * @example
             * // This example get the TimePickerCellType by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TimePickerCellType);
             */
            static TimePickerCellType: string;
            /**
             * Get the command name ToggleComment.
             * @name GC.Spread.Sheets.Designer#ToggleComment
             * @example
             * // This example get the ToggleComment by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ToggleComment);
             */
            static ToggleComment: string;
            /**
             * Get the command name ToggleTableSheetDesignMode.
             * @name GC.Spread.Sheets.Designer#ToggleTableSheetDesignMode
             * @example
             * // This example get the ToggleTableSheetDesignMode by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ToggleTableSheetDesignMode);
             */
            static ToggleTableSheetDesignMode: string;
            /**
             * Get the command name ToggleTableSheetPanel.
             * @name GC.Spread.Sheets.Designer#ToggleTableSheetPanel
             * @example
             * // This example get the ToggleTableSheetPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ToggleTableSheetPanel);
             */
            static ToggleTableSheetPanel: string;
            /**
             * Get the command name ToggleTableSheetRowAction.
             * @name GC.Spread.Sheets.Designer#ToggleTableSheetRowAction
             * @example
             * // This example get the ToggleTableSheetRowAction by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ToggleTableSheetRowAction);
             */
            static ToggleTableSheetRowAction: string;
            /**
             * Get the command name TopAlign.
             * @name GC.Spread.Sheets.Designer#TopAlign
             * @example
             * // This example get the TopAlign by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopAlign);
             */
            static TopAlign: string;
            /**
             * Get the command name TopBorder.
             * @name GC.Spread.Sheets.Designer#TopBorder
             * @example
             * // This example get the TopBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBorder);
             */
            static TopBorder: string;
            /**
             * Get the command name TopBottomBorder.
             * @name GC.Spread.Sheets.Designer#TopBottomBorder
             * @example
             * // This example get the TopBottomBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomBorder);
             */
            static TopBottomBorder: string;
            /**
             * Get the command name TopBottomRules.
             * @name GC.Spread.Sheets.Designer#TopBottomRules
             * @example
             * // This example get the TopBottomRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRules);
             */
            static TopBottomRules: string;
            /**
             * Get the command name TopBottomRulesAboveAverage.
             * @name GC.Spread.Sheets.Designer#TopBottomRulesAboveAverage
             * @example
             * // This example get the TopBottomRulesAboveAverage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRulesAboveAverage);
             */
            static TopBottomRulesAboveAverage: string;
            /**
             * Get the command name TopBottomRulesBelowAverage.
             * @name GC.Spread.Sheets.Designer#TopBottomRulesBelowAverage
             * @example
             * // This example get the TopBottomRulesBelowAverage by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRulesBelowAverage);
             */
            static TopBottomRulesBelowAverage: string;
            /**
             * Get the command name TopBottomRulesBottom10.
             * @name GC.Spread.Sheets.Designer#TopBottomRulesBottom10
             * @example
             * // This example get the TopBottomRulesBottom10 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRulesBottom10);
             */
            static TopBottomRulesBottom10: string;
            /**
             * Get the command name TopBottomRulesMoreRules.
             * @name GC.Spread.Sheets.Designer#TopBottomRulesMoreRules
             * @example
             * // This example get the TopBottomRulesMoreRules by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRulesMoreRules);
             */
            static TopBottomRulesMoreRules: string;
            /**
             * Get the command name TopBottomRulesTop10.
             * @name GC.Spread.Sheets.Designer#TopBottomRulesTop10
             * @example
             * // This example get the TopBottomRulesTop10 by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopBottomRulesTop10);
             */
            static TopBottomRulesTop10: string;
            /**
             * Get the command name TopDoubleBottomBorder.
             * @name GC.Spread.Sheets.Designer#TopDoubleBottomBorder
             * @example
             * // This example get the TopDoubleBottomBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopDoubleBottomBorder);
             */
            static TopDoubleBottomBorder: string;
            /**
             * Get the command name TopThickBottomBorder.
             * @name GC.Spread.Sheets.Designer#TopThickBottomBorder
             * @example
             * // This example get the TopThickBottomBorder by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TopThickBottomBorder);
             */
            static TopThickBottomBorder: string;
            /**
             * Get the command name TreemapChart.
             * @name GC.Spread.Sheets.Designer#TreemapChart
             * @example
             * // The example get the TreemapChart by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TreemapChart);
             */
            static TreemapChart: string;
            /**
             * Get the command name TreemapChartGroup.
             * @name GC.Spread.Sheets.Designer#TreemapChartGroup
             * @example
             * // The example get the TreemapChartGroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TreemapChartGroup);
             */
            static TreemapChartGroup: string;
            /**
             * Get the command name TreeMapChartPanel.
             * @name GC.Spread.Sheets.Designer#TreeMapChartPanel
             * @example
             * // This example get the TreeMapChartPanel by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TreeMapChartPanel);
             */
            static TreeMapChartPanel: string;
            /**
             * Get the command name TreeMapOrSunburstChartPreview.
             * @name GC.Spread.Sheets.Designer#TreeMapOrSunburstChartPreview
             * @example
             * // The example get the TreeMapOrSunburstChartPreview by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.TreeMapOrSunburstChartPreview);
             */
            static TreeMapOrSunburstChartPreview: string;
            /**
             * Get the command name Trendline.
             * @name GC.Spread.Sheets.Designer#Trendline
             * @example
             * // This example get the Trendline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Trendline);
             */
            static Trendline: string;
            /**
             * Get the command name Undo.
             * @name GC.Spread.Sheets.Designer#Undo
             * @example
             * // This example get the Undo by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Undo);
             */
            static Undo: string;
            /**
             * Get the command name undoAndRedoList.
             * @name GC.Spread.Sheets.Designer#undoAndRedoList
             * @example
             * // This example get the undoAndRedoList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.undoAndRedoList);
             */
            static undoAndRedoList: string;
            /**
             * Get the command name UndoList.
             * @name GC.Spread.Sheets.Designer#UndoList
             * @example
             * // This example get the UndoList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UndoList);
             */
            static UndoList: string;
            /**
             * Get the command name UnfreezePanes.
             * @name GC.Spread.Sheets.Designer#UnfreezePanes
             * @example
             * // This example get the UnfreezePanes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnfreezePanes);
             */
            static UnfreezePanes: string;
            /**
             * Get the command name Ungroup.
             * @name GC.Spread.Sheets.Designer#Ungroup
             * @example
             * // This example get the Ungroup by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Ungroup);
             */
            static Ungroup: string;
            /**
             * Get the command name UnhideColumns.
             * @name GC.Spread.Sheets.Designer#UnhideColumns
             * @example
             * // This example get the UnhideColumns by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnhideColumns);
             */
            static UnhideColumns: string;
            /**
             * Get the command name UnhideRows.
             * @name GC.Spread.Sheets.Designer#UnhideRows
             * @example
             * // This example get the UnhideRows by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnhideRows);
             */
            static UnhideRows: string;
            /**
             * Get the command name UnhideSheet.
             * @name GC.Spread.Sheets.Designer#UnhideSheet
             * @example
             * // This example get the UnhideSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnhideSheet);
             */
            static UnhideSheet: string;
            /**
             * Get the command name UnMergeCells.
             * @name GC.Spread.Sheets.Designer#UnMergeCells
             * @example
             * // This example get the UnMergeCells by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnMergeCells);
             */
            static UnMergeCells: string;
            /**
             * Get the command name UnprotectSheet.
             * @name GC.Spread.Sheets.Designer#UnprotectSheet
             * @example
             * // This example get the UnprotectSheet by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnprotectSheet);
             */
            static UnprotectSheet: string;
            /**
             * Get the command name UnShapeSnapToGrid.
             * @name GC.Spread.Sheets.Designer#UnShapeSnapToGrid
             * @example
             * // This example get the UnShapeSnapToGrid by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnShapeSnapToGrid);
             */
            static UnShapeSnapToGrid: string;
            /**
             * Get the command name UnShapeSnapToShape.
             * @name GC.Spread.Sheets.Designer#UnShapeSnapToShape
             * @example
             * // This example get the UnShapeSnapToShape by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.UnShapeSnapToShape);
             */
            static UnShapeSnapToShape: string;
            /**
             * Get the command name ValuesAndFormatting.
             * @name GC.Spread.Sheets.Designer#ValuesAndFormatting
             * @example
             * // This example get the ValuesAndFormatting by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ValuesAndFormatting);
             */
            static ValuesAndFormatting: string;
            /**
             * Get the command name ViewportFreezePanes.
             * @name GC.Spread.Sheets.Designer#ViewportFreezePanes
             * @example
             * // This example get the ViewportFreezePanes by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ViewportFreezePanes);
             */
            static ViewportFreezePanes: string;
            /**
             * Get the command name WinLossSparkline.
             * @name GC.Spread.Sheets.Designer#WinLossSparkline
             * @example
             * // This example get the WinLossSparkline by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.WinLossSparkline);
             */
            static WinLossSparkline: string;
            /**
             * Get the command name WorkflowList.
             * @name GC.Spread.Sheets.Designer#WorkflowList
             * @example
             * // This example get the WorkflowList by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.WorkflowList);
             */
            static WorkflowList: string;
            /**
             * Get the command name WrapText.
             * @name GC.Spread.Sheets.Designer#WrapText
             * @example
             * // This example get the WrapText by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.WrapText);
             */
            static WrapText: string;
            /**
             * Get the command name Zoom.
             * @name GC.Spread.Sheets.Designer#Zoom
             * @example
             * // This example get the Zoom by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.Zoom);
             */
            static Zoom: string;
            /**
             * Get the command name ZoomDefault.
             * @name GC.Spread.Sheets.Designer#ZoomDefault
             * @example
             * // This example get the ZoomDefault by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ZoomDefault);
             */
            static ZoomDefault: string;
            /**
             * Get the command name ZoomSelection.
             * @name GC.Spread.Sheets.Designer#ZoomSelection
             * @example
             * // This example get the ZoomSelection by the command name.
             * var command = GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.ZoomSelection);
             */
            static ZoomSelection: string;
        }

        export class Designer{
            /**
             * Represent a Designer with the specified hosted DOM element, custom config and an existing spread.
             * @class
             * @param {HTMLDivElement | string} host - This is the HTML area that the Designer Component mounts.
             * @param {Object} config - The designer config object.
             * @param {Object} spread - The workbook instance.
             * @param {Object} spreadOptions - The workbook initialization options.
             * @example
             * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
             * var customConfig = {
             *       ribbon: [
             *           {
             *               id: "home",
             *               text: "HOME",
             *               buttonGroups: [
             *                 {
             *                   label: "Undo",
             *                   thumbnailClass: "ribbon-thumbnail-undoRedo",
             *                   commandGroup: {
             *                     children: [
             *                       {
             *                         direction: "vertical",
             *                         commands: [
             *                           "undo",
             *                           "redo"
             *                         ]
             *                       }
             *                     ]
             *                   }
             *                 }
             *               ]
             *           }
             *       ],
             *       contextMenu: [
             *           "contextMenuCut",
             *           "contextMenuCopy",
             *       ],
             *       fileMenu: "fileMenuButton",
             *       sidePanels: [
             *           {
             *               position: "top",
             *               allowResize: true,
             *               command: "formulaBarPanel",
             *               uiTemplate: "formulaBarTemplate"
             *           },
             *       ]
             *  };
             * var customDesigner = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv2"), customConfig);
             */
            constructor(host: HTMLDivElement | string,  config?: GC.Spread.Sheets.Designer.IDesignerConfig,  spread?: Object,  spreadOptions?: Object);
            /**
             * Binds an event to the designer.
             * @param {string} type The event type.
             * @param {Function} fn Specifies the function to run when the event occurs.
             * @example
             * //This example binds events.
             * designer.bind(GC.Spread.Sheets.Designer.Events.FileLoading, function(type, message){
             *     if (message.fileType = GC.Spread.Sheets.Designer.FileType.Excel){
             *         let spreadJsonData = message.data;
             *         if(spreadJsonData.sheetCount >= 3) {
             *              message.cancel = true;
             *         }
             *     };
             * });
             */
            bind(type: string,  fn?: any): void;
            /**
             * destroy the designer and unbind all events.
             * @example
             * // This example will destroy the designer after creating a new designer
             * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
             * designer.destroy();
             */
            destroy(): void;
            /**
             * Get the state or value, there are two types of data, one is local data using only in one component
             * and the other is global data using in the whole designer environment, designer.getData(key) can get the global data storing in the designer by key in where having designer instance.
             * @param {string} key - The data name, uniquely identifies one state data.
             * @returns {any} - The value or state of this data name, could be Object, string or other type.
             * @example
             * // This example will set a global data in one place like ribbon->Home and get this global data in the other place like ribbon->setting, both places having the designer instance.
             * var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
             * var config = GC.Spread.Sheets.Designer.DefaultConfig;
             * var logInCommand = {
             *	title: "Login",
             *	text: "Login",
             *	iconClass: "ribbon-button-login",
             *	bigButton: true,
             *	commandName: "login",
             *	execute: (context, propertyName) => {
             *		alert('Log in new designer.');
             *		context.setData("isLogIn", true); // setData()
             *	 }
             * };
             * var getGiftCommand = {
             *	 title: "Get gift",
             *	 text: "Get gift",
             *	 iconClass: "ribbon-button-get-gift",
             *	 bigButton: 'true',
             *	 commandName: "getGift",
             *	 execute: (context, propertyName) => {
             *		 let isLogIn = context.getData("isLogIn"); // getData()
             *		 if (isLogIn) {
             *			 alert("Get gift");
             *		 }
             *		 else {
             *			 alert("Please log in");
             *		 }
             *	 }
             * };
             * config.commandMap = {
             *	 login: logInCommand,
             *	 getGift: getGiftCommand,
             * };
             * var logInCommandGroup = {
             *	 label: "Login",
             *	 thumbnailClass: "Login",
             *	 commandGroup: {
             *		 children: [
             *			 {
             *				 direction: "vertical",
             *				 commands: [
             *					 "Login"
             *				 ]
             *			 }
             *		 ]
             *	 }
             * };
             * var getGiftCommandGroup = {
             *	 label: "Gift",
             *	 thumbnailClass: "Gift",
             *	 commandGroup: {
             *		 children: [
             *			 {
             *				 direction: "vertical",
             *				 commands: [
             *					 "getGift"
             *				 ]
             *			 }
             *		 ]
             * 	  }
             *  };
             *  if (config && config.ribbon) {
             *  config.ribbon[0].buttonGroups.unshift(logInCommandGroup);
             *  config.ribbon[5].buttonGroups.unshift(getGiftCommandGroup);
             *  }
             *  var d = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config, spread);
             */
            getData(key: string): any;
            /**
             * Get the workbook of the existing designer.
             * @returns {Object} The workbook of the existing designer.
             * @example
             * // This example will get the workbook of an existing designer.
             * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
             * var workbook = designer.getWorkbook();
             * var sheet = workbook.getActiveSheet();
             */
            getWorkbook(): Object;
            /**
             * Refresh the designer layout and ribbon area.
             * @example
             * // This example will refresh the designer and ribbon after change size of designer content HTMLElement.
             * var designerContent = document.getElementById("gc-designer-container");
             * designerContent.style.width =width + "px";
             * designerContent.style.height = height + "px";
             * designer.refresh();
             */
            refresh(): void;
            /**
             * register custom component
             * @param { string } name - component name, you can use it with this name
             * @param { Object } constructor - component class
             * @returns {boolean} whether register is successfully
             */
            static RegisterComponent(name: string,  constructor: any): boolean;
            /**
             * Represents a new designer using the custom config.
             * @param {Object} config - The designer config object.
             * @example
             * // This example will set a custom config to an existing designer
             * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
             * var config = {
             *       ribbon: [
             *           {
             *               id: "home",
             *               text: "HOME",
             *               buttonGroups: [
             *                 {
             *                   label: "Undo",
             *                   thumbnailClass: "ribbon-thumbnail-undoRedo",
             *                   commandGroup: {
             *                     children: [
             *                       {
             *                         direction: "vertical",
             *                         commands: [
             *                           "undo",
             *                           "redo"
             *                         ]
             *                       }
             *                     ]
             *                   }
             *                 }
             *               ]
             *           }
             *       ],
             *       contextMenu: [
             *           "contextMenuCut",
             *           "contextMenuCopy",
             *       ],
             *       fileMenu: "fileMenuButton",
             *       sidePanels: [
             *           {
             *               position: "top",
             *               allowResize: true,
             *               command: "formulaBarPanel",
             *               uiTemplate: "formulaBarTemplate"
             *           },
             *       ]
             *  };
             * designer.setConfig(config);
             */
            setConfig(config: GC.Spread.Sheets.Designer.IDesignerConfig): void;
            /**
             * Set the state or value, there are two types of data, one is local data using only in one component
             * and the other is global data using in the whole designer environment, designer.setData(key, value) can set the global data storing in the designer by key-value in where having designer instance.
             * @param {string} key - The data name, uniquely identifies one state data, if you set same key many times using different value, will only store the latest value.
             * @param {any} value - The value or state of this data name, could be Object, string or other type.
             * @example
             * // This example will set a global data in one place like ribbon->Home and get this global data in the other place like ribbon->setting, both places having the designer instance.
             * var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
             * var config = GC.Spread.Sheets.Designer.DefaultConfig;
             * var logInCommand = {
             *	title: "Login",
             *	text: "Login",
             *	iconClass: "ribbon-button-login",
             *	bigButton: true,
             *	commandName: "login",
             *	execute: (context, propertyName) => {
             *		alert('Log in new designer.');
             *		context.setData("isLogIn", true); // setData()
             *	 }
             * };
             * var getGiftCommand = {
             *	 title: "Get gift",
             *	 text: "Get gift",
             *	 iconClass: "ribbon-button-get-gift",
             *	 bigButton: 'true',
             *	 commandName: "getGift",
             *	 execute: (context, propertyName) => {
             *		 let isLogIn = context.getData("isLogIn"); // getData()
             *		 if (isLogIn) {
             *			 alert("Get gift");
             *		 }
             *		 else {
             *			 alert("Please log in");
             *		 }
             *	 }
             * };
             * config.commandMap = {
             *	 login: logInCommand,
             *	 getGift: getGiftCommand,
             * };
             * var logInCommandGroup = {
             *	 label: "Login",
             *	 thumbnailClass: "Login",
             *	 commandGroup: {
             *		 children: [
             *			 {
             *				 direction: "vertical",
             *				 commands: [
             *					 "Login"
             *				 ]
             *			 }
             *		 ]
             *	 }
             * };
             * var getGiftCommandGroup = {
             *	 label: "Gift",
             *	 thumbnailClass: "Gift",
             *	 commandGroup: {
             *		 children: [
             *			 {
             *				 direction: "vertical",
             *				 commands: [
             *					 "getGift"
             *				 ]
             *			 }
             *		 ]
             * 	  }
             *  };
             *  if (config && config.ribbon) {
             *  config.ribbon[0].buttonGroups.unshift(logInCommandGroup);
             *  config.ribbon[5].buttonGroups.unshift(getGiftCommandGroup);
             *  }
             *  var d = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config, spread);
             */
            setData(key: string,  value: any): void;
            /**
             * Set the spread of designer using an existing spread.
             * @param {Object} spread - an existing spread using to replace the old spread of designer.
             * @example
             * // This example will set an existing spread to designer.
             * var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
             * var designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("hostDiv"));
             * designer.setWorkbook(spread);
             */
            setWorkbook(spread: Object): void;
            /**
             * Removes the binding of an event to the designer.
             * @param {string} type The event type.
             * @param {Function} fn Specifies the function for which to remove the binding.
             * @example
             * designer.bind(GC.Spread.Sheets.Designer.Events.FileLoaded, function(event,data){
             *     console.log("file has loaded")
             * });
             * designer.unbind(GC.Spread.Sheets.Designer.Events.FileLoaded);
             */
            unbind(type: string,  fn?: any): void;
            /**
             * Removes the binding of all events to the designer.
             * @example
             * designer.bind(GC.Spread.Sheets.Designer.Events.FileLoaded, function(event,data){
             *     console.log("file has loaded")
             * });
             * designer.unbindAll();
             */
            unbindAll(): void;
        }

        export class Events{
            /**
             * Defines the events supported in SpreadJS designer.
             * @class
             */
            constructor();
            /**
             * Occurs when the file has loaded due to a Spread.Sheets.Designer file action.
             * @name GC.Spread.Sheets.Designer#FileLoaded
             * @event
             * @param {GC.Spread.Sheets.Designer} designer The designer that triggered the event.
             * @param {GC.Spread.Sheets.Designer.FileType} fileType The import file type.
             * @example
             * //This example uses the FileLoaded event.
             * let designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("gc-designer-container"));
             * designer.bind(GC.Spread.Sheets.Designer.Events.FileLoaded, (event, data)=>{
             *   console.log("file has loaded");
             *  });
             */
            static FileLoaded: string;
            /**
             * Occurs when the file is loading due to a Spread.Sheets.Designer file action.
             * @name GC.Spread.Sheets.Designer#FileLoading
             * @event
             * @param {GC.Spread.Sheets.Designer} designer The designer that triggered the event.
             * @param {GC.Spread.Sheets.Designer.FileType} fileType The import file type.
             * @param {Object | string} data The data from file json data or csv data.
             * @param {boolean} cancel A value that indicates whether the operation should be canceled.
             * @example
             * //This example uses the FileLoading event.
             * let designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("gc-designer-container"));
             * designer.bind(GC.Spread.Sheets.Designer.Events.FileLoading, (event, data)=>{
             *   console.log("file is loading");
             *  });
             */
            static FileLoading: string;
        }

        export class TemplateNames{
            /**
             * Defines the template name supported in SpreadDesigner.
             * @class
             */
            constructor();
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#AboveAverageRuleDialogTemplate
             * @example
             * //This example get the AboveAverageRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.AboveAverageRuleDialogTemplate);
             */
            static AboveAverageRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ActiveDialogTemplate
             * @example
             * //This example get the ActiveDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ActiveDialogTemplate);
             */
            static ActiveDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#AlternatingRowStyleManagerTemplate
             * @example
             * //This example get the AlternatingRowStyleManagerTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.AlternatingRowStyleManagerTemplate);
             */
            static AlternatingRowStyleManagerTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#AltTextTemplate
             * @example
             * //This example get the AltTextTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.AltTextTemplate);
             */
            static AltTextTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#AreaChartTemplate
             * @example
             * //This example get the AreaChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.AreaChartTemplate);
             */
            static AreaChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#AreaSparklineDialogTemplate
             * @example
             * //This example get the AreaSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.AreaSparklineDialogTemplate);
             */
            static AreaSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BarChartTemplate
             * @example
             * //This example get the BarChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BarChartTemplate);
             */
            static BarChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BarcodeDialogTemplate
             * @example
             * //This example get the MoveChartDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BarcodeDialogTemplate);
             */
            static BarcodeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BelowAverageRuleDialogTemplate
             * @example
             * //This example get the BelowAverageRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BelowAverageRuleDialogTemplate);
             */
            static BelowAverageRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BetweenRuleDialogTemplate
             * @example
             * //This example get the BetweenRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BetweenRuleDialogTemplate);
             */
            static BetweenRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BindingIndicator
             * @example
             * //This example get the BindingIndicator by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BindingIndicator);
             */
            static BindingIndicator: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#Bottom10RuleDialogTemplate
             * @example
             * //This example get the Bottom10RuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.Bottom10RuleDialogTemplate);
             */
            static Bottom10RuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BoxPlotSparklineDialogTemplate
             * @example
             * //This example get the BoxPlotSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BoxPlotSparklineDialogTemplate);
             */
            static BoxPlotSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#BulletSparklineDialogTemplate
             * @example
             * //This example get the BulletSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.BulletSparklineDialogTemplate);
             */
            static BulletSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ButtonCellTypeDialogTemplate
             * @example
             * //This example get the ButtonCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ButtonCellTypeDialogTemplate);
             */
            static ButtonCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ButtonListCellTypeDialogTemplate
             * @example
             * //This example get the ButtonListCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ButtonListCellTypeDialogTemplate);
             */
            static ButtonListCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CalculatedFieldsDialogTemplate
             * @example
             * //this example get the CalculatedFieldsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CalculatedFieldsDialogTemplate);
             */
            static CalculatedFieldsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CalculatedItemsDialogTemplate
             * @example
             * //this example get the CalculatedItemsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CalculatedItemsDialogTemplate);
             */
            static CalculatedItemsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CalculatedItemSolveOrderDialogTemplate
             * @example
             * //this example get the CalculatedItemSolveOrderDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CalculatedItemSolveOrderDialogTemplate);
             */
            static CalculatedItemSolveOrderDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CascadeSparklineDialogTemplate
             * @example
             * //This example get the CascadeSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CascadeSparklineDialogTemplate);
             */
            static CascadeSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CellsDeleteDialogTemplate
             * @example
             * //This example get the CellsDeleteDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CellsDeleteDialogTemplate);
             */
            static CellsDeleteDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CellsInsertDialogTemplate
             * @example
             * //This example get the CellsInsertDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CellsInsertDialogTemplate);
             */
            static CellsInsertDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CellStateManagerTemplate
             * @example
             * //This example get the CellStateManagerTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CellStateManagerTemplate);
             */
            static CellStateManagerTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CellTagTemplate
             * @example
             * //This example get the CellTagTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CellTagTemplate);
             */
            static CellTagTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ChangeChartDlgTemplate
             * @example
             * //This example get the ChangeChartDlgTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ChangeChartDlgTemplate);
             */
            static ChangeChartDlgTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ChartErrorBarDialogTemplate
             * @example
             * //This example get the ChartErrorBarDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ChartErrorBarDialogTemplate);
             */
            static ChartErrorBarDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ChartTrendlineDialogTemplate
             * @example
             * //This example get the ChartTrendlineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ChartTrendlineDialogTemplate);
             */
            static ChartTrendlineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CheckboxCellTypeDialogTemplate
             * @example
             * //This example get the CheckboxCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CheckboxCellTypeDialogTemplate);
             */
            static CheckboxCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CheckListCellTypeDialogTemplate
             * @example
             * //This example get the CheckListCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CheckListCellTypeDialogTemplate);
             */
            static CheckListCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ColorComboEditorOptionDialogTemplate
             * @example
             * //This example get the ColorComboEditorOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ColorComboEditorOptionDialogTemplate);
             */
            static ColorComboEditorOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ColumnChartTemplate
             * @example
             * //This example get the ColumnChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ColumnChartTemplate);
             */
            static ColumnChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ColumnTagTemplate
             * @example
             * //This example get the ColumnTagTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ColumnTagTemplate);
             */
            static ColumnTagTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ColumnWidthDialogTemplate
             * @example
             * //This example get the ColumnWidthDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ColumnWidthDialogTemplate);
             */
            static ColumnWidthDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ColumnWidthDialogTemplate2
             * @example
             * //This example get the ColumnWidthDialogTemplate2 by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ColumnWidthDialogTemplate2);
             */
            static ColumnWidthDialogTemplate2: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ComboBoxCellTypeTemplate
             * @example
             * //This example get the ComboBoxCellTypeTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ComboBoxCellTypeTemplate);
             */
            static ComboBoxCellTypeTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ComboChartTemplate
             * @example
             * //This example get the ComboChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ComboChartTemplate);
             */
            static ComboChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CompatibleSparklineDialogTemplate
             * @example
             * //This example get the CompatibleSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CompatibleSparklineDialogTemplate);
             */
            static CompatibleSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ConditionalFormatDialogTemplate
             * @example
             * //This example get the ConditionalFormatDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ConditionalFormatDialogTemplate);
             */
            static ConditionalFormatDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CustomErrorBarDialogTemplate
             * @example
             * //This example get the CustomErrorBarDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CustomErrorBarDialogTemplate);
             */
            static CustomErrorBarDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#CustomSortDialogTemplate
             * @example
             * //This example get the CustomSortDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.CustomSortDialogTemplate);
             */
            static CustomSortDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DataValidationDialogTemplate
             * @example
             * //This example get the DataValidationDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DataValidationDialogTemplate);
             */
            static DataValidationDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DateOccurringRuleDialogTemplate
             * @example
             * //This example get the DateOccurringRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DateOccurringRuleDialogTemplate);
             */
            static DateOccurringRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DateTimePickerOptionDialogTemplate
             * @example
             * //This example get the DateTimePickerOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DateTimePickerOptionDialogTemplate);
             */
            static DateTimePickerOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DefaultColumnWidthDialogTemplate
             * @example
             * //This example get the DefaultColumnWidthDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DefaultColumnWidthDialogTemplate);
             */
            static DefaultColumnWidthDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DefaultRowHeightDialogTemplate
             * @example
             * //This example get the DefaultRowHeightDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DefaultRowHeightDialogTemplate);
             */
            static DefaultRowHeightDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#DuplicateValueRuleDialogTemplate
             * @example
             * //This example get the DuplicateValueRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.DuplicateValueRuleDialogTemplate);
             */
            static DuplicateValueRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#EditLinksDialogTemplate
             * @example
             * //This example get the EditLinksDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.EditLinksDialogTemplate);
             */
            static EditLinksDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#EqualToRuleDialogTemplate
             * @example
             * //This example get the EqualToRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.EqualToRuleDialogTemplate);
             */
            static EqualToRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FiledListTemplate
             * @example
             * //This example get the FiledListTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FiledListTemplate);
             */
            static FiledListTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FileMenuPanelTemplate
             * @example
             * //This example get the FileMenuPanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FileMenuPanelTemplate);
             */
            static FileMenuPanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FillEffectDialogTemplate
             * @example
             * //This example get the FillEffectDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FillEffectDialogTemplate);
             */
            static FillEffectDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FillSeriesDialogTemplate
             * @example
             * //This example get the FillSeriesDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FillSeriesDialogTemplate);
             */
            static FillSeriesDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FilterConnectionsDialogTemplate
             * @example
             * //this example get the FilterConnectionsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FilterConnectionsDialogTemplate);
             */
            static FilterConnectionsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FindDialogTemplate
             * @example
             * //This example get the FindDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FindDialogTemplate);
             */
            static FindDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FontDialogTemplate
             * @example
             * //This example get the FontDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FontDialogTemplate);
             */
            static FontDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FormatCommentDialogTemplate
             * @example
             * //This example get the FormatCommentDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FormatCommentDialogTemplate);
             */
            static FormatCommentDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FormatDialogTemplate
             * @example
             * //This example get the FormatDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FormatDialogTemplate);
             */
            static FormatDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FormatSlicerDialogTemplate
             * @example
             * //This example get the FormatSlicerDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FormatSlicerDialogTemplate);
             */
            static FormatSlicerDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FormulaBarTemplate
             * @example
             * //This example get the FormulaBarTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FormulaBarTemplate);
             */
            static FormulaBarTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FunctionLambdaDialogTemplate
             * @example
             * //This example get the FunctionLambdaDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FunctionLambdaDialogTemplate);
             */
            static FunctionLambdaDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FunctionLetDialogTemplate
             * @example
             * //This example get the FunctionLetDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FunctionLetDialogTemplate);
             */
            static FunctionLetDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#FunnelChartPanelTemplate
             * @example
             * //This example get the FunnelChartPanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.FunnelChartPanelTemplate);
             */
            static FunnelChartPanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GaugeKPILabelOptionDialog
             * @example
             * //This example get the GaugeKPILabelOptionDialog by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GaugeKPILabelOptionDialog);
             */
            static GaugeKPILabelOptionDialog: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GaugeKPISparklineDialogTemplate
             * @example
             * //This example get the GaugeKPISparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GaugeKPISparklineDialogTemplate);
             */
            static GaugeKPISparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GaugeKPIStyleSettingDialog
             * @example
             * //This example get the GaugeKPIStyleSettingDialog by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GaugeKPIStyleSettingDialog);
             */
            static GaugeKPIStyleSettingDialog: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GotoDialogTemplate
             * @example
             * //This example get the GotoDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GotoDialogTemplate);
             */
            static GotoDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GotoSpecialDialogTemplate
             * @example
             * //This example get the GotoSpecialDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GotoSpecialDialogTemplate);
             */
            static GotoSpecialDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GreaterThanRuleDialogTemplate
             * @example
             * //This example get the GreaterThanRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GreaterThanRuleDialogTemplate);
             */
            static GreaterThanRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GroupDatePivotTableTemplate
             * @example
             * //this example get the GroupDatePivotTableTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GroupDatePivotTableTemplate);
             */
            static GroupDatePivotTableTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GroupDirectionTemplate
             * @example
             * //This example get the GroupDirectionTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GroupDirectionTemplate);
             */
            static GroupDirectionTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GroupPivotTableTemplate
             * @example
             * //this example get the GroupPivotTableTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GroupPivotTableTemplate);
             */
            static GroupPivotTableTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#GroupTemplate
             * @example
             * //This example get the GroupTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.GroupTemplate);
             */
            static GroupTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HBarSparklineDialogTemplate
             * @example
             * //This example get the HBarSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HBarSparklineDialogTemplate);
             */
            static HBarSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HeaderCellDialogTemplate
             * @example
             * //This example get the HeaderCellDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HeaderCellDialogTemplate);
             */
            static HeaderCellDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HideAndEmptyCellSettingDialogTemplate
             * @example
             * //This example get the HideAndEmptyCellSettingDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HideAndEmptyCellSettingDialogTemplate);
             */
            static HideAndEmptyCellSettingDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HistogramSparklineDialogTemplate
             * @example
             * //this example get the HistogramSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HistogramSparklineDialogTemplate);
             */
            static HistogramSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HyperLinkCellTypeDialogTemplate
             * @example
             * //This example get the HyperLinkCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HyperLinkCellTypeDialogTemplate);
             */
            static HyperLinkCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HyperlinkDialogTemplate
             * @example
             * //This example get the HyperlinkDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HyperlinkDialogTemplate);
             */
            static HyperlinkDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#HyperLinkTemplate
             * @example
             * //This example get the HyperLinkTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.HyperLinkTemplate);
             */
            static HyperLinkTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ImageSparklineDialogTemplate
             * @example
             * //this example get the ImageSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ImageSparklineDialogTemplate);
             */
            static ImageSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertCameraShapeDialogTemplate
             * @example
             * //This example get the InsertCameraShapeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertCameraShapeDialogTemplate);
             */
            static InsertCameraShapeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertChartDlgTemplate
             * @example
             * //This example get the InsertChartDlgTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertChartDlgTemplate);
             */
            static InsertChartDlgTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertFunctionDialogTemplate
             * @example
             * //This example get the InsertFunctionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertFunctionDialogTemplate);
             */
            static InsertFunctionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertPivotTableDialogTemplate
             * @example
             * //this example get the InsertPivotTableDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertPivotTableDialogTemplate);
             */
            static InsertPivotTableDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertSlicerDialogTemplate
             * @example
             * //This example get the InsertSlicerDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertSlicerDialogTemplate);
             */
            static InsertSlicerDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertSparkLineDialogTemplate
             * @example
             * //This example get the InsertSparkLineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertSparkLineDialogTemplate);
             */
            static InsertSparkLineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#InsertTableDialogTemplate
             * @example
             * //This example get the InsertTableDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.InsertTableDialogTemplate);
             */
            static InsertTableDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#LessThanRuleDialogTemplate
             * @example
             * //This example get the LessThanRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.LessThanRuleDialogTemplate);
             */
            static LessThanRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#LineChartTemplate
             * @example
             * //This example get the LineChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.LineChartTemplate);
             */
            static LineChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ListOptionDialogTemplate
             * @example
             * //This example get the ListOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ListOptionDialogTemplate);
             */
            static ListOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MarkerColorDialogTemplate
             * @example
             * //This example get the MarkerColorDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MarkerColorDialogTemplate);
             */
            static MarkerColorDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MessageBoxTemplate
             * @example
             * //This example get the MessageBoxTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MessageBoxTemplate);
             */
            static MessageBoxTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MonthCalendarSparklineDialogTemplate
             * @example
             * //This example get the MonthCalendarSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MonthCalendarSparklineDialogTemplate);
             */
            static MonthCalendarSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MonthPickerOptionDialogTemplate
             * @example
             * //This example get the MonthPickerOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MonthPickerOptionDialogTemplate);
             */
            static MonthPickerOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MoreColorTemplate
             * @example
             * //This example get the MoreColorTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MoreColorTemplate);
             */
            static MoreColorTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MoreFunctionDialogTemplate
             * @example
             * //This example get the MoreFunctionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MoreFunctionDialogTemplate);
             */
            static MoreFunctionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MoveChartDialogTemplate
             * @example
             * //This example get the MoveChartDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MoveChartDialogTemplate);
             */
            static MoveChartDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MoveOrCopyTemplate
             * @example
             * //this example get the MoveOrCopyTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MoveOrCopyTemplate);
             */
            static MoveOrCopyTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#movePivotTableDialogTemplate
             * @example
             * //this example get the movePivotTableDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.movePivotTableDialogTemplate);
             */
            static movePivotTableDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#MultiColumnPickerOptionDialogTemplate
             * @example
             * //This example get the MultiColumnPickerOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.MultiColumnPickerOptionDialogTemplate);
             */
            static MultiColumnPickerOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NameManagerDialogTemplate
             * @example
             * //This example get the NameManagerDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NameManagerDialogTemplate);
             */
            static NameManagerDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NegativeDataDialogTemplate
             * @example
             * //This example get the NegativeDataDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NegativeDataDialogTemplate);
             */
            static NegativeDataDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewAlternatingRowStyleTemplate
             * @example
             * //This example get the NewAlternatingRowStyleTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewAlternatingRowStyleTemplate);
             */
            static NewAlternatingRowStyleTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewCellStateTemplate
             * @example
             * //This example get the NewCellStateTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewCellStateTemplate);
             */
            static NewCellStateTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewCellStyleDialogTemplate
             * @example
             * //This example get the NewCellStyleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewCellStyleDialogTemplate);
             */
            static NewCellStyleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewFormattingRuleDialogTemplate
             * @example
             * //This example get the NewFormattingRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewFormattingRuleDialogTemplate);
             */
            static NewFormattingRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewNameTemplate
             * @example
             * //This example get the NewNameTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewNameTemplate);
             */
            static NewNameTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#NewStateTemplate
             * @example
             * //This example get the NewStateTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.NewStateTemplate);
             */
            static NewStateTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#OutlineColumnDialogTemplate
             * @example
             * //This example get the OutlineColumnDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.OutlineColumnDialogTemplate);
             */
            static OutlineColumnDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PageSetupDialogTemplate
             * @example
             * //this example get the PageSetupDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PageSetupDialogTemplate);
             */
            static PageSetupDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ParetoSparklineDialogTemplate
             * @example
             * //This example get the ParetoSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ParetoSparklineDialogTemplate);
             */
            static ParetoSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PasswordDialog
             * @example
             * //This example get the PasswordDialog by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PasswordDialog);
             */
            static PasswordDialog: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PieChartTemplate
             * @example
             * //This example get the PieChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PieChartTemplate);
             */
            static PieChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PieSparklineDialogTemplate
             * @example
             * //This example get the PieSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PieSparklineDialogTemplate);
             */
            static PieSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotShowReportFilterDialogTemplate
             * @example
             * //this example get the PivotShowReportFilterDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotShowReportFilterDialogTemplate);
             */
            static PivotShowReportFilterDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableExpandFieldTemplate
             * @example
             * //this example get the PivotTableExpandFieldTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableExpandFieldTemplate);
             */
            static pivotTableExpandFieldTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldSettibfFormatDialogTemplate
             * @example
             * //this example get the PivotTableFieldSettibfFormatDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableFieldSettibfFormatDialogTemplate);
             */
            static PivotTableFieldSettibfFormatDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldSettingWithFiltersDialogTemplate
             * @example
             * //this example get the PivotTableFieldSettingWithFiltersDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableFieldSettingWithFiltersDialogTemplate);
             */
            static PivotTableFieldSettingWithFiltersDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableFieldSettingWithShowValueAsDialogTemplate
             * @example
             * //this example get the PivotTableFieldSettingWithShowValueAsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableFieldSettingWithShowValueAsDialogTemplate);
             */
            static PivotTableFieldSettingWithShowValueAsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableOptionsDialogTemplate
             * @example
             * //this example get the PivotTableOptionsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableOptionsDialogTemplate);
             */
            static PivotTableOptionsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTablePanelTemplate
             * @example
             * //this example get the PivotTablePanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTablePanelTemplate);
             */
            static PivotTablePanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#PivotTableStyleDialogTemplate
             * @example
             * //This example get the PivotTableStyleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.PivotTableStyleDialogTemplate);
             */
            static PivotTableStyleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ProtectSheetDialogTemplate
             * @example
             * //This example get the ProtectSheetDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ProtectSheetDialogTemplate);
             */
            static ProtectSheetDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RadarChartTemplate
             * @example
             * //This example get the RadarChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RadarChartTemplate);
             */
            static RadarChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RadioListCellTypeDialogTemplate
             * @example
             * //This example get the RadioListCellTypeDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RadioListCellTypeDialogTemplate);
             */
            static RadioListCellTypeDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RangeBlockSparklineDialogTemplate
             * @example
             * //This example get the RangeBlockSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RangeBlockSparklineDialogTemplate);
             */
            static RangeBlockSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RangeSelectDialogTemplate
             * @example
             * //This example get the RangeSelectDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RangeSelectDialogTemplate);
             */
            static RangeSelectDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RangeTemplateDialogTemplate
             * @example
             * //This example get the RangeTemplateDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RangeTemplateDialogTemplate);
             */
            static RangeTemplateDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RemoveDuplicatesTemplate
             * @example
             * //This example get the RemoveDuplicatesTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RemoveDuplicatesTemplate);
             */
            static RemoveDuplicatesTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RemoveDuplicatesWarning
             * @example
             * //This example get the RemoveDuplicatesWarning by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RemoveDuplicatesWarning);
             */
            static RemoveDuplicatesWarning: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ReportConnectionsDialogTemplate
             * @example
             * //this example get the ReportConnectionsDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ReportConnectionsDialogTemplate);
             */
            static ReportConnectionsDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ResizeTableDialogTemplate
             * @example
             * //This example get the ResizeTableDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ResizeTableDialogTemplate);
             */
            static ResizeTableDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RichTextDialogTemplate
             * @example
             * //This example get the RichTextDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RichTextDialogTemplate);
             */
            static RichTextDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RowHeightDialogTemplate
             * @example
             * //This example get the RowHeightDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RowHeightDialogTemplate);
             */
            static RowHeightDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RowHeightDialogTemplate2
             * @example
             * //This example get the RowHeightDialogTemplate2 by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RowHeightDialogTemplate2);
             */
            static RowHeightDialogTemplate2: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RowTagTemplate
             * @example
             * //This example get the RowTagTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RowTagTemplate);
             */
            static RowTagTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#RuleManagerDialogTemplate
             * @example
             * //This example get the RuleManagerDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.RuleManagerDialogTemplate);
             */
            static RuleManagerDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SaveFileDialogTemplate
             * @example
             * //This example get the SaveFileDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SaveFileDialogTemplate);
             */
            static SaveFileDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ScatterChartTemplate
             * @example
             * //This example get the ScatterChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ScatterChartTemplate);
             */
            static ScatterChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ScatterSparklineDialogTemplate
             * @example
             * //This example get the ScatterSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ScatterSparklineDialogTemplate);
             */
            static ScatterSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SelectedDataSourceTemplate
             * @example
             * //This example get the SelectedDataSourceTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SelectedDataSourceTemplate);
             */
            static SelectedDataSourceTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SelectionPane
             * @example
             * //this example get the SelectionPane by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SelectionPane);
             */
            static SelectionPane: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SeriesAddDialogTemplate
             * @example
             * //This example get the SeriesAddDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SeriesAddDialogTemplate);
             */
            static SeriesAddDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SeriesEditDialogTemplate
             * @example
             * //This example get the SeriesEditDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SeriesEditDialogTemplate);
             */
            static SeriesEditDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ShapeTemplate
             * @example
             * //This example get the ShapeTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ShapeTemplate);
             */
            static ShapeTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SheetSettingDialogTemplate
             * @example
             * //This example get the SheetSettingDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SheetSettingDialogTemplate);
             */
            static SheetSettingDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SheetTagTemplate
             * @example
             * //This example get the SheetTagTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SheetTagTemplate);
             */
            static SheetTagTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SlicerSettingTemplate
             * @example
             * //This example get the SlicerSettingTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SlicerSettingTemplate);
             */
            static SlicerSettingTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SlicerStyleDialogTemplate
             * @example
             * //This example get the SlicerStyleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SlicerStyleDialogTemplate);
             */
            static SlicerStyleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SliderOptionDialogTemplate
             * @example
             * //This example get the SliderOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SliderOptionDialogTemplate);
             */
            static SliderOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SortOptionDialogTemplate
             * @example
             * //This example get the SortOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SortOptionDialogTemplate);
             */
            static SortOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SparklineWeightDialogTemplate
             * @example
             * //This example get the SparklineWeightDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SparklineWeightDialogTemplate);
             */
            static SparklineWeightDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SpreadSettingDialogTemplate
             * @example
             * //This example get the SpreadSettingDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SpreadSettingDialogTemplate);
             */
            static SpreadSettingDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SpreadSparklineDialogTemplate
             * @example
             * //This example get the SpreadSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SpreadSparklineDialogTemplate);
             */
            static SpreadSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#StackedSparklineDialogTemplate
             * @example
             * //This example get the StackedSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.StackedSparklineDialogTemplate);
             */
            static StackedSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#StateManagerTemplate
             * @example
             * //This example get the StateManagerTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.StateManagerTemplate);
             */
            static StateManagerTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#StatusBarPanelTemplate
             * @example
             * //This example get the StatusBarPanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.StatusBarPanelTemplate);
             */
            static StatusBarPanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#StockChartTemplate
             * @example
             * //This example get the StockChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.StockChartTemplate);
             */
            static StockChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#StyleSettingTemplate
             * @example
             * //This example get the StyleSettingTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.StyleSettingTemplate);
             */
            static StyleSettingTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SubTotalDialogTemplate
             * @example
             * //This example get the SubTotalDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SubTotalDialogTemplate);
             */
            static SubTotalDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#SunburstChartTemplate
             * @example
             * //This example get the SunburstChartTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.SunburstChartTemplate);
             */
            static SunburstChartTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TableSheetDataSourceTemplate
             * @example
             * //this example get the TableSheetDataSourceTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TableSheetDataSourceTemplate);
             */
            static TableSheetDataSourceTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TableSheetPanelTemplate
             * @example
             * //This example get the TableSheetPanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TableSheetPanelTemplate);
             */
            static TableSheetPanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TableStyleDialogTemplate
             * @example
             * //This example get the TableStyleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TableStyleDialogTemplate);
             */
            static TableStyleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextContainRuleDialogTemplate
             * @example
             * //This example get the TextContainRuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextContainRuleDialogTemplate);
             */
            static TextContainRuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextToColumnDialogAdvancedDialogTemplate
             * @example
             * //This example get the TextToColumnDialogAdvancedDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextToColumnDialogAdvancedDialogTemplate);
             */
            static TextToColumnDialogAdvancedDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextToColumnDialogWizardStep1Template
             * @example
             * //This example get the TextToColumnDialogWizardStep1Template by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextToColumnDialogWizardStep1Template);
             */
            static TextToColumnDialogWizardStep1Template: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextToColumnDialogWizardStep2DelimitedTemplate
             * @example
             * //This example get the TextToColumnDialogWizardStep2DelimitedTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextToColumnDialogWizardStep2DelimitedTemplate);
             */
            static TextToColumnDialogWizardStep2DelimitedTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextToColumnDialogWizardStep2FixedWidthTemplate
             * @example
             * //This example get the TextToColumnDialogWizardStep2FixedWidthTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextToColumnDialogWizardStep2FixedWidthTemplate);
             */
            static TextToColumnDialogWizardStep2FixedWidthTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TextToColumnDialogWizardStep3Template
             * @example
             * //This example get the TextToColumnDialogWizardStep3Template by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TextToColumnDialogWizardStep3Template);
             */
            static TextToColumnDialogWizardStep3Template: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TimelineStyleDialogTemplate
             * @example
             * //This example get the TimelineStyleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TimelineStyleDialogTemplate);
             */
            static TimelineStyleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TimePickerOptionDialogTemplate
             * @example
             * //This example get the TimePickerOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TimePickerOptionDialogTemplate);
             */
            static TimePickerOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#Top10RuleDialogTemplate
             * @example
             * //This example get the Top10RuleDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.Top10RuleDialogTemplate);
             */
            static Top10RuleDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#TreeMapChartPanelTemplate
             * @example
             * //This example get the TreeMapChartPanelTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.TreeMapChartPanelTemplate);
             */
            static TreeMapChartPanelTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#UnGroupTemplate
             * @example
             * //This example get the UnGroupTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.UnGroupTemplate);
             */
            static UnGroupTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#UnhideSheetTemplate
             * @example
             * //this example get the UnhideSheetTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.UnhideSheetTemplate);
             */
            static UnhideSheetTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#VariSparklineDialogTemplate
             * @example
             * //This example get the VariSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.VariSparklineDialogTemplate);
             */
            static VariSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#VBarSparklineDialogTemplate
             * @example
             * //This example get the VBarSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.VBarSparklineDialogTemplate);
             */
            static VBarSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#WorkflowListOptionDialogTemplate
             * @example
             * //This example get the WorkflowListOptionDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.WorkflowListOptionDialogTemplate);
             */
            static WorkflowListOptionDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#YearCalendarSparklineDialogTemplate
             * @example
             * //This example get the YearCalendarSparklineDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.YearCalendarSparklineDialogTemplate);
             */
            static YearCalendarSparklineDialogTemplate: string;
            /**
             * Get the template name.
             * @name GC.Spread.Sheets.Designer#ZoomDialogTemplate
             * @example
             * //This example get the ZoomDialogTemplate by the template name.
             * var template = GC.Spread.Sheets.Designer.getTemplate(GC.Spread.Sheets.Designer.TemplateNames.ZoomDialogTemplate);
             */
            static ZoomDialogTemplate: string;
        }
    }

}

export = GC;