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

(function () {
    Utils.addCommand('show-cell', function (params) {
        if (('ranges' in params) && (params.ranges.constructor === Array)) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                instance.sheet.showCell(instance.row, instance.column, params.verticalPosition, params.horizontalPosition);
            }
        }
    });

    Utils.addCommand('get-selection', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);
        if (sheet != null) {
            let sheetIndex = Utils.spread.getSheetIndex(sheet.name());
            let selection = sheet.getSelections();
            let ret = { 'ranges': [] };
            selection.forEach(i => {
                let range = { 'sheet': sheetIndex };

                if (i.row != -1) {
                    range.row = i.row;
                    range.rowCount = i.rowCount;
                }

                if (i.col != -1) {
                    range.column = i.col;
                    range.columnCount = i.colCount;
                }

                ret.ranges.push(range);
            });
            return ret;
        } else {
            return null;
        }
    });

    Utils.addCommand('get-active-cell', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);
        if (sheet != null) {
            let sheetIndex = Utils.spread.getSheetIndex(sheet.name());
            return {
                'row': sheet.getActiveRowIndex(),
                'column': Utils.currentSheet.getActiveColumnIndex(),
                'sheetIndex': sheetIndex
            };
        } else {
            return null;
        }
    });

    Utils.addCommand('set-active-cell', function (params) {
        if (('ranges' in params) && (params.ranges.constructor === Array)) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                instance.sheet.setActiveCell(instance.row, instance.column);
                Utils.needToUpdateFormulaBar = true;
            }
        }
    });

    function setSelection(params, addOnly) {
        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let selCleared = [];

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {
                    let sheetIndex = Utils.spread.getSheetIndex(i.sheet.name());

                    if (i.type == "rows") {
                        i.column = -1;
                        i.columnCount = -1;
                    }

                    if (i.type == "columns") {
                        i.row = -1;
                        i.rowCount = -1;
                    }

                    if (addOnly || selCleared[sheetIndex] === 'cleared') {
                        i.sheet.addSelection(i.row, i.column, i.rowCount, i.columnCount);
                    } else {
                        i.sheet.setSelection(i.row, i.column, i.rowCount, i.columnCount);
                        selCleared[sheetIndex] = 'cleared';
                    }
                });
            });
        }
    }

    Utils.addCommand('set-selection', function (params) {
        setSelection(params, false);
        Utils.needToUpdateFormulaBar = true;
    });

    Utils.addCommand('add-selection', function (params) {
        setSelection(params, true);
        Utils.needToUpdateFormulaBar = true;
    });

    Utils.addCommand('reset-selection', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);
        if (sheet != null) {
            sheet.clearSelection();
            Utils.needToUpdateFormulaBar = true;
        }
    });

    function convertValuesFrom4D(value) {
        let ret = null;

        if ((typeof (value) == 'number')
            || (typeof (value) == 'string')
            || (typeof (value) == 'boolean')
            || (value === null)) {
            ret = { 'value': value };
        }
        else if (typeof (value) == 'object') {

            let hasDay = ('day' in value) && (typeof (value.day) === 'number');
            let hasMonth = ('month' in value) && (typeof (value.month) === 'number');
            let hasYear = ('year' in value) && (typeof (value.year) === 'number');

            let hasSeconds = ('seconds' in value) && (typeof (value.seconds) === 'number');
            let hasMinutes = ('minutes' in value) && (typeof (value.minutes) === 'number');
            let hasHours = ('hours' in value) && (typeof (value.hours) === 'number');

            if (hasDay && hasMonth && hasYear && !hasSeconds && !hasMinutes && !hasHours) {
                if (value.year != 0 || value.month != 0 || value.day != 0) {
                    ret = { 
                        'value': new Date(value.year, value.month - 1, value.day)
                     };
                }
            } else if (!hasDay && !hasMonth && !hasYear && hasSeconds && hasMinutes && hasHours) {
                ret = { 'value': new Date(1899, 11, 30, value.hours, value.minutes, value.seconds) };
            } else if (hasDay && hasMonth && hasYear && hasSeconds && hasMinutes && hasHours) {
                if (value.year != 0 || value.month != 0 || value.day != 0) {
                    ret = {
                        'value': new Date(value.year, value.month - 1, value.day,
                            value.hours, value.minutes, value.seconds)
                    };
                } else {
                    if ((value.hours != 0) || (value.minutes != 0) || (value.seconds != 0)) {
                        ret = {
                            'value': new Date(1899, 11, 30, 
                                value.hours, value.minutes, value.seconds)
                        };
                    }
                }
            }
        }
        return ret;
    }

    Utils.addCommand('set-ranges-value', function (params) {

        if ('value' in params) {

            let val = convertValuesFrom4D(params.value);

            if (val != null) {

                let format = null;
                if (('format' in params) && (typeof (params.format) === 'string'))
                    format = Utils.adjustFormat(params.format);

                if (('ranges' in params) && (params.ranges.constructor === Array)) {

                    params.ranges.forEach(range => {
                        let instancesArray = [];

                        Utils.getRanges(range, instancesArray);

                        instancesArray.forEach(i => {

                            let instance = i.sheet.getRange(i.row, i.column, i.rowCount, i.columnCount);

                            instance.formula(null);
                            instance.value(val.value);

                            if (format != null)
                                instance.formatter(format);
                        });
                    });

                    Utils.needToUpdateFormulaBar = true;
                }
            }
        }
    });

    Utils.addCommand('set-values', function (params) {

        if (('value' in params) && (params.value.constructor === Array)) {

            let ar = params.value;

            if (ar.length > 0) {

                ar.forEach(function (row, rowIndex) {
                    if ((row != null) && (row.constructor === Array)) {
                        row.forEach(function (content, colIndex) {
                            let val = convertValuesFrom4D(content);
                            if (val != null) {
                                ar[rowIndex][colIndex] = val.value;
                            } else {
                                ar[rowIndex][colIndex] = undefined;
                            }
                        });
                    } else {
                        ar[rowIndex] = null;
                    }
                });

                if ('ranges' in params) {
                    let instance = Utils.getFirstRange(params.ranges);
                    if (instance != null) {
                        instance.sheet.setArray(instance.row, instance.column, ar);
                    }
                }
            }
        }
        Utils.needToUpdateFormulaBar = true;
    });

    Utils.addCommand('set-formulas', function (params) {

        if (('value' in params) && (params.value.constructor === Array)) {

            let ar = params.value;

            if (ar.length > 0) {

                ar.forEach(function (row, rowIndex) {
                    if ((row != null) && (row.constructor === Array)) {
                        row.forEach(function (content, colIndex) {
                            if (!(typeof (content) === 'string')) {
                                ar[rowIndex][colIndex] = null;
                            }
                        });
                    } else {
                        ar[rowIndex] = null;
                    }
                });

                if ('ranges' in params) {
                    let instance = Utils.getFirstRange(params.ranges);
                    if (instance != null) {
                        instance.sheet.setArray(instance.row, instance.column, ar, true);
                    }
                }
            }
        }
        Utils.needToUpdateFormulaBar = true;
    });

    function convertValueTo4D(value) {

        if ((value != null) && (value.constructor === Date)) {
            ret = {};

            let day = value.getDate();
            let month = value.getMonth();
            let year = value.getFullYear();

            ret.date = { 'day': day, 'month': month + 1, 'year': year };

            let hours = value.getHours();
            let minutes = value.getMinutes();
            let seconds = value.getSeconds();

            ret.time = (hours * 3600) + (minutes * 60) + seconds;

            return ret;
        }
        else
            return value;
    }

    Utils.addCommand('get-value', function (params) {

        let ret = { 'value': null };

        if ('ranges' in params) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                ret.value = convertValueTo4D(instance.sheet.getCell(instance.row, instance.column).value());
            }
        }

        return ret;
    });

    Utils.addCommand('get-values', function (params) {

        let ret = { 'value': [[]] };

        if ('ranges' in params) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                let ar = instance.sheet.getArray(instance.row, instance.column, instance.rowCount, instance.columnCount);

                ar.forEach(function (row, rowIndex) {
                    row.forEach(function (content, colIndex) {
                        if ((content != null) && (content.constructor === Date)) {
                            ar[rowIndex][colIndex] = convertValueTo4D(content);
                        }
                    });
                });

                ret.value = ar;
            }
        }

        return ret;
    });

    Utils.addCommand('get-formulas', function (params) {

        let ret = { 'value': [[]] };

        if ('ranges' in params) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                let ar = instance.sheet.getArray(instance.row, instance.column, instance.rowCount, instance.columnCount, true);

                ar.forEach(function (row, rowIndex) {
                    row.forEach(function (col, colIndex) {
                        if (col === null)
                            ar[rowIndex][colIndex] = '';
                    });
                });

                ret.value = ar;
            }
        }

        return ret;
    });

    Utils.addCommand('set-ranges-formula', function (params) {

        if ((('formula' in params) && (typeof (params.formula) == 'string'))
            && ('ranges' in params) && (params.ranges.constructor === Array)) {

            let format = null;
            if (('format' in params) && (typeof (params.format) === 'string'))
                format = Utils.adjustFormat(params.format);

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {
                    let instance = i.sheet.getRange(i.row, i.column, i.rowCount, i.columnCount);

                    instance.formula(params.formula);

                    if (format != null) {
                        instance.formatter(format);
                    }
                });
            });

            Utils.needToUpdateFormulaBar = true;
        }
    });

    Utils.addCommand('get-formula', function (params) {

        let ret = { 'value': '' };

        if ('ranges' in params) {
            let instance = Utils.getFirstRange(params.ranges);
            if (instance != null) {
                ret.value = instance.sheet.getCell(instance.row, instance.column).formula();
            }
            if (ret.value === null)
                ret.value = '';
        }

        return ret;
    });

})();