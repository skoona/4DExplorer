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
          title: "Borrar",
          clearActions: {
              clearAll: "Borrar todo",
              clearFormat: "Borrar formato"
          }
      },
      showInspector: "Mostrar el inspector",
      hideInspector: "Ocultar el inspector",
      importJson: "Importar JSON",
      exportJson: "Exportar JSON",
      importViewPro: "Importar 4D View Pro",
      exportViewPro: "Exportar 4D View Pro",
      insertTable: "Insertar una tabla",
      insertPicture: "Insertar una imagen",
      insertComment: "Insertar un comentario",
      insertSparkline: "Insertar un minigráfico",
      insertSlicer: "Insertar Slicer"
  },
  tabs: {
      spread: "Dispersión",
      sheet: "Hoja",
      cell: "Celda",
      table: "Tabla",
      data: "Datos",
      comment: "Comentario",
      picture: "Imagen",
      sparklineEx: "Minigráfico",
      barCodeEx: "barCode",
      slicer: "Slicer",
      chart: "Gráfico"
  },
  spreadTab: {
      general: {
          title: "General",
          allowDragDrop: "Permitir arrastrar y soltar",
          allowDragFill: "Permitir arrastrar y llenar",
          allowZoom: "Permitir Zoom",
          allowOverflow: "Permitir desborde",
          showDragFillSmartTag: "Mostrar etiqueta inteligente de arrastrar y llenar",
          allowUserDeselect: "Permitir al usuario deseleccionar"
      },
      calculation: {
          title: "Cálculo",
          referenceStyle: {
              title: "Estilo de referencia",
              R1C1: "R1C1",
              A1: "A1"
          }
      },
      scrollBar: {
          title: "Barra de desplazamiento",
          showVertical: "Barra de desplazamiento vertical",
          showHorizontal: "Barra de desplazamiento horizontal",
          maxAlign: "Barra de desplazamiento Max Align",
          showMax: "Barra de desplazamiento Mostrar Max",
          scrollIgnoreHidden: "Mover Ignorar Línea o Columna oculta"
      },
      tabStip: {
          title: "TabStrip",
          visible: "TabStrip Visible",
          newTabVisible: "Nueva pestaña visible",
          editable: "Tabstrip Editable",
          showTabNavigation: "Mostrar pestaña Navegación"
      },
      color: {
          title: "Color",
          spreadBackcolor: "Color de fondo Dispersión",
          grayAreaBackcolor: "Color de fondo del área gris"
      },
      tip: {
          title: "Sugerencia",
          showDragDropTip: "Mostrar sugerencia de arrastrar y soltar",
          showDragFillTip: "Mostrar sugerencia de arrastrar y llenar",
          scrollTip: {
              title: "Sugerencia de desplazamiento",
              values: {
                  none: "Ninguno",
                  horizontal: "Horizontal",
                  vertical: "Vertical",
                  both: "Ambos"
              }
          },
          resizeTip: {
              title: "Sugerencia de cambiar el tamaño",
              values: {
                  none: "Ninguno",
                  column: "Columna",
                  row: "Línea",
                  both: "Ambos"
              }
          }
      },
      sheets: {
          title: "Hojas",
          sheetName: "Nombre de la hoja",
          sheetVisible: "Hoja visible"
      },
      cutCopyIndicator: {
          title: "Cortar / Copiar indicador",
          visible: "Mostrar el indicador",
          borderColor: "Color del borde"
      },
      dragDropFill: {
          title: "Arrastrar soltar / Arrastrar llenar",
          canUserDragDrop: "El usuario puede arrastrar soltar",
          canUserDragFill: "El usuario puede arrastrar llenar",
          showDragFillSmartTag: "Mostrar la etiqueta inteligente arrastrar llenar",
          dragFillType: {
              title: "Tipo por defecto arrastrar llenar ",
              values: {
                  auto: "Auto",
                  copyCells: "Copiar celdas",
                  fillSeries: "Llenar la serie",
                  fillFormattingOnly: "Llenar formato únicamente",
                  fillWithoutFormatting: "Llenar sin formato"
              }
          }
      },
      spreadTheme: {
          title: "Tema Dispersión",
          theme: {
              title: "Tema",
              option: {
                  spreadJS: "SpreadJS",
                  excel2013White: "Excel2013 Blanco",
                  excel2013LightGray: "Excel2013 Gris claro",
                  excel2013DarkGray: "Excel2013 Gris oscuro",
                  excel2016Colorful: "Excel2016 Colores",
                  excel2016DarkGray: "Excel2016 Gris oscuro"
              }
          }
      },
      resizeZeroIndicator: {
          title: "ResizeZeroIndicator",
          option: {
              defaultValue: "Por defecto",
              enhanced: "Mejorado"
          }
      }
  },
  sheetTab: {
      general: {
          title: "General",
          rowCount: "Línea",
          columnCount: "Columna",
          name: "Nombre",
          tabColor: "Pestaña Color"
      },
      freeze: {
          title: "Congelar",
          frozenRowCount: "Líneas de encabezado",
          frozenColumnCount: "Columnas de encabezado",
          trailingFrozenRowCount: "Líneas de pie de página ",
          trailingFrozenColumnCount: "Columnas de pie de página ",
          frozenLineColor: "Color",
          freezePane: "Congelar",
          unfreeze: "Descongelar"
      },
      gridLine: {
          title: "Linea de cuadrícula",
          showVertical: "Vertical visible",
          showHorizontal: "Horizontal visible",
          color: "Color"
      },
      header: {
          title: "Encabezado",
          showRowHeader: "Línea encabezado visible",
          showColumnHeader: "Columna encabezado visible"
      },
      selection: {
          title: "Selección",
          borderColor: "Color del borde",
          backColor: "Color de fondo",
          hide: "Ocultar Selección",
          policy: {
              title: "Política",
              values: {
                  single: "Único",
                  range: "Rango",
                  multiRange: "MultiRango"
              }
          },
          unit: {
              title: "Unidad",
              values: {
                  cell: "Celda",
                  row: "Línea",
                  column: "Columna"
              }
          }
      },
      protection: {
          title: "Protección",
          protectHoja: "Proteger Hoja",
          selectLockCells: "Seleccionar celdas bloqueadas",
          selectUnlockedCells: "Seleccionar celdas desbloqueadas",
          sort: "Ordenar",
          useAutoFilter: "Utilizar el autofiltror",
          resizeRows: "Redimensionar las filas",
          resizeColumns: "Redimensionar las columnas",
          editObjects: "Editar objetos"
      }
  },
  cellTab: {
      style: {
          title: "Estilo",
          fontFamily: "Fuente",
          fontSize: "Tamaño",
          foreColor: "Color frontal",
          backColor: "Color de fondo",
          borders: {
              title: "Borde",
              values: {
                  bottom: "Borde inferior",
                  top: "Borde superior",
                  left: "Borde izquierdo",
                  right: "Borde derecho",
                  none: "Sin borde",
                  all: "Todos los bordes",
                  outside: "Exterior",
                  thick: "Borde de la caja grueso",
                  doubleBottom: "Doble borde inferior",
                  thickBottom: "Borde inferior grueso",
                  topBottom: "Borde superior e inferior",
                  topThickBottom: "Borde superior e inferior grueso",
                  topDoubleBottom: "Borde superior e inferior doble"
              }
          }
      },
      border: {
          title: "Borde",
          label: "Borde",
          rangeBorderLine: "Estilo de línea",
          rangeBorderColor: "Color de línea",
          noBorder: "Ninguno",
          outsideBorder: "Exterior",
          insideBorder: "Borde interior",
          allBorder: "Todos los bordes",
          leftBorder: "Borde izquierdo",
          innerVertical: "Vertical interior",
          rightBorder: "Borde derecho",
          topBorder: "Borde superior",
          innerHorizontal: "Horizontal interior",
          bottomBorder: "Borde inferior"
      },
      alignment: {
          title: "Alineación",
          top: "Superior",
          middle: "En el medio",
          bottom: "Inferior",
          left: "Izquierda",
          center: "Centro",
          right: "Derecha",
          wrapText: "Envolver texto",
          decreaseIndent: "Disminuir la indentación",
          increaseIndent: "Aumentar la indentación"
      },
      format: {
          title: "Formato",
          commonFormat: {
              option: {
                  general: "General",
                  number: "Número",
                  currency: "Moneda",
                  accounting: "Contabilidad",
                  shortDate: "Fecha corta",
                  longDate: "Fecha larga",
                  time: "Hora",
                  percentage: "Porcentaje",
                  fraction: "Fracción",
                  scientific: "Científico",
                  text: "Texto"
              }
          },
          percentValue: "0%",
          commaValue: "#,##0.00; (#,##0.00); \"-\"??;@",
          custom: "Personalizado",
          setButton: "Fijar"
      },
      merge: {
          title: "Fusionar celdas",
          mergeCells: "Fusionar",
          unmergeCells: "Separar"
      },
      cellType: {
          title: "Tipo de celda"
      },
      conditionalFormat: {
          title: "Formato condicional",
          useConditionalFormats: "Formatos condicionales"
      },
      protection: {
          title: "Protección",
          lock: "Bloqueado",
          sheetIsProtected: "Hoja protegida",
          sheetIsUnprotected: "Hoja desprotegida"
      }
  },
  tableTab: {
      tableStyle: {
          title: "Estilo de tabla",
          groupTitle: {
              light: "Ligero",
              medium: "Medio",
              dark: "Oscuro"
          },
          light: {
              none: "Ninguno",
              light1: "Estilo de tabla ligero 1",
              light2: "Estilo de tabla ligero 2",
              light3: "Estilo de tabla ligero 3",
              light4: "Estilo de tabla ligero 4",
              light5: "Estilo de tabla ligero 5",
              light6: "Estilo de tabla ligero 6",
              light7: "Estilo de tabla ligero 7",
              light8: "Estilo de tabla ligero 8",
              light9: "Estilo de tabla ligero 9",
              light10: "Estilo de tabla ligero 10",
              light11: "Estilo de tabla ligero 11",
              light12: "Estilo de tabla ligero 12",
              light13: "Estilo de tabla ligero 13",
              light14: "Estilo de tabla ligero 14",
              light15: "Estilo de tabla ligero 15",
              light16: "Estilo de tabla ligero 16",
              light17: "Estilo de tabla ligero 17",
              light18: "Estilo de tabla ligero 18",
              light19: "Estilo de tabla ligero 19",
              light20: "Estilo de tabla ligero 20",
              light21: "Estilo de tabla ligero 21"
          },
          medium: {
              medium1: "Estilo de tabla medio 1",
              medium2: "Estilo de tabla medio 2",
              medium3: "Estilo de tabla medio 3",
              medium4: "Estilo de tabla medio 4",
              medium5: "Estilo de tabla medio 5",
              medium6: "Estilo de tabla medio 6",
              medium7: "Estilo de tabla medio 7",
              medium8: "Estilo de tabla medio 8",
              medium9: "Estilo de tabla medio 9",
              medium10: "Estilo de tabla medio 10",
              medium11: "Estilo de tabla medio 11",
              medium12: "Estilo de tabla medio 12",
              medium13: "Estilo de tabla medio 13",
              medium14: "Estilo de tabla medio 14",
              medium15: "Estilo de tabla medio 15",
              medium16: "Estilo de tabla medio 16",
              medium17: "Estilo de tabla medio 17",
              medium18: "Estilo de tabla medio 18",
              medium19: "Estilo de tabla medio 19",
              medium20: "Estilo de tabla medio 20",
              medium21: "Estilo de tabla medio 21",
              medium22: "Estilo de tabla medio 22",
              medium23: "Estilo de tabla medio 23",
              medium24: "Estilo de tabla medio 24",
              medium25: "Estilo de tabla medio 25",
              medium26: "Estilo de tabla medio 26",
              medium27: "Estilo de tabla medio 27",
              medium28: "Estilo de tabla medio 28"
          },
          dark: {
              dark1: "Estilo de tabla oscuro 1",
              dark2: "Estilo de tabla oscuro 2",
              dark3: "Estilo de tabla oscuro 3",
              dark4: "Estilo de tabla oscuro 4",
              dark5: "Estilo de tabla oscuro 5",
              dark6: "Estilo de tabla oscuro 6",
              dark7: "Estilo de tabla oscuro 7",
              dark8: "Estilo de tabla oscuro 8",
              dark9: "Estilo de tabla oscuro 9",
              dark10: "Estilo de tabla oscuro 10",
              dark11: "Estilo de tabla oscuro 11"
          }
      },
      general: {
          title: "General",
          tableName: "Nombre"
      },
      options: {
          title: "Opciones",
          filterButton: "Botón Filtro",
          headerRow: "Línea de encabezado",
          totalRow: "Línea Total",
          bandedRows: "Líneas con bandas",
          bandedColumns: "Columnas con bandas",
          firstColumn: "Primera columna",
          lastColumn: "Segunda columna"
      }
  },
  dataTab: {
      sort: {
          title: "Ordenar y filtrar",
          asc: "Ordenar A-Z",
          desc: "Ordenar Z-A",
          filter: "Filtrar"
      },
      group: {
          title: "Agrupar",
          group: "Agrupar",
          ungroup: "Desagrupar",
          showDetail: "Mostrar detalle",
          hideDetail: "Ocultar detalle",
          showRowRangeGroup: "Mostrar el grupo del rango de filas",
          showColumnRangeGroup: "Mostrar el grupo del rango de columnas"
      },
      dataValidation: {
          title: "Validación de datos",
          setButton: "Fijar",
          clearAllButton: "Borrar todo",
          circleInvalidData: "Círculo de datos inválidos",
          setting: {
              title: "Parámetro",
              values: {
                  validatorType: {
                      title: "Tipo de validador",
                      option: {
                          anyValue: "Todos los valores",
                          number: "Número",
                          list: "Lista",
                          formulaList: "FormulaList",
                          date: "Fecha",
                          textLength: "Longitud del texto",
                          custom: "Personalizado"
                      }
                  },
                  ignoreBlank: "Ignorar los vacíos",
                  validatorComparisonOperator: {
                      title: "Operador",
                      option: {
                          between: "Entre",
                          notBetween: "No entre",
                          equalTo: "Igual a",
                          notEqualTo: "No igual a",
                          greaterThan: ">",
                          lessThan: "<",
                          greaterThanOrEqualTo: ">=",
                          lessThanOrEqualTo: "<="
                      }
                  },
                  number: {
                      minimum: "Mínimo",
                      maximum: "Máximo",
                      value: "Valor",
                      isInteger: "Es de tipo entero"
                  },
                  source: "Fuente",
                  date: {
                      startDate: "Fecha de inicio",
                      endDate: "Fecha final",
                      value: "Valor",
                      isTime: "Es de tipo Hora"
                  },
                  formula: "Fórmula"
              }
          },
          inputMessage: {
              title: "Mensaje de entrada",
              values: {
                  showInputMessage: "Mostrar cuando se selecciona la celda",
                  title: "Título",
                  message: "Mensaje"
              }
          },
          errorAlert: {
              title: "Alerta de error",
              values: {
                  showErrorAlert: "Mostrar después de introducir datos no válidos",
                  alertType: {
                      title: "Tipo de alerta",
                      option: {
                          stop: "Detener",
                          warning: "Atención",
                          information: "Información"
                      }
                  },
                  title: "Título",
                  message: "Mensaje"
              }
          }
      }
  },
  commentTab: {
      general: {
          title: "General",
          dynamicSize: "Tamaño dinámico",
          dynamicMove: "Movimiento dinámico",
          lockText: "Bloquear texto",
          showShadow: "Mostrar sombra"
      },
      font: {
          title: "Fuente",
          fontFamily: "Fuente",
          fontSize: "Tamaño",
          fontStyle: {
              title: "Estilo",
              values: {
                  normal: "normal",
                  italic: "itálica",
                  oblique: "oblicua",
                  inherit: "heredado"
              }
          },
          fontWeight: {
              title: "Grosor",
              values: {
                  normal: "normal",
                  bold: "negrita",
                  bolder: "más oscuro",
                  lighter: "más claro"
              }
          },
          textDecoration: {
              title: "Decoración",
              values: {
                  none: "ninguno",
                  underline: "subrayado",
                  overline: "sobre la línea",
                  linethrough: "tachado"
              }
          }
      },
      border: {
          title: "Borde",
          width: "Ancho",
          style: {
              title: "Estilo",
              values: {
                  none: "ninguno",
                  hidden: "oculto",
                  dotted: "punteado",
                  dashed: "discontinuo",
                  solid: "sólido",
                  double: "doble",
                  groove: "hundido",
                  ridge: "saliente",
                  inset: "parece hundido",
                  outset: "parece salido"
              }
          },
          color: "Color"
      },
      appearance: {
          title: "Apariencia",
          horizontalAlign: {
              title: "Horizontal",
              values: {
                  left: "izquierda",
                  center: "centrar",
                  right: "derecha",
                  general: "general"
              }
          },
          displayMode: {
              title: "Modo Mostrar",
              values: {
                  alwaysShown: "Mostrar siempre",
                  hoverShown: "Mostrar al pasar por encima"
              }
          },
          foreColor: "Color de frente",
          backColor: "Color de fondo",
          padding: "Relleno",
          zIndex: "Índice Z",
          opacity: "Opacidad"
      }
  },
  pictureTab: {
      general: {
          title: "General",
          moveAndSize: "Mover y dimensionar con las celdas",
          moveAndNoSize: "Mover y no dimensionar con las celdas",
          noMoveAndSize: "No mover y dimensionar con las celdas",
          fixedPosition: "Posición fija"
      },
      border: {
          title: "Borde",
          width: "Ancho",
          radius: "Radio",
          style: {
              title: "Estilo",
              values: {
                  solid: "sólido",
                  dotted: "punteado",
                  dashed: "discontinuo",
                  double: "doble",
                  groove: "hundido",
                  ridge: "saliente",
                  inset: "parece hundido",
                  outset: "parece salido"
              }
          },
          color: "Color"
      },
      appearance: {
          title: "Apariencia",
          stretch: {
              title: "Stretch",
              values: {
                  stretch: "Stretch",
                  center: "Centrar",
                  zoom: "Zoom",
                  none: "Ninguno"
              }
          },
          backColor: "Color de fondo"
      }
  },
  sparklineExTab: {
      pieSparkline: {
          title: "Configuración de minigráfico circular",
          values: {
              percentage: "Porcentaje",
              color: "Color ",
              setButton: "Fijar"
          }
      },
      areaSparkline: {
          title: "Configuración de minigráfico área",
          values: {
              line1: "Line 1",
              line2: "Line 2",
              minimumValor: "Valor mínimo",
              maximumValor: "Valor máximo",
              points: "Puntos",
              positiveColor: "Color positivo",
              negativeColor: "Color negativo",
              setButton: "Fijar"
          }
      },
      boxplotSparkline: {
          title: "Configuración de minigráfico BoxPlot",
          values: {
              points: "Puntos",
              boxplotClass: "BoxPlotClass",
              scaleStart: "ScaleStart",
              scaleEnd: "ScaleEnd",
              acceptableStart: "AcceptableStart",
              acceptableEnd: "AcceptableEnd",
              colorScheme: "Esquema de colores",
              style: "Estilo",
              showAverage: "Mostrar promedio",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      bulletSparkline: {
          title: "Configuración de minigráfico Bullet",
          values: {
              measure: "Medida",
              target: "Objetivo",
              maxi: "Maxi",
              forecast: "Promedio",
              good: "Bueno",
              bad: "Malo",
              tickunit: "Tickunit",
              colorScheme: "Esquema de colores",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      cascadeSparkline: {
          title: "Configuración de minigráfico Cascada",
          values: {
              pointsRange: "Rango de puntos",
              pointIndex: "PointIndex",
              minimum: "Mínimo",
              maximum: "Máximo",
              positiveColor: "ColorPositive",
              negativeColor: "ColorNegative",
              labelsRange: "Rango de etiquetas",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      compatibleSparkline: {
          title: "Configuración de minigráfico Compatible",
          values: {
              data: {
                  title: "Datos",
                  dataOrientation: "DataOrientation",
                  dateAxisData: "DateAxisData",
                  dateAxisOrientation: "DateAxisOrientation",
                  displayEmptyCellAs: "Mostrar celdas vacías como",
                  showDataInHiddenRowOrColumn: "Mostrar los datos en filas y columnas ocultas"
              },
              show: {
                  title: "Mostrar",
                  showFirst: "Mostrar primero",
                  showLast: "Mostrar último",
                  showHigh: "Mostrar alto",
                  showLow: "Mostrar bajo",
                  showNegative: "Mostrar negativo",
                  showMarkers: "Mostrar marcadores"
              },
              group: {
                  title: "Agrupar",
                  minAxisType: "MinAxisType",
                  maxAxisType: "MaxAxisType",
                  manualMin: "ManualMin",
                  manualMax: "ManualMax",
                  rightToLeft: "Derecha a Izquierda",
                  displayXAxis: "Mostrar Ejes X"
              },
              style: {
                  title: "Estilo",
                  negative: "Negativo",
                  markers: "Marcadores",
                  axis: "Ejes",
                  series: "Series",
                  highMarker: "Marcador superior",
                  lowMarker: "Marcador inferior",
                  firstMarker: "Primer marcador",
                  lastMarker: "Último marcador",
                  lineWeight: "Grosor de la línea"
              },
              setButton: "Fijar"
          }
      },
      hbarSparkline: {
          title: "Configuración de minigráfico Hbar",
          values: {
              value: "Valor",
              colorScheme: "Esquema de colores",
              setButton: "Fijar"
          }
      },
      vbarSparkline: {
          title: "Configuración de minigráfico Var",
          values: {
              value: "Valor",
              colorScheme: "Esquema de colores",
              setButton: "Fijar"
          }
      },
      paretoSparkline: {
          title: "Configuración de minigráfico Pareto",
          values: {
              points: "Puntos",
              pointIndex: "PointIndex",
              colorRange: "Rango de colores",
              highlightPosition: "HighlightPosition",
              target: "Target",
              target2: "Target2",
              label: "Etiqueta",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      scatterSparkline: {
          title: "Configuración de minigráfico Dispersión",
          values: {
              points1: "Puntos1",
              points2: "Puntos2",
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
              drawSymbol: "Draw Symbol",
              drawLines: "Draw Lines",
              dashLine: "Dash Line",
              setButton: "Fijar"
          }
      },
      spreadSparkline: {
          title: "Configuración de minigráfico Dispersión",
          values: {
              points: "Puntos",
              scaleStart: "ScaleStart",
              scaleEnd: "ScaleEnd",
              style: "Estilo",
              colorScheme: "Esquema de colores",
              showAverage: "Mostrar promedio",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      stackedSparkline: {
          title: "Parámetros minigráfico apilado",
          values: {
              points: "Puntos",
              colorRange: "Rango de colores",
              labelRange: "Rango de etiqueta",
              maximum: "Máximo",
              targetRed: "Objetivo rojo",
              targetGreen: "Objetivo verde",
              targetBlue: "Objetivo azul",
              targetYellow: "Objetivo amarillo",
              color: "Color",
              highlightPosition: "Resaltar posición",
              textOrientation: "Orientación del texto",
              textSize: "Tamaño del texto",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      variSparkline: {
          title: "Parámetros minigráfico Varianza",
          values: {
              variance: "Varianza",
              reference: "Referencia",
              mini: "Mini",
              maxi: "Maxi",
              mark: "Mark",
              tickunit: "TickUnit",
              colorPositive: "Color positivo",
              colorNegative: "Color negativo",
              legend: "Leyenda",
              vertical: "Vertical",
              setButton: "Fijar"
          }
      },
      orientation: {
          vertical: "Vertical",
          horizontal: "Horizontal"
      },
      axisType: {
          individual: "Individual",
          group: "Agrupar",
          custom: "Personalizado"
      },
      emptyCellDisplayType: {
          gaps: "Gaps",
          zero: "Cero",
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
          classical: "Clásico",
          neo: "Neo"
      },
      paretoLabel: {
          none: "Ninguno",
          single: "Individual",
          cumulated: "Acumulado"
      },
      spreadStyle: {
          stacked: "Apilado",
          spread: "Dispersión",
          jitter: "Jitter",
          poles: "Poles",
          stackedDots: "Puntos apilados",
          stripe: "Raya"
      },
      setButton: "Fijar"
  },
  barCodeTab: {
      qrCode: {
          title: "Opciones QRCode",
          values: {
              data: "Datos",
              color: "Color",
              backgroundColor: "Color de fondo",
              errorCorrectionLevel: "Nivel de corrección de errores",
              model: "Modelo",
              version: "Versión",
              mask: "Máscara",
              connection: "Conexión",
              connectionNo: "Conexión No",
              charCode: "Charcode",
              charset: "Charset"
          }
      },
      ean8: {
          title: "Configuración EAN8"
      },
      ean13: {
          title: "Configuración EAN13",
          values: {
              addOn: "Añade texto",
              addOnLabelPosition: "Añade posición del texto"
          }
      },
      gs1128: {
          title: "Configuración GS1_128"
      },
      codabar: {
          title: "Configuración Codabar",
          values: {
              checkDigit: "Dígito de control",
              nwRatio: "Radio de barras anchas y estrechas"
          }
      },
      pdf417:{
          title: "Configuración PDF417",
          values: {
              errorCorrectionLevel: "Nivel de corrección de errores",
              rows: "líneas",
              columns: "Columnas",
              compact: "Compacto"
          }
      },
      dataMatrix:{
          title: "Opciones DataMatrix",
          values: {
              eccMode: "Ecc Mode",
              ecc200SymbolSize: "Ecc200 Symbol Size",
              ecc200EndcodingMode: "Ecc200 Endcoding Mode",
              ecc00_140Symbole: "Ecc00_140 Symbole",
              structureAppend: "Structure Append",
              structureNumber: "Structure Número",
              fileIdentifier: "File Identifier"
          }
      },
      code39:{
          title: "Configuración Code39",
          values: {
              labelWithStartAndStopCharacter: "Etiqueta con caracter de inicio y fin",
              nwRatio: "Radio de barras anchas y estrechas",
              checkDigit: "Dígito de control",
              fullASCII: "Full ASCII"
          }
      },
      code49:{
          title: "Configuración Code49",
          values: {
              grouping: "Agrupar",
              groupNo: "Grupo No"
          }
      },
      code93:{
          title: "Configuración Code93",
          values: {
              checkDigit: "Dígito de control",
              fullASCII: "Full ASCII"
          }
      },
      code128:{
          title: "Configuración Code128",
          values: {
              codeSet: "Code Set"
          }
      },
      commonParams: {
          data: "Data",
          color: "Color",
          backgroundColor: "Color de fondo",
          showLabel: "Mostrar Etiqueta",
          labelPosition: "Posición de la etiqueta",
          fontFamily: "Familia de fuentes",
          fontStyle: "Estilo de fuente",
          fontWeight: "Grosor de la fuente",
          fontTextDecoration: "Text Decoration",
          fontTextAlign: "Fuente Text Align",
          fontSize: "Tamaño de la fuente",
          quietZoneLeft: "Zona tranquila a la izquierda",
          quietZoneRight: "Zona tranquila a la derecha",
          quietZoneTop: "Zona tranquila superior",
          quietZoneBottom: "Zona tranquila inferior",
          setButton: "Fijar"
      },
      labelPosition: {
          top: "superior",
          bottom: "inferior"
      },
      addOnLabelPosition:{
          top: "superior",
          bottom: "inferior"
      },
      horizontalAlign: {
          left: "izquierda",
          center: "centrar",
          right: "derecha",
          general: "general"
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
          bold: "negrita"
      },
      textDecoration: {
          none: "ninguno",
          underline: "subrayado",
          overline: "sobre la línea",
          linethrough: "tachado"
      },
      setButton: "Fijar"
  },
  slicerTab: {
      slicerStyle: {
          title: "Estilo Slicer",
          groupTitle: {
              light: "Ligero",
              dark: "Oscuro"
          },
          light: {
              light1: "Estilo de Slicer ligero 1",
              light2: "Estilo de Slicer ligero 2",
              light3: "Estilo de Slicer ligero 3",
              light4: "Estilo de Slicer ligero 4",
              light5: "Estilo de Slicer ligero 5",
              light6: "Estilo de Slicer ligero 6"
          },
          other: {
              other1: "Otro estilo de Slicer 1",
              other2: "Otro estilo de Slicer 2"
          },
          dark: {
              dark1: "Estilo de Slicer oscuro 1",
              darkAscending2: "Estilo de Slicer oscuro 2",
              dark3: "Estilo de Slicer oscuro 3",
              dark4: "Estilo de Slicer oscuro 4",
              dark5: "Estilo de Slicer oscuro 5",
              dark6: "Estilo de Slicer oscuro 6"
          }
      },
      general: {
          title: "General",
          name: "Nombre",
          captionName: "Nombre Caption",
          itemSorting: {
              title: "clasificación de elementos",
              option: {
                  none: "Ninguno",
                  ascending: "Ascendente",
                  descending: "Descendente"
              }
          },
          displayHeader: "Mostrar Encabezado"
      },
      layout: {
          title: "Layout",
          columnNumber: "Columna Número",
          buttonHeight: "Altura del botón",
          buttonWidth: "Ancho del botón"
      },
      property: {
          title: "Propiedad",
          moveAndSize: "Mover y dimensionar con celdas",
          moveAndNoSize: "Mover y no dimensionar con celdas",
          noMoveAndSize: "No mover y dimensionar con celdas",
          locked: "Bloqueado"
      },
      filter: {
          title: "Filtrar",
          hideItemsWithNoData: "Ocultar elementos sin datos",
          markNoData: "Indicar visualmente los elementos sin datos",
          showNoDataLast: "Mostrar los artículos sin datos en último lugar"
      }
  },
  colorPicker: {
      themeColors: "Tema Colores",
      standardColors: "Colores estándar",
      noFills: "No Llenar"
  },
  conditionalFormat: {
      setButton: "Fijar",
      ruleTypes: {
          title: "Tipo",
          highlightCells: {
              title: "Reglas para resaltar celdas",
              values: {
                  cellValor: "Celda Valor",
                  specificText: "Texto específico",
                  dateOccurring: "Fechas que ocurren",
                  unique: "Único",
                  duplicate: "Duplicado"
              }
          },
          topBottom: {
              title: "Reglas Superior/Inferior ",
              values: {
                  top10: "Top10",
                  average: "Promedio"
              }
          },
          dataBars: {
              title: "Barras de datos",
              labels: {
                  minimum: "Mínimo",
                  maximum: "Máximo",
                  type: "Tipo",
                  value: "Valor",
                  appearance: "Apariencia",
                  showBarOnly: "Mostrar barra únicamente",
                  useGradient: "utilizar gradiente",
                  showBorder: "Mostrar borde",
                  barDirection: "Dirección de la barra",
                  negativeFillColor: "Color negativo",
                  negativeBorderColor: "Borde negativo",
                  axis: "Ejes",
                  axisPosition: "Posición",
                  axisColor: "Color"
              },
              valueTypes: {
                  number: "Número",
                  lowestValue: "Valor más bajo",
                  highestValor: "Valor mayor",
                  percent: "Porcentaje",
                  percentile: "Percentil",
                  automin: "Automin",
                  automax: "Automax",
                  formula: "Fórmula"
              },
              directions: {
                  leftToRight: "Izquierda-a-Derecha",
                  rightToLeft: "Derecha-a-Izquierda"
              },
              axisPositions: {
                  automatic: "Automático",
                  cellMidPoint: "CeldaMidPoint",
                  none: "Ninguno"
              }
          },
          colorScales: {
              title: "Escalas de color",
              labels: {
                  minimum: "Mínimo",
                  midpoint: "Midpoint",
                  maximum: "Máximo",
                  type: "Tipo",
                  value: "Valor",
                  color: "Color"
              },
              values: {
                  twoColors: "Escala de 2 colores",
                  threeColors: "Escala de 3 colores"
              },
              valueTypes: {
                  number: "Número",
                  lowestValue: "Valor más bajo",
                  highestValue: "Valor mayor",
                  percent: "Porcentaje",
                  percentile: "Percentil",
                  formula: "Fórmula"
              }
          },
          iconSets: {
              title: "Conjuntos de iconos",
              labels: {
                  style: "Estilo",
                  showIconOnly: "Mostrar sólo el icono",
                  reverseIconOrder: "Invertir el orden de los iconos",

              },
              types: {
                  threeArrowsColored: "Tres flechas de color",
                  threeArrowsGray: "Tres flechas grises",
                  threeTriangles: "Tres triángulos",
                  threeStars: "Tres estrellas",
                  threeFlags: "Tres banderas",
                  threeTrafficLightsUnrimmed: "Tres semáforos no están ocupados",
                  threeTrafficLightsRimmed: "Tres semáforos están ocupados",
                  threeSigns: "Tres signos",
                  threeSymbolsCircled: "Tres símbolos con círculo",
                  threeSymbolsUncircled: "Tres símbolos sin círculo",
                  fourArrowsColored: "Cuatro flechas de color",
                  fourArrowsGray: "Cuatro flechas grises",
                  fourRedToBlack: "Cuatro RedToBlack",
                  fourRatings: "Cuatro Ratings",
                  fourTrafficLights: "Cuatro semáforos",
                  fiveArrowsColored: "Cinco flechas de color",
                  fiveArrowsGray: "Cinco flechas grises",
                  fiveRatings: "Cinco Ratings",
                  fiveQuarters: "Cinco Quarters",
                  fiveBoxes: "Cinco Cajas"
              },
              valueTypes: {
                  number: "Número",
                  percent: "Porcentaje",
                  percentile: "Percentil",
                  formula: "Fórmula"
              }
          },
          removeConditionalFormat: {
              title: "Ninguno"
          }
      },
      operators: {
          cellValor: {
              types: {
                  equalsTo: "Igual a",
                  notEqualsTo: "No igual a",
                  greaterThan: "Mayor que",
                  greaterThanOrEqualsTo: "Mayor que o Igual a",
                  lessThan: "Menor que",
                  lessThanOrEqualsTo: "Menor que o Igual a",
                  between: "Entre",
                  notBetween: "No Entre"
              }
          },
          specificText: {
              types: {
                  contains: "Contiene",
                  doesNotContain: "No contiene",
                  beginsWith: "Comienza por",
                  endsWith: "Termina en"
              }
          },
          dateOccurring: {
              types: {
                  today: "Hoy",
                  yesterday: "Ayer",
                  tomorrow: "Mañana",
                  last7Days: "Últimos 7 días",
                  thisMonth: "Este mes",
                  lastMonth: "El mes pasado",
                  nextMonth: "El próximo mes",
                  thisWeek: "Esta semana",
                  lastWeek: "La semana pasada",
                  nextWeek: "La próxima semana"
              }
          },
          top10: {
              types: {
                  top: "Superior",
                  bottom: "Inferior"
              }
          },
          average: {
              types: {
                  above: "Por encima",
                  below: "Por debajo",
                  equalOrAbove: "Igual o superior",
                  equalOrBelow: "Igual o inferior",
                  above1StdDev: "Por encima de la primera desviación estándar",
                  below1StdDev: "Por debajo primera desviación estándar",
                  above2StdDev: "Por encima de la segunda desviación estándar",
                  below2StdDev: "Por debajo de la segunda desviación estándar",
                  above3StdDev: "Por encima de la tercera desviación estándar",
                  below3StdDev: "Por debajo de la tercera desviación estándar"
              }
          }
      },
      texts: {
          cells: "Formatear sólo las celdas con:",
          rankIn: "Formatear los valores que se clasifican en el:",
          inRange: "valores en el rango seleccionado.",
          values: "Formatear los valores que sean:",
          average: "el promedio para el rango seleccionado.",
          allValuesBased: "Formatear todas las celdas en base a sus valores:",
          all: "Formatear todo:",
          and: "y",
          formatStyle: "utilizar estilo",
          showIconWithRules: "Mostrar cada icono de acuerdo con estas reglas:"
      },
      formatSetting: {
          formatUseBackColor: "Color de fondo",
          formatUseForeColor: "ForeColor",
          formatUseBorder: "Borde"
      }
  },
  cellTypes: {
      title: "Tipos de celdas",
      buttonCellType: {
          title: "ButtonCellType",
          values: {
              marginTop: "Margen-Superior",
              marginRight: "Margen-Derecha",
              marginBottom: "Margen-Inferior",
              marginLeft: "Margen-Izquierda",
              text: "Texto",
              backColor: "Color de fondo"
          }
      },
      checkBoxCellType: {
          title: "Tipo de celda Casilla de selección",
          values: {
              caption: "Caption",
              textTrue: "TextTrue",
              textIndeterminate: "TextIndeterminate",
              textFalse: "TextFalse",
              textAlign: {
                  title: "TextAlign",
                  values: {
                      top: "Superior",
                      bottom: "Inferior",
                      left: "izquierda",
                      right: "Derecha"
                  }
              },
              isThreeState: "3 estados"
          }
      },
      comboBoxCellType: {
          title: "Tipo de celda Combo Box",
          values: {
              editorValueType: {
                  title: "EditorValorType",
                  values: {
                      text: "Texto",
                      index: "Índice",
                      value: "Valor"
                  }
              },
              itemsText: "Texto de los elementos",
              itemsValor: "Valor de los elementos"
          }
      },
      hyperlinkCellType: {
          title: "Tipo de celda Hipervinculo",
          values: {
              linkColor: "Color del enlace",
              visitedLinkColor: "Color del enlace visitado",
              text: "Texto",
              linkToolTip: "Consejo enlace",
              address: "Dirección"
          }
      },
      clearCellType: {
          title: "Ninguno"
      },
      setButton: "Fijar",
      insertButton: "Insertar"
  },
  sparklineDialog: {
      title: "Parámetros SparklineEx",
      detail: "Parámetros SparklineEx detalles",
      sparklineExType: {
          title: "Tipo",
          values: {
              line: "Línea",
              column: "Columna",
              winLoss: "Pérdidas y\nGanancias",
              pie: "Circular",
              area: "Area",
              scatter: "Dispersión",
              spread: "Dispersión",
              stacked: "Apilado",
              bullet: "Puntos",
              hbar: "Hbar",
              vbar: "Vbar",
              variance: "Varianza",
              boxplot: "BoxPlot",
              cascade: "Cascada",
              pareto: "Pareto"
          }
      },
      lineSparkline: {
          dataRange: "Rango de datos",
          locationRange: "Rango de ubicación",
          dataRangeError: "¡Rango de datos invalido!",
          singleDataRange: "Rango de datos debe estar en una sola fila o columna.",
          locationRangeError: "¡Rango de ubicación no válido!"
      },
      bulletSparkline: {
          measure: "Medida",
          target: "Objetivo",
          maxi: "Maxi",
          forecast: "Promedio",
          good: "Bueno",
          bad: "Malo",
          tickunit: "Tickunit",
          colorScheme: "Esquema de colores",
          vertical: "Vertical"
      },
      hbarSparkline: {
          value: "Valor",
          colorScheme: "Esquema de colores"
      },
      varianceSparkline: {
          variance: "Varianza",
          reference: "Referencia",
          mini: "Mini",
          maxi: "Maxi",
          mark: "Mark",
          tickunit: "TickUnit",
          colorPositive: "ColorPositive",
          colorNegative: "ColorNegative",
          legend: "Leyenda",
          vertical: "Vertical"
      }
  },
  barCodeDialog: {
      title: "Configuración BarCode",
      detail: "Configuración BarCode Detail",
      barCodeType: {
          title: "Tipo",
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
          dataRange: "Rango de datos",
          locationRange: "Rango de ubicación",
          dataRangeError: "¡Rango de datos inválido!",
          singleDataRange: "Rango de datos debe estar en una sola fila o columna.",
          locationRangeError: "¡Rango de ubicación inválido!",
          color: "Color",
          backgroundColor: "Color de fondo",
      },
      gs1_128:{
          showLabel: "Mostrar etiqueta",
          labelPosition: "Posición de la etiqueta"
      },
      ean13:{
          addOn: "Añadir el texto QRCode",
          addOnLabelPosition: "Añadir en la posición de la etiqueta"
      },
      codaBar:{
          checkDigit: "Dígito de control",
          nwRatio: "Radio de barras anchas y estrechas"
      },
      code39:{
          labelWithStartAndStopCharacter: "Etiqueta con caracter",
          nwRatio: "Radio de barras anchas y estrechas",
      },
      code49:{
          grouping: "Agrupar",
          groupNo: "No agrupar"
      },
      code93:{
          checkDigit: "Dígito de control",
          fullASCII: "Full ASCII"
      },
      code128:{
          codeSet: "Code Set"
      },
      pdf417:{
          errorCorrectionLevel: "Nivel de corrección de errores",
          rows: "líneas",
          columns: "Columnas",
          compact: "Compacto"
      },
      dataMatrix:{
          eccMode: "Modo Ecc",
          ecc200SymbolSize: "Ecc200 Symbol Size",
          ecc200EndcodingMode: "Ecc200 Endcoding Mode",
          ecc00_140Symbole: "Ecc00_140 Symbole",
          structureAppend: "Structure Append",
          structureNumber: "Número de estructura",
          fileIdentifier: "Identificador de archivos"
      },
      qrCode:{
          errorCorrectionLevel: "Nivel de corrección de errores",
          model: "Modelo",
          version: "Versión",
          mask: "Máscara",
          connection: "Conexión",
          connectionNo: "Sin conexión",
          charCode: "Char Code",
          charset: "Charset"
      },
      setButton: "Fijar"
  },
  slicerDialog: {
      insertSlicer: "Insertar Slicer"
  },
  tooltips: {
      style: {
          fontBold: "Marque el texto en negrita.",
          fontItalic: "Marque el texto en itálica",
          fontUnderline: "Subraye el texto.",
          fontDoubleUnderline: "Doble subrayado de texto.",
          fontOverline: "Texto superpuesto.",
          fontLinethrough: "Texto tachado."
      },
      alignment: {
          leftAlign: "Alinear a la izquierda.",
          centerAlign: "Centrar texto.",
          rightAlign: "Alinear texto a la derecha.",
          topAlign: "Alinear texto en la parte superior.",
          middleAlign: "Alinear texto al centro.",
          bottomAlign: "Alinear texto en la parte inferior.",
          decreaseIndent: "Disminuir la indentación.",
          increaseIndent: "Aumentar la indentación."
      },
      border: {
          outsideBorder: "Borde exterior",
          insideBorder: "Borde interior",
          allBorder: "Todos los bordes",
          leftBorder: "Borde izquierdo",
          innerVertical: "Vertical interior",
          rightBorder: "Borde derecho",
          topBorder: "Borde superior",
          innerHorizontal: "Horizontal interior",
          bottomBorder: "Borde inferior",
          noBorder: "Ninguno",
          diagonalUpLine: "Línea diagonal ascendente",
          diagonalDownLine: "Línea diagonal descendente",
      },
      format: {
          percentStyle: "Estilo de porcentaje",
          commaStyle: "Comma Style",
          increaseDecimal: "Aumentar los decimales",
          decreaseDecimal: "Disminuir los decimales"
      }
  },
  defaultTexts: {
      buttonText: "Botón",
      checkCaption: "Verificar",
      comboText: "United States,China,Japan",
      comboValue: "US,CN,JP",
      hyperlinkText: "DispersiónJS",
      hyperlinkToolTip: "DispersiónJS Web Site",
      hyperlinkAddress: "http://www.grapecity.com/en/spreadjs"
  },
  messages: {
      invalidImportFile: "Archivo inválido, la importación falló.",
      duplicatedSheetName: "Nombre de la hoja duplicada.",
      duplicatedTableName: "Nombre de la tabla duplicada.",
      rowColumnRangeRequired: "Por favor, seleccione un rango de fila o columna.",
      imageFileRequired: "¡El archivo debe ser una imagen!",
      duplicatedSlicerName: "Nombre de slicer duplicado.",
      invalidSlicerName: "El nombre del slicer no es válido."
  },
  contextMenu: {
      cutItem: "Cortar",
      copyItem: "Copiar",
      pasteItem: "Pegar",
      insertItem: "Insertar",
      deleteItem: "Eliminar",
      mergeItem: "Fusionar",
      unmergeItem: "Desunir"
  },
  dialog: {
      ok: "OK",
      cancel: "Cancelar"
  },
  find: {
      title: "Buscar",
      options: "Opciones",
      findwhat: "Buscar que",
      within: { title: "En", worksheet: "Hoja de trabajo", workbook: "Workbook" },
      searchby: { title: "Buscar por", rows: "Líneas", columns: "Columnas" },
      lookin: { title: "Buscar en", values: "Valores", formulas: "Formulas" },
      matchcase: "Coincidir mayúsc. y minúsc.",
      matchexactly: "Coincide exactamente",
      usewildcards: "Utilizar caracteres genéricos",
      findall: "Buscar todo",
      findnext: "Buscar siguiente",
      result: {
          header: {
              sheet: "Hoja",
              cell: "Celda",
              value: "Valor",
              formula: "Fórmula"
          },
          countssuffix: " celda(s) encontradas",
          nomatch: "La dispersión no puede encontrar los datos que busca."
      }
  },
  printSetting: {
      printButton: "Imprimir",
      options: {
          title: "Opciones",
          range: {
              title: "Imprimir rango",
              items: {
                  activeSheet: "Hoja activa",
                  workbook: "Todo el libro de trabajo"
              }
          },
          showBorder: "Mostrar vorde",
          showGridline: "Mostrar cuadrícula",
          headerAndFooter: {
              title: "Encabezado / Pie de página",
              header: {
                  title: "Encabezado",
                  items: [
                      { text: "(ninguno)" },
                      { value: { center: "Página &P" } },
                      { value: { right: "&A" } },
                      { value: { center: "Página &P", right: "&A" } }
                  ],
                  custom: "Encabezado personalizado"
              },
              footer: {
                  title: "Pie de página",
                  items: [
                      { text: "(ninguno)" },
                      { value: { center: "Página &P of &N" }  },
                      { value: { left: "&BConfidential&B", center: "&D", right: "Página &P" }}
                  ],
                  custom: "Personalizado Pie de página"
              },
              custom: {
                left: "Sección izquierda",
                center: "Sección centro",
                right: "Sección derecha",
                items: [
                    { text: "(ninguno)" },
                    { text: "Página número", value: "&P" },
                    { text: "Total páginas", value: "&N" },
                    { text: "Nombre de hoja ", value: "&A" },
                    { text: "Nombre de libro de trabajo ", value: "&F" },
                    { text: "Fecha actual", value: "&D" },
                    { text: "Fecha y hora actual", value: "&D &T"}
                  ],
                  insert: "Insertar",
                  image: {
                      value: "&G",
                      emptylist: "(navegar...)"
                  },
                  insertPicture: "Insertar imagen",
                  tooltips: {
                      insert: "Seleccione la sección y posicione el punto de inserción, luego elija el elemento a insertar.",
                      insertPicture: "Seleccione la sección y posicione el punto de inserción, luego elija una imagen cargada para insertarla.",
                      imageList: "Navegue y seleccione la imagen a subir para el encabezado / pie de página. Sugerimos que la imagen no sea más grande que 200px x 200px."
                  }
              },
              preview: "Vista previa"
          }

      }
  },
  fileMenu: {
    items: {
        new: "Nuevo",
        save: "Guardar",
          password: "Contraseña:",
          browse:"Navegar",
          close: "Cerrar",
          filename:"Nombre de archivo:",
        open: {
            title: "Abrir"
        },
        print: {
            title: "Imprimir"
        },
        settings: {
            title: "Configuraciones"
        }
    }
  },
  settingPane: {
    title: {
        comment: "Comentario",
        slicer: "Slicer",
    }
  },
  functions: {
      setting: {
          defaultDescription: "Seleccione una función y obtenga su descripción.",
          filterPlaceHolder: "Función de búsqueda"
      },
      categories: {
          datebase: {
              text: "Base de datos",
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
              text: "Fecha y Hora",
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
              text: "Ingeniería",
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
              text: "Financiero",
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
              text: "Información",
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
              text: "Lógica",
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
              text: "Buscar y Referencia",
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
              text: "Matemática y trigonometría",
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
              text: "Estadística",
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
              text: "Texto",
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
          axes:'Ejes',
          moreAxisOption:'Más opciones de eje'
      },
      axisTitles:{
          axisTitles:'Títulos de ejes',
          moreAxisTítulosOption:'Opciones de más títulos de ejes'
      },
      chartTitle:{
          chartTitle:'Título del gráfico',
          moreChartTitleOption:'pciones de más títulos del gráfico'
      },
      gridLines:{
          gridLines:'Cuadrícula',
          moreGridLinesOption:'Opciones de más cuadrículas'
      },
      dataLabels:{
          dataLabels:'Etiqueta de datos',
          moreDataLabelsOption:'Más opciones de etiquetas'
      },
      legend:{
          legend:'Leyenda',
          moreLegendOption:'Más opciones de leyendas'
      },
      primaryHorizontal:'Horizontal primario',
      primaryVertical:'Vertical primario',
      secondaryHorizontal:'Horizontal secundario',
      secondaryVertical:'Vertical secundario',
      none:'Ninguno',
      aboveChart:'Arriba del gráfico',
      primaryMajorHorizontal:'horizontal primario',
      primaryMajorVertical:'vertical primario',
      primaryMinorHorizontal:'Horizontal primario secundario',
      primaryMinorVertical:'Vertical primaria secundaria',
      secondaryMajorHorizontal:'Horizontal secundaria primaria',
      secondaryMajorVertical:'Vertical secundaria primaria',
      secondaryMinorHorizontal:'Horizontal secundaria secundaria ',
      secondaryMinorVertical:'Vertical secundaria secundaria',
      center:'Centro',
      insideEnd:'Dentro del extremo',
      outsideEnd:'Fuera del final',
      bestFit:'Mejor ajuste',
      above:'Arriba',
      below:'Abajo',
      show:'Mostrar',
      right:'Derecha',
      top:'Superior',
      left:'Izquierda',
      bottom:'Inferior'
  },
  richTextDialog: {
      editRichText: "Editar texto enriquecido",
      title:"Texto enriquecido",
      font:"Font",
      size:"Tamaño",
      bold:"Negrita",
      italic:"Itálica",
      underline:"Subrayado",
      strikethrough:"Tachado",
      colorPicker:"Selector de color",
      superScript:"superíndice",
      subScript:"Subíndice"
  },
  shape: {
      connector: 'Línea',
      blockArrows: 'Flechas de bloque',
      flowchart: 'Diagrama de flujo',
      callouts: 'Llamadas',
      rectangles: 'Rectángulos',
      equationShapes:'Formas de ecuación',
      basicShapes: 'Formas básicas',
      starsAndBanners: 'Cintas y estrellas'
  }
};
