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

Utils.addCommand('move-cells', function (params) {

	if (('from' in params) && (params.from.constructor === Array)
		&& ('to' in params) && (params.to.constructor === Array)) {

		let src = Utils.getFirstRange(params.from);
		let srcRange = [new GC.Spread.Sheets.Range(src.row, src.column, src.rowCount, src.columnCount)];

		let dest = Utils.getFirstRange(params.to);
		let destRange = [new GC.Spread.Sheets.Range(dest.row, dest.column, src.rowCount, src.columnCount)];

		let isCutting = true;
		let pasteOptions = 0;

		if (('options' in params) && (typeof (params.options) == "object")) {
			if (('copy' in params.options) && (typeof (params.options.copy) == "boolean")) {
				isCutting = !params.options.copy;
			}
			if (('pasteOptions' in params.options) && (typeof (params.options.pasteOptions) == "number")) {
				pasteOptions = params.options.pasteOptions;
			}
		}

		Utils.spread.resumeCalcService(false);

		spread.commandManager().execute({
			cmd: "clipboardPaste",
			sheetName: dest.sheet.name(), fromSheet: src.sheet, fromRanges: srcRange,
			pastedRanges: destRange, isCutting: isCutting, clipboardText: "",
			pasteOption: pasteOptions
		});

		Utils.spread.suspendCalcService(false);
	}

});

Utils.addCommand('copy-cells', function (params) {

	let ret = null;

	if (('from' in params) && (params.from.constructor === Array)) {

		let src = Utils.getFirstRange(params.from);
		let srcRange = [new GC.Spread.Sheets.Range(src.row, src.column, src.rowCount, src.columnCount)];

		let destRange = [new GC.Spread.Sheets.Range(src.row, src.column, src.rowCount, src.columnCount)];

		let isCutting = false;
		let copyOptions = 0;

		if (('options' in params) && (typeof (params.options) == "object")) {
			if (('copy' in params.options) && (typeof (params.options.copy) == "boolean")) {
				isCutting = !params.options.copy;
			}
			if (('copyOptions' in params.options) && (typeof (params.options.copyOptions) == "number")) {
				copyOptions = params.options.copyOptions;
			}
		}

		let activeSheet = Utils.spread.getActiveSheet();
		let activeSheetName = activeSheet.name();
		Utils.spread.addSheet(0, new GC.Spread.Sheets.Worksheet("__tmp__"));
		let sheet = Utils.spread.getSheet(0);
		sheet.visible(false);
		sheet.setRowCount(src.sheet.getRowCount());
		sheet.setColumnCount(src.sheet.getColumnCount());

		Utils.spread.resumeCalcService(false);

		spread.commandManager().execute({
			cmd: "clipboardPaste",
			sheetName: sheet.name(), fromSheet: src.sheet, fromRanges: srcRange,
			pastedRanges: destRange, isCutting: isCutting, clipboardText: "",
			pasteOption: copyOptions
		});

		let savedSheet = sheet.toJSON();
		
		Utils.spread.suspendCalcService(false);

		ret = { sheet: savedSheet, src: { row: src.row, column: src.column, rowCount: src.rowCount, columnCount: src.columnCount } };
		Utils.spread.removeSheet(0);
		Utils.spread.setActiveSheet(activeSheetName);
		Utils.needToUpdateFormulaBar = true;
	}
	return ret;
});

Utils.addCommand('paste-cells', function (params) {

	if (('dest' in params) && (params.dest.constructor === Array)) {

		let dest = Utils.getFirstRange(params.dest);

		if ((('obj' in params) && (typeof (params.obj) == "object"))
			&& (('src' in params.obj) && (typeof (params.obj.src) == "object"))
			&& (('sheet' in params.obj) && (typeof (params.obj.sheet) == "object"))) {

			let src = params.obj.src;
			let srcRange = [new GC.Spread.Sheets.Range(src.row, src.column, src.rowCount, src.columnCount)];
			let destRange = [new GC.Spread.Sheets.Range(dest.row, dest.column, src.rowCount, src.columnCount)];

			let pasteOptions = 0;

			if (('options' in params) && (typeof (params.options) == "number")) {
				pasteOptions = params.options;
			}

			let activeSheet = Utils.spread.getActiveSheet();
			let activeSheetName = activeSheet.name();
			Utils.spread.addSheet(0, new GC.Spread.Sheets.Worksheet("__tmp__"));
			let sheet = Utils.spread.getSheet(0);
			sheet.visible(false);
			sheet.setRowCount(dest.sheet.getRowCount());
			sheet.setColumnCount(dest.sheet.getColumnCount());

			Utils.spread.resumeCalcService(false);

			sheet.fromJSON(params.obj.sheet);

			spread.commandManager().execute({
				cmd: "clipboardPaste",
				sheetName: dest.sheet.name(), fromSheet: sheet, fromRanges: srcRange,
				pastedRanges: destRange, isCutting: false, clipboardText: "",
				pasteOption: pasteOptions
			});

			Utils.spread.suspendCalcService(false);

			Utils.spread.removeSheet(0);
			Utils.spread.setActiveSheet(activeSheetName);
		}
	}
});

