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

class D4Picture extends GC.Spread.Sheets.CellTypes.Text {

    constructor() {
        super();
        this.name = "D4Picture";
        this.deletionInProgress = false;
    }

    paint(ctx, value, x, y, w, h, style, context) {
        try {
            if (context.sheet.options.showFormulas) {
                style.backgroundImage = undefined;
            } else {
                if (value === CustomAsyncFunction.prototype.defaultValue()) {

                } else if (value !== "") {
                    if (!this.deletionInProgress) {
                        this.deletionInProgress = true;
                        style.backgroundImage = undefined;
                        context.sheet.setStyle(context.row, context.col, style);
                        context.sheet.setCellType(context.row, context.col);
                    }
                }
            }
        } catch (e) {
            Utils.logEvent({ type: 'error-catched', data: e });
        } finally {
            GC.Spread.Sheets.CellTypes.Text.prototype.paint.call(this, ctx, value, x, y, w, h, style, context);
        }
    }
}