var uiResource = {
    toolBar: {
        zoom: {
            title: "ズーム",
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
            title: "クリア",
            clearActions: {
                clearAll: "すべてクリア",
                clearFormat: "書式をクリア"
            }
        },
        showInspector: "インスペクターを表示",
        hideInspector: "インスペクターを非表示",
        importJson: "JSONを読み込む",
        exportJson: "JSONを書き出す",
        importViewPro: "4D View Proを読み込む",
        exportViewPro: "4D View Proを書き出す",
        insertTable: "テーブルを挿入",
        insertPicture: "ピクチャを挿入",
        insertComment: "コメントを挿入",
        insertSparkline: "スパークラインを挿入",
        insertSlicer: "スライサーを挿入"
    },
    tabs: {
        spread: "スプレッド",
        sheet: "シート",
        cell: "セル",
        table: "テーブル",
        data: "データ",
        comment: "コメント",
        picture: "ピクチャー",
        sparklineEx: "スパークライン",
        barCodeEx: "バーコード",
        slicer: "スライサー",
        chart: "チャート"
    },
    spreadTab: {
        general: {
            title: "一般",
            allowDragDrop: "ドラッグアンドドロップを許可",
            allowDragFill: "ドラッグとフィル入力を許可",
            allowZoom: "ズームを許可",
            allowOverflow: "オーバーフローを許可",
            showDragFillSmartTag: "ドラッグフィルのスマートタグを表示",
            allowUserDeselect: "ユーザーの選択解除を許可"
        },
        calculation: {
            title: "計算",
            referenceStyle: {
                title: "参照スタイル",
                R1C1: "R1C1",
                A1: "A1"
            }
        },
        scrollBar: {
            title: "スクロールバー",
            showVertical: "垂直スクロールバー",
            showHorizontal: "水平スクロールバー",
            maxAlign: "スクロールバーを最大に揃える",
            showMax: "スクロールバーの最大を表示",
            scrollIgnoreHidden: "スクロール時に非表示の行とカラムを無視"
        },
        tabStip: {
            title: "シートタブ",
            visible: "シートタブ表示",
            newTabVisible: "新規シートボタン表示",
            editable: "シートタブ編集可",
            showTabNavigation: "タブナビゲーションを表示"
        },
        color: {
            title: "カラー",
            spreadBackcolor: "スプレッド背景色",
            grayAreaBackcolor: "グレーエリア背景色"
        },
        tip: {
            title: "Tip",
            showDragDropTip: "ドラッグドロップのTipを表示",
            showDragFillTip: "ドラッグフィルのTipeを表示",
            scrollTip: {
                title: "スクロールTip",
                values: {
                    none: "なし",
                    horizontal: "横方向",
                    vertical: "縦方向",
                    both: "両方"
                }
            },
            resizeTip: {
                title: "リサイズTip",
                values: {
                    none: "なし",
                    column: "カラム",
                    row: "行",
                    both: "両方"
                }
            }
        },
        sheets: {
            title: "シート",
            sheetName: "シート名",
            sheetVisible: "シートを表示"
        },
        cutCopyIndicator: {
            title: "カット / コピーインジケーター",
            visible: "インジケーターを表示",
            borderColor: "境界線カラー"
        },
        dragDropFill: {
            title: "ドラッグドロップ/ ドラッグフィル",
            canUserDragDrop: "ユーザーがドラッグドロップ可能か",
            canUserDragFill: "ユーザーがドラッグフィル可能か",
            showDragFillSmartTag: "ドラッグフィルのスマートタグを表示",
            dragFillType: {
                title: "デフォルトのドラッグフィルタイプ",
                values: {
                    auto: "自動",
                    copyCells: "セルをコピー",
                    fillSeries: "系列をフィル",
                    fillFormattingOnly: "書式のみをフィル",
                    fillWithoutFormatting: "書式以外をフォーマット"
                }
            }
        },
        spreadTheme: {
            title: "スプレッドテーマ",
            theme: {
                title: "テーマ",
                option: {
                    spreadJS: "SpreadJS",
                    excel2013White: "Excel2013 ホワイト",
                    excel2013LightGray: "Excel2013 ライトグレー",
                    excel2013DarkGray: "Excel2013 ダークグレー",
                    excel2016Colorful: "Excel2016 カラフル",
                    excel2016DarkGray: "Excel2016 ダークグレー"
                }
            }
        },
        resizeZeroIndicator: {
            title: "ゼロインジケーターをリサイズ",
            option: {
                defaultValue: "デフォルト",
                enhanced: "エンハンス"
            }
        }
    },
    sheetTab: {
        general: {
            title: "一般",
            rowCount: "行",
            columnCount: "カラム",
            name: "名前",
            tabColor: "タブカラー"
        },
        freeze: {
            title: "固定する",
            frozenRowCount: "ヘッダー行",
            frozenColumnCount: "ヘッダーカラム",
            trailingFrozenRowCount: "フッター行",
            trailingFrozenColumnCount: "フッターカラム",
            frozenLineColor: "カラー",
            freezePane: "固定する",
            unfreeze: "固定解除"
        },
        gridLine: {
            title: "枠線",
            showVertical: "縦方向枠線を表示",
            showHorizontal: "横方向枠線を表示",
            color: "カラー"
        },
        header: {
            title: "ヘッダー",
            showRowHeader: "行ヘッダー表示",
            showColumnHeader: "カラムヘッダー表示"
        },
        selection: {
            title: "選択範囲",
            borderColor: "境界線カラー",
            backColor: "背景色",
            hide: "選択範囲を非表示",
            policy: {
                title: "選択ルール",
                values: {
                    single: "単一セル",
                    range: "レンジ",
                    multiRange: "複数レンジ"
                }
            },
            unit: {
                title: "単位",
                values: {
                    cell: "セル",
                    row: "行",
                    column: "カラム"
                }
            }
        },
        protection: {
            title: "保護",
            protectSheet: "シートを保護",
            selectLockCells: "ロックされたセルを選択",
            selectUnlockedCells: "ロック解除されたセルを選択",
            sort: "並べ替え",
            useAutoFilter: "自動フィルターを使用",
            resizeRows: "行をリサイズ",
            resizeColumns: "カラムをリサイズ",
            editObjects: "オブジェクトを編集"
        }
    },
    cellTab: {
        style: {
            title: "書式設定",
            fontFamily: "フォント",
            fontSize: "サイズ",
            foreColor: "文字色",
            backColor: "背景色",
            borders: {
                title: "罫線",
                values: {
                    bottom: "下罫線",
                    top: "上罫線",
                    left: "左罫線",
                    right: "右罫線",
                    none: "罫線なし",
                    all: "格子",
                    outside: "外枠",
                    thick: "外枠太罫線",
                    doubleBottom: "下二重罫線",
                    thickBottom: "下太罫線",
                    topBottom: "上罫線+下罫線",
                    topThickBottom: "上罫線+下太罫線",
                    topDoubleBottom: "上罫線+下二重罫線"
                }
            }
        },
        border: {
            title: "罫線",
            label: "罫線",
            rangeBorderLine: "線スタイル",
            rangeBorderColor: "線カラー",
            noBorder: "なし",
            outsideBorder: "外枠",
            insideBorder: "内枠",
            allBorder: "格子",
            leftBorder: "左罫線",
            innerVertical: "内側縦罫線",
            rightBorder: "右罫線",
            topBorder: "上罫線",
            innerHorizontal: "内側横罫線",
            bottomBorder: "下罫線"
        },
        alignment: {
            title: "揃え",
            top: "上",
            middle: "中央",
            bottom: "下",
            left: "左",
            center: "中央",
            right: "右",
            wrapText: "テキストを折り返す",
            decreaseIndent: "インデント減少",
            increaseIndent: "インデント増加"
        },
        format: {
            title: "フォーマット",
            commonFormat: {
                option: {
                    general: "標準",
                    number: "数値",
                    currency: "通貨",
                    accounting: "会計",
                    shortDate: "短い日付",
                    longDate: "長い日付",
                    time: "時間",
                    percentage: "パーセンテージ",
                    fraction: "分数",
                    scientific: "指数",
                    text: "文字列"
                }
            },
            percentValue: "0%",
            commaValue: "#,##0.00; (#,##0.00); \"-\"??;@",
            custom: "ユーザー定義",
            setButton: "設定"
        },
        merge: {
            title: "セルの結合",
            mergeCells: "結合する",
            unmergeCells: "結合解除"
        },
        cellType: {
            title: "セルタイプ"
        },
        conditionalFormat: {
            title: "条件付き書式",
            useConditionalFormats: "条件付き書式"
        },
        protection: {
            title: "保護",
            lock: "ロック済み",
            sheetIsProtected: "シートは保護されています",
            sheetIsUnprotected: "シートは保護されていません"
        }
    },
    tableTab: {
        tableStyle: {
            title: "テーブルスタイル",
            groupTitle: {
                light: "ライト",
                medium: "ミディアム",
                dark: "ダーク"
            },
            light: {
                none: "なし",
                light1: "テーブルスタイル ライト 1",
                light2: "テーブルスタイル ライト 2",
                light3: "テーブルスタイル ライト 3",
                light4: "テーブルスタイル ライト 4",
                light5: "テーブルスタイル ライト 5",
                light6: "テーブルスタイル ライト 6",
                light7: "テーブルスタイル ライト 7",
                light8: "テーブルスタイル ライト 8",
                light9: "テーブルスタイル ライト 9",
                light10: "テーブルスタイル ライト 10",
                light11: "テーブルスタイル ライト 11",
                light12: "テーブルスタイル ライト 12",
                light13: "テーブルスタイル ライト 13",
                light14: "テーブルスタイル ライト 14",
                light15: "テーブルスタイル ライト 15",
                light16: "テーブルスタイル ライト 16",
                light17: "テーブルスタイル ライト 17",
                light18: "テーブルスタイル ライト 18",
                light19: "テーブルスタイル ライト 19",
                light20: "テーブルスタイル ライト 20",
                light21: "テーブルスタイル ライト 21"
            },
            medium: {
                medium1: "テーブルスタイル ミディアム 1",
                medium2: "テーブルスタイル ミディアム 2",
                medium3: "テーブルスタイル ミディアム 3",
                medium4: "テーブルスタイル ミディアム 4",
                medium5: "テーブルスタイル ミディアム 5",
                medium6: "テーブルスタイル ミディアム 6",
                medium7: "テーブルスタイル ミディアム 7",
                medium8: "テーブルスタイル ミディアム 8",
                medium9: "テーブルスタイル ミディアム 9",
                medium10: "テーブルスタイル ミディアム 10",
                medium11: "テーブルスタイル ミディアム 11",
                medium12: "テーブルスタイル ミディアム 12",
                medium13: "テーブルスタイル ミディアム 13",
                medium14: "テーブルスタイル ミディアム 14",
                medium15: "テーブルスタイル ミディアム 15",
                medium16: "テーブルスタイル ミディアム 16",
                medium17: "テーブルスタイル ミディアム 17",
                medium18: "テーブルスタイル ミディアム 18",
                medium19: "テーブルスタイル ミディアム 19",
                medium20: "テーブルスタイル ミディアム 20",
                medium21: "テーブルスタイル ミディアム 21",
                medium22: "テーブルスタイル ミディアム 22",
                medium23: "テーブルスタイル ミディアム 23",
                medium24: "テーブルスタイル ミディアム 24",
                medium25: "テーブルスタイル ミディアム 25",
                medium26: "テーブルスタイル ミディアム 26",
                medium27: "テーブルスタイル ミディアム 27",
                medium28: "テーブルスタイル ミディアム 28"
            },
            dark: {
                dark1: "テーブルスタイル ダーク 1",
                dark2: "テーブルスタイル ダーク 2",
                dark3: "テーブルスタイル ダーク 3",
                dark4: "テーブルスタイル ダーク 4",
                dark5: "テーブルスタイル ダーク 5",
                dark6: "テーブルスタイル ダーク 6",
                dark7: "テーブルスタイル ダーク 7",
                dark8: "テーブルスタイル ダーク 8",
                dark9: "テーブルスタイル ダーク 9",
                dark10: "テーブルスタイル ダーク 10",
                dark11: "テーブルスタイル ダーク 11"
            }
        },
        general: {
            title: "一般",
            tableName: "名前"
        },
        options: {
            title: "オプション",
            filterButton: "フィルターボタン",
            headerRow: "ヘッダー行",
            totalRow: "総計行",
            bandedRows: "交互行",
            bandedColumns: "交互カラム",
            firstColumn: "最初のカラム",
            lastColumn: "最後のカラム"
        }
    },
    dataTab: {
        sort: {
            title: "並べ替え & フィルター",
            asc: "昇順に並べ替え(A-Z)",
            desc: "降順に並べ替え(Z-A)",
            filter: "フィルター"
        },
        group: {
            title: "グループ",
            group: "グループ化",
            ungroup: "グループ解除",
            showDetail: "詳細行を表示",
            hideDetail: "詳細行を非表示",
            showRowRangeGroup: "行レンジグループを表示",
            showColumnRangeGroup: "カラムレンジグループを表示"
        },
        dataValidation: {
            title: "データの入力規則",
            setButton: "設定",
            clearAllButton: "全てクリア",
            circleInvalidData: "無効なデータに丸をつける",
            setting: {
                title: "設定",
                values: {
                    validatorType: {
                        title: "入力規則タイプ",
                        option: {
                            anyValue: "すべての値",
                            number: "数値",
                            list: "リスト",
                            formulaList: "フォーミュラリスト",
                            date: "日付",
                            textLength: "テキストの長さ",
                            custom: "ユーザー定義"
                        }
                    },
                    ignoreBlank: "空白を無視する",
                    validatorComparisonOperator: {
                        title: "演算子",
                        option: {
                            between: "次の値の間",
                            notBetween: "次の値の間にない",
                            equalTo: "次の値に等しい",
                            notEqualTo: "次の値に等しくない",
                            greaterThan: ">",
                            lessThan: "<",
                            greaterThanOrEqualTo: ">=",
                            lessThanOrEqualTo: "<="
                        }
                    },
                    number: {
                        minimum: "最小値",
                        maximum: "最大値",
                        value: "値",
                        isInteger: "整数である"
                    },
                    source: "ソース",
                    date: {
                        startDate: "開始日付",
                        endDate: "終了日付",
                        value: "値",
                        isTime: "時間である"
                    },
                    formula: "Formula"
                }
            },
            inputMessage: {
                title: "入力時メッセージ",
                values: {
                    showInputMessage: "セルが選択された時に表示",
                    title: "タイトル",
                    message: "メッセージ"
                }
            },
            errorAlert: {
                title: "エラーメッセージ",
                values: {
                    showErrorAlert: "無効なデータが入力された後に表示",
                    alertType: {
                        title: "警告タイプ",
                        option: {
                            stop: "停止",
                            warning: "注意",
                            information: "情報"
                        }
                    },
                    title: "タイトル",
                    message: "メッセージ"
                }
            }
        }
    },
    commentTab: {
        general: {
            title: "一般",
            dynamicSize: "ダイナミックサイズ",
            dynamicMove: "ダイナミック移動",
            lockText: "テキストをロック",
            showShadow: "影を表示"
        },
        font: {
            title: "フォント",
            fontFamily: "フォント",
            fontSize: "サイズ",
            fontStyle: {
                title: "スタイル",
                values: {
                    normal: "通常",
                    italic: "イタリック",
                    oblique: "斜字体",
                    inherit: "継承"
                }
            },
            fontWeight: {
                title: "ウェイト",
                values: {
                    normal: "normal",
                    bold: "bold",
                    bolder: "bolder",
                    lighter: "lighter"
                }
            },
            textDecoration: {
                title: "装飾",
                values: {
                    none: "なし",
                    underline: "下線付き",
                    overline: "上線付き",
                    linethrough: "打ち消し線"
                }
            }
        },
        border: {
            title: "境界線",
            width: "幅",
            style: {
                title: "スタイル",
                values: {
                    none: "なし",
                    hidden: "非表示",
                    dotted: "点線",
                    dashed: "破線",
                    solid: "実線",
                    double: "二重線",
                    groove: "溝線",
                    ridge: "浮き上がり線",
                    inset: "くぼみ",
                    outset: "浮き上がり"
                }
            },
            color: "カラー"
        },
        appearance: {
            title: "表示",
            horizontalAlign: {
                title: "横方向揃え",
                values: {
                    left: "左",
                    center: "中央",
                    right: "右",
                    general: "一般"
                }
            },
            displayMode: {
                title: "表示モード",
                values: {
                    alwaysShown: "常に表示",
                    hoverShown: "ホバー時表示"
                }
            },
            foreColor: "文字色",
            backColor: "背景色",
            padding: "パッディング",
            zIndex: "Zインデックス",
            opacity: "透明度"
        }
    },
    pictureTab: {
        general: {
            title: "一般",
            moveAndSize: "セルとともに移動しリサイズする",
            moveAndNoSize: "移動はするがセルでリサイズしない",
            noMoveAndSize: "セルの移動とサイズを無視する",
            fixedPosition: "固定位置"
        },
        border: {
            title: "境界線",
            width: "幅",
            radius: "半径",
            style: {
                title: "スタイル",
                values: {
                    solid: "実線",
                    dotted: "点線",
                    dashed: "破線",
                    double: "二重線",
                    groove: "溝線",
                    ridge: "浮き上がり線",
                    inset: "くぼみ",
                    outset: "浮き上がり"
                }
            },
            color: "カラー"
        },
        appearance: {
            title: "表示",
            stretch: {
                title: "拡大縮小",
                values: {
                    stretch: "拡大縮小する",
                    center: "中央に配置",
                    zoom: "ズームする",
                    none: "なし"
                }
            },
            backColor: "背景色"
        }
    },
    sparklineExTab: {
        pieSparkline: {
            title: "円グラフスパークライン設定",
            values: {
                percentage: "表示する値",
                color: "カラー ",
                setButton: "適用"
            }
        },
        areaSparkline: {
            title: "面スパークライン設定",
            values: {
                line1: "線 1",
                line2: "線 2",
                minimumValue: "最小値",
                maximumValue: "最大値",
                points: "点",
                positiveColor: "正の値のカラー",
                negativeColor: "負の値のカラー",
                setButton: "適用"
            }
        },
        boxplotSparkline: {
            title: "ボックスプロットスパークライン設定",
            values: {
                points: "値",
                boxplotClass: "ボックスプロット",
                scaleStart: "値の下限",
                scaleEnd: "値の上限",
                acceptableStart: "許容範囲開始",
                acceptableEnd: "許容範囲終了",
                colorScheme: "カラースキーム",
                style: "スタイル",
                showAverage: "平均を表示",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        bulletSparkline: {
            title: "ブレットスパークライン設定",
            values: {
                measure: "バーの値",
                target: "目標値",
                maxi: "最大値",
                forecast: "予測線",
                good: "良い",
                bad: "悪い",
                tickunit: "目盛単位",
                colorScheme: "カラースキーム",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        cascadeSparkline: {
            title: "カスケードスパークライン設定",
            values: {
                pointsRange: "値のレンジ",
                pointIndex: "値のインデックス",
                minimum: "最小値",
                maximum: "最大値",
                positiveColor: "正の値のカラー",
                negativeColor: "負の値のカラー",
                labelsRange: "ラベルレンジ",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        compatibleSparkline: {
            title: "コンパティブルスパークライン設定",
            values: {
                data: {
                    title: "データ",
                    dataOrientation: "データ方向",
                    dateAxisData: "日付軸データ",
                    dateAxisOrientation: "日付軸方向",
                    displayEmptyCellAs: "からのセルの表示設定",
                    showDataInHiddenRowOrColumn: "非表示の行とカラムのデータを表示"
                },
                show: {
                    title: "表示する",
                    showFirst: "最初を表示",
                    showLast: "最後を表示",
                    showHigh: "最高点を表示",
                    showLow: "最低点を表示",
                    showNegative: "負の値を表示",
                    showMarkers: "マーカーを表示"
                },
                group: {
                    title: "グループ",
                    minAxisType: "最小軸タイプ",
                    maxAxisType: "最大軸タイプ",
                    manualMin: "手動最小値",
                    manualMax: "手動最大値",
                    rightToLeft: "RightToLeft",
                    displayXAxis: "X軸を表示"
                },
                style: {
                    title: "スタイル",
                    negative: "負の値",
                    markers: "マーカー",
                    axis: "軸",
                    series: "系列",
                    highMarker: "最高点マーカー",
                    lowMarker: "最低点マーカー",
                    firstMarker: "最初のマーカー",
                    lastMarker: "最後のマーカー",
                    lineWeight: "線の幅"
                },
                setButton: "適用"
            }
        },
        hbarSparkline: {
            title: "水平バースパークライン設定",
            values: {
                value: "値",
                colorScheme: "カラースキーム",
                setButton: "適用"
            }
        },
        vbarSparkline: {
            title: "垂直バースパークライン設定",
            values: {
                value: "値",
                colorScheme: "カラースキーム",
                setButton: "適用"
            }
        },
        paretoSparkline: {
            title: "パレートスパークライン設定",
            values: {
                points: "値のレンジ",
                pointIndex: "値のインデックス",
                colorRange: "カラーレンジ",
                highlightPosition: "強調する位置",
                target: "目標線",
                target2: "第2目標線",
                label: "ラベル",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        scatterSparkline: {
            title: "散布図スパークライン設定",
            values: {
                points1: "点1",
                points2: "点2",
                minX: "最小X",
                maxX: "最大X",
                minY: "最小Y",
                maxY: "最大Y",
                hLine: "水平線",
                vLine: "垂直線",
                xMinZone: "最小Xゾーン",
                xMaxZone: "最大Xゾーン",
                yMinZone: "最小Yゾーン",
                yMaxZone: "最大Yゾーン",
                color1: "カラー 1",
                color2: "カラー 2",
                tags: "タグ",
                drawSymbol: "シンボルを描写",
                drawLines: "線を描写",
                dashLine: "破線",
                setButton: "適用"
            }
        },
        spreadSparkline: {
            title: "スプレッドスパークライン設定",
            values: {
                points: "値の範囲",
                scaleStart: "値の下限",
                scaleEnd: "値の上限",
                style: "スタイル",
                colorScheme: "カラースキーム",
                showAverage: "平均を表示",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        stackedSparkline: {
            title: "積み上げスパークライン設定",
            values: {
                points: "値の範囲",
                colorRange: "カラーレンジ",
                labelRange: "ラベルレンジ",
                maximum: "最大値",
                targetRed: "赤線の位置",
                targetGreen: "緑線の位置",
                targetBlue: "青線の位置",
                targetYellow: "黄線の位置",
                color: "カラー",
                highlightPosition: "ハイライト位置",
                textOrientation: "テキストの方向",
                textSize: "テキストサイズ",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        variSparkline: {
            title: "バリスパークライン設定",
            values: {
                variance: "バーの長さ",
                reference: "参照線",
                mini: "最小値",
                maxi: "最大値",
                mark: "マーク",
                tickunit: "目盛単位",
                colorPositive: "正の値のカラー",
                colorNegative: "負の値のカラー",
                legend: "凡例テキスト",
                vertical: "縦方向にする",
                setButton: "適用"
            }
        },
        orientation: {
            vertical: "縦方向",
            horizontal: "横方向"
        },
        axisType: {
            individual: "個別",
            group: "グループ",
            custom: "ユーザー定義"
        },
        emptyCellDisplayType: {
            gaps: "間隔",
            zero: "ゼロ値",
            connect: "データポイントを線でつなげる"
        },
        boxplotClass: {
            fiveNS: "5NS",
            sevenNS: "7NS",
            tukey: "ターキー",
            bowley: "ボウリー",
            sigma: "Sigma3"
        },
        boxplotStyle: {
            classical: "クラシック",
            neo: "ネオ"
        },
        paretoLabel: {
            none: "なし",
            single: "単一パーセンテージ",
            cumulated: "累積パーセンテージ"
        },
        spreadStyle: {
            stacked: "スタック",
            spread: "スプレッド",
            jitter: "ジッター",
            poles: "ポール",
            stackedDots: "スタックドット",
            stripe: "ストライプ"
        },
        setButton: "適用"
    },
    barCodeTab: {
        qrCode: {
            title: "QRコード設定",
            values: {
                data: "データ",
                color: "カラー",
                backgroundColor: "背景色",
                errorCorrectionLevel: "エラー補正レベル",
                model: "モデル",
                version: "バージョン",
                mask: "マスク",
                connection: "接続",
                connectionNo: "接続ナンバー",
                charCode: "文字コード",
                charset: "文字セット"
            }
        },
        ean8: {
            title: "EAN8設定"
        },
        ean13: {
            title: "EAN13設定",
            values: {
                addOn: "テキストを追加",
                addOnLabelPosition: "追加テキストの位置"
            }
        },
        gs1128: {
            title: "GS1_128設定"
        },
        codabar: {
            title: "Codabar設定",
            values: {
                checkDigit: "桁をチェック",
                nwRatio: "バーの大小の比率"
            }
        },
        pdf417:{
            title: "PDF417設定",
            values: {
                errorCorrectionLevel: "エラー補正レベル",
                rows: "行",
                columns: "カラム",
                compact: "コンパクト"
            }
        },
        dataMatrix:{
            title: "DataMatrix設定",
            values: {
                eccMode: "Eccモード",
                ecc200SymbolSize: "Ecc200 シンボルサイズ",
                ecc200EndcodingMode: "Ecc200 エンコードモード",
                ecc00_140Symbole: "Ecc000_140 シンボルサイズ",
                structureAppend: "ストラクチャー追加",
                structureNumber: "ストラクチャー番号",
                fileIdentifier: "ファイル識別子"
            }
        },
        code39:{
            title: "Code39設定",
            values: {
                labelWithStartAndStopCharacter: "開始文字と終了文字をラベルに入れる",
                nwRatio: "バーの大小の比率",
                checkDigit: "桁をチェック",
                fullASCII: "フルASCII"
            }
        },
        code49:{
            title: "Code49設定",
            values: {
                grouping: "グルーピング",
                groupNo: "グループ番号"
            }
        },
        code93:{
            title: "Code93設定",
            values: {
                checkDigit: "桁をチェック",
                fullASCII: "フルASCII"
            }
        },
        code128:{
            title: "Code128設定",
            values: {
                codeSet: "コードセット"
            }
        },
        commonParams: {
            data: "データ",
            color: "カラー",
            backgroundColor: "背景色",
            showLabel: "ラベルを表示",
            labelPosition: "ラベル位置",
            fontFamily: "フォント",
            fontStyle: "フォントスタイル",
            fontWeight: "フォントウェイト",
            fontTextDecoration: "テキスト装飾",
            fontTextAlign: "テキスト並び",
            fontSize: "フォントサイズ",
            quietZoneLeft: "左マージン",
            quietZoneRight: "右マージン",
            quietZoneTop: "右マージン",
            quietZoneBottom: "下マージン",
            setButton: "適用"
        },
        labelPosition: {
            top: "上",
            bottom: "下"
        },
        addOnLabelPosition:{
            top: "上部",
            bottom: "下部"
        },
        horizontalAlign: {
            left: "左",
            center: "中央",
            right: "右",
            general: "一般"
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
            thirty: "30"
        },
        fontWeight: {
            normal: "標準",
            bold: "太字"
        },
        textDecoration: {
            none: "なし",
            underline: "下線付き",
            overline: "上線付き",
            linethrough: "打ち消し線"
        },
        setButton: "適用"
    },
    slicerTab: {
        slicerStyle: {
            title: "スライサースタイル",
            groupTitle: {
                light: "ライト",
                dark: "ダーク"
            },
            light: {
                light1: "スライサースタイル ライト 1",
                light2: "スライサースタイル ライト 2",
                light3: "スライサースタイル ライト 3",
                light4: "スライサースタイル ライト 4",
                light5: "スライサースタイル ライト 5",
                light6: "スライサースタイル ライト 6"
            },
            other: {
                other1: "スライサースタイル その他 1",
                other2: "スライサースタイル その他 2"
            },
            dark: {
                dark1: "スライサースタイル ダーク 1",
                dark2: "スライサースタイル ダーク 2",
                dark3: "スライサースタイル ダーク 3",
                dark4: "スライサースタイル ダーク 4",
                dark5: "スライサースタイル ダーク 5",
                dark6: "スライサースタイル ダーク 6"
            }
        },
        general: {
            title: "一般",
            name: "識別名",
            captionName: "キャプション",
            itemSorting: {
                title: "項目の並び",
                option: {
                    none: "なし",
                    ascending: "昇順",
                    descending: "降順"
                }
            },
            displayHeader: "ヘッダーを表示"
        },
        layout: {
            title: "レイアウト",
            columnNumber: "カラム数",
            buttonHeight: "ボタンの高さ",
            buttonWidth: "ボタンの幅"
        },
        property: {
            title: "プロパティ",
            moveAndSize: "セルとともに移動しリサイズする",
            moveAndNoSize: "移動はするがセルでリサイズしない",
            noMoveAndSize: "セルの移動とサイズを無視する",
            locked: "ロック"
        },
        filter: {
            title: "フィルター",
            hideItemsWithNoData: "データのない項目を非表示にする",
            markNoData: "データのない項目を視覚的に表示する",
            showNoDataLast: "データのない項目を最後にもってくる"
        }
    },
    colorPicker: {
        themeColors: "テーマカラー",
        standardColors: "標準のカラー",
        noFills: "塗りつぶしなし"
    },
    conditionalFormat: {
        setButton: "適用",
        ruleTypes: {
            title: "タイプ",
            highlightCells: {
                title: "セルの強調表示ルール",
                values: {
                    cellValue: "セルの値",
                    specificText: "特定のテキスト",
                    dateOccurring: "日付",
                    unique: "重複しない値",
                    duplicate: "重複した値"
                }
            },
            topBottom: {
                title: "上位/下位ルール",
                values: {
                    top10: "トップ10",
                    average: "平均"
                }
            },
            dataBars: {
                title: "データバー",
                labels: {
                    minimum: "最小値",
                    maximum: "最大値",
                    type: "タイプ",
                    value: "値",
                    appearance: "表示",
                    showBarOnly: "バーのみを表示",
                    useGradient: "グラデーションを使用",
                    showBorder: "境界線を表示",
                    barDirection: "バーの方向",
                    negativeFillColor: "負の値のカラー",
                    negativeBorderColor: "負の値の境界線",
                    axis: "軸",
                    axisPosition: "位置",
                    axisColor: "カラー"
                },
                valueTypes: {
                    number: "数値",
                    lowestValue: "最も低い値",
                    highestValue: "最も高い値",
                    percent: "パーセント",
                    percentile: "パーセンタイル",
                    automin: "自動最小",
                    automax: "自動最大",
                    formula: "フォーミュラ"
                },
                directions: {
                    leftToRight: "左から右へ",
                    rightToLeft: "右から左へ"
                },
                axisPositions: {
                    automatic: "自動",
                    cellMidPoint: "セルの中央",
                    none: "なし"
                }
            },
            colorScales: {
                title: "カラースケール",
                labels: {
                    minimum: "最小値",
                    midpoint: "中間値",
                    maximum: "最大値",
                    type: "タイプ",
                    value: "値",
                    color: "カラー"
                },
                values: {
                    twoColors: "2色スケール",
                    threeColors: "3色スケール"
                },
                valueTypes: {
                    number: "数値",
                    lowestValue: "最も低い値",
                    highestValue: "最も高い値",
                    percent: "パーセント",
                    percentile: "パーセンタイル",
                    formula: "フォーミュラ"
                }
            },
            iconSets: {
                title: "アイコンセット",
                labels: {
                    style: "スタイル",
                    showIconOnly: "アイコンのみを表示",
                    reverseIconOrder: "アイコンの順番を逆にする",

                },
                types: {
                    threeArrowsColored: "3色矢印",
                    threeArrowsGray: "3本矢印(グレー)",
                    threeTriangles: "3方向三角形",
                    threeStars: "星3つ",
                    threeFlags: "旗3つ",
                    threeTrafficLightsUnrimmed: "3色信号(フチなし)",
                    threeTrafficLightsRimmed: "3色信号(フチあり)",
                    threeSigns: "3記号",
                    threeSymbolsCircled: "3記号(丸つき)",
                    threeSymbolsUncircled: "3記号(丸なし)",
                    fourArrowsColored: "4色矢印",
                    fourArrowsGray: "4本矢印(グレー)",
                    fourRedToBlack: "赤と黒4つ",
                    fourRatings: "4レーティング",
                    fourTrafficLights: "4色信号",
                    fiveArrowsColored: "5色矢印",
                    fiveArrowsGray: "5本矢印(グレー)",
                    fiveRatings: "5レーティング",
                    fiveQuarters: "5分割",
                    fiveBoxes: "ボックス5つ"
                },
                valueTypes: {
                    number: "数値",
                    percent: "パーセント",
                    percentile: "パーセンタイル",
                    formula: "フォーミュラ"
                }
            },
            removeConditionalFormat: {
                title: "なし"
            }
        },
        operators: {
            cellValue: {
                types: {
                    equalsTo: "が次の値に等しい",
                    notEqualsTo: "が次の値に等しくない",
                    greaterThan: "が次の値より大きい",
                    greaterThanOrEqualsTo: "が次の値以上である",
                    lessThan: "が次の値より小さい",
                    lessThanOrEqualsTo: "が次の値以下である",
                    between: "が次の間である",
                    notBetween: "が次の間にない"
                }
            },
            specificText: {
                types: {
                    contains: "を含んでいる",
                    doesNotContain: "を含んでいない",
                    beginsWith: "で始まる",
                    endsWith: "で終わる"
                }
            },
            dateOccurring: {
                types: {
                    today: "今日",
                    yesterday: "昨日",
                    tomorrow: "明日",
                    last7Days: "過去7日間",
                    thisMonth: "今月",
                    lastMonth: "先月",
                    nextMonth: "来月",
                    thisWeek: "今週",
                    lastWeek: "先週",
                    nextWeek: "来週"
                }
            },
            top10: {
                types: {
                    top: "上位",
                    bottom: "下位"
                }
            },
            average: {
                types: {
                    above: "平均より大きい",
                    below: "平均より小さい",
                    equalOrAbove: "平均以上",
                    equalOrBelow: "平均以下",
                    above1StdDev: "平均より1標準偏差 上",
                    below1StdDev: "平均より1標準偏差 下",
                    above2StdDev: "平均より2標準偏差 上",
                    below2StdDev: "平均より2標準偏差 下",
                    above3StdDev: "平均より3標準偏差 上",
                    below3StdDev: "平均より3標準偏差 下"
                }
            }
        },
        texts: {
            cells: "以下の条件に合致するセルのみを書式設定します:",
            rankIn: "ランクに入る値のみを書式設定:",
            inRange: "選択された範囲内の値",
            values: "値が次のものを書式設定:",
            average: "選択された範囲の平均",
            allValuesBased: "全てのセルを値に基づいて書式設定:",
            all: "全てを書式設定:",
            and: "と",
            formatStyle: "スタイルを使用",
            showIconWithRules: "以下のルールに基づいてそれぞれのアイコンを表示:"
        },
        formatSetting: {
            formatUseBackColor: "背景色",
            formatUseForeColor: "文字色",
            formatUseBorder: "罫線"
        }
    },
    cellTypes: {
        title: "セルタイプ",
        buttonCellType: {
            title: "ボタン型セルタイプ",
            values: {
                marginTop: "上余白",
                marginRight: "右余白",
                marginBottom: "下余白",
                marginLeft: "左余白",
                text: "テキスト",
                backColor: "背景色"
            }
        },
        checkBoxCellType: {
            title: "チェックボックス型セルタイプ",
            values: {
                caption: "キャプション",
                textTrue: "True時",
                textIndeterminate: "中間時",
                textFalse: "False時",
                textAlign: {
                    title: "文字揃え",
                    values: {
                        top: "上",
                        bottom: "下",
                        left: "左",
                        right: "右"
                    }
                },
                isThreeState: "3ステートボタン"
            }
        },
        comboBoxCellType: {
            title: "コンボボックス型セルタイプ",
            values: {
                editorValueType: {
                    title: "値のタイプ",
                    values: {
                        text: "Text",
                        index: "Index",
                        value: "Value"
                    }
                },
                itemsText: "項目のテキスト",
                itemsValue: "項目の値"
            }
        },
        hyperlinkCellType: {
            title: "ハイパーリンク型セルタイプ",
            values: {
                linkColor: "リンクの色",
                visitedLinkColor: "表示済みリンク",
                text: "テキスト",
                linkToolTip: "Tipテキスト",
                address: "URL"
            }
        },
        clearCellType: {
            title: "なし"
        },
        setButton: "適用",
        insertButton: "挿入"
    },
    sparklineDialog: {
        title: "スパークライン挿入設定",
        detail: "スパークライン詳細設定",
        sparklineExType: {
            title: "タイプ",
            values: {
                line: "折れ線",
                column: "縦棒",
                winLoss: "勝敗",
                pie: "円グラフ",
                area: "面グラフ",
                scatter: "散布図",
                spread: "スプレッド",
                stacked: "スタック",
                bullet: "ブレット",
                hbar: "水平バー",
                vbar: "垂直バー",
                variance: "分散",
                boxplot: "ボックスプロット",
                cascade: "カスケード",
                pareto: "パレート"
            }
        },
        lineSparkline: {
            dataRange: "データ範囲",
            locationRange: "配置位置",
            dataRangeError: "データ範囲が無効です!",
            singleDataRange: "データ範囲は単一の行もしくはカラムである必要があります。",
            locationRangeError: "配置位置が無効です!"
        },
        bulletSparkline: {
            measure: "バーの値",
            target: "目標値",
            maxi: "最大値",
            forecast: "予測線",
            good: "良い",
            bad: "悪い",
            tickunit: "目盛単位",
            colorScheme: "カラースキーム",
            vertical: "縦方向にする"
        },
        hbarSparkline: {
            value: "値",
            colorScheme: "カラースキーム"
        },
        varianceSparkline: {
            variance: "バーの長さ",
            reference: "参照線",
            mini: "最小値",
            maxi: "最大値",
            mark: "マーク",
            tickunit: "目盛単位",
            colorPositive: "正の値のカラー",
            colorNegative: "負の値のカラー",
            legend: "凡例テキスト",
            vertical: "縦方向にする"
        }
    },
    barCodeDialog: {
        title: "バーコード設定",
        detail: "バーコード詳細設定",
        barCodeType: {
            title: "タイプ",
            values: {
                qrCode:"QRコード",
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
            dataRange: "データ範囲",
            locationRange: "配置位置",
            dataRangeError: "データ範囲が無効です!",
            singleDataRange: "データ範囲は単一の行もしくはカラムである必要があります",
            locationRangeError: "配置位置が無効です!",
            color: "カラー",
            backgroundColor: "背景色",
        },
        gs1_128:{
            showLabel: "ラベルを表示",
            labelPosition: "ラベル位置"
        },
        ean13:{
            addOn: "QRコードのテキストを追加",
            addOnLabelPosition: "ラベル追加位置"
        },
        codaBar:{
            checkDigit: "桁をチェック",
            nwRatio: "バーの大小の比率"
        },
        code39:{
            labelWithStartAndStopCharacter: "開始文字と終了文字をラベルに入れる",
            nwRatio: "バーの大小の比率",
        },
        code49:{
            grouping: "グルーピング",
            groupNo: "グループ番号"
        },
        code93:{
            checkDigit: "桁をチェック",
            fullASCII: "フルASCII"
        },
        code128:{
            codeSet: "コードセット"
        },
        pdf417:{
            errorCorrectionLevel: "エラー補正レベル",
            rows: "行",
            columns: "カラム",
            compact: "コンパクト"
        },
        dataMatrix:{
            eccMode: "Eccモード",
            ecc200SymbolSize: "Ecc200 シンボルサイズ",
            ecc200EndcodingMode: "Ecc200 エンコードモード",
            ecc00_140Symbole: "Ecc000_140 シンボルサイズ",
            structureAppend: "ストラクチャー追加",
            structureNumber: "ストラクチャー番号",
            fileIdentifier: "ファイル識別子"
        },
        qrCode:{
            errorCorrectionLevel: "エラー補正レベル",
            model: "モデル",
            version: "バージョン",
            mask: "マスク",
            connection: "接続",
            connectionNo: "接続ナンバー",
            charCode: "文字コード",
            charset: "文字セット"
        },
        setButton: "適用"
    },
    slicerDialog: {
        insertSlicer: "スライサーを挿入"
    },
    tooltips: {
        style: {
            fontBold: "テキストを太字にします",
            fontItalic: "テキストをイタリックにします",
            fontUnderline: "テキストに下線をつけます",
            fontDoubleUnderline: "テキストに二重下線をつけます",
            fontOverline: "テキストに上線をつけます",
            fontLinethrough: "テキストに打ち消し線をつけます"
        },
        alignment: {
            leftAlign: "テキストを左に揃えます",
            centerAlign: "テキストを中央揃えにします",
            rightAlign: "テキストを右揃えにします",
            topAlign: "テキストを上揃えにします",
            middleAlign: "テキストを中央揃えにします",
            bottomAlign: "テキストを下揃えにします",
            decreaseIndent: "インデントレベルを減らします",
            increaseIndent: "インデントレベルを増やします"
        },
        border: {
            outsideBorder: "外枠罫線",
            insideBorder: "内側罫線",
            allBorder: "格子罫線",
            leftBorder: "左罫線",
            innerVertical: "内側縦罫線",
            rightBorder: "右罫線",
            topBorder: "上罫線",
            innerHorizontal: "内側横罫線",
            bottomBorder: "下罫線",
            noBorder: "なし",
            diagonalUpLine: "右上対角線",
            diagonalDownLine: "右下対角線",
        },
        format: {
            percentStyle: "パーセント書式",
            commaStyle: "小数点書式",
            increaseDecimal: "小数点以下を増加",
            decreaseDecimal: "小数点以下を減少"
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
        invalidImportFile: "無効なファイルです、読み込めませんでした。",
        duplicatedSheetName: "シート名が重複しています。",
        duplicatedTableName: "テーブル名が重複しています。",
        rowColumnRangeRequired: "行またはカラムのレンジを選択してください。",
        imageFileRequired: "ファイルは画像タイプである必要があります。",
        duplicatedSlicerName: "スライサー名が重複しています。",
        invalidSlicerName: "無効なスライサー名です。"
    },
    contextMenu: {
        cutItem: "カット",
        copyItem: "コピー",
        pasteItem: "ペースト",
        insertItem: "挿入",
        deleteItem: "削除",
        mergeItem: "セル結合",
        unmergeItem: "結合解除"
    },
    dialog: {
        ok: "OK",
        cancel: "Cancel"
    },
    find: {
        title: "検索",
        options: "オプション",
        findwhat: "検索する値",
        within: { title: "検索範囲", worksheet: "シート", workbook: "ブック" },
        searchby: { title: "検索方向", rows: "行", columns: "カラム" },
        lookin: { title: "検索内容", values: "値", formulas: "フォーミュラ" },
        matchcase: "大文字小文字を区別",
        matchexactly: "完全一致で検索",
        usewildcards: "ワイルドカードを使用",
        findall: "全て検索",
        findnext: "次を検索",
        result: {
            header: {
                sheet: "シート",
                cell: "セル",
                value: "値",
                formula: "フォーミュラ"
            },
            countssuffix: " セルが見つかりました",
            nomatch: "スプレッドはお探しのデータを見つけることができませんでした。"
        }
    },
    printSetting: {
        printButton: "印刷",
        options: {
            title: "オプション",
            range: {
                title: "印刷範囲",
                items: {
                    activeSheet: "アクティブなシート",
                    workbook: "ワークブック全体"
                }
            },
            showBorder: "罫線を表示",
            showGridline: "グリッドラインを表示",
            headerAndFooter: {
                title: "ヘッダー / フッター",
                header: {
                    title: "ヘッダー",
                    items: [
                        { text: "(なし)" },
                        { value: { center: "Page &P" } },
                        { value: { right: "&A" } },
                        { value: { center: "Page &P", right: "&A" } }
                    ],
                    custom: "ユーザー定義のヘッダー"
                },
                footer: {
                    title: "フッター",
                    items: [
                        { text: "(なし)" },
                        { value: { center: "Page &P of &N" }  },
                        { value: { left: "&BConfidential&B", center: "&D", right: "Page &P" }}
                    ],
                    custom: "ユーザー定義のフッター"
                },
                custom: {
                  left: "セレクションを左並びにする",
                  center: "セレクションを中央並びにする",
                  right: "セレクションを右並びにする",
                  items: [
                      { text: "(なし)" },
                      { text: "ページ番号", value: "&P" },
                      { text: "総ページ", value: "&N" },
                      { text: "シート名", value: "&A" },
                      { text: "ワークブック名", value: "&F" },
                      { text: "カレントの日付", value: "&D" },
                      { text: "カレントの日付と時間", value: "&D &T"}
                    ],
                    insert: "挿入",
                    image: {
                        value: "&G",
                        emptylist: "(表示...)"
                    },
                    insertPicture: "ピクチャを挿入",
                    tooltips: {
                        insert: "セクションを選択して挿入ポイントを決定し、挿入する項目を選択して下さい。",
                        insertPicture: "セクションを選択して挿入ポイントを決定し、挿入したいアップロード済みの画像を選択してください。",
                        imageList: "ヘッダー/フッターとしてアップロードした画像を選んで選択してください。\n画像の推奨されるサイズは最大で200px x 200pxです。"
                    }
                },
                preview: "プレビュー"
            }

        }
    },
    fileMenu: {
      items: {
          new: "新規",
          save: "保存",
            password: "パスワード:",
            browse:"閲覧",
            close: "閉じる",
            filename:"ファイル名:",
          open: {
              title: "開く"
          },
          print: {
              title: "印刷"
          },
          settings: {
              title: "設定"
          }
      }
    },
    settingPane: {
      title: {
          comment: "コメント",
          slicer: "スライサー",
      }
    },
    functions: {
        setting: {
            defaultDescription: "関数を選択するとその詳細が表示されます。",
            filterPlaceHolder: "関数を検索"
        },
        categories: {
            datebase: {
                text: "データベース",
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
                text: "日付と時間",
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
                text: "エンジニアリング",
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
                text: "財務",
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
                text: "情報",
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
                text: "論理",
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
                text: "検索と参照",
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
                text: "数学と三角",
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
                text: "統計",
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
                text: "テキスト",
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
            axes:'軸',
            moreAxisOption:'軸オプション'
        },
        axisTitles:{
            axisTitles:'軸タイトル',
            moreAxisTitlesOption:'軸タイトルオプション'
        },
        chartTitle:{
            chartTitle:'チャートタイトル',
            moreChartTitleOption:'チャートタイトルオプション'
        },
        gridLines:{
            gridLines:'グリッド線',
            moreGridLinesOption:'グリッド線オプション'
        },
        dataLabels:{
            dataLabels:'データラベル',
            moreDataLabelsOption:'データラベルオプション'
        },
        legend:{
            legend:'凡例',
            moreLegendOption:'凡例オプション'
        },
        primaryHorizontal:'第1軸/横方向',
        primaryVertical:'第1軸/縦方向',
        secondaryHorizontal:'第2軸/横方向',
        secondaryVertical:'第2軸/縦方向',
        none:'なし',
        aboveChart:'チャート上部',
        primaryMajorHorizontal:'第1軸横方向主グリッド線',
        primaryMajorVertical:'第1軸縦方向主グリッド線',
        primaryMinorHorizontal:'第1軸横方向副グリッド線',
        primaryMinorVertical:'第1軸縦方向副グリッド線',
        secondaryMajorHorizontal:'第2軸横方向主グリッド線',
        secondaryMajorVertical:'第2軸縦方向主グリッド線',
        secondaryMinorHorizontal:'第2軸横方向副グリッド線',
        secondaryMinorVertical:'第2軸縦方向副グリッド線',
        center:'中央',
        insideEnd:'内側の終端',
        outsideEnd:'外側の終端',
        bestFit:'最適サイズ',
        above:'上',
        below:'下',
        show:'表示',
        right:'右',
        top:'上',
        left:'左',
        bottom:'下'
    },
    richTextDialog: {
        editRichText: "リッチテキストを編集",
        title:"リッチテキスト",
        font:"フォント",
        size:"サイズ",
        bold:"太字",
        italic:"イタリック",
        underline:"下線付き",
        strikethrough:"打ち消し線",
        colorPicker:"フォントカラー",
        superScript:"上付き文字",
        subScript:"下付き文字"
    },
    shape: {
        connector: '線',
        blockArrows: 'ブロック矢印',
        flowchart: 'フローチャート',
        callouts: '吹き出し',
        rectangles: '四角形',
        equationShapes:'数式図形',
        basicShapes: '基本図形',
        starsAndBanners: '星とリボン'
    }
};
