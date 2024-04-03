var data = {
    "selected": 1,
    "tabs": [
        {
            "title": "ファイル",
            "name": "file"
        },
        {
            "title": "ホーム",
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
                            "text": "太字",
                            "tooltip": "太字",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Italic",
                            "name": "italic",
                            "text": "イタリック",
                            "tooltip": "イタリック",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Underline",
                            "name": "underline",
                            "text": "下線付き",
                            "tooltip": "下線付き",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite UnderlineDouble",
                            "name": "doubleUnderline",
                            "text": "二重下線付き",
                            "tooltip": "二重下線付き",
                            "collapseGroup": "groupStyle1",
                            "toggle": true,
                            "nolabel": true
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "Borders",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "sprite BorderBottomNoToggle",
                                    "name": "border",
                                    "text": "罫線",
                                    "header": "罫線",
                                    "minWidth": 280,
                                    "dropdown": [
                                        { "value": "bottom", "text": "下罫線", "iconClass": "sprite BorderBottom" },
                                        { "value": "top", "text": "上罫線", "iconClass": "sprite BorderTop" },
                                        { "value": "left", "text": "左罫線", "iconClass": "sprite BorderLeft" },
                                        { "value": "right", "text": "右罫線", "iconClass": "sprite BorderRight" },
                                        "",
                                        { "value": "none", "text": "罫線なし", "iconClass": "sprite BorderNone" },
                                        { "value": "all", "text": "格子", "iconClass": "sprite BordersAll" },
                                        { "value": "outside", "text": "外枠", "iconClass": "sprite BorderOutside" },
                                        { "value": "thick", "text": "太外枠罫線", "iconClass": "sprite BorderThickOutside" },
                                        "",
                                        { "value": "doublebottom", "text": "下二重罫線", "iconClass": "sprite BorderDoubleBottom" },
                                        { "value": "thickbottom", "text": "下太罫線", "iconClass": "sprite BorderThickBottom" },
                                        { "value": "top-bottom", "text": "上罫線+下罫線", "iconClass": "sprite BorderTopAndBottom" },
                                        { "value": "top-thickbottom", "text": "上罫線+下太罫線", "iconClass": "sprite BorderTopAndThickBottom" },
                                        { "value": "top-doublebottom", "text": "上罫線+下二重罫線", "iconClass": "sprite BorderTopAndDoubleBottom" },
                                        "",
                                        { "value": "more", "text": "その他の罫線...", "iconClass": "sprite BordersMoreDialog" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "塗りつぶしカラー",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite FillBackColorSplitDropdown",
                                    "name": "backColor",
                                    "text": "Fill Color",
                                    "colorPickerOptions": { "nofill": { "show": true, "text": "No Fill", "color": "white" }, "header": "Fill Color" }
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupStyle3",
                            "tooltip": "フォントの色",
                            "items": [
                                {
                                    "type": "setcolor-group",
                                    "iconClass": "sprite GroupBasicText",
                                    "name": "foreColor",
                                    "text": "フォントカラー",
                                    "colorPickerOptions": { "autocolor": { "show": false, "text": "Automatic", "color": "black" }, "header": "Font Color" }
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Overline",
                            "name": "overline",
                            "text": "上線付き",
                            "tooltip": "上線付き",
                            "collapseGroup": "groupStyle2",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Strikethrough",
                            "name": "strikethrough",
                            "text": "打ち消し線",
                            "tooltip": "打ち消し線",
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
                            "tooltip": "文字揃え",
                            "header": "文字揃え",
                            "items": ["indent", "outdent"],
                            "rows": [
                                {
                                    "type": "icon-group",
                                    "items": [
                                        {
                                            "iconClass": "sprite AlignTopExcel",
                                            "name": "valign-top",
                                            "text": "上揃え",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignMiddleExcel",
                                            "name": "valign-center",
                                            "text": "中央揃え",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "valign"
                                        },
                                        {
                                            "iconClass": "sprite AlignBottomExcel",
                                            "name": "valign-bottom",
                                            "text": "下揃え",
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
                                            "text": "左揃え",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignCenter",
                                            "name": "halign-center",
                                            "text": "中央揃え",
                                            "toggle": true,
                                            "nolabel": true,
                                            "toggleGroup": "halign"
                                        },
                                        {
                                            "iconClass": "sprite AlignRight",
                                            "name": "halign-right",
                                            "text": "右揃え",
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
                            "text": "セルを結合し中央揃え",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite WrapText",
                            "name": "wordwrap",
                            "text": "テキストの折り返し",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite CellAlignmentOptions",
                            "name": "verticalText",
                            "text": "垂直テキスト",
                            "collapseGroup": "groupAlignment",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentIncrease",
                            "name": "indent",
                            "text": "インデント増加",
                            "collapseGroup": "groupIndent"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite IndentDecrease",
                            "name": "outdent",
                            "text": "インデント減少",
                            "collapseGroup": "groupIndent"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "セルの書式設定",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite DollarSign",
                                    "name": "cellformat",
                                    "text": "セルの書式設定",
                                    "dropdown": [
                                        { "value": "nullValue", "text": "標準", "iconClass": "sprite DataTypeGeneral" },
                                        { "value": "0.00", "text": "数値", "iconClass": "sprite DataTypeNumber" },
                                        { "value": "$#,##0.00", "text": "通貨", "iconClass": "sprite DataTypeCurrency" },
                                        { "value": "$ #,##0.00;$ (#,##0.00);$ \"-\"??;@", "text": "会計", "iconClass": "sprite DataTypeCurrencyBasic" },
                                        { "value": "m/d/yyyy", "text": "短い日付", "iconClass": "sprite DataTypeShortDate" },
                                        { "value": "dddd, mmmm dd, yyyy", "text": "長い日付", "iconClass": "sprite DataTypeLongDate" },
                                        { "value": "h:mm:ss AM/PM", "text": "時間", "iconClass": "sprite DataTypeTime" },
                                        { "value": "0%", "text": "パーセンテージ", "iconClass": "sprite PercentStyle" },
                                        { "value": "# ?/?", "text": "分数", "iconClass": "sprite DataTypeStandard" },
                                        { "value": "0.00E+00", "text": "指数", "iconClass": "sprite DataTypeScientific" },
                                        { "value": "@", "text": "文字列", "iconClass": "sprite DataTypeText" },
                                        "",
                                        { "value": "custom", "text": "ユーザー定義の書式設定" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "数値フォーマット",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite PercentStyle",
                                    "name": "numberformat",
                                    "text": "数値フォーマット",
                                    "dropdown": [
                                        { "value": "percentStyle", "text": "パーセントスタイル", "iconClass": "sprite PercentStyle" },
                                        { "value": "commaStyle", "text": "桁区切り", "iconClass": "sprite CommaStyle" },
                                        { "value": "increaseDecimal", "text": "小数点表示桁上げ", "iconClass": "sprite DecimalsIncrease" },
                                        { "value": "decreaseDecimal", "text": "小数点表示桁下げ", "iconClass": "sprite DecimalsDecrease" }
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
                            "tooltip": "セルタイプ",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite CellProperties",
                                    "name": "celltype",
                                    "text": "セルタイプ",
                                    "dropdown": [
                                        { "value": "button", "text": "ボタン型セルタイプ" },
                                        { "value": "checkbox", "text": "チェックボックス型セルタイプ" },
                                        { "value": "combobox", "text": "コンボボックス型セルタイプ" },
                                        { "value": "hyperlink", "text": "ハイパーリンク型セルタイプ" }
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
                            "text": "シートを保護",
                            "tooltips": ["シートを保護", "シートの保護を解除"],
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Lock",
                            "name": "unlockcells",
                            "text": "セルのロックを解除",
                            "tooltips": ["セルをロック", "セルのロックを解除"],
                            "toggle": true,
                            "checked": true
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "挿入と削除",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite InsertCellMenu",
                                    "name": "cellsgroup",
                                    "text": "挿入と削除",
                                    "dropdown": [
                                        { "value": "insertRows", "text": "行を挿入", "iconClass": "sprite InsertRow" },
                                        { "value": "insertColumns", "text": "カラムを挿入", "iconClass": "sprite InsertColumns" },
                                        { "value": "insert-shiftCellsRight", "text": "セルを挿入して右にシフト", "iconClass": "sprite InsertColumnLeft" },
                                        { "value": "insert-shiftCellsDown", "text": "セルを挿入して下にシフト", "iconClass": "sprite InsertRowAbove" },
                                        { "value": "deleteRows", "text": "行を削除", "iconClass": "sprite CellsDelete" },
                                        { "value": "deleteColumns", "text": "カラムを削除", "iconClass": "sprite CellsDeleteSmart" },
                                        { "value": "delete-shiftCellsLeft", "text": "セルを削除して左にシフト", "iconClass": "sprite CellsDelete" },
                                        { "value": "delete-shiftCellsUp", "text": "セルを削除して上にシフト", "iconClass": "sprite CellsDeleteSmart" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "クリア",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite ClearMenu",
                                    "name": "clearformat",
                                    "text": "クリア",
                                    "dropdown": [
                                        { "value": "clearAll", "text": "すべてクリア", "iconClass": "sprite ClearAll" },
                                        { "value": "clearFormatting", "text": "書式設定をクリア", "iconClass": "sprite ClearAllFormatting" },
                                        { "value": "clear", "text": "クリア", "iconClass": "sprite Clear" }
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
                            "text": "条件付き書式"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SearchUI",
                            "name": "find",
                            "text": "検索"
                        }
                    ]
                }
            ]
        },
        {
            "title": "挿入",
            "name": "insert",
            "collapse": ["*groupInsert"],
            "groups": [
                {
                    "tooltip": "挿入",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertTable icon-text",
                            "name": "insertTable",
                            "text": "テーブル",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertPictureDialog icon-text",
                            "name": "insertPicture",
                            "text": "ピクチャー",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertLink icon-text",
                            "name": "insertLink",
                            "text": "リンク",
                            "header": "リンクを挿入",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite InsertNewComment icon-text",
                            "name": "insertComment",
                            "text": "コメント",
                            "collapseGroup": "groupInsert"
                        },
                        {
                            "type": "group",
                            "tooltip": "スパークライン",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "sprite SparklineLineInsert icon-text",
                                    "name": "insertSparkline",
                                    "haslabel": true,
                                    "text": "スパークライン",
                                    "dropdown": [
                                        { "value": "line", "text": "折れ線スパークライン" },
                                        { "value": "column", "text": "縦棒スパークライン" },
                                        { "value": "winloss", "text": "勝敗スパークライン" },
                                        { "value": "pie", "text": "円グラフスパークライン" },
                                        { "value": "area", "text": "面グラフスパークライン" },
                                        { "value": "scatter", "text": "散布図スパークライン" },
                                        { "value": "spread", "text": "スプレッドスパークライン" },
                                        { "value": "stacked", "text": "スタックスパークライン" },
                                        { "value": "boxplot", "text": "ボックススパークライン" },
                                        { "value": "cascade", "text": "カスケードスパークライン" },
                                        { "value": "pareto", "text": "パレートスパークライン" },
                                        { "value": "bullet", "text": "ブレットスパークライン" },
                                        { "value": "hbar", "text": "水平バースパークライン" },
                                        { "value": "vbar", "text": "垂直バースパークライン" },
                                        { "value": "vari", "text": "バリスパークライン" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "tooltip": "バーコード",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "barcode icon-text",
                                    "name": "insertBarCode",
                                    "haslabel": true,
                                    "text": "バーコード",
                                    "dropdown": [
                                        { "value": "qrCode", "text": "QRコード" },
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
                            "tooltip": "チャート",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "insertChart",
                                    "haslabel": true,
                                    "text": "チャート",
                                    "dropdown": [
                                        {
                                            "value": "column1",
                                            "text": "縦棒チャート",
                                            "header": "縦棒チャート",
                                            "iconClass": "chartIcon ColumnChart",
                                            "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChart",
                                                    "haslabel": true,
                                                    "text": "縦棒チャート",
                                                    "dropdown": [
                                                        {  "value": "columnClustered", "text": "集合縦棒", "iconClass": "chartIconBase clustered-column-icon" },
                                                        {  "value": "columnStacked", "text": "積み上げ縦棒", "iconClass": "chartIconBase stacked-column-icon" },
                                                        {  "value": "columnStacked100", "text": "100%積み上げ縦棒", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line1", "text": "折れ線チャート", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChart",
                                                    "haslabel": true,
                                                    "text": "折れ線チャート",
                                                    "dropdown": [
                                                        { "value": "line", "text": "折れ線", "iconClass": "chartIconBase line-icon" },
                                                        {  "value": "lineStacked", "text": "積み上げ折れ線", "iconClass": "chartIconBase stacked-line-icon" },
                                                        {  "value": "lineStacked100", "text": "100%積み上げ折れ線", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        {  "value": "lineMarkers", "text": "マーカー付き折れ線", "iconClass": "chartIconBase line-markers-icon" },
                                                        {  "value": "lineMarkersStacked", "text": "マーカー付き積み上げ折れ線", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        {  "value": "lineMarkersStacked100", "text": "マーカー付き100%積み上げ折れ線", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie1", "text": "円チャート", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChart",
                                                    "haslabel": true,
                                                    "text": "円チャート",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "円", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "ドーナツ", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar1", "text": "横棒チャート", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChart",
                                                    "haslabel": true,
                                                    "text": "横棒チャート",
                                                    "dropdown": [
                                                        {  "value": "barClustered", "text": "集合横棒", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        {  "value": "barStacked", "text": "積み上げ横棒", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        {  "value": "barStacked100", "text": "100%積み上げ横棒", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area1", "text": "面グラフチャート", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChart",
                                                    "haslabel": true,
                                                    "text": "面グラフチャート",
                                                    "dropdown": [
                                                        { "value": "area", "text": "面グラフ", "iconClass": "chartIconBase area-icon" },
                                                        {  "value": "areaStacked", "text": "積み上げ面", "iconClass": "chartIconBase stacked-area-icon" },
                                                        {  "value": "areaStacked100", "text": "100%積み上げ面", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter1", "text": "XY(散布)チャート", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChart",
                                                    "haslabel": true,
                                                    "text": "XY(散布)チャート",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(散布)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "XY(散布)線とマーカー", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "XY(散布)マーカーなし線", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(散布)平滑線", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "XY(散布)マーカーなし平滑線", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "バブルグラフ", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar1", "text": "レーダーチャート", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChart",
                                                    "haslabel": true,
                                                    "text": "レーダーチャート",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "レーダー", "iconClass": "chartIconBase radar-icon" },
                                                        { "value": "radarFilled", "text": "塗りつぶしレーダー", "iconClass": "chartIconBase radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "マーカー付きレーダー", "iconClass": "chartIconBase radarMarkers-icon" },
                                                    ]
                                                },
                                            ]
                                        },
                                        { "value": "sunburst", "text": "サンバースト", "iconClass": "sunburst-icon" },
                                        { "value": "treemap", "text": "ツリーマップ", "iconClass": "treemap-icon" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "group",
                            "collapseGroup": "groupInsert",
                            "items": [{
                                "value": "shape",
                                "name": "図形",
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
            "title": "フォーミュラ",
            "name": "formulas",
            "collapse": ["*groupFormula"],
            "groups": [
                {
                    "tooltip": "フォーミュラ",
                    "tools": [
                        {
                            "ignore": true,
                            "type": "group",
                            "tooltip": "総計",
                            "collapseGroup": "groupFormula",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-usd icon-text",
                                    "name": "autoSum",
                                    "haslabel": true,
                                    "text": "自動総計",
                                    "header": "自動総計",
                                    "dropdown": [
                                        { "value": "sum", "text": "総計" },
                                        { "value": "average", "text": "平均" },
                                        { "value": "count", "text": "個数カウント" },
                                        { "value": "max", "text": "最大" },
                                        { "value": "min", "text": "最小" }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite Formula icon-text",
                            "name": "insertFormula",
                            "text": "フォーミュラを挿入",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "ignore": true,
                            "type": "icon",
                            "iconClass": "glyphicon glyphicon-paperclip icon-text",
                            "name": "nameManager",
                            "text": "命名エリア管理",
                            "collapseGroup": "groupFormula"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "setFormula",
                            "header": "フォーミュラ",
                            "items": []
                        }
                    ]
                }, {
                    "tooltip": "再計算実行",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite CalculationOptionsMenu icon-text",
                            "name": "calculateNow",
                            "text": "再計算実行"
                        }
                    ]
                }
            ]
        },
        {
            "title": "データ",
            "name": "data",
            "collapse": ["groupDetail", "groupSort", "groupGroup"],
            "groups": [
                {
                    "tooltip": "並べ替え/フィルター",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite SortAscendingWord",
                            "name": "sortAZ",
                            "text": "昇順に並べ替え",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite SortDescendingWord",
                            "name": "sortZA",
                            "text": "降順に並べ替え",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite FiltersMenu",
                            "name": "filter",
                            "text": "フィルターボタンを表示",
                            "collapseGroup": "groupSort"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite SortFilterMenu",
                            "name": "sortAndFilter",
                            "text": "並べ替え&フィルター",
                            "header": "並べ替え&フィルター",
                            "items": []
                        }
                    ]
                },
                {
                    "tooltip": "グループ化",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineGroup",
                            "name": "group",
                            "text": "グループ化",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite OutlineUngroup",
                            "name": "ungroup",
                            "text": "グループ解除",
                            "collapseGroup": "groupGroup"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite ShowDetailsPage",
                            "name": "showDetail",
                            "text": "詳細を表示",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite HideDetails",
                            "name": "hideDetail",
                            "text": "詳細を非表示",
                            "collapseGroup": "groupDetail"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "詳細の下に集計を表示",
                            "name": "summaryBelow",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "総裁の右に集計を表示",
                            "name": "summaryRight",
                            "collapseGroup": "groupDetailSummary"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "sprite GroupTableStyleOptions",
                            "altIconClass": "glyphicon glyphicon-menu-right",
                            "name": "groupSetting",
                            "text": "グループ化設定",
                            "header": "グループ化設定",
                            "minWidth": "300px",
                            "items": ["summaryBelow", "summaryRight"]
                        }
                    ]
                },
                {
                    "tooltip": "入力規則",
                    "tools": [
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidationCircleInvalid icon-text",
                            "name": "circleInvalidData",
                            "text": "無効なデータに丸をつける",
                            "toggle": true
                        },
                        {
                            "type": "icon",
                            "iconClass": "sprite DataValidation icon-text",
                            "name": "selectValidator",
                            "text": "入力規則を選択",
                            "header": "データの入力規則"
                        }
                    ]
                }
            ]
        },
        {
            "title": "表示",
            "name": "view",
            "collapse": ["*groupShow"],
            "groups": [
                {
                    "tooltip": "表示/非表示",
                    "tools": [
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "フォーミュラバー",
                            "tooltip": "フォーミュラバーの表示",
                            "collapseGroup": "groupShow",
                            "name": "showFormulaBar"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "枠線",
                            "tooltip": "枠線の表示",
                            "collapseGroup": "groupShow",
                            "name": "showGridlines"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "ヘッダー",
                            "tooltip": "ヘッダーの表示",
                            "collapseGroup": "groupShow",
                            "name": "showHeadings"
                        },
                        {
                            "type": "checkbox",
                            "checked": true,
                            "text": "シートのタブ",
                            "tooltip": "シートのタブの表示",
                            "collapseGroup": "groupShow",
                            "name": "showSheetTabs"
                        },
                        {
                            "type": "dropdown",
                            "iconClass": "glyphicon glyphicon-menu-down",
                            "name": "showHideDropdown",
                            "header": "表示/非表示",
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
                                    "text": "ウィンドウ枠の固定",
                                    "dropdown": [
                                        { "value": "freezePanes", "text": "ウィンドウ枠の固定" },
                                        { "value": "freezeTopRow", "text": "最初の行を固定" },
                                        { "value": "freezeFirstColumn", "text": "最初のカラムを固定" },
                                        { "value": "freezeBottomRow", "text": "最後の行を固定" },
                                        { "value": "freezeLastColumn", "text": "最後のカラムを固定" },
                                        "",
                                        { "value": "unfreeze", "text": "固定を解除" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "title": "テーブル",
            "hidden": false,
            "name": "table",
            "groups": [
                {
                    tools: [
                        {
                            "type": "input",
                            "name": "tableName",
                            "text": "テーブル名"
                        }
                    ]
                },
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "スライサーを挿入",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-filter icon-text",
                                    "name": "insertSlicer",
                                    "text": "スライサーを挿入",
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
                            "tooltip": "表示オプション",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "glyphicon glyphicon-info-sign icon-text",
                                    "name": "tableOption",
                                    "text": "表示オプション",
                                    "haslabel": true,
                                    "dropdown": [
                                        { "value": "tableHeaderRow", "text": "ヘッダー行", "toggle": true, "checked": true },
                                        { "value": "tableTotalRow", "text": "総計行", "toggle": true },
                                        { "value": "tableFirstColumn", "text": "最初のカラム", "toggle": true },
                                        { "value": "tableLastColumn", "text": "最後のカラム", "toggle": true },
                                        { "value": "tableBandedRows", "text": "交互行背景色", "toggle": true, "checked": true },
                                        { "value": "tableBandedColumns", "text": "交互カラム背景色", "toggle": true },
                                        { "value": "tableFilterButton", "text": "フィルターボタン", "toggle": true }
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
                            "tooltip": "テーブルスタイル",
                            "items": [
                                {
                                    "type": "icon-group",
                                    "iconClass": "glyphicon glyphicon-th",
                                    "name": "tableStyles",
                                    "text": "テーブルスタイル",
                                    "header": "テーブルスタイル",
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
            "title": "チャート",
            "hidden": false,
            "name": "chart",
            "groups": [
                {
                    "tools": [
                        {
                            "type": "group",
                            "tooltip": "タイプ",
                            "collapseGroup": "groupInsert",
                            "items": [
                                {
                                    "type": "dropdown-only",
                                    "iconClass": "chartIconBase ChartInsert icon-text",
                                    "name": "typeChart",
                                    "haslabel": true,
                                    "text": "タイプ",
                                    "dropdown": [
                                        {
                                            "value": "column2", "text": "縦棒チャート", "findCss": "Column Chart Type Changed", "iconClass": "chartIcon ColumnChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "columnChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "縦棒チャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "columnClustered", "text": "集合縦棒", "iconClass": "chartIconBase clustered-column-icon" },
                                                        { "value": "columnStacked", "text": "積み上げ集合縦棒", "iconClass": "chartIconBase stacked-column-icon" },
                                                        { "value": "columnStacked100", "text": "100%積み上げ縦棒", "iconClass": "chartIconBase stacked100-column-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "line2", "text": "折れ線チャート", "findCss": "Line Chart Type Changed", "iconClass": "chartIcon LineChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "lineChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "折れ線チャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "line", "text": "折れ線", "iconClass": "chartIconBase line-icon" },
                                                        { "value": "lineStacked", "text": "積み上げ折れ線", "iconClass": "chartIconBase stacked-line-icon" },
                                                        { "value": "lineStacked100", "text": "100%積み上げ折れ線", "iconClass": "chartIconBase stacked100-line-icon" },
                                                        { "value": "lineMarkers", "text": "マーカー付き折れ線", "iconClass": "chartIconBase line-markers-icon" },
                                                        { "value": "lineMarkersStacked", "text": "マーカー付き積み上げ折れ線", "iconClass": "chartIconBase stacked-line-markers-icon" },
                                                        { "value": "lineMarkersStacked100", "text": "マーカー付き100%積み上げ折れ線", "iconClass": "chartIconBase stacked100-line-markers-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "pie2", "text": "円チャート", "findCss": "Pie Chart Type Changed", "iconClass": "chartIcon PieChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "pieChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "円チャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "pie", "text": "円", "iconClass": "chartIconBase pie-icon" },
                                                        { "value": "doughnut", "text": "ドーナツ", "iconClass": "chartIconBase doughnut-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "bar2", "text": "横棒チャート", "findCss": "Bar Chart Type Changed", "iconClass": "chartIcon BarChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "barChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "横棒チャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "barClustered", "text": "集合横棒", "iconClass": "chartIconBase clustered-bar-icon" },
                                                        { "value": "barStacked", "text": "積み上げ横棒", "iconClass": "chartIconBase stacked-bar-icon" },
                                                        { "value": "barStacked100", "text": "100%積み上げ横棒", "iconClass": "chartIconBase stacked100-bar-icon" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": "area2", "text": "面グラフチャート", "findCss": "Area Chart Type Changed", "iconClass": "chartIcon AreaChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "areaChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "面グラフチャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "area", "text": "面グラフ", "iconClass": "chartIconBase area-icon" },
                                                        { "value": "areaStacked", "text": "積み上げ面", "iconClass": "chartIconBase stacked-area-icon" },
                                                        { "value": "areaStacked100", "text": "100%積み上げ面", "iconClass": "chartIconBase stacked100-area-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "xyScatter2", "text": "XY(散布)チャート", "findCss": "xyScatter Chart Type Changed", "iconClass": "chartIcon XyScatterChart", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "xyScatterChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "XY散布チャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "xyScatter", "text": "XY(散布)", "iconClass": "chartIconBase XYScatter-icon" },
                                                        { "value": "xyScatterLines", "text": "XY(散布)線とマーカー", "iconClass": "chartIconBase XYScatter-line-icon" },
                                                        { "value": "xyScatterLinesNoMarkers", "text": "XY(散布)マーカーなし線", "iconClass": "chartIconBase XYScatter-line-noMarkers-icon" },
                                                        { "value": "xyScatterSmooth", "text": "xy(散布)平滑線", "iconClass": "chartIconBase XYScatter-smooth-icon" },
                                                        { "value": "xyScatterSmoothNoMarkers", "text": "XY(散布)マーカーなし平滑線", "iconClass": "chartIconBase XYScatter-smooth-noMarkers-icon" },
                                                        { "value": "bubble", "text": "バブル", "iconClass": "chartIconBase bubble-icon" }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            "value": "radar2", "text": "レーダーチャート", "findCss": "Radar Chart Type Changed", "iconClass": "radarChartContainer ", "childrenList": [
                                                {
                                                    "type": "dropdown-only",
                                                    "name": "radarChartTypeChanged",
                                                    "haslabel": true,
                                                    "text": "レーダーチャートタイプ変更",
                                                    "dropdown": [
                                                        { "value": "radar", "text": "レーダー", "iconClass": "radar-icon" },
                                                        { "value": "radarFilled", "text": "塗りつぶしレーダー", "iconClass": "radarFilled-icon" },
                                                        { "value": "radarMarkers", "text": "マーカー付きレーダー", "iconClass": "radarMarkers-icon" },
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
                            "tooltip": "クイックレイアウト",
                            "items": [
                                {
                                    "type": "dropdown-quickLayout",
                                    "iconClass": "icon-chart-base-middle icon-chart-quick-layout icon-text",
                                    "name": "chartQuickLayout",
                                    "text": "クイックレイアウト",
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
                            "tooltip": "要素を追加",
                            "items": [
                                {
                                    "type": "dropdown-addChartElement",
                                    "iconClass": "icon-chart-base-middle icon-chart-add-element icon-text",
                                    "name": "addChartElement",
                                    "text": "要素",
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
                            "tooltip": "カラー",
                            "items": [
                                {
                                    "type": "dropdown-colorTemplate",
                                    "iconClass": "icon-chart-base-middle icon-chart-change-color icon-text",
                                    "name": "chart-color",
                                    "text": "カラー",
                                    "haslabel": true,
                                    "chartColors": {
                                        "colorful": {
                                            "name": 'カラフル', "colors": [
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
                                            "name": 'モノクロマチック', "colors": [
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
                            "text": "行/カラムを入替",
                        },
                    ]
                },
            ]
        },
        {
            "title": "図形",
            "hidden": true,
            "name": "shape",
            "groups": [{
                "tools": [{
                    "type": "shape-color-preset",
                    "name": "shapeColorPreset",
                    "type": "shapeColorPreset",
                    "text": "図形をグループ化",
                    "items": [{
                        "type": "icon-group",
                        "value": "rgb(68, 114, 194)",
                        "text": "青"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 215, 0)",
                        "text": "ゴールド"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(163, 163, 163)",
                        "text": "グレー"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(113, 171, 72)",
                        "text": "緑"
                    }, {
                        "type": "icon-group",
                        "value": "rgb(255, 165, 0)",
                        "text": "オレンジ"
                    }]
                }, {
                    "type": "group",
                    "tooltip": "図形カラー設定",
                    "items": [{
                        "type": "setcolor-group",
                        "iconClass": "sprite FillBackColorSplitDropdown",
                        "name": "shapeFillColor",
                        "text": "塗りカラー",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "塗りつぶしなし", "color": "white" }, "header": "塗りつぶしカラー" }
                    }, {
                        "type": "setcolor-group",
                        "iconClass": "glyphicon glyphicon-pencil",
                        "name": "shapeOutlineColor",
                        "text": "塗りカラー",
                        "colorPickerOptions": { "nofill": { "show": false, "text": "塗りつぶしなし", "color": "white" }, "header": "枠線カラー" }
                    }, {
                        "type": "dropdown-only",
                        "iconClass": "glyphicon glyphicon-minus icon-text",
                        "name": "shapeLineStyle",
                        "haslabel": true,
                        "text": "線スタイル",
                        "header": "線スタイル",
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
                    "text": "図形をグループ化",
                }]
            }]
        }
    ]
};
