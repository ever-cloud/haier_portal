(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
        '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
    ];
}));


//主题函数
function Theme() {
    //自定义主题内容
    var theme = {
        "seriesCnt": "5",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333",
        "subtitleColor": "#aaa",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#336699",
            "#6699cc",
            "#99ccff",
            "#ccffff",
            "#ffff33"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeTwo =  {
        "seriesCnt": "2",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#ffff33",
            "#99ccff"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeThree =  {
        "seriesCnt": "3",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#333333",
        "color": [
            "#336699",
            "#6699cc",
            "#ffff33"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeFour = {
        "seriesCnt": "2",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#333333",
        "color": [
            "#336699",
            "#99ccff"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeFive = {
        "seriesCnt": 3,
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#297fce",
            "#d3a0e0",
            "#5366f3"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeSix =  {
        "seriesCnt": 3,
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#99ccff",
            "#202461",
            "#486fbd"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeSeven = {
        "seriesCnt": 3,
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#ecc903",
            "#202461",
            "#486fbd"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeEight = {
        "seriesCnt": 3,
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eeeeee",
        "color": [
            "#ffbe3d",
            "#5a5698",
            "#6786e5"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeNine = {
        "seriesCnt": "2",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eeeeee",
        "color": [
            "#fd7389",
            "#6e7eb2"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeTen = {
        "seriesCnt": "2",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eeeeee",
        "color": [
            "#6e87d7"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeEleven ={
        "seriesCnt": "5",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333",
        "subtitleColor": "#aaa",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#d3a0e0",
            "#99ccff",
            "#99ccff",
            "#6699cc",
            "#336699"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeTwelve = {
        "seriesCnt": "7",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#3f6fb2",
            "#5882bc",
            "#7197c5",
            "#8ba8d0",
            "#a5bddc",
            "#becde4",
            "#dae3ec"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "ͨ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "��Ŀ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "��ֵ������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "����������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "ʱ��������",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeThreeteen={
        "seriesCnt": "5",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#72a6ed",
            "#4887d9",
            "#457ec5",
            "#406eab",
            "#3f628d"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeFourteen={
        "seriesCnt": "5",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#90becb",
            "#e2f160",
            "#6569c2",
            "#4c4270",
            "#e8d02b"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeFiveteen={
        "seriesCnt": "6",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#95c1de",
            "#e7f664",
            "#6a6ec9",
            "#81aeb9",
            "#54497b",
            "#efd331"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    }
    var themeSixteen={
        "seriesCnt": "3",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333333",
        "subtitleColor": "#333333",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#6c6388",
            "#e7d155",
            "#8286cb"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeSeventeen={
        "seriesCnt": "7",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333",
        "subtitleColor": "#aaa",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#336699",
            "#6699cc",
            "#93bcd8",
            "#99ccff",
            "#ccffff",
            "#ffd278",
            "#6569c2"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    };
    var themeEightteen={
        "seriesCnt": "3",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "titleColor": "#333",
        "subtitleColor": "#000000",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#eee",
        "color": [
            "#99ccff",
            "#ecc903",
            "#1b85cb"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ],
        "legendTextColor": "#333",
        "kColor": "#c23531",
        "kColor0": "#314656",
        "kBorderColor": "#c23531",
        "kBorderColor0": "#314656",
        "kBorderWidth": 1,
        "lineWidth": 2,
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "symbolBorderWidth": 1,
        "lineSmooth": false,
        "graphLineWidth": 1,
        "graphLineColor": "#aaa",
        "mapLabelColor": "#000",
        "mapLabelColorE": "rgb(100,0,0)",
        "mapBorderColor": "#444",
        "mapBorderColorE": "#444",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eee",
        "mapAreaColorE": "rgba(255,215,0,0.8)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": true,
        "toolboxColor": "#999",
        "toolboxEmpasisColor": "#666",
        "tooltipAxisColor": "#ccc",
        "tooltipAxisWidth": 1,
        "timelineLineColor": "#293c55",
        "timelineLineWidth": 1,
        "timelineItemColor": "#293c55",
        "timelineItemColorE": "#a9334c",
        "timelineCheckColor": "#e43c59",
        "timelineCheckBorderColor": "rgba(194,53,49, 0.5)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#293c55",
        "timelineControlBorderColor": "#293c55",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#293c55",
        "datazoomBackgroundColor": "rgba(47,69,84,0)",
        "datazoomDataColor": "rgba(47,69,84,0.3)",
        "datazoomFillColor": "rgba(167,183,204,0.4)",
        "datazoomHandleColor": "#a7b7cc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#333"
    }

    //获取主题通过判断
    this.getTheme = function (name) {
        if (name == "theme") {
            return theme;
        } else if (name == "themeTwo") {
            return themeTwo;
        } else if (name == "themeThree") {
            return themeThree;
        } else if (name == "themeFour") {
            return themeFour;
        } else if (name == "themeFive") {
            return themeFive;
        } else if (name == "themeSix") {
            return themeSix;
        } else if (name == "themeSeven") {
            return themeSeven;
        } else if (name == "themeEight") {
            return themeEight;
        } else if (name == "themeNine") {
            return themeNine;
        } else if (name == "themeTen") {
            return themeTen;
        } else if (name == "themeEleven") {
            return themeEleven;
        } else if (name == "themeTwelve") {
            return themeTwelve;
        } else if (name == "themeThreeteen") {
            return themeThreeteen;
        }
        else if (name == "themeFourteen") {
            return themeFourteen;
        }
        else if (name == "themeFiveteen") {
            return themeFiveteen;
        }
        else if (name == "themeSixteen") {
            return themeSixteen;
        }
        else if (name == "themeSeventeen") {
            return themeSeventeen;
        }else if (name == "themeEightteen") {
            return themeEightteen;
        }
    }
}
//实例化
var theme = new Theme();
//注册主题第一个参数是主题名称，第二个是调用的主题的名称
echarts.registerTheme("themeEightteen", theme.getTheme("themeEightteen"));
echarts.registerTheme("themeSeventeen", theme.getTheme("themeSeventeen"));
echarts.registerTheme("themeSixteen", theme.getTheme("themeSixteen"));
echarts.registerTheme("themeFiveteen", theme.getTheme("themeFiveteen"));
echarts.registerTheme("themeFourteen", theme.getTheme("themeFourteen"));
echarts.registerTheme("themeThreeteen", theme.getTheme("themeThreeteen"));
echarts.registerTheme("themeTwelve", theme.getTheme("themeTwelve"));
echarts.registerTheme("themeEleven", theme.getTheme("themeEleven"));
echarts.registerTheme("themeTen", theme.getTheme("themeTen"));
echarts.registerTheme("themeNine", theme.getTheme("themeNine"));
echarts.registerTheme("themeEight", theme.getTheme("themeEight"));
echarts.registerTheme("themeSeven", theme.getTheme("themeSeven"));
echarts.registerTheme("themeSix", theme.getTheme("themeSix"));
echarts.registerTheme("themeFive", theme.getTheme("themeFive"));
echarts.registerTheme("themeFour", theme.getTheme("themeFour"));
echarts.registerTheme("themeThree", theme.getTheme("themeThree"));
echarts.registerTheme("themeTwo", theme.getTheme("themeTwo"));
echarts.registerTheme("theme", theme.getTheme("theme"));
