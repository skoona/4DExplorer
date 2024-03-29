var uiResource = {
    toolBar: {
        zoom: {
            title: "Zoom",
            zoomOption: {
                twentyFivePercentSize: "25%",
                fiftyPercentSize: "50%",
                seventyFivePercentSize: "75%",
                defaultSize: "100%",
                oneHundredTwentyFivePercentSize: "125%",
                oneHundredFiftyPercentSize: "150%",
                twoHundredPercentSize: "200%",
                threeHundredPercentSize: "300%",
                fourHundredPercentSize: "400%"
            }
        },
        clear: {
            title: "Löschen",
            clearActions: {
                clearAll: "Alle löschen",
                clearFormat: "Formatierung löschen"
            }
        },
        showInspector: "Inspektor einblenden",
        hideInspector: "Inspektor ausblenden",
        importJson: "JSON importieren",
        exportJson: "JSON exportieren",
        importViewPro: "4D View Pro importieren",
        exportViewPro: "4D View Pro exportieren",
        insertTable: "Tabelle einsetzen",
        insertPicture: "Bild einsetzen",
        insertComment: "Kommentar einsetzen",
        insertSparkline: "Insert Sparkline",
        insertSlicer: "Slicer einsetzen"
    },
    tabs: {
        spread: "Spread",
        sheet: "Blatt",
        cell: "Zelle",
        table: "Tabelle",
        data: "Daten",
        comment: "Kommentar",
        picture: "Bild",
        sparklineEx: "Sparkline",
        barCodeEx: "BarCode",
        slicer: "Slicer",
        chart: "Diagramm"
    },
    spreadTab: {
        general: {
            title: "Allgemein",
            allowDragDrop: "Drag und Drop erlauben",
            allowDragFill: "Drag und Füllen erlauben",
            allowZoom: "Zoom erlauben",
            allowOverflow: "Überlauf erlauben",
            showDragFillSmartTag: "Smarttag zum Ziehen und Ausfüllen anzeigen",
            allowUserDeselect: "Benutzer-Entmarkierung zulassen"
        },
        calculation: {
            title: "Berechnung",
            referenceStyle: {
                title: "Referenzstil",
                R1C1: "R1C1",
                A1: "A1"
            }
        },
        scrollBar: {
            title: "Scroll Bar",
            showVertical: "Vertikale Bildlaufleiste",
            showHorizontal: "Horizontale Bildlaufleiste",
            maxAlign: "Bildlaufleiste Max Ausrichten",
            showMax: "Bildlaufleiste Max anzeigen",
            scrollIgnoreHidden: "Blättern Ignorieren einer ausgeblendeten Zeile oder Spalte"
        },
        tabStip: {
            title: "TabStrip",
            visible: "TabStrip Sichtbar",
            newTabVisible: "Neuer Tab Sichtbar",
            editable: "Tabstrip Änderbar",
            showTabNavigation: "Registerkarten-Navigation anzeigen"
        },
        color: {
            title: "Farben",
            spreadBackcolor: "Spread Hintergrundfarbe",
            grayAreaBackcolor: "Grauer Bereich Hintergrundfarbe"
        },
        tip: {
            title: "Tipp",
            showDragDropTip: "Drag-Drop-Tipp anzeigen",
            showDragFillTip: "Drag-Fill-Tipp anzeigen",
            scrollTip: {
                title: "Bildlauf-Tipp",
                values: {
                    none: "Keine",
                    horizontal: "Horizontal",
                    vertical: "Vertikal",
                    both: "Beide"
                }
            },
            resizeTip: {
                title: "Vergrößerung-Tipp",
                values: {
                    none: "Keine",
                    column: "Zeilen",
                    row: "Spalten",
                    both: "Beide"
                }
            }
        },
        sheets: {
            title: "Blätter",
            sheetName: "Blattname",
            sheetVisible: "Blatt sichtbar"
        },
        cutCopyIndicator: {
            title: "Ausschneiden/Kopieren Indikator",
            visible: "Indikator anzeigen",
            borderColor: "Rahmenfarbe"
        },
        dragDropFill: {
            title: "Drag&Drop / Drag&Füllen",
            canUserDragDrop: "Anwender darf drag&drop",
            canUserDragFill: "Anwender darf drag&füllen",
            showDragFillSmartTag: "Drag-Füllen-Smart-Tag anzeigen",
            dragFillType: {
                title: "Standardmäßig Drag-Füllen-Typ",
                values: {
                    auto: "Auto",
                    copyCells: "Kopiere Zellen",
                    fillSeries: "Serie füllen",
                    fillFormattingOnly: "Nur Formatierung füllen",
                    fillWithoutFormatting: "Ohne Formatierung füllen"
                }
            }
        },
        spreadTheme: {
            title: "Spread Theme",
            theme: {
                title: "Theme",
                option: {
                    spreadJS: "SpreadJS",
                    excel2013White: "Excel2013 White",
                    excel2013LightGray: "Excel2013 Light Gray",
                    excel2013DarkGray: "Excel2013 Dark Gray",
                    excel2016Colorful: "Excel2016 Colorful",
                    excel2016DarkGray: "Excel2016 Dark Gray"
                }
            }
        },
        resizeZeroIndicator: {
            title: "ResizeZeroIndicator",
            option: {
                defaultValue: "Standard",
                enhanced: "Erweitert"
            }
        }
    },
    sheetTab: {
        general: {
            title: "Allgemein",
            rowCount: "Zeilen",
            columnCount: "Spalten",
            name: "Name",
            tabColor: "Tab-Farben"
        },
        freeze: {
            title: "Einfrieren",
            frozenRowCount: "Zeilen Kopfteile",
            frozenColumnCount: "Spalten Kopfteile",
            trailingFrozenRowCount: "Zeilen Fußteile",
            trailingFrozenColumnCount: "Spalten Fußteile",
            frozenLineColor: "Farben",
            freezePane: "Einfrieren",
            unfreeze: "Freigeben"
        },
        gridLine: {
            title: "Rasterlinie",
            showVertical: "Vertikal sichtbar",
            showHorizontal: "Horizontal sichtbar",
            color: "Farben"
        },
        header: {
            title: "Kopfzeile",
            showRowHeader: "Zeilen Kopfteile sichtbar",
            showColumnHeader: "Spalten Kopfteile sichtbar"
        },
        selection: {
            title: "Auswahl",
            borderColor: "Rahmenfarbe",
            backColor: "Hintergrundfarbe",
            hide: "Auswahl ausblenden",
            policy: {
                title: "Policy",
                values: {
                    single: "Einzeln",
                    range: "Bereich",
                    multiRange: "Mehrfachbereich"
                }
            },
            unit: {
                title: "Einheit",
                values: {
                    cell: "Zelle",
                    row: "Zeile",
                    column: "Spalte"
                }
            }
        },
        protection: {
            title: "Schutz",
            protectSheet: "Blatt schützen",
            selectLockCells: "Gesperrte Zellen auswählen",
            selectUnlockedCells: "Freigegebene Zellen auswählen",
            sort: "Sortieren",
            useAutoFilter: "AutoFilter verwenden",
            resizeRows: "Zeilengröße ändern",
            resizeColumns: "Spaltengröße ändern",
            editObjects: "Objekte bearbeiten"
        }
    },
    cellTab: {
        style: {
            title: "Stil",
            fontFamily: "Schrift",
            fontSize: "Größe",
            foreColor: "Vordergrundfarbe",
            backColor: "Hintergrundfarbe",
            borders: {
                title: "Rahmen",
                values: {
                    bottom: "Unterer Rahmen",
                    top: "Oberer Rahmen",
                    left: "Linker Rahmen",
                    right: "Rechter Rahmen",
                    none: "Kein Rahmen",
                    all: "Alle Rahmen",
                    outside: "Äußerer Rahmen",
                    thick: "Dicker Rahmen",
                    doubleBottom: "Doppelter unterer Rahmen",
                    thickBottom: "Dicker unterer Rahmen",
                    topBottom: "Oberer und unterer Rahmen",
                    topThickBottom: "Oberer und unterer dicker Rahmen",
                    topDoubleBottom: "Oberer und unterer doppelter Rahmen"
                }
            }
        },
        border: {
            title: "Rahmen",
            label: "Rahmen",
            rangeBorderLine: "Line Style",
            rangeBorderColor: "Line Color",
            noBorder: "Keine",
            outsideBorder: "Äußerer Rahmen",
            insideBorder: "Inside Border",
            allBorder: "Alle Rahmen",
            leftBorder: "Linker Rahmen",
            innerVertical: "Inner Vertical",
            rightBorder: "Rechter Rahmen",
            topBorder: "Oberer Rahmen",
            innerHorizontal: "Inner Horizontal",
            bottomBorder: "Unterer Rahmen"
        },
        alignment: {
            title: "Ausrichtung",
            top: "Oben",
            middle: "Mitte",
            bottom: "Unten",
            left: "Links",
            center: "Zentriert",
            right: "Rechts",
            wrapText: "Text umbrechen",
            decreaseIndent: "Einzug verkleinern",
            increaseIndent: "Einzug vergrößern"
        },
        format: {
            title: "Formatierung",
            commonFormat: {
                option: {
                    general: "Allgemein",
                    number: "Zahlen",
                    currency: "Währung",
                    accounting: "Buchhaltung",
                    shortDate: "Kurzes Datum",
                    longDate: "Langes Datum",
                    time: "Zeit",
                    percentage: "Prozent",
                    fraction: "Bruch",
                    scientific: "Wissenschaftlich",
                    text: "Text"
                }
            },
            percentValue: "0%",
            commaValue: "#,##0.00; (#,##0.00); \"-\"??;@",
            custom: "Benutzerdefiniert",
            setButton: "OK"
        },
        merge: {
            title: "Zellen verbinden",
            mergeCells: "Verbinden",
            unmergeCells: "Verbindung aufheben"
        },
        cellType: {
            title: "Zelltyp"
        },
        conditionalFormat: {
            title: "Bedingte Formatierung",
            useConditionalFormats: "Benutze bedingte Formatierung"
        },
        protection: {
            title: "Schutz",
            lock: "Gesperrt",
            sheetIsProtected: "Blatt ist geschützt",
            sheetIsUnprotected: "Blatt ist nicht geschützt"
        }
    },
    tableTab: {
        tableStyle: {
            title: "Tabellenstil",
            groupTitle: {
                light: "Hell",
                medium: "Medium",
                dark: "Dunkel"
            },
            light: {
                none: "Keine",
                light1: "Table Style Light 1",
                light2: "Table Style Light 2",
                light3: "Table Style Light 3",
                light4: "Table Style Light 4",
                light5: "Table Style Light 5",
                light6: "Table Style Light 6",
                light7: "Table Style Light 7",
                light8: "Table Style Light 8",
                light9: "Table Style Light 9",
                light10: "Table Style Light 10",
                light11: "Table Style Light 11",
                light12: "Table Style Light 12",
                light13: "Table Style Light 13",
                light14: "Table Style Light 14",
                light15: "Table Style Light 15",
                light16: "Table Style Light 16",
                light17: "Table Style Light 17",
                light18: "Table Style Light 18",
                light19: "Table Style Light 19",
                light20: "Table Style Light 20",
                light21: "Table Style Light 21"
            },
            medium: {
                medium1: "Table Style Medium 1",
                medium2: "Table Style Medium 2",
                medium3: "Table Style Medium 3",
                medium4: "Table Style Medium 4",
                medium5: "Table Style Medium 5",
                medium6: "Table Style Medium 6",
                medium7: "Table Style Medium 7",
                medium8: "Table Style Medium 8",
                medium9: "Table Style Medium 9",
                medium10: "Table Style Medium 10",
                medium11: "Table Style Medium 11",
                medium12: "Table Style Medium 12",
                medium13: "Table Style Medium 13",
                medium14: "Table Style Medium 14",
                medium15: "Table Style Medium 15",
                medium16: "Table Style Medium 16",
                medium17: "Table Style Medium 17",
                medium18: "Table Style Medium 18",
                medium19: "Table Style Medium 19",
                medium20: "Table Style Medium 20",
                medium21: "Table Style Medium 21",
                medium22: "Table Style Medium 22",
                medium23: "Table Style Medium 23",
                medium24: "Table Style Medium 24",
                medium25: "Table Style Medium 25",
                medium26: "Table Style Medium 26",
                medium27: "Table Style Medium 27",
                medium28: "Table Style Medium 28"
            },
            dark: {
                dark1: "Table Style Dark 1",
                dark2: "Table Style Dark 2",
                dark3: "Table Style Dark 3",
                dark4: "Table Style Dark 4",
                dark5: "Table Style Dark 5",
                dark6: "Table Style Dark 6",
                dark7: "Table Style Dark 7",
                dark8: "Table Style Dark 8",
                dark9: "Table Style Dark 9",
                dark10: "Table Style Dark 10",
                dark11: "Table Style Dark 11"
            }
        },
        general: {
            title: "Allgemein",
            tableName: "Name"
        },
        options: {
            title: "Optionen",
            filterButton: "Filter Button",
            headerRow: "Kopfzeile",
            totalRow: "Summenzeile",
            bandedRows: "Gebundene Reihe",
            bandedColumns: "Gebundene Spalte",
            firstColumn: "Erste Spalte",
            lastColumn: "Letzte Spalte"
        }
    },
    dataTab: {
        sort: {
            title: "Sortieren & Filter",
            asc: "Sortiere A-Z",
            desc: "Sortiere Z-A",
            filter: "Filter"
        },
        group: {
            title: "Gruppieren",
            group: "Gruppieren",
            ungroup: "Gruppierung auflösen",
            showDetail: "Details anzeigen",
            hideDetail: "Details ausblenden",
            showRowRangeGroup: "Reihenbereichsgruppe anzeigen",
            showColumnRangeGroup: "Spaltenbereichsgruppe anzeigen"
        },
        dataValidation: {
            title: "Daten-Validierung",
            setButton: "OK",
            clearAllButton: "Alle löschen",
            circleInvalidData: "Ungültige Daten einkreisen",
            setting: {
                title: "Einstellungen",
                values: {
                    validatorType: {
                        title: "Validierungstyp",
                        option: {
                            anyValue: "Jegliche Werte",
                            number: "Zahlen",
                            list: "Liste",
                            formulaList: "FormulaList",
                            date: "Datum",
                            textLength: "Textlänge",
                            custom: "Benutzerdefiniert"
                        }
                    },
                    ignoreBlank: "Leer ignorieren",
                    validatorComparisonOperator: {
                        title: "Operator",
                        option: {
                            between: "Zwischen",
                            notBetween: "Nicht zwischen",
                            equalTo: "Gleich",
                            notEqualTo: "Ungleich",
                            greaterThan: ">",
                            lessThan: "<",
                            greaterThanOrEqualTo: ">=",
                            lessThanOrEqualTo: "<="
                        }
                    },
                    number: {
                        minimum: "Minimum",
                        maximum: "Maximum",
                        value: "Wert",
                        isInteger: "Ist Integer"
                    },
                    source: "Source",
                    date: {
                        startDate: "Startdatum",
                        endDate: "Enddatum",
                        value: "Wert",
                        isTime: "Ist Zeit"
                    },
                    formula: "Formel"
                }
            },
            inputMessage: {
                title: "Eingabemeldung",
                values: {
                    showInputMessage: "Zeige wenn Zelle ausgewählt",
                    title: "Titel",
                    message: "Meldung"
                }
            },
            errorAlert: {
                title: "Fehlermeldung",
                values: {
                    showErrorAlert: "Zeige wenn ungültige Daten eingegeben wurden",
                    alertType: {
                        title: "Fehlertyp",
                        option: {
                            stop: "Stop",
                            warning: "Warnung",
                            information: "Information"
                        }
                    },
                    title: "Titel",
                    message: "Meldung"
                }
            }
        }
    },
    commentTab: {
        general: {
            title: "Allgemein",
            dynamicSize: "Dynamische Größe",
            dynamicMove: "Dynamisches Verschieben",
            lockText: "Text sperren",
            showShadow: "Schatten anzeigen"
        },
        font: {
            title: "Schrift",
            fontFamily: "Schrift",
            fontSize: "Größe",
            fontStyle: {
                title: "Stil",
                values: {
                    normal: "Normal",
                    italic: "Kursiv",
                    oblique: "Umriss",
                    inherit: "Geerbt"
                }
            },
            fontWeight: {
                title: "Schnitt",
                values: {
                    normal: "Normal",
                    bold: "Fett",
                    bolder: "Fetter",
                    lighter: "Leichter"
                }
            },
            textDecoration: {
                title: "Dekoration",
                values: {
                    none: "Nichts",
                    underline: "Unterstrichen",
                    overline: "Überstrichen",
                    linethrough: "Durchgestrichen"
                }
            }
        },
        border: {
            title: "Rahmen",
            width: "Breite",
            style: {
                title: "Stil",
                values: {
                    none: "Keiner",
                    hidden: "hidden",
                    dotted: "dotted",
                    dashed: "dashed",
                    solid: "solid",
                    double: "double",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "Farben"
        },
        appearance: {
            title: "Darstellung",
            horizontalAlign: {
                title: "Horizontal",
                values: {
                    left: "Links",
                    center: "Zentriert",
                    right: "Rechts",
                    general: "Standard"
                }
            },
            displayMode: {
                title: "Anzeigemodus",
                values: {
                    alwaysShown: "Immer anzeigen",
                    hoverShown: "Bei Maus über"
                }
            },
            foreColor: "Vordergrundfarbe",
            backColor: "Hintergrundfarbe",
            padding: "Abstand",
            zIndex: "Z-Index",
            opacity: "Durchsichtig"
        }
    },
    pictureTab: {
        general: {
            title: "Allgemein",
            moveAndSize: "Verschieben und Größe an Zellen anpassen",
            moveAndNoSize: "Verschieben und Größe nicht anpassen",
            noMoveAndSize: "Weder verschieben noch Größe anpassen",
            fixedPosition: "Feste Position"
        },
        border: {
            title: "Rahmen",
            width: "Breite",
            radius: "Radius",
            style: {
                title: "Stil",
                values: {
                    solid: "solid",
                    dotted: "dotted",
                    dashed: "dashed",
                    double: "double",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "Farben"
        },
        appearance: {
            title: "Appearance",
            stretch: {
                title: "Stretch",
                values: {
                    stretch: "Stretch",
                    center: "Zentriert",
                    zoom: "Zoom",
                    none: "Keine"
                }
            },
            backColor: "Hintergrundfarbe"
        }
    },
    sparklineExTab: {
        pieSparkline: {
            title: "PieSparkline Einstellungen",
            values: {
                percentage: "Prozent",
                color: "Farbe ",
                setButton: "OK"
            }
        },
        areaSparkline: {
            title: "Bereich Sparkline Einstellungen",
            values: {
                line1: "Linie 1",
                line2: "Linie 2",
                minimumValue: "Minimum",
                maximumValue: "Maximum",
                points: "Punkte",
                positiveColor: "Positive Farbe",
                negativeColor: "Negative Farbe",
                setButton: "OK"
            }
        },
        boxplotSparkline: {
            title: "BoxPlotSparkline Einstellungen",
            values: {
                points: "Punkte",
                boxplotClass: "BoxPlotClass",
                scaleStart: "Scale Start",
                scaleEnd: "Scale Ende",
                acceptableStart: "AcceptableStart",
                acceptableEnd: "AcceptableEnd",
                colorScheme: "Farbschema",
                style: "Stil",
                showAverage: "Zeige Durchschnitt",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        bulletSparkline: {
            title: "Bullet Sparkline Einstellungen",
            values: {
                measure: "Measure",
                target: "Ziel",
                maxi: "Maxi",
                forecast: "Forecast",
                good: "Gut",
                bad: "Schlecht",
                tickunit: "Tickunit",
                colorScheme: "Farbschema",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        cascadeSparkline: {
            title: "CascadeSparkline Einstellungen",
            values: {
                pointsRange: "PointsRange",
                pointIndex: "PointIndex",
                minimum: "Minimum",
                maximum: "Maximum",
                positiveColor: "Farbe Positive",
                negativeColor: "Farbe Negative",
                labelsRange: "LabelsRange",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        compatibleSparkline: {
            title: "CompatibleSparkline Setting",
            values: {
                data: {
                    title: "Daten",
                    dataOrientation: "Datenausrichtung",
                    dateAxisData: "Datum Achse Data",
                    dateAxisOrientation: "Datum Achse Ausrichtung",
                    displayEmptyCellAs: "Leere Zellen anzeigen als",
                    showDataInHiddenRowOrColumn: "Daten in ausgeblendeten Zeilen und Spalten anzeigen"
                },
                show: {
                    title: "Anzeigen",
                    showFirst: "Zeige Erste",
                    showLast: "Zeige Letzte",
                    showHigh: "Zeige Hoch",
                    showLow: "Zeige Niedrig",
                    showNegative: "Show Negative",
                    showMarkers: "Show Marker"
                },
                group: {
                    title: "Gruppieren",
                    minAxisType: "Min Achse Typ",
                    maxAxisType: "Max Achse Typ",
                    manualMin: "Manual Min",
                    manualMax: "Manual Max",
                    rightToLeft: "Rechts nach Links",
                    displayXAxis: "Zeige X-Achse"
                },
                style: {
                    title: "Stil",
                    negative: "Negative",
                    markers: "Marker",
                    axis: "Achse",
                    series: "Datenreihen",
                    highMarker: "High Marker",
                    lowMarker: "Low Marker",
                    firstMarker: "Erster Marker",
                    lastMarker: "Letzter Marker",
                    lineWeight: "Linienstärke"
                },
                setButton: "OK"
            }
        },
        hbarSparkline: {
            title: "HbarSparkline Einstellungen",
            values: {
                value: "Wert",
                colorScheme: "Farbschema",
                setButton: "OK"
            }
        },
        vbarSparkline: {
            title: "VarSparkline Setting",
            values: {
                value: "Wert",
                colorScheme: "Farbschema",
                setButton: "OK"
            }
        },
        paretoSparkline: {
            title: "ParetoSparkline Einstellungen",
            values: {
                points: "Punkte",
                pointIndex: "Punkt Index",
                colorRange: "Farbbereich",
                highlightPosition: "Highlight Position",
                target: "Target",
                target2: "Target2",
                label: "Beschriftung",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        scatterSparkline: {
            title: "Scatter Sparkline Einstellungen",
            values: {
                points1: "Punkte 1",
                points2: "Punkte 2",
                minX: "MinX",
                maxX: "MaxX",
                minY: "MinY",
                maxY: "MaxY",
                hLine: "HLinie",
                vLine: "VLinie",
                xMinZone: "XMinZone",
                xMaxZone: "XMaxZone",
                yMinZone: "YMinZone",
                yMaxZone: "YMaxZone",
                color1: "Farbe 1",
                color2: "Farbe 2",
                tags: "Tags",
                drawSymbol: "Zeige Symbol",
                drawLines: "Zeige Linien",
                dashLine: "Dash Linie",
                setButton: "OK"
            }
        },
        spreadSparkline: {
            title: "Spread Sparkline Einstellungen",
            values: {
                points: "Punkte",
                scaleStart: "Skalierung Start",
                scaleEnd: "Skalierung Ende",
                style: "Stil",
                colorScheme: "Farbschema",
                showAverage: "Zeige Durchschnitt",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        stackedSparkline: {
            title: "Stacked Sparkline Einstellungen",
            values: {
                points: "Punkte",
                colorRange: "Farbbereich",
                labelRange: "Label-Bereich",
                maximum: "Maximum",
                targetRed: "Ziel Rot",
                targetGreen: "Ziel Grün",
                targetBlue: "Ziel Blau",
                targetYellow: "Ziel Gelb",
                color: "Farben",
                highlightPosition: "Highlight Position",
                textOrientation: "Textausrichtung",
                textSize: "Textgröße",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        variSparkline: {
            title: "Vari Sparkline Einstellungen",
            values: {
                variance: "Varianz",
                reference: "Referenz",
                mini: "Mini",
                maxi: "Maxi",
                mark: "Mark",
                tickunit: "Tick Unit",
                colorPositive: "Farbe Positive",
                colorNegative: "Farbe Negative",
                legend: "Legende",
                vertical: "Vertikal",
                setButton: "OK"
            }
        },
        orientation: {
            vertical: "Vertikal",
            horizontal: "Horizontal"
        },
        axisType: {
            individual: "Individual",
            group: "Gruppieren",
            custom: "Benutzerdefiniert"
        },
        emptyCellDisplayType: {
            gaps: "Gaps",
            zero: "Null",
            connect: "Connect"
        },
        boxplotClass: {
            fiveNS: "5NS",
            sevenNS: "7NS",
            tukey: "Tukey",
            bowley: "Bowley",
            sigma: "Sigma3"
        },
        boxplotStyle: {
            classical: "Classical",
            neo: "Neo"
        },
        paretoLabel: {
            none: "Keine",
            single: "Single",
            cumulated: "Cumulated"
        },
        spreadStyle: {
            stacked: "Stacked",
            spread: "Spread",
            jitter: "Jitter",
            poles: "Poles",
            stackedDots: "StackedDots",
            stripe: "Stripe"
        },
        setButton: "OK"
    },
    barCodeTab: {
        qrCode: {
            title: "QRCode Einstellungen",
            values: {
                data: "Daten",
                color: "Farben",
                backgroundColor: "Hintergrundfarbe",
                errorCorrectionLevel: "Fehlerkorrektur-Ebene",
                model: "Model",
                version: "Version",
                mask: "Maske",
                connection: "Verbindung",
                connectionNo: "Verbindung Keine",
                charCode: "Charcode",
                charset: "Charset"
            }
        },
        ean8: {
            title: "EAN8 Einstellungen"
        },
        ean13: {
            title: "EAN13 Einstellungen",
            values: {
                addOn: "Text eingeben",
                addOnLabelPosition: "Text Position"
            }
        },
        gs1128: {
            title: "GS1_128 Einstellungen"
        },
        codabar: {
            title: "Codabar Einstellungen",
            values: {
                checkDigit: "Prüfziffer",
                nwRatio: "Verhältnis für breite/enge Balken"
            }
        },
        pdf417:{
            title: "PDF417 Einstellungen",
            values: {
                errorCorrectionLevel: "Fehlerkorrektur-Ebene",
                rows: "Zeilen",
                columns: "Spalten",
                compact: "Kompact"
            }
        },
        dataMatrix:{
            title: "DataMatrix Einstellungen",
            values: {
                eccMode: "Ecc Mode",
                ecc200SymbolSize: "Ecc200 Symbol Size",
                ecc200EndcodingMode: "Ecc200 Endcoding Mode",
                ecc00_140Symbole: "Ecc00_140 Symbole",
                structureAppend: "Structure Append",
                structureNumber: "Structure Number",
                fileIdentifier: "Datei-Bezeichner"
            }
        },
        code39:{
            title: "Code39 Einstellungen",
            values: {
                labelWithStartAndStopCharacter: "Etikett mit Start- und Stoppzeichen",
                nwRatio: "The Wide And Narrow Bar Ratio",
                checkDigit: "Prüfziffer",
                fullASCII: "Full ASCII"
            }
        },
        code49:{
            title: "Code49 Einstellungen",
            values: {
                grouping: "Gruppierung",
                groupNo: "Gruppen Nr"
            }
        },
        code93:{
            title: "Code93 Einstellungen",
            values: {
                checkDigit: "Prüfziffer",
                fullASCII: "Full ASCII"
            }
        },
        code128:{
            title: "Code128 Einstellungen",
            values: {
                codeSet: "Code Set"
            }
        },
        commonParams: {
            data: "Daten",
            color: "Farben",
            backgroundColor: "Hintergrundfarbe",
            showLabel: "Label anzeigen",
            labelPosition: "Label Position",
            fontFamily: "Schriftfamilie",
            fontStyle: "Schriftstil",
            fontWeight: "Schriftstärke",
            fontTextDecoration: "Text Dekoration",
            fontTextAlign: "Text Ausrichtung",
            fontSize: "Schriftgröße",
            quietZoneLeft: "Left Quiet Zone Size",
            quietZoneRight: "Right Quiet Zone Size",
            quietZoneTop: "Top Quiet Zone Size",
            quietZoneBottom: "Bottom Quiet Zone Size",
            setButton: "OK"
        },
        labelPosition: {
            top: "Oben",
            bottom: "Unten"
        },
        addOnLabelPosition:{
            top: "Oben",
            bottom: "Unten"
        },
        horizontalAlign: {
            left: "Links",
            center: "Zentriert",
            right: "Rects",
            general: "Standard"
        },
        nwRatio: {
            two: "2",
            three: "3"
        },
        codeset: {
            auto: "auto",
            a: "A",
            b: "B",
            c: "C"
        },
        eccMode: {
            ecc000: "ECC000",
            ecc050: "ECC050",
            ecc080: "ECC080",
            ecc100: "ECC100",
            ecc140: "ECC140",
            ecc200: "ECC200"
        },
        structureNumber: {
            zero: "0",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15"
        },
        errorCorrectionLevel: {
            l: "L",
            m: "M",
            q: "Q",
            h: "H"
        },
        model: {
            one: "1",
            two: "2"
        },
        version: {
            auto: "auto",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15",
            sixteen: "16",
            seventeen: "17",
            eighteen: "18",
            nineteen: "19",
            twenty: "20",
            twentyOne: "21",
            twentyTwo: "22",
            twentyThree: "23",
            twentyFour: "24",
            twentyFive: "25",
            twentySix: "26",
            twentySeven: "27",
            twentyEight: "28",
            twentyNine: "29",
            thirty: "30",
            thirtyOne: "31",
            thirtyTwo: "32",
            thirtyThree: "33",
            thirtyFour: "34",
            thirtyFive: "35",
            thirtySix: "36",
            thirtySeven: "37",
            thirtyEight: "38",
            thirtyNine: "39",
            forty: "40"
        },
        mask: {
            auto: "auto",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7"
        },
        connectionNo: {
            zero: "0",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15"
        },
        structureNumber: {
            zero: "0",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15"
        },
        charset: {
            uft8: "UTF-8",
            shiftJIS: "Shift-JIS"
        },
        pdfErrorCorrectionLevel: {
            auto: "auto",
            zero: "0",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8"
        },
        rows: {
            auto: "auto",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15",
            sixteen: "16",
            seventeen: "17",
            eighteen: "18",
            nineteen: "19",
            twenty: "20",
            twentyOne: "21",
            twentyTwo: "22",
            twentyThree: "23",
            twentyFour: "24",
            twentyFive: "25",
            twentySix: "26",
            twentySeven: "27",
            twentyEight: "28",
            twentyNine: "29",
            thirty: "30",
            thirtyOne: "31",
            thirtyTwo: "32",
            thirtyThree: "33",
            thirtyFour: "34",
            thirtyFive: "35",
            thirtySix: "36",
            thirtySeven: "37",
            thirtyEight: "38",
            thirtyNine: "39",
            forty: "40",
            fortyOne: "41",
            fortyTwo: "42",
            fortyThree: "43",
            fortyFour: "44",
            fortyFive: "45",
            fortySix: "46",
            fortySeven: "47",
            fortyEight: "48",
            fortyNine: "49",
            fifty: "50",
            fiftyOne: "51",
            fiftyTwo: "52",
            fiftyThree: "53",
            fiftyFour: "54",
            fiftyFive: "55",
            fiftySix: "56",
            fiftySeven: "57",
            fiftyEight: "58",
            fiftyNine: "59",
            sixty: "60",
            sixtyOne: "61",
            sixtyTwo: "62",
            sixtyThree: "63",
            sixtyFour: "64",
            sixtyFive: "65",
            sixtySix: "66",
            sixtySeven: "67",
            sixtyEight: "68",
            sixtyNine: "69",
            seventy: "70",
            seventyOne: "71",
            seventyTwo: "72",
            seventyThree: "73",
            seventyFour: "74",
            seventyFive: "75",
            seventySix: "76",
            seventySeven: "77",
            seventyEight: "78",
            seventyNine: "79",
            eighty: "80",
            eightyOne: "81",
            eightyTwo: "82",
            eightyThree: "83",
            eightyFour: "84",
            eightyFive: "85",
            eightySix: "86",
            eightySeven: "87",
            eightyEight: "88",
            eightyNine: "89",
            ninety: "90"

        },
        columns: {
            auto: "Auto",
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10",
            eleven: "11",
            twelve: "12",
            thirteen: "13",
            fourteen: "14",
            fifteen: "15",
            sixteen: "16",
            seventeen: "17",
            eighteen: "18",
            nineteen: "19",
            twenty: "20",
            twentyOne: "21",
            twentyTwo: "22",
            twentyThree: "23",
            twentyFour: "24",
            twentyFive: "25",
            twentySix: "26",
            twentySeven: "27",
            twentyEight: "28",
            twentyNine: "29",
            thirty: "30"
        },
        fontWeight: {
            normal: "Normal",
            bold: "Fett"
        },
        textDecoration: {
            none: "Keine",
            underline: "Unterstrichen",
            overline: "Überstrichen",
            linethrough: "Durchgestrichen"
        },
        setButton: "OK"
    },
    slicerTab: {
        slicerStyle: {
            title: "Slicer Stil",
            groupTitle: {
                light: "Hell",
                dark: "Dunkel"
            },
            light: {
                light1: "Slicer Style Light 1",
                light2: "Slicer Style Light 2",
                light3: "Slicer Style Light 3",
                light4: "Slicer Style Light 4",
                light5: "Slicer Style Light 5",
                light6: "Slicer Style Light 6"
            },
            other: {
                other1: "Slicer Style Other 1",
                other2: "Slicer Style Other 2"
            },
            dark: {
                dark1: "Slicer Style Dark 1",
                dark2: "Slicer Style Dark 2",
                dark3: "Slicer Style Dark 3",
                dark4: "Slicer Style Dark 4",
                dark5: "Slicer Style Dark 5",
                dark6: "Slicer Style Dark 6"
            }
        },
        general: {
            title: "Allgemein",
            name: "Name",
            captionName: "Caption Name",
            itemSorting: {
                title: "Sortierung",
                option: {
                    none: "Keine",
                    ascending: "Aufsteigend",
                    descending: "Absteigend"
                }
            },
            displayHeader: "Kopf anzeigen"
        },
        layout: {
            title: "Layout",
            columnNumber: "Spaltennummer",
            buttonHeight: "Buttonhöhe",
            buttonWidth: "Buttonbreite"
        },
        property: {
            title: "Eigenschaft",
            moveAndSize: "Verschieben und Größe an Zellen anpassen",
            moveAndNoSize: "Verschieben und Größe nicht anpassen",
            noMoveAndSize: "Weder verschieben noch Größe anpassen",
            locked: "Gesperrt"
        },
        filter: {
            title: "Filterung",
            hideItemsWithNoData: "Elemente ohne Daten ausblenden",
            markNoData: "Elemente ohne Daten visuell anzeigen",
            showNoDataLast: "Zuletzt Elemente ohne Daten anzeigen"
        }
    },
    colorPicker: {
        themeColors: "Theme Farben",
        standardColors: "Standard Farben",
        noFills: "Nicht füllen"
    },
    conditionalFormat: {
        setButton: "OK",
        ruleTypes: {
            title: "Typ",
            highlightCells: {
                title: "Regeln für das Hervorheben von Zellen",
                values: {
                    cellValue: "Zellwert",
                    specificText: "Spezifischer Text",
                    dateOccurring: "Auftretendes Datum",
                    unique: "Einmalige",
                    duplicate: "Doppelte"
                }
            },
            topBottom: {
                title: "Oben/Unten-Regeln",
                values: {
                    top10: "Top10",
                    average: "Durchschnitt"
                }
            },
            dataBars: {
                title: "Datenbalken",
                labels: {
                    minimum: "Minimum",
                    maximum: "Maximum",
                    type: "Typ",
                    value: "Wert",
                    appearance: "Darstellung",
                    showBarOnly: "Nur Balken anzeigen",
                    useGradient: "Gradien verwenden",
                    showBorder: "Rahmen anzeigen",
                    barDirection: "Balkenrichtung",
                    negativeFillColor: "Negative Farbe",
                    negativeBorderColor: "Negative Border",
                    axis: "Achsen",
                    axisPosition: "Position",
                    axisColor: "Farben"
                },
                valueTypes: {
                    number: "Zahlen",
                    lowestValue: "Kleinster Wert",
                    highestValue: "Größter Wert",
                    percent: "Prozent",
                    percentile: "Perzentil",
                    automin: "Automin",
                    automax: "Automax",
                    formula: "Formel"
                },
                directions: {
                    leftToRight: "Links-nach-Rechts",
                    rightToLeft: "Right-to-Left"
                },
                axisPositions: {
                    automatic: "Automatik",
                    cellMidPoint: "CellMidPoint",
                    none: "Keine"
                }
            },
            colorScales: {
                title: "Farbskalen",
                labels: {
                    minimum: "Minimum",
                    midpoint: "Midpoint",
                    maximum: "Maximum",
                    type: "Typ",
                    value: "Wert",
                    color: "Farben"
                },
                values: {
                    twoColors: "2-Farben-Skala",
                    threeColors: "3-Farben-Skala"
                },
                valueTypes: {
                    number: "Zahlen",
                    lowestValue: "LowestValue",
                    highestValue: "HighestValue",
                    percent: "Prozent",
                    percentile: "Perzentil",
                    formula: "Formel"
                }
            },
            iconSets: {
                title: "Symbol-Sets",
                labels: {
                    style: "Stil",
                    showIconOnly: "Nur Symbol anzeigen",
                    reverseIconOrder: "Umgekehrte Reihenfolge der Symbole",

                },
                types: {
                    threeArrowsColored: "ThreeArrowsColored",
                    threeArrowsGray: "ThreeArrowsGray",
                    threeTriangles: "ThreeTriangles",
                    threeStars: "ThreeStars",
                    threeFlags: "ThreeFlags",
                    threeTrafficLightsUnrimmed: "ThreeTrafficLightsUnrimmed",
                    threeTrafficLightsRimmed: "ThreeTrafficLightsRimmed",
                    threeSigns: "ThreeSigns",
                    threeSymbolsCircled: "ThreeSymbolsCircled",
                    threeSymbolsUncircled: "ThreeSymbolsUncircled",
                    fourArrowsColored: "FourArrowsColored",
                    fourArrowsGray: "FourArrowsGray",
                    fourRedToBlack: "FourRedToBlack",
                    fourRatings: "FourRatings",
                    fourTrafficLights: "FourTrafficLights",
                    fiveArrowsColored: "FiveArrowsColored",
                    fiveArrowsGray: "FiveArrowsGray",
                    fiveRatings: "FiveRatings",
                    fiveQuarters: "FiveQuarters",
                    fiveBoxes: "FiveBoxes"
                },
                valueTypes: {
                    number: "Zahlen",
                    percent: "Prozent",
                    percentile: "Perzentil",
                    formula: "Formel"
                }
            },
            removeConditionalFormat: {
                title: "Keine"
            }
        },
        operators: {
            cellValue: {
                types: {
                    equalsTo: "Gleich",
                    notEqualsTo: "Ungleich",
                    greaterThan: "Größer",
                    greaterThanOrEqualsTo: "Größer oder Gleich",
                    lessThan: "Kleiner",
                    lessThanOrEqualsTo: "Kleiner oder Gleich",
                    between: "Zwischen",
                    notBetween: "Nicht zwischen"
                }
            },
            specificText: {
                types: {
                    contains: "Enthält",
                    doesNotContain: "Enthält nicht",
                    beginsWith: "Beginnt mit",
                    endsWith: "Ended mit"
                }
            },
            dateOccurring: {
                types: {
                    today: "Heute",
                    yesterday: "Gestern",
                    tomorrow: "Morgen",
                    last7Days: "Letzten 7 Tage",
                    thisMonth: "Dieser Monat",
                    lastMonth: "Letzter Monat",
                    nextMonth: "Nächster Monat",
                    thisWeek: "Diese Woche",
                    lastWeek: "Letzte Woche",
                    nextWeek: "Nächste Woche"
                }
            },
            top10: {
                types: {
                    top: "Oben",
                    bottom: "Unten"
                }
            },
            average: {
                types: {
                    above: "Oberhalb",
                    below: "Unterhalb",
                    equalOrAbove: "Gleich oder oberhalb",
                    equalOrBelow: "Gleich oder unterhalb",
                    above1StdDev: "Above1StdDev",
                    below1StdDev: "Below1StdDev",
                    above2StdDev: "Above2StdDev",
                    below2StdDev: "Below2StdDev",
                    above3StdDev: "Above3StdDev",
                    below3StdDev: "Below3StdDev"
                }
            }
        },
        texts: {
            cells: "Nur Zellen formatieren mit:",
            rankIn: "Werte im Bereich formatieren:",
            inRange: "Werte im ausgewählten Bereich.",
            values: "Formatiere diese Werte:",
            average: "Durchschnitt des ausgewählten Bereichs.",
            allValuesBased: "Alle Zellen auf der Grundlage ihrer Werte formatieren:",
            all: "Formatiere alle:",
            and: "und",
            formatStyle: "Benutze Stil",
            showIconWithRules: "Jedes Symbol gemäß diesen Regeln anzeigen:"
        },
        formatSetting: {
            formatUseBackColor: "Hintergrundfarbe",
            formatUseForeColor: "Vordergrundfarbe",
            formatUseBorder: "Rahmen"
        }
    },
    cellTypes: {
        title: "Zelltypen",
        buttonCellType: {
            title: "Button Zelltyp",
            values: {
                marginTop: "Rand oben",
                marginRight: "Rand rechts",
                marginBottom: "Rand unten",
                marginLeft: "Rand links",
                text: "Text",
                backColor: "Hintergrundfarbe"
            }
        },
        checkBoxCellType: {
            title: "CheckBox Zelltyp",
            values: {
                caption: "Bildunterschrift",
                textTrue: "Text Wahr",
                textIndeterminate: "Text Unbestimmt",
                textFalse: "Text Falsch",
                textAlign: {
                    title: "Text Ausrichtung",
                    values: {
                        top: "Oben",
                        bottom: "Unten",
                        left: "Links",
                        right: "Rechts"
                    }
                },
                isThreeState: "Drei Status"
            }
        },
        comboBoxCellType: {
            title: "ComboBox Zelltyp",
            values: {
                editorValueType: {
                    title: "Werteingabe",
                    values: {
                        text: "Text",
                        index: "Index",
                        value: "Wert"
                    }
                },
                itemsText: "Text",
                itemsValue: "Wert"
            }
        },
        hyperlinkCellType: {
            title: "Hyperlink Zelltyp",
            values: {
                linkColor: "Link Farbe",
                visitedLinkColor: "Besuchter Link Farbe",
                text: "Text",
                linkToolTip: "Link Tooltip",
                address: "Adresse"
            }
        },
        clearCellType: {
            title: "Keine"
        },
        setButton: "OK",
        insertButton: "Einsetzen"
    },
    sparklineDialog: {
        title: "SparklineEx Einstellungen",
        detail: "SparklineEx Detail Einstellungen",
        sparklineExType: {
            title: "Typ",
            values: {
                line: "Linie",
                column: "Balken",
                winLoss: "Win/Loss",
                pie: "Kuchen",
                area: "Fläche",
                scatter: "Scatter",
                spread: "Spread",
                stacked: "Stacked",
                bullet: "Bullet",
                hbar: "Hbar",
                vbar: "Vbar",
                variance: "Varianz",
                boxplot: "BoxPlot",
                cascade: "Cascade",
                pareto: "Pareto"
            }
        },
        lineSparkline: {
            dataRange: "Datenbereich",
            locationRange: "Datenreferenz",
            dataRangeError: "Datenbereich ist ungültig!",
            singleDataRange: "Datenbereich sollte eine einzelne Zeile oder Spalte sein.",
            locationRangeError: "Datenreferenz ist ungültig!"
        },
        bulletSparkline: {
            measure: "Measure",
            target: "Target",
            maxi: "Maxi",
            forecast: "Forecast",
            good: "Gut",
            bad: "Schlecht",
            tickunit: "Tickunit",
            colorScheme: "Farbschema",
            vertical: "Vertikal"
        },
        hbarSparkline: {
            value: "Wert",
            colorScheme: "Farbschema"
        },
        varianceSparkline: {
            variance: "Varianz",
            reference: "Referenz",
            mini: "Mini",
            maxi: "Maxi",
            mark: "Mark",
            tickunit: "TickUnit",
            colorPositive: "Farbe Positive",
            colorNegative: "Farbe Negative",
            legend: "Legende",
            vertical: "Vertikal"
        }
    },
    barCodeDialog: {
        title: "BarCode Einstellungen",
        detail: "BarCode Detail Einstellungen",
        barCodeType: {
            title: "Typ",
            values: {
                qrCode:"QRcode",
                dataMatrix:"DataMatrix",
                pdf417:"PDF417",
                ean13:"EAN13",
                ean8:"EAN8",
                codaBar:"Codabar",
                code39:"Code39",
                code93:"Code93",
                code128:"Code128",
                code49:"Code49",
                gs1_128:"GS1_128"
            }
        },
        ean8:{
            dataRange: "Datenbereich",
            locationRange: "Location Range",
            dataRangeError: "Datenbereich ist ungültig!",
            singleDataRange: "Datenbereich sollte eine einzelne Spalte oder Zeile sein.",
            locationRangeError: "Location range is invalid!",
            color: "Farben",
            backgroundColor: "Hintergrundfarbe",
        },
        gs1_128:{
            showLabel: "Label anzeigen",
            labelPosition: "Label Position"
        },
        ean13:{
            addOn: "Text für QRCode",
            addOnLabelPosition: "Etikett Position"
        },
        codaBar:{
            checkDigit: "Prüfziffer",
            nwRatio: "Verhältnis schmaler/breiter Balken"
        },
        code39:{
            labelWithStartAndStopCharacter: "Label With Character",
            nwRatio: "Verhältnis schmaler/breiter Balken",
        },
        code49:{
            grouping: "Grouping",
            groupNo: "Group No"
        },
        code93:{
            checkDigit: "Prüfziffer",
            fullASCII: "Full ASCII"
        },
        code128:{
            codeSet: "Code Set"
        },
        pdf417:{
            errorCorrectionLevel: "Fehlerkorrektur-Ebene",
            rows: "Zeilen",
            columns: "Spalten",
            compact: "Kompakt"
        },
        dataMatrix:{
            eccMode: "Ecc Mode",
            ecc200SymbolSize: "Ecc200 Symbol Size",
            ecc200EndcodingMode: "Ecc200 Endcoding Mode",
            ecc00_140Symbole: "Ecc00_140 Symbole",
            structureAppend: "Structure Append",
            structureNumber: "Structure Number",
            fileIdentifier: "Datei-Bezeichner"
        },
        qrCode:{
            errorCorrectionLevel: "Fehlerkorrektur-Ebene",
            model: "Model",
            version: "Version",
            mask: "Maske",
            connection: "Verbindung",
            connectionNo: "Keine Verbindung",
            charCode: "Char Code",
            charset: "Charset"
        },
        setButton: "OK"
    },
    slicerDialog: {
        insertSlicer: "Slicer einsetzen"
    },
    tooltips: {
        style: {
            fontBold: "Text in Fettschrift.",
            fontItalic: "Text in Kursiv",
            fontUnderline: "Text unterstreichen.",
            fontDoubleUnderline: "Text doppelt unterstreichen.",
            fontOverline: "Text überstreichen.",
            fontLinethrough: "Text durchstreichen."
        },
        alignment: {
            leftAlign: "Text links ausrichten.",
            centerAlign: "Text zentrieren.",
            rightAlign: "Text rechts ausrichten.",
            topAlign: "Text oben ausrichten.",
            middleAlign: "Text mittig ausrichten.",
            bottomAlign: "Text unten ausrichten.",
            decreaseIndent: "Einzug verkleinern.",
            increaseIndent: "Einzug vergrößern."
        },
        border: {
            outsideBorder: "Äußerer Rahmen",
            insideBorder: "Inside Border",
            allBorder: "Alle Rahmen",
            leftBorder: "Linker Rahmen",
            innerVertical: "Inner Vertikal",
            rightBorder: "Rechter Rahmen",
            topBorder: "Oberer Rahmen",
            innerHorizontal: "Inner Horizontal",
            bottomBorder: "Unterer Rahmen",
            noBorder: "Keine",
            diagonalUpLine: "Diagonal Up Line",
            diagonalDownLine: "Diagonal Down Line",
        },
        format: {
            percentStyle: "Prozentstil",
            commaStyle: "Kommastil",
            increaseDecimal: "Mehr Dezimalstellen",
            decreaseDecimal: "Weniger Dezimalstellen"
        }
    },
    defaultTexts: {
        buttonText: "Button",
        checkCaption: "Check",
        comboText: "United States,China,Japan",
        comboValue: "US,CN,JP",
        hyperlinkText: "SpreadJS",
        hyperlinkToolTip: "SpreadJS Web Site",
        hyperlinkAddress: "http://www.grapecity.com/en/spreadjs"
    },
    messages: {
        invalidImportFile: "Ungültige Datei, Import fehlgeschlagen.",
        duplicatedSheetName: "Doppelter Blattname.",
        duplicatedTableName: "Doppelter Tabellenname.",
        rowColumnRangeRequired: "Bitte wählen Sie einen Zeilen- oder Spaltenbereich aus.",
        imageFileRequired: "Die Datei muss ein Bild sein!",
        duplicatedSlicerName: "Duplizierter Slicername.",
        invalidSlicerName: "Der Name des Slicers ist nicht gültig."
    },
    contextMenu: {
        cutItem: "Ausschneiden",
        copyItem: "Kopieren",
        pasteItem: "Einsetzen",
        insertItem: "Einfügen",
        deleteItem: "Löschen",
        mergeItem: "Merge",
        unmergeItem: "Unmerge"
    },
    dialog: {
        ok: "OK",
        cancel: "Abbrechen"
    },
    find: {
        title: "Suchen",
        options: "Optionen",
        findwhat: "Suchen",
        within: { title: "In", worksheet: "Worksheet", workbook: "Workbook" },
        searchby: { title: "Suche nach", rows: "Zeilen", columns: "Spalten" },
        lookin: { title: "Suche in", values: "Werte", formulas: "Formeln" },
        matchcase: "Groß/Kleinschreibung",
        matchexactly: "Genaue Übereinstimmung",
        usewildcards: "Wildcards nutzen",
        findall: "Alle finden",
        findnext: "Nächstes finden",
        result: {
            header: {
                sheet: "Blatt",
                cell: "Zelle",
                value: "Wert",
                formula: "Formel"
            },
            countssuffix: " Zelle(n) gefunden",
            nomatch: "Die gesuchten Daten wurden nicht gefunden."
        }
    },
    printSetting: {
        printButton: "Drucken",
        options: {
            title: "Optionen",
            range: {
                title: "Druckbereich",
                items: {
                    activeSheet: "Aktuelles Blatt",
                    workbook: "Gesamtes Arbeitsbuch"
                }
            },
            showBorder: "Zeige Rahmen",
            showGridline: "Zeige Rasterlinien",
            headerAndFooter: {
                title: "Kopfteile / Fußteile",
                header: {
                    title: "Kopfteile",
                    items: [
                        { text: "(Keiner)" },
                        { value: { center: "Seite &P" } },
                        { value: { right: "&A" } },
                        { value: { center: "Seite &P", right: "&A" } }
                    ],
                    custom: "Angepasster Kopfteil"
                },
                footer: {
                    title: "Fußteil",
                    items: [
                        { text: "(Keiner)" },
                        { value: { center: "Seite &P von &N" }  },
                        { value: { left: "&Vertraulich&B", center: "&D", right: "Seite &P" }}
                    ],
                    custom: "Angepasster Fußteil"
                },
                custom: {
                  left: "Linker Abschnitt",
                  center: "Mittlerer Abschnitt",
                  right: "Rechter Abschnitt",
                  items: [
                      { text: "(Keiner)" },
                      { text: "Seitennummer", value: "&P" },
                      { text: "Anzahl Seiten", value: "&N" },
                      { text: "Blatt Name", value: "&A" },
                      { text: "Arbeitsbuch Name", value: "&F" },
                      { text: "Aktuelles Datum", value: "&D" },
                      { text: "Aktuelles Datum und zeit", value: "&D &T"}
                    ],
                    insert: "Einsetzen",
                    image: {
                        value: "&G",
                        emptylist: "(Auswählen...)"
                    },
                    insertPicture: "Bild einsetzen",
                    tooltips: {
                        insert: "Wählen Sie den Abschnitt und positionieren Sie die Einfügemarke und wählen Sie dann das einzufügende Element.",
                        insertPicture: "Wählen Sie den Abschnitt und positionieren Sie die Einfügemarke und wählen Sie dann ein hochgeladenes Bild zum Einfügen.",
                        imageList: "Suchen und wählen Sie das Bild, das für die Kopf-/Fußzeile hochgeladen werden soll.\nWir schlagen vor, dass das Bild nicht größer als 200px x 200px sein sollte."
                    }
                },
                preview: "Vorschau"
            }

        }
    },
    fileMenu: {
      items: {
          new: "Neu",
          save: "Speichern",
            password: "Kennwort:",
            browse:"Auswählen",
            close: "Schließen",
            filename:"Dateiname:",
          open: {
              title: "Öffnen"
          },
          print: {
              title: "Drucken"
          },
          settings: {
              title: "Einstellungen"
          }
      }
    },
    settingPane: {
      title: {
          comment: "Kommentar",
          slicer: "Slicer",
      }
    },
    functions: {
        setting: {
            defaultDescription: "Wählen Sie eine Funktion und erhalten Sie ihre Beschreibung.",
            filterPlaceHolder: "Suche Funktion"
        },
        categories: {
            datebase: {
                text: "Datenbank",
                items: [
                    "DAVERAGE",
                    "DCOUNT",
                    "DCOUNTA",
                    "DGET",
                    "DMAX",
                    "DMIN",
                    "DPRODUCT",
                    "DSTDEV",
                    "DSTDEVP",
                    "DSUM",
                    "DVAR",
                    "DVARP"
                ]
            },
            dateandtime: {
                text: "Datum & Zeit",
                items: [
                    "DATE",
                    "DATEDIF",
                    "DATEVALUE",
                    "DAY",
                    "DAYS360",
                    "EDATE",
                    "EOMONTH",
                    "HOUR",
                    "MINUTE",
                    "MONTH",
                    "NETWORKDAYS",
                    "NOW",
                    "SECOND",
                    "TIME",
                    "TIMEVALUE",
                    "TODAY",
                    "WEEKDAY",
                    "WEEKNUM",
                    "WORKDAY",
                    "YEAR",
                    "YEARFRAC"
                ]
            },
            engineering: {
                text: "Technisch",
                items: [
                    "BESSELI",
                    "BESSELJ",
                    "BESSELK",
                    "BESSELY",
                    "BIN2DEC",
                    "BIN2HEX",
                    "BIN2OCT",
                    "COMPLEX",
                    "CONVERT",
                    "DEC2BIN",
                    "DEC2HEX",
                    "DEC2OCT",
                    "DELTA",
                    "ERF",
                    "ERFC",
                    "GESTEP",
                    "HEX2BIN",
                    "HEX2DEC",
                    "HEX2OCT",
                    "IMABS",
                    "IMAGINARY",
                    "IMARGUMENT",
                    "IMCONJUGATE",
                    "IMCOS",
                    "IMDIV",
                    "IMEXP",
                    "IMLN",
                    "IMLOG10",
                    "IMLOG2",
                    "IMPOWER",
                    "IMPRODUCT",
                    "IMREAL",
                    "IMSIN",
                    "IMSQRT",
                    "IMSUB",
                    "IMSUM",
                    "OCT2BIN",
                    "OCT2DEC",
                    "OCT2HEX"
                ]
            },
            financial: {
                text: "Finanz",
                items: [
                    "ACCRINT",
                    "ACCRINTM",
                    "AMORDEGRC",
                    "AMORLINC",
                    "COUPDAYBS",
                    "COUPDAYS",
                    "COUPDAYSNC",
                    "COUPNCD",
                    "COUPNUM",
                    "COUPPCD",
                    "CUMIPMT",
                    "CUMPRINC",
                    "DB",
                    "DDB",
                    "DISC",
                    "DOLLARDE",
                    "DOLLARFR",
                    "DURATION",
                    "EFFECT",
                    "FV",
                    "FVSCHEDULE",
                    "INTRATE",
                    "IPMT",
                    "IRR",
                    "ISPMT",
                    "MDURATION",
                    "MIRR",
                    "NOMINAL",
                    "NPER",
                    "NPV",
                    "ODDFPRICE",
                    "ODDFYIELD",
                    "ODDLPRICE",
                    "ODDLYIELD",
                    "EURO",
                    "EUROCONVERT",
                    "PMT",
                    "PPMT",
                    "PRICE",
                    "PRICEDISC",
                    "PRICEMAT",
                    "PV",
                    "RATE",
                    "RECEIVED",
                    "SLN",
                    "SYD",
                    "TBILLEQ",
                    "TBILLPRICE",
                    "TBILLYIELD",
                    "VDB",
                    "XIRR",
                    "XNPV",
                    "YIELD",
                    "YIELDDISC",
                    "YIELDMAT"
                ]
            },
            information: {
                text: "Information",
                items: [
                    "ERROR.TYPE",
                    "ISBLANK",
                    "ISERR",
                    "ISERROR",
                    "ISEVEN",
                    "ISLOGICAL",
                    "ISNA",
                    "ISNONTEXT",
                    "ISNUMBER",
                    "ISODD",
                    "ISREF",
                    "ISTEXT",
                    "N",
                    "NA",
                    "TYPE"
                ]
            },
            logical: {
                text: "Logisch",
                items: [
                    "AND",
                    "FALSE",
                    "IF",
                    "IFERROR",
                    "NOT",
                    "OR",
                    "TRUE"
                ]
            },
            lookupAndReference: {
                text: "Lookup & Reference",
                items: [
                    "ADDRESS",
                    "CHOOSE",
                    "COLUMN",
                    "COLUMNS",
                    "HLOOKUP",
                    "INDEX",
                    "LOOKUP",
                    "MATCH",
                    "OFFSET",
                    "ROW",
                    "ROWS",
                    "TRANSPOSE",
                    "VLOOKUP"
                ]
            },
            mathAndTrigonometry: {
                text: "Math & Trig",
                items: [
                    "ABS",
                    "ACOS",
                    "ACOSH",
                    "ASIN",
                    "ASINH",
                    "ATAN",
                    "ATAN2",
                    "ATANH",
                    "CEILING",
                    "COMBIN",
                    "COS",
                    "COSH",
                    "DEGREES",
                    "EVEN",
                    "EXP",
                    "FACT",
                    "FACTDOUBLE",
                    "FLOOR",
                    "GCD",
                    "INT",
                    "LCM",
                    "LN",
                    "LOG",
                    "LOG10",
                    "MDETERM",
                    "MINVERSE",
                    "MMULT",
                    "MOD",
                    "MROUND",
                    "MULTINOMIAL",
                    "ODD",
                    "PI",
                    "POWER",
                    "PRODUCT",
                    "QUOTIENT",
                    "RADIANS",
                    "RAND",
                    "RANDBETWEEN",
                    "ROMAN",
                    "ROUND",
                    "ROUNDDOWN",
                    "ROUNDUP",
                    "SERIESSUM",
                    "SIGN",
                    "SIN",
                    "SINH",
                    "SQRT",
                    "SQRTPI",
                    "SUBTOTAL",
                    "SUM",
                    "SUMIF",
                    "SUMIFS",
                    "SUMPRODUCT",
                    "SUMSQ",
                    "SUMX2MY2",
                    "SUMX2PY2",
                    "SUMXMY2",
                    "TAN",
                    "TANH",
                    "TRUNC"
                ]
            },
            statistical: {
                text: "Statistisch",
                items: [
                    "AVEDEV",
                    "AVERAGE",
                    "AVERAGEA",
                    "AVERAGEIF",
                    "AVERAGEIFS",
                    "BETADIST",
                    "BETAINV",
                    "BINOMDIST",
                    "CHIDIST",
                    "CHIINV",
                    "CHITEST",
                    "CONFIDENCE",
                    "CORREL",
                    "COUNT",
                    "COUNTA",
                    "COUNTBLANK",
                    "COUNTIF",
                    "COUNTIFS",
                    "COVAR",
                    "CRITBINOM",
                    "DEVSQ",
                    "EXPONDIST",
                    "FDIST",
                    "FINV",
                    "FISHER",
                    "FISHERINV",
                    "FORECAST",
                    "FREQUENCY",
                    "FTEST",
                    "GAMMADIST",
                    "GAMMAINV",
                    "GAMMALN",
                    "GEOMEAN",
                    "GROWTH",
                    "HARMEAN",
                    "HYPGEOMDIST",
                    "INTERCEPT",
                    "KURT",
                    "LARGE",
                    "LINEST",
                    "LOGEST",
                    "LOGINV",
                    "LOGNORMDIST",
                    "MAX",
                    "MAXA",
                    "MEDIAN",
                    "MIN",
                    "MINA",
                    "MODE",
                    "NEGBINOMDIST",
                    "NORMDIST",
                    "NORMINV",
                    "NORMSDIST",
                    "NORMSINV",
                    "PEARSON",
                    "PERCENTILE",
                    "PERCENTRANK",
                    "PERMUT",
                    "POISSON",
                    "PROB",
                    "QUARTILE",
                    "RANK",
                    "RSQ",
                    "SKEW",
                    "SLOPE",
                    "SMALL",
                    "STANDARDIZE",
                    "STDEV",
                    "STDEVA",
                    "STDEVP",
                    "STDEVPA",
                    "STEYX",
                    "TDIST",
                    "TINV",
                    "TREND",
                    "TRIMMEAN",
                    "TTEST",
                    "VAR",
                    "VARA",
                    "VARP",
                    "VARPA",
                    "WEIBULL",
                    "ZTEST"
                ]
            },
            text: {
                text: "Text",
                items: [
                    "CHAR",
                    "CLEAN",
                    "CODE",
                    "CONCATENATE",
                    "DOLLAR",
                    "EXACT",
                    "FIND",
                    "FIXED",
                    "LEFT",
                    "LEN",
                    "LOWER",
                    "MID",
                    "PROPER",
                    "REPLACE",
                    "REPT",
                    "RIGHT",
                    "SEARCH",
                    "SUBSTITUTE",
                    "T",
                    "TEXT",
                    "TRIM",
                    "UPPER",
                    "VALUE"
                ]
            }
        }
    },
    addChartElement: {
        axes:{
            axes:'Achsen',
            moreAxisOption:'Weitere Achsen Optionen'
        },
        axisTitles:{
            axisTitles:'Achsen Titel',
            moreAxisTitlesOption:'Weitere Achsen Titel Optionen'
        },
        chartTitle:{
            chartTitle:'Diagramm Titel',
            moreChartTitleOption:'Weitere Diagramm Titel Optionen'
        },
        gridLines:{
            gridLines:'Rasterlinien',
            moreGridLinesOption:'Weitere Rasterlinien Optionen'
        },
        dataLabels:{
            dataLabels:'Datenetiketten',
            moreDataLabelsOption:'Weitere Datenetiketten Optionen'
        },
        legend:{
            legend:'Legende',
            moreLegendOption:'Weitere Legende Optionen'
        },
        primaryHorizontal:'Primary Horizontal',
        primaryVertical:'Primary Vertical',
        secondaryHorizontal:'Secondary Horizontal',
        secondaryVertical:'Secondary Vertical',
        none:'Keine',
        aboveChart:'Über Diagramm',
        primaryMajorHorizontal:'Primary Major Horizontal',
        primaryMajorVertical:'Primary Major Vertical',
        primaryMinorHorizontal:'Primary Minor Horizontal',
        primaryMinorVertical:'Primary Minor Vertical',
        secondaryMajorHorizontal:'Secondary Major Horizontal',
        secondaryMajorVertical:'Secondary Major Vertical',
        secondaryMinorHorizontal:'Secondary Minor Horizontal',
        secondaryMinorVertical:'Secondary Minor Vertical',
        center:'Zentriert',
        insideEnd:'Inside End',
        outsideEnd:'Outside End',
        bestFit:'Angepasst',
        above:'Oberhalb',
        below:'Unterhalb',
        show:'Anzeigen',
        right:'Rechts',
        top:'Oben',
        left:'Links',
        bottom:'Unten'
    },
    richTextDialog: {
        editRichText: "Rich Text bearbeiten",
        title:"Rich Text",
        font:"Schrift",
        size:"Schriftgröße",
        bold:"Fett",
        italic:"Kursiv",
        underline:"Unterstrichen",
        strikethrough:"Durchgestrichen",
        colorPicker:"Farbauswahl",
        superScript:"Hochgestellt",
        subScript:"Tiefgestellt"
    },
    shape: {
        connector: 'Linien',
        blockArrows: 'Block Pfeile',
        flowchart: 'Flowchart',
        callouts: 'Ausrufe',
        rectangles: 'Vierecke',
        equationShapes:'Equation Shapes',
        basicShapes: 'Standard Formen',
        starsAndBanners: 'Stars And Banners'
    }
};
