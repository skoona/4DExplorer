#!/usr/bin/env bash
#
# File: Command4D
# Description: Startup 4D and Run Continuous Integration Process
# $1 = [ checksyntax | compileproject ]
# 


PROJECT=/Users/jscott/Documents/gProjects/4DExplorer/Project/Contacts.4DProject
# PROJECT="/Users/jamesscott/iDocuments/gProjects/4DExplorer/Project/Contacts.4DProject"

FOURD=/Volumes/Development4D/4Dv20.2/4D.app
# FOURD=/Applications/4Dv20.2/4D.app
# FOURD=/Applications/4Dv20.2/4D.app/Contents/MacOS/4D
# FOURDCLIENT=/Applications/4Dv20.2/4D.app/Contents/MacOS/4D
FOURDCLIENT=/Volumes/Development4D/4Dv20.2/4D.app/Contents/MacOS/4D

TOOL4D=/Volumes/Development4D/4Dv20R3/tool4d.app/Contents/MacOS/tool4d
# TOOL4D=/Applications/tool4d.app/Contents/MacOS/tool4d

ACTION=${1:-checksyntax}

[[ -f fourDout.log ]] && {
    rm fourDout.log
}

echo "Action requested: " $ACTION

# open --stdout=fourDout.log -a $FOURD --args --project $PROJECT -user-param $ACTION --dataless --skip-onstartup --startup-method=GHPipeline_EntryPoint_P 
# $FOURD --project=$PROJECT --user-param=$ACTION --create-data --headless --skip-onstartup --dataless --startup-method=GHPipeline_EntryPoint_P 
# $TOOL4D  --opening-mode=interpreted --project=$PROJECT --user-param=$ACTION --skip-onstartup --dataless --startup-method=GHPipeline_EntryPoint_P 
$FOURDCLIENT --project=$PROJECT --user-param=$ACTION --dataless --headless --skip-onstartup --dataless --startup-method=GHPipeline_EntryPoint_P 

[[ -f fourDout.log ]] && {
    echo fourDout.log
}

echo "Done !!!" 
