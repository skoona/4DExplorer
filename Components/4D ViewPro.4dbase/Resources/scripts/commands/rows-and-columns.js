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

    Utils.addCommand('set-column-attributes', function (params) {

        if (('attributes' in params) && ('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastCol = i.column + i.columnCount;

                    if (lastCol > i.sheet.getColumnCount()) {
                        lastCol = i.sheet.getColumnCount() + 1;
                    }

                    for (let col = i.column; col < lastCol; col++) {

                        if ('width' in params.attributes) {
                            i.sheet.setColumnWidth(col, params.attributes.width, GC.Spread.Sheets.SheetArea.viewport);
                        }

                        if ('pageBreak' in params.attributes) {
                            i.sheet.setColumnPageBreak(col, params.attributes.pageBreak);
                        }

                        if ('visible' in params.attributes) {
                            i.sheet.setColumnVisible(col, params.attributes.visible);
                        }

                        if ('resizable' in params.attributes) {
                            i.sheet.setColumnResizable(col, params.attributes.resizable);
                        }

                        if ('header' in params.attributes) {
                            i.sheet.setText(0, col, params.attributes.header, GC.Spread.Sheets.SheetArea.colHeader);
                        }
                    }
                });
            });
        }
    });


    Utils.addCommand('get-column-attributes', function (params) {

        let ar = [];

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastCol = i.column + i.columnCount;

                    if (lastCol > i.sheet.getColumnCount()) {
                        lastCol = i.sheet.getColumnCount() + 1;
                    }

                    for (let col = i.column; col < lastCol; col++) {

                        ar.push({

                            'width': i.sheet.getColumnWidth(col, GC.Spread.Sheets.SheetArea.viewport),
                            'pageBreak': i.sheet.getColumnPageBreak(col),
                            'visible': i.sheet.getColumnVisible(col),
                            'resizable': i.sheet.getColumnResizable(col),
                            'header': i.sheet.getText(0, col, GC.Spread.Sheets.SheetArea.colHeader)

                        });
                    }
                });
            });
        }

        return { 'value': ar };
    });



    Utils.addCommand('set-row-attributes', function (params) {

        if (('attributes' in params) && ('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastRow = i.row + i.rowCount;

                    if (lastRow > i.sheet.getRowCount()) {
                        lastRow = i.sheet.getRowCount() + 1;
                    }

                    for (let row = i.row; row < lastRow; row++) {

                        if ('height' in params.attributes) {
                            i.sheet.setRowHeight(row, params.attributes.height, GC.Spread.Sheets.SheetArea.viewport);
                        }

                        if ('pageBreak' in params.attributes) {
                            i.sheet.setRowPageBreak(row, params.attributes.pageBreak);
                        }

                        if ('visible' in params.attributes) {
                            i.sheet.setRowVisible(row, params.attributes.visible);
                        }

                        if ('resizable' in params.attributes) {
                            i.sheet.setRowResizable(row, params.attributes.resizable);
                        }

                        if ('header' in params.attributes) {
                            i.sheet.setText(row, 0, params.attributes.header, GC.Spread.Sheets.SheetArea.rowHeader);
                        }
                    }
                });
            });
        }
    });

    Utils.addCommand('get-row-attributes', function (params) {

        let ar = [];

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastRow = i.row + i.rowCount;

                    if (lastRow > i.sheet.getRowCount()) {
                        lastRow = i.sheet.getRowCount() + 1;
                    }

                    for (let row = i.row; row < lastRow; row++) {

                        ar.push({

                            'height': i.sheet.getRowHeight(row, GC.Spread.Sheets.SheetArea.viewport),
                            'pageBreak': i.sheet.getRowPageBreak(row),
                            'visible': i.sheet.getRowVisible(row),
                            'resizable': i.sheet.getRowResizable(row),
                            'header': i.sheet.getText(row, 0, GC.Spread.Sheets.SheetArea.rowHeader)

                        });
                    }
                });
            });
        }

        return { 'value': ar };
    });

    function sortRangesBySheet(ranges) {
        let sortedRanges = {};

        ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(i => {

                let name = i.sheet.name();
                if (!(name in sortedRanges)) {
                    sortedRanges[name] = [];
                }
                sortedRanges[name].push(i);
            });
        });

        return sortedRanges;
    }

    Utils.addCommand('delete-columns', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let ranges = sortRangesBySheet(params.ranges);

            for (let sheetRanges in ranges) {
                // we need to sort the columns in descending order
                // so we can delete them from the end
                ranges[sheetRanges].sort(function (a, b) {
                    return b.column - a.column;
                });

                ranges[sheetRanges].forEach(i => {
                    if ((i.type != "rows") && ((i.column + i.columnCount) <= i.sheet.getColumnCount())) {
                        i.sheet.deleteColumns(i.column, i.columnCount);
                    }
                });
            }
        }
    });

    Utils.addCommand('delete-rows', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let ranges = sortRangesBySheet(params.ranges);

            for (let sheetRanges in ranges) {
                // we need to sort the rows in descending order
                // so we can delete them from the end
                ranges[sheetRanges].sort(function (a, b) {
                    return b.row - a.row;
                });

                ranges[sheetRanges].forEach(i => {
                    if ((i.type != "columns") && ((i.row + i.rowCount) <= i.sheet.getRowCount())) {
                        i.sheet.deleteRows(i.row, i.rowCount);
                    }
                });
            }
        }
    });

    Utils.addCommand('insert-columns', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let ranges = sortRangesBySheet(params.ranges);

            for (let sheetRanges in ranges) {
                // we need to sort the columns in descending order
                // so we can add them from the end
                ranges[sheetRanges].sort(function (a, b) {
                    return b.column - a.column;
                });

                ranges[sheetRanges].forEach(i => {
                    if (i.type != "rows") {
                        i.sheet.addColumns(i.column, i.columnCount);
                    }
                });
            }
        }
    });

    Utils.addCommand('insert-rows', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let ranges = sortRangesBySheet(params.ranges);

            for (let sheetRanges in ranges) {
                // we need to sort the rows in descending order
                // so we can add them from the end
                ranges[sheetRanges].sort(function (a, b) {
                    return b.row - a.row;
                });

                ranges[sheetRanges].forEach(i => {
                    if (i.type != "columns") {
                        i.sheet.addRows(i.row, i.rowCount);
                    }
                });
            }
        }
    });

    Utils.addCommand('column-autofit', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastCol = i.column + i.columnCount;

                    if (lastCol > i.sheet.getColumnCount()) {
                        lastCol = i.sheet.getColumnCount() + 1;
                    }

                    for (let col = i.column; col < lastCol; col++) {
                        i.sheet.autoFitColumn(col);
                    }
                });
            });
        }
    });

    Utils.addCommand('row-autofit', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            params.ranges.forEach(range => {
                let instancesArray = [];

                Utils.getRanges(range, instancesArray);

                instancesArray.forEach(i => {

                    let lastRow = i.row + i.rowCount;

                    if (lastRow > i.sheet.getRowCount()) {
                        lastRow = i.sheet.getRowCount() + 1;
                    }

                    for (let row = i.row; row < lastRow; row++) {
                        i.sheet.autoFitRow(row);
                    }
                });
            });
        }
    });

    Utils.addCommand('set-frozen-panes', function (params) {
        let instance = Utils.resolveSheet(params.sheetIndex);
        if (instance != null) {

            if (('columnCount' in params.panes)
                && (typeof params.panes.columnCount === 'number')
                && (params.panes.columnCount >= 0)) {
                instance.frozenColumnCount(params.panes.columnCount);
            }

            if (('trailingColumnCount' in params.panes)
                && (typeof params.panes.trailingColumnCount === 'number')
                && (params.panes.trailingColumnCount >= 0)) {
                instance.frozenTrailingColumnCount(params.panes.trailingColumnCount);
            }

            if (('rowCount' in params.panes)
                && (typeof params.panes.rowCount === 'number')
                && (params.panes.rowCount >= 0)) {
                instance.frozenRowCount(params.panes.rowCount);
            }

            if (('trailingRowCount' in params.panes)
                && (typeof params.panes.trailingRowCount === 'number')
                && (params.panes.trailingRowCount >= 0)) {
                instance.frozenTrailingRowCount(params.panes.trailingRowCount);
            }
        }

    });

    Utils.addCommand('get-frozen-panes', function (params) {
        let ret={};
        let instance = Utils.resolveSheet(params.sheetIndex);
        
        if (instance != null) {
            ret.columnCount=instance.frozenColumnCount();
            ret.trailingColumnCount=instance.frozenTrailingColumnCount();
            ret.rowCount=instance.frozenRowCount();
            ret.trailingRowCount=instance.frozenTrailingRowCount();    
        }

        return ret;
    });

    Utils.addCommand('get-row-count', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);
        var result = 0;

        if (sheet != null)
            result = sheet.getRowCount();

        return { "result": result };
    });

    Utils.addCommand('get-column-count', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);
        var result = 0;

        if (sheet != null)
            result = sheet.getColumnCount();

        return { "result": result };
    });

    Utils.addCommand('set-row-count', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);

        if ((sheet != null) && (params.rowCount >= 0))
            sheet.setRowCount(params.rowCount);
    });

    Utils.addCommand('set-column-count', function (params) {
        let sheet = Utils.resolveSheet(params.sheetIndex);

        if ((sheet != null) && (params.columnCount >= 0))
            sheet.setColumnCount(params.columnCount);
    });

})();
