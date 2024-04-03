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

class Utils {

    static get spread() {
        return spread;
    }

    static get currentDocument() {
        return currentDocument;
    }

    static set currentDocument(doc) {
        currentDocument = doc;
    }

    static get currentSheet() {
        return Utils.spread.getActiveSheet();
    }

    static get currentCell() {
        let sheet = Utils.currentSheet;
        return {
            row: sheet.getActiveRowIndex(),
            column: sheet.getActiveColumnIndex()
        };
    }
}

Utils.needToUpdateFormulaBar = false;

Utils.initContextMenu = function () {
    var insertPageBreak = {
        text: contextMenuRes.insertPageBreak,
        name: "insertPageBreak",
        command: "insertPageBreak",
        workArea: "viewport"
    };
    var removePageBreak = {
        text: contextMenuRes.removePageBreak,
        name: "removePageBreak",
        command: "removePageBreak",
        workArea: "viewport"
    };
    var insertRowPageBreak = {
        text: contextMenuRes.insertPageBreak,
        name: "insertRowPageBreak",
        command: "insertRowPageBreak",
        workArea: "rowHeader"
    };
    var removeRowPageBreak = {
        text: contextMenuRes.removePageBreak,
        name: "removeRowPageBreak",
        command: "removeRowPageBreak",
        workArea: "rowHeader"
    };
    var insertColPageBreak = {
        text: contextMenuRes.insertPageBreak,
        name: "insertColPageBreak",
        command: "insertColPageBreak",
        workArea: "colHeader"
    };
    var removeColPageBreak = {
        text: contextMenuRes.removePageBreak,
        name: "removeColPageBreak",
        command: "removeColPageBreak",
        workArea: "colHeader"
    };
    Utils.spread.contextMenu.menuData.push(insertPageBreak);
    Utils.spread.contextMenu.menuData.push(removePageBreak);
    Utils.spread.contextMenu.menuData.push(insertRowPageBreak);
    Utils.spread.contextMenu.menuData.push(removeRowPageBreak);
    Utils.spread.contextMenu.menuData.push(insertColPageBreak);
    Utils.spread.contextMenu.menuData.push(removeColPageBreak);
}

Utils.diagnostics = {
    events: []
};

Utils.logEvent = function ({ type, data }) {
    if (Utils.diagnostics.events.length >= 500) {
        Utils.diagnostics.events = [];
    }

    Utils.diagnostics.events.push({
        time: new Date(),
        type,
        data
    });
}

Utils.adjustFormat = function (format) {
    let propertyName = '';

    if (format === '_fullDateTimePattern_') {
        propertyName = 'fullDateTimePattern';
    } else if (format === '_sortableDateTimePattern_') {
        propertyName = 'sortableDateTimePattern';
    } else if (format === '_universalSortableDateTimePattern_') {
        propertyName = 'universalSortableDateTimePattern';
    } else if (format === '_longDatePattern_') {
        propertyName = 'longDatePattern';
    } else if (format === '_monthDayPattern_') {
        propertyName = 'monthDayPattern';
    } else if (format === '_shortDatePattern_') {
        propertyName = 'shortDatePattern';
    } else if (format === '_yearMonthPattern_') {
        propertyName = 'yearMonthPattern';
    } else if (format === '_longTimePattern_') {
        propertyName = 'longTimePattern';
    } else if (format === '_shortTimePattern_') {
        propertyName = 'shortTimePattern';
    }

    if (propertyName != '') {
        let culture = GC.Spread.Common.CultureManager.getCultureInfo();
        format = culture.DateTimeFormat[propertyName];
        format = format.replaceAll("'", '"');
    }

    return format;
}

/**
 * http://help.grapecity.com/spread/SpreadJSWeb/webframe.html#resulterror.html
 */
Utils.errors = {
    invalidCellReference: GC.Spread.CalcEngine.CalcError.parse("#REF!"),
    wrongTypeOfArgument: GC.Spread.CalcEngine.CalcError.parse("#VALUE!"),
    numberRelated: GC.Spread.CalcEngine.CalcError.parse("#NUM!"),
    notAny: GC.Spread.CalcEngine.CalcError.parse("#N/A"),
    divisionByZero: GC.Spread.CalcEngine.CalcError.parse("#DIV/0!")
};

Utils.b64ToBlob = function (b64string) {
    let byteString = atob(b64string);

    // write the bytes of the string to an ArrayBuffer
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    let blob = new Blob([ia.buffer], { type: "application/octet-stream" });

    return blob;
};

// return the sheet corresponding to the sheet index, 
// check boundaries and return current sheet if sheet index = -1 or is undefined
Utils.resolveSheet = function (sheetIndex) {
    if (((sheetIndex == undefined) || (sheetIndex == -1)) && (Utils.spread.getSheetCount() > 0))
        return Utils.currentSheet;
    else if ((sheetIndex >= 0) && (sheetIndex < Utils.spread.getSheetCount()))
        return Utils.spread.getSheet(sheetIndex);
    else
        return null;
}

// resolve a given sheet index to a sheet index that exists, and resolve sheet index = -1 to current sheet index
Utils.resolveSheetIndex = function (sheetIndex) {
    let trueSheetIndex = null;
    if (typeof (sheetIndex) === 'number') {
        if (sheetIndex == -1) {
            trueSheetIndex = Utils.spread.getActiveSheetIndex();
        } else if ((sheetIndex >= 0) && (sheetIndex < Utils.spread.getSheetCount())) {
            trueSheetIndex = sheetIndex;
        }
    }
    return trueSheetIndex;
}

// same as resolveSheet but returns workbook when sheet Index = -2 or is undefined
Utils.resolveSheetOrWorkbook = function (sheetIndex) {
    let instance = null;
    if ((sheetIndex == undefined) || (sheetIndex == -2)) {
        instance = Utils.spread;
    } else {
        instance = Utils.resolveSheet(sheetIndex);
    }
    return instance;
}


// resolve 4D View Pro ranges
Utils.getRanges = function (range, instancesArray) {

    let hasName = ("name" in range) && (typeof (range.name) === 'string');

    if (hasName) {
        // === name
        let instance = null;
        let sheet = null;

        if (range.sheet == -2) {
            instance = Utils.spread;
            sheet = Utils.resolveSheet(-1);
        } else {
            instance = Utils.resolveSheet(range.sheet);
            sheet = instance;
        }

        if (instance != null) {
            let n = instance.getCustomName(range.name);
            if (n != null) {
                let expression = GC.Spread.Sheets.CalcEngine.expressionToFormula(sheet, n.getExpression());
                let rangesInExpression = GC.Spread.Sheets.CalcEngine.formulaToRanges(sheet, expression);
                if ((rangesInExpression != null) && (rangesInExpression.constructor === Array)) {
                    rangesInExpression.forEach(rangeInExpression => {
                        let i = Utils.spread.getSheetIndex(rangeInExpression.sheetName);
                        let s = Utils.spread.getSheet(i);
                        if (s != null) {
                            rangeInExpression.ranges.forEach(rangeElement => {
                                instancesArray.push({
                                    'sheet': s,
                                    'row': (rangeElement.row == -1) ? 0 : rangeElement.row,
                                    'column': (rangeElement.col == -1) ? 0 : rangeElement.col,
                                    'rowCount': (rangeElement.rowCount == -1) ? sheet.getRowCount() : rangeElement.rowCount,
                                    'columnCount': (rangeElement.colCount == -1) ? sheet.getColumnCount() : rangeElement.colCount,
                                    'type': "name"
                                });

                            });
                        }
                    });
                }
            }
        }
    } else {
        let sheet = Utils.resolveSheet(range.sheet);

        if (sheet != null) {

            let hasRow = ('row' in range) && (typeof (range.row) === 'number');
            let hasColumn = ('column' in range) && (typeof (range.column) === 'number');
            let hasRowCount = ('rowCount' in range) && (typeof (range.rowCount) === 'number');
            let hasColumnCount = ('columnCount' in range) && (typeof (range.columnCount) === 'number');

            if (hasRow && hasColumn && !hasRowCount && !hasColumnCount) {
                // === cell
                instancesArray.push(
                    {
                        'sheet': sheet,
                        'row': range.row,
                        'column': range.column,
                        'rowCount': 1,
                        'columnCount': 1,
                        'type': "cell"
                    });
            } else if (hasRow && hasColumn && hasRowCount && hasColumnCount) {
                // === range
                instancesArray.push(
                    {
                        'sheet': sheet,
                        'row': range.row,
                        'column': range.column,
                        'rowCount': range.rowCount,
                        'columnCount': range.columnCount,
                        'type': "range"
                    });
            } else if (hasRow && hasRowCount && !hasColumn && !hasColumnCount) {
                // === row
                instancesArray.push(
                    {
                        'sheet': sheet,
                        'row': range.row,
                        'column': 0,
                        'rowCount': range.rowCount,
                        'columnCount': sheet.getColumnCount(),
                        'type': "rows"
                    });
            } else if (hasColumn && hasColumnCount && !hasRow && !hasRowCount) {
                // === column
                instancesArray.push(
                    {
                        'sheet': sheet,
                        'row': 0,
                        'column': range.column,
                        'rowCount': sheet.getRowCount(),
                        'columnCount': range.columnCount,
                        'type': "columns"
                    });
            } else if (!hasColumn && !hasColumnCount && !hasRow && !hasRowCount) {
                // === all
                instancesArray.push(
                    {
                        'sheet': sheet,
                        'row': 0,
                        'column': 0,
                        'rowCount': sheet.getRowCount(),
                        'columnCount': sheet.getColumnCount(),
                        'type': "all"
                    });
            }
        }
    }
}

Utils.getFirstRange = function (ranges) {

    let ret = null;

    if ((ranges.constructor === Array)
        && (ranges.length > 0)) {

        let instancesArray = [];

        Utils.getRanges(ranges[0], instancesArray);

        if (instancesArray.length > 0) {
            ret = instancesArray[0];
        }
    }

    return ret;
}


/**
 * Copied from SJS: _indexToLetters (Todo: Any impact on culture change ?)
 * @param {number} index Column index
 */
Utils.indexToLetters = function (index) {
    let t = 'A';
    let aCode = t.charCodeAt(0);
    let sb = '';
    for (; index > 0; index = parseInt((index - 1) / 26), 10) {
        let n = (index - 1) % 26;
        sb = String.fromCharCode(aCode + n) + sb;
    }
    return sb;
};

Utils.addCommand = function (name, handler) {
    Utils.logEvent({ type: 'addCommand', data: { name, handler } });

    if (Commands[name]) {
        console.error(`Duplicate command name: ${name} for handler:`, handler);
        return false;
    }

    Commands[name] = handler;

    return true;
};

Utils.getCommand = function (name) {
    return Commands[name];
};

Utils.send4DEvent = function (event, data) {
    Utils.logEvent({ type: 'send4DEvent', data: { event, data } });

    $4d._vp_sendEvent(event, data);
};

Utils.defineGlobalCustomFunction = function (name, handler, type) {
    Utils.logEvent({ type: 'defineGlobalCustomFunction', data: { name, handler, type } });

    GC.Spread.CalcEngine.Functions.defineGlobalCustomFunction(name, handler);
};

Utils.updateFormulaBar = function () {
    let formulaBar = null;

    if (useRibbon) {
        designer.refresh();
    } else {
        if (useToolbar) {
            formulaBar = $("#formulabox");
        } else {
            // no jQuery when there is no interface
            formulaBar = document.getElementById("formulaTextBox");
        }

        if (formulaBar) {
            let sheet = Utils.spread.getActiveSheet();
            let formula = sheet.getFormula(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
            if (formula) {
                formula = "=" + formula;
            } else {
                formula = sheet.getText(sheet.getActiveRowIndex(), sheet.getActiveColumnIndex());
            }
            if (useRibbon || useToolbar) {
                if (formulaBar.length > 0) {
                    formulaBar.text(formula);
                }
            } else {
                if (formulaBar) {
                    formulaBar.value = formula;
                }
            }
        }
    }
};

Utils.initEvents = function () {

    function prepareEvent(data) {

        let sheet = null;
        let fromSheet = null;
        let hasSheet = false;
        let hasFromSheet = false;

        // don't put the whole sheet object in the event
        // so temporarily remove it from the data
        if ('sheet' in data) {
            sheet = data.sheet;
            delete data.sheet;
            hasSheet = true;
        }

        if ('fromSheet' in data) {
            fromSheet = data.fromSheet;
            delete data.fromSheet;
            hasFromSheet = true;
        }

        let copyed = JSON.parse(JSON.stringify(data));

        if (hasSheet) {
            data.sheet = sheet;
        }

        if (hasFromSheet) {
            data.fromSheet = fromSheet;
        }

        return copyed;
    }

    function makeRange(obj) {
        obj.range = {
            'area': Utils.areaName,
            'ranges': [
                {
                    'sheet': Utils.spread.getSheetIndex(obj.sheetName),
                    'row': obj.row,
                    'column': obj.col
                }
            ]
        };

        delete obj.row;
        delete obj.col;
    }

    function makeRangeList(obj, name1, name2) {
        obj.range = {
            'area': Utils.areaName,
            'ranges': []
        };

        let sheetIndex = Utils.spread.getSheetIndex(obj.sheetName);
        let lastElement = -999;
        obj[name1 + 'List'].forEach(element => {
            if (element == lastElement + 1) {
                obj.range.ranges[obj.range.ranges.length - 1][name2 + 'Count']++;
            } else {
                let r = { 'sheet': sheetIndex };
                r[name2] = element;
                r[name2 + 'Count'] = 1;
                obj.range.ranges.push(r);
            }
            lastElement = element;
        });

        delete obj.sheetIndex;
        delete obj[name1 + 'List'];
    }

    function makeNamedRange(obj, name) {
        obj.range = {
            'area': Utils.areaName,
            'ranges':
                [
                    {
                        'sheet': Utils.spread.getSheetIndex(obj.sheetName),
                        'row': 0,
                        'rowCount': 0,
                        'column': 0,
                        'columnCount': 0
                    }
                ]
        };

        if (name in obj) {
            obj.range.ranges[0].row = obj[name].row;
            obj.range.ranges[0].rowCount = obj[name].rowCount;
            obj.range.ranges[0].column = obj[name].col;
            obj.range.ranges[0].columnCount = obj[name].colCount;

            delete obj[name];
        }
    }

    Utils.spread.bind(GC.Spread.Sheets.Events.ColumnWidthChanged, function (event, data) {
        let obj = prepareEvent(data);
        makeRangeList(obj, 'col', 'column');
        Utils.send4DEvent("OnColumnResize", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.RowHeightChanged, function (event, data) {
        let obj = prepareEvent(data);
        makeRangeList(obj, 'row', 'row');
        Utils.send4DEvent("OnRowResize", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.CellClick, function (event, data) {
        let obj = prepareEvent(data);
        makeRange(obj);

        if (data.sheetArea === GC.Spread.Sheets.SheetArea.viewport) {
            delete obj.sheetArea;
            Utils.send4DEvent("OnClick", obj);
        } else if (data.sheetArea === GC.Spread.Sheets.SheetArea.colHeader) {
            delete obj.range.ranges[0].row;
            obj.range.ranges[0].columnCount = 1;
            Utils.send4DEvent("OnHeaderClick", obj);
        } else if (data.sheetArea === GC.Spread.Sheets.SheetArea.rowHeader) {
            delete obj.range.ranges[0].column;
            obj.range.ranges[0].rowCount = 1;
            Utils.send4DEvent("OnHeaderClick", obj);
        } else if (data.sheetArea === GC.Spread.Sheets.SheetArea.corner) {
            delete obj.range.ranges[0].row;
            delete obj.range.ranges[0].column;
            Utils.send4DEvent("OnHeaderClick", obj);
        }
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.CellDoubleClick, function (event, data) {
        if (data.sheetArea === GC.Spread.Sheets.SheetArea.viewport) {
            let obj = prepareEvent(data);
            makeRange(obj);
            delete obj.sheetArea;
            Utils.send4DEvent("OnDoubleClick", obj);
        }
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.SelectionChanged, function (event, data) {
        let obj = prepareEvent(data);

        function makeSelection(name) {
            let sheetIndex = Utils.spread.getSheetIndex(obj.sheetName);
            obj[name] = { 'area': Utils.areaName, 'ranges': obj[name] };
            obj[name].ranges.forEach(element => {
                element.column = element.col;
                element.columnCount = element.colCount;
                delete element.col;
                delete element.colCount;

                if (element.column == -1) {
                    delete element.column;
                    delete element.columnCount;
                }

                if (element.row == -1) {
                    delete element.row;
                    delete element.rowCount;
                }

                element.sheet = sheetIndex;
            });
        }

        makeSelection('oldSelections');
        makeSelection('newSelections');
        Utils.send4DEvent("OnSelectionChange", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.EditChange, function (event, data) {
        let obj = prepareEvent(data);
        makeRange(obj);
        obj.action = 'editChange';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.ValueChanged, function (event, data) {
        let obj = prepareEvent(data);
        makeRange(obj);
        obj.action = 'valueChanged';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.RangeChanged, function (event, data) {
        let obj = prepareEvent(data);

        obj.range = {
            'area': Utils.areaName,
            'ranges':
                [
                    {
                        'sheet': Utils.spread.getSheetIndex(obj.sheetName),
                        'row': obj.row,
                        'rowCount': obj.rowCount,
                        'column': obj.col,
                        'columnCount': obj.colCount
                    }
                ]
        };

        if ('changedCells' in obj) {
            let tmp = obj.changedCells;
            let sheet = Utils.spread.getSheetIndex(obj.sheetName);
            obj.changedCells = {
                'area': Utils.areaName,
                'ranges': []
            }
            tmp.forEach(cell => {
                obj.changedCells.ranges.push({ 'sheet': sheet, 'row': cell.row, 'column': cell.col });
            });
        }

        delete obj.row;
        delete obj.col;
        delete obj.rowCount;
        delete obj.colCount;

        if (useRibbon) {
            designer.setData("isFileModified", true);
        }

        obj.action = GC.Spread.Sheets.RangeChangedAction[data.action];

        Utils.send4DEvent("OnVPRangeChanged", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.DragDropBlockCompleted, function (event, data) {
        let obj = prepareEvent(data);

        function makeDestRange(name) {
            obj[name + 'Range'] = {
                'area': Utils.areaName,
                'ranges':
                    [
                        {
                            'sheet': Utils.spread.getSheetIndex(obj.sheetName),
                            'row': obj[name + 'Row'],
                            'column': obj[name + 'Col'],
                            'rowCount': obj.rowCount,
                            'columnCount': obj.colCount
                        }
                    ]
            };
            delete obj[name + 'Row'];
            delete obj[name + 'Col'];
        }

        makeDestRange('from');
        makeDestRange('to');

        delete obj.rowCount;
        delete obj.colCount;

        obj.action = 'dragDropBlock';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.DragFillBlockCompleted, function (event, data) {
        let obj = prepareEvent(data);
        makeNamedRange(obj, 'fillRange');
        obj.action = 'dragFillBlock';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.UserFormulaEntered, function (event, data) {
        let obj = prepareEvent(data);
        makeRange(obj);
        obj.action = 'formulaChanged';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.ClipboardPasted, function (event, data) {
        let obj = prepareEvent(data);
        makeNamedRange(obj, 'cellRange');
        obj.action = 'clipboardPasted';
        Utils.send4DEvent("OnAfterEdit", obj);
    });

    Utils.spread.bind(GC.Spread.Sheets.Events.ClipboardChanged, function (event, data) {

        let toSend = data.copyData;
        setTimeout(function () { $4d._vp_sendDataToClipboard(toSend); }, 500);

        /*        try {
                    let activeSheet = Utils.spread.getActiveSheet();
                    let activeSheetName = activeSheet.name();
                    let selectedRanges = activeSheet.getSelections();
        
                    if (selectedRanges.length > 0) {
                        Utils.spread.addSheet(0, new GC.Spread.Sheets.Worksheet("__tmp__"));
                        let sheet = Utils.spread.getSheet(0);
                        sheet.visible(false);
                        sheet.setRowCount(activeSheet.getRowCount());
                        sheet.setColumnCount(activeSheet.getColumnCount());
        
                        let src = selectedRanges[0];
                        let srcRange = [new GC.Spread.Sheets.Range(src.row, src.col, src.rowCount, src.colCount)];
                        let destRange = [new GC.Spread.Sheets.Range(src.row, src.col, 1, 1)];
        
                        spread.commandManager().execute({
                            cmd: "clipboardPaste",
                            sheetName: sheet.name(), fromSheet: activeSheet, fromRanges: srcRange,
                            pastedRanges: destRange, isCutting: false, clipboardText: "",
                            pasteOption: 0
                        });
        
                        let savedSheet = sheet.toJSON();
        
                        // cut values only on same sheet to get a version with values
                        // that can be used if the user wants to paste values
                        spread.commandManager().execute({
                            cmd: "clipboardPaste",
                            sheetName: sheet.name(), fromSheet: activeSheet, fromRanges: srcRange,
                            pastedRanges: destRange, isCutting: false, clipboardText: "",
                            pasteOption: GC.Spread.Sheets.ClipboardPasteOptions.valuesAndFormatting
                        });
        
                        let sheetWithValues = sheet.toJSON()
                        data.copyData.json = {
                            sheet: savedSheet,
                            sheetWithValues: sheetWithValues,
                            src: {
                                row: src.row,
                                column: src.col,
                                rowCount: src.rowCount,
                                columnCount: src.colCount
                            }
                        };
                        Utils.spread.removeSheet(0);
                        Utils.spread.setActiveSheet(activeSheetName);
                        Utils.updateFormulaBar();
        
                        $4d._vp_sendDataToClipboard(data);
                    }
                } finally { }
        */
    });

}

Utils.commandInsertColPageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setColumnPageBreak(options.col ? options.col : options.activeCol, true);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};

Utils.commandRemoveColPageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setColumnPageBreak(options.col ? options.col : options.activeCol, false);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};

Utils.commandInsertRowPageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setRowPageBreak(options.row ? options.row : options.activeRow, true);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};

Utils.commandRemoveRowPageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setRowPageBreak(options.row ? options.row : options.activeRow, false);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};


Utils.commandInsertPageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setColumnPageBreak(options.col ? options.col : options.activeCol, true);
            sheet.setRowPageBreak(options.row ? options.row : options.activeRow, true);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};

Utils.commandRemovePageBreak = {
    canUndo: true,
    execute: function (context, options, isUndo) {
        var Commands = GC.Spread.Sheets.Commands;
        if (isUndo) {
            Commands.undoTransaction(context, options);
            return true;
        } else {
            Commands.startTransaction(context, options);
            let sheet = context.getSheetFromName(options.sheetName);
            sheet.isPrintLineVisible(true);
            sheet.setColumnPageBreak(options.col ? options.col : options.activeCol, false);
            sheet.setRowPageBreak(options.row ? options.row : options.activeRow, false);
            Commands.endTransaction(context, options);
            return true;
        }
    }
};

Utils.initCommands = function () {
    var commandManager = spread.commandManager();
    commandManager.register("insertRowPageBreak", Utils.commandInsertRowPageBreak, undefined, false, false, false, false);
    commandManager.register("removeRowPageBreak", Utils.commandRemoveRowPageBreak, undefined, false, false, false, false);
    commandManager.register("insertColPageBreak", Utils.commandInsertColPageBreak, undefined, false, false, false, false);
    commandManager.register("removeColPageBreak", Utils.commandRemoveColPageBreak, undefined, false, false, false, false);
    commandManager.register("insertPageBreak", Utils.commandInsertPageBreak, undefined, false, false, false, false);
    commandManager.register("removePageBreak", Utils.commandRemovePageBreak, undefined, false, false, false, false);
}


var vp_timerStarted = false;
var vp_timer = null;
var vp_counter = 0;

/*
function vp_resetOptimizer() {
    vp_counter = 0;
    vp_setOptimizer(200);   // timeout is 2/10th of seconds so spreadJS can do a computation and find any long operation to start
}
*/

function vp_startLongOperation() {
    vp_counter++;
    vp_setOptimizer(1000 * 60); // timeout 1 minute for long operation
}

function vp_endLongOperation() {
    vp_counter--;
    if (vp_counter == 0) {
        vp_setOptimizer(200);   // timeout is 2/10th of seconds to allow spreadJS to start another long operation
    }
}


function vp_setOptimizer(timeout) {
    if (vp_timerStarted) {
        clearTimeout(vp_timer);
    } else {
        Utils.spread.suspendPaint();
    }

    vp_timerStarted = true;

    vp_timer = setTimeout(function () {
        vp_timerStarted = false;
        Utils.spread.resumePaint();

        if (Utils.needToUpdateFormulaBar) {
            Utils.updateFormulaBar();
            Utils.needToUpdateFormulaBar = false;
        }

    }, timeout);
}
