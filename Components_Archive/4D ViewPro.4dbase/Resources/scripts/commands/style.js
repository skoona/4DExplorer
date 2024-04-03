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
 * The styling commands use some common helper functions (`getStyle`, `isDefined`).
 * To avoid polluting the global context with those functions that are
 * not relevant for other parts of View Pro we enclose the code in 
 * an Immediately-Invoked Function.
 * More about the concept at:
 * http://blog.mgechev.com/2012/08/29/self-invoking-functions-in-javascript-or-immediately-invoked-function-expression/
 */
(function () {

    let attributes = [
        'backColor',
        'backgroundImage',
        'backgroundImageLayout',
        'borderBottom',
        'borderLeft',
        'borderRight',
        'borderTop',
        'cellPadding',
        'diagonalDown',
        'diagonalUp',
        'font',
        'foreColor',
        'formatter',
        'hAlign',
        'isVerticalText',
        'labelOptions',
        'locked',
        'shrinkToFit',
        'tabStop',
        'textDecoration',
        'textIndent',
        'vAlign',
        'watermark',
        'wordWrap',
        'textOrientation'
    ];

    function restrainToSupportedAttributes(stylesheet, withName) {
        let ret = null;

        if (stylesheet != null) {
            ret = {};
            
            if (withName) {
                if ('name' in stylesheet) {
                    ret.name = stylesheet.name;
                }
            }


            attributes.forEach(attribute => {
                if (attribute in stylesheet) {
                    ret[attribute] = stylesheet[attribute];
                }
            });
        }
        return ret;
    }

    function makeStyleAttribute(stylesheet, attribute) {
        let ret = null;
        if (stylesheet[attribute] === null) {
            ret = undefined;
        } else {
            switch (attribute) {
                case 'formatter':
                    ret = Utils.adjustFormat(stylesheet.formatter);
                    break;

                case 'borderLeft':
                case 'borderTop':
                case 'borderRight':
                case 'borderBottom':
                case 'diagonalDown':
                case 'diagonalUp':
                    {
                        ret = new GC.Spread.Sheets.LineBorder();
                        if ('color' in stylesheet[attribute]) {
                            ret.color = stylesheet[attribute].color;
                            if (ret.color === null) {
                                ret.color = undefined;
                            }
                        }
                        if ('style' in stylesheet[attribute]) {
                            ret.style = stylesheet[attribute].style;
                            if (ret.style === null) {
                                ret.style = undefined;
                            }
                        }
                    }
                    break;

                default:
                    ret = stylesheet[attribute];
                    break;
            }
        }
        return ret;
    }

    function makeStyleSheet(stylesheet) {
        let ret = new GC.Spread.Sheets.Style();

        let keys = Object.keys(stylesheet);

        keys.forEach(attribute => {
            if (attributes.find(validAttribute => {
                return validAttribute === attribute;
            }) != undefined) {
                ret[attribute] = makeStyleAttribute(stylesheet, attribute);
            }
        });
        return ret;
    }

    Utils.addCommand('add-stylesheet', function (params) {

        let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

        if (instance != null) {
            if (('stylesheet' in params) && (typeof (params.stylesheet) === 'object')) {
                if (('name' in params) && (typeof (params.name) === 'string')) {
                    let stylesheet = makeStyleSheet(params.stylesheet);
                    stylesheet.name = params.name;
                    instance.addNamedStyle(stylesheet);
                }
            }
        }
    });

    Utils.addCommand('set-default-style', function (params) {

        let instance = Utils.resolveSheet(params.sheetIndex);

        if (instance != null) {
            if (('stylesheet' in params) && (typeof (params.stylesheet) === 'object')) {
                let stylesheet = makeStyleSheet(params.stylesheet);
                instance.setDefaultStyle(stylesheet);
            }
        }
    });

    Utils.addCommand('get-default-style', function (params) {
        let ret = null;
        let instance = Utils.resolveSheet(params.sheetIndex);

        if (instance != null) {
            let stylesheet = instance.getDefaultStyle();
            ret = restrainToSupportedAttributes(stylesheet, false);
        }

        return ret;
    });

    Utils.addCommand('set-border', function (params) {

        let border = new GC.Spread.Sheets.LineBorder();

        if ('color' in params.border) {
            border.color = params.border.color;
            if (border.color === null) {
                border.color = undefined;
            }
        }

        if ('style' in params.border) {
            border.style = params.border.style;
            if (border.style === null) {
                border.style = undefined;
            }
        }

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(instance => {
                let cellRange = instance.sheet.getRange(instance.row, instance.column, instance.rowCount, instance.columnCount);
                cellRange.setBorder(border, params.option);
            });
        });
    });


    Utils.addCommand('set-cell-style', function (params) {

        var style = makeStyleSheet(params.style);
        let props = Object.keys(params.style);

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(instance => {

                if (instance.type == "rows") {
                    instance.column = -1;
                    instance.columnCount = -1;
                }

                if (instance.type == "columns") {
                    instance.row = -1;
                    instance.rowCount = -1;
                }

                if (instance.type == "all") {
                    instance.column = -1;
                    instance.columnCount = -1;
                    instance.row = -1;
                    instance.rowCount = -1;
                }

                let cellRange = instance.sheet.getRange(instance.row, instance.column, instance.rowCount, instance.columnCount);

                for (var propertyName in style) {
                    if (style.hasOwnProperty(propertyName)) {
                        if (propertyName != 'name') {
                            if (typeof cellRange[propertyName] === 'function') {
                                cellRange[propertyName](style[propertyName]);
                            }
                        }
                    }
                }

                if (params.style.hasOwnProperty('name')) {
                    for (let row = 0; row < instance.rowCount; row++) {
                        for (let col = 0; col < instance.columnCount; col++) {
                            instance.sheet.setStyleName(instance.row + row, instance.column + col, params.style.name === null ? "" : params.style.name);
                        }
                    }
                }

            });
        });
    });

    Utils.addCommand('get-cell-style', function (params) {

        let style = {};

        if ('ranges' in params) {

            let instance = Utils.getFirstRange(params.ranges);

            if (instance != null) {
                let cell = instance.sheet.getRange(instance.row, instance.column);

                let name = instance.sheet.getStyleName(instance.row, instance.column);
                if (name != undefined) {
                    style.name = name;
                }

                attributes.forEach(propertyName => {
                    if (typeof cell[propertyName] === 'function') {
                        let val = cell[propertyName]();
                        if (val != undefined) {
                            style[propertyName] = val;
                        }
                    }
                });
            };
        };

        return style;
    });


    Utils.addCommand('remove-stylesheet', function (params) {

        let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

        if (instance != null) {
            if (('name' in params) && (typeof (params.name) === 'string')) {
                instance.removeNamedStyle(params.name);
            }
        }
    });

    Utils.addCommand('get-stylesheet', function (params) {
        let ret = null;
        let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

        if (instance != null) {
            if (('name' in params) && (typeof (params.name) === 'string')) {
                let stylesheet = instance.getNamedStyle(params.name);
                ret = restrainToSupportedAttributes(stylesheet, true);
            }
        }

        return ret;
    });

    Utils.addCommand('get-stylesheets', function (params) {
        let ret = { collection: [] };
        let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

        if (instance != null) {
            let ar = instance.getNamedStyles();
            ar.forEach(stylesheet => {
                ret.collection.push(restrainToSupportedAttributes(stylesheet, true));
            });
        }

        return ret;
    });

})();