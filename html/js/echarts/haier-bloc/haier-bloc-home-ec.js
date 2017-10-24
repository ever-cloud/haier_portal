getechart("ecBand", "theme", {
    title: {
        text: '246',
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap":3,
        subtext: '项目总数',
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        x: 'center',
        y:'7%'
    },
    grid: {
        //y:200,
        "left": "10%",
        "bottom": "20%",
        height: "15%"
    },
    legend:{
        show:true,
        data:['完工阶段','施工阶段','签约阶段'],
        orient:'vertical',
        //center:0,
        left:18,
        top:70,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: ['']
        }
    ],
    series: [
        {
            name: '完工阶段',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            barWidth:'25',
            data: [32]
        },
        {
            name: '施工阶段',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            data: [12]

        },
        {
            name: '签约阶段',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            data: [12]
        }
    ]
});
getechart("ecReduce", "theme", {
    "title": {
        "text": "3869",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "itemGap":1,
        "subtext": "总用户数",
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        //center:0,
        left: 40,
        top: 0,
        itemGap: 5,
        itemWidth: 15,
        itemHeight: 8,
        data: ['月活跃用户数', '月新增用户数']
    },
    "grid": {
        "left": "10%",
        "bottom": "2%",
        "containLabel": true,
        "height": "60%",
    },

    xAxis: {
        type: 'category',
        data: ['8月', '9月', '10月', '11月', '12月', '1月'],

    },
    yAxis: [
        {
            type: 'value',
            name: '月活跃用户数',
            min: 0,
            max: 5000,
            interval: 1000,
            axisLabel: {
                formatter: '{value}'
            },
            "boundaryGap": [
                '20%',
                '20%'
            ]

        },
        {
            type: 'value',
            name: '月新增用户数',
            min: 0,
            max: 5000,
            interval: 1000  ,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '月活跃用户数',
            type: 'line',
            //stack: '总量',
            data: [1900, 2600, 1400, 2390, 2500, 3049]
        },
        {
            name: '月新增用户数',
            type: 'line',
            yAxisIndex: 1,//有多个y轴时候使用
            data: [800, 900, 2900, 2090, 2000, 3069]
        },

    ]

});
getechart("ecDefeat", "theme", {
    "title": [{
        "text": "674,993",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "itemGap": 5,
        "x": "50%",
        "textAlign":"center",
    },
        {
            "text": "9",
            "textStyle": {
                "fontSize": "20",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "itemGap": 5,
            "x": "80%",
            "textAlign":"center",
        },
//padding:100,//内边距，控制两个标题距离
        {

            "subtext": "成交总额",
            "subtextStyle": {
                "fontSize": "12",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "itemGap": 5,
            "x": "50%",
            "textAlign":"center",
        },
        {

            "subtext": "总订单量",
            "subtextStyle": {
                "fontSize": "12",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "itemGap": 5,
            "x": "80%",
            "textAlign":"center",
        }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        //center:0,
        left: 40,
        top: 0,
        itemGap: 5,
        itemWidth: 15,
        itemHeight: 8,
        data: ['月成交额','月订单量']
    },
    "grid": {
        "left": "10%",
        "bottom": "2%",
        "containLabel": true,
        "height": "60%",
    },

    xAxis: {
        type: 'category',
        data: ['8月', '9月', '10月', '11月', '12月', '1月'],
    },
    yAxis: [
        {
            type: 'value',
            name: '月成交额',
            min: 0,
            max: 700000,
            //interval: 100000,
            axisLabel: {
                formatter: '{value}'
            },
            //"boundaryGap": [
            //    '20%',
            //    '20%'
            //]

        },
        {
            type: 'value',
            name: '月订单量',
            min: 0,
            max: 700,
            //interval: 100,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'月成交额',
            type:'line',
            //stack: '总量',
            data:[345893, 459087,87890, 90900, 509870,  74993]
        },
        {
            name: '月订单量',
            type: 'line',
            //stack: '总量',
            yAxisIndex: 1,
            data: [100, 530, 390, 199, 290, 440]
        }

    ]

});
getechart("ecFinish", "theme", {
    "title": {
        "text": "147",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap":3,
        "subtext": "报修状态",
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center",
        y:"-4%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['已完成','已受理','未受理'],
        orient:'vertical',
        //center:0,
        left:50,
        //top:1,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}',
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "height": "50",
        "containLabel": true
    },
    "xAxis": {
        "type": "value"
    },
    "yAxis": {
        "type": "category",
        "data": [
            ""
        ]
    },
    "series": [
        {
            "name": "已完成",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,

                        }
                    }
                }
            },
            "data": [
                101
            ]
        },
        {
            "name": "已受理",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,

                        }
                    }
                }
            },
            "data": [
                36
            ]
        },
        {
            "name": "未受理",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,

                        }
                    }
                }
            },
            "data": [
                10
            ]
        }
    ]
});
getechart("ecReceive", "theme", {
    "title": {
        "text": "120",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        //padding:100,//内边距，控制两个标题距离
        "itemGap": 3,
        "subtext": "建议状态",
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center",
        y:"-5%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['已完成','对话中'],
        orient:'vertical',
        //center:0,
        left:50,
        top:-5,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "height": "50",
        "containLabel": true
    },
    "xAxis": {
        "type": "value"
    },
    "yAxis": {
        "type": "category",
        "data": [
            ""
        ]
    },
    "series": [
        {
            "name": "已完成",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                88
            ]
        },
        {
            "name": "对话中",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                12
            ]
        }
        // ,
        // {
        //     "name": "新建议",
        //     "type": "bar",
        //     "stack": "总量",
        //     itemStyle: {
        //         normal: {
        //             label: {
        //                 show: true,
        //                 position: ['1','5'],
        //                 formatter: '{c}',
        //                 "textStyle": {
        //                     "color": "#ffffff",
        //                     "fontSize":12,
        //                 }
        //             }
        //         }
        //     },
        //     "data": [
        //         20
        //     ]
        // }
    ]
});
getechart("ecStart", "theme", {
    "title": {
        "text": "160",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap":3,
        "subtext": "设备在线数",
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center",
        "y":"-4%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['在线','非在线'],
        orient:'vertical',
        //center:0,
        left:50,
        top:10,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "height": "50",
        "containLabel": true
    },
    "xAxis": {
        "type": "value"
    },
    "yAxis": {
        "type": "category",
        "data": [
            ""
        ]
    },
    "series": [
        {
            "name": "在线",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                160
            ]
        },
        {
            "name": "非在线",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                40
            ]
        }
    ]
});
getechart("ecEnd", "theme", {
    "title": {
        "text": "56",
        "textStyle": {
            "fontSize": "20",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        padding: 10,//内边距，控制两个标题距离
        "itemGap": 3,
        "subtext": "设备故障数",
        "subtextStyle": {
            "fontSize": "12",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center",
        "y":'-8%'
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['故障','非故障'],
        orient:'vertical',
        //center:0,
        left:50,
        //top:10,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "height": "50",
        "containLabel": true
    },
    "xAxis": {
        "type": "value"
    },
    "yAxis": {
        "type": "category",
        "data": [
            ""
        ]
    },
    "series": [
        {
            "name": "故障",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                56
            ]
        },
        {
            "name": "非故障",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: ['1','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                144
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

