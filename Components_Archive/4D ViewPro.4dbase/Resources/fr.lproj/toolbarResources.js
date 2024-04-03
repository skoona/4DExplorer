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
            title: "Clear",
            clearActions: {
                clearAll: "Effacer tout",
                clearFormat: "Effacer format"
            }
        },
        showInspector: "Afficher l'inspecteur",
        hideInspector: "Cacher l'inspecteur",
        importJson: "Importer JSON",
        exportJson: "Exporter JSON",
        importViewPro: "Importer 4D View Pro",
        exportViewPro: "Exporter 4D View Pro",
        insertTable: "Insérer un tableau",
        insertPicture: "Insérer une image",
        insertComment: "Insérer un commentaire",
        insertSparkline: "Insérer un Sparkline",
        insertSlicer: "Insérer segment"
    },
    tabs: {
        spread: "Spread",
        sheet: "Feuille",
        cell: "Cellule",
        table: "Tableau",
        data: "Données",
        comment: "Commentaire",
        picture: "Image",
        sparklineEx: "Sparkline",
        barCodeEx: "Code barre",
        slicer: "segment",
        chart: "Graphique"
    },
    spreadTab: {
        general: {
            title: "Générale",
            allowDragDrop: "Autoriser le glisser-déposer",
            allowDragFill: "Autoriser le glisser et remplir",
            allowZoom: "Autoriser le zoom",
            allowOverflow: "Permettre le débordement",
            showDragFillSmartTag: "Afficher l'étiquette intelligente Drag Fill",
            allowUserDeselect: "Autoriser la désélection de l'utilisateur"
        },
        calculation: {
            title: "Calcul",
            referenceStyle: {
                title: "Style de référence",
                R1C1: "R1C1",
                A1: "A1"
            }
        },
        scrollBar: {
            title: "Défilement",
            showVertical: "Barre de défilement verticale",
            showHorizontal: "Barre de défilement horizontale",
            maxAlign: "Barre de défilement Max Align",
            showMax: "Barre de défilement Afficher Max",
            scrollIgnoreHidden: "Faire défiler Ignorer une ligne ou une colonne cachée"
        },
        tabStip: {
            title: "Onglet",
            visible: "Onglet Visible",
            newTabVisible: "Nouvel onglet visible",
            editable: "Onglet Editable",
            showTabNavigation: "Afficher Onglet Navigation"
        },
        color: {
            title: "Couleur",
            spreadBackcolor: "Spread Couleur de fond",
            grayAreaBackcolor: "Gray Area Couleur de fond"
        },
        tip: {
            title: "Aide",
            showDragDropTip: "Afficher l'astuce de Drag Drop",
            showDragFillTip: "Afficher l'astuce de remplissage de la traînée",
            scrollTip: {
                title: "Scroll Tip",
                values: {
                    none: "aucun",
                    horizontal: "Horizontal",
                    vertical: "Vertical",
                    both: "Les deux"
                }
            },
            resizeTip: {
                title: "Redimensionner infobulle",
                values: {
                    none: "aucun",
                    column: "Colonne",
                    row: "Ligne",
                    both: "Les deux"
                }
            }
        },
        sheets: {
            title: "Feuilles",
            sheetName: "Nom de la feuille",
            sheetVisible: "Feuille visible"
        },
        cutCopyIndicator: {
            title: "Couper / coller indicateur",
            visible: "Afficher l'indicateur",
            borderColor: "Couleur de la bordure"
        },
        dragDropFill: {
            title: "Glisser-déposer / Glisser-remplir",
            canUserDragDrop: "L'utilisateur peut-il faire un glisser-déposer",
            canUserDragFill: "L'utilisateur peut-il faire glisser-remplir",
            showDragFillSmartTag: "Afficher l'étiquette intelligente Drag Fill",
            dragFillType: {
                title: "Type de remplissage par glissement par défaut",
                values: {
                    auto: "Auto",
                    copyCells: "Copier les cellules",
                    fillSeries: "Remplir la série",
                    fillFormattingOnly: "Remplir le formatage uniquement",
                    fillWithoutFormatting: "Remplir sans formatage"
                }
            }
        },
        spreadTheme: {
            title: "Spread Thème",
            theme: {
                title: "Thème",
                option: {
                    spreadJS: "SpreadJS",
                    excel2013White: "Excel2013 Blanc",
                    excel2013LightGray: "Excel2013 Gris clair",
                    excel2013DarkGray: "Excel2013 Gris foncé",
                    excel2016Colorful: "Excel2016 Colorée",
                    excel2016DarkGray: "Excel2016 Gris foncé"
                }
            }
        },
        resizeZeroIndicator: {
            title: "ResizeZeroIndicator",
            option: {
                defaultValue: "Par défaut",
                enhanced: "Amélioré"
            }
        }
    },
    sheetTab: {
        general: {
            title: "General",
            rowCount: "Ligne",
            columnCount: "Colonne",
            name: "Nom",
            tabColor: "Couleur onglet"
        },
        freeze: {
            title: "Figer",
            frozenRowCount: "En-tête de lignes",
            frozenColumnCount: "En-tête de colonne",
            trailingFrozenRowCount: "Pied de page de ligne",
            trailingFrozenColumnCount: "Pied de page de colonne",
            frozenLineColor: "Couleurs",
            freezePane: "Figer",
            unfreeze: "Défiger"
        },
        gridLine: {
            title: "Quadrillage",
            showVertical: "Vertical Visible",
            showHorizontal: "Horizontal Visible",
            color: "Couleur"
        },
        header: {
            title: "En-tête",
            showRowHeader: "En-tête de ligne visible",
            showColumnHeader: "En-tête de colonne visible"
        },
        selection: {
            title: "Séléection",
            borderColor: "Couleur de la bordure",
            backColor: "Couleur de fond",
            hide: "Caché sélection",
            policy: {
                title: "Policy",
                values: {
                    single: "Simple",
                    range: "Plage",
                    multiRange: "Multi-plage"
                }
            },
            unit: {
                title: "Unité",
                values: {
                    cell: "Cellule",
                    row: "Ligne",
                    column: "Colonne"
                }
            }
        },
        protection: {
            title: "Protection",
            protectSheet: "Protéger la feuille",
            selectLockCells: "Sélectionner les cellules verrouillées",
            selectUnlockedCells: "Sélectionner les cellules non verrouillées",
            sort: "Trier",
            useAutoFilter: "Utiliser AutoFilter",
            resizeRows: "Redimensionner les lignes",
            resizeColumns: "Redimensionner les colonnes",
            editObjects: "Modifier les objets"
        }
    },
    cellTab: {
        style: {
            title: "Style",
            fontFamily: "Police",
            fontSize: "Taille",
            foreColor: "Couleur d'avant-plan",
            backColor: "Couleur de fond",
            borders: {
                title: "Bordure",
                values: {
                    bottom: "Bordure du bas",
                    top: "Bordure du haut",
                    left: "Bordure gauche",
                    right: "Bordure droite",
                    none: "Pas de bordure",
                    all: "Toutes les bordures",
                    outside: "Bordure du contour",
                    thick: "Bordure épaisse",
                    doubleBottom: "Double bordure du bas",
                    thickBottom: "Bordure du bas épaisse",
                    topBottom: "Bordure du haut et du bas",
                    topThickBottom: "Bordure du haut et du bas épaisse",
                    topDoubleBottom: "Bordure du haut et du bas double"
                }
            }
        },
        border: {
            title: "Bordure",
            label: "Bordure",
            rangeBorderLine: "Style de trait",
            rangeBorderColor: "Couleur du trait",
            noBorder: "Pas de bordure",
            outsideBorder: "Bordure du contour",
            insideBorder: "Bordure intérieure du contour",
            allBorder: "Toutes les bordures",
            leftBorder: "Bordure gauche",
            innerVertical: "Verticale intérieure",
            rightBorder: "Bordure droite",
            topBorder: "Bordure du haut",
            innerHorizontal: "Horizontal intérieur",
            bottomBorder: "Bordure du bas"
        },
        alignment: {
            title: "Alignement",
            top: "Haut",
            middle: "Milieu",
            bottom: "Bas",
            left: "Gauche",
            center: "Centre",
            right: "Droite",
            wrapText: "Wrap Text",
            decreaseIndent: "Diminuer le retrait",
            increaseIndent: "Augmenter le retrait"
        },
        format: {
            title: "Format",
            commonFormat: {
                option: {
                    general: "Général",
                    number: "Nombre",
                    currency: "Monnaie",
                    accounting: "Comptabilité",
                    shortDate: "Date courte",
                    longDate: "Date longue",
                    time: "Heure",
                    percentage: "Pourcentage",
                    fraction: "Fraction",
                    scientific: "Scientifique",
                    text: "Texte"
                }
            },
            percentValue: "0%",
            commaValue: "# ##0.00; (# ##0.00); \"-\"??;@",
            custom: "Personnalisé",
            setButton: "Fixer"
        },
        merge: {
            title: "Fusionner les cellules",
            mergeCells: "Fusionner",
            unmergeCells: "Défusionner"
        },
        cellType: {
            title: "Cell Type"
        },
        conditionalFormat: {
            title: "Formatage conditionnel",
            useConditionalFormats: "Formats conditionnels"
        },
        protection: {
            title: "Protection",
            lock: "Verrouillé",
            sheetIsProtected: "La feuille est protégée",
            sheetIsUnprotected: "La feuille n'est pas protégée"
        }
    },
    tableTab: {
        tableStyle: {
            title: "Style de tableau",
            groupTitle: {
                light: "Clair",
                medium: "Intermédiaire",
                dark: "Foncé"
            },
            light: {
                none: "aucun",
                light1: "Tableau style clair 1",
                light2: "Tableau style clair 2",
                light3: "Tableau style clair 3",
                light4: "Tableau style clair 4",
                light5: "Tableau style clair 5",
                light6: "Tableau style clair 6",
                light7: "Tableau style clair 7",
                light8: "Tableau style clair 8",
                light9: "Tableau style clair 9",
                light10: "Tableau style clair 10",
                light11: "Tableau style clair 11",
                light12: "Tableau style clair 12",
                light13: "Tableau style clair 13",
                light14: "Tableau style clair 14",
                light15: "Tableau style clair 15",
                light16: "Tableau style clair 16",
                light17: "Tableau style clair 17",
                light18: "Tableau style clair 18",
                light19: "Tableau style clair 19",
                light20: "Tableau style clair 20",
                light21: "Tableau style clair 21"
            },
            medium: {
                medium1: "Tableau style intermédiaire 1",
                medium2: "Tableau style intermédiaire 2",
                medium3: "Tableau style intermédiaire 3",
                medium4: "Tableau style intermédiaire 4",
                medium5: "Tableau style intermédiaire 5",
                medium6: "Tableau style intermédiaire 6",
                medium7: "Tableau style intermédiaire 7",
                medium8: "Tableau style intermédiaire 8",
                medium9: "Tableau style intermédiaire 9",
                medium10: "Tableau style intermédiaire 10",
                medium11: "Tableau style intermédiaire 11",
                medium12: "Tableau style intermédiaire 12",
                medium13: "Tableau style intermédiaire 13",
                medium14: "Tableau style intermédiaire 14",
                medium15: "Tableau style intermédiaire 15",
                medium16: "Tableau style intermédiaire 16",
                medium17: "Tableau style intermédiaire 17",
                medium18: "Tableau style intermédiaire 18",
                medium19: "Tableau style intermédiaire 19",
                medium20: "Tableau style intermédiaire 20",
                medium21: "Tableau style intermédiaire 21",
                medium22: "Tableau style intermédiaire 22",
                medium23: "Tableau style intermédiaire 23",
                medium24: "Tableau style intermédiaire 24",
                medium25: "Tableau style intermédiaire 25",
                medium26: "Tableau style intermédiaire 26",
                medium27: "Tableau style intermédiaire 27",
                medium28: "Tableau style intermédiaire 28"
            },
            dark: {
                dark1: "Tableau style foncé 1",
                dark2: "Tableau style foncé 2",
                dark3: "Tableau style foncé 3",
                dark4: "Tableau style foncé 4",
                dark5: "Tableau style foncé 5",
                dark6: "Tableau style foncé 6",
                dark7: "Tableau style foncé 7",
                dark8: "Tableau style foncé 8",
                dark9: "Tableau style foncé 9",
                dark10: "Tableau style foncé 10",
                dark11: "Tableau style foncé 11"
            }
        },
        general: {
            title: "Général",
            tableName: "Nom"
        },
        options: {
            title: "Options",
            filterButton: "Bouton filtre",
            headerRow: "En tête de ligne",
            totalRow: "Ligne ‘Total'",
            bandedRows: "Lignes à bandes",
            bandedColumns: "Colonnes à bandes",
            firstColumn: "Première colonne",
            lastColumn: "Dernière colonne"
        }
    },
    dataTab: {
        sort: {
            title: "Trier et filtrer",
            asc: "Trier A-Z",
            desc: "Trier Z-A",
            filter: "Filtrer"
        },
        group: {
            title: "Groupe",
            group: "Grouper",
            ungroup: "Dégrouper",
            showDetail: "Afficher le détail",
            hideDetail: "Masquer les détails",
            showRowRangeGroup: "Afficher le groupe plage de ligne",
            showColumnRangeGroup: "Afficher le groupe de colonnes de la gamme"
        },
        dataValidation: {
            title: "Validation des données",
            setButton: "Fixer",
            clearAllButton: "Effacer tout",
            circleInvalidData: "Entourer les données non valides",
            setting: {
                title: "Paramètres",
                values: {
                    validatorType: {
                        title: "Type de validateur",
                        option: {
                            anyValue: "Toutes valeurs",
                            number: "Nombre",
                            list: "Liste",
                            formulaList: "FormulaList",
                            date: "Date",
                            textLength: "Longueur du texte",
                            custom: "Personnalisation"
                        }
                    },
                    ignoreBlank: "Ignorer les vides",
                    validatorComparisonOperator: {
                        title: "Opérateur",
                        option: {
                            between: "Entre",
                            notBetween: "Pas entre",
                            equalTo: "Egal à",
                            notEqualTo: "Pas égal à",
                            greaterThan: ">",
                            lessThan: "<",
                            greaterThanOrEqualTo: ">=",
                            lessThanOrEqualTo: "<="
                        }
                    },
                    number: {
                        minimum: "Minimum",
                        maximum: "Maximum",
                        value: "Valeur",
                        isInteger: "Est type Entier"
                    },
                    source: "Source",
                    date: {
                        startDate: "Date de début",
                        endDate: "Date de fin",
                        value: "valeur",
                        isTime: "Est type Heure"
                    },
                    formula: "Formula"
                }
            },
            inputMessage: {
                title: "Message de saisie",
                values: {
                    showInputMessage: "Afficher quand la cellule est sélectionnée",
                    title: "Titre",
                    message: "Message"
                }
            },
            errorAlert: {
                title: "Avertissement d'erreur",
                values: {
                    showErrorAlert: "Afficher après la saisie de données non valides",
                    alertType: {
                        title: "Type d'alerte",
                        option: {
                            stop: "Stop",
                            warning: "Avertissement",
                            information: "Information"
                        }
                    },
                    title: "Titre",
                    message: "Message"
                }
            }
        }
    },
    commentTab: {
        general: {
            title: "Généralités",
            dynamicSize: "Taille dynamique",
            dynamicMove: "Déplacement dynamique",
            lockText: "Verrouiller le texte",
            showShadow: "Afficher l'ombre"
        },
        font: {
            title: "Police",
            fontFamily: "Police",
            fontSize: "Taille",
            fontStyle: {
                title: "Style",
                values: {
                    normal: "normal",
                    italic: "italique",
                    oblique: "oblique",
                    inherit: "hérité"
                }
            },
            fontWeight: {
                title: "Graisse",
                values: {
                    normal: "normal",
                    bold: "gras",
                    bolder: "plus gras",
                    lighter: "moins gras"
                }
            },
            textDecoration: {
                title: "Décoration",
                values: {
                    none: "aucun",
                    underline: "souligner",
                    overline: "surligner",
                    linethrough: "barré"
                }
            }
        },
        border: {
            title: "Bordure",
            width: "Largeur",
            style: {
                title: "Style",
                values: {
                    none: "aucun",
                    hidden: "caché",
                    dotted: "pointillé",
                    dashed: "tiret",
                    solid: "trait plein",
                    double: "trait double",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "Couleur"
        },
        appearance: {
            title: "Apparence",
            horizontalAlign: {
                title: "Horizontal",
                values: {
                    left: "Gauche",
                    center: "Centre",
                    right: "Droite",
                    general: "Général"
                }
            },
            displayMode: {
                title: "Mode d'affichage",
                values: {
                    alwaysShown: "Toujours montré",
                    hoverShown: "Montré au survol"
                }
            },
            foreColor: "Couleur de premier plan",
            backColor: "Couleur de fond",
            padding: "Bordure intérieure",
            zIndex: "Z-Index",
            opacity: "Opacité"
        }
    },
    pictureTab: {
        general: {
            title: "Général",
            moveAndSize: "Déplacer et redimensionner avec les cellules",
            moveAndNoSize: "Déplacer et ne pas redimensionner avec les cellules",
            noMoveAndSize: "Ne pas déplacer ni redimensionner avec les cellules",
            fixedPosition: "Position fixe"
        },
        border: {
            title: "Bordure",
            width: "Largeur",
            radius: "Radius",
            style: {
                title: "Style",
                values: {
                    solid: "trait plein",
                    dotted: "pointillé",
                    dashed: "tiret",
                    double: "trait double",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "Couleur"
        },
        appearance: {
            title: "Apparence",
            stretch: {
                title: "Étirer",
                values: {
                    stretch: "Étirer",
                    center: "Centrer",
                    zoom: "Zoomer",
                    none: "Aucun"
                }
            },
            backColor: "Couleur de fond"
        }
    },
    sparklineExTab: {
        pieSparkline: {
            title: "PieSparkline Paramètres",
            values: {
                percentage: "Pourcentage",
                color: "Couleur ",
                setButton: "Fixer"
            }
        },
        areaSparkline: {
            title: "AreaSparkline Paramètres",
            values: {
                line1: "Ligne 1",
                line2: "Ligne 2",
                minimumValue: "Minimum Valeur",
                maximumValue: "Maximum valeur",
                points: "Points",
                positiveColor: "Couleur positive",
                negativeColor: "Couleur négative",
                setButton: "Fixer"
            }
        },
        boxplotSparkline: {
            title: "BoxPlotSparkline Setting",
            values: {
                points: "Points",
                boxplotClass: "BoxPlotClass",
                scaleStart: "ScaleStart",
                scaleEnd: "ScaleEnd",
                acceptableStart: "AcceptableStart",
                acceptableEnd: "AcceptableEnd",
                colorScheme: "ColorScheme",
                style: "Style",
                showAverage: "Show Average",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        bulletSparkline: {
            title: "BulletSparkline Setting",
            values: {
                measure: "Mesure",
                target: "Cible",
                maxi: "Maxi",
                forecast: "Prévisions",
                good: "Bonne",
                bad: "Mauvaise",
                tickunit: "Unité Tick",
                colorScheme: "ColorScheme",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        cascadeSparkline: {
            title: "CascadeSparkline Setting",
            values: {
                pointsRange: "PointsRange",
                pointIndex: "PointIndex",
                minimum: "Minimum",
                maximum: "Maximum",
                positiveColor: "ColorPositive",
                negativeColor: "ColorNegative",
                labelsRange: "LabelsRange",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        compatibleSparkline: {
            title: "CompatibleSparkline Setting",
            values: {
                data: {
                    title: "Données",
                    dataOrientation: "DataOrientation",
                    dateAxisData: "DateAxisData",
                    dateAxisOrientation: "DateAxisOrientation",
                    displayEmptyCellAs: "DisplayEmptyCellAs",
                    showDataInHiddenRowOrColumn: "Afficher les données dans des lignes et des colonnes cachées"
                },
                show: {
                    title: "Afficher",
                    showFirst: "Afficher le premier",
                    showLast: "Afficher le dernier",
                    showHigh: "Afficher le haut",
                    showLow: "Afficher le bas",
                    showNegative: "Afficher négatif",
                    showMarkers: "Afficher les marqueurs"
                },
                group: {
                    title: "Groupe",
                    minAxisType: "MinAxisType",
                    maxAxisType: "MaxAxisType",
                    manualMin: "ManualMin",
                    manualMax: "ManualMax",
                    rightToLeft: "De droite à gauche",
                    displayXAxis: "Afficher XAxis"
                },
                style: {
                    title: "Style",
                    negative: "Négatif",
                    markers: "Marqueurs",
                    axis: "Axes",
                    series: "Séries",
                    highMarker: "Marqueurs haut",
                    lowMarker: "Marqueur bas",
                    firstMarker: "Premier marqueur",
                    lastMarker: "Dernier marqueur",
                    lineWeight: "Épaisseur de la ligne"
                },
                setButton: "Fixer"
            }
        },
        hbarSparkline: {
            title: "Paramètres HbarSparkline",
            values: {
                value: "valeur",
                colorScheme: "ColorScheme",
                setButton: "Fixer"
            }
        },
        vbarSparkline: {
            title: "Paramètres VarSparkline Setting",
            values: {
                value: "valeur",
                colorScheme: "ColorScheme",
                setButton: "Fixer"
            }
        },
        paretoSparkline: {
            title: "ParetoSparkline Setting",
            values: {
                points: "Points",
                pointIndex: "PointIndex",
                colorRange: "ColorRange",
                highlightPosition: "HighlightPosition",
                target: "Cible",
                target2: "Cible2",
                label: "Étiquette",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        scatterSparkline: {
            title: "ScatterSparkline Setting",
            values: {
                points1: "Points1",
                points2: "Points2",
                minX: "MinX",
                maxX: "MaxX",
                minY: "MinY",
                maxY: "MaxY",
                hLine: "HLine",
                vLine: "VLine",
                xMinZone: "XMinZone",
                xMaxZone: "XMaxZone",
                yMinZone: "YMinZone",
                yMaxZone: "YMaxZone",
                color1: "Color1",
                color2: "Color2",
                tags: "Tags",
                drawSymbol: "Dessiner le symbole",
                drawLines: "Dessiner lignes",
                dashLine: "Ligne de tirets",
                setButton: "Fixer"
            }
        },
        spreadSparkline: {
            title: "Paramètres Sparkline diffus",
            values: {
                points: "Points",
                scaleStart: "Echelle du début",
                scaleEnd: "Echelle de fin",
                style: "Style",
                colorScheme: "Couleurs de schémas",
                showAverage: "Afficher la moyenne",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        stackedSparkline: {
            title: "Paramètres Sparkline empilée",
            values: {
                points: "Points",
                colorRange: "ColorRange",
                labelRange: "LabelRange",
                maximum: "Maximum",
                targetRed: "TargetRed",
                targetGreen: "TargetGreen",
                targetBlue: "TargetBlue",
                targetYellow: "TargetYellow",
                color: "Couleur",
                highlightPosition: "HighlightPosition",
                textOrientation: "TextOrientation",
                textSize: "TextSize",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        variSparkline: {
            title: "VariSparkline Setting",
            values: {
                variance: "Variance",
                reference: "Reference",
                mini: "Mini",
                maxi: "Maxi",
                mark: "Marque",
                tickunit: "Unité Tick",
                colorPositive: "Couleur positive",
                colorNegative: "Couleur négative",
                legend: "Légende",
                vertical: "Vertical",
                setButton: "Fixer"
            }
        },
        orientation: {
            vertical: "Vertical",
            horizontal: "Horizontal"
        },
        axisType: {
            individual: "Individual",
            group: "Grouper",
            custom: "Personnalisation"
        },
        emptyCellDisplayType: {
            gaps: "Gaps",
            zero: "Zero",
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
            none: "aucun",
            single: "Single",
            cumulated: "Cumulé"
        },
        spreadStyle: {
            stacked: "Empilés",
            spread: "Spread",
            jitter: "Jitter",
            poles: "Poles",
            stackedDots: "StackedDots",
            stripe: "Bande"
        },
        setButton: "Fixer"
    },
    barCodeTab: {
        qrCode: {
            title: "Paramètres QR Code",
            values: {
                data: "Donnée",
                color: "Couleur",
                backgroundColor: "Couleur de fond",
                errorCorrectionLevel: "Niveau de correction des erreurs",
                model: "Modèle",
                version: "Version",
                mask: "Masque",
                connection: "Connexion",
                connectionNo: "N° de connexion",
                charCode: "Code des caractères",
                charset: "Charset"
            }
        },
        ean8: {
            title: "Paramètres EAN8 "
        },
        ean13: {
            title: "Paramètres EAN13 ",
            values: {
                addOn: "Ajouter du texte",
                addOnLabelPosition: "Ajouter une position de texte"
            }
        },
        gs1128: {
            title: "Paramètres GS1_128 "
        },
        codabar: {
            title: "Paramètres code barre",
            values: {
                checkDigit: "Vérifier le digit",
                nwRatio: "Le ratio des barres larges et étroites"
            }
        },
        pdf417:{
            title: "Paramètres PDF417",
            values: {
                errorCorrectionLevel: "Error Correction Level",
                rows: "Rows",
                columns: "Columns",
                compact: "Compact"
            }
        },
        dataMatrix:{
            title: "Paramètres DataMatrix",
            values: {
                eccMode: "Ecc Mode",
                ecc200SymbolSize: "Ecc200 Symbol Size",
                ecc200EndcodingMode: "Ecc200 Endcoding Mode",
                ecc00_140Symbole: "Ecc00_140 Symbole",
                structureAppend: "Structure Append",
                structureNumber: "Structure Number",
                fileIdentifier: "File Identifier"
            }
        },
        code39:{
            title: "Paramètres Code39",
            values: {
                labelWithStartAndStopCharacter: "Étiquette avec caractère de départ et d'arrêt",
                nwRatio: "Le ratio des barres larges et étroites",
                checkDigit: "Vérifier le digit",
                fullASCII: "ASCII complet"
            }
        },
        code49:{
            title: "Paramètres Code49",
            values: {
                grouping: "Groupes",
                groupNo: "Numéro de groupe"
            }
        },
        code93:{
            title: "Paramètres Code93",
            values: {
                checkDigit: "Vérifier le digit",
                fullASCII: "ASCII complet"
            }
        },
        code128:{
            title: "Paramètres Code128",
            values: {
                codeSet: "Ensemble de codes"
            }
        },
        commonParams: {
            data: "Données",
            color: "Couleur",
            backgroundColor: "Couleur de fond",
            showLabel: "Afficher l'étiquette",
            labelPosition: "Position de l'étiquette",
            fontFamily: "Famille de polices",
            fontStyle: "Style de police",
            fontWeight: "Graisse de la police",
            fontTextDecoration: "Décoration du texte",
            fontTextAlign: "Alignement du texte",
            fontSize: "Taille de la police",
            quietZoneLeft: "Taille de la zone de calme à gauche",
            quietZoneRight: "Taille de la zone de calme à droite",
            quietZoneTop: "Taille de la zone de calme du haut",
            quietZoneBottom: "Taille de la zone de calme du bas",
            setButton: "Fixer"
        },
        labelPosition: {
            top: "haut",
            bottom: "bas"
        },
        addOnLabelPosition:{
            top: "haut",
            bottom: "bas"
        },
        horizontalAlign: {
            left: "gauche",
            center: "centre",
            right: "droite",
            general: "général"
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
            normal: "normal",
            bold: "gras"
        },
        textDecoration: {
            none: "aucun",
            underline: "souligner",
            overline: "surligner",
            linethrough: "Barré"
        },
        setButton: "Fixer"
    },
    slicerTab: {
        slicerStyle: {
            title: "Style du segment",
            groupTitle: {
                light: "Clair",
                dark: "Foncé"
            },
            light: {
                light1: "Style de segment clair 1",
                light2: "Style de segment clair 2",
                light3: "Style de segment clair 3",
                light4: "Style de segment clair 4",
                light5: "Style de segment clair 5",
                light6: "Style de segment clair 6"
            },
            other: {
                other1: "Style de segment autre 1",
                other2: "Style de segment autre 2"
            },
            dark: {
                dark1: "Style de segment foncé 1",
                dark2: "Style de segment foncé 2",
                dark3: "Style de segment foncé 3",
                dark4: "Style de segment foncé 4",
                dark5: "Style de segment foncé 5",
                dark6: "Style de segment foncé 6"
            }
        },
        general: {
            title: "Général",
            name: "Nom",
            captionName: "Nom de la légende",
            itemSorting: {
                title: "tri des éléments",
                option: {
                    none: "aucun",
                    ascending: "Ascendant",
                    descending: "Descendant"
                }
            },
            displayHeader: "Display Header"
        },
        layout: {
            title: "Mise en page",
            columnNumber: "Numéro de la colonne",
            buttonHeight: "Hauteur des boutons",
            buttonWidth: "Largeur des boutons"
        },
        property: {
            title: "Propriété",
            moveAndSize: "Déplacer et dimensionner avec des cellules",
            moveAndNoSize: "Déplacer et ne pas dimensionner avec des cellules",
            noMoveAndSize: "Ne pas déplacer et n'augmenter pas la taille des cellules",
            locked: "Verrouillé"
        },
        filter: {
            title: "Filtrage",
            hideItemsWithNoData: "Cacher les éléments sans données",
            markNoData: "Indiquer visuellement les éléments sans données",
            showNoDataLast: "Afficher les éléments sans données en dernier"
        }
    },
    colorPicker: {
        themeColors: "Thème Couleurs",
        standardColors: "Couleurs standard",
        noFills: "Sans remplissage"
    },
    conditionalFormat: {
        setButton: "Fixer",
        ruleTypes: {
            title: "Type",
            highlightCells: {
                title: "Mettre en évidence les règles des cellules",
                values: {
                    cellValue: "Valeur de la cellule",
                    specificText: "Texte spécifique",
                    dateOccurring: "Date d'apparition",
                    unique: "Unique",
                    duplicate: "Dupliquer"
                }
            },
            topBottom: {
                title: "Règles haut/bas",
                values: {
                    top10: "Top10",
                    average: "Moyenne"
                }
            },
            dataBars: {
                title: "Barres de données",
                labels: {
                    minimum: "Minimum",
                    maximum: "Maximum",
                    type: "Type",
                    value: "valeur",
                    appearance: "Apparence",
                    showBarOnly: "Afficher les barres uniquement",
                    useGradient: "Utiliser Gradien",
                    showBorder: "Afficher bordure",
                    barDirection: "Direction des barres",
                    negativeFillColor: "Couleur négative",
                    negativeBorderColor: "Bordure négative",
                    axis: "Axis",
                    axisPosition: "Position",
                    axisColor: "Couleur"
                },
                valueTypes: {
                    number: "Nombre",
                    lowestValue: "Valeur la plus basse",
                    highestValue: "Valeur la plus élevée",
                    percent: "Pourcentage",
                    percentile: "Percentile",
                    automin: "Automin",
                    automax: "Automax",
                    formula: "Formule"
                },
                directions: {
                    leftToRight: "Gauche vers droite",
                    rightToLeft: "Droite vers gauche"
                },
                axisPositions: {
                    automatic: "Automatique",
                    cellMidPoint: "Point au milieu",
                    none: "aucun"
                }
            },
            colorScales: {
                title: "Échelle couleurs",
                labels: {
                    minimum: "Minimum",
                    midpoint: "Midpoint",
                    maximum: "Maximum",
                    type: "Type",
                    value: "Valeur",
                    color: "Couleur"
                },
                values: {
                    twoColors: "Échelle 2-couleurs",
                    threeColors: "Échelle 3-couleurs"
                },
                valueTypes: {
                    number: "Nombre",
                    lowestValue: "Valeur la plus basse",
                    highestValue: "Valeur la plus élevée",
                    percent: "Pourcentage",
                    percentile: "Percentile",
                    formula: "Formule"
                }
            },
            iconSets: {
                title: "Jeux d'icônes",
                labels: {
                    style: "Style",
                    showIconOnly: "Afficher l'icône uniquement",
                    reverseIconOrder: "Inverser l’ordre des icônes",

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
                    number: "Nombre",
                    percent: "Pourcentage",
                    percentile: "Percentile",
                    formula: "Formule"
                }
            },
            removeConditionalFormat: {
                title: "aucun"
            }
        },
        operators: {
            cellValue: {
                types: {
                    equalsTo: "EqualsTo",
                    notEqualsTo: "NotEqualsTo",
                    greaterThan: "GreaterThan",
                    greaterThanOrEqualsTo: "GreaterThanOrEqualsTo",
                    lessThan: "LessThan",
                    lessThanOrEqualsTo: "LessThanOrEqualsTo",
                    between: "Between",
                    notBetween: "NotBetween"
                }
            },
            specificText: {
                types: {
                    contains: "Contient",
                    doesNotContain: "Ne contient pas",
                    beginsWith: "Commence par",
                    endsWith: "Se termine par"
                }
            },
            dateOccurring: {
                types: {
                    today: "Aujourd'hui",
                    yesterday: "Hier",
                    tomorrow: "Demain",
                    last7Days: "Les 7 derniers jours",
                    thisMonth: "Ce mois-ci",
                    lastMonth: "Le mois dernier",
                    nextMonth: "Le mois prochain",
                    thisWeek: "Cette semaine",
                    lastWeek: "La semaine dernière",
                    nextWeek: "La semaine prochaine"
                }
            },
            top10: {
                types: {
                    top: "Haut",
                    bottom: "Bas"
                }
            },
            average: {
                types: {
                    above: "Above",
                    below: "Below",
                    equalOrAbove: "EqualOrAbove",
                    equalOrBelow: "EqualOrBelow",
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
            cells: "Formater uniquement les cellules avec:",
            rankIn: "Les valeurs de format qui se classent dans le:",
            inRange: "valeurs dans la fourchette sélectionnée.",
            values: "Les valeurs de format qui sont:",
            average: "la moyenne pour la plage sélectionnée.",
            allValuesBased: "Formater toutes les cellules en fonction de leurs valeurs:",
            all: "Formater tout:",
            and: "et",
            formatStyle: "utiliser le style",
            showIconWithRules: "Afficher chaque icône selon ces règles:"
        },
        formatSetting: {
            formatUseBackColor: "Couleur de fond",
            formatUseForeColor: "Couleur",
            formatUseBorder: "Bordure"
        }
    },
    cellTypes: {
        title: "Type cellule",
        buttonCellType: {
            title: "Cellule bouton",
            values: {
                marginTop: "Marge haute",
                marginRight: "Marge droite",
                marginBottom: "Marge basse",
                marginLeft: "Marge gauche",
                text: "Texte",
                backColor: "Couleur de fond"
            }
        },
        checkBoxCellType: {
            title: "CheckBoxCellType",
            values: {
                caption: "Légende",
                textTrue: "Texte vrai",
                textIndeterminate: "Texte indéterminé",
                textFalse: "Texte faux",
                textAlign: {
                    title: "Alignement du texte",
                    values: {
                        top: "Haut",
                        bottom: "Bas",
                        left: "Gauche",
                        right: "Droit"
                    }
                },
                isThreeState: "Est à 3 états"
            }
        },
        comboBoxCellType: {
            title: "Cellule combobox",
            values: {
                editorValueType: {
                    title: "Type de valeur",
                    values: {
                        text: "Texte",
                        index: "Index",
                        value: "Valeur"
                    }
                },
                itemsText: "Élement texte",
                itemsValue: "Élement valeur"
            }
        },
        hyperlinkCellType: {
            title: "HyperlinkCellType",
            values: {
                linkColor: "Couleur du lien",
                visitedLinkColor: "Couleur du lien visité",
                text: "Texte",
                linkToolTip: "Infobulle du lien",
                address: "Adresse"
            }
        },
        clearCellType: {
            title: "aucun"
        },
        setButton: "Fixer",
        insertButton: "Insérer"
    },
    sparklineDialog: {
        title: "Paramètres SparklineEx",
        detail: "Paramètres SparklineEx détails",
        sparklineExType: {
            title: "Type",
            values: {
                line: "Ligne",
                column: "Colonne",
                winLoss: "Gain/perte",
                pie: "Secteur",
                area: "Zone",
                scatter: "Dispersion",
                spread: "Diffus",
                stacked: "Empilé",
                bullet: "Points",
                hbar: "Hbar",
                vbar: "Vbar",
                variance: "Variance",
                boxplot: "BoxPlot",
                cascade: "Cascade",
                pareto: "Pareto"
            }
        },
        lineSparkline: {
            dataRange: "Plage de données",
            locationRange: "Localisation de la plage",
            dataRangeError: "PLage de données invalide!",
            singleDataRange: "La plage de données doit figurer sur une seule ligne ou colonne.",
            locationRangeError: "La plage de localisation invalide!"
        },
        bulletSparkline: {
            measure: "Mesure",
            target: "Cible",
            maxi: "Maxi",
            forecast: "Prévision",
            good: "Bon",
            bad: "Mauvais",
            tickunit: "unité",
            colorScheme: "Schéma de couleurs",
            vertical: "Vertical"
        },
        hbarSparkline: {
            value: "Valeur",
            colorScheme: "Schéma de couleurs"
        },
        varianceSparkline: {
            variance: "Variance",
            reference: "Reference",
            mini: "Mini",
            maxi: "Maxi",
            mark: "Mark",
            tickunit: "TickUnit",
            colorPositive: "Couleur positive",
            colorNegative: "Couleur négative",
            legend: "Legend",
            vertical: "Vertical"
        }
    },
    barCodeDialog: {
        title: "Paramètres code barre",
        detail: "Paramètres détaillés code barre",
        barCodeType: {
            title: "Type",
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
            dataRange: "Plage de données",
            locationRange: "Localisation de la plage",
            dataRangeError: "Plage de donnée invalide!",
            singleDataRange: "La plage de données doit figurer sur une seule ligne ou colonne.",
            locationRangeError: "Localisation de la plage invalide!",
            color: "Couleur",
            backgroundColor: "Couleur de fond",
        },
        gs1_128:{
            showLabel: "Afficher étiquette",
            labelPosition: "Position de l'étiquette"
        },
        ean13:{
            addOn: "Ajouter le texte du QRCode",
            addOnLabelPosition: "Ajouter une position sur l'étiquette"
        },
        codaBar:{
            checkDigit: "Vérifier le chiffre",
            nwRatio: "Le ratio des barres larges et étroites"
        },
        code39:{
            labelWithStartAndStopCharacter: "Étiquette avec caractère",
            nwRatio: "Le ratio des barres larges et étroites",
        },
        code49:{
            grouping: "Grouper",
            groupNo: "Groupe numéro"
        },
        code93:{
            checkDigit: "Check Digit",
            fullASCII: "Full ASCII"
        },
        code128:{
            codeSet: "Code Set"
        },
        pdf417:{
            errorCorrectionLevel: "Niveau de correction des erreurs",
            rows: "Lignes",
            columns: "Colonnes",
            compact: "Compacter"
        },
        dataMatrix:{
            eccMode: "Ecc Mode",
            ecc200SymbolSize: "Ecc200 Symbol Size",
            ecc200EndcodingMode: "Ecc200 Endcoding Mode",
            ecc00_140Symbole: "Ecc00_140 Symbole",
            structureAppend: "Structure Append",
            structureNumber: "Structure Number",
            fileIdentifier: "File Identifier"
        },
        qrCode:{
            errorCorrectionLevel: "Niveau de correction des erreurs",
            model: "Modèle",
            version: "Version",
            mask: "Masque",
            connection: "Connexion",
            connectionNo: "N° de connexion",
            charCode: "Code du caractère",
            charset: "Charset"
        },
        setButton: "Fixer"
    },
    slicerDialog: {
        insertSlicer: "Insérer segment"
    },
    tooltips: {
        style: {
            fontBold: "Marquer le texte en gras.",
            fontItalic: "Marquer le texte en italique",
            fontUnderline: "Souligner le texte.",
            fontDoubleUnderline: "Souligner double le texte.",
            fontOverline: "Surligner le texte.",
            fontLinethrough: "Barrer le texte."
        },
        alignment: {
            leftAlign: "Aligner le texte à gauche.",
            centerAlign: "Centrer le texte.",
            rightAlign: "Aligner le texte à droite.",
            topAlign: "Aligner le texte sur le haut de la page.",
            middleAlign: "Aligner le texte sur le milieu.",
            bottomAlign: "Aligner le texte sur le fond.",
            decreaseIndent: "Diminuer le retrait.",
            increaseIndent: "Augmenter le retrait."
        },
        border: {
            outsideBorder: "Bordures extérieures",
            insideBorder: "Bordures intérieures",
            allBorder: "Toutes les bordures",
            leftBorder: "Bordure gauche",
            innerVertical: "Intérieur vertical",
            rightBorder: "Bordure droite",
            topBorder: "Bordure haut",
            innerHorizontal: "Intérieur horizontal",
            bottomBorder: "Bordure bas",
            noBorder: "aucun",
            diagonalUpLine: "Ligne diagonale ascendante",
            diagonalDownLine: "Ligne diagonale descendante",
        },
        format: {
            percentStyle: "Pourcentage Style",
            commaStyle: "Style virgule",
            increaseDecimal: "Augmenter les décimales",
            decreaseDecimal: "Diminuer les décimales"
        }
    },
    defaultTexts: {
        buttonText: "Bouton",
        checkCaption: "Check",
        comboText: "United States,China,Japan",
        comboValue: "US,CN,JP",
        hyperlinkText: "SpreadJS",
        hyperlinkToolTip: "SpreadJS Web Site",
        hyperlinkAddress: "http://www.grapecity.com/en/spreadjs"
    },
    messages: {
        invalidImportFile: "Fichier invalide, importation échouée.",
        duplicatedSheetName: "Nom de la feuille en double.",
        duplicatedTableName: "Nom de la table en double.",
        rowColumnRangeRequired: "Veuillez sélectionner une série de lignes ou de colonnes.",
        imageFileRequired: "Le fichier doit être une image!",
        duplicatedSlicerName: "Nom du segment en double.",
        invalidSlicerName: "Le nom du segment n'est pas valide."
    },
    contextMenu: {
        cutItem: "Couper",
        copyItem: "Copier",
        pasteItem: "Coller",
        insertItem: "Insérer",
        deleteItem: "Supprimer",
        mergeItem: "Fusionner",
        unmergeItem: "Défusionner"
    },
    dialog: {
        ok: "OK",
        cancel: "Annuler"
    },
    find: {
        title: "Chercher",
        options: "Options",
        findwhat: "Chercher quoi",
        within: { title: "Dans", worksheet: "Feuille", workbook: "Classeur" },
        searchby: { title: "Chercher par", rows: "Lignes", columns: "Colonnes" },
        lookin: { title: "Chercher dans", values: "Valeurs", formulas: "Formules" },
        matchcase: "Casse correspondante",
        matchexactly: "Caractères identiques",
        usewildcards: "Utiliser les jokers",
        findall: "Trouver tous",
        findnext: "Trouver le suivant",
        result: {
            header: {
                sheet: "Feuille",
                cell: "Cellule",
                value: "Valeur",
                formula: "Formule"
            },
            countssuffix: " cellule(s) non trouvée(s)",
            nomatch: "Le tableur ne trouve pas les données que vous recherchez."
        }
    },
    printSetting: {
        printButton: "Imprimer",
        options: {
            title: "Options",
            range: {
                title: "Imprimer plage",
                items: {
                    activeSheet: "Feuille active",
                    workbook: "Classeur complet"
                }
            },
            showBorder: "Afficher la bordure",
            showGridline: "Afficher le quadrillage",
            headerAndFooter: {
                title: "En-tête / Pied de page",
                header: {
                    title: "En-tête",
                    items: [
                        { text: "(aucun)" },
                        { value: { center: "Page &P" } },
                        { value: { right: "&A" } },
                        { value: { center: "Page &P", right: "&A" } }
                    ],
                    custom: "Personnalisation Header"
                },
                footer: {
                    title: "Pied de page",
                    items: [
                        { text: "(aucun)" },
                        { value: { center: "Page &P of &N" }  },
                        { value: { left: "&BConfidential&B", center: "&D", right: "Page &P" }}
                    ],
                    custom: "Personnalisation pied de page"
                },
                custom: {
                  left: "Section gauche",
                  center: "Section centrale",
                  right: "Section droite",
                  items: [
                      { text: "(aucun)" },
                      { text: "Numéro de page", value: "&P" },
                      { text: "Total des pages", value: "&N" },
                      { text: "Nom de Feuille", value: "&A" },
                      { text: "Nom du classeur", value: "&F" },
                      { text: "Date du jour", value: "&D" },
                      { text: "Date et heure actuelles", value: "&D &T"}
                    ],
                    insert: "Insérer",
                    image: {
                        value: "&G",
                        emptylist: "(browse...)"
                    },
                    insertPicture: "Insérer une image",
                    tooltips: {
                        insert: "Sélectionner la section et positionner le point d'insertion, puis choisissez l'élément à insérer.",
                        insertPicture: "Sélectionner la section et positionner le point d'insertion, puis choisissez une image téléchargée à insérer.",
                        imageList: "Naviguer et sélectionner l'image à télécharger pour l'en-tête / le pied de page. Nous suggérons que l'image ne soit pas plus grande que 200px x 200px."
                    }
                },
                preview: "Aperçu"
            }

        }
    },
    fileMenu: {
      items: {
          new: "Nouveau",
          save: "Sauvegarder",
            password: "Mot de passe :",
            browse:"Naviguer",
            close: "Fermer",
            filename:"Nom du fichier:",
          open: {
              title: "Ouvrir"
          },
          print: {
              title: "Imprimer"
          },
          settings: {
              title: "Paramètres"
          }
      }
    },
    settingPane: {
      title: {
          comment: "Commentaire",
          slicer: "Segment",
      }
    },
    functions: {
        setting: {
            defaultDescription: "Sélectionner une fonction et obtenir sa description.",
            filterPlaceHolder: "Chercher une fonction"
        },
        categories: {
            datebase: {
                text: "Base de données",
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
                text: "Date & Heure",
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
                text: "Ingénierie",
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
                text: "Financier",
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
                text: "Logique",
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
                text: "Recherche et référence",
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
                text: "Statistiques",
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
                text: "Texte",
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
            axes:'Axes',
            moreAxisOption:"Plus d'option des axes"
        },
        axisTitles:{
            axisTitles:'Titre des axes',
            moreAxisTitlesOption:"Plus d'option du titre des axes"
        },
        chartTitle:{
            chartTitle:'Titre',
            moreChartTitleOption:"Plus d'option sur le titre du graphique"
        },
        gridLines:{
            gridLines:'Quadrillage',
            moreGridLinesOption:"Plus d'option sur le quadrillage"
        },
        dataLabels:{
            dataLabels:'Étiquette de données',
            moreDataLabelsOption:"Plus d'option sur les étiquettes de données"
        },
        legend:{
            legend:'Légende',
            moreLegendOption:"Plus d'option sur la légende"
        },
        primaryHorizontal:'Principal Horizontal',
        primaryVertical:'Principal Vertical',
        secondaryHorizontal:'Secondaire Horizontal',
        secondaryVertical:'Secondaire Vertical',
        none:'aucun',
        aboveChart:'Au-dessus du graphique',
        primaryMajorHorizontal:'Princpal majeur Horizontal',
        primaryMajorVertical:'Principal majeur Vertical',
        primaryMinorHorizontal:'Principal mineur Horizontal',
        primaryMinorVertical:'Principal mineur Vertical',
        secondaryMajorHorizontal:'Secondaire majeur Horizontal',
        secondaryMajorVertical:'Secondaire majeur Vertical',
        secondaryMinorHorizontal:'Secondaire mineur Horizontal',
        secondaryMinorVertical:'Secondaire mineur Vertical',
        center:'Centrer',
        insideEnd:'Fin intérieure',
        outsideEnd:'Fin extérieure',
        bestFit:'Meilleur ajustement',
        above:'Au-dessus',
        below:'En dessous',
        show:'Afficher',
        right:'droite',
        top:'Haut',
        left:'Gauche',
        bottom:'Bas'
    },
    richTextDialog: {
        editRichText: "Modifier le texte riche",
        title:"Texte riche",
        font:"Polices de caractères",
        size:"Taille",
        bold:"Gras",
        italic:"Italique",
        underline:"Souligné",
        strikethrough:"Barré",
        colorPicker:"Choix de couleur",
        superScript:"Exposant",
        subScript:"Indice"
    },
    shape: {
        connector: 'Lignes',
        blockArrows: 'Flèches',
        flowchart: 'Organigramme',
        callouts: 'Bulles',
        rectangles: 'Rectangles',
        equationShapes:"Formes mathématiques",
        basicShapes: 'Formes basiques',
        starsAndBanners: 'Etoiles et bannières'
    }
};
