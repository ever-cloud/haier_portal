getechart("ecMend", "themeEightteen", {
    "title": {
        "text": "367",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"
        },

        "x": "left"
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "right":'10%',
        "top": '13%',
        data: ['未受理', '已受理', '已完成']
    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '10%',
        "height": "50%",
        "width": "80%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '未受理',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '已受理',
            type: 'bar',
            data: [110, 240, 120, 150, 260, 220,240]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [160, 270, 150, 180, 290, 320,340]
        },
        {
            name: '未受理',
            type: 'line',
            yAxisIndex: 1,
            data: [360, 380, 270, 190, 390, 400,330]
        }
    ]
});
getechart("ecFix", "themeEightteen", {
    "title": {
        "text": "200",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '13%',
        "right": '12%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '10%',
        "height": "50%",
        "width": "80%"
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '新报修',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [110, 220, 125, 150, 270, 220]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [131, 234, 146, 181, 290, 320]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [260, 280, 170, 190, 300, 380]
        }
    ]
});
getechart("ecMaintain", "themeEightteen", {
    "title": {
        "text": "160",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '13%',
        "right": '10%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '10%',
        "height": "50%",
        "width": "80%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '新报修',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [110, 220, 125, 150, 270, 220,300]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [131, 234, 146, 181, 290, 320,230]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [260, 280, 170, 190, 300, 380,390]
        }
    ]
});
getechart("ecMeasure", "themeEightteen", {
    "title": {
        "text": "289",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月投诉量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '16%',
        "right": '30%',
        data: ['总投诉', '对话中', '已完成']
    },
    grid: {
        bottom: '10%',
        "height": "50%",
        "width": "80%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '总投诉',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [110, 220, 125, 150, 270, 220,309]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [131, 234, 146, 181, 290, 320,390]
        },
        {
            name: '总投诉',
            type: 'line',
            yAxisIndex: 1,
            data: [260, 280, 170, 190, 300, 380,320]
        }
    ]
});
getechart("ecOutbox", "themeEightteen", {
    title: {
        "text": "47890",
        "textStyle": {
            "fontSize": "26",
            "color": "#000",
            "fontFamily": "SimSun"
        },
        "subtext": "本月共收件数",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun",

        },
        "textAlign": "center",
        "x": "10%"

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        "top": '18%',
        "right": '30%',
        data: ['待评价', '已评价']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        height:'60%'
    },
    xAxis: [
        {
            type: 'category',
            data: ['2月', '1月', '12月', '11月', '10月']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '待评价',
            type: 'bar',
            stack: '评价',
            barWidth:'40',
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '已评价',
            type: 'bar',
            stack: '评价',
            barWidth:'40',
            data: [120, 132, 101, 134, 90]
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
