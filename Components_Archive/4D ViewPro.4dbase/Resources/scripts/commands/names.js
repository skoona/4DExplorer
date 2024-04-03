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
    Utils.addCommand('add-range-name', function (params) {

        let formula = rangesToFormula(params.ranges);
        let scope = Utils.resolveSheetOrWorkbook(params.options.scope)

        if ((formula.length > 0) && (scope != null))
            scope.addCustomName(params.name, formula, 0, 0, params.options.comment);
    });

    Utils.addCommand('add-formula-name', function (params) {

        let scope = Utils.resolveSheetOrWorkbook(params.options.scope)

        if ((params.formula.length > 0) && (scope != null))
            scope.addCustomName(params.name, params.formula, params.options.baseRow, params.options.baseColumn, params.options.comment);
    });

    Utils.addCommand('get-names', function (params) {
        let ret = { collection: [] };
        let scope = Utils.resolveSheetOrWorkbook(params.scope);

        if (scope != null) {

            let nameInfos = scope.getCustomNames();

            if (nameInfos != null) {
                ret.collection = nameInfos.map(nameInfo => {
                    return {
                        name: nameInfo.getName(),
                        formula: formulaToString(nameInfo.getExpression()),
                        comment: nameInfo.getComment()
                    };
                })
            };
        }
        return ret;
    });

    Utils.addCommand('get-formula-by-name', function (params) {
        let ret = {};

        let scope = Utils.resolveSheetOrWorkbook(params.scope);

        if (scope != null) {
            let nameInfo = scope.getCustomName(params.name);

            if (nameInfo != null)
                ret = {
                    name: nameInfo.getName(),
                    formula: formulaToString(nameInfo.getExpression()),
                    comment: nameInfo.getComment()
                };
        }
        return ret;
    });


    Utils.addCommand('remove-name', function (params) {

        let scope = Utils.resolveSheetOrWorkbook(params.scope);

        if (scope != null) {
            scope.removeCustomName(params.name);
        }
    });

    function formulaToString(formula) {
        return GC.Spread.Sheets.CalcEngine.expressionToFormula(Utils.currentSheet, formula, 0, 0);
    }

    function rangesToFormula(ranges) {

        function getCellExpression(column, row) {
            return `$${Utils.indexToLetters(column + 1)}$${row + 1}`;
        }

        function getSheetName(sheetIndex) {
            let sheetName = '';
            let sheet = Utils.resolveSheet(sheetIndex);

            if (sheet != null)
                sheetName = sheet.name();

            return sheetName;
        }

        let expression = '';
        let addComma = false;

        ranges.forEach(function (range) {
            let rangeExpression = '';

            let hasRow = ('row' in range) && (typeof (range.row) === 'number');
            let hasColumn = ('column' in range) && (typeof (range.column) === 'number');
            let hasRowCount = ('rowCount' in range) && (typeof (range.rowCount) === 'number');
            let hasColumnCount = ('columnCount' in range) && (typeof (range.columnCount) === 'number');
            let hasSheet = ('sheet' in range) && (typeof (range.sheet) === 'number');
            let hasName = ("name" in range) && (typeof (range.name) === 'string');

            if (hasName) {
                // === name
                rangeExpression = range.name;
            }
            else if (hasRow && hasColumn && !hasRowCount && !hasColumnCount) {
                // === cell
                rangeExpression = getCellExpression(range.column, range.row);
            } else if (hasRow && hasColumn && hasRowCount && hasColumnCount) {
                // === range
                let rightColumn = range.column + range.columnCount - 1;
                let rightRow = range.row + range.rowCount - 1;
                rangeExpression = getCellExpression(range.column, range.row) + ':' + getCellExpression(rightColumn, rightRow);
            } else if (hasRow && hasRowCount && !hasColumn && !hasColumnCount) {
                // === row
                rangeExpression = '$' + (range.row + 1);
                rangeExpression += ':$' + (range.row + range.rowCount);
            } else if (hasColumn && hasColumnCount && !hasRow && !hasRowCount) {
                // === column
                rangeExpression = '$' + Utils.indexToLetters(range.column + 1);
                rangeExpression += ':$' + Utils.indexToLetters(range.column + range.columnCount);
            } else if ( !hasColumn && !hasColumnCount && !hasRow && !hasRowCount ) {
                // === all
                rangeExpression = '!$1:$1048576';
            }


            if (rangeExpression != '') {

                if (addComma)
                    expression += ','
                else
                    addComma = true;

                let sheetName = '';

                if (hasSheet)
                    sheetName += getSheetName(range.sheet);
                else
                    sheetName = getSheetName(-1);

                if (sheetName != '')
                    expression += sheetName + '!';

                expression += rangeExpression;
            }

        });

        return expression;
    }
})();