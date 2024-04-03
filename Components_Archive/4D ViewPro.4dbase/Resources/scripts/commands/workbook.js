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
        'allowAutoCreateHyperlink',
        'allowContextMenu',
        'allowCopyPasteExcelStyle',
        'allowDynamicArray',
        'allowExtendPasteRange',
        'allowSheetReorder',
        'allowUndo',
        'allowUserDeselect',
        'allowUserDragDrop',
        'allowUserDragFill',
        'allowUserDragMerge',
        'allowUserEditFormula',
        'allowUserResize',
        'allowUserZoom',
        'autoFitType',
        'backColor',
        'backgroundImage',
        'backgroundImageLayout',
        'calcOnDemand',
        'columnResizeMode',
        'copyPasteHeaderOptions',
        'customList',
        'cutCopyIndicatorBorderColor',
        'cutCopyIndicatorVisible',
        'defaultDragFillType',
        'enableAccessibility',
        'enableFormulaTextbox',
        'grayAreaBackColor',
        'highlightInvalidData',
        'iterativeCalculation',
        'iterativeCalculationMaximumChange',
        'iterativeCalculationMaximumIterations',
        'newTabVisible',
        'numbersFitMode',
        'pasteSkipInvisibleRange',
        'referenceStyle',
        'resizeZeroIndicator',
        'rowResizeMode',
        'scrollByPixel',
        'scrollIgnoreHidden',
        'scrollPixel',
        'scrollbarAppearance',
        'scrollbarMaxAlign',
        'scrollbarShowMax',
        'showDragDropTip',
        'showDragFillSmartTag',
        'showDragFillTip',
        'showHorizontalScrollbar',
        'showResizeTip',
        'showScrollTip',
        'showVerticalScrollbar',
        'tabEditable',
        'tabNavigationVisible',
        'tabStripPosition',
        'tabStripRatio',
        'tabStripVisible',
        'tabStripWidth',
        'useTouchLayout'
    ];


    Utils.addCommand('set-workbook-options', function (params) {

        if ((params.options != null) && (typeof params.options === 'object')) {

            optionsAttributes.forEach(attribute => {
                if (attribute in params.options) {
                    Utils.spread.options[attribute] = params.options[attribute];
                }
            });

        }

        if (useRibbon) {
            Utils.needToUpdateFormulaBar = true;;
        }

    });

    Utils.addCommand('get-workbook-options', function (params) {

        let ret = {};

        optionsAttributes.forEach(attribute => {
            ret[attribute] = Utils.spread.options[attribute];
        });

        return ret;
    });

})();