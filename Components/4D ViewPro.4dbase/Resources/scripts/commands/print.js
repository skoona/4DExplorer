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

  let attributes = [
    'bestFitColumns',
    'bestFitRows',
    'blackAndWhite',
    'centering',
    'columnEnd',
    'columnStart',
    'firstPageNumber',
    'fitPagesTall',
    'fitPagesWide',
    'footerCenter',
    'footerCenterImage',
    'footerLeft',
    'footerLeftImage',
    'footerRight',
    'footerRightImage',
    'headerCenter',
    'headerCenterImage',
    'headerLeft',
    'headerLeftImage',
    'headerRight',
    'headerRightImage',
    'margin',
    'orientation',
    'pageOrder',
    'pageRange',
    'paperSize',
    'qualityFactor',
    'repeatColumnEnd',
    'repeatColumnStart',
    'repeatRowEnd',
    'repeatRowStart',
    'rowEnd',
    'rowStart',
    'showBorder',
    'showColumnHeader',
    'showGridLine',
    'showRowHeader',
    'useMax',
    'watermark',
    'zoomFactor'
  ];

  function restrainToSupportedAttributes(printInfo) {
    let ret = {};

    attributes.forEach(attribute => {
      if (attribute in printInfo) {
        if (attribute === "paperSize") {
          ret.paperSize = {
            kind: GC.Spread.Sheets.Print.PaperKind[printInfo.paperSize().kind()],
            width: printInfo.paperSize().width(),
            height: printInfo.paperSize().height()
          };
        } else {
          ret[attribute] = printInfo[attribute]();
        }
      }
    });
    return ret;
  }

  function makePrintInfoAttribute(printInfo, attribute) {
    let ret = null;
    if (printInfo[attribute] === null) {
      ret = undefined;
    } else {
      switch (attribute) {
        case 'paperSize':
          {
            ret = new GC.Spread.Sheets.Print.PaperSize();
            if (('kind' in printInfo[attribute]) && (printInfo[attribute].kind != "custom")) {
              if (printInfo[attribute].kind in GC.Spread.Sheets.Print.PaperKind) {
                ret = new GC.Spread.Sheets.Print.PaperSize(GC.Spread.Sheets.Print.PaperKind[printInfo[attribute].kind]);
              }
            }
            else if (('width' in printInfo[attribute]) && ('height' in printInfo[attribute])) {
              ret = new GC.Spread.Sheets.Print.PaperSize(printInfo[attribute].width, printInfo[attribute].height);
            }
          }
          break;

        default:
          ret = printInfo[attribute];
          break;
      }
    }
    return ret;
  }

  function makePrintInfo(printInfo) {
    let ret = new GC.Spread.Sheets.Print.PrintInfo();

    let keys = Object.keys(printInfo);

    keys.forEach(attribute => {
      if (attributes.find(validAttribute => {
        return validAttribute === attribute;
      }) != undefined) {
        ret[attribute](makePrintInfoAttribute(printInfo, attribute));
      }
    });
    return ret;
  }

  Utils.addCommand('print', function (params) {
    let sheetIndex = Utils.resolveSheetIndex(params.sheetIndex);

    // we need to set a time out to let the 4D code get out of the function
    // other wise the printing dialog is non responding
    setTimeout(()=>{Utils.spread.print(sheetIndex);},500);
  });

  Utils.addCommand('set-print-info', function (params) {
    let instance = Utils.resolveSheet(params.sheetIndex);

    if (instance != null) {
      if (('printInfo' in params) && (typeof (params.printInfo) === 'object')) {
        let printInfo = makePrintInfo(params.printInfo);
        instance.printInfo(printInfo);
      }
    }
  });

  Utils.addCommand('get-print-info', function (params) {
    let ret = null;
    let instance = Utils.resolveSheet(params.sheetIndex);

    if (instance != null) {
      let printInfo = instance.printInfo();
      ret = restrainToSupportedAttributes(printInfo);
    }
    return ret;
  });

  Utils.addCommand('set-show-print-lines', function (params) {
    let instance = Utils.resolveSheet(params.sheetIndex);

    if (instance != null) {
      if (('visible' in params) && (typeof (params.visible) === 'boolean')) {
        instance.isPrintLineVisible(params.visible);
        if (useRibbon) {
          designer.refresh();
        }
      }
    }
  });

  Utils.addCommand('get-show-print-lines', function (params) {
    let instance = Utils.resolveSheet(params.sheetIndex);
    let ret = false;

    if (instance != null) {
      ret = instance.isPrintLineVisible();
    }
    return ({ result: ret });
  });

})();
