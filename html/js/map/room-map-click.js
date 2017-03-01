// 创建Map实例
var map = new BMap.Map("myMap");
//console.log(map);
// 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom("中国", 6);

//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);
////添加比例尺控件
map.addControl(new BMap.ScaleControl());
map.enableAutoResize(true);
//右下角，仅包含平移和缩放按钮
var bottom_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_LARGE});
//把控件添加到地图上
map.addControl(bottom_right_navigation);
//地图自适应
map.addEventListener("resize", function () {
    this.getCenter();

});
function resizeMap() {
    var center = map.getCenter();
    map.checkResize();
    map.setCenter(center);
}

var blocMap = {
    icon: [],
    marker: [],
    opts: [],
    info: []
}
var dataList = [
    ["北苑小区", "山东青岛", "青岛新时代", "完工"],
    ["湛山小区", "山东青岛", "和展", "签约"],
    ["泉星小区", "山东济南", "济发", "完工"],
    ["中海国际社区", "山东济南", "中海物业", "完工"],
    ["华辉东方城", "山东威海", "华辉", "完工"],
    ["香港平远国际城", "山东威海", "丽诚物业", "签约"],
    ["华乐公馆", "山东烟台", "烟台华乐置业", "完工"],
    ["美航康悦城", "山东烟台", "北京美航金达莱", "在建"],
    ["中节能健康城", "河北石家庄", "河北乐水房地产", "在建"],
    ["龙溪城", "北京", "北京房地产", "在建"],
    ["想象国际", "北京", "北京房地产", "在建"],
    ["星河盛世城", "北京", "北京地产", "签约"],
    ["翰林观天下", "天津", "天津乐水房地产", "在建"],
    ["天阳御龙湾", "天津", "天津乐水房地产", "在建"],
    ["东胜紫御府", "上海", "上海乐水房地产", "在建"],
    ["九龙湾", "上海", "上海乐水房地产", "在建"],
    ["幸福城", "上海", "上海乐水房地产", "完工"],
    ["金地格林世界", "广州", "广州乐水房地产", "签约"],
    ["海信天山郡", "广州", "广州乐水房地产", "在建"],
    ["上居和园", "西安", "西安房地产", "在建"],
    ["福瑞福海门", "西安", "西安房地产", "完工"],
    ["揽胜公馆", "西安", "西安房地产", "完工"],
    ["富丽新城", "河南周口", "河南房地产", "签约"],
    ["国奥天地", "河南许昌", "河南房地产", "完工"],
    ["五彩都会", "河南郑州", "河南房地产", "完工"]
]
//创建图标
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
setIcon("../images/blueShadow.png");
/**
 * 设置覆盖物图标
 * @param path 图片路径
 */
function setIcon(path) {
    var icon = new BMap.Icon(path, new BMap.Size(50, 50), {
        offset: new BMap.Size(0, 5),    //相当于CSS精灵
        imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
    });
    blocMap.icon.push(icon);
}
var points = [new BMap.Point(120.195098, 35.976978),
    new BMap.Point(120.373775, 36.062356),
    new BMap.Point(117.004495, 36.692712),
    new BMap.Point(116.988218, 36.617886),
    new BMap.Point(116.988208, 36.617886),
    new BMap.Point(121.753311, 36.865919),
    new BMap.Point(121.33827, 37.535523),
    new BMap.Point(121.235958, 37.477977),
    new BMap.Point(114.312808, 38.096436),
    new BMap.Point(116.957912, 40.072805),//北京
    new BMap.Point(116.109337, 39.951671),
    new BMap.Point(116.649758, 40.303857),
    new BMap.Point(117.367252, 38.948786),//天津
    new BMap.Point(117.093592, 39.065419),
    new BMap.Point(121.403159, 31.211351),//上海
    new BMap.Point(121.258281, 31.043188),
    new BMap.Point(121.281277, 31.381186),
    new BMap.Point(112.390783, 23.916471),//广州
    new BMap.Point(112.151619, 22.974361),
    new BMap.Point(107.598288, 34.405411),//西安
    new BMap.Point(107.524698, 33.08366),
    new BMap.Point(105.096255, 33.516252),
    new BMap.Point(114.902015, 33.624062),//河南
    new BMap.Point(114.110931, 34.053936),
    new BMap.Point(113.926958, 34.770585)

];
map.setViewport(points);

for (var i = 0, l = blocMap.icon.length; i < l; i++) {
    var mark = new BMap.Marker(points[i], {icon: blocMap.icon[i]});
    // 将标注添加到地图中
    map.addOverlay(mark);
    blocMap.marker.push(mark);
}


/**
 * 模板函数
 * @param name 项目名称
 * @param city 城市
 * @param group 集团
 * @param status 状态
 * @param satisfaction 满意指数
 * @param health 健康状态
 * @param develop 发展指数
 * @returns {string}
 */
function create() {
    //console.log(arguments);
    var str = "<div class='myItem' style='height: 160px;width: 240px;background: #1F5294; border-radius: 6px 6px 6px 6px;'>" +
        "<div style='color:white;font-size: 18px;line-height: 36px;padding: 10px 0 0 10px;float: left;width: 240px;height:36px;clear: both;'>" +
        "<ul style='width: 240px;float: left'>" +
        "<li style='height: 36px;line-height: 36px;float: left'>小区名称：" + "<span>" + arguments[0][0] + "</a></li>" +
        "<li style='height: 36px;line-height: 36px;float: left'>小区城市：" + "<span>" + arguments[0][1] + "</span></li>" +
        "<li style='height: 36px;line-height: 36px;float: left'>小区集团：" + "<span>" + arguments[0][2] + "</span></li>" +
        "<li style='height: 36px;line-height: 36px;float: left'>小区状态：" + "<span>" + arguments[0][3] + "</span></li>" +
        "</ul>";
    return str;
}


for (var i = 0, l = dataList.length; i < l; i++) {
    var infoWindow = new BMap.InfoWindow(create(dataList[i]), blocMap.opts[i]);
    blocMap.info.push(infoWindow);
}
for (var i = 0, l = blocMap.marker.length; i < l; i++) {
    Over(blocMap.marker[i], blocMap.info[i]);
    Out(blocMap.marker[i], blocMap.info[i]);
    itemClick(blocMap.marker[i], blocMap.info[i]);
}


//移入事件
function Over(mark, info) {
    mark.addEventListener("mouseover", function () {
        this.openInfoWindow(info);
    });
}

//移出事件
function Out(mark, info) {
    mark.addEventListener("mouseout", function () {
        this.closeInfoWindow(info);
    });
}
var reg = /[\u4e00-\u9fa5]+/g;
//点击事件
function itemClick(mark, info) {
    mark.addEventListener("click", function () {
        this.openInfoWindow(info);
        var str = info.content.match(reg);
        //console.log(str);
        var Item = str[1];
        var itemCity = str[3];
        window.open("./hr-prototyperoomS.html#" + Item + "&" + itemCity, "main", "true");
    });
}


var info = blocMap.info

var items = {
    "北苑小区": blocMap.marker[0],
    "湛山小区": blocMap.marker[1],
    "泉星小区": blocMap.marker[2],
    "中海国际社区": blocMap.marker[3],
    "华辉东方城": blocMap.marker[4],
    "香港平远国际城": blocMap.marker[5],
    "华乐公馆": blocMap.marker[6],
    "美航康悦城": blocMap.marker[7],
    "中节能健康城": blocMap.marker[8],
    "龙溪城": blocMap.marker[9],
    "想象国际": blocMap.marker[10],
    "星河盛世城": blocMap.marker[11],
    "翰林观天下": blocMap.marker[12],
    "天阳御龙湾": blocMap.marker[13],
    "东胜紫御府": blocMap.marker[14],
    "九龙湾": blocMap.marker[15],
    "幸福城": blocMap.marker[16],
    "金地格林世界": blocMap.marker[17],
    "海信天山郡": blocMap.marker[18],
    "上居和园": blocMap.marker[19],
    "福瑞福海门": blocMap.marker[20],
    "揽胜公馆": blocMap.marker[21],
    "富丽新城": blocMap.marker[22],
    "国奥天地": blocMap.marker[23],
    "五彩都会": blocMap.marker[24]
}

function bindMouseenter() {
    $("#nav_room .box > li").on("click", function (e) {
        map.clearOverlays();
        var val = this.getElementsByTagName("a")[0].innerText;
        var obj = {
            "北苑小区": "120.195098,35.976978",
            "湛山小区": "120.373775,36.062356",
            "泉星小区": "117.004495,36.692712",
            "中海国际社区": "116.988208,36.617886",
            "华辉东方城": "116.988208,36.617886",
            "香港平远国际城": "121.753311,36.865919",
            "华乐公馆": "121.33827,37.535523",
            "美航康悦城": "121.235958,37.477977",
            "中节能健康城": "114.312808,38.096436",
            "龙溪城": "116.957912,40.072805",//beijing
            "想象国际": "116.109337,39.951671",
            "星河盛世城": "116.649758,40.303857",
            "翰林观天下": "117.367252,38.948786",//tianjin
            "天阳御龙湾": "117.093592,39.065419",
            "东胜紫御府": "121.403159,31.211351",//上海
            "九龙湾": "121.258281,31.043188",
            "幸福城": "121.281277,31.381186",
            "金地格林世界": "112.390783,23.916471",//广州
            "海信天山郡": "108.849304,34.997994",
            "上居和园": "107.598288,34.405411",//西安
            "福瑞福海门": "107.524698,33.08366",
            "揽胜公馆": "105.096255,33.516252",
            "富丽新城": "114.902015,33.624062",//henan
            "国奥天地": "114.110931,34.053936",
            "五彩都会": "113.926958,34.770585"
        }
        setCookie("textval", val);
        setCookie("red", obj[val]);
        window.parent.frames["main"].location.reload();
    })
}

//兼容ie
function bindMouseenterCopy(name) {

    map.clearOverlays();
    var obj = {
        "北苑小区": "120.195098,35.976978",
        "湛山小区": "120.373775,36.062356",
        "泉星小区": "117.004495,36.692712",
        "中海国际社区": "116.988208,36.617886",
        "华辉东方城": "116.988208,36.617886",
        "香港平远国际城": "121.753311,36.865919",
        "华乐公馆": "121.33827,37.535523",
        "美航康悦城": "121.235958,37.477977",
        "中节能健康城": "114.312808,38.096436",
        "龙溪城": "116.957912,40.072805",//beijing
        "想象国际": "116.109337,39.951671",
        "星河盛世城": "116.649758,40.303857",
        "翰林观天下": "117.367252,38.948786",//tianjin
        "天阳御龙湾": "117.093592,39.065419",
        "东胜紫御府": "121.403159,31.211351",//上海
        "九龙湾": "121.258281,31.043188",
        "幸福城": "121.281277,31.381186",
        "金地格林世界": "112.390783,23.916471",//广州
        "海信天山郡": "108.849304,34.997994",
        "上居和园": "107.598288,34.405411",//西安
        "福瑞福海门": "107.524698,33.08366",
        "揽胜公馆": "105.096255,33.516252",
        "富丽新城": "114.902015,33.624062",//henan
        "国奥天地": "114.110931,34.053936",
        "五彩都会": "113.926958,34.770585"
    }
    setCookie("textval", name);
    setCookie("red", obj[name]);
    //window.parent.frames["main"].location.reload();
    return false;
}

function getRed() {
    map.clearOverlays();
    var strRed = getCookie("red")
    if (!getRed) {
        return false
    }
    //对象变为数组
    var lat = strRed.split(",");
    //console.log(lat);//["120.195098", "35.976978"]
    var lat0 = strRed.split(",")[0];
    var lat1 = strRed.split(",")[1];
    //获取坐标的经纬度
    var point = new BMap.Point(lat0, lat1);
    //console.log(point);//H {lng: 120.195098, lat: 35.976978}
    //    //将当前坐标显示在居中位置
    map.centerAndZoom(point, 5);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    //map.setCurrentCity("中国");
    //利用当前点创建一个新标注
    var new_point = new BMap.Point(lat[0], lat[1]);

    //console.log(new_point);
    //    // 创建标注
    var marker = new BMap.Marker(new_point);
    //console.log(marker);
    //console.log(marker);
    //将新标注添加到地图上panTo
    map.addOverlay(marker);
    map.panTo(new_point);

    //给每个项目一个图标
    for (var key in items) {
        //if (key != val) {
        map.addOverlay(items[key]);
        //   }
    }
    var marker = new BMap.Marker(new BMap.Point(lat[0], lat[1])); // 创建点
    map.addOverlay(marker);
    var newIcon = new BMap.Icon("../images/red.png", new BMap.Size(50, 50), {
        offset: new BMap.Size(0, 5),    //相当于CSS精灵
        imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
    });

    marker.setIcon(newIcon);
    //marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    /*添加显示info窗口*/
    for (var key in info) {
        //var itemName = info[key].content.match(reg)[1];
        var itemName = info[key].content.match(reg)[1];
        if (itemName == getCookie("textval")) {
            Out(marker, info[key]);
            Over(marker, info[key]);
            itemClick(marker, info[key]);
            /*显示项目名字和地址*/
            //$(".title").text(val);
            //$(".titleName>p").eq(0).text(info[key].content.match(reg)[3]);
        }
    }
    //setCookie("red", '')
    //setCookie("textval", '')
}

