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

Utils.parseElementSet = function (element) {
    if (element != null) {
        if (typeof element === 'object') {
            if (element.constructor === Array) {
                return Utils.parseArraySet(element);
            } else {
                if ('type' in element) {
                    if (element.type === '__date__') {
                        return new Date(element.year, element.month - 1, element.day);
                    }
                } else {
                    let hasTime = ('time' in element) && typeof (element.time) === 'number';
                    let hasTimeAndValue = false;
                    if (hasTime) {
                        hasTimeAndValue = ('value' in element)
                            && (typeof (element.value) === 'object')
                            && ('type' in element.value)
                            && (element.value.type === '__date__');

                        let attributesCount = Object.keys(element).length;

                        if ((hasTime && (attributesCount == 1)) || (hasTimeAndValue && (attributesCount == 2))) {
                            let year = 1899;
                            let month = 11;
                            let day = 30;
                            let seconds = element.time;
                            if (hasTimeAndValue) {
                                year = element.value.year;
                                month = element.value.month - 1;
                                day = element.value.day;
                            }
                            return new Date(year, month, day, 0, 0, element.time);
                        }
                    }
                }
                return Utils.parseObjectSet(element);
            }
        }
    }
    return element;
}

Utils.parseObjectSet = function(obj) {
    let keys = Object.keys(obj);
    let ret = {};

    keys.forEach(attributeName => {
        ret[attributeName] = Utils.parseElementSet(obj[attributeName]);
    });

    return ret;
}

Utils.parseArraySet = function(ar) {
    let ret = []
    ar.forEach(element => {
        ret.push(Utils.parseElementSet(element));
    });
    return ret;
}


Utils.addCommand('set-data-context', function (params) {

    let instance = Utils.resolveSheet(params.sheetIndex);

    if (instance != null) {
        let resetOption = false;

        if (('options' in params) && (typeof (params.options) === 'object')) {
            if (('reset' in params.options) && (typeof (params.options.reset) === 'boolean')) {
                resetOption = params.options.reset;
            }
            if (('autoGenerateColumns' in params.options) && (typeof (params.options.autoGenerateColumns) === 'boolean')) {
                instance.autoGenerateColumns = params.options.autoGenerateColumns;
            }
        }

        if ('data' in params) {
            if (params.data === null) {
                instance.setDataSource(null, resetOption);
            } else if (typeof (params.data) === 'object') {
                let data = Utils.parseElementSet(params.data);
                if (params.data.constructor === Array) {
                    instance.setDataSource(data, resetOption);
                } else {
                    instance.setDataSource(new GC.Spread.Sheets.Bindings.CellBindingSource(data), resetOption);
                }
            }
        }
    }
});

Utils.addCommand('get-data-context', function (params) {

    function _parseElement(element) {
        if (element != null) {
            if (typeof element === 'object') {
                if (element.constructor === Array) {
                    return _parseArray(element);
                } else if (element.constructor === Date) {
                    if ((element.getDate() == 30) && (element.getFullYear() == 1899) && (element.getMonth() == 11)) {
                        // we have a time
                        return { time: (element.getHours() * 3600) + (element.getMinutes() * 60) + element.getSeconds() }
                    } else if ((element.getHours() == 0) && (element.getMinutes() == 0) && (element.getSeconds() == 0) && (element.getMilliseconds() == 0)) {
                        // We have a date
                        return {
                            type: '__date__',
                            day: element.getDate(),
                            month: element.getMonth() + 1,
                            year: element.getFullYear()
                        };
                    } else {
                        // we have a date time
                        return {
                            type: '__dateTime__',
                            day: element.getDate(),
                            month: element.getMonth() + 1,
                            year: element.getFullYear(),
                            time: (element.getHours() * 3600) + (element.getMinutes() * 60) + element.getSeconds()
                        };
                    }
                } else {
                    return _parseObject(element);
                }
            } else if (typeof element === 'string') {
                if (element.startsWith('data:image/png;base64,')
                    || element.startsWith('data:image/jpg;base64,')
                    || element.startsWith('data:image/gif;base64,')) {
                    return {
                        'type': '__picture__',
                        'value': element
                    };
                } else if (element.startsWith("/OADate(") && element.endsWith(")/")) {
                    let val = Number(element.substring(8, element.length - 2));
                    let days = Math.trunc(val);
                    let seconds = Math.floor((val - days) * 86400.0);
                    if (days == 0) {
                        // we have a time
                        return { time: seconds };
                    } else {
                        let d = new Date(1899, 11, 30);
                        d.setDate(d.getDate() + days);

                        if (seconds == 0) {
                            // We have a date
                            return {
                                type: '__date__',
                                day: d.getDate(),
                                month: d.getMonth() + 1,
                                year: d.getFullYear()
                            };
                        } else {
                            // we have a date time
                            return {
                                type: '__dateTime__',
                                day: d.getDate(),
                                month: d.getMonth() + 1,
                                year: d.getFullYear(),
                                time: seconds
                            };
                        }
                    }
                }
            }
        }
        return element;
    }

    function _parseObject(obj) {
        let keys = Object.keys(obj);
        let ret = {};

        keys.forEach(attributeName => {
            ret[attributeName] = _parseElement(obj[attributeName]);
        });

        return ret;
    }

    function _parseArray(ar) {
        let ret = []
        ar.forEach(element => {
            ret.push(_parseElement(element));
        });
        return ret;
    }

    let instance = Utils.resolveSheet(params.sheetIndex);
    let returnValue = { value: null };
    let obj = null;

    if (instance != null) {
        obj = instance.getDataSource();
        if ((obj != null) && ('rT' in obj)) {
            obj = obj.rT;
        }
        returnValue.value = _parseElement(obj);
    }

    return returnValue;
});

Utils.addCommand('set-binding-path', function (params) {

    if (('ranges' in params) && (params.ranges.constructor === Array)) {

        params.ranges.forEach(range => {
            let instancesArray = [];

            Utils.getRanges(range, instancesArray);

            instancesArray.forEach(instance => {
                instance.sheet.setBindingPath(instance.row, instance.column, params.path);
            });
        });
		Utils.needToUpdateFormulaBar = true;
    }
});


Utils.addCommand('get-binding-path', function (params) {
    let returnValue = { value: '' };

    if (('ranges' in params) && (params.ranges.constructor === Array)) {
        let instance = Utils.getFirstRange(params.ranges);
        if (instance != null) {
            let val = instance.sheet.getBindingPath(instance.row, instance.column);
            if ((typeof val === 'string') && (val.length > 0)) {
                returnValue.value = val;
            }
        }
    }
    return returnValue;
});



