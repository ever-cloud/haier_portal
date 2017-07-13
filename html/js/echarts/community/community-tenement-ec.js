getechart("ecDescribenew", "themeEightteen", {
    "title": {
        "text": "289",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月投诉量",
        "subtextStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        textAlign:'center',
        x: "5%",
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        //"right":'3%',
        "top": '20%',
        data: ['总投诉', '对话中', '已完成']
    },
    grid: {
        //left: '3%',
        //right: '4%',
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
            data: [ 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [ 220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '总投诉',
            type: 'line',
            yAxisIndex: 1,
            data: [320, 302, 301, 334, 390, 330, 320]
        }
    ]
});
getechart("ecEnsurenew", "themeEightteen", {
    "title": {
        "text": "367",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        textAlign:'center',
        x: "10%",
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        "top": '20%',
        "right": '12%',
        data: ['未受理', '已受理', '已完成']
    },
    grid: {
        right:'8%',
        bottom: '10%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
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
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '未受理',
            type: 'line',
            yAxisIndex: 1,
            data: [320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]
});
getechart("ecHouseRepairnew", "themeEightteen", {
    "title": {
        "text": "200",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        textAlign:'center',
        x: "10%",
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '20%',
        "right": '12%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        right:'8%',
        bottom: '10%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
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
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [  320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]

});
getechart("ecTypenew", "themeEightteen", {
    "title": {
        "text": "167",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "16",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        textAlign:'center',
        x: "10%",
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '20%',
        "right": '12%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        bottom: '10%',
        right:'8%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
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
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [ 320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]
});
getechart("eccomboxnew", "themeEightteen", {
    title: {
        "text": "47890",
        "textStyle": {
            "fontSize": "24",
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
        "top": '20%',
        "right": '25%',
        data: ['待评价', '已评价']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        height:'55%'
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


