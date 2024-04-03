
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

    var stripSizeArray = [
        "firstColumnStripSize",
        "firstRowStripSize",
        "secondColumnStripSize",
        "secondRowStripSize"
    ];

    var stripStyleArray = [
        "firstColumnStripStyle",
        "firstFooterCellStyle",
        "firstHeaderCellStyle",
        "firstRowStripStyle",
        "footerRowStyle",
        "headerRowStyle",
        "highlightFirstColumnStyle",
        "highlightLastColumnStyle",
        "lastFooterCellStyle",
        "lastHeaderCellStyle",
        "secondColumnStripStyle",
        "secondRowStripStyle",
        "wholeTableStyle"
    ];

    var styleAttributesArray = [
        "backColor",
        "foreColor",
        "font"
    ];

    var bordersArray = [
        "borderBottom",
        "borderTop",
        "borderLeft",
        "borderRight",
        "borderHorizontal",
        "borderVertical"
    ];

    function getTheme(gcTheme) {
        let theme = {};

        stripSizeArray.forEach(function (size) {

            if (gcTheme[size] != undefined) {
                theme[size] = gcTheme[size]();
            }
        });

        stripStyleArray.forEach(styleName => {

            let gcStyle = gcTheme[styleName]();

            if (gcStyle != undefined) {

                let style = {};

                styleAttributesArray.forEach(attributeName => {
                    if (gcStyle[attributeName] != undefined) {
                        style[attributeName] = gcStyle[attributeName];
                    }
                });

                if (gcStyle.textDecoration != undefined) {
                    style.textDecoration = gcStyle.textDecoration;
                }

                bordersArray.forEach(borderName => {
                    if (gcStyle[borderName] != undefined) {
                        let border = {};
                        if (gcStyle[borderName].color != undefined) {
                            border.color = gcStyle[borderName].color;
                        }
                        if (gcStyle[borderName].style != undefined) {
                            border.style = gcStyle[borderName].style;
                        }

                        style[borderName] = border;
                    }
                });

                theme[styleName] = style;
            }
        });

        return theme;
    }


    function buildTheme(theme) {

        tableTheme = new GC.Spread.Sheets.Tables.TableTheme();

        if (typeof theme === 'string') {

            let themeNames = [];

            [
                { name: 'dark', limit: 11 },
                { name: 'light', limit: 21 },
                { name: 'medium', limit: 28 },
                { name: 'professional', limit: 24 }
            ].forEach(element => {
                for (let i = 1; i <= element.limit; i++) {
                    themeNames.push(element.name + i);
                }
            });

            if (themeNames.includes(theme)) {
                tableTheme = GC.Spread.Sheets.Tables.TableThemes[theme];
            }

        } else {

            stripSizeArray.forEach(function (size) {

                if ((size in theme) && (typeof theme[size] === "number")) {
                    tableTheme[size](theme[size]);
                }
            });

            stripStyleArray.forEach(styleName => {

                if ((styleName in theme) && (typeof theme[styleName] === "object")) {

                    let style = theme[styleName];

                    let tableStyle = new GC.Spread.Sheets.Tables.TableStyle();

                    styleAttributesArray.forEach(attributeName => {
                        if ((attributeName in style) && (typeof style[attributeName] === "string")) {
                            tableStyle[attributeName] = style[attributeName];
                        }
                    });

                    if (("textDecoration" in style) && (typeof style.textDecoration === "number")) {
                        tableStyle.textDecoration = style.textDecoration;
                    }

                    bordersArray.forEach(borderName => {
                        if ((borderName in style) && (typeof style[borderName] === "object")) {
                            let border = new GC.Spread.Sheets.LineBorder;
                            if (("color" in style[borderName]) && (typeof style[borderName].color === "string")) {
                                border.color = style[borderName].color;
                            }
                            if (("style" in style[borderName]) && (typeof style[borderName].style === "number")) {
                                border.style = style[borderName].style;
                            }
                            tableStyle[borderName] = border;
                        }
                    });

                    tableTheme[styleName](tableStyle);
                }
            });
        }
        return tableTheme;
    }


    Utils.addCommand('create-table', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let i = Utils.getFirstRange(params.ranges);

            let options = {};
            let columns = [];
            let setAllowAutoExpand = false;
            let minHeight = 1;
            let tableTheme = GC.Spread.Sheets.Tables.TableThemes.light18;
            let setBandColumns = false;
            let setBandRows = false;
            let setHighlightFirstColumn = false;
            let setHighlightLastColumn = false;

            if ((params.options != null) && (typeof params.options === 'object')) {

                if (('showHeader' in params.options) && (typeof params.options.showHeader === 'boolean')) {
                    options.showHeader = params.options.showHeader;
                }

                if (('showFooter' in params.options) && (typeof params.options.showFooter === 'boolean')) {
                    options.showFooter = params.options.showFooter;
                    if (options.showFooter) {
                        minHeight++;
                    }
                }

                if (('useFooterDropDownList' in params.options) && (typeof params.options.useFooterDropDownList === 'boolean')) {
                    options.useFooterDropDownList = params.options.useFooterDropDownList;
                }

                if (('showResizeHandle' in params.options) && (typeof params.options.showResizeHandle === 'boolean')) {
                    options.showResizeHandle = params.options.showResizeHandle;
                }

                if (('tableColumns' in params.options) && (params.options.tableColumns.constructor === Array)) {
                    columns = params.options.tableColumns;
                }

                if (('allowAutoExpand' in params.options) && (typeof params.options.allowAutoExpand === 'boolean')) {
                    setAllowAutoExpand = true;
                }

                if (('theme' in params.options)
                    && (
                        (typeof params.options.theme === 'object')
                        || (typeof params.options.theme === 'string')
                    )) {
                    tableTheme = buildTheme(params.options.theme);
                }

                if (('bandColumns' in params.options) && (typeof params.options.bandColumns === 'boolean')) {
                    setBandColumns = true;
                }

                if (('bandRows' in params.options) && (typeof params.options.bandRows === 'boolean')) {
                    setBandRows = true;
                }

                if (('highlightFirstColumn' in params.options) && (typeof params.options.highlightFirstColumn === 'boolean')) {
                    setHighlightFirstColumn = true;
                }

                if (('highlightLastColumn' in params.options) && (typeof params.options.highlightLastColumn === 'boolean')) {
                    setHighlightLastColumn = true;
                }

            }

            if ((params.source == null) || (typeof params.source === 'string')) {

                if (i.rowCount < minHeight) {
                    i.rowCount = minHeight;
                }

                let table = i.sheet.tables.add(params.name, i.row, i.column, i.rowCount, i.columnCount, tableTheme, options);

                if (table != null) {
                    if (columns.length > 0) {
                        let tableColumns = [];
                        columns.forEach(element => {
                            let tableColumn = new GC.Spread.Sheets.Tables.TableColumn();
                            if (typeof (element) === 'object') {
                                if (('formatter' in element) && (typeof element.formatter === 'string')) {
                                    tableColumn.formatter(Utils.adjustFormat(element.formatter));
                                }
                                if (('dataField' in element) && (typeof element.dataField === 'string')) {
                                    tableColumn.dataField(element.dataField);
                                }
                                if (('name' in element) && (typeof element.name === 'string')) {
                                    tableColumn.name(element.name);
                                }
                            }
                            tableColumns.push(tableColumn);
                        });
                        table.autoGenerateColumns(false);
                        table.bindColumns(tableColumns);
                    }
                    if ((params.source == null) || (typeof params.source === 'string')) {
                        table.bindingPath(params.source);
                    }
                    if (setAllowAutoExpand) {
                        table.allowAutoExpand(params.options.allowAutoExpand);
                    }
                    if (setBandRows) {
                        table.bandRows(params.options.bandRows);
                    }
                    if (setBandColumns) {
                        table.bandColumns(params.options.bandColumns);
                    }
                    if (setHighlightFirstColumn) {
                        table.highlightFirstColumn(params.options.highlightFirstColumn);
                    }
                    if (setHighlightLastColumn) {
                        table.highlightLastColumn(params.options.highlightLastColumn);
                    }
                }
            }
        }
    });


    Utils.addCommand('remove-table', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                sheet.tables.remove(table, params.options);
            }
        }
    });


    Utils.addCommand('get-tables', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);
        let ret = { collection: [] };

        if (sheet != null) {
            let arr = sheet.tables.all();
            for (let i = 0; i < arr.length; i++) {
                ret.collection.push(arr[i].name());
            }
        }
        return ret;
    });


    Utils.addCommand('insert-table-rows', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                table.insertRows(params.row, params.count, params.isInsertAfter);
            }
        }
    });


    Utils.addCommand('insert-table-columns', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                table.insertColumns(params.column, params.count, params.isInsertAfter);
            }
        }
    });



    Utils.addCommand('remove-table-rows', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                table.deleteRows(params.row, params.count);
            }
        }
    });


    Utils.addCommand('remove-table-columns', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                 table.deleteColumns(params.column, params.count);
             }
        }
    });

    Utils.addCommand('resize-table', function (params) {

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let i = Utils.getFirstRange(params.ranges);

            let table = i.sheet.tables.findByName(params.name);
            if (table != null) {
                i.sheet.tables.resize(table, new GC.Spread.Sheets.Range(i.row, i.column, i.rowCount, i.columnCount));
            }
        }
    });

    Utils.addCommand('get-table-range', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);
        let result = { row: 0, column: 0, rowCount: 0, columnCount: 0 };

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                let r = {};
                if (params.onlyData) {
                    r = table.range();
                } else {
                    r = table.dataRange();
                }
                result.row = r.row;
                result.column = r.col;
                result.rowCount = r.rowCount;
                result.columnCount = r.colCount;
            }
        }
        return result;
    });


    Utils.addCommand('find-table', function (params) {
        let ret = { table: '' };

        if (('ranges' in params) && (params.ranges.constructor === Array)) {

            let i = Utils.getFirstRange(params.ranges);

            let table = i.sheet.tables.find(i.row, i.column);
            if (table != null) {
                ret.table = table.name();
            }
        }
        return ret;
    });


    Utils.addCommand('set-table-column-attributes', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                let index = params.index;
                let attributes = params.attributes;
                if (typeof (attributes) === 'object') {
                    if (('name' in attributes) && (typeof attributes.name === 'string')) {
                        table.setColumnName(index, attributes.name);
                    }
                    if (('footerText' in attributes) && (typeof attributes.footerText === 'string')) {
                        table.setColumnValue(index, attributes.footerText);
                    }
                    if (('footerFormula' in attributes) && (typeof attributes.footerFormula === 'string')) {
                        table.setColumnFormula(index, attributes.footerFormula);
                    }
                    if (('dataField' in attributes) && (typeof attributes.dataField === 'string')) {
                        table.setColumnDataField(index, attributes.dataField);
                        table.bindingPath(table.bindingPath());
                        sheet.repaint();
                    }
                    if (('formula' in attributes) && (typeof attributes.formula === 'string')) {
                        table.setColumnDataFormula(index, attributes.formula);
                    }
                    if (('filterButtonVisible' in attributes) && (typeof attributes.filterButtonVisible === 'boolean')) {
                        table.filterButtonVisible(index, attributes.filterButtonVisible);
                    }
                }
            }
        }
    });


    Utils.addCommand('get-table-column-attributes', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);
        let attributes = null;

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                let index = params.index;
                let range = table.range();
                if ((index >= 0) && (index < range.colCount)) {
                    attributes = {
                        name: table.getColumnName(index),
                        footerText: table.getColumnValue(index),
                        footerFormula: table.getColumnFormula(index),
                        dataField: table.getColumnDataField(index),
                        filterButtonVisible: table.filterButtonVisible(index)
                    };
                }
            }
        }
        return attributes;
    });


    Utils.addCommand('get-table-column-index', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);
        let ret = { index: -1 };

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                ret.index = table.getColumnIndexInTable(params.column);
            }
        }
        return ret;
    });

    Utils.addCommand('get-table-dirty-rows', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);
        let ret = { dirtyRows: null };

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {
                ret.dirtyRows = table.getDirtyRows();
                if (params.reset) {
                    table.clearPendingChanges();
                }
            }
        }
        return ret;

    });

    Utils.addCommand('set-table-theme', function (params) {

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {

                if (('bandColumns' in params.theme) && (typeof params.theme.bandColumns === 'boolean')) {
                    table.bandColumns(params.theme.bandColumns);
                }

                if (('bandRows' in params.theme) && (typeof params.theme.bandRows === 'boolean')) {
                    table.bandRows(params.theme.bandRows);
                }

                if (('highlightFirstColumn' in params.theme) && (typeof params.theme.highlightFirstColumn === 'boolean')) {
                    table.highlightFirstColumn(params.theme.highlightFirstColumn);
                }

                if (('highlightLastColumn' in params.theme) && (typeof params.theme.highlightLastColumn === 'boolean')) {
                    table.highlightLastColumn(params.theme.highlightLastColumn);
                }

                if (('theme' in params.theme)
                    && (
                        (typeof params.theme.theme === 'object')
                        || (typeof params.theme.theme === 'string')
                    )) {
                    let tableTheme = buildTheme(params.theme.theme);
                    table.style(tableTheme);
                }
            }
        }

    });

    Utils.addCommand('get-table-theme', function (params) {

        let ret = null;

        let sheet = Utils.resolveSheet(params.sheet);

        if (sheet != null) {
            let table = sheet.tables.findByName(params.name);
            if (table != null) {

                ret = {
                    bandColumns: table.bandColumns(),
                    bandRows: table.bandRows(),
                    highlightLastColumn: table.highlightLastColumn(),
                    highlightFirstColumn: table.highlightFirstColumn(),
                    theme: getTheme(table.style())
                }
            }
        }

        return ret;

    });


})();
