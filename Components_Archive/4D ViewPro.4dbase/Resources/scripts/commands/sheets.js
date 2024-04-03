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

    let optionsAttributes = [
        'allowCellOverflow',
        'sheetTabColor',
        'frozenlineColor',
        'clipBoardOptions',
        'rowHeaderVisible',
        'colHeaderVisible',
        'rowHeaderAutoText',
        'colHeaderAutoText',
        'rowHeaderAutoTextIndex',
        'colHeaderAutoTextIndex',
        'isProtected',
        'selectionBackColor',
        'selectionBorderColor'
    ];

    let gridlineAttributes = [
        'color',
        'showVerticalGridline',
        'showHorizontalGridline'
    ];

    let protectionOptionsAttributes = [
        'allowSelectLockedCells',
        'allowSelectUnlockedCells',
        'allowSort',
        'allowFilter',
        'allowEditObjects',
        'allowResizeRows',
        'allowResizeColumns',
        'allowDragInsertRows',
        'allowDragInsertColumns',
        'allowInsertRows',
        'allowInsertColumns',
        'allowDeleteRows',
        'allowDeleteColumns'
    ]

    let sheetAreaOffsetAttributes = [
        'left',
        'top'
    ];

    Utils.addCommand('set-sheet-options', function (params) {
        let sheet = Utils.resolveSheet(params.index);

        if (sheet != null) {

            if ((params.options != null) && (typeof params.options === 'object')) {

                optionsAttributes.forEach(attribute => {
                    if (attribute in params.options) {
                        sheet.options[attribute] = params.options[attribute];
                    }
                });

                function setSubOptions(ar, name) {
                    if ((params.options[name] != null) && (typeof params.options[name] === 'object')) {
                        ar.forEach(attribute => {
                            if (attribute in params.options[name]) {
                                sheet.options[name][attribute] = params.options[name][attribute];
                            }
                        });
                    }
                }

                setSubOptions(gridlineAttributes, 'gridline');
                setSubOptions(protectionOptionsAttributes, 'protectionOptions');
                setSubOptions(sheetAreaOffsetAttributes, 'sheetAreaOffset');

                if ( ('protectionOptions' in params.options) && (params.options.protectionOptions == null)) {
                    sheet.options.protectionOptions = {};
                }

                if ( 'visible' in params.options && typeof(params.options.visible) == "boolean") {
                    sheet.visible(params.options.visible);
                }

                if ( 'zoom' in params.options && typeof(params.options.zoom) == "number") {
                    sheet.zoom(params.options.zoom);
                }
            }

            if (useRibbon) {
                Utils.needToUpdateFormulaBar = true;
            }
        }
    });

    Utils.addCommand('get-sheet-options', function (params) {
        let sheet = Utils.resolveSheet(params.index);
        let ret = {};

        if (sheet != null) {
            optionsAttributes.forEach(attribute => {
                ret[attribute] = sheet.options[attribute];
            });

            function getSubOptions(ar, name) {
                ret[name] = {}
                let val = sheet.options[name];
                ar.forEach(attribute => {
                    if (attribute in val) {
                        ret[name][attribute] = sheet.options[name][attribute];
                    }
                });
            }

            getSubOptions(gridlineAttributes, 'gridline');
            getSubOptions(protectionOptionsAttributes, 'protectionOptions');
            getSubOptions(sheetAreaOffsetAttributes, 'sheetAreaOffset');

            ret.visible = sheet.visible();
            ret.zoom = sheet.zoom();

        }

        return ret;
    });

    Utils.addCommand('get-sheet-count', function (params) {
        return { "result": Utils.spread.getSheetCount() };
    });

    Utils.addCommand('set-sheet-count', function (params) {
        Utils.spread.setSheetCount(params.count);
    });

    Utils.addCommand('get-sheet-index', function (params) {
        let index = Utils.spread.getSheetIndex(params.name);      
        return { "result": (index == null) ? -1 : index };
    });

    Utils.addCommand('add-sheet', function (params) {
        let index;

        if (params.index < 0)
            index = 0;
        else if (params.index > Utils.spread.getSheetCount())
            index = Utils.spread.getSheetCount();
        else
            index = params.index;

        Utils.spread.addSheet(index, new GC.Spread.Sheets.Worksheet((params.name == "") ? null : params.name));
    });

    Utils.addCommand('remove-sheet', function (params) {
        let index = Utils.resolveSheetIndex(params.index);

        if (index != null)
            Utils.spread.removeSheet(index);
    });

    Utils.addCommand('get-current-sheet', function (params) {
        return { "result": Utils.spread.getActiveSheetIndex() };
    });

    Utils.addCommand('set-current-sheet', function (params) {
        let index = Utils.resolveSheetIndex(params.index);

        if (index != null)
            Utils.spread.setActiveSheetIndex(index);
    });

    Utils.addCommand('set-start-sheet', function (params) {
        let index = Utils.resolveSheetIndex(params.index);

        if (index != null)
            Utils.spread.startSheetIndex(index);
    });

    Utils.addCommand('get-sheet-name', function (params) {
        let sheet = Utils.resolveSheet(params.index);
        let name = '';

        if (sheet != null)
            name = sheet.name();

        return { "result": name };
    });

    Utils.addCommand('set-sheet-name', function (params) {
        let sheet = Utils.resolveSheet(params.index);

        if (sheet != null)
            sheet.name(params.name);
    });

})();