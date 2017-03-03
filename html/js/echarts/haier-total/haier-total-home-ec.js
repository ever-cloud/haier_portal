getechart("ecBand_total", "theme", {
    title: {
        text: '246',
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        subtext: '项目总数',
        "subtextStyle": {
            "fontSize": "14",
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
                        "position": 'top',
                        formatter: '{c}\n{a}\n',
                        "textStyle": {
                            "color": "#000000"
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
                        "position": 'top',
                        formatter: '{c}\n{a}\n',
                        "textStyle": {
                            "color": "#000000"
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
                        position: 'top',
                        formatter: '{c}\n{a}\n',
                        "textStyle": {
                            "color": "#000000"
                        }
                    }
                }
            },
            data: [12]
        }
    ]
});
getechart("ecAdd_total", "themeFour", {
    "title": {
        "text": "3869",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "用户总数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "45%",
        "y":"2%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "legend": {
        "data": []
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "containLabel": true,
        "height": "30%"
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
            barWidth: '25',
            "label": {
                "normal": {
                    "show": true,
                    "position": [10,-40],
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "insideRight"
                }
            },
            "data": [
                800
            ]
        }
    ]
});
getechart("ecReduce_total", "themeTwo", {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "legend": {
        "data": []
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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "insideRight"
                }
            },
            "data": [
                3069
            ]
        }
    ]
});
getechart("ecSuccess_total", "themeTwo", {
    "title": {
        "text": "674,993",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "subtext": "成交总额",
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
    "legend": {
        "data": []
    },
    "grid": {
        "left": "10%",
        "bottom": "1%",
        "containLabel": true,
        "height": "50"
    },
    "xAxis": {
        "type": "value",
        "axisLabel": {show: false}

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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "insideRight"
                }
            },
            "data": [
                600000
            ]
        }
    ]
});
getechart("ecDefeat_total", "themeTwo", {
    "title": {
        "text": "540",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        //padding:100,//内边距，控制两个标题距离
        "itemGap": 3,
        "subtext": "总订单量",
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
    //"legend": {
    //    "data": []
    //},
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
            "name": "月新增订单量",
            "type": "bar",
            "stack": "总量",
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "insideRight"
                }
            },
            "data": [
                400
            ]
        }
    ]
});
getechart("ecFinish_total", "themeThree", {
    "title": {
        "text": "147",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },

        "subtext": "报修状态",
        "subtextStyle": {
            "fontSize": "14",
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
    "legend": {
        "data": []
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
            "label": {
                "normal": {
                    "show": true,
                    "position": [10, -40],
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",  //修改每段柱形图上面标题的位置
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
                    }
                }
            },
            "data": [
                10
            ]
        }
    ]
});
getechart("ecReceive_total", "themeThree", {
    "title": {
        "text": "120",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        //padding:100,//内边距，控制两个标题距离
        "itemGap": 3,
        "subtext": "投诉状态",
        "subtextStyle": {
            "fontSize": "14",
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
    "legend": {
        "data": []
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
            "label": {
                "normal": {
                    "show": true,
                    "position": [10, -40],
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
                    }
                }
            },
            "data": [
                20
            ]
        }
    ]
});
getechart("ecStart_total", "themeFour", {
    "title": {
        "text": "160",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },

        "subtext": "设备在线数",
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
    "legend": {
        "data": []
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
                    }
                }
            },
            "data": [
                40
            ]
        }
    ]
});
getechart("ecEnd_total", "themeTwo", {
    "title": {
        "text": "56",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        padding: 10,//内边距，控制两个标题距离
        "itemGap": 3,
        "subtext": "设备故障数",
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
    "legend": {
        "data": []
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "formatter": "{c}\n{a}\n",
                    "textStyle": {
                        "color": "#000000"
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

