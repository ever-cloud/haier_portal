getechart("ecAdaptCount", "themeThreeteen", {
    title: [
        {
            "text": "1245",
            "textAlign": "center",
            "x": "10%",
            "y": "5%",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            }
        },
        {
            "subtext": "设备总数",
            "x": "10%",
            "y": "5%",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            }
        }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '视频监控'},
                {value: 310, name: '入侵报警'},
                {value: 274, name: '门禁管理'},
                {value: 235, name: '电梯控制'},
                {value: 200, name: '广播通讯'},
                {value: 290, name: '信息发布'},
                {value: 310, name: '可视对讲'},
                {value: 350, name: '人员定位'},
                {value: 270, name: '车辆管理'},
                {value: 390, name: '电子巡更'}
            ].sort(function (a, b) {
                return a.value - b.value
            }),
            roseType: 'angle',
            //label: {
            //    normal: {
            //        show: false,
            //        position: 'center'
            //    },
            //    emphasis: {
            //        show: true,
            //        textStyle: {
            //            fontSize: '16',
            //            fontWeight: 'bold'
            //        }
            //    }
            //},
            //labelLine: {
            //    normal: {
            //        show: false
            //    }
            //},
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
            },
            //itemStyle: {
            //    normal: {
            //        //color: '#c23531',//控制图中颜色
            //        //shadowBlur: 200,
            //        //shadowColor: 'rgba(0, 0, 0, 0.5)'
            //    }
            //},

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
});
getechart("ecOpenCount", "themeFourteen", {
    title: {
        "text": "135",
        "textStyle": {
            "fontSize": "26",
            //"color": "#000",
            "fontFamily": "SimSun"
        },

        "subtext": "故障设备总数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "x": "2%",
        "y": "5%",
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //legend: {
    //    orient: 'vertical',
    //    left: 'left',
    //    data: ['dvr设备', '人员定位', '摄像头', '电梯, '可视对讲 ']
    //},
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['55%', '50%'],
            data: [
                {value: 1480, name: 'dvr设备'},
                {value: 310, name: '人员定位'},
                {value: 234, name: '摄像机'},
                {value: 135, name: '电梯'},
                {value: 335, name: '可视对讲'}
            ],
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
getechart("ecSellCount", "themeFiveteen", {
    title:[
        {
            "text": "1",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {
            "text": "45",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {
            "text": "273223",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
        {
            "text": "134580",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "70%",
            "y":"5%",
        },
        {
            "subtext": "在线系统",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {
            "subtext": "设备总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {
            "subtext": "摄像机总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
        {
            "subtext": "DVR总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "70%",
            "y":"5%",
        },


    ],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
//legend: {
//    orient: 'vertical',
//    x: 'left',
//    data:['设备dvr','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
//}
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '25%'],
            center: ['58%', '71%'],
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        color: '#000'//控制上面name名称的线及颜色
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    lineStyle: {
                        color: '#000',
                    },
                    //smooth: 0.2,
                    //length: 10,
                    //length2: 20
                }
            },

            data: [
                {value: 335, name: 'dvr', selected: true},
                {value: 679, name: '摄像头'},
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['58%', '71%'],
            data: [
                {value: 335, name: '故障dvr'},
                {value: 310, name: '正常dvr'},
                {value: 234, name: '故障摄像头'},
                {value: 135, name: '正常摄像头'},

            ],
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
            },
        }
    ]
});
getechart("ecFairly", "themeSixteen", {
    title:[
        {
            "text": "1",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {
            "text": "542334",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {
            "text": "233134",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
        {

            "subtext": "在线系统",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {

            "subtext": "电梯总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {

            "subtext": "报警电梯数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //legend: {
    //    orient: 'vertical',
    //    left: 'left',
    //    data: ['dvr设备', '人员定位', '摄像头', '电梯, '可视对讲 ']
    //},
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['60%', '65%'],
            data: [
                //{value: 335, name: '报警电梯'},
                {value: 310, name: '故障电梯'},
                {value: 234, name: '正常电梯'},
                //{value: 135, name: '电梯'},
                //{value: 1548, name: '可视对讲'}
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
            },
        }
    ]
});
getechart("ecPath", "themeSixteen", {
    title:[
        {
            "text": "1",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {
            "text": "239453",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {
            "text": "348905",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
        {
            "subtext": "在线系统",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%",
            "y":"5%",
        },
        {
            "subtext": "设备总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%",
            "y":"5%",
        },
        {
            "subtext": "报警设备数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%",
            "y":"5%",
        },
    ],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //legend: {
    //    orient: 'vertical',
    //    left: 'left',
    //    data: ['dvr设备', '人员定位', '摄像头', '电梯, '可视对讲 ']
    //},
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['60%', '65%'],
            data: [
                //{value: 335, name: '报警设备'},
                {value: 310, name: '故障设备'},
                {value: 234, name: '正常设备'},
                //{value: 135, name: '电梯'},
                //{value: 1548, name: '可视对讲'}
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
            },
        }
    ]
});
getechart("ecInspect", "themeSixteen", {
    title:[
        {
            "text": "1",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%"
        },
        {
            "text": "566680",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%"
        },
        {
            "text": "2663404",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%"
        },
        {
            "text": "23554",
            "textStyle": {
                "fontSize": "26",
                //"color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "70%"
        },
        {
            "subtext": " 在线系统",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "10%"
        },
        {
            "subtext": "设备总数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "30%"
        },
        {
            "subtext": "发卡人数",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "50%"
        },
        {
            "subtext": "报警人次",
            "subtextStyle": {
                "fontSize": "14",
                "color": "#000",
                "fontFamily": "SimSun"
            },
            "textAlign":"center",
            "x": "70%"
        },


    ],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //legend: {
    //    orient: 'vertical',
    //    left: 'left',
    //    data: ['dvr设备', '人员定位', '摄像头', '电梯, '可视对讲 ']
    //},
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['60%', '65%'],
            data: [
                //{value: 335, name: '报警电梯'},
                {value: 504, name: '正常设备'},
                {value: 310, name: '故障设备'},
                //{value: 135, name: '电梯'},
                //{value: 1548, name: '可视对讲'}
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
                    //"show": false,
                    //"position": "top",
                    //"formatter": "{c}\n{a}\n",
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
        },


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










