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

Utils.addCommand('import-json', function (params) {
  Utils.currentDocument = {};
  let doc = params.doc

  if (doc.version) Utils.currentDocument.d4Version = doc.version;
  if (doc.dateCreation) Utils.currentDocument.d4DateCreation = doc.dateCreation;
  if (doc.dateModified) Utils.currentDocument.d4DateModified = doc.dateModified;
  if (doc.meta) Utils.currentDocument.d4Meta = doc.meta;

  try {

    if (useRibbon) {
      Utils.spread.fromJSON(doc.spreadJS);
      designer.refresh();
    } else if (useToolbar) {
      importJson(doc.spreadJS);
      Utils.initEvents();
      Utils.initCommands();
    } else {
      Utils.spread.fromJSON(doc.spreadJS);
    }

    if (params.new && (vp_localizedFolder != '')) {
      let sheetName = GC.Spread.Sheets.SR[vp_localizedFolder.substring(0, 2)].SHEET_NAME;
      sheetName += '1';
      Utils.currentSheet.name(sheetName);
    }


  } catch (e) { }

  //vp_resetOptimizer();
});

Utils.addCommand('export-json', function (params) {
  let doc = {};
  let document = Utils.currentDocument;

  if (document.d4Version) doc.version = document.d4Version;
  if (document.d4DateCreation) doc.dateCreation = document.d4DateCreation;
  if (document.d4DateModified) doc.dateModified = document.d4DateModified;
  if (document.d4Meta) doc.meta = document.d4Meta;

  let serializationOption = {includeBindingSource:true};

  if (("valuesOnly" in params) && (typeof params.valuesOnly == "boolean"))
    serializationOption.ignoreFormula = params.valuesOnly;

  if (("includeBindingSource" in params) && (typeof params.includeBindingSource == "boolean"))
    serializationOption.includeBindingSource = params.includeBindingSource;

  doc.spreadJS = Utils.spread.toJSON(serializationOption);

  let storeIncludeFormatInfo = true;

  if (("includeFormatInfo" in params) && (typeof params.includeFormatInfo == "boolean"))
    storeIncludeFormatInfo = params.includeFormatInfo;

  if (storeIncludeFormatInfo) {
    Utils.addFormatedText(doc.spreadJS);
  }

  return doc;
});

Utils.addCommand('export-excel', function (params) {
  let serializationOption = {};
  if (params["valuesOnly"] != null)
    serializationOption.ignoreFormula = params.valuesOnly;

  if (params["includeBindingSource"] != null)
    serializationOption.includeBindingSource = params.includeBindingSource;

  let json = Utils.spread.toJSON(serializationOption);

  let options = {};
  if (params["password"] != null)
    options.password = params.password;

   var excelIO = new GC.Spread.Excel.IO();
  excelIO.save(json,
    function (blob) {
      var reader = new FileReader();
      reader.onloadend = function () {
        params.content = reader.result.substr(reader.result.indexOf(',') + 1);
        $4d._vp_callback(params);
      }
      reader.readAsDataURL(blob);
    },
    function (e) {
      params.error = e;
      $4d._vp_callback(params);
    },
    options);
});

Utils.addCommand('import-excel', function (params) {
  var blob = Utils.b64ToBlob(params.content);

  let options = {};
  if (params["password"] != null)
    options.password = params.password;

  var excelIO = new GC.Spread.Excel.IO();
  excelIO.open(blob,
    function (json) {

      Utils.spread.suspendPaint();

      try {
        if (useRibbon) {
          Utils.spread.fromJSON(json);
          designer.refresh();
        }
        else if (useToolbar) {
          importJson(json);
        } else {
          Utils.spread.fromJSON(json);
        }
      } catch (e) {
        params.error = e;
        $4d._vp_callback(params);
      }

      Utils.spread.resumePaint();

      $4d._vp_callback(params);
    },
    function (e) {
      params.error = e;
      $4d._vp_callback(params);
    },
    options);
});

Utils.addCommand('export-csv', function (params) {
  let doc = {};

  if ('range' in params) {
    if (('ranges' in params.range) && (params.range.ranges.constructor === Array)) {
      let instance = Utils.getFirstRange(params.range.ranges);
      if (instance != null) {

        let rowDelimiter = "\r\n";
        if ('rowDelimiter' in params && typeof params.rowDelimiter === 'string') {
          rowDelimiter = params.rowDelimiter;
        }

        let columnDelimiter = ",";
        if ('columnDelimiter' in params && typeof params.columnDelimiter === 'string') {
          columnDelimiter = params.columnDelimiter;
        }

        doc.csv = instance.sheet.getCsv(
          instance.row,
          instance.column,
          instance.rowCount,
          instance.columnCount,
          rowDelimiter,
          columnDelimiter);
      }
    }
  }
  return doc;
});

Utils.addCommand('import-csv', function (params) {

  let instance = null;

  if (('range' in params) && ('ranges' in params.range) && (params.range.ranges.constructor === Array)) {
    instance = Utils.getFirstRange(params.range.ranges);
  } else {
    instance = Utils.getFirstRange([{ sheetIndex: -1, row: 0, column: 0 }]);
  }

  let rowDelimiter = "\r\n";
  if ('rowDelimiter' in params && typeof params.rowDelimiter === 'string') {
    rowDelimiter = params.rowDelimiter;
  }

  let columnDelimiter = ",";
  if ('columnDelimiter' in params && typeof params.columnDelimiter === 'string') {
    columnDelimiter = params.columnDelimiter;
  }

  instance.sheet.setCsv(
    instance.row,
    instance.column,
    params.csv,
    rowDelimiter,
    columnDelimiter);

});


Utils.addCommand('export-pdf', function (params) {
  var sheetIndex = Utils.resolveSheetIndex(params.sheetIndex);

  var options = null;
  if (('pdfOptions' in params) && (typeof (params.pdfOptions) === 'object')) {
    options = params.pdfOptions;
  }

  Utils.computePdfFonts(sheetIndex, function () {

    Utils.spread.savePDF(function (blob) {
      var reader = new FileReader();
      reader.onloadend = function () {
        params.content = reader.result.substr(reader.result.indexOf(',') + 1);
        $4d._vp_callback(params);
      }
      reader.readAsDataURL(blob);
    },
      function (e) {
        params.error = e;
        $4d._vp_callback(params);
      },
      options,
      sheetIndex);
  });
});

Utils.addCommand('register-pdf-fonts', function (params) {

  params.fonts.forEach(element => {
    if (element.font === null) {
      GC.Spread.Sheets.PDF.PDFFontsManager.registerFont(element.name);
    } else {
      GC.Spread.Sheets.PDF.PDFFontsManager.registerFont(element.name, element.font);
    }
  });

});


Utils.computePdfFonts = function (sheetIndex, callback) {

  let json = Utils.spread.toJSON();
  let fonts = {};

  function getFontFromHeaderOrFooter(sheet, name) {
    if (name in sheet.printInfo) {
      let txt = sheet.printInfo[name];
      let i = 0;
      let bold = false;
      let italic = false;
      let font = '';

      for (i = 0; i < txt.length; i++) {
        if (txt[i] === '&') {
          if (i + 1 < txt.length) {
            i++;
            if (txt[i] === '"') {
              // font name
              for (++i; (txt[i] != '"') && (i < txt.length); i++) {
                font += txt[i];
              }
            } else if (txt[i] == 'I') {
              italic = true;
            } else if (txt[i] == 'B') {
              bold = true;
            }
          }
        }
      }
      if (font != '') {
        fonts[(bold ? 'bold ' : '') + (italic ? 'italic ' : '') + '20pt ' + font] = "";
      }
    }
  }

  for (var sheetName in json.sheets) {
    let sheet = json.sheets[sheetName];
    if ((sheetIndex == null) || (sheet.index == sheetIndex)) {
      if ('printInfo' in sheet) {
        getFontFromHeaderOrFooter(sheet, 'footerCenter');
        getFontFromHeaderOrFooter(sheet, 'footerLeft');
        getFontFromHeaderOrFooter(sheet, 'footerRight');
        getFontFromHeaderOrFooter(sheet, 'headerCenter');
        getFontFromHeaderOrFooter(sheet, 'headerLeft');
        getFontFromHeaderOrFooter(sheet, 'headerRight');
      }
      if (('data' in sheet) && ('dataTable' in sheet.data)) {
        let dataTable = sheet.data.dataTable;
        let liveSheet = Utils.spread.getSheet(sheet.index);
        for (var row in dataTable) {
          for (var column in dataTable[row]) {
            let liveCell = liveSheet.getCell(Number(row), Number(column));
            fonts[liveCell.font()] = "";
          }
        }
      }
    }
  }

  $4d._vp_computeFonts(fonts, function (toEmbed) {
    for (var font in toEmbed) {
      GC.Spread.Sheets.PDF.PDFFontsManager.registerFont(font, toEmbed[font]);
    }
    callback();
  });
}

// parse through all the cells of the document and add the formated values
// to allow to convert the document to SVG without messing with computing them outside SpreadJS
Utils.addFormatedText = function (json) {

  let formatterPool = {};
  let generalDateFormatter = null;
  let styleSheetPoolFormat = {};
  let cell = {};
  let row = "";
  let column = "";
  let sheet = null;
  let sheetIndex = 0;
  let longDatePattern = GC.Spread.Common.CultureManager.getCultureInfo().DateTimeFormat.defaultDatePattern;
  let shortDatePattern = GC.Spread.Common.CultureManager.getCultureInfo().DateTimeFormat.shortDatePattern;

// _WordWrapHelper
var _getWrapInfo = GC.Spread.Sheets.q.un;
var _SJSGetWordWrapInfo = GC.Spread.Sheets.q.Ht;
var _getCtx = GC.Spread.Sheets.q.J;

var _getFontHeight = GC.Spread.Sheets.util.vt;
var _getFontObject = GC.Spread.Sheets.util._0;
var _measureTextWidth = GC.Spread.Sheets.util.Mt;
var _setContextFont = GC.Spread.Sheets.util.bt;


  let wordWrap = null;
  let font = null;
  let textOrientation = null;
  let rowHeight = 20;
  let columnWidth = 60;
  let ctx = _getCtx();
  let cellPadding = null;
  let isVerticalText = null;
  let textIndent = null;
  let vAlign = null;


  function _getFormatInfo(format) {

    // use a pool for formatter to avoid to create a new formatter for the same format
    if (formatterPool[format] == undefined) {
      formatterPool[format] = new GC.Spread.Formatter.GeneralFormatter(format);
    }

    let formatter = formatterPool[format];

    let val;
    if ((typeof (cell.value) === 'string') && (cell.value.startsWith("/OADate(")) && (cell.value.endsWith(")/"))) {
      val = Utils.spread.getSheet(sheetIndex).getCell(row, column).value();
      if (format === 'General') {
        if (generalDateFormatter == null) {
          let culture = GC.Spread.Common.CultureManager.getCultureInfo();
          generalDateFormatter = new GC.Spread.Formatter.GeneralFormatter(culture.DateTimeFormat.shortDatePattern);
        }
        formatter = generalDateFormatter;
      }
    } else {
      val = cell.value;
    }

    let formatInfo = {};
    let formated = formatter.format(val, formatInfo);
    let result = {};

    if (typeof (formatInfo) == 'object') {
      if ('conditionalForeColor' in formatInfo) {
        result.color = formatInfo.conditionalForeColor;
      }
      if (('content' in formatInfo) && (formatInfo.content.some(element => {
        return element.type === 'fillingChar';
      }))) {
        result.content = formatInfo.content;
      } else {
        result.text = formated;
      }
    } else {
      result.text = formated;
    }
    return result;
  }

  function _getWordWrapInfo() {

    let text;

    if (('style' in cell) && ('formatInfo' in cell.style) && ('text' in cell.style.formatInfo)) {
      text = cell.style.formatInfo.text;
    } else {
      text = cell.value.toString();
    }
    rowHeight = 20;
    if (sheet.rows != null && sheet.rows[row] != null && 'size' in sheet.rows[row]) {
      rowHeight = sheet.rows[row].size;
    }

    if ('spans' in sheet) {
      for (let span in sheet.spans) {
        if (sheet.spans[span].row == row && sheet.spans[span].col == column) {
          for (let index = sheet.spans[span].row + 1; index <= sheet.spans[span].row + sheet.spans[span].rowCount - 1; ++index) {
            if (sheet.rows != null && sheet.rows[index] != null && 'size' in sheet.rows[index]) {
              rowHeight = rowHeight + sheet.rows[index].size;
            }
            else {
              rowHeight = rowHeight + 20;
            }
          }
        }
      }
    }

    columnWidth = 60;
    if (sheet.columns != null && sheet.columns[column] != null && 'size' in sheet.columns[column]) {
      columnWidth = sheet.columns[column].size;
    }

    if ('spans' in sheet) {
      for (let span in sheet.spans) {
        if (sheet.spans[span].row == row && sheet.spans[span].col == column) {
          for (let index = sheet.spans[span].col + 1; index <= sheet.spans[span].col + sheet.spans[span].colCount - 1; ++index) {
            if (sheet.columns != null && sheet.columns[index] != null && 'size' in sheet.columns[index]) {
              columnWidth = columnWidth + sheet.columns[index].size;
            }
            else {
              columnWidth = columnWidth + 60;
            }
          }
        }
      }
    }

    if (cellPadding != null) {
      var paddingArray = cellPadding.split(" ");
      var topPadding = 0;
      var bottomPadding = 0;
      var leftPadding = 0;
      var rightPadding = 0;

	  if (paddingArray.length == 1) {
		  topPadding = parseInt(cellPadding);
		  bottomPadding = parseInt(cellPadding);
		  leftPadding = parseInt(cellPadding);
		  rightPadding = parseInt(cellPadding);
	  }
	  else {
		  topPadding = parseInt(paddingArray[0]);
		  bottomPadding = parseInt(paddingArray[2]);
		  
		  leftPadding = parseInt(paddingArray[3]);
		  rightPadding = parseInt(paddingArray[1]);
	  }
	  
      rowHeight = rowHeight - topPadding - bottomPadding;
      columnWidth = columnWidth - leftPadding - rightPadding;
    }

    if (textIndent != null) {
      if (isVerticalText) {
        if (vAlign != 1) {
          rowHeight -= textIndent * 8;
        }
      }
      else {
        columnWidth -= textIndent * 8;
      }
    }

    let wordWrapWidth;

    if (font == null) {
      font = "11pt Calibri"
    }

    let fontObj = _getFontObject(font);

    let textHeight = _convertUnitToPx(fontObj.fontSize);

    let lineHeight = _getFontHeight(font);

    if (textOrientation != null && textOrientation != 0) {
      let textOrientationRadian = textOrientation * Math.PI / 180;

      let abstextOrientationRadian = Math.abs(textOrientationRadian);

      let lineSizeCosAdj = (textHeight / 2) * Math.cos(abstextOrientationRadian);

      let sintextOrientation = Math.sin(abstextOrientationRadian);

      let costextOrientation = Math.cos(abstextOrientationRadian);

      //wordWrapWidth = _getRotateTextWordWrapWidth(row, column, sintextOrientation, costextOrientation, text, font, rowHeight);
      wordWrapWidth = (rowHeight - 4 - 2 * lineSizeCosAdj) / sintextOrientation;
    }
    else if (isVerticalText == true) {
      wordWrapWidth = rowHeight - 3;
    }
    else {
      wordWrapWidth = columnWidth - 3;
    }

    _setContextFont(ctx, font);

    if (wordWrapWidth <= isVerticalText ? text.length * lineHeight : _measureTextWidth(ctx, ctx.font, text)) {
      let lines;

      let richText = [{
        style: {
          font: font
        },
        text: text
      }];

      if (isVerticalText == true) {
        lines = _SJSGetWordWrapInfo(text, wordWrapWidth, font, richText, true, ctx);

        let i = 0;
        let j = 0;
        let w = 0;

        while (i < text.length) {

          if (w < lines.length && j == lines[w].text.length) {

            if (text[i] == ' ') {
              if (w + 1 < lines.length) {
                if (lines[w + 1].text != '' && lines[w + 1].text[0] != ' ') {
                  lines[w].text += ' ';
                }
                else {
                  i--;
                }
              }
            }
            else {
              i--;
            }
            w++;
            j = 0;
          }
          else {
            j++;
          }
          i++;
        }


      } else {
        lines = _getWrapInfo(text, wordWrapWidth, font, false, ctx);
      }

      let result = {};

      result.lines = [];

      result.lineHeight = lineHeight;

      let biggestLineWidth = 0;

      for (let line in lines) {
        result.lines[line] = { text: lines[line], width: _measureTextWidth(ctx, ctx.font, lines[line]) }
        if (result.lines[line].width > biggestLineWidth) {
          biggestLineWidth = result.lines[line].width;
        }
      }

      result.boxWidth = biggestLineWidth;

      if (cell.style === undefined) {
        cell.style = {};
      }

      cell.style.wordWrapInfo = result;
    }
  }

  function _handleStyleSheetFormatter(stylesheetName, lookAtSheetLevel) {
    let aFormatter = null;

    function __resolveStyleSheetByName(name) {

      function ___resolveStyleSheet(styleSheet) {
        styleSheet.some(style => {
          if (style.name === name) {
            if ('formatter' in style) {
              aFormatter = style.formatter;
            } else if ('parentName' in style) {
              aFormatter = __resolveStyleSheetByName(style.parentName)
            }
            return true;
          } else {
            return false;
          }
        });
      }

      if (lookAtSheetLevel && ('namedStyles' in sheet) && (sheet.namedStyles.constructor == Array)) {
        ___resolveStyleSheet(sheet.namedStyles);
      }

      if ((aFormatter == null) && ('namedStyles' in json) && (json.namedStyles.constructor == Array)) {
        lookAtSheetLevel = false;
        ___resolveStyleSheet(json.namedStyles);
      }
    }

    // use a pool of format per stylesheet to avoid to compute the format for each stylesheet
    if (stylesheetName in styleSheetPoolFormat) {
      aFormatter = styleSheetPoolFormat[stylesheetName];
    } else {
      __resolveStyleSheetByName(stylesheetName);
      styleSheetPoolFormat[stylesheetName] = aFormatter;
    }
    return aFormatter;
  }

  function _handleStyleSheet(stylesheetName, lookAtSheetLevel, key) {
    let aValue = null;

    function __resolveStyleSheetByName(name) {

      function ___resolveStyleSheet(styleSheet) {
        styleSheet.some(style => {
          if (style.name === name) {
            if (key in style) {
              aValue = style[key];
            } else if ('parentName' in style) {
              aValue = __resolveStyleSheetByName(style.parentName)
            }
            return true;
          } else {
            return false;
          }
        });
      }

      if (lookAtSheetLevel && ('namedStyles' in sheet) && (sheet.namedStyles.constructor == Array)) {
        ___resolveStyleSheet(sheet.namedStyles);
      }

      if ((aValue == null) && ('namedStyles' in json) && (json.namedStyles.constructor == Array)) {
        lookAtSheetLevel = false;
        ___resolveStyleSheet(json.namedStyles);
      }
    }


    __resolveStyleSheetByName(stylesheetName);

    return aValue;
  }

  function _getRowColumnFormatter(name, value) {
    let aFormatter = null;
    if (name in sheet.data) {
      if (sheet.data[name].constructor == Array) {
        if (value < sheet.data[name].length) {
          let aStyle = sheet.data[name][value];
          if (typeof aStyle === 'object') {
            if ('style' in aStyle) {
              if (typeof aStyle.style === 'string') {
                aFormatter = _handleStyleSheetFormatter(aStyle.style, true);
              } else if (typeof aStyle.style == 'object') {
                if ('formatter' in aStyle.style) {
                  aFormatter = aStyle.style.formatter;
                }
              }
            }
          }
        }
      }
    }
    return aFormatter;
  }

  function _getRowColumnPropertie(name, value, key) {
    let aPropertie = null;
    if (name in sheet.data) {
      if (sheet.data[name].constructor == Array) {
        if (value < sheet.data[name].length) {
          let aStyle = sheet.data[name][value];
          if (typeof aStyle === 'object') {
            if ('style' in aStyle) {
              if (typeof aStyle.style === 'string') {
                aPropertie = _handleStyleSheet(aStyle.style, true, key);
              } else if (typeof aStyle.style == 'object') {
                if (key in aStyle.style) {
                  aPropertie = aStyle.style[key];
                }
              }
            }
          }
        }
      }
    }
    return aPropertie;
  }

  function _getCellPropertie(cell, key) {
    let aPropertie = null;

    if (key in cell.style) {
      aPropertie = cell.style[key];
    } else if (('name' in cell.style) && (typeof cell.style.name === 'string') && (cell.style.name.length > 0)) {
      // stylesheet name can be in "name" attribute of the style object
      aPropertie = _handleStyleSheet(cell.style.name, true, key);
    } else if (('parentName' in cell.style) && (typeof cell.style.parentName === 'string') && (cell.style.parentName.length > 0)) {
      // stylesheet name can be also in "parentName" attribute of the style object
      aPropertie = _handleStyleSheet(cell.style.parentName, true, key);
    }

    return aPropertie;
  }

  function _getPriorityProp(cellProp, columnProp, rowProp, defaultProp) {
    let aPropertie = null;

    if ((cellProp != null) && (aPropertie == null)) {
      aPropertie = cellProp;
    }
    if ((columnProp != null) && (aPropertie == null)) {
      aPropertie = columnProp;
    }
    if ((rowProp != null) && (aPropertie == null)) {
      aPropertie = rowProp;
    }
    if ((defaultProp != null) && (aPropertie == null)) {
      aPropertie = defaultProp;
    }

    return aPropertie;
  }

  function _noFormatInfo() {
    return !(('style' in cell) && (typeof cell.style == 'object') && ('formatInfo' in cell.style));
  }

  function _createFormatInfo(aFormatter) {
    if (!('style' in cell)) {
      cell.style = {};
    }
    cell.style.formatInfo = _getFormatInfo(aFormatter);
  }

  function _convertUnitToPx(fontSize) {
    let converted;

    if (fontSize.includes('%')) {
      converted = parseFloat(fontSize) / 100 * 10;
    } else if (fontSize.includes('px')) {
      converted = parseFloat(fontSize);
    } else if (fontSize.includes('cm')) {
      converted = parseFloat(fontSize) / 2.54 * 72 * (4 / 3);
    } else if (fontSize.includes('mm')) {
      converted = parseFloat(fontSize) / 10 / 2.54 * 72 * (4 / 3);
    } else if (fontSize.includes('in')) {
      converted = parseFloat(fontSize) * 72 * (4 / 3);
    } else if (fontSize.includes('pt')) {
      converted = parseFloat(fontSize) * (4 / 3);
    } else if (fontSize.includes('pc')) {
      converted = parseFloat(fontSize) * 12 * (4 / 3);
    } else {
      converted = 14.6664;
    }

    return converted;
  }

  for (let sheetName in json.sheets) {
    sheet = json.sheets[sheetName];
    styleSheetPoolFormat = {};
    if (('data' in sheet) && ('dataTable' in sheet.data)) {

      let defaultFormatter = null;

      let defaultWordWrap = null;
      let defaultFont = null;
      let defaultTextOrientation = null;
      let defaultCellPadding = null;
      let defaultIsVerticalText = null;
      let defaultTextIndent = null;
      let defaultVAlign = null;

      if (('defaultDataNode' in sheet.data) && ('style' in sheet.data.defaultDataNode))
        if (typeof sheet.data.defaultDataNode.style == 'string') {
          defaultFormatter = _handleStyleSheetFormatter(sheet.data.defaultDataNode.style, false);

          defaultWordWrap = _handleStyleSheet(sheet.data.defaultDataNode.style, false, 'wordWrap');
          defaultFont = _handleStyleSheet(sheet.data.defaultDataNode.style, false, 'font');
          defaultTextOrientation = _handleStyleSheet(sheet.data.defaultDataNode.style, false, 'textOrientation');
          defaultIsVerticalText = _handleStyleSheet(sheet.data.defaultDataNode.style, false, 'isVerticalText');
          defaultTextIndent = _handleStyleSheet(sheet.data.defaultDataNode.style.false, 'textIndent');
          defaultVAlign = _handleStyleSheet(sheet.data.defaultDataNode.style.false, 'vAlign');
        } else if (typeof sheet.data.defaultDataNode.style == 'object') {
          if ('formatter' in sheet.data.defaultDataNode.style) {
            defaultFormatter = sheet.data.defaultDataNode.style.formatter;
          }

          if ('wordWrap' in sheet.data.defaultDataNode.style) {
            defaultWordWrap = sheet.data.defaultDataNode.style.wordWrap;
          }
          if ('font' in sheet.data.defaultDataNode.style) {
            defaultFont = sheet.data.defaultDataNode.style.font;
          }
          if ('textOrientation' in sheet.data.defaultDataNode.style) {
            defaultTextOrientation = sheet.data.defaultDataNode.style.textOrientation;
          }
          if ('cellPadding' in sheet.data.defaultDataNode.style) {
            defaultCellPadding = sheet.data.defaultCellPadding;
          }
          if ('isVerticalText' in sheet.data.defaultDataNode.style) {
            defaultIsVerticalText = sheet.data.defaultDataNode.isVerticalText;
          }
          if ('textIndent' in sheet.data.defaultDataNode.style) {
            defaultTextIndent = sheet.data.defaultDataNode.textIndent;
          }
          if ('vAlign' in sheet.data.defaultDataNode.style) {
            defaultVAlign = sheet.data.defaultDataNode.vAlign;
          }
        }

      let dataTable = sheet.data.dataTable;
      for (row in dataTable) {

        let rowFormatter = _getRowColumnFormatter('rowDataArray', row);

        let rowWordWrap = _getRowColumnPropertie('rowDataArray', row, 'wordWrap');
        let rowFont = _getRowColumnPropertie('rowDataArray', row, 'font');
        let rowTextOrientation = _getRowColumnPropertie('rowDataArray', row, 'textOrientation');
        let rowCellPadding = _getRowColumnPropertie('rowDataArray', row, 'cellPadding');
        let rowIsVerticalText = _getRowColumnPropertie('rowDataArray', row, 'isVerticalText');
        let rowTextIndent = _getRowColumnPropertie('rowDataArray', row, 'textIndent');
        let rowVAlign = _getRowColumnPropertie('rowDataArray', row, 'vAlign');

        for (column in dataTable[row]) {

          let columnFormatter = _getRowColumnFormatter('columnDataArray', column);

          let columnWordWrap = _getRowColumnPropertie('columnDataArray', column, 'wordWrap');
          let columnFont = _getRowColumnPropertie('columnDataArray', column, 'font');
          let columnTextOrientation = _getRowColumnPropertie('columnDataArray', column, 'textOrientation');
          let columnCellPadding = _getRowColumnPropertie('columnDataArray', column, 'cellPadding');
          let columnIsVerticalText = _getRowColumnPropertie('columnDataArray', column, 'isVerticalText');
          let columnTextIndent = _getRowColumnPropertie('columnDataArray', column, 'textIndent');
          let columnVAlign = _getRowColumnPropertie('columnDataArray', column, 'vAlign');

          cell = dataTable[row][column];
          if ('value' in cell) {

            let cellWordWrap = null;
            let cellFont = null;
            let cellTextOrientation = null;
            let cellCellPadding = null;
            let cellIsVerticalText = null;
            let cellTextIndent = null;
            let cellVAlign = null;

            wordWrap = null;
            font = null;
            textOrientation = null;
            cellPadding = null;
            isVerticalText = null;
            textIndent = null;
            vAlign = null;

            if ('style' in cell) {
              let formatter;
              if (typeof cell.style == 'object') {

                cellWordWrap = _getCellPropertie(cell, 'wordWrap');
                cellFont = _getCellPropertie(cell, 'font');
                cellTextOrientation = _getCellPropertie(cell, 'textOrientation');
                cellCellPadding = _getCellPropertie(cell, 'cellPadding');
                cellIsVerticalText = _getCellPropertie(cell, 'isVerticalText');
                cellTextIndent = _getCellPropertie(cell, 'textIndent');
                cellVAlign = _getCellPropertie(cell, 'vAlign');

                if ('formatter' in cell.style) {
                  cell.style.formatInfo = _getFormatInfo(cell.style.formatter);
                } else if (('autoFormatter' in cell.style)
                  && (typeof cell.style.autoFormatter == 'object')
                  && ('formatCached' in cell.style.autoFormatter)) {
                  cell.style.formatInfo = _getFormatInfo(cell.style.autoFormatter.formatCached);
                } else if (('name' in cell.style) && (typeof cell.style.name === 'string') && (cell.style.name.length > 0)) {
                  // stylesheet name can be in "name" attribute of the style object
                  formatter = _handleStyleSheetFormatter(cell.style.name, true);
                  if (formatter != null) {
                    cell.style.formatInfo = _getFormatInfo(formatter);
                  }
                } else if (('parentName' in cell.style) && (typeof cell.style.parentName === 'string') && (cell.style.parentName.length > 0)) {
                  // stylesheet name can be also in "parentName" attribute of the style object
                  formatter = _handleStyleSheetFormatter(cell.style.parentName, true);
                  if (formatter != null) {
                    cell.style.formatInfo = _getFormatInfo(formatter);
                  }
                }
              } else if (typeof cell.style == 'string') {
                // this is a very particular case where the style is not an object 
                // but a string that contains the name of the stylesheet
                let styleName = cell.style
                cell.style = { 'parentName': styleName };
                formatter = _handleStyleSheetFormatter(styleName, true);
                if (formatter != null) {
                  cell.style.formatInfo = _getFormatInfo(formatter);
                }

                cellWordWrap = _handleStyleSheet(styleName, true, 'wordWrap');
                cellFont = _handleStyleSheet(styleName, true, 'font');
                cellTextOrientation = _handleStyleSheet(styleName, true, 'textOrientation');
                cellCellPadding = _handleStyleSheet(styleName, true, 'cellPadding');
                cellIsVerticalText = _handleStyleSheet(styleName, true, 'isVerticalText');
                cellTextIndent = _handleStyleSheet(styleName, true, 'textIndent');
                cellVAlign = _handleStyleSheet(styleName, true, 'vAlign');
              }
            }


            // apply column formatter if any and if no previous formatting has been applied
            if ((columnFormatter != null) && _noFormatInfo()) {
              _createFormatInfo(columnFormatter);
            }

            // apply row formatter if any and if no previous formatting has been applied
            if ((rowFormatter != null) && _noFormatInfo()) {
              _createFormatInfo(rowFormatter);
            }

            // apply default formatter if any and if no previous formatting has been applied
            if ((defaultFormatter != null) && _noFormatInfo()) {
              _createFormatInfo(defaultFormatter);
            }

            // apply default date formatting
            if (_noFormatInfo()
              && ((typeof (cell.value) === 'string')
                && (cell.value.startsWith("/OADate("))
                && (cell.value.endsWith(")/")))) {
              if (cell.value.indexOf(".") > -1) {
                _createFormatInfo(longDatePattern);
              } else {
                _createFormatInfo(shortDatePattern);
              }
            }

            wordWrap = _getPriorityProp(cellWordWrap, columnWordWrap, rowWordWrap, defaultWordWrap);
            font = _getPriorityProp(cellFont, columnFont, rowFont, defaultFont);
            textOrientation = _getPriorityProp(cellTextOrientation, columnTextOrientation, rowTextOrientation, defaultTextOrientation);
            cellPadding = _getPriorityProp(cellCellPadding, columnCellPadding, rowCellPadding, defaultCellPadding);
            isVerticalText = _getPriorityProp(cellIsVerticalText, columnIsVerticalText, rowIsVerticalText, defaultIsVerticalText);
            textIndent = _getPriorityProp(cellTextIndent, columnTextIndent, rowTextIndent, defaultTextIndent);
            vAlign = _getPriorityProp(cellVAlign, columnVAlign, rowVAlign, defaultVAlign);

            if ((wordWrap != null) && (wordWrap == true)) {
              _getWordWrapInfo();
            }

          }
        }
      }
    }
    sheetIndex++;
  }
}