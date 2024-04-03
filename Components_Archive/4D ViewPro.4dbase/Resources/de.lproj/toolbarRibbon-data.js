var data = {
    "selected": 1,
    "tabs": [
        {
            "title": "Datei",
            "name": "file"
        },
        {
            "title": "START",
            "name": "home",
            "collapse": ["groupStyle2", "groupFont", "groupAlignment", "*groupStyle3", "groupStyle1"],
            "groupCollapseItems": ["groupStyle1"],
            "groups": [
                {
                    "tools": [
                        {
                            "type": "group",
                            "collapseGroup": "groupFont",
                            "centerAlign": true,
                            "items": [
                                {
                                    "type": "input-group",
                                    "name": "fontFamily",
                                    "width": 70,
                                    "dropdown": ["Arial", "Arial Black", "Calibri", "Cambria", "Century", "Courier New", "Comic Sans MS", "Garamond", "Georgia", "Malgun Gothic", "Mangal", "Meiryo", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "Roboto", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"]
                                },
                                {
                                    "type": "input-group",
                                    "name": "fontSize",
                                    "width": 40,
                                    "dropdown": [8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72]
                                },
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Bold",
                            "name": "bold",
                            "text": "Fett",
                            "tooltip": "Fett",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Italic",
                            "name": "italic",
                            "text": "Kursiv",
                            "tooltip": "Kursiv",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Underline",
                            "name": "underline",
                            "text": "Unterstrichen",
                            "tooltip": "Unterstrichen",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite UnderlineDouble",
                            "name": "doubleUnderline",
                            "text": "Doppelt Unterstrichen",
                            "tooltip": "Doppelt Unterstrichen",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Rahmen",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "sprite BorderBottomNoToggle",
                                    "name": "border",
                                    "text": "Rahmen",
                                    "header": "Rahmen",
                                    "minWidth": 280,
                                    "dropdown": [
                                        { "value": "bottom", "text": "Rahmen unten", "iconClass": "sprite BorderBottom" },
                                        { "value": "top", "text": "Rahmen oben", "iconClass": "sprite BorderTop" },
                                        { "value": "left", "text": "Rahmen links", "iconClass": "sprite BorderLeft" },
                                        { "value": "right", "text": "Rahmen rechts", "iconClass": "sprite BorderRight" },
                                        "",
                                        { "value": "none", "text": "Kein Rahmenr", "iconClass": "sprite BorderNone" },
                                        { "value": "all", "text": "Alle Rahmen", "iconClass": "sprite BordersAll" },
                                        { "value": "outside", "text": "Äußere Rahmen'", "iconClass": "sprite BorderOutside" },
                                        { "value": "thick", "text": "Dicker Rahmen", "iconClass": "sprite BorderThickOutside" },
                                        "",
                                        { "value": "doublebottom", "text": "Doppelter Rahmen unten", "iconClass": "sprite BorderDoubleBottom" },
                                        { "value": "thickbottom", "text": "Dicker Rahmen unten", "iconClass": "sprite BorderThickBottom" },
                                        { "value": "top-bottom", "text": "Oberer und unterer Rahmen", "iconClass": "sprite BorderTopAndBottom" },
                                        { "value": "top-thickbottom", "text": "Dicker Rahmen unten und oben", "iconClass": "sprite BorderTopAndThickBottom" },
                                        { "value": "top-doublebottom", "text": "Doppelter Rahmen unten und oben", "iconClass": "sprite BorderTopAndDoubleBottom" },
                                        "",
                                        { "value": "more", "text": "Mehr Rahmen...", "iconClass": "sprite BordersMoreDialog" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Füllfarbe",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite FillBackColorSplitDropdown",
                                    "name": "backColor",
                                    "text": "Füllfarbe",
                                    "colorPickerOptions": { "nofill": { "show": true, "text": "Nichts", "color": "white" }, "header": "Füllfarbe" }
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Schriftfarbe",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite GroupBasicText",
                                    "name": "foreColor",
                                    "text": "Schriftfarbe",
                                    "colorPickerOptions": { "autocolor": { "show": false, "text": "Automatik", "color": "black" }, "header": "Schriftfarbe" }
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Overline",
                            "name": "overline",
                            "text": "Überschrift",
                            "tooltip": "Überschrift",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Strikethrough",
                            "name": "strikethrough",
                            "text": "Durchgestrichen",
                            "tooltip": "Durchgestrichen",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "dropdown",
                            "minWidth": 210,
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "font",
                            "header": "Schrift",
                            "items": []
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "dropdown",
                            "iconClass": "sprite AlignCenter",
                            "name": "align",
                            "tooltip": "Ausrichtung",
                            "header": "Ausrichtung",
                            "items": ["indent", "outdent"],
                            "rows": [
                                {
                                    "type": "icon-group",
                                    "items": [
                                        {
                                            "iconClass": "sprite AlignTopExcel",
                                            "name": "valign-top",
                                            "text": "Oben",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignMiddleExcel",
                                            "name": "valign-center",
                                            "text": "Mitte",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignBottomExcel",
                                            "name": "valign-bottom",
                                            "text": "Unten",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        }
                                    ]
                                },
                                {
                                    "type": "icon-group",
                                    "items": [
                                        {
                                            "iconClass": "sprite AlignLeft",
                                            "name": "halign-left",
                                            "text": "Links",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignCenter",
                                            "name": "halign-center",
                                            "text": "Zentriert",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignRight",
                                            "name": "halign-right",
                                            "text": "Rechts",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite MergeCenter",
                            "name": "cellmerge",
                            "text": "Verbinden & Zentrieren",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite WrapText",
                            "name": "wordwrap",
                            "text": "Textumbruch",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite CellAlignmentOptions",
                            "name": "verticalText",
                            "text": "Vertikaler Text",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentIncrease",
                            "name": "indent",
                            "text": "Einzug vergrößern",
                            "collapseGroup": "groupIndent"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentDecrease",
                            "name": "outdent",
                            "text": "Einzug verkleinern",
                            "collapseGroup": "groupIndent"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Zellen Format",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite DollarSign",
                                    "name": "cellformat",
                                    "text": "Zellen Format",
                                    "dropdown": [
                                        { "value": "nullValue", "text": "Allgemein", "iconClass": "sprite DataTypeGeneral" },
                                        { "value": "0.00", "text": "Zahl", "iconClass": "sprite DataTypeNumber" },
                                        { "value": "#,##0.00 €", "text": "Währung", "iconClass": "sprite DataTypeCurrency" },
                                        { "value": "#,##0.00 €;-#,##0.00 €;\"-\"??;@ €", "text": "Finanz", "iconClass": "sprite DataTypeCurrencyBasic" },
                                        { "value": "d.m.yyyy", "text": "Kurzes Datum", "iconClass": "sprite DataTypeShortDate" },
                                        { "value": "dddd, dd. mmmm yyyy", "text": "Langes Datum", "iconClass": "sprite DataTypeLongDate" },
                                        { "value": "hh:mm:ss", "text": "Zeit", "iconClass": "sprite DataTypeTime" },
                                        { "value": "0%", "text": "Prozent", "iconClass": "sprite PercentStyle" },
                                        { "value": "# ?/?", "text": "Bruch", "iconClass": "sprite DataTypeStandard" },
                                        { "value": "0.00E+00", "text": "Wissenschaftlich", "iconClass": "sprite DataTypeScientific" },
                                        { "value": "@", "text": "Text", "iconClass": "sprite DataTypeText" },
                                        "",
                                        { "value": "custom", "text": "Angepasstes Format" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Zahlenformat",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite PercentStyle",
                                    "name": "numberformat",
                                    "text": "Zahlenformat",
                                    "dropdown": [
                                        { "value": "percentStyle", "text": "Prozent", "iconClass": "sprite PercentStyle" },
                                        { "value": "commaStyle", "text": "Komma", "iconClass": "sprite CommaStyle" },
                                        { "value": "increaseDecimal", "text": "Mehr Dezimalstellen", "iconClass": "sprite DecimalsIncrease" },
                                        { "value": "decreaseDecimal", "text": "Weniger Dezimalstellen", "iconClass": "sprite DecimalsDecrease" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Zelltyp",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite CellProperties",
                                    "name": "celltype",
                                    "text": "Zelltyp",
                                    "dropdown": [
                                        { "value": "button", "text": "Button Zelltyp" },
                                        { "value": "checkbox", "text": "Checkbox Zelltyp" },
                                        { "value": "combobox", "text": "Combobox Zelltyp" },
                                        { "value": "hyperlink", "text": "Hyperlink Zelltyp" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "protectsheet",
                            "text": "Blatt schützen",
                            "tooltips": ["Blatt schützen", "Blatt Schutz aufheben"],
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "unlockcells",
                            "text": "Zellen entsperren",
                            "tooltips": ["Zellen sperren", "Zellen entsperren"],
                            "toggle": true,
                            "checked": true
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Einfügen & Löschen",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite InsertCellMenu",
                                    "name": "cellsgroup",
                                    "text": "Einfügen & Löschen",
                                    "dropdown": [
                                        { "value": "insertRows", "text": "Zeilen einfügen", "iconClass": "sprite InsertRow" },
                                        { "value": "insertColumns", "text": "Spalten einfügen", "iconClass": "sprite InsertColumns" },
                                        { "value": "insert-shiftCellsRight", "text": "Zellen einfügen und nach rechts schieben", "iconClass": "sprite InsertColumnLeft" },
                                        { "value": "insert-shiftCellsDown", "text": "Zellen einfügen und nach unten schieben", "iconClass": "sprite InsertRowAbove" },
                                        { "value": "deleteRows", "text": "Zeilen löschen", "iconClass": "sprite CellsDelete" },
                                        { "value": "deleteColumns", "text": "Spalten löschen", "iconClass": "sprite CellsDeleteSmart" },
                                        { "value": "delete-shiftCellsLeft", "text": "Zellen löschen und nach links schieben", "iconClass": "sprite CellsDelete" },
                                        { "value": "delete-shiftCellsUp", "text": "Zellen löschen und nach oben schieben", "iconClass": "sprite CellsDeleteSmart" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Clear",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite ClearMenu",
                                    "name": "clearformat",
                                    "text": "Löschen",
                                    "dropdown": [
                                        { "value": "clearAll", "text": "Alles löschen", "iconClass": "sprite ClearAll" },
                                        { "value": "clearFormatting", "text": "Formatierung löschen", "iconClass": "sprite ClearAllFormatting" },
                                        { "value": "clear", "text": "Löschen", "iconClass": "sprite Clear" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "sprite Clear",
                            "name": "conditionalformat",
                            "text": "Bedingte Formatierung"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SearchUI",
                            "name": "find",
                            "text": "Suchen"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Einsetzen",
            "name": "insert",
            "collapse": ["*groupInsert"],
            "groups": [
                {
                    "tooltip": "Einsetzen",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertTable icon-text",
                            "name": "insertTable",
                            "text": "Tabelle",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertPictureDialog icon-text",
                            "name": "insertPicture",
                            "text": "Bilder",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertLink icon-text",
                            "name": "insertLink",
                            "text": "Link",
                            "header": "Link einsetzen",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertNewComment icon-text",
                            "name": "insertComment",
                            "text": "Kommentar",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "group",
                            "tooltip": "Sparklines",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite SparklineLineInsert icon-text",
                                    "name": "insertSparkline",
                                    "haslabel": true,
                                    "text": "Sparklines",
                                    "dropdown": [
                                        { "value": "line", "text": "Linien Sparkline" },
                                        { "value": "column", "text": "Spalten Sparkline" },
                                        { "value": "winloss", "text": "Win/Loss Sparkline" },
                                        { "value": "pie", "text": "Kreis Sparkline" },
                                        { "value": "area", "text": "Bereich Sparkline" },
                                        { "value": "scatter", "text": "Scatter Sparkline" },
                                        { "value": "spread", "text": "Spread Sparkline" },
                                        { "value": "stacked", "text": "Stacked Sparkline" },
                                        { "value": "boxplot", "text": "BoxPlot Sparkline" },
                                        { "value": "cascade", "text": "Cascade Sparkline" },
                                        { "value": "pareto", "text": "Pareto Sparkline" },
                                        { "value": "bullet", "text": "Bullet Sparkline" },
                                        { "value": "hbar", "text": "Hbar Sparkline" },
                                        { "value": "vbar", "text": "Vbar Sparkline" },
                                        { "value": "vari", "text": "Variance Sparkline" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "BarCode",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "barcode icon-text",
                                    "name": "insertBarCode",
                                    "haslabel": true,
                                    "text": "BarCode",
                                    "dropdown": [
                                        { "value": "qrCode", "text": "QRCode" },
                                        { "value": "dataMatrix", "text": "DataMatrix" },
                                        { "value": "codabar", "text": "Codabar" },
                                        { "value": "pdf417", "text": "PDF417" },
                                        { "value": "ean8", "text": "EAN8" },
                                        { "value": "ean13", "text": "EAN13" },
                                        { "value": "gs1_128", "text": "GS1_128" },
                                        { "value": "code39", "text": "Code39" },
                                        { "value": "code49", "text": "Code49" },
                                        { "value": "code93", "text": "Code93" },
                                        { "value": "code128", "text": "Code128" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Diagramm",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "insertChart",
                                    "haslabel": true,
                                    "text": "Diagramm",
                                    "dropdown": [
                                        {
                                            "value": "column1",
                                            "text": "Säulendiagram",
                                            "header": "Säulendiagram",
                                            "iconClass": "chartIcon ColumnChart",
                                            "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChart",
                                                    "haslabel": true,
                                                    "text": "Säulendiagram",
                                                    "dropdown": [
                                                        {  "value": "columnClustered", "text": "Gruppierte Spalte", "iconClass": "chartIconBase clustered-column-icon" },
                                                        {  "value": "columnStacked", "text": "Gestapelte Säule", "iconClass": "chartIconBase stacked-column-icon" },
                                                        {  "value": "columnStacked100", "text": "100% gestapelte Spalten", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line1", "text": "Liniendiagramm", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChart",
                                                    "haslabel": true,
                                                    "text": "Liniendiagramm",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Linie", "iconClass": "chartIconBase line-icon" },
                                                        {  "value": "lineStacked", "text": "Gestapelte Linie", "iconClass": "chartIconBase stacked-line-icon" },
                                                        {  "value": "lineStacked100", "text": "100% gestapelte Linie", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        {  "value": "lineMarkers", "text": "Linie mit Markierungen", "iconClass": "chartIconBase line-markers-icon" },
                                                        {  "value": "lineMarkersStacked", "text": "Gestapelte Linie mit Markierungen", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        {  "value": "lineMarkersStacked100", "text": "100% gestapelte Linie mit Markierungen", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie1", "text": "Kreisdiagramm", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChart",
                                                    "haslabel": true,
                                                    "text": "Kreisdiagramm",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Kreis", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Ring", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar1", "text": "Balkendiagramm", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChart",
                                                    "haslabel": true,
                                                    "text": "Balkendiagramm",
                                                    "dropdown": [
                                                        {  "value": "barClustered", "text": "Gebündelter Balken", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        {  "value": "barStacked", "text": "Gestapelter Balken", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        {  "value": "barStacked100", "text": "100% gestapelter Balken", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area1", "text": "Bereich-Diagramm", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChart",
                                                    "haslabel": true,
                                                    "text": "Bereich-Diagramm",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Bereich", "iconClass": "chartIconBase area-icon" },
                                                        {  "value": "areaStacked", "text": "Gestapelter Bereich", "iconClass": "chartIconBase stacked-area-icon" },
                                                        {  "value": "areaStacked100", "text": "100% Gestapelter Bereich", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter1", "text": "Punkt (X Y)", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChart",
                                                    "haslabel": true,
                                                    "text": "Punkt (X Y)",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "Punkt (X Y)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Punkte mit geraden Linien und Datenpunkten", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Punkte mit geraden Linien", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "Punkte mit interpolierten Linien und Datenpunkten", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Punkte mit interpolierten Linien", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bubble", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar1", "text": "Netzdiagramm", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChart",
                                                    "haslabel": true,
                                                    "text": "Netzdiagramm",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Netz", "iconClass": "chartIconBase radar-icon" },
                                                        { "value": "radarFilled", "text": "Gefülltes Netz", "iconClass": "chartIconBase radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Netz mit Datenpunkten", "iconClass": "chartIconBase radarMarkers-icon" },
                                                    ]
                                                },
                                            ]
                                        },
                                        { "value": "sunburst", "text": "Sunburst", "iconClass": "sunburst-icon" },
                                        { "value": "treemap", "text": "Treemap", "iconClass": "treemap-icon" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupInsert",
                            "items": [{
                                "value": "shape",
                                "name": "Formen",
                                "iconClass": "shape icon-text",
                                "type": "shape-panel",
                                "haslabel": true
                            }]
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "insertDropdown",
                            "header": "Einsetzen",
                            "items": []
                        }
                    ]
                }
            ]
        },
        {
            "title": "Formeln",
            "name": "formulas",
            "collapse": ["*groupFormula"],
            "groups": [
                {
                    "tooltip": "Formeln",
                    "tools": [
                        {
                            "ignore": true,
                            "type": "group",
                            "tooltip": "Summe",
                            "collapseGroup": "groupFormula",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-usd icon-text",
                                    "name": "autoSum",
                                    "haslabel": true,
                                    "text": "Auto Summe",
                                    "header": "Auto Summe",
                                    "dropdown": [
                                        { "value": "sum", "text": "Summe" },
                                        { "value": "average", "text": "Durchschnitt" },
                                        { "value": "count", "text": "Anzahl" },
                                        { "value": "max", "text": "Max" },
                                        { "value": "min", "text": "Min" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Formula icon-text",
                            "name": "insertFormula",
                            "text": "Formel einfügen",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "glyphicon glyphicon-paperclip icon-text",
                            "name": "nameManager",
                            "text": "Name Manager",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "setFormula",
                            "header": "Formeln",
                            "items": []
                        }
                    ]
                }, {
                    "tooltip": "Jetzt berechnen",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite CalculationOptionsMenu icon-text",
                            "name": "calculateNow",
                            "text": "Jetzt berechnen"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Daten",
            "name": "data",
            "collapse": ["groupDetail", "groupSort", "groupGroup"],
            "groups": [
                {
                    "tooltip": "Sortieren / Filtern",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SortAscendingWord",
                            "name": "sortAZ",
                            "text": "Aufsteigend sortieren",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite SortDescendingWord",
                            "name": "sortZA",
                            "text": "Absteigend sortieren",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite FiltersMenu",
                            "name": "filter",
                            "text": "Filter Buttons anzeigen",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite SortFilterMenu",
                            "name": "sortAndFilter",
                            "text": "Sortieren & Filtern",
                            "header": "Sortieren & Filtern",
                            "items": []
                        }
                    ]
                },
                {
                    "tooltip": "Group",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineGroup",
                            "name": "group",
                            "text": "Gruppieren",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineUngroup",
                            "name": "ungroup",
                            "text": "Ungruppieren",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite ShowDetailsPage",
                            "name": "showDetail",
                            "text": "Details anzeigen",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite HideDetails",
                            "name": "hideDetail",
                            "text": "Details ausblenden",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Zusammenzeilen unter Detail",
                            "name": "summaryBelow",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Summenspalten auf der rechten Seite der Detailansicht",
                            "name": "summaryRight",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite GroupTableStyleOptions",
                            "altIconClass": "glyphicon glyphicon-menu-right",
                            "name": "groupSetting",
                            "text": "Gruppen Einstellungen",
                            "header": "Gruppen Einstellungeng",
                            "minWidth": "300px",
                            "items": ["summaryBelow", "summaryRight"]
                        }
                    ]
                },
                {
                    "tooltip": "Datenüberprüfung",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidationCircleInvalid icon-text",
                            "name": "circleInvalidData",
                            "text": "Ungültige Daten einkreisen",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidation icon-text",
                            "name": "selectValidator",
                            "text": "Datenüberprüfung",
                            "header": "Datenüberprüfung"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Ansicht",
            "name": "view",
            "collapse": ["*groupShow"],
            "groups": [
                {
                    "tooltip": "Anzeigen / Ausblenden",
                    "tools": [
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Eingabezeile",
                            "tooltip": "Eingabezeile anzeigen",
                            "collapseGroup": "groupShow",
                            "name": "showFormulaBar"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Rasterlinien",
                            "tooltip": "Rasterlinien anzeigen",
                            "collapseGroup": "groupShow",
                            "name": "showGridlines"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Kopfteile",
                            "tooltip": "Kopfteile anzeigen",
                            "collapseGroup": "groupShow",
                            "name": "showHeadings"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Arbeitsblätter Tabs",
                            "tooltip": "Arbeitsblätter Tabs anzeigen",
                            "collapseGroup": "groupShow",
                            "name": "showSheetTabs"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "showHideDropdown",
                            "header": "Anzeigen / Ausblenden",
                            "items": []
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite FreezePanes icon-text",
                                    "name": "freezePanes",
                                    "haslabel": true,
                                    "text": "Bereiche einfrieren",
                                    "dropdown": [
                                        { "value": "freezePanes", "text": "Bereiche einfrieren" },
                                        { "value": "freezeTopRow", "text": "Oberste Zeile einfrieren" },
                                        { "value": "freezeFirstColumn", "text": "Erste Spalte einfrieren" },
                                        { "value": "freezeBottomRow", "text": "Unterste Zeile einfrieren" },
                                        { "value": "freezeLastColumn", "text": "Letzte Spalte einfrieren" },
                                        "",
                                        { "value": "unfreeze", "text": "Bereiche freigeben" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Tabelle",
            "hidden": false,
            "name": "table",
            "groups": [
                {
                    tools: [
                        {
                            "type": "input",
                            "name": "tableName",
                            "text": "Name"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Slicer Einsetzen",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-filter icon-text",
                                    "name": "insertSlicer",
                                    "text": "Slicer Einsetzen",
                                    "haslabel": true,
                                    "dropdown": [
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Stiloptionen",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-info-sign icon-text",
                                    "name": "tableOption",
                                    "text": "Stiloptionen",
                                    "haslabel": true,
                                    "dropdown": [
                                        { "value": "tableHeaderRow", "text": "Kopfzeilen", "toggle": true, "checked": true },
                                        { "value": "tableTotalRow", "text": "Summenzeilen", "toggle": true },
                                        { "value": "tableFirstColumn", "text": "Erste Spalte", "toggle": true },
                                        { "value": "tableLastColumn", "text": "Letzte Spalte", "toggle": true },
                                        { "value": "tableBandedRows", "text": "Verbundene Zeilen", "toggle": true, "checked": true },
                                        { "value": "tableBandedColumns", "text": "Verbundene Spalten", "toggle": true },
                                        { "value": "tableFilterButton", "text": "Filter Button", "toggle": true }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Tabellenstil",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-th",
                                    "name": "tableStyles",
                                    "text": "Tabellenstil",
                                    "header": "Tabellenstil",
                                    "dropdown": [
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Diagramm",
            "hidden": false,
            "name": "chart",
            "groups": [
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Typ",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "typeChart",
                                    "haslabel": true,
                                    "text": "Typ",
                                    "dropdown": [
                                        {
                                            "value": "column2", "text": "Säulendiagramm", "findCss": "Column Chart Type Changed", "iconClass": "chartIcon ColumnChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Säulendiagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Säulendiagramm", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Gestapelte Säule", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "100% gestapelte Spalte", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line2", "text": "Liniendiagramm", "findCss": "Line Chart Type Changed", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Liniendiagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Linie", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Gestapelte Linie", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "100% gestapelte Linie", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Linie mit Markierungen", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Gestapelte Linie mit Markierungen", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "100% gestapelte Linie mit Markierungen", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie2", "text": "Kreisdiagramm", "findCss": "Pie Chart Type Changed", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Kreisdiagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Kreis", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Ring", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar2", "text": "Balkendiagramm", "findCss": "Bar Chart Type Changed", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Balkendiagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Gebündelter Balken", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Gestapelter Balken", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100% gestapelter Balken", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area2", "text": "Bereich-Diagramm", "findCss": "Area Chart Type Changed", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Bereich-Diagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Bereich", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Gestapelter Bereich", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100% Gestapelter Bereich", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter2", "text": "Punkt (X Y)", "findCss": "xyScatter Chart Type Changed", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Punkt (X Y) Typ ändern",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "Punkt (X Y)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Punkte mit geraden Linien und Datenpunkten", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Punkte mit geraden Linien", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "Punkte mit interpolierten Linien und Datenpunkten", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Punkte mit interpolierten Linien", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bubble", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar2", "text": "Netzdiagramm", "findCss": "Radar Chart Type Changed", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Netzdiagramm Typ ändern",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Netz", "iconClass": "radar-icon" },
                                                        { "value": "radarFilled", "text": "Gefülltes Netz", "iconClass": "radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Netz mit Datenpunkten", "iconClass": "radarMarkers-icon" },
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Quick Layout",
                            "items": [
                                {
                                    "type": "dropdown-quickLayout",
                                    "iconClass": "icon-chart-base-middle icon-chart-quick-layout icon-text",
                                    "name": "chartQuickLayout",
                                    "text": "QuickLayout",
                                    "haslabel": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Element hinzufügen",
                            "items": [
                                {
                                    "type": "dropdown-addChartElement",
                                    "iconClass": "icon-chart-base-middle icon-chart-add-element icon-text",
                                    "name": "addChartElement",
                                    "text": "Elemente",
                                    "haslabel": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Farbe",
                            "items": [
                                {
                                    "type": "dropdown-colorTemplate",
                                    "iconClass": "icon-chart-base-middle icon-chart-change-color icon-text",
                                    "name": "chart-color",
                                    "text": "Farbe",
                                    "haslabel": true,
                                    "chartColors": {
                                        "colorful": {
                                            "name": 'Colorful', "colors": [
                                                {
                                                    tip: 'Blue, Orange, Gray, Gold, Blue, Green',
                                                    items: ['accent 1', 'accent 2', 'accent 3', 'accent 4', 'accent 5', 'accent 6']
                                                },
                                                {
                                                    tip: 'Blue, Orange, Gray, Gold, Blue, Green',
                                                    items: ['accent 1', 'accent 3', 'accent 5', 'accent 1 -40', 'accent 3 -40', 'accent 5 -40']
                                                },
                                                {
                                                    tip: 'Blue, Orange, Gray, Gold, Blue, Green',
                                                    items: ['accent 2', 'accent 4', 'accent 6', 'accent 2 -40', 'accent 4 -40', 'accent 6 -40']
                                                },
                                                {
                                                    tip: 'Blue, Orange, Gray, Gold, Blue, Green',
                                                    items: ['accent 6', 'accent 5', 'accent 4', 'accent 6 -40', 'accent 5 -40', 'accent 4 -40']
                                                }
                                            ]
                                        },
                                        "monochromatic": {
                                            "name": 'Monochromatic', "colors": [
                                                {
                                                    tip: 'Blue gradient, dark to light',
                                                    items: { startColor: 'accent 1 -50', stopColor: 'accent 1 50' }
                                                },
                                                {
                                                    tip: 'Orange gradient, dark to light',
                                                    items: { startColor: 'accent 2 -50', stopColor: 'accent 2 50' }
                                                },
                                                {
                                                    tip: 'Gray gradient, dark to light',
                                                    items: { startColor: 'accent 3 -50', stopColor: 'accent 3 50' }
                                                },
                                                {
                                                    tip: 'Gold gradient, dark to light',
                                                    items: { startColor: 'accent 4 -50', stopColor: 'accent 4 50' }
                                                },
                                                {
                                                    tip: 'Blue gradient, dark to light',
                                                    items: { startColor: 'accent 5 -50', stopColor: 'accent 5 50' }
                                                },
                                                {
                                                    tip: 'Green gradient, dark to light',
                                                    items: { startColor: 'accent 6 -50', stopColor: 'accent 6 50' }
                                                },
                                                {
                                                    tip: 'Dark Gray, Light Gray, Gray, Dark Gray, Light Gray, Gray',
                                                    items: ['text 1 11.5', 'text 1 45', 'text 1 25', 'text 1 1.5', 'text 1 70', 'text 1 40']
                                                },
                                                {
                                                    tip: 'Blue gradient, light to dark',
                                                    items: { startColor: 'accent 1 50', stopColor: 'accent 1 -50' }
                                                },
                                                {
                                                    tip: 'Orange gradient, light to dark',
                                                    items: { startColor: 'accent 2 50', stopColor: 'accent 2 -50' }
                                                },
                                                {
                                                    tip: 'Gray gradient, light to dark',
                                                    items: { startColor: 'accent 3 50', stopColor: 'accent 3 -50' }
                                                },
                                                {
                                                    tip: 'Gold gradient, light to dark',
                                                    items: { startColor: 'accent 4 50', stopColor: 'accent 4 -50' }
                                                },
                                                {
                                                    tip: 'Blue gradient, light to dark',
                                                    items: { startColor: 'accent 5 50', stopColor: 'accent 5 -50' }
                                                },
                                                {
                                                    tip: 'Green gradient, light to dark',
                                                    items: { startColor: 'accent 6 50', stopColor: 'accent 6 -50' }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "icon-chart-base-middle switchRowColumn icon-text",
                            "name": "switchRowCol",
                            "text": "Zeilen/Spalten austauschen",
                        },
                    ]
                },
            ]
        },
        {
            "title": "Formen",
            "hidden": true,
            "name": "shape",
            "groups": [{
                "tools": [{
                    "type": "shape-color-preset",
                    "name": "shapeColorPreset",
                    "type": "shapeColorPreset",
                    "text": "Gruppierte Formen",
                    "items": [{
                        "type": "icon-group",
                        "value": "rgb(68, 114, 194)",
                        "text": "Blue"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 215, 0)",
                        "text": "Gold"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(163, 163, 163)",
                        "text": "Gray"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(113, 171, 72)",
                        "text": "Green"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 165, 0)",
                        "text": "Orange"
                    }]
                }, {
                    "type": "group",
                    "tooltip": "shape color setting",
                    "items": [{
                        "type": "setcolor-group",
                        "iconClass": "sprite FillBackColorSplitDropdown",
                        "name": "shapeFillColor",
                        "text": "Füllfarben",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Keine", "color": "white" }, "header": "Fill Color" }
                    }, {
                        "type": "setcolor-group",
                        "iconClass": "glyphicon glyphicon-pencil",
                        "name": "shapeOutlineColor",
                        "text": "Füllfarben",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Keine", "color": "white" }, "header": "Outline Color" }
                    }, {
                        "type": "dropdown-only",
                        "iconClass": "glyphicon glyphicon-minus icon-text",
                        "name": "shapeLineStyle",
                        "haslabel": true,
                        "text": "Line Style",
                        "header": "Line Style",
                        "dropdown": [
                            { "value": "solid", "iconClass": "line-style-thin", "hiddenLabel": true },
                            { "value": "squareDot", "iconClass": "line-style-dotted", "hiddenLabel": true },
                            { "value": "dash", "iconClass": "line-style-dashed", "hiddenLabel": true },
                            { "value": "longDash", "iconClass": "line-style-medium-dashed", "hiddenLabel": true },
                            { "value": "dashDot", "iconClass": "line-style-dash-dot", "hiddenLabel": true },
                            { "value": "longDashDot", "iconClass": "line-style-medium-dash-dot", "hiddenLabel": true },
                            { "value": "longDashDotDot", "iconClass": "line-style-medium-dash-dot-dot", "hiddenLabel": true },
                            { "value": "sysDash", "iconClass": "line-style-slanted-dashed", "hiddenLabel": true },
                            { "value": "sysDot", "iconClass": "line-style-medium-dotted", "hiddenLabel": true },
                            { "value": "sysDashDot", "iconClass": "line-style-medium-dashed-dot", "hiddenLabel": true },
                            { "value": "dashDotDot", "iconClass": "line-style-dash-dot-dot", "hiddenLabel": true },
                            { "value": "roundDot", "iconClass": "line-style-dotted", "hiddenLabel": true }
                        ]
                    }]
                }, {
                    "type": "icon",
                    "iconClass": "icon-text shape-group",
                    "name": "shapeGroup",
                    "text": "Gruppierte Formen",
                }]
            }]
        }
    ]
};
