class customDesignerFunctions { }

customDesignerFunctions.saveAs = function (blob, fileName, allowAll) {
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    let content = reader.result.substr(reader.result.indexOf(',') + 1);
    $4d._vp_saveFile(content, fileName, allowAll, function (ret, err) { });
  }
}

customDesignerFunctions.computePdfFonts = function (sheetIndex, callback) {
  Utils.computePdfFonts(sheetIndex, callback);
}

customDesignerFunctions.localizedCommandList = function (list) {
  let mapping = GC.Spread.CalcEngine.getMapping();

  if (mapping != null) {
    let mapper = mapping.builtInFunctionsMapping;

    list.forEach(i => {
      if ((i.value in mapper) && ('alias' in mapper[i.value])) {
        i.text = mapper[i.value].alias
      }
    });
  }

  list.sort(function (a, b) {
    return a.text.localeCompare(b.text);
  });

  return list;
}

customDesignerFunctions.localizedCommandName = function (name, lower) {
  let mapping = GC.Spread.CalcEngine.getMapping();

  name = name.toUpperCase();

  if (mapping != null) {
    let mapper = mapping.builtInFunctionsMapping;

    if (name in mapper) {
      name = mapper[name].alias
    }
  }

  if (lower) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  return name;
}

customDesignerFunctions.spreadFrom4vp = function (data) {
  if ((data != null) && (typeof data === "object") && ("spreadJS" in data)) {
  //  vp_resetOptimizer();
    return data.spreadJS;
  } else return null;
}

customDesignerFunctions.spreadTo4vp = function (data) {
  Utils.addFormatedText(data);
  var vpFile = {};
  vpFile.version = 1;
  var d = new Date;
  vpFile.dateCreation = d.toISOString();
  vpFile.dateModified = d.toISOString();
  vpFile.spreadJS = data;
  return vpFile;
}

customDesignerFunctions.notifyReady = function () {
  let loaders = document.getElementsByClassName("loading-placeholder");
  loaders[0].hidden = true;
  loaders[1].hidden = true;
  designerReady = true;
}

customDesignerFunctions.initEvents = function (newSpread) {
  spread = newSpread;
  Utils.initEvents();
  Utils.initCommands();
}

customDesignerFunctions.getCustomFunctionsList = function () {
  let list = Utils.customFunctionNames;
  list.sort();
  return list.map(r => {
    return {
      text: r,
      value: r
    };
  });
}

customDesignerFunctions.fillWithArraySystemFonts = function () {
  return vp_fonts.map(val => { return { text: val, value: val }; });
}

customDesignerFunctions.fillWithTruncatedArraySystemFonts = function () {
  return vp_fonts.map(val => {
    let value = val.replace(/"/g, '');
    return { text: value, value: val };
  });
}


customDesignerFunctions.init = function () {
  /*
  let moduleSupportedFunctions = exported_modules.c["./src/commands/ribbon/formulas/functions/supportedFunctions/supportedFunctions.ts"].exports;
  moduleSupportedFunctions.allFunctionItems = moduleSupportedFunctions.allFunctionItems.concat(customDesignerFunctions.getCustomFunctionsList());
  moduleSupportedFunctions.allFunctionItems.sort(function (a, b) {
    return a.text.localeCompare(b.text);
  });

  let moduleInsertFunctionDialog = exported_modules.c["./src/commands/ribbon/formulas/functionHandler/insertFunctionDialog.tpl.ts"].exports;
   moduleInsertFunctionDialog.insertFunctionDialogTemplate.content[0].children[0].children[1].children[1].children[12].items = customDesignerFunctions.getCustomFunctionsList();
  moduleInsertFunctionDialog.insertFunctionDialogTemplate.content[0].children[0].children[1].children[1].children[0].items = moduleSupportedFunctions.allFunctionItems;
  */

   // add custom functions to the custom section of the insert function dialog
   vp_insertFunctionDialogTemplate.content[0].children[0].children[1].children[1].children[12].items = customDesignerFunctions.getCustomFunctionsList();
}
