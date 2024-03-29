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

class CustomFunction extends GC.Spread.CalcEngine.Functions.Function {
    description() {
        let obj = {
            name: this.name,
            description: this.descr,
        };

        if ('parameters' in this) {
            obj.parameters = this.parameters;
        }

        return obj;
    }
}

class CustomAsyncFunction extends GC.Spread.CalcEngine.Functions.AsyncFunction {
    description() {
        let obj = {
            name: this.name,
            description: this.descr,
        };

        if ('parameters' in this) {
            obj.parameters = this.parameters;
        }
        
        return obj;
    }

    defaultValue() {
        return "Loading...";
    }
}