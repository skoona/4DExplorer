/*!
 * 
 * 4DView Pro library 0.0.0
 * 
 * Copyright(c) 4D SAS.  All rights reserved.
 * 
 * 4D (the "Software") and the corresponding source code remain
 * the exclusive property of 4D and/or its licensors and are protected by national
 * and/or international legislations.
 * 
 * This file is part of the source code of the Software provided under the relevant
 * 4D License Agreement available on http://www.4D.com/license whose compliance
 * constitutes a prerequisite to any use of this file and more generally of the
 * Software and the corresponding source code.
 * 
 */

/**
 * Globals
 * 
 * /!\ Try not to add new globals unless really necessary
 * If using `Utils` is enough to do what you need to do
 * prefer using it over directly interacting with the global.
 * This leaves room for future evolution.
 * 
 * Examples:
 * 
 * - `Utils.getCommand(commandName)` -> get a command from `Commands`
 * - `Utils.addCommand(commandName, commandHandler)` -> add a new command to `Commands`
 * - `Utils.currentDocument` -> a reference to the current document object
 * - `Utils.spread` -> a reference to the `spread` global object
 * 
 * See `utils.js` for more.
 */

/**
 * `var` used instead of `let` so the 4D code inside of the View Pro component
 * continues to work. When `let` is used the variable `spread` won't be
 * accessible via `window.spread`.
 * Try not to use `var`. 
 */
var spread;
var useRibbon = false;
var useToolbar = false;
var designerReady = false;

let currentDocument = {};
let Commands = {};

function hideSpreadJSElements() {
    try {
        $('li [href="#file"]').hide();
    } catch (e) { }
}

function adaptSpreadUI(options) {
    hideSpreadJSElements();

    /**
     * sync the "withFormulaBar" View Pro option
     * with the Spread options UI
     */
    if (options.withFormulaBar === false) {
        $("#formulaBar")["hide"]();
        $('label[data-name="showFormulaBar"]')[0].children[0].checked = false;
        adjustSpreadSize();
    }
}

/**
 * Do it asap to avoid the user seing anything on the screen
 * but also need to do it later in case something is created asynchronously
 */
hideSpreadJSElements();

// Entry point:
document.addEventListener('DOMContentLoaded', function () {
    //Create a spreadsheet
    hideSpreadJSElements();
    $4d._vp_init(function (obj, err) {
        let options = obj.options || {};
        GC.Spread.Sheets.LicenseKey = obj.licenseKey;
        if (options.userInterface === 'none') {
            obj.options.tabStripVisible = false;
            createZone(options);
        } else if (options.userInterface === 'toolbar') {
            (function checkSpread() {

                if (!spread) {
                    setTimeout(checkSpread, 0);
                } else {

                    useToolbar = true;
                    adaptSpreadUI(options);
                    obj.options.tabStripVisible = true;
                    initSpread({ obj, setOptions: true });
                }
            })();
        } else if (options.userInterface === 'ribbon') {
            (function checkDesigner() {

                if (!designerReady) {
                    setTimeout(checkDesigner, 0);
                } else {

                    useRibbon = true;
                    obj.options.tabStripVisible = true;
                    initSpread({ obj, setOptions: true });
                }
            })();
        }

        function createZone(options) {
            if (options.withFormulaBar) {
                let formulaParent = document.getElementById("formulaBar");
                formulaParent.classList.remove('hidden');
                if (options.userInterface === 'none') {
                    document.getElementById("ss").classList.add("withFormulaBar");
                }
            }
            else {
                if (options.userInterface === 'none') {
                    document.getElementById("ss").classList.add("withoutFormulaBar");
                }
            }

            spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 1 });

            if (options.withFormulaBar) {
                let formulaElement = document.getElementById("formulaTextBox");
                let fbx = new GC.Spread.Sheets.FormulaTextBox.FormulaTextBox(formulaElement);
                fbx.workbook(spread);
            }
            initSpread({ obj });
        }
    });

    function initSpread({ obj, setOptions = true }) {

        Utils.areaName = obj.areaName;

        /*********
         * Culture
         *********/
        // in japanese, use builtin japanese culture
        if ((vp_localizedFolder !== 'ja.lproj') && (vp_localizedFolder !== 'en.lproj')) {
            // get a new culture based on 4D intl manager
            let culture = getCulture(obj);

            // get current culture name
            let lang = vp_localizedFolder.substring(0,2);

            //set infos for this culture, and the localized strings
            GC.Spread.Common.CultureManager.addCultureInfo(lang, culture, vp_spreadJsResources);
            GC.Spread.Common.CultureManager.culture(lang);
        }

        /*********
         * Options
         *********/

        //Freeze the redraw
        try {
            Utils.spread.suspendPaint();

            if (setOptions === true) {
                setWorkbookOptions(obj.options);
            }
        } finally {
            //Draw now
            Utils.spread.resumePaint();
        }

        Utils.customFunctionNames = [];
        Utils.customFunctions = {};

        init4DCommands();
        initInternalComponentCommands();
        init4DMethods(obj.methods, false);
        init4DMethods(obj.formulas, true);
        init4DFields(obj.fields);
        //        initPasteHook();

        if (!useRibbon) {
            // events and commands are inited in customDesignerFunctions.initEvents
            Utils.initEvents();
            Utils.initCommands();
        }

        if (useRibbon) {
            customDesignerFunctions.init();
        } else {
            // install context menu
            Utils.initContextMenu();
        }

        Utils.send4DEvent("onVPReady");

        // BEGIN OF PATCH
        // patch suggested by GrapeCity team as a workaround in case CAS-33873-K8Q7D0
        // problem will be solved on their side, id is SJS-14667
        
        var getValueFn = GC.Spread.Sheets.Worksheet.prototype.getValue;
        GC.Spread.Sheets.Worksheet.prototype.getValue = function () {
            var value = getValueFn.apply(this, arguments);
            if (typeof value === 'number') {
                return +value.toFixed(13);
            }
            return value;
        }
        
        // END OF PATCH
    }


    // --- utility function to format result given by 4D expression
    function outputResult(context, ret) {
        if (ret.type == "string") {
            context.setAsyncResult(ret.string);
        } else if (ret.type == "number") {
            context.setAsyncResult(ret.number);
        } else if (ret.type == "boolean") {
            context.setAsyncResult(ret.boolean);
        } else if (ret.type == "dateTime") {
            let dateTime = new Date(ret.dateTime.year, ret.dateTime.month - 1, ret.dateTime.day, ret.dateTime.hours, ret.dateTime.minutes, ret.dateTime.seconds);
            context.setAsyncResult(dateTime);
        } else if (ret.type == "date") {
            let date = new Date(ret.date.year, ret.date.month - 1, ret.date.day);
            context.setAsyncResult(date);
        } else if (ret.type == "time") {
            // 30 dec 1899 is day 0 for SpreadJS
            let time = new Date(1899, 11, 30, ret.time.hours, ret.time.minutes, ret.time.seconds);
            context.setAsyncResult(time);
        } else if (ret.type == "picture") {
            let style = Utils.currentSheet.getStyle(context.row, context.col);
            if (style == null) {
                style = new GC.Spread.Sheets.Style();
            }
            style.backgroundImage = ret.picture;
            Utils.currentSheet.setStyle(context.row, context.col, style);
            Utils.currentSheet.setCellType(context.row, context.col, new D4Picture());
            context.setAsyncResult("");
        } else if (ret.type == "none") {
            context.setAsyncResult("");
        } else if (ret.type == "error") {
            context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
        } else if (ret.type == "unsupported") {
            context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
        }
    }

    function adjustParameters(parameters) {
        let ret = [];

        parameters.forEach(function (parameter) {
            if (parameter.constructor === Date) {

                let day = parameter.getDate();
                let month = parameter.getMonth();
                let year = parameter.getFullYear();

                let hours = parameter.getHours();
                let minutes = parameter.getMinutes();
                let seconds = parameter.getSeconds();

                let val = {
                    "value": { "day": day, "month": month + 1, "year": year },
                    "time": (hours * 3600) + (minutes * 60) + seconds
                };

                ret.push(val);
            }
            else
                ret.push(parameter);
        })
        return ret;
    }

    // --- add some custom commands to emulate 4D specific commands

    function init4DCommands() {
        let arr = [
            { name: 'RUNTIME_STRING', number: 10, minParams: 1, maxParams: 3 },
            { name: 'RUNTIME_DATE', number: 102, minParams: 1, maxParams: 1 },
            { name: 'RUNTIME_TIME', number: 179, minParams: 1, maxParams: 1 },
            { name: 'RUNTIME_CURRENT_TIME', number: 178, minParams: 0, maxParams: 0 }
        ];

        arr.forEach(function (command) {

            let myFunc = function () {
                this.minArgs = command.minParams;
                this.maxArgs = command.maxParams;
                this.name = command.name;
            }
            myFunc.prototype = new CustomAsyncFunction();
            myFunc.prototype.evaluateAsync = function (...args) {

                vp_startLongOperation();

                let context = args[0];
                args[0] = command.number;
                args = adjustParameters(args);
                try {
                    $4d._vp_call4dCommand(...args, function (ret, err) {
                        try {
                            if (err === null)
                                outputResult(context, ret);
                            else
                                context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
                        } finally {
                            vp_endLongOperation();
                        }
                    });
                } catch (e) {
                    Utils.logEvent({ type: 'error-catched', data: e });
                    vp_endLongOperation();
                }
            };
            let instance = new myFunc();
            Utils.defineGlobalCustomFunction(command.name, instance, '4D-commands');
        });
    }

    // --- 4D project methods ------------------------------------------------------------
    function initInternalComponentCommands() {
        let arr = [
            { name: 'RUNTIME_VIEW_STRING', method: 'vp_4DViewString', minParams: 1, maxParams: 2 }
        ];

        arr.forEach(function (method) {

            let myFunc = function () {
                this.minArgs = method.minParams;
                this.maxArgs = method.maxParams;
                this.name = method.name;
            }
            myFunc.prototype = new CustomAsyncFunction();
            myFunc.prototype.evaluateAsync = function (...args) {

                vp_startLongOperation();

                let context = args[0];

                args[0] = method.method;
                args = adjustParameters(args);
                try {
                    $4d._vp_callComponentMethod(...args, function (ret, err) {
                        try {
                            if (err === null)
                                outputResult(context, ret);
                            else
                                context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
                        } finally {
                            vp_endLongOperation();
                        }
                    });
                } catch (e) {
                    Utils.logEvent({ type: 'error-catched', data: e });
                    vp_endLongOperation();
                }
            };
            let instance = new myFunc();
            Utils.defineGlobalCustomFunction(method.name, instance, '4D-method');
        });
    }

    // --- 4D project methods ------------------------------------------------------------
    function init4DMethods(arr, isFormula) {

        arr.forEach(function (method) {
            var myFunc = function () { };

            let minParams = 0;
            let maxParams = 100;

            if ('minParams' in method) {
                minParams = method.minParams;
            }

            if ('maxParams' in method) {
                maxParams = method.maxParams;
            }

            let parameters = [];
            if ('parameters' in method) {
                parameters = method.parameters;
            }

            let summary = '';
            if ('summary' in method) {
                summary = method.summary;
            }

            myFunc.prototype = new GC.Spread.CalcEngine.Functions.AsyncFunction(method.spreadJSMethod, minParams, maxParams, summary);

            //Set default value to "Loading..."
            myFunc.prototype.defaultValue = function () { return "Loading..."; };

            myFunc.prototype.description = function () {
                return { "description": summary, "parameters": parameters };
            };

            myFunc.prototype.evaluateAsync = function (...args) {

                vp_startLongOperation();

                let context = args[0];

                // check if parameters are respecting users type rules

                let i;

                for (i = 1; i < args.length; i++) {

                    let arg = args[i];
                    let ok = false;

                    let wantedType = -1;

                    if ('parametersType' in method) {
                        if ((i - 1) < method.parametersType.length) {
                            wantedType = method.parametersType[i - 1];
                        }
                    }

                    switch (wantedType) {
                        case 1: // real
                        case 8: // integer
                        case 9: // longint
                            ok = typeof (arg) === 'number';
                            break;

                        case 2: // text
                            ok = typeof (arg) === 'string';
                            break;

                        case 6: // boolean
                            ok = typeof (arg) === 'boolean';
                            break;

                        case 4: // date
                            ok = (arg != null) && (typeof (arg) === 'object') && (arg.constructor === Date);
                            if (ok) {
                                args[i] = { "value": { "day": arg.getDate(), "month": arg.getMonth() + 1, "year": arg.getFullYear() } };
                                if (isFormula) {
                                    args[i].value.convertToDate = true;
                                }
                            }
                            break;

                        case 11: //time
                            ok = (arg != null) && (typeof (arg) === 'object') && (arg.constructor === Date);
                            if (ok) {
                                let zeroDate = new Date(1899, 11, 30, 0, 0, 0, 0);
                                let diff = arg.getTime() - zeroDate.getTime();
                                args[i] = { "time": Math.floor(diff / 1000) }
                            }
                            break;

                        case 38: // object
                            if ((arg != null) && (typeof (arg) === 'object') && (arg.constructor === Date)) {
                                args[i] = {
                                    "value": { "day": arg.getDate(), "month": arg.getMonth() + 1, "year": arg.getFullYear() },
                                    "time": (arg.getHours() * 3600) + (arg.getMinutes() * 60) + arg.getSeconds()
                                };
                            } else {
                                args[i] = { "value": arg };
                            }
                            ok = true;
                            break;

                        case -1: // standard mode, convert only dates
                            if ((arg != null) && (typeof (arg) === 'object') && (arg.constructor === Date)) {
                                args[i] = {
                                    "value": { "day": arg.getDate(), "month": arg.getMonth() + 1, "year": arg.getFullYear() },
                                    "time": (arg.getHours() * 3600) + (arg.getMinutes() * 60) + arg.getSeconds()
                                };
                                if (isFormula) {
                                    args[i].value.convertValueToDate = true;
                                }
                            }
                            ok = true;
                            break;
                    }
                    if (!ok) {
                        context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
                        vp_endLongOperation();
                        return;
                    }
                }

                try {
                    if (isFormula) {
                        args[0] = method.spreadJSMethod;
                        $4d._vp_call4dFormula(...args, function (ret, err) {
                            try {
                                if (err === null)
                                    outputResult(context, ret);
                                else
                                    context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
                            } finally {
                                vp_endLongOperation();
                            }
                        });
                    } else {
                        args[0] = method.method;
                        $4d._vp_call4dMethod(...args, function (ret, err) {
                            try {
                                if (err === null)
                                    outputResult(context, ret);
                                else
                                    context.setAsyncResult(Utils.errors.wrongTypeOfArgument);
                            } finally {
                                vp_endLongOperation();
                            }
                        });
                    }
                } catch (e) {
                    Utils.logEvent({ type: 'error-catched', data: e });
                    vp_endLongOperation();
                }
            };
            let instance = new myFunc();
            let upperName = method.spreadJSMethod.toUpperCase();
            Utils.customFunctions[upperName] = instance;
            Utils.customFunctionNames.push(upperName);
            Utils.defineGlobalCustomFunction(method.spreadJSMethod, instance, '4D-user-method');;
        });
    }

    // --- virtual structure ------------------------------------------------------------
    function init4DFields(arr) {
        arr.forEach(function (obj) {
            let myFunc = function () { };

            let summary = '';
            if ('summary' in obj) {
                summary = obj.summary;
            }

            myFunc.prototype = new GC.Spread.CalcEngine.Functions.AsyncFunction(obj.name, 0, 0, summary);

            //Set default value to "Loading..."
            myFunc.prototype.defaultValue = function () { return "Loading..."; };

            myFunc.prototype.description = function () {
                return { "description": summary, "parameters": [] };
            };

            myFunc.prototype.evaluateAsync = function (...args) {

                vp_startLongOperation();

                let context = args[0];
                try {
                    $4d._vp_getTableField(obj.tableNumber, obj.fieldNumber, function (ret, err) {
                        try {
                            outputResult(context, ret);
                        } finally {
                            vp_endLongOperation();
                        }
                    });
                } catch (e) {
                    Utils.logEvent({ type: 'error-catched', data: e });
                    vp_endLongOperation();
                }
            };
            let instance = new myFunc();
            Utils.defineGlobalCustomFunction(obj.name, instance, '4D-virtual-structure');
        });
    }


    function installHookForNumericKeyPadDecimalSeparator()
    {
        function handleKeyDown(event) {
            // Prevent the default event
            event.preventDefault();

            // Add the "," to the end of the editable div
            event.target.innerText += ",";

            // Set the cursor to the very end
            const el = event.target;
            const selection = window.getSelection();
            const range = document.createRange();
            selection.removeAllRanges();
            range.selectNodeContents(el);
            range.collapse(false);
            selection.addRange(range);
        }

        // Override the activateEditor method
        let oldActivateEditorFn = GC.Spread.Sheets.CellTypes.Text.prototype.activateEditor;
        GC.Spread.Sheets.CellTypes.Text.prototype.activateEditor = function (editorContext, cellStyle, cellRect, context) {
            editorContext.addEventListener("keydown", function (event) {
                if (event.code === "NumpadDecimal" && event.type === "keydown" ) {
                    handleKeyDown(event);
                }
            });
            return oldActivateEditorFn.apply(this, arguments);
        }
    
		// Handle the keydown on formula text box
		let formulaTextBoxEl = document.querySelector("div[gcuielement='gcAttachedFormulaTextBox']");
		if ( formulaTextBoxEl != null) {
            formulaTextBoxEl.addEventListener("keydown", function (event) {
	    		if (event.code === "NumpadDecimal" && event.type === "keydown" ) {
		    		handleKeyDown(event);
			    }
		    })
        }
    
        // Override the isReservedKey method
        let oldisReservedKeyFn = GC.Spread.Sheets.CellTypes.Text.prototype.isReservedKey;
        GC.Spread.Sheets.CellTypes.Text.prototype.isReservedKey = function (e, context) {
            if (e.code === "NumpadDecimal" && e.type === "keydown" && !context.isEditing) {
                setTimeout(() => {
                    context.sheet.startEdit(false, ",");
                })
                return true;
            }
            return oldisReservedKeyFn.apply(this, arguments);
        }       
    }


    function getCulture(obj) {
        let culture = new GC.Spread.Common.CultureInfo();

        culture.NumberFormat.currencySymbol = obj.intl.currency;
        culture.NumberFormat.currencyDecimalSeparator = obj.intl.decimalSeparator;
        culture.NumberFormat.currencyGroupSeparator = obj.intl.thousandSeparator;
        culture.NumberFormat.numberDecimalSeparator = obj.intl.decimalSeparator;
        culture.NumberFormat.numberGroupSeparator = obj.intl.thousandSeparator;

        if (obj.intl.currency === "€") {
            culture.predefinedFormats.Accounting = '#,##0 [$€-407]';
            culture.predefinedFormats.Currency = [
                '#,##0 [$€-407]',
                '#,##0 [$€-407];[Red]#,##0 [$€-407]',
                '#,##0 [$€-407];(-#,##0 [$€-407])',
                '#,##0 [$€-407];([Red]-#,##0 [$€-407])'
            ];
        }

        culture.NumberFormat.arrayListSeparator = "\\";

        // not this information in 4D intl manager, 
        // so a little hack to be able to not collide decimal separator
        if (obj.intl.decimalSeparator == ",") {
            culture.NumberFormat.arrayGroupSeparator = ";";
            culture.NumberFormat.listSeparator = ";";
            installHookForNumericKeyPadDecimalSeparator();
        } else {
            culture.NumberFormat.arrayGroupSeparator = ",";
            culture.NumberFormat.listSeparator = ",";
        }

        if (obj.intl.amString !== '') {
            culture.DateTimeFormat.amDesignator = obj.intl.amString;
            culture.DateTimeFormat.pmDesignator = obj.intl.pmString;
        }

        culture.DateTimeFormat.dateSeparator = obj.intl.dateSeparator;
        culture.DateTimeFormat.timeSeparator = obj.intl.timeSeparator;

        culture.DateTimeFormat.abbreviatedMonthNames = obj.intl.abbreviatedMonthNames;
        culture.DateTimeFormat.abbreviatedDayNames = obj.intl.abbreviatedDayNames;

        culture.DateTimeFormat.dayNames = obj.intl.dayNames;
        culture.DateTimeFormat.monthNames = obj.intl.monthNames;

        // no "genitive" names in 4D intl manager, so use names
        culture.DateTimeFormat.abbreviatedMonthGenitiveNames = obj.intl.abbreviatedMonthNames;
        culture.DateTimeFormat.monthGenitiveNames = obj.intl.monthNames;
        culture.DateTimeFormat.fullDateTimePattern = obj.intl.longDatePattern + ' ' + obj.intl.longTimePattern; //"dddd, d. MMMM yyyy HH:mm:ss";
        culture.DateTimeFormat.longDatePattern = obj.intl.longDatePattern; // "dddd, d. MMMM yyyy";
        culture.DateTimeFormat.longTimePattern = obj.intl.longTimePattern; // "HH:mm:ss";

        culture.DateTimeFormat.monthDayPattern = obj.intl.monthDayPattern; // dd MMMM or MMMM dd

        let defDate = obj.intl.shortDatePattern;
        defDate = defDate.replace("yyyy", "yy").replace("yy", "yyyy");
        defDate = defDate.replace("YYYY", "YY").replace("YY", "YYYY");

        culture.DateTimeFormat.shortDatePattern = defDate; // "dd.MM.yyyy";
        culture.DateTimeFormat.shortTimePattern = obj.intl.shortTimePattern; // "HH:mm";
        culture.DateTimeFormat.yearMonthPattern = obj.intl.yearMonthPattern; // MMMM yyyy
        culture.DateTimeFormat.defaultDatePattern = defDate + ' ' + culture.DateTimeFormat.longTimePattern;
        return culture;
    }

    function setWorkbookOptions(options) {
        // Only one sheet
        // Utils.spread.setSheetCount(1);
        // Hide the tabs strip
        Utils.spread.options.tabStripVisible = options.tabStripVisible;
        // Get the active sheet
        let sheet = Utils.currentSheet;
        // Set the number of rows and columns like Excel default values.
        sheet.setRowCount(options.numberOfRows, GC.Spread.Sheets.SheetArea.viewport);
        sheet.setColumnCount(options.numberOfColumns, GC.Spread.Sheets.SheetArea.viewport);
        // Set row headers width to allow 1048576 characters
        sheet.setColumnWidth(0, 60.0, GC.Spread.Sheets.SheetArea.rowHeader);
        // Allow users to enter mathematical formula.
        Utils.spread.options.allowUserEditFormula = true;
        Utils.spread.options.enableFormulaTextbox = true;

        if ((vp_localizedFolder !== 'ja.lproj') && (vp_localizedFolder !== 'en.lproj')) {
            let sheetName = vp_spreadJsResources.Sheets.SHEET_NAME;
            sheetName += '1';
            sheet.name(sheetName);
        }

        if (useRibbon)
            designer.setData("isFileModified", false);
    }
    /*
        function initPasteHook() {
    
            function pasteHandler(event) {
                // check if we have some specific data in the clipboard
                $4d._vp_getDataFromClipboard(function (data) {
                    if ("json" in data) {
                        if ((('src' in data.json) && (typeof (data.json.src) == "object"))
                            && (('sheet' in data.json) && (typeof (data.json.sheet) == "object"))) {
    
                            // if we have some, then use them to paste in the current spreadsheet
    
                            let activeSheet = Utils.currentSheet;
                            let src = data.json.src;
                            let srcRange = [new GC.Spread.Sheets.Range(src.row, src.column, src.rowCount, src.columnCount)];
                            let destRange = [new GC.Spread.Sheets.Range(activeSheet.getActiveRowIndex(), activeSheet.getActiveColumnIndex(), src.rowCount, src.columnCount)];
    
                            let pasteOptions = GC.Spread.Sheets.ClipboardPasteOptions.all;
    
                            let activeSheetName = activeSheet.name();
                            let n = Utils.spread.getSheetCount();
                            Utils.spread.addSheet(n, new GC.Spread.Sheets.Worksheet("__tmp__"));
                            let sheet = Utils.spread.getSheet(n);
                            sheet.visible(false);
                            sheet.setRowCount(activeSheet.getRowCount());
                            sheet.setColumnCount(activeSheet.getColumnCount());
                            sheet.fromJSON(data.json.sheet);
    
                            spread.commandManager().execute({
                                cmd: "clipboardPaste",
                                sheetName: activeSheetName, fromSheet: sheet, fromRanges: srcRange,
                                pastedRanges: destRange, isCutting: false, clipboardText: "",
                                pasteOption: pasteOptions
                            });
    
                            Utils.spread.removeSheet(n);
                            Utils.spread.setActiveSheet(activeSheetName);
                        }
                    }
                });
            }
    
            document.addEventListener('paste', pasteHandler);
    
        }
    */
});

window.onerror = function (message, source, lineno, colno, error) {
    Utils.logEvent({ type: 'error', data: { message, source, lineno, colno, error } });
};