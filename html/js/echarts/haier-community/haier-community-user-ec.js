getechart("ecHouse_com", "themeFour", {
    title: [
        {
            x: '10%',
            text: '3296',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '25%',
            text: '140',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '40%',
            text: '56',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '55%',
            text: '234',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '10%',
            subtext: '总用户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
        },
        {
            x: '25%',
            subtext: '户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '40%',
            subtext: '注册用户数',

            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '55%',
            subtext: '活跃用户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },


    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        height: '50%'
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            data: ['201403', '201406', '201409', '201412', '201503', '201506', '201509', '201512', '201603', '201606', '201609'],
            boundaryGap: ['1%', '1%'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
            boundaryGap: false
        }
    ],

    series: [
        {
            name: '用户总数',
            type: 'bar',
            itemStyle: {
                normal: {
                    //color: function (params) {
                    //    // build a color prototypeRoom-map as your need.
                    //    var colorList = [
                    //        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                    //        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    //        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    //    ];
                    //    return colorList[params.dataIndex]
                    //},
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '\n{c}'
                    }
                }
            },
            data: [1000, 1200, 1280, 2000, 2378, 2600, 3000, 3225, 3320, 3400, 3605]

        }

    ]
});
getechart("ecHome_com", "themeFour", {
    title: [
        {
            x: '10%',
            text: '32990',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '25%',
            text: '140',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '40%',
            text: '560',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '55%',
            text: '234',
            "textStyle": {
                "fontSize": "26",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '10%',
            subtext: '总用户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '25%',
            subtext: '户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",

        },
        {
            x: '40%',
            subtext: '注册用户数',

            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },
        {
            x: '55%',
            subtext: '活跃用户数',
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"

            },
            "textAlign":"center",
        },


    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        height: '50%'
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            data: ['201403', '201406', '201409', '201412', '201503', '201506', '201509', '201512', '201603', '201606', '201609'],
            boundaryGap: ['1%', '1%'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
            boundaryGap: false
        }
    ],

    series: [
        {
            name: '用户总数',
            type: 'bar',
            itemStyle: {
                normal: {
                    //color: function (params) {
                    //    // build a color prototypeRoom-map as your need.
                    //    var colorList = [
                    //        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                    //        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    //        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    //    ];
                    //    return colorList[params.dataIndex]
                    //},
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '\n{c}'
                    }
                }
            },
            data: [1000, 1200, 1280, 2000, 2378, 2600, 3000, 3225, 3320, 3400, 3605]

        }

    ]
});
getechart("ecBloctop_com", "theme", {

    title: {
        text: '当月用户构成情况',
        x: "20%",
        "textStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: '70%',
        y: '60%',
        color: ['pink', 'blue'],
        data: ["住户", "商家"]
    },
    series: [
        {
            name: '当月用户构成情况',
            type: 'pie',
            radius: ['70%', '50%'],  //前面半径控制大小，后面半径控制粗细
            center: ["40%", "55%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '住户'},
                {value: 234, name: '商家'}
            ]
        }
    ]
});
getechart("ecBlocbottom_com", "theme", {

    title: {
        text: '当月活跃用户构成情况',
        x: "20%",
        "textStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: '70%',
        y: '60%',
        color: ['pink', 'blue'],
        data: ["住户", "商家"]
    },
    series: [
        {
            name: '当月活跃用户构成情况',
            type: 'pie',
            radius: ['70%', '50%'],  //前面半径控制大小，后面半径控制粗细
            center: ["40%", "55%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '住户'},

                {value: 234, name: '商家'}

            ]
        }
    ]
});
getechart("ecExcellent_com", "theme", {
    "title": {
        "text": "月销售趋势图",
        "x": "10%",
        "top": "15",
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "13%",
        "right": "5%",
        "data": [
            "订单量",
            "成交额"
        ]
    },
    "dataZoom": {
        "show": false,
        "start": 0,
        "end": 100
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "containLabel": true,
        "height": "70%"
    },
    "xAxis": [
        {
            "type": "category",
            "boundaryGap": true,
            "data": [
                "16-01",
                "16-02",
                "16-03",
                "16-04",
                "16-05",
                "16-06",
                "16-07",
                "16-08",
                "16-09"
            ]
        },
        {
            "type": "category",
            "boundaryGap": true,
            "data": [
                // "16-01",
                // "16-02",
                // "16-03",
                // "16-04",
                // "16-05",
                // "16-06",
                // "16-07",
                // "16-08",
                // "16-09"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "scale": true,
            "name": "订单量",
            "nameGap": 20,
            "max": 30,
            "min": 0,
            "boundaryGap": [
                0.2,
                0.2
            ]
        },
        {
            "type": "value",
            "scale": true,
            "name": "成交额",
            "nameGap": 20,
            "max": 1200,
            "min": 0,
            "boundaryGap": [
                0.2,
                0.2
            ]
        }
    ],
    "series": [
        {
            "name": "订单量",
            "type": "line",
            "data": [
                6,
                7,
                5,
                15,
                4,
                10,
                7,
                8,
                11
            ]
        },
        {
            "name": "成交额",
            "type": "bar",
            // "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                600,
                700,
                500,
                900,
                400,
                1100,
                700,
                800,
                1150
            ]
        }
    ]
});
getechart("ecEducation_com", "theme", {
    "title": {
        "text": "商户类别分布",
        "top": "30",
        "x": "center"
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "right": "5%",
        "bottom": "10%",
        "data": [
            "普通食品",
            "教育服务",
            "社区服务",
            "其他"
        ]
    },
    "series": [
        {
            "name": "商户类别分布",
            "type": "pie",
            "radius": "55%",
            "center": [
                "50%",
                "60%"
            ],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            "data": [
                {
                    "value": 335,
                    "name": "普通食品"
                },
                {
                    "value": 310,
                    "name": "教育服务"
                },
                {
                    "value": 234,
                    "name": "社区服务"
                },
                {
                    "value": 135,
                    "name": "其他"
                }
            ],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
});



function getechart(idName, themes, idOption) {
    var id = echarts.init(document.getElementById(idName), themes);
    var Option = idOption;
    id.setOption(Option);
    adaptionWindows(id);
}

function adaptionWindows(chartName) {
    window.addEventListener('resize', function () {
        chartName.resize();
    });
}
