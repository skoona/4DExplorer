var data = {
    "selected": 1,
    "tabs": [
        {
            "title": "Fichier",
            "name": "file"
        },
        {
            "title": "Accueil",
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
                            "text": "Gras",
                            "tooltip": "Gras",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Italic",
                            "name": "italic",
                            "text": "Italique",
                            "tooltip": "Italique",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Underline",
                            "name": "underline",
                            "text": "Sousligné",
                            "tooltip": "Sousligné",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite UnderlineDouble",
                            "name": "doubleUnderline",
                            "text": "Souligné double",
                            "tooltip": "Souligné double",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Bordures",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "sprite BorderBottomNoToggle",
                                    "name": "border",
                                    "text": "Bordures",
                                    "header": "Bordures",
                                    "minWidth": 280,
                                    "dropdown": [
                                        { "value": "bottom", "text": "Bordure basse", "iconClass": "sprite BorderBottom" },
                                        { "value": "top", "text": "Bordure haute", "iconClass": "sprite BorderTop" },
                                        { "value": "left", "text": "Bordure gauche", "iconClass": "sprite BorderLeft" },
                                        { "value": "right", "text": "Bordure droite", "iconClass": "sprite BorderRight" },
                                        "",
                                        { "value": "none", "text": "Pas de bordure", "iconClass": "sprite BorderNone" },
                                        { "value": "all", "text": "Toutes bordures", "iconClass": "sprite BordersAll" },
                                        { "value": "outside", "text": "Bordure extérieur", "iconClass": "sprite BorderOutside" },
                                        { "value": "thick", "text": "Bordure extérieur épaisse", "iconClass": "sprite BorderThickOutside" },
                                        "",
                                        { "value": "doublebottom", "text": "Bordure basse double", "iconClass": "sprite BorderDoubleBottom" },
                                        { "value": "thickbottom", "text": "Bordure basse épaisse", "iconClass": "sprite BorderThickBottom" },
                                        { "value": "top-bottom", "text": "Bordures haute et basse", "iconClass": "sprite BorderTopAndBottom" },
                                        { "value": "top-thickbottom", "text": "Bordure haute et basse épairsse", "iconClass": "sprite BorderTopAndThickBottom" },
                                        { "value": "top-doublebottom", "text": "Bordure haute et basse double", "iconClass": "sprite BorderTopAndDoubleBottom" },
                                        "",
                                        { "value": "more", "text": "Plus de bordures...", "iconClass": "sprite BordersMoreDialog" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Couleur de remplissage",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite FillBackColorSplitDropdown",
                                    "name": "backColor",
                                    "text": "Couleur de remplissage",
                                    "colorPickerOptions": { "nofill": { "show": true, "text": "Pas de remplissage", "color": "white" }, "header": "Fill Color" }
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Couleur de la police",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite GroupBasicText",
                                    "name": "foreColor",
                                    "text": "Couleur de police",
                                    "colorPickerOptions": { "autocolor": { "show": false, "text": "Automatique", "color": "black" }, "header": "Font Color" }
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Overline",
                            "name": "overline",
                            "text": "Surligné",
                            "tooltip": "Surligné",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Strikethrough",
                            "name": "strikethrough",
                            "text": "Barré",
                            "tooltip": "Barré",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "dropdown",
                            "minWidth": 210,
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "font",
                            "header": "Font",
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
                            "tooltip": "Alignement",
                            "header": "Alignement",
                            "items": ["indent", "outdent"],
                            "rows": [
                                {
                                    "type": "icon-group",
                                    "items": [
                                        {
                                            "iconClass": "sprite AlignTopExcel",
                                            "name": "valign-top",
                                            "text": "Haut",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignMiddleExcel",
                                            "name": "valign-center",
                                            "text": "Milieu",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignBottomExcel",
                                            "name": "valign-bottom",
                                            "text": "Bas",
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
                                            "text": "Gauche",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignCenter",
                                            "name": "halign-center",
                                            "text": "Centre",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignRight",
                                            "name": "halign-right",
                                            "text": "Droit",
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
                            "text": "Fusionner et centrer",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite WrapText",
                            "name": "wordwrap",
                            "text": "Ajuster le texte",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite CellAlignmentOptions",
                            "name": "verticalText",
                            "text": "Texte vertical",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentIncrease",
                            "name": "indent",
                            "text": "Augmenter le retrait",
                            "collapseGroup": "groupIndent"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentDecrease",
                            "name": "outdent",
                            "text": "Diminuer le retrait",
                            "collapseGroup": "groupIndent"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Format cellule",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite DollarSign",
                                    "name": "cellformat",
                                    "text": "Formater la cellule",
                                    "dropdown": [
                                        { "value": "nullValue", "text": "Général", "iconClass": "sprite DataTypeGeneral" },
                                        { "value": "0.00", "text": "Nombre", "iconClass": "sprite DataTypeNumber" },
                                        { "value": "# ##0.00 €", "text": "Monnaie", "iconClass": "sprite DataTypeCurrency" },
                                        { "value": "# ##0.00 €;(# ##0.00) €;\"-\"?? €;@", "text": "Comptabilité", "iconClass": "sprite DataTypeCurrencyBasic" },
                                        { "value": "d/m/yyyy", "text": "Date courte", "iconClass": "sprite DataTypeShortDate" },
                                        { "value": "dddd dd mmmm yyyy", "text": "Date longue", "iconClass": "sprite DataTypeLongDate" },
                                        { "value": "h:mm:ss", "text": "Heure", "iconClass": "sprite DataTypeTime" },
                                        { "value": "0%", "text": "Pourcentage", "iconClass": "sprite PercentStyle" },
                                        { "value": "# ?/?", "text": "Fraction", "iconClass": "sprite DataTypeStandard" },
                                        { "value": "0.00E+00", "text": "Scientifique", "iconClass": "sprite DataTypeScientific" },
                                        { "value": "@", "text": "Texte", "iconClass": "sprite DataTypeText" },
                                        "",
                                        { "value": "custom", "text": "Format personnalisé" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Format nombre",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite PercentStyle",
                                    "name": "numberformat",
                                    "text": "Format nombre",
                                    "dropdown": [
                                        { "value": "percentStyle", "text": "Style pourcentage", "iconClass": "sprite PercentStyle" },
                                        { "value": "commaStyle", "text": "Style virgule", "iconClass": "sprite CommaStyle" },
                                        { "value": "increaseDecimal", "text": "Augmenter les décimales", "iconClass": "sprite DecimalsIncrease" },
                                        { "value": "decreaseDecimal", "text": "Diminuer les décimales", "iconClass": "sprite DecimalsDecrease" }
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
                            "tooltip": "Type de céllule",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite CellProperties",
                                    "name": "celltype",
                                    "text": "Type de cellule",
                                    "dropdown": [
                                        { "value": "button", "text": "Type : Bouton" },
                                        { "value": "checkbox", "text": "Type : Boite à cocher" },
                                        { "value": "combobox", "text": "Type : Combobox" },
                                        { "value": "hyperlink", "text": "Type : Lien hypertext" }
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
                            "text": "Protéger la feuille",
                            "tooltips": ["Protéger la feuille", "Déprotéger la feuille"],
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "unlockcells",
                            "text": "Dévérouiller cellules",
                            "tooltips": ["Vérrouiller cellules", "Dévérouiller cellules"],
                            "toggle": true,
                            "checked": true
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Insérer et supprimer",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite InsertCellMenu",
                                    "name": "cellsgroup",
                                    "text": "Insérer & supprimer",
                                    "dropdown": [
                                        { "value": "insertRows", "text": "Insérer lignes", "iconClass": "sprite InsertRow" },
                                        { "value": "insertColumns", "text": "Insérer colonnes", "iconClass": "sprite InsertColumns" },
                                        { "value": "insert-shiftCellsRight", "text": "Insérer des cellules et décaler à droite", "iconClass": "sprite InsertColumnLeft" },
                                        { "value": "insert-shiftCellsDown", "text": "Insérer des cellules et descendre", "iconClass": "sprite InsertRowAbove" },
                                        { "value": "deleteRows", "text": "Supprimer des lignes", "iconClass": "sprite CellsDelete" },
                                        { "value": "deleteColumns", "text": "Supprimer des colonnes", "iconClass": "sprite CellsDeleteSmart" },
                                        { "value": "delete-shiftCellsLeft", "text": "Supprimer des cellules et déplacer à gauche", "iconClass": "sprite CellsDelete" },
                                        { "value": "delete-shiftCellsUp", "text": "Supprimer des cellules et remonter", "iconClass": "sprite CellsDeleteSmart" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Effacer",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite ClearMenu",
                                    "name": "clearformat",
                                    "text": "Effacer",
                                    "dropdown": [
                                        { "value": "clearAll", "text": "Effacer tout", "iconClass": "sprite ClearAll" },
                                        { "value": "clearFormatting", "text": "Effacer le format", "iconClass": "sprite ClearAllFormatting" },
                                        { "value": "clear", "text": "Effacer", "iconClass": "sprite Clear" }
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
                            "text": "Format conditionnel"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SearchUI",
                            "name": "find",
                            "text": "Chercher"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Insérer",
            "name": "insert",
            "collapse": ["*groupInsert"],
            "groups": [
                {
                    "tooltip": "Insérer",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertTable icon-text",
                            "name": "insertTable",
                            "text": "Tableau",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertPictureDialog icon-text",
                            "name": "insertPicture",
                            "text": "Image",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertLink icon-text",
                            "name": "insertLink",
                            "text": "Lien",
                            "header": "Insérer lien",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertNewComment icon-text",
                            "name": "insertComment",
                            "text": "Commentaire",
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
                                        { "value": "line", "text": "Ligne Sparkline" },
                                        { "value": "column", "text": "Colonne Sparkline" },
                                        { "value": "winloss", "text": "Gain/perte Sparkline" },
                                        { "value": "pie", "text": "Secteurs Sparkline" },
                                        { "value": "area", "text": "Zone Sparkline" },
                                        { "value": "scatter", "text": "Scatter Sparkline" },
                                        { "value": "spread", "text": "Spread Sparkline" },
                                        { "value": "stacked", "text": "Stacked Sparkline" },
                                        { "value": "boxplot", "text": "BoxPlot Sparkline" },
                                        { "value": "cascade", "text": "Cascade Sparkline" },
                                        { "value": "pareto", "text": "Pareto Sparkline" },
                                        { "value": "bullet", "text": "Puces Sparkline" },
                                        { "value": "hbar", "text": "Hbar Sparkline" },
                                        { "value": "vbar", "text": "Vbar Sparkline" },
                                        { "value": "vari", "text": "Variance Sparkline" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Code barre",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "barcode icon-text",
                                    "name": "insertBarCode",
                                    "haslabel": true,
                                    "text": "Code barres",
                                    "dropdown": [
                                        { "value": "qrCode", "text": "QR Code" },
                                        { "value": "dataMatrix", "text": "DataMatrix" },
                                        { "value": "codabar", "text": "Code barres" },
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
                            "tooltip": "Graphique",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "insertChart",
                                    "haslabel": true,
                                    "text": "Graphique",
                                    "dropdown": [
                                        {
                                            "value": "column1",
                                            "text": "Graphique colonne",
                                            "header": "Graphique colonne",
                                            "iconClass": "chartIcon ColumnChart",
                                            "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChart",
                                                    "haslabel": true,
                                                    "text": "Colonne du graphique",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Colonnes groupées", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Colonne empilée", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "Colonne empilée 100", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line1", "text": "Graphique ligne", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChart",
                                                    "haslabel": true,
                                                    "text": "Graphique ligne",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Ligne", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Ligne empilée", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "Ligne empilée 100%", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Ligne avec marqueurs", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Ligne empilée avec des marqueurs", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "Ligne empilée avec des marqueurs 100%", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie1", "text": "Graphique circulaire", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChart",
                                                    "haslabel": true,
                                                    "text": "Graphique circulaire",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Circulaire", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Donut", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar1", "text": "Graphique à barres", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChart",
                                                    "haslabel": true,
                                                    "text": "Graphique à barres",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Barre groupée", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Barre empilée", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "Barre empilée 100%", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area1", "text": "Graphique de zone", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChart",
                                                    "haslabel": true,
                                                    "text": "Graphique de zone",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Zone", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Zone empilée", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "Zone empilée 100%", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter1", "text": "Graphique XY(dispersion) ", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChart",
                                                    "haslabel": true,
                                                    "text": "XY(dispersion) Chart",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(dispersion)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "XY(dispersion) Lignes", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "XY(dispersion) Lignes sans marqueur", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(dispersion) Smooth", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "XY(dispersion) Smooth sans marqueur", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bubble", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar1", "text": "Graphique radar", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChart",
                                                    "haslabel": true,
                                                    "text": "Graphique radar",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "chartIconBase radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar rempli", "iconClass": "chartIconBase radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Radar avec marqueurs", "iconClass": "chartIconBase radarMarkers-icon" },
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
                                "name": "Forme",
                                "iconClass": "shape icon-text",
                                "type": "shape-panel",
                                "haslabel": true
                            }]
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "insertDropdown",
                            "header": "Insert",
                            "items": []
                        }
                    ]
                }
            ]
        },
        {
            "title": "Formules",
            "name": "formulas",
            "collapse": ["*groupFormula"],
            "groups": [
                {
                    "tooltip": "Formule",
                    "tools": [
                        {
                            "ignore": true,
                            "type": "group",
                            "tooltip": "Somme",
                            "collapseGroup": "groupFormula",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-usd icon-text",
                                    "name": "autoSum",
                                    "haslabel": true,
                                    "text": "Somme auto",
                                    "header": "AutoSum",
                                    "dropdown": [
                                        { "value": "sum", "text": "Somme" },
                                        { "value": "average", "text": "Moyenne" },
                                        { "value": "count", "text": "Compte" },
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
                            "text": "Insérer formule",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "glyphicon glyphicon-paperclip icon-text",
                            "name": "nameManager",
                            "text": "Gestionnaire de nom",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "setFormula",
                            "header": "Formulas",
                            "items": []
                        }
                    ]
                }, {
                    "tooltip": "Calculer",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite CalculationOptionsMenu icon-text",
                            "name": "calculateNow",
                            "text": "Calculer"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Données",
            "name": "data",
            "collapse": ["groupDetail", "groupSort", "groupGroup"],
            "groups": [
                {
                    "tooltip": "Trier / Filtrer",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SortAscendingWord",
                            "name": "sortAZ",
                            "text": "Tri ascendant",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite SortDescendingWord",
                            "name": "sortZA",
                            "text": "Tri descendant",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite FiltersMenu",
                            "name": "filter",
                            "text": "Afficher le bouton filtre",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite SortFilterMenu",
                            "name": "sortAndFilter",
                            "text": "Trier et filtrer",
                            "header": "Trier et filtrer",
                            "items": []
                        }
                    ]
                },
                {
                    "tooltip": "Grouper",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineGroup",
                            "name": "group",
                            "text": "Grouper",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineUngroup",
                            "name": "ungroup",
                            "text": "Dégrouper",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite ShowDetailsPage",
                            "name": "showDetail",
                            "text": "Afficher les détails",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite HideDetails",
                            "name": "hideDetail",
                            "text": "Masquer les détails",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Lignes résumé sous le détail",
                            "name": "summaryBelow",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Colonnes de résumé à la droite du détail",
                            "name": "summaryRight",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite GroupTableStyleOptions",
                            "altIconClass": "glyphicon glyphicon-menu-right",
                            "name": "groupSetting",
                            "text": "Paramètres de groupe",
                            "header": "Paramètres de groupe",
                            "minWidth": "300px",
                            "items": ["summaryBelow", "summaryRight"]
                        }
                    ]
                },
                {
                    "tooltip": "Validation des données",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidationCircleInvalid icon-text",
                            "name": "circleInvalidData",
                            "text": "Entourer les données non valides",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidation icon-text",
                            "name": "selectValidator",
                            "text": "Sélectionner le validateur",
                            "header": "Validateur de données"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Vue",
            "name": "view",
            "collapse": ["*groupShow"],
            "groups": [
                {
                    "tooltip": "Afficher / Masquer",
                    "tools": [
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Barre de formule",
                            "tooltip": "Afficher barre de formule",
                            "collapseGroup": "groupShow",
                            "name": "showFormulaBar"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Quadrillage",
                            "tooltip": "Voir le quadrillage",
                            "collapseGroup": "groupShow",
                            "name": "showGridlines"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Rubriques",
                            "tooltip": "Voir les rubriques",
                            "collapseGroup": "groupShow",
                            "name": "showHeadings"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Onglets feuille",
                            "tooltip": "Afficher les onglets des feuilles",
                            "collapseGroup": "groupShow",
                            "name": "showSheetTabs"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "showHideDropdown",
                            "header": "Afficher / Masquer",
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
                                    "text": "Panneaux figés",
                                    "dropdown": [
                                        { "value": "freezePanes", "text": "Panneaux figés" },
                                        { "value": "freezeTopRow", "text": "Figer la première ligne" },
                                        { "value": "freezeFirstColumn", "text": "Figer la première colonne" },
                                        { "value": "freezeBottomRow", "text": "Figer la dernière ligne" },
                                        { "value": "freezeLastColumn", "text": "Figer la dernière colonne" },
                                        "",
                                        { "value": "unfreeze", "text": "Défiger panneaux" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Tableau",
            "hidden": false,
            "name": "table",
            "groups": [
                {
                    tools: [
                        {
                            "type": "input",
                            "name": "tableName",
                            "text": "Nom"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Insérer segment",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-filter icon-text",
                                    "name": "insertSlicer",
                                    "text": "Insérer segment",
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
                            "tooltip": "Options de style",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-info-sign icon-text",
                                    "name": "tableOption",
                                    "text": "Style Options",
                                    "haslabel": true,
                                    "dropdown": [
                                        { "value": "tableHeaderRow", "text": "En tête de ligne", "toggle": true, "checked": true },
                                        { "value": "tableTotalRow", "text": "Ligne Total", "toggle": true },
                                        { "value": "tableFirstColumn", "text": "Première colonne", "toggle": true },
                                        { "value": "tableLastColumn", "text": "Dernière colonne", "toggle": true },
                                        { "value": "tableBandedRows", "text": "Ligne à bandes", "toggle": true, "checked": true },
                                        { "value": "tableBandedColumns", "text": "Colonnes à bandes", "toggle": true },
                                        { "value": "tableFilterButton", "text": "Bouton filtre", "toggle": true }
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
                            "tooltip": "Styles de tableau",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-th",
                                    "name": "tableStyles",
                                    "text": "Styles de tableau",
                                    "header": "Table Styles",
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
            "title": "Graphique",
            "hidden": false,
            "name": "chart",
            "groups": [
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Type",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "typeChart",
                                    "haslabel": true,
                                    "text": "Type",
                                    "dropdown": [
                                        {
                                            "value": "column2", "text": "Graphique colonne", "findCss": "Column Chart Type Changed", "iconClass": "chartIcon ColumnChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique colonne type changé",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Colonne groupée", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Colonne empilée", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "Colonne empilée100%", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line2", "text": "Graphique ligne", "findCss": "Line Chart Type Changed", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique ligne type changé",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Ligne", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Ligne empilée", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "Ligne empilée 100%", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Ligne avec marqueurs", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Ligne empilée avec des marqueurs", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "Ligne empilée avec des marqueurs 100%", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie2", "text": "Graphique circulaire", "findCss": "Pie Chart Type Changed", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique circulaire type changé",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Secteur", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Donut", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar2", "text": "Graphique en barres", "findCss": "Bar Chart Type Changed", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique en barres type changé",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Barre groupée", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Barre empilée", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "Barre empilée100% ", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area2", "text": "Graphique de zones", "findCss": "Area Chart Type Changed", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique de zones type changé",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Zone", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Zone empilée", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "Zone empilée 100%", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter2", "text": "Graphique XY(Dispersion)", "findCss": "xyScatter Chart Type Changed", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "DispersionXY type changé",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(Dispersion)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "XY(Dispersion) Lignes", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "XY(Dispersion) Lignes sans marqueurs", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(Dispersion) Smooth", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "XY(Dispersion) Smooth sans marqueurs", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bulle", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar2", "text": "Graphique radar", "findCss": "Radar Chart Type Changed", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Graphique radar type changeant",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar Rempli", "iconClass": "radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Radar avec marqueurs", "iconClass": "radarMarkers-icon" },
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
                            "tooltip": "Mise en page rapide",
                            "items": [
                                {
                                    "type": "dropdown-quickLayout",
                                    "iconClass": "icon-chart-base-middle icon-chart-quick-layout icon-text",
                                    "name": "chartQuickLayout",
                                    "text": "Mise en page rapide",
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
                            "tooltip": "Ajouter un élément",
                            "items": [
                                {
                                    "type": "dropdown-addChartElement",
                                    "iconClass": "icon-chart-base-middle icon-chart-add-element icon-text",
                                    "name": "addChartElement",
                                    "text": "Éléments",
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
                            "tooltip": "Couleur",
                            "items": [
                                {
                                    "type": "dropdown-colorTemplate",
                                    "iconClass": "icon-chart-base-middle icon-chart-change-color icon-text",
                                    "name": "chart-color",
                                    "text": "Couleur",
                                    "haslabel": true,
                                    "chartColors": {
                                        "colorful": {
                                            "name": 'Coloré', "colors": [
                                                {
                                                    tip: 'Bleu, orange, gris, or, bleu, vert',
                                                    items: ['accent 1', 'accent 2', 'accent 3', 'accent 4', 'accent 5', 'accent 6']
                                                },
                                                {
                                                    tip: 'Bleu, orange, gris, or, bleu, vert',
                                                    items: ['accent 1', 'accent 3', 'accent 5', 'accent 1 -40', 'accent 3 -40', 'accent 5 -40']
                                                },
                                                {
                                                    tip: 'Bleu, orange, gris, or, bleu, vert',
                                                    items: ['accent 2', 'accent 4', 'accent 6', 'accent 2 -40', 'accent 4 -40', 'accent 6 -40']
                                                },
                                                {
                                                    tip: 'Bleu, orange, gris, or, bleu, vert',
                                                    items: ['accent 6', 'accent 5', 'accent 4', 'accent 6 -40', 'accent 5 -40', 'accent 4 -40']
                                                }
                                            ]
                                        },
                                        "monochromatic": {
                                            "name": 'Monochrome', "colors": [
                                                {
                                                    tip: 'Dégradé bleu, de sombre à clair',
                                                    items: { startColor: 'accent 1 -50', stopColor: 'accent 1 50' }
                                                },
                                                {
                                                    tip: 'Dégradé orange, de foncé à clair',
                                                    items: { startColor: 'accent 2 -50', stopColor: 'accent 2 50' }
                                                },
                                                {
                                                    tip: 'Dégradé de gris, de sombre à clair',
                                                    items: { startColor: 'accent 3 -50', stopColor: 'accent 3 50' }
                                                },
                                                {
                                                    tip: 'Gradient d\'or, de sombre à clair',
                                                    items: { startColor: 'accent 4 -50', stopColor: 'accent 4 50' }
                                                },
                                                {
                                                    tip: 'Dégradé bleu, de sombre à clair',
                                                    items: { startColor: 'accent 5 -50', stopColor: 'accent 5 50' }
                                                },
                                                {
                                                    tip: 'Dégradé vert, de sombre à clair',
                                                    items: { startColor: 'accent 6 -50', stopColor: 'accent 6 50' }
                                                },
                                                {
                                                    tip: 'Gris foncé, Gris clair, Gris, Gris foncé, Gris clair, Gris',
                                                    items: ['text 1 11.5', 'text 1 45', 'text 1 25', 'text 1 1.5', 'text 1 70', 'text 1 40']
                                                },
                                                {
                                                    tip: 'Dégradé bleu, de clair à foncé',
                                                    items: { startColor: 'accent 1 50', stopColor: 'accent 1 -50' }
                                                },
                                                {
                                                    tip: 'Dégradé orange, de clair à foncé',
                                                    items: { startColor: 'accent 2 50', stopColor: 'accent 2 -50' }
                                                },
                                                {
                                                    tip: 'Dégradé de gris, de clair à foncé',
                                                    items: { startColor: 'accent 3 50', stopColor: 'accent 3 -50' }
                                                },
                                                {
                                                    tip: 'Gradient d\'or, de clair à foncé',
                                                    items: { startColor: 'accent 4 50', stopColor: 'accent 4 -50' }
                                                },
                                                {
                                                    tip: 'Dégradé bleu, de clair à foncé',
                                                    items: { startColor: 'accent 5 50', stopColor: 'accent 5 -50' }
                                                },
                                                {
                                                    tip: 'Dégradé vert, de clair à foncé',
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
                            "text": "Intervertir ligne/colonne",
                        },
                    ]
                },
            ]
        },
        {
            "title": "Forme",
            "hidden": true,
            "name": "shape",
            "groups": [{
                "tools": [{
                    "type": "shape-color-preset",
                    "name": "shapeColorPreset",
                    "type": "shapeColorPreset",
                    "text": "Groupe de forme",
                    "items": [{
                        "type": "icon-group",
                        "value": "rgb(68, 114, 194)",
                        "text": "Bleu"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 215, 0)",
                        "text": "Or"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(163, 163, 163)",
                        "text": "Gris"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(113, 171, 72)",
                        "text": "Vert"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 165, 0)",
                        "text": "Orange"
                    }]
                }, {
                    "type": "group",
                    "tooltip": "Paramètre couleur des formes",
                    "items": [{
                        "type": "setcolor-group",
                        "iconClass": "sprite FillBackColorSplitDropdown",
                        "name": "shapeFillColor",
                        "text": "Remplissage",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sans remplissage", "color": "white" }, "header": "Fill Color" }
                    }, {
                        "type": "setcolor-group",
                        "iconClass": "glyphicon glyphicon-pencil",
                        "name": "shapeOutlineColor",
                        "text": "Remplissage",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sans remplissage", "color": "white" }, "header": "Outline Color" }
                    }, {
                        "type": "dropdown-only",
                        "iconClass": "glyphicon glyphicon-minus icon-text",
                        "name": "shapeLineStyle",
                        "haslabel": true,
                        "text": "Style ligne",
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
                    "text": "Forme groupes",
                }]
            }]
        }
    ]
};
