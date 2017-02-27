/**
 * 点击地图里面出现图片和点击左侧动态创建出来的标签显示图片
 * @type
 */

var rooms = {
    "北苑小区":         ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c5.png", "山东青岛"],
    "湛山小区":         ["../images/rooms/room-c5.png", "../images/rooms/room-c6.png", "../images/rooms/room-c7.png", "../images/rooms/room-c8.png", "山东青岛"],
    "泉星小区":         ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c1.png", "山东济南"],
    "中海国际社区":     ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c12.png", "山东济南"],
    "华辉东方城":       ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c12.png", "山东威海"],
    "香港平远国际城":   ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "山东威海"],
    "华乐公馆":         ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "山东烟台"],
    "美航康悦城":       ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "山东烟台"],
    "中节能健康城":     ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "河北石家庄"],
    "龙溪城":           ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c5.png", "北京"],
    "想象国际":          ["../images/rooms/room-c5.png", "../images/rooms/room-c6.png", "../images/rooms/room-c7.png", "../images/rooms/room-c8.png", "北京"],
    "星河盛世城":         ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c1.png", "北京"],
    "翰林观天下":       ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c12.png", "天津"],
    "天阳御龙湾":        ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c12.png", "天津"],
    "东胜紫御府":      ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "上海"],
    "九龙湾":           ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "上海"],
    "幸福城":          ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "上海"],
    "金地格林世界":      ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "广州"],
    "海信天山郡":         ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c5.png", "广州"],
    "上居和园":          ["../images/rooms/room-c5.png", "../images/rooms/room-c6.png", "../images/rooms/room-c7.png", "../images/rooms/room-c8.png", "西安"],
    "福瑞福海门":         ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c1.png", "西安"],
    "揽胜公馆":        ["../images/rooms/room-c1.png", "../images/rooms/room-c2.png", "../images/rooms/room-c4.png", "../images/rooms/room-c12.png", "西安"],
    "富丽新城":         ["../images/rooms/room-c10.png", "../images/rooms/room-c11.png", "../images/rooms/room-c12.png", "../images/rooms/room-c12.png", "河南周口"],
    "国奥天地":       ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "河南许昌"],
    "五彩都会":          ["../images/rooms/room-c10.png", "../images/rooms/room-c9.png", "../images/rooms/room-c8.png", "../images/rooms/room-c7.png", "河南郑州"]
};
var imgS = $(".roomCurrent img");
function setImg(item) {
    var arr=[]
    $.each(rooms,function(key,val){
        if(key==item){
            arr=val;
        }
    });
    imgS.each(function (index, value) {
        $(value).attr("src", arr[index]);
        $(".roomName").eq(0).text(item);
        $("#roomView>p").eq(0).text(arr[4]);
        setCookie("name", item);

    });
}

var roomImgs = $(".roomStyle img");

function getimgs(item){
    var arr=[]
    console.log(item);
    $.each(rooms,function(key,val){
        if(key==item.trim()){
            arr=val;
        }
    });
    roomImgs.each(function (index, value) {
        $(value).attr("src",arr[index]);
        $(".titleName .title").eq(0).text(item);
        $(".titleName>p").eq(0).text(arr[4]);
    });
}

