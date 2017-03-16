getechart("ecDetailsleft", "themeFour",{
    "title": {
        "text": "3869",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap": 3,
        "subtext": "用户总数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center",
        "y":'-5%'
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['用户活跃总数','其他'],
        orient:'vertical',
        //center:0,
        left:50,
        top:15,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "containLabel": true,
        "height": "50"
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
            "name": "用户活跃总数",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            "data": [
                3069
            ]
        },
        {
            "name": "其他",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            "data": [
                800
            ]
        }
    ]
});
getechart("ecDetailsright", "themeTwo",{
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['月新增用户数','其他'],
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
        "containLabel": true,
        "height": "50"
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
            "name": "月新增用户数",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
                        }
                    }
                }
            },
            "data": [
                800
            ]
        },
        {
            "name": "其他",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12
                        }
                    }
                }
            },
            "data": [
                3069
            ]
        }
    ]
});
getechart("eclimitleft", "themeTwo",{
    "title": {
        "text": "674,993",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "itemGap": 3,
        "subtext": "成交总额",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center",
        "y":"-5.5%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['月增成交额','其他'],
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
        "left": "5%",
        "bottom": "1%",
        "containLabel": true,
        "height": "50"
    },
    "xAxis": {
        "type": "value",
        //"axisLabel": {
        //    "show": false
        //}
        "boundaryGap":['5%','15%']
    },
    "yAxis": {
        "type": "category",
        "data": [
            ""
        ]
    },
    "series": [
        {
            "name": "月增成交额",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['-4','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                74993
            ]
        },
        {
            "name": "其他",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":10,
                            "fontWeight":'bold'
                        }
                    }
                }
            },
            "data": [
                600000
            ]
        }
    ]
});
getechart("ecConfineright", "themeTwo",{
    "title": {
        "text": "540",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        //padding:100,
        "itemGap": 3,
        "subtext": "总订单量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center",
        "y":'-6%'
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['月新增订单量','其他'],
        orient:'vertical',
        //center:0,
        left:50,
        top:5,
        itemGap:5,
        itemWidth:10,
        itemHeight:8,
        formatter: '{name}'
    },
    "grid": {
        "left": "5%",
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
            "name": "月新增订单量",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
                        }
                    }
                }
            },
            "data": [
                140
            ]
        },
        {
            "name": "其他",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['10','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
                        }
                    }
                }
            },
            "data": [
                400
            ]
        }
    ]
});
getechart("ecMendseverleft", "themeThree",{
    "title": {
        "text": "147",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap": 3,
        "subtext": "报修状态",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "center",
        "y":"-5%"
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
        left:65,
        top:-5,
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
                        "position": ['5','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
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
                        "position": ['5','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
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
                        "position": ['5','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                            "fontWeight":'bold'
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
getechart("ecProcessright", "themeThree",{
    "title": {
        "text": "120",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        //padding:100,
        "itemGap": 3,
        "subtext": "投诉状态",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center",
        "y":"-5%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    legend:{
        show:true,
        data:['已完成','对话中','新投诉'],
        orient:'vertical',
        //center:0,
        left:65,
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
                        "position": ['5','5'],
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
                        "position": ['5','5'],
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
        },
        {
            "name": "新投诉",
            "type": "bar",
            "stack": "总量",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        "position": ['5','5'],
                        formatter: '{c}',
                        "textStyle": {
                            "color": "#ffffff",
                            "fontSize":12,
                        }
                    }
                }
            },
            "data": [
                20
            ]
        }
    ]
});
getechart("ecPushleft", "themeFour",{
    "title": {
        "text": "160",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "itemGap":3,
        "subtext": "设备在线数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center"
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
        left:65,
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
                        "position": ['5','5'],
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
                        "position": ['5','5'],
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
getechart("ecReferenceright", "themeTwo",{
    "title": {
        "text": "56",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        //padding:110,
        "itemGap": 3,
        "subtext": "设备故障数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "center",
        "y":"-6%"
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
        left:65,
        top:3,
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
                        "position": ['5','5'],
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
                        "position": ['5','5'],
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
