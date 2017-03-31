getechart("ecHouse", "themeFour", {
    title: {
        x: 'left',
        text: '     3296  140   56   234',
        subtext: '         总用户数     户数   注册用户数   活跃用户数',

        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        }
    },
    tooltip: {
        trigger: 'item'
    },

    grid: {
        height: '50%'
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            data: ['201403', '201406', '201409', '201412', '201503', '201506', '201509', '201512', '201603', '201606', '201609']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
            boundaryGap: ['1%', '1%']
        }
    ],

    series: [
        {
            name: '用户总数',
            type: 'bar',
            itemStyle: {
                normal: {
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
getechart("ecHome", "themeFour", {
    title: {
        x: 'left',
        text: '     3296  240   56   134',
        subtext: '         总用户数     户数   注册用户数   活跃用户数',
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        //padding:[200,0,0,0],
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        }
    },
    //center:['80%','50%'],
    tooltip: {
        trigger: 'item'
    },

    grid: {
        height: '50%'
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            data: ['201403', '201406', '201409', '201412', '201503', '201506', '201509', '201512', '201603', '201606', '201609'],
            boundaryGap: ['1%', '1%']
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

                    label: {
                        show: true,
                        position: 'top',
                        formatter: '\n{c}'
                    }
                }
            },
            data: [1000, 1200, 1280, 2000, 2378, 2600, 3000, 3225, 3320, 3400, 3606]

        }

    ]
});
getechart("ecBloctop", "theme", {

    title: {
        text: '用户构成情况',
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
            name: '用户构成情况',
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
getechart("ecBlocbottom", "theme", {

    title: {
        text: '活跃用户构成情况',
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
            name: '活跃用户构成情况',
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
getechart("ecExcellent", "theme", {
    "title": {
        "text": "月销售趋势图",
        "x": "10%",
        "top": "30",
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "13%",
        "right":"5%",
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
        "left": "20%",
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
            "xAxisIndex": 1,
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
getechart("ecEducation", "theme", {
    "title": {
        "text": "90天商户类别分布",
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
            "name": "商品分布",
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
getechart("ecGender", "themeNine", {
    "title": {
        "text": "性别分布",
        "x": "10%"
        //"y":"10%"
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "show": false,
        "orient": "vertical",
        "x": "left",
        "bottom": "50%",
        "data": [
            "男",
            "女"
        ]
    },
    "series": [
        {
            "name": "性别",
            "type": "pie",
            "selectedMode": "single",
            "radius": [
                0,
                "30%"
            ],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: "#000000"

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
                    "value": 64,
                    "name": "女",
                    "selected": true
                },
                {
                    "value": 36,
                    "name": "男"
                }
            ]
        },
        {
            "name": "访问来源",
            "type": "pie",
            "radius": [
                "40%",
                "55%"
            ],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: "#000000"
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
                    "value": 64,
                    "name": "女",
                    "selected": true
                },
                {
                    "value": 36,
                    "name": "男"
                }
            ]
        }
    ]
});
getechart("ecAge", "themeTen", {
    "title": {
        "text": "年龄分布",
        "x": "left"
    },
    "color": [
        "#3398DB"
    ],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
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
            "data": [
                "19岁及以下",
                "20-29岁",
                "30-39岁",
                "40-49岁"
            ],
            "axisTick": {
                "alignWithLabel": true
            }
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "用户数(万人)",
            "position": "right",
            //"axisLabel": {
            //    "formatter": "{value}"
            //},
            //"max": "100"
        }
    ],
    "series": [
        {
            "name": "直接访问",
            "type": "bar",
            "barWidth": "60%",
            "data": [
                10,
                27,
                20,
                13
            ]
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
