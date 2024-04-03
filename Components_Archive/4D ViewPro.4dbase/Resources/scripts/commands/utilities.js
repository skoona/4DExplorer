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

Utils.addCommand('compute-formulas', function (params) {
    Utils.spread.resumeCalcService(false); // it has been suspended by runCommand
    Utils.spread.suspendCalcService(); // to keep the balance if it has been suspended by user
    Utils.spread.resumeCalcService(true); // finally do it and force computing
    Utils.spread.suspendCalcService(); // so it can be resumed when leaving runCommand
});


Utils.addCommand('suspend-calculation', function (params) {
    Utils.spread.suspendCalcService(false);
});


Utils.addCommand('resume-calculation', function (params) {
    Utils.spread.resumeCalcService(false);
});

Utils.addCommand('copy-data', function (params) {
    var copyData = { text: '', html: '' };
    var func = function (event, data) {
        copyData.html = data.copyData.html;
        copyData.text = data.copyData.text;
        data.cancel = true;
    };
    Utils.spread.bind(GC.Spread.Sheets.Events.ClipboardChanging, func);

    var options = { cmd: "copy", sheetName: Utils.currentSheet.name() };
    Utils.spread.commandManager().execute(options);

    Utils.spread.unbind(GC.Spread.Sheets.Events.ClipboardChanging, func);

    return copyData;
});

Utils.addCommand('paste-data', function (params) {
    var oldClipOption = Utils.currentSheet.options.clipBoardOptions;
    Utils.currentSheet.options.clipBoardOptions = params.pasteOption;

    var callback = function () {
        Utils.currentSheet.options.clipBoardOptions = oldClipOption;
    };
    var options = {
        cmd: "paste",
        sheetName: Utils.currentSheet.name(),
        pasteText: params.text,
        pasteHtml: params.html,
        callback: callback
    };
    Utils.spread.commandManager().execute(options);
});

Utils.addCommand('find', function (params) {
    let foundRange = { area: params.range.area, ranges: [] };
    Utils.spread.suspendPaint();
    let firstFind = true;

    try {
        if ('range' in params && typeof params.range === 'object') {

            if (('ranges' in params.range) && (params.range.ranges.constructor === Array)) {

                let searchInNextRange = true;
                let searchCondition = new GC.Spread.Sheets.Search.SearchCondition();

                if ('order' in params) {
                    searchCondition.searchOrder = params.order;
                }

                if ('flags' in params) {
                    searchCondition.searchFlags = params.flags;
                }
                // always perform a range search
                searchCondition.searchFlags |= GC.Spread.Sheets.Search.SearchFlags.blockRange;

                if ('target' in params) {
                    searchCondition.searchTarget = params.target;
                }

                if ('find' in params) {
                    searchCondition.searchString = params.find;
                }

                let replace = null;
                if ('replace' in params && typeof params.replace === 'string') {
                    replace = params.replace;
                }

                let regexString = '';
                for (let i = 0; i < searchCondition.searchString.length; i++) {

                    let c = searchCondition.searchString[i];

                    if (((c >= 'a') && (c <= 'z'))
                        || ((c >= 'A') && (c <= 'A'))
                        || ((c >= '0') && (c <= '9'))) {
                        regexString += c;
                    } else if (c === '*') {
                        if (searchCondition.searchFlags & GC.Spread.Sheets.Search.SearchFlags.useWildCards) {
                            regexString += '.*';
                        } else {
                            regexString += '\\*'
                        }
                    } else if (c === '?') {
                        if (searchCondition.searchFlags & GC.Spread.Sheets.Search.SearchFlags.useWildCards) {
                            regexString += '.{1}';
                        } else {
                            regexString += '\\?'
                        }
                    } else {
                        regexString += '\\' + c;
                    }
                }

                let regexFlag = '';

                if (params.all) {
                    regexFlag += 'g';
                }

                if (searchCondition.searchFlags & GC.Spread.Sheets.Search.SearchFlags.ignoreCase) {
                    regexFlag += 'i';
                }

                let regexSearch = new RegExp(regexString, regexFlag);

                params.range.ranges.forEach(range => {

                    let instancesArray = [];

                    Utils.getRanges(range, instancesArray);

                    instancesArray.forEach(instance => {

                        if (searchInNextRange) {
                            let sheetIndex = Utils.spread.getSheetIndex(instance.sheet.name());

                            searchCondition.startSheetIndex = sheetIndex;
                            searchCondition.endSheetIndex = sheetIndex;

                            searchCondition.rowStart = instance.row;
                            searchCondition.rowEnd = instance.row + instance.rowCount - 1;
                            searchCondition.columnStart = instance.column;
                            searchCondition.columnEnd = instance.column + instance.columnCount - 1;

                            let searchInSameRange = true;

                            if (firstFind) {
                                if (searchCondition.searchOrder === GC.Spread.Sheets.Search.SearchOrder.nOrder) {
                                    if ('afterColumn' in params) {
                                        searchCondition.findBeginColumn = params.afterColumn;

                                        // out of range column
                                        if ((searchCondition.findBeginColumn < instance.column)
                                            || (searchCondition.findBeginColumn >= instance.column + instance.columnCount)) {
                                            searchCondition.findBeginColumn = -1;
                                        }
                                    }

                                    if ('afterRow' in params) {
                                        searchCondition.findBeginRow = params.afterRow + 1;

                                        // out of range row
                                        if ((searchCondition.findBeginRow < instance.row)
                                            || (searchCondition.findBeginRow > instance.row + instance.rowCount)) {
                                            searchCondition.findBeginRow = -1;
                                        }
                                    }


                                    if (searchCondition.findBeginRow > searchCondition.rowEnd) {
                                        searchCondition.findBeginColumn++;
                                        searchCondition.findBeginRow = searchCondition.rowStart;

                                        if (searchCondition.findBeginColumn > searchCondition.columnEnd) {
                                            searchInSameRange = false;
                                        }

                                    }
                                } else {

                                    if ('afterColumn' in params) {
                                        searchCondition.findBeginColumn = params.afterColumn + 1;

                                        // out of range column
                                        if ((searchCondition.findBeginColumn < instance.column)
                                            || (searchCondition.findBeginColumn > instance.column + instance.columnCount)) {
                                            searchCondition.findBeginColumn = -1;
                                        }

                                    }

                                    if ('afterRow' in params) {
                                        searchCondition.findBeginRow = params.afterRow;

                                        // out of range row
                                        if ((searchCondition.findBeginRow < instance.row)
                                            || (searchCondition.findBeginRow >= instance.row + instance.rowCount)) {
                                            searchCondition.findBeginRow = -1;
                                        }
                                    }

                                    if (searchCondition.findBeginColumn > searchCondition.columnEnd) {
                                        searchCondition.findBeginRow++;
                                        searchCondition.findBeginColumn = searchCondition.columnStart;

                                        if (searchCondition.findBeginRow > searchCondition.rowEnd) {
                                            searchInSameRange = false;
                                        }
                                    }
                                }

                                firstFind = false;
                            } else {
                                searchCondition.findBeginColumn = -1;
                                searchCondition.findBeginRow = -1;
                            }

                            if (searchInSameRange) {
                                do {

                                    let result = Utils.spread.search(searchCondition);

                                    if (result.searchFoundFlag === GC.Spread.Sheets.Search.SearchFoundFlags.none) {
                                        searchInSameRange = false;
                                    } else {

                                        searchInSameRange = params.all;

                                        // do the replace
                                        if (replace != null) {

                                            let cell = Utils.spread.getSheet(result.foundSheetIndex).getCell(result.foundRowIndex, result.foundColumnIndex)
                                            let text;

                                            if ((result.searchFoundFlag & GC.Spread.Sheets.Search.SearchFoundFlags.cellText) != 0) {
                                                text = result.foundString.replace(regexSearch, replace);
                                                cell.value(text);
                                            }

                                            if ((result.searchFoundFlag & GC.Spread.Sheets.Search.SearchFoundFlags.cellFormula) != 0) {
                                                let formula = cell.formula();
                                                if (formula != null) {
                                                    text = cell.formula().replace(regexSearch, replace);
                                                    cell.formula(text);
                                                }
                                            }

                                            if ((result.searchFoundFlag & GC.Spread.Sheets.Search.SearchFoundFlags.cellTag) != 0) {
                                                text = result.foundString.replace(regexSearch, replace);
                                                cell.tag(text);
                                            }
                                        }

                                        // push the found range

                                        foundRange.ranges.push(
                                            {
                                                row: result.foundRowIndex,
                                                column: result.foundColumnIndex,
                                                sheet: result.foundSheetIndex
                                            });

                                        // check if if should continue to search in this sheet

                                        if (searchInSameRange) {
                                            if (searchCondition.searchOrder === GC.Spread.Sheets.Search.SearchOrder.nOrder) {

                                                searchCondition.findBeginRow = result.foundRowIndex + 1;
                                                searchCondition.findBeginColumn = result.foundColumnIndex;

                                                if (searchCondition.findBeginRow > searchCondition.rowEnd) {
                                                    searchCondition.findBeginColumn++;
                                                    searchCondition.findBeginRow = searchCondition.rowStart;

                                                    if (searchCondition.findBeginColumn > searchCondition.columnEnd) {
                                                        searchInSameRange = false;
                                                    }

                                                }
                                            } else {

                                                searchCondition.findBeginColumn = result.foundColumnIndex + 1;
                                                searchCondition.findBeginRow = result.foundRowIndex;

                                                if (searchCondition.findBeginColumn > searchCondition.columnEnd) {
                                                    searchCondition.findBeginRow++;
                                                    searchCondition.findBeginColumn = searchCondition.columnStart;

                                                    if (searchCondition.findBeginRow > searchCondition.rowEnd) {
                                                        searchInSameRange = false;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                } while (searchInSameRange);
                            }
                            // if we found an occurence and we are not searching for all, stop the search

                            if ((foundRange.ranges.length == 1) && !params.all) {
                                searchInNextRange = false;
                            }
                        }
                    });
                });
            }
        }
    } catch (e) {
        throw e;
    } finally {
        Utils.spread.resumePaint();
        return foundRange;
    }
});