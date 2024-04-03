var data = {
    "selected": 1,
    "tabs": [
        {
            "title": "Arquivo",
            "name": "file"
        },
        {
            "title": "Inicio",
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
                            "text": "Negrito",
                            "tooltip": "Negrito",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Italic",
                            "name": "italic",
                            "text": "Itálica",
                            "tooltip": "Itálica",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Underline",
                            "name": "underline",
                            "text": "Sublinhado",
                            "tooltip": "Sublinhado",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite UnderlineDouble",
                            "name": "doubleUnderline",
                            "text": "Duplo Sublinhado",
                            "tooltip": "Duplo Sublinhado",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Bordes",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "sprite BorderBottomNoToggle",
                                    "name": "border",
                                    "text": "Bordes",
                                    "header": "Borders",
                                    "minWidth": 280,
                                    "dropdown": [
                                        { "value": "bottom", "text": "Borda inferior", "iconClass": "sprite BorderBottom" },
                                        { "value": "top", "text": "Borda superior", "iconClass": "sprite BorderTop" },
                                        { "value": "left", "text": "Borda esquerda", "iconClass": "sprite BorderLeft" },
                                        { "value": "right", "text": "Borda direita", "iconClass": "sprite BorderRight" },
                                        "",
                                        { "value": "none", "text": "Sem borda", "iconClass": "sprite BorderNone" },
                                        { "value": "all", "text": "Todas as bordas", "iconClass": "sprite BordersAll" },
                                        { "value": "outside", "text": "Bordas exteriores", "iconClass": "sprite BorderOutside" },
                                        { "value": "thick", "text": "Borda de caixa grossa", "iconClass": "sprite BorderThickOutside" },
                                        "",
                                        { "value": "doublebottom", "text": "Borda dupla inferior", "iconClass": "sprite BorderDoubleBottom" },
                                        { "value": "thickbottom", "text": "Borda inferior grrossa", "iconClass": "sprite BorderThickBottom" },
                                        { "value": "top-bottom", "text": "Borde superior e inferior", "iconClass": "sprite BorderTopAndBottom" },
                                        { "value": "top-thickbottom", "text": "Borde superior e inferior grossa", "iconClass": "sprite BorderTopAndThickBottom" },
                                        { "value": "top-doublebottom", "text": "Borde superior e dupla borda inferior", "iconClass": "sprite BorderTopAndDoubleBottom" },
                                        "",
                                        { "value": "more", "text": "Mais bordas...", "iconClass": "sprite BordersMoreDialog" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Cor de preenchimento",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite FillBackColorSplitDropdown",
                                    "name": "backColor",
                                    "text": "Cor de preenchimento",
                                    "colorPickerOptions": { "nofill": { "show": true, "text": "Sem preenchimento", "color": "white" }, "header": "Fill Color" }
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Cor de fonte",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite GroupBasicText",
                                    "name": "foreColor",
                                    "text": "Cor de fonte",
                                    "colorPickerOptions": { "autocolor": { "show": false, "text": "Automático", "color": "black" }, "header": "Font Color" }
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Overline",
                            "name": "overline",
                            "text": "Sobre a linha",
                            "tooltip": "Sobre a linhaa",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Strikethrough",
                            "name": "strikethrough",
                            "text": "Tachado",
                            "tooltip": "Tachado",
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
                            "tooltip": "Alinhamento",
                            "header": "Alignment",
                            "items": ["indent", "outdent"],
                            "rows": [
                                {
                                    "type": "icon-group",
                                    "items": [
                                        {
                                            "iconClass": "sprite AlignTopExcel",
                                            "name": "valign-top",
                                            "text": "Superior",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignMiddleExcel",
                                            "name": "valign-center",
                                            "text": "Média",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignBottomExcel",
                                            "name": "valign-bottom",
                                            "text": "Inferior",
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
                                            "text": "esquerda",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignCenter",
                                            "name": "halign-center",
                                            "text": "Centro",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignRight",
                                            "name": "halign-right",
                                            "text": "Direita",
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
                            "text": "Fusionar e centrar",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite WrapText",
                            "name": "wordwrap",
                            "text": "Envolver texto",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite CellAlignmentOptions",
                            "name": "verticalText",
                            "text": "Texto vertical",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentIncrease",
                            "name": "indent",
                            "text": "Aumentar a indentação",
                            "collapseGroup": "groupIndent"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentDecrease",
                            "name": "outdent",
                            "text": "Diminuir a indentação",
                            "collapseGroup": "groupIndent"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Formato de célula",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite DollarSign",
                                    "name": "cellformat",
                                    "text": "Formato de célula",
                                    "dropdown": [
                                        { "value": "nullValue", "text": "Geral", "iconClass": "sprite DataTypeGeneral" },
                                        { "value": "0.00", "text": "Número", "iconClass": "sprite DataTypeNumber" },
                                        { "value": "$#,##0.00", "text": "Moeda", "iconClass": "sprite DataTypeCurrency" },
                                        { "value": "$ #,##0.00;$ (#,##0.00);$ \"-\"??;@", "text": "Contabilidade", "iconClass": "sprite DataTypeCurrencyBasic" },
                                        { "value": "d/m/yyyy", "text": "Data curta", "iconClass": "sprite DataTypeShortDate" },
                                        { "value": "dddd, mmmm dd, yyyy", "text": "Data longa", "iconClass": "sprite DataTypeLongDate" },
                                        { "value": "h:mm:ss AM/PM", "text": "Hora", "iconClass": "sprite DataTypeTime" },
                                        { "value": "0%", "text": "Porcentagem", "iconClass": "sprite PercentStyle" },
                                        { "value": "# ?/?", "text": "Fração", "iconClass": "sprite DataTypeStandard" },
                                        { "value": "0.00E+00", "text": "Científica", "iconClass": "sprite DataTypeScientific" },
                                        { "value": "@", "text": "Texto", "iconClass": "sprite DataTypeText" },
                                        "",
                                        { "value": "custom", "text": "Formato personalizado" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Formato de número",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite PercentStyle",
                                    "name": "numberformat",
                                    "text": "Formato de número",
                                    "dropdown": [
                                        { "value": "percentStyle", "text": "Estilo porcentual", "iconClass": "sprite PercentStyle" },
                                        { "value": "commaStyle", "text": "Estilo vírgula", "iconClass": "sprite CommaStyle" },
                                        { "value": "increaseDecimal", "text": "Aumentar os decimais", "iconClass": "sprite DecimalsIncrease" },
                                        { "value": "decreaseDecimal", "text": "Diminuir os decimais", "iconClass": "sprite DecimalsDecrease" }
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
                            "tooltip": "Tipo de célula",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite CellProperties",
                                    "name": "celltype",
                                    "text": "Tipo de célula",
                                    "dropdown": [
                                        { "value": "button", "text": "Button CellType" },
                                        { "value": "checkbox", "text": "Checkbox CellType" },
                                        { "value": "combobox", "text": "Combobox CellType" },
                                        { "value": "hyperlink", "text": "Hyperlink CellType" }
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
                            "text": "Proteger folha",
                            "tooltips": ["Proteger folha", "Desproteger folha"],
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "unlockcells",
                            "text": "Desbloquear células",
                            "tooltips": ["Bloquear células", "Desbloquear células"],
                            "toggle": true,
                            "checked": true
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Inserir e eliminar",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite InsertCellMenu",
                                    "name": "cellsgroup",
                                    "text": "Inserir e eliminar",
                                    "dropdown": [
                                        { "value": "insertRows", "text": "Inserir filas", "iconClass": "sprite InsertRow" },
                                        { "value": "insertColumns", "text": "Inserir colunas", "iconClass": "sprite InsertColumns" },
                                        { "value": "insert-shiftCellsRight", "text": "Inserir células e mover para direita", "iconClass": "sprite InsertColumnLeft" },
                                        { "value": "insert-shiftCellsDown", "text": "Inserir células e baixar", "iconClass": "sprite InsertRowAbove" },
                                        { "value": "deleteRows", "text": "Eliminar filas", "iconClass": "sprite CellsDelete" },
                                        { "value": "deleteColumns", "text": "Eliminar colunas", "iconClass": "sprite CellsDeleteSmart" },
                                        { "value": "delete-shiftCellsLeft", "text": "Eliminar as células e mover para esquerda", "iconClass": "sprite CellsDelete" },
                                        { "value": "delete-shiftCellsUp", "text": "Apagar células e subir-las", "iconClass": "sprite CellsDeleteSmart" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Apagar",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite ClearMenu",
                                    "name": "clearformat",
                                    "text": "Apagar",
                                    "dropdown": [
                                        { "value": "clearAll", "text": "Apagar tudo", "iconClass": "sprite ClearAll" },
                                        { "value": "clearFormatting", "text": "Apagar formato", "iconClass": "sprite ClearAllFormatting" },
                                        { "value": "clear", "text": "Apagar", "iconClass": "sprite Clear" }
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
                            "text": "Formato condicional"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SearchUI",
                            "name": "find",
                            "text": "Buscar"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Inserir",
            "name": "insert",
            "collapse": ["*groupInsert"],
            "groups": [
                {
                    "tooltip": "Inserir",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertTable icon-text",
                            "name": "insertTable",
                            "text": "Tabela",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertPictureDialog icon-text",
                            "name": "insertPicture",
                            "text": "Imagens",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertLink icon-text",
                            "name": "insertLink",
                            "text": "Link",
                            "header": "Insert Link",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertNewComment icon-text",
                            "name": "insertComment",
                            "text": "Comentário",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "group",
                            "tooltip": "Minigráficos",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite SparklineLineInsert icon-text",
                                    "name": "insertSparkline",
                                    "haslabel": true,
                                    "text": "Minigráficos",
                                    "dropdown": [
                                        { "value": "line", "text": "Minigráficos de linhas" },
                                        { "value": "column", "text": "Minigráfico de colunas" },
                                        { "value": "winloss", "text": "Perdas/Lucros" },
                                        { "value": "pie", "text": "minigráfico circular" },
                                        { "value": "area", "text": "Minigráfico de área" },
                                        { "value": "scatter", "text": "Minigráfico de dispersão" },
                                        { "value": "spread", "text": "Minigráfico de dispersão" },
                                        { "value": "stacked", "text": "Minigráfico empilhados" },
                                        { "value": "boxplot", "text": "Minigráfico BoxPlot" },
                                        { "value": "cascade", "text": "Minigráfico Cascada" },
                                        { "value": "pareto", "text": "Minigráfico Pareto" },
                                        { "value": "bullet", "text": "Minigráfico Bullet" },
                                        { "value": "hbar", "text": "Minigráfico Hbar" },
                                        { "value": "vbar", "text": "Minigráfico Vbar" },
                                        { "value": "vari", "text": "Minigráfico Variância" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Código de barras",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "barcode icon-text",
                                    "name": "insertBarCode",
                                    "haslabel": true,
                                    "text": "Código de barras",
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
                            "tooltip": "Gráfico",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "insertChart",
                                    "haslabel": true,
                                    "text": "Gráfico",
                                    "dropdown": [
                                        {
                                            "value": "column1",
                                            "text": "Gráfico de colunas",
                                            "header": "Gráfico de colunas",
                                            "iconClass": "chartIcon ColumnChart",
                                            "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de colunas",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Clustered Column", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Stacked Column", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "100%Stacked Column", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line1", "text": "Gráfico de linhas", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de linhas",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Linha", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Linha empilhada", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "100% Linha empilhada", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Linha com marcadores", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Linha empilhada com marcadores", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "100% Linha empilhada com marcadores", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie1", "text": "Gráfico circular", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico circular",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Circular", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Doughnut", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar1", "text": "Gráfico de barras", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de barras",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Barra agrupada", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Barra empilhada", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100% Barra empilhada", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area1", "text": "Gráfico de área", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de área",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Área", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Área empilhada", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100% Área empilhada", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter1", "text": "Gráfico XY(Dispersão)", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico XY(Dispersão)",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(Dispersão)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Linhas XY(Dispersão)", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Linhas sem marcadores XY(Dispersão)", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "Suave xy(Dispersão)", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Suave sem marcadores XY(Dispersão)", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bolha", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar1", "text": "Radar", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico Radar",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "chartIconBase radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar cheio", "iconClass": "chartIconBase radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Marcadores Radar", "iconClass": "chartIconBase radarMarkers-icon" },
                                                    ]
                                                },
                                            ]
                                        },
                                        { "value": "sunburst", "text": "Projeção solar", "iconClass": "sunburst-icon" },
                                        { "value": "treemap", "text": "Retângulos", "iconClass": "treemap-icon" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupInsert",
                            "items": [{
                                "value": "shape",
                                "name": "Shape",
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
            "title": "Fórmulas",
            "name": "formulas",
            "collapse": ["*groupFormula"],
            "groups": [
                {
                    "tooltip": "Fórmulas",
                    "tools": [
                        {
                            "ignore": true,
                            "type": "group",
                            "tooltip": "Soma",
                            "collapseGroup": "groupFormula",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-usd icon-text",
                                    "name": "autoSum",
                                    "haslabel": true,
                                    "text": "Auto Soma",
                                    "header": "Auto Soma",
                                    "dropdown": [
                                        { "value": "sum", "text": "Soma" },
                                        { "value": "average", "text": "Média" },
                                        { "value": "count", "text": "Contar números" },
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
                            "text": "Inserir fórmula",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "glyphicon glyphicon-paperclip icon-text",
                            "name": "nameManager",
                            "text": "Gestor de nomes",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "setFormula",
                            "header": "Fórmulas",
                            "items": []
                        }
                    ]
                }, {
                    "tooltip": "Calcular",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite CalculationOptionsMenu icon-text",
                            "name": "calculateNow",
                            "text": "Calcular"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Dados",
            "name": "data",
            "collapse": ["groupDetail", "groupSort", "groupGroup"],
            "groups": [
                {
                    "tooltip": "Ordenar / Filtrar",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SortAscendingWord",
                            "name": "sortAZ",
                            "text": "Ordenação ascendente",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite SortDescendingWord",
                            "name": "sortZA",
                            "text": "Ordem ascendente",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite FiltersMenu",
                            "name": "filter",
                            "text": "Mostrar botões de filtro",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite SortFilterMenu",
                            "name": "sortAndFilter",
                            "text": "Ordenar e filtrar",
                            "header": "Ordenar e filtrar",
                            "items": []
                        }
                    ]
                },
                {
                    "tooltip": "Agrupar",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineGroup",
                            "name": "group",
                            "text": "Agrupar",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineUngroup",
                            "name": "ungroup",
                            "text": "Desagrupar",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite ShowDetailsPage",
                            "name": "showDetail",
                            "text": "Mostrar detalhe",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite HideDetails",
                            "name": "hideDetail",
                            "text": "Ocultar detalhe",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "As linhas de resumo abaixo detalham",
                            "name": "summaryBelow",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Colunas de resumo à direita dos detalhes",
                            "name": "summaryRight",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite GroupTableStyleOptions",
                            "altIconClass": "glyphicon glyphicon-menu-right",
                            "name": "groupSetting",
                            "text": "Configuração do grupo",
                            "header": "Parâmetros do grupo",
                            "minWidth": "300px",
                            "items": ["summaryBelow", "summaryRight"]
                        }
                    ]
                },
                {
                    "tooltip": "Validação de dados",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidationCircleInvalid icon-text",
                            "name": "circleInvalidData",
                            "text": "Marcar com um círculo os dados inválidos",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidation icon-text",
                            "name": "selectValidator",
                            "text": "Selecionar validador",
                            "header": "Validador de dados"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Vista",
            "name": "view",
            "collapse": ["*groupShow"],
            "groups": [
                {
                    "tooltip": "Mostrar / Ocultar",
                    "tools": [
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Barra de fórmulas",
                            "tooltip": "Mostrar Barra de fórmulas",
                            "collapseGroup": "groupShow",
                            "name": "showFormulaBar"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "grade",
                            "tooltip": "Ver a grade",
                            "collapseGroup": "groupShow",
                            "name": "showGridlines"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Cabeçalhos",
                            "tooltip": "Ver os cabeçalhos",
                            "collapseGroup": "groupShow",
                            "name": "showHeadings"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Abas da folha",
                            "tooltip": "Mostrar abas da folha",
                            "collapseGroup": "groupShow",
                            "name": "showSheetTabs"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "showHideDropdown",
                            "header": "Show / Hide",
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
                                    "text": "Congelar painéis",
                                    "dropdown": [
                                        { "value": "freezePanes", "text": "Congelar painéis" },
                                        { "value": "freezeTopRow", "text": "Congelar a fila superior" },
                                        { "value": "freezeFirstColumn", "text": "Congelar a primeira coluna" },
                                        { "value": "freezeBottomRow", "text": "Congelar a fila inferior" },
                                        { "value": "freezeLastColumn", "text": "Congelar a última coluna" },
                                        "",
                                        { "value": "unfreeze", "text": "Descongelar os painéis" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Tabela",
            "hidden": false,
            "name": "table",
            "groups": [
                {
                    tools: [
                        {
                            "type": "input",
                            "name": "tableName",
                            "text": "Nome"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Inserir Segmento",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-filter icon-text",
                                    "name": "insertSlicer",
                                    "text": "Inserir Segmento",
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
                            "tooltip": "Opções de estilo",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-info-sign icon-text",
                                    "name": "tableOption",
                                    "text": "Opções de estilo",
                                    "haslabel": true,
                                    "dropdown": [
                                        { "value": "tableHeaderRow", "text": "Fila de cabeçalho", "toggle": true, "checked": true },
                                        { "value": "tableTotalRow", "text": "Fila total", "toggle": true },
                                        { "value": "tableFirstColumn", "text": "Primeira coluna", "toggle": true },
                                        { "value": "tableLastColumn", "text": "Última coluna", "toggle": true },
                                        { "value": "tableBandedRows", "text": "Filas com bandas", "toggle": true, "checked": true },
                                        { "value": "tableBandedColumns", "text": "Colunas com bandas", "toggle": true },
                                        { "value": "tableFilterButton", "text": "Botão de filtro", "toggle": true }
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
                            "tooltip": "Estilos de tabela",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-th",
                                    "name": "tableStyles",
                                    "text": "Estilos de tabela",
                                    "header": "Estilos de tabela",
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
            "title": "Gráfico",
            "hidden": false,
            "name": "chart",
            "groups": [
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Tipo",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "typeChart",
                                    "haslabel": true,
                                    "text": "Tipo",
                                    "dropdown": [
                                        {
                                            "value": "column2", "text": "Gráfico de colunas", "findCss": "Column Chart Type Changed", "iconClass": "chartIcon ColumnChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Tipo de gráfico de coluna modificado",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Coluna agrupada", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Coluna empilhada", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "Coluna empilhada 100%", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line2", "text": "Gráfico de linhas", "findCss": "Line Chart Type Changed", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Tipo gráfico de linhas modificado",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Linha", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Linha empilhada", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "Linha empilhada 100%", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Linha com marcadores", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Linha empilhada com marcadores", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "100% Linha empilhada com marcadores", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie2", "text": "Gráfico circular", "findCss": "Pie Chart Type Changed", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Mudou o tipo de gráfico circular",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Circular", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Anel", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar2", "text": "Gráfico de barras", "findCss": "Bar Chart Type Changed", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Mudou o tipo de gráfico de barras",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Barra agrupada", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Barra empilhada", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100% Barra empilhada", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area2", "text": "Gráfico de área", "findCss": "Area Chart Type Changed", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Mudou o tipo de gráfico de área",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Area", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Área empilhada", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100% Área empilhada", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter2", "text": "Gráfico XY(Dispersão)", "findCss": "xyScatter Chart Type Changed", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Mudou o tipo de gráfico XY(Dispersão)",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(Dispersão)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Linhas XY(Dispersão)", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Linhas sem marcadores XY(Dispersão)", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(Dispersão) suave", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Suave sem marcadores XY(Dispersão)", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Bolha", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar2", "text": "Gráfico Radar", "findCss": "Radar Chart Type Changed", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Mudou o tipo de gráfico Radar",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar preenchido", "iconClass": "radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Marcadores radar", "iconClass": "radarMarkers-icon" },
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
                            "tooltip": "Design rápido",
                            "items": [
                                {
                                    "type": "dropdown-quickLayout",
                                    "iconClass": "icon-chart-base-middle icon-chart-quick-layout icon-text",
                                    "name": "chartQuickLayout",
                                    "text": "Design rápido",
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
                            "tooltip": "Adicionar elemento",
                            "items": [
                                {
                                    "type": "dropdown-addChartElement",
                                    "iconClass": "icon-chart-base-middle icon-chart-add-element icon-text",
                                    "name": "addChartElement",
                                    "text": "Elementos",
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
                            "tooltip": "Color",
                            "items": [
                                {
                                    "type": "dropdown-colorTemplate",
                                    "iconClass": "icon-chart-base-middle icon-chart-change-color icon-text",
                                    "name": "chart-color",
                                    "text": "Cor",
                                    "haslabel": true,
                                    "chartColors": {
                                        "colorful": {
                                            "name": 'Colorful', "colors": [
                                                {
                                                    tip: 'Azul, Laranja, Cinza, Dourado, Verde',
                                                    items: ['accent 1', 'accent 2', 'accent 3', 'accent 4', 'accent 5', 'accent 6']
                                                },
                                                {
                                                    tip: 'Azul, Laranja, Cinza, Dourado, Verde',
                                                    items: ['accent 1', 'accent 3', 'accent 5', 'accent 1 -40', 'accent 3 -40', 'accent 5 -40']
                                                },
                                                {
                                                    tip: 'Azul, Laranja, Cinza, Dourado, Verde',
                                                    items: ['accent 2', 'accent 4', 'accent 6', 'accent 2 -40', 'accent 4 -40', 'accent 6 -40']
                                                },
                                                {
                                                    tip: 'Azul, Laranja, Cinza, Dourado, Verde',
                                                    items: ['accent 6', 'accent 5', 'accent 4', 'accent 6 -40', 'accent 5 -40', 'accent 4 -40']
                                                }
                                            ]
                                        },
                                        "monochromatic": {
                                            "name": 'Monocromático', "colors": [
                                                {
                                                    tip: 'Gradiente azul, escuro a claro',
                                                    items: { startColor: 'accent 1 -50', stopColor: 'accent 1 50' }
                                                },
                                                {
                                                    tip: 'Gradiente laranja, escuro a claro',
                                                    items: { startColor: 'accent 2 -50', stopColor: 'accent 2 50' }
                                                },
                                                {
                                                    tip: 'Gradiente cinza, escuro a claro',
                                                    items: { startColor: 'accent 3 -50', stopColor: 'accent 3 50' }
                                                },
                                                {
                                                    tip: 'Gradiente dourado, escuro a claro',
                                                    items: { startColor: 'accent 4 -50', stopColor: 'accent 4 50' }
                                                },
                                                {
                                                    tip: 'Gradiente azul, escuro a claro',
                                                    items: { startColor: 'accent 5 -50', stopColor: 'accent 5 50' }
                                                },
                                                {
                                                    tip: 'Gradiente verde, escuro a claro',
                                                    items: { startColor: 'accent 6 -50', stopColor: 'accent 6 50' }
                                                },
                                                {
                                                    tip: 'Cinza escuro, cinza claro, cinza, cinza escuro, cinza',
                                                    items: ['text 1 11.5', 'text 1 45', 'text 1 25', 'text 1 1.5', 'text 1 70', 'text 1 40']
                                                },
                                                {
                                                    tip: 'Gradiente azul, claro a escuro',
                                                    items: { startColor: 'accent 1 50', stopColor: 'accent 1 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente laranja, claro a escuro',
                                                    items: { startColor: 'accent 2 50', stopColor: 'accent 2 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente cinza, claro a escuro',
                                                    items: { startColor: 'accent 3 50', stopColor: 'accent 3 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente dourado, claro a escuro',
                                                    items: { startColor: 'accent 4 50', stopColor: 'accent 4 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente azul, claro a escuro',
                                                    items: { startColor: 'accent 5 50', stopColor: 'accent 5 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente verde, claro a escuro',
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
                            "text": "Inverter fila/coluna",
                        },
                    ]
                },
            ]
        },
        {
            "title": "Forma",
            "hidden": true,
            "name": "shape",
            "groups": [{
                "tools": [{
                    "type": "shape-color-preset",
                    "name": "shapeColorPreset",
                    "type": "shapeColorPreset",
                    "text": "grupo de formas",
                    "items": [{
                        "type": "icon-group",
                        "value": "rgb(68, 114, 194)",
                        "text": "Azul"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 215, 0)",
                        "text": "Ouro"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(163, 163, 163)",
                        "text": "Cinza"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(113, 171, 72)",
                        "text": "Verde"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 165, 0)",
                        "text": "Laranja"
                    }]
                }, {
                    "type": "group",
                    "tooltip": "configuração de cor da forma",
                    "items": [{
                        "type": "setcolor-group",
                        "iconClass": "sprite FillBackColorSplitDropdown",
                        "name": "shapeFillColor",
                        "text": "Cor de preenchimento",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sem preenchimento", "color": "white" }, "header": "Fill Color" }
                    }, {
                        "type": "setcolor-group",
                        "iconClass": "glyphicon glyphicon-pencil",
                        "name": "shapeOutlineColor",
                        "text": "Cor de preenchimento",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sem preenchimento", "color": "white" }, "header": "Outline Color" }
                    }, {
                        "type": "dropdown-only",
                        "iconClass": "glyphicon glyphicon-minus icon-text",
                        "name": "shapeLineStyle",
                        "haslabel": true,
                        "text": "Estilo de linha",
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
                    "text": "Formas de grupo",
                }]
            }]
        }
    ]
};
