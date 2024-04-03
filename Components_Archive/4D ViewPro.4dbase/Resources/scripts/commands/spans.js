
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

Utils.addCommand('add-span', function (params) {

    if (('ranges' in params) && (params.ranges.constructor === Array)) {

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(i => {

                i.sheet.addSpan(i.row, i.column, i.rowCount, i.columnCount, GC.Spread.Sheets.SheetArea.viewport);

            });
        });
    }

});


Utils.addCommand('remove-span', function (params) {

    if (('ranges' in params) && (params.ranges.constructor === Array)) {

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(i => {

                i.sheet.removeSpan(i.row, i.column, GC.Spread.Sheets.SheetArea.viewport);

            });
        });
    }

});


Utils.addCommand('get-spans', function (params) {

    let ret = { 'ranges': [] };

    if (('ranges' in params) && (params.ranges.constructor === Array)) {

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(i => {

                let spans = i.sheet.getSpans(i.sheet.getRange( i.row, i.column,  i.rowCount, i.columnCount), GC.Spread.Sheets.SheetArea.viewport );
                
                let sheetIndex = Utils.spread.getSheetIndex(i.sheet.name());
                spans.forEach(span => {
                    let range = { 'sheet': sheetIndex };
    
                    if (span.row != -1) {
                        range.row = span.row;
                        range.rowCount = span.rowCount;
                    }
    
                    if (i.col != -1) {
                        range.column = span.col;
                        range.columnCount = span.colCount;
                    }
    
                    ret.ranges.push(range);
                });    
            });
        });
    }
    return ret;
});
