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

Utils.addCommand('clear-event', function (params) {

    let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

    if (instance != null) {
        instance.unbind(params.event);
    }

});

Utils.addCommand('set-event', function (params) {

    let instance = Utils.resolveSheetOrWorkbook(params.sheetIndex);

    if (instance != null) {


        instance.bind(params.event, function (event, data) {

            // don't send the full sheet object to avoid unnecessary conversion time
            // if user needs it he can ask for it
            if ('sheet' in data) {
                delete data.sheet;
            }

            $4d._vp_eventsCallback(params, data);
        });
    }
});