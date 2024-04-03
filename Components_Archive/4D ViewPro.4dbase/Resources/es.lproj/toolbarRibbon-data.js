var data = {
    "selected": 1,
    "tabs": [
        {
            "title": "Archivo",
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
                            "text": "Negrita",
                            "tooltip": "Negrita",
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
                            "text": "Subrayado",
                            "tooltip": "Subrayado",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite UnderlineDouble",
                            "name": "doubleUnderline",
                            "text": "Doble Subrayado",
                            "tooltip": "Doble Subrayado",
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
                                        { "value": "bottom", "text": "Borde inferior", "iconClass": "sprite BorderBottom" },
                                        { "value": "top", "text": "Borde superior", "iconClass": "sprite BorderTop" },
                                        { "value": "left", "text": "Borde izquierdo", "iconClass": "sprite BorderLeft" },
                                        { "value": "right", "text": "Borde derecho", "iconClass": "sprite BorderRight" },
                                        "",
                                        { "value": "none", "text": "Sin borde", "iconClass": "sprite BorderNone" },
                                        { "value": "all", "text": "Todos los bordes", "iconClass": "sprite BordersAll" },
                                        { "value": "outside", "text": "Bordes exteriores", "iconClass": "sprite BorderOutside" },
                                        { "value": "thick", "text": "Borde de caja grueso", "iconClass": "sprite BorderThickOutside" },
                                        "",
                                        { "value": "doublebottom", "text": "Borde doble inferior", "iconClass": "sprite BorderDoubleBottom" },
                                        { "value": "thickbottom", "text": "Borde inferior grueso", "iconClass": "sprite BorderThickBottom" },
                                        { "value": "top-bottom", "text": "Borde superior e inferior", "iconClass": "sprite BorderTopAndBottom" },
                                        { "value": "top-thickbottom", "text": "Borde superior e inferior grueso", "iconClass": "sprite BorderTopAndThickBottom" },
                                        { "value": "top-doublebottom", "text": "Borde superior y doble borde inferior", "iconClass": "sprite BorderTopAndDoubleBottom" },
                                        "",
                                        { "value": "more", "text": "Más bordes...", "iconClass": "sprite BordersMoreDialog" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Color de relleno",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite FillBackColorSplitDropdown",
                                    "name": "backColor",
                                    "text": "Color de relleno",
                                    "colorPickerOptions": { "nofill": { "show": true, "text": "Sin relleno", "color": "white" }, "header": "Fill Color" }
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Color de fuente",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite GroupBasicText",
                                    "name": "foreColor",
                                    "text": "Color de fuente",
                                    "colorPickerOptions": { "autocolor": { "show": false, "text": "Automático", "color": "black" }, "header": "Font Color" }
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Overline",
                            "name": "overline",
                            "text": "Sobre la línea",
                            "tooltip": "Sobre la línea",
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
                            "tooltip": "Alineación",
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
                                            "text": "Media",
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
                                            "text": "Izquierda",
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
                                            "text": "Derecha",
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
                            "text": "Fusionar y centrar",
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
                            "text": "Aumentar la indentación",
                            "collapseGroup": "groupIndent"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentDecrease",
                            "name": "outdent",
                            "text": "Disminuir la indentación",
                            "collapseGroup": "groupIndent"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Formato de celda",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite DollarSign",
                                    "name": "cellformat",
                                    "text": "Formato de celda",
                                    "dropdown": [
                                        { "value": "nullValue", "text": "General", "iconClass": "sprite DataTypeGeneral" },
                                        { "value": "0.00", "text": "Número", "iconClass": "sprite DataTypeNumber" },
                                        { "value": "$#,##0.00", "text": "Moneda", "iconClass": "sprite DataTypeCurrency" },
                                        { "value": "$ #,##0.00;$ (#,##0.00);$ \"-\"??;@", "text": "Accounting", "iconClass": "sprite DataTypeCurrencyBasic" },
                                        { "value": "d/m/yyyy", "text": "Fecha corta", "iconClass": "sprite DataTypeShortDate" },
                                        { "value": "dddd, mmmm dd, yyyy", "text": "Fecha larga", "iconClass": "sprite DataTypeLongDate" },
                                        { "value": "h:mm:ss AM/PM", "text": "Hora", "iconClass": "sprite DataTypeTime" },
                                        { "value": "0%", "text": "Porcentaje", "iconClass": "sprite PercentStyle" },
                                        { "value": "# ?/?", "text": "Fracción", "iconClass": "sprite DataTypeStandard" },
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
                            "tooltip": "Formato del número",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite PercentStyle",
                                    "name": "numberformat",
                                    "text": "Formato del número",
                                    "dropdown": [
                                        { "value": "percentStyle", "text": "Estilo porcentual", "iconClass": "sprite PercentStyle" },
                                        { "value": "commaStyle", "text": "Estilo coma", "iconClass": "sprite CommaStyle" },
                                        { "value": "increaseDecimal", "text": "Aumentar los decimales", "iconClass": "sprite DecimalsIncrease" },
                                        { "value": "decreaseDecimal", "text": "Disminuir los decimales", "iconClass": "sprite DecimalsDecrease" }
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
                            "tooltip": "Tipo de celda",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite CellProperties",
                                    "name": "celltype",
                                    "text": "Tipo de celda",
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
                            "text": "Proteger hoja",
                            "tooltips": ["Proteger hoja", "Desproteger hoja"],
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "unlockcells",
                            "text": "Desbloquear celdas",
                            "tooltips": ["Bloquear celdas", "Desbloquear celdas"],
                            "toggle": true,
                            "checked": true
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Insertar y eliminar",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite InsertCellMenu",
                                    "name": "cellsgroup",
                                    "text": "Insertar y eliminar",
                                    "dropdown": [
                                        { "value": "insertRows", "text": "Insertar filas", "iconClass": "sprite InsertRow" },
                                        { "value": "insertColumns", "text": "Insertar columnas", "iconClass": "sprite InsertColumns" },
                                        { "value": "insert-shiftCellsRight", "text": "Insertar celdas y mover a la derecha", "iconClass": "sprite InsertColumnLeft" },
                                        { "value": "insert-shiftCellsDown", "text": "Insertar celdas y bajar", "iconClass": "sprite InsertRowAbove" },
                                        { "value": "deleteRows", "text": "Eliminar filas", "iconClass": "sprite CellsDelete" },
                                        { "value": "deleteColumns", "text": "Eliminar columnas", "iconClass": "sprite CellsDeleteSmart" },
                                        { "value": "delete-shiftCellsLeft", "text": "Eliminar las celdas y mover a la izquierda", "iconClass": "sprite CellsDelete" },
                                        { "value": "delete-shiftCellsUp", "text": "Borrar celdas y subirlas", "iconClass": "sprite CellsDeleteSmart" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "Borrar",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite ClearMenu",
                                    "name": "clearformat",
                                    "text": "Borrar",
                                    "dropdown": [
                                        { "value": "clearAll", "text": "Borrar todo", "iconClass": "sprite ClearAll" },
                                        { "value": "clearFormatting", "text": "Borrar formato", "iconClass": "sprite ClearAllFormatting" },
                                        { "value": "clear", "text": "Borrar", "iconClass": "sprite Clear" }
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
            "title": "Insertar",
            "name": "insert",
            "collapse": ["*groupInsert"],
            "groups": [
                {
                    "tooltip": "Insertar",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertTable icon-text",
                            "name": "insertTable",
                            "text": "Tabla",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertPictureDialog icon-text",
                            "name": "insertPicture",
                            "text": "Imágenes",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertLink icon-text",
                            "name": "insertLink",
                            "text": "Enlace",
                            "header": "Insertar enlace",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertNewComment icon-text",
                            "name": "insertComment",
                            "text": "Comentario",
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
                                        { "value": "line", "text": "Minigráficos de líneas" },
                                        { "value": "column", "text": "Minigráfico de columnas" },
                                        { "value": "winloss", "text": "Pérdidas y\nGanancias" },
                                        { "value": "pie", "text": "minigráfico circular" },
                                        { "value": "area", "text": "Minigráfico de área" },
                                        { "value": "scatter", "text": "Minigráfico de dispersión" },
                                        { "value": "spread", "text": "Minigráfico de dispersión" },
                                        { "value": "stacked", "text": "Minigráfico apilados" },
                                        { "value": "boxplot", "text": "Minigráfico BoxPlot" },
                                        { "value": "cascade", "text": "Minigráfico Cascada" },
                                        { "value": "pareto", "text": "Minigráfico Pareto" },
                                        { "value": "bullet", "text": "Minigráfico Bullet" },
                                        { "value": "hbar", "text": "Minigráfico Hbar" },
                                        { "value": "vbar", "text": "Minigráfico Vbar" },
                                        { "value": "vari", "text": "Minigráfico Varianza" }
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
                                            "text": "Gráfico de columnas",
                                            "header": "Gráfico de columnas",
                                            "iconClass": "chartIcon ColumnChart",
                                            "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de columnas",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Columnas agrupadas", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Columnas apiladas", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "Columnas apiladas 100%", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line1", "text": "Gráfico de líneas", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico de líneas",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Línea", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Línea apilada", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "100% Línea apilada", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Línea con marcadores", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Línea apilada con marcadores", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "100% Línea apilada con marcadores", "iconClass": "chartIconBase stacked100-line-markers-icon" }
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
                                                        { "value": "doughnut", "text": "Anillo", "iconClass": "chartIconBase doughnut-icon" }
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
                                                        { "value": "barStacked", "text": "Barra apilada", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100% Barra apilada", "iconClass": "chartIconBase stacked100-bar-icon" }
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
                                                        { "value": "areaStacked", "text": "Área apilada", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100% Área apilada", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter1", "text": "Gráfico XY(Dispersión)", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico XY(Dispersión)",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(Dispersión)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Líneas XY(Dispersión)", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Líneas sin marcadores XY(Dispersión)", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "Suave xy(Dispersión)", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Suave sin marcadores XY(Dispersión)", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Burbuja", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar", "text": "Gráfico Radial", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChart",
                                                    "haslabel": true,
                                                    "text": "Gráfico Radial",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "chartIconBase radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar lleno", "iconClass": "chartIconBase radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Radar con marcadores", "iconClass": "chartIconBase radarMarkers-icon" },
                                                    ]
                                                },
                                            ]
                                        },
                                        { "value": "sunburst", "text": "Proyec. Solar", "iconClass": "sunburst-icon" },
                                        { "value": "treemap", "text": "Rectángulos", "iconClass": "treemap-icon" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupInsert",
                            "items": [{
                                "value": "shape",
                                "name": "Forma",
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
                            "tooltip": "Suma",
                            "collapseGroup": "groupFormula",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-usd icon-text",
                                    "name": "autoSum",
                                    "haslabel": true,
                                    "text": "Auto Suma",
                                    "header": "Auto Suma",
                                    "dropdown": [
                                        { "value": "sum", "text": "Suma" },
                                        { "value": "average", "text": "Promedio" },
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
                            "text": "Insertar fórmula",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "glyphicon glyphicon-paperclip icon-text",
                            "name": "nameManager",
                            "text": "Gestor de nombres",
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
            "title": "Datos",
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
                            "text": "Orden ascendente",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite SortDescendingWord",
                            "name": "sortZA",
                            "text": "Orden ascendente",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite FiltersMenu",
                            "name": "filter",
                            "text": "Mostrar botones de filtro",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite SortFilterMenu",
                            "name": "sortAndFilter",
                            "text": "Ordenar y filtrar",
                            "header": "Ordenar y filtrar",
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
                            "text": "Mostrar detalle",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite HideDetails",
                            "name": "hideDetail",
                            "text": "Ocultar detalle",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Las líneas de resumen abajo detallan",
                            "name": "summaryBelow",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Columnas de resumen a la derecha de los detalles",
                            "name": "summaryRight",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite GroupTableStyleOptions",
                            "altIconClass": "glyphicon glyphicon-menu-right",
                            "name": "groupSetting",
                            "text": "Parámetros del grupo",
                            "header": "Parámetros del grupo",
                            "minWidth": "300px",
                            "items": ["summaryBelow", "summaryRight"]
                        }
                    ]
                },
                {
                    "tooltip": "Validación de datos",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidationCircleInvalid icon-text",
                            "name": "circleInvalidData",
                            "text": "Marcar con un círculo los datos inválidos",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidation icon-text",
                            "name": "selectValidator",
                            "text": "Seleccionar validador",
                            "header": "Validador de datos"
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
                            "text": "Cuadrícula",
                            "tooltip": "Ver la cuadrícula",
                            "collapseGroup": "groupShow",
                            "name": "showGridlines"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Encabezados",
                            "tooltip": "Ver los encabezados",
                            "collapseGroup": "groupShow",
                            "name": "showHeadings"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "Pestañas de la hoja",
                            "tooltip": "Mostrar las pestañas de la hoja",
                            "collapseGroup": "groupShow",
                            "name": "showSheetTabs"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "showHideDropdown",
                            "header": "Mostrar / Ocultar",
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
                                    "text": "Congelar paneles",
                                    "dropdown": [
                                        { "value": "freezePanes", "text": "Congelar paneles" },
                                        { "value": "freezeTopRow", "text": "Congelar la fila superior" },
                                        { "value": "freezeFirstColumn", "text": "Congelar la primera columna" },
                                        { "value": "freezeBottomRow", "text": "Congelar la fila inferior" },
                                        { "value": "freezeLastColumn", "text": "Congelar la última columna" },
                                        "",
                                        { "value": "unfreeze", "text": "Descongelar los paneles" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "Tabla",
            "hidden": false,
            "name": "table",
            "groups": [
                {
                    tools: [
                        {
                            "type": "input",
                            "name": "tableName",
                            "text": "Nombre"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "Insertar segmento",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-filter icon-text",
                                    "name": "insertSlicer",
                                    "text": "Insertar segmento",
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
                            "tooltip": "Opciones de estilo",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-info-sign icon-text",
                                    "name": "tableOption",
                                    "text": "Opciones de estilo",
                                    "haslabel": true,
                                    "dropdown": [
                                        { "value": "tableHeaderRow", "text": "Fila de encabezado", "toggle": true, "checked": true },
                                        { "value": "tableTotalRow", "text": "Fila total", "toggle": true },
                                        { "value": "tableFirstColumn", "text": "Primera columna", "toggle": true },
                                        { "value": "tableLastColumn", "text": "Última columna", "toggle": true },
                                        { "value": "tableBandedRows", "text": "Filas con bandas", "toggle": true, "checked": true },
                                        { "value": "tableBandedColumns", "text": "Columnas con bandas", "toggle": true },
                                        { "value": "tableFilterButton", "text": "Botón filtro", "toggle": true }
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
                            "tooltip": "Estilos de tabla",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-th",
                                    "name": "tableStyles",
                                    "text": "Estilos de tabla",
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
                                            "value": "column2", "text": "Gráfico de columnas", "findCss": "Column Chart Type Changed", "iconClass": "chartIcon ColumnChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Tipo de gráfico de columna modificado",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "Columna agrupada", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "Columna apilada", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "Columna apilada 100%", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line2", "text": "Gráfico de líneas", "findCss": "Line Chart Type Changed", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Tipo gráfico de líneas modificado",
                                                    "dropdown": [
                                                        { "value": "line", "text": "Línea", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "Línea apilada", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "Línea apilada 100%", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "Línea con marcadores", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "Línea apilada con marcadores", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "100% Línea apilada con marcadores", "iconClass": "chartIconBase stacked100-line-markers-icon" }
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
                                                    "text": "Cambió el tipo de gráfico circular",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "Circular", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "Anillo", "iconClass": "chartIconBase doughnut-icon" }
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
                                                    "text": "Cambió el tipo de gráfico de barras",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "Barra agrupada", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "Barra apilada", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100% Barra apilada", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area2", "text": "Gráfico de áreas", "findCss": "Area Chart Type Changed", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Cambió el tipo de gráfico de área",
                                                    "dropdown": [
                                                        { "value": "area", "text": "Area", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "Área apilada", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100% Área apilada", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter2", "text": "Gráfico XY(Dispersión)", "findCss": "xyScatter Chart Type Changed", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Cambió el tipo de gráfico XY(Dispersión)",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(Dispersión)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "Líneas XY(Dispersión)", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "Líneas sin marcadores XY(Dispersión)", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(Dispersión) Smooth", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "Suave sin marcadores XY(Dispersión)", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "Burbuja", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar2", "text": "Gráfico Radial", "findCss": "Radar Chart Type Changed", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "Cambió el tipo de gráfico Radial",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "Radar", "iconClass": "radar-icon" },
                                                        { "value": "radarFilled", "text": "Radar lleno", "iconClass": "radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "Radar con marcadores", "iconClass": "radarMarkers-icon" },
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
                            "tooltip": "Diseño rápido",
                            "items": [
                                {
                                    "type": "dropdown-quickLayout",
                                    "iconClass": "icon-chart-base-middle icon-chart-quick-layout icon-text",
                                    "name": "chartQuickLayout",
                                    "text": "Diseño rápido",
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
                            "tooltip": "Añadir elemento",
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
                                    "text": "Color",
                                    "haslabel": true,
                                    "chartColors": {
                                        "colorful": {
                                            "name": 'Colorido', "colors": [
                                                {
                                                    tip: 'Azul, Naranja, Gris, Oro, Azul, Verde',
                                                    items: ['accent 1', 'accent 2', 'accent 3', 'accent 4', 'accent 5', 'accent 6']
                                                },
                                                {
                                                    tip: 'Azul, Naranja, Gris, Oro, Azul, Verde',
                                                    items: ['accent 1', 'accent 3', 'accent 5', 'accent 1 -40', 'accent 3 -40', 'accent 5 -40']
                                                },
                                                {
                                                    tip: 'Azul, Naranja, Gris, Oro, Azul, Verde',
                                                    items: ['accent 2', 'accent 4', 'accent 6', 'accent 2 -40', 'accent 4 -40', 'accent 6 -40']
                                                },
                                                {
                                                    tip: 'Azul, Naranja, Gris, Oro, Azul, Verde',
                                                    items: ['accent 6', 'accent 5', 'accent 4', 'accent 6 -40', 'accent 5 -40', 'accent 4 -40']
                                                }
                                            ]
                                        },
                                        "monochromatic": {
                                            "name": 'Monocromático', "colors": [
                                                {
                                                    tip: 'Gradiente azul, de oscuro a claro',
                                                    items: { startColor: 'accent 1 -50', stopColor: 'accent 1 50' }
                                                },
                                                {
                                                    tip: 'Gradiente naranja, de oscuro a claro',
                                                    items: { startColor: 'accent 2 -50', stopColor: 'accent 2 50' }
                                                },
                                                {
                                                    tip: 'Gradiente gris, de oscuro a claro',
                                                    items: { startColor: 'accent 3 -50', stopColor: 'accent 3 50' }
                                                },
                                                {
                                                    tip: 'Gradiente oro, de oscuro a claro',
                                                    items: { startColor: 'accent 4 -50', stopColor: 'accent 4 50' }
                                                },
                                                {
                                                    tip: 'Gradiente azul, de oscuro a claro',
                                                    items: { startColor: 'accent 5 -50', stopColor: 'accent 5 50' }
                                                },
                                                {
                                                    tip: 'Gradiente verde, de oscuro a claro',
                                                    items: { startColor: 'accent 6 -50', stopColor: 'accent 6 50' }
                                                },
                                                {
                                                    tip: 'Gris oscuro, gris claro, gris, gris oscuro, gris claro, gris',
                                                    items: ['text 1 11.5', 'text 1 45', 'text 1 25', 'text 1 1.5', 'text 1 70', 'text 1 40']
                                                },
                                                {
                                                    tip: 'Gradiente azul, de claro a oscuro',
                                                    items: { startColor: 'accent 1 50', stopColor: 'accent 1 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente naranja, de claro a oscuro',
                                                    items: { startColor: 'accent 2 50', stopColor: 'accent 2 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente gris, de claro a oscuro',
                                                    items: { startColor: 'accent 3 50', stopColor: 'accent 3 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente oro, de claro a oscuro',
                                                    items: { startColor: 'accent 4 50', stopColor: 'accent 4 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente azul, de claro a oscuro',
                                                    items: { startColor: 'accent 5 50', stopColor: 'accent 5 -50' }
                                                },
                                                {
                                                    tip: 'Gradiente verde, de claro a oscuro',
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
                            "text": "Invertir fila/columna",
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
                    "text": "Grupo de formas",
                    "items": [{
                        "type": "icon-group",
                        "value": "rgb(68, 114, 194)",
                        "text": "Azul"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 215, 0)",
                        "text": "Oro"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(163, 163, 163)",
                        "text": "Gris"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(113, 171, 72)",
                        "text": "Verde"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 165, 0)",
                        "text": "Naranja"
                    }]
                }, {
                    "type": "group",
                    "tooltip": "configuración colores de formas",
                    "items": [{
                        "type": "setcolor-group",
                        "iconClass": "sprite FillBackColorSplitDropdown",
                        "name": "shapeFillColor",
                        "text": "Color de relleno",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sin relleno", "color": "white" }, "header": "Fill Color" }
                    }, {
                        "type": "setcolor-group",
                        "iconClass": "glyphicon glyphicon-pencil",
                        "name": "shapeOutlineColor",
                        "text": "Color de relleno",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "Sin relleno", "color": "white" }, "header": "Outline Color" }
                    }, {
                        "type": "dropdown-only",
                        "iconClass": "glyphicon glyphicon-minus icon-text",
                        "name": "shapeLineStyle",
                        "haslabel": true,
                        "text": "Estilo de línea",
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
                    "text": "Grupo de formas",
                }]
            }]
        }
    ]
};
