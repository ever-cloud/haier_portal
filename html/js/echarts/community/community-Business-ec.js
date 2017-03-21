getechart("ecExportnew", "themeEight",{
    "title": {
        "text": "平台访问量分析",
        "left": "5%",
        "textStyle": {
            "fontSize": "14",
            //"color": "#000",
            "fontFamily": "SimSun"
        },
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "right": "20%",
        "top": "5%",
        "data": [
            "访问量",
            "PV",
            "UV"
        ]
    },
    //"toolbox": {
    //    "feature": {
    //        "saveAsImage": {}
    //    }
    //},
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "containLabel": true,
        "height": "60%"
    },
    "xAxis": [
        {
            "type": "category",
            "boundaryGap": false,
            "data": [
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
                "周日"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value"
        }
    ],
    "series": [
        //{
        //    "name": "访问量",
        //    "type": "line",
        //    "stack": "总量",
        //    "areaStyle": {
        //        "normal": {}
        //    },
        //    "data": [
        //        120,
        //        132,
        //        101,
        //        134,
        //        90,
        //        230,
        //        210
        //    ]
        //},
        {
            "name": "PV",
            "type": "line",
            "stack": "总量",
            "areaStyle": {
                "normal": {}
            },
            "data": [
                220,
                182,
                191,
                234,
                290,
                330,
                310
            ]
        },
        {
            "name": "UV",
            "type": "line",
            "stack": "总量",
            "areaStyle": {
                "normal": {}
            },
            "data": [
                150,
                232,
                201,
                154,
                190,
                330,
                410
            ]
        }
    ]
});
getechart("ecMonthnew", "theme",{
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['成交额','已发货', '已评价'],
        "top":'4%',
        "right":'10%'
    },
    "grid": {

        "height": "60%"
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '已发货(件)',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '成交额(万元)',
            min: 0,
            max: 300,
            interval: 60,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '已发货',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '成交额',
            type: 'bar',

            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '已评价',
            type: 'line',
            yAxisIndex: 1,

            data: [2.0, 9.0, 26.4,28.7, 70.7, 175.6, 182.2,23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
});
getechart("ecDeucenew", "theme",{
    "title": {
        "text": "商家类别分布",
        "top":"10",
        "x": "20%",
        'y':'bottom'
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "bottom": "center",
        "orient": "vertical",
        "right": "1%",
        "data": [
            "普通食品",
            "教育服务",
            "社区服务",
            "其他"
        ]
    },
    "series": [
        {
            "name": "商家类别",
            "type": "pie",
            "radius": [
                "40%",
                "60%"
            ],
            "center":['40%',"60%"],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": "16",
                        "fontWeight": "bold"
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
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
            ]
        }
    ]
});
getechart("ecEqualnew", "theme",{
    "title": {
        "text": "商品类别销售占比",
        "top":"10",
        "x": "center",
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "bottom": "center",
        "orient": "vertical",
        "right": "1%",
        "data": [
            "粮油",
            "酒水",
            "其他"
        ]
    },
    "series": [
        {
            "name": "商品类别销售",
            "type": "pie",
            "radius": [
                "40%",
                "60%"
            ],
            "center":['50%',"60%"],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": "16",
                        "fontWeight": "bold"
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [
                {
                    "value": 335,
                    "name": "粮油"
                },
                {
                    "value": 234,
                    "name": "酒水"
                },
                {
                    "value": 135,
                    "name": "其他"
                }
            ]
        }
    ]
});
getechart("ecOrderservenew", "themeSeventeen",{

    title: {
        "text": "集团商业服务订单状况分布",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"
        },

        "x": "center",
        "y":"5%"
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //legend: {
    //    orient: 'vertical',
    //    left: 'left',
    //    data: ['已结束', '已完成,已评价', '已发货', '付款成功', '线下支付待审核','待付款','已取消']
    //},
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 365, name: '已结束'},
                {value: 355, name: '已完成,已评价'},
                {value: 310, name: '已发货'},
                {value: 203, name: '付款成功'},
                {value: 184, name: '线下支付待审核'},
                {value: 135, name: '待付款'},
                {value: 123, name: '已取消'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#000'//控制上面name名称的线及颜色
                    }
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
                    lineStyle: {
                        color: '#000'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
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