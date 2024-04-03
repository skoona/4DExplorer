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
 * All C++ to View Pro interactions should go through this method.
 * Add a command in the `commands` directory instead of exposing
 * a new global JS function.
 * 
 * This has many advantages (a few listed below):
 * - Debugging becomes easier (we know where all interactions happen)
 * - Garantees better performance for synchronous actions by pausing/resuming paint.
 *   No need to worry about that inside every command.
 * - Makes unit testing the Web part easier: the interaction with the C++ world
 *   happens in: `$4d` (JS -> C++) and `runCommand` (C++ -> JS)
 * - Handling undo/redo for complex actions is easier this way: the `Utils.addCommand`
 *   can simply introduce an `UndoHandler` for every command handler.
 * 
 * @param {string} action 
 * @param {*} params 
 */
function runCommand(action, params = undefined) {
  try {
    // Utils.spread.suspendPaint();
    vp_startLongOperation();
    Utils.spread.suspendCalcService(false);

    let commandHandler = Utils.getCommand(action);
    if (!commandHandler) {
      console.error(`No command handler for: ${action}`);
      return;
    }

    return { result: commandHandler(params), error: "" };

  } catch (err) {
    return { result: null, error: err.message };
  } finally {
    Utils.spread.resumeCalcService(false);
    //Utils.spread.resumePaint();
    vp_endLongOperation();
  }
}


function runCommands(actions) {
  try {
    vp_startLongOperation();
    Utils.spread.suspendCalcService(false);

    actions.forEach(action => {

      let commandHandler = Utils.getCommand(action.command);
      if (!commandHandler) {
        console.error(`No command handler for: ${action.command}`);
        return;
      }

      commandHandler(action.params);
      
    });

  } finally {
    Utils.spread.resumeCalcService(false);
    vp_endLongOperation();
  }
}