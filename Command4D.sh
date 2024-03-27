#!/usr/bin/env bash
#
# File: Command4D
# Description: Startup 4D and Run Continuous Integration Process
# $1 = [ checksyntax | compileproject ]
# 


# PROJECT=/Users/jscott/Documents/gProjects/4DExplorer/Project/Contacts.4DProject
PROJECT="/Users/jamesscott/iDocuments/gProjects/4DExplorer/Project/Contacts.4DProject"
FOURD=/Volumes/Development4D/4Dv20.2/4D.app
# FOURD=/Applications/4Dv20.2/4D.app
# TOOL4D=/Volumes/Development4D/tool4d.app/Contents/MacOS/tool4d
TOOL4D=/Applications/tool4d.app/Contents/MacOS/tool4d

ACTION=${1:-checksyntax}

rm fourDout.log

echo "Action requested: " $ACTION

# open --stdout=fourDout.log -a $FOURD --args --project $PROJECT --user-param $ACTION --create-data
$TOOL4D --project=$PROJECT --opening-mode="interpreted" --user-param=$ACTION --dataless

echo fourDout.log

echo "Done !!!" 
