/**
 * Created by web on 2018/10/8.
 */
/*头部图片大小随窗口变动而变动*/
$(document).ready(function(){
function autodivheight(){
    var winHeight=0;
    var imgHeight=$("#d1>img:first").css("height");
    winHeight = window.innerHeight||document.body.clientHeight|| document.documentElement.clientHeight;
    var winWidth = window.innerWidth||document.body.clientWidth|| document.documentElement.clientHWidth;
    if(window.matchMedia('(max-width:1080px)').matches){
        $("#d1").css("height",imgHeight);
    }else{
        $("#d1").css("height",winHeight-60);
    }
    $("#d1>div>img").css("width",winWidth);
    for(var i=0;i<5;i++){
        $("#d1>div>img").eq(i).css("margin-left",winWidth*-i*0.2)
    }
}
autodivheight();
window.onresize=autodivheight;

/*d1轮播*/
var d1ImgBool=true;
setInterval(function(){
    if($("#d1>div").css("width")!="0px"){
        for(var i=0;i<5;i++){
            $("#d1>div").css("width",0)
        }
        setTimeout(function(){
            d1ImgBool=!d1ImgBool;
            if(d1ImgBool){
                $("#d1>div>img").attr("src","img/59fc09a25cb09.jpg")
            }
            if(!d1ImgBool){
                $("#d1>div>img").attr("src","img/59faadab63d74.jpg")
            }
        },2000)

    }else{
        for(var i=0;i<5;i++){
            $("#d1>div").css("width","20%")
        }
    }
},4000)

/*d2部分三个滑动特效*/
$("#d2>a").hover(function(){
    var div1=$(this).children(":first-child");
    var div2=$(this).children(":last-child");
    div1.css("top","-260px");
    div2.css("top","20px")
},function(){
    var div1=$(this).children(":first-child");
    var div2=$(this).children(":last-child");
    div1.css("top","20px");
    div2.css("top","280px")
});

/*d3部分动态模糊*/
var d3Bool=true,d4Bool=true,d5Bool=true;
window.onscroll=function(){
    var d3=document.getElementById("d3");
    var clientHeight=document.documentElement.clientHeight;//屏幕高度
    var scrollTop=document.documentElement.scrollTop;//滚动了的距离
    var d3top=d3.offsetTop-scrollTop;//d3距离显示窗口上边距离
    var fg1=document.getElementById("f1").children[0];
    var fg0=document.getElementById("f0").children[0];
    var img=document.getElementById("s1").getElementsByTagName("image")[0];
    if(d3top<clientHeight-80&&d3top+500>0&&d3Bool){
        var a=20,w=1200,b=20;
        var t1=setInterval(function(){
            w-=50;
            b-=1;
            img.setAttribute("x",w);
            fg0.setAttribute("stdDeviation",`${b},${b}`);
            if(w<0){
                img.setAttribute("x",0);
                clearInterval(t1);
                var t2=setInterval(function(){
                    a-=2;
                    fg1.setAttribute("stdDeviation",`${a},0`);
                    if(a<=0){
                        a=0;
                        clearInterval(t2)
                    }
                },50)
            }
        },50);
        d3Bool=false;
    }
    if(d3top>=clientHeight-80||d3top+500<0){
        d3Bool=true;
        fg1.setAttribute("stdDeviation","20,0");
        img.setAttribute("x",1000);
    }
    /*d4部分动效*/
    var $d4=$("#d4");
    var d4top=$d4.offset().top-scrollTop;
    if(d4top<clientHeight-150&&d4top+500>0&&d4Bool){
        $("#d4 .d_left div:eq(0)").css({"top":"0","left":"0"})
        $("#d4 .d_left div:eq(1)").css({"top":"0","left":"50%"})
        $("#d4 .d_left div:eq(2)").css({"top":"50%","left":"0"})
        $("#d4 .d_left div:eq(3)").css({"top":"50%","left":"50%"})
        $("#d4 .d_right div").css("width","0%")
        d4Bool=false
    }
    if(d4top>=clientHeight-150||d4top+500<0){
        $("#d4 .d_left div:eq(0)").css({"top":"30%","left":"30%"})
        $("#d4 .d_left div:eq(1)").css({"top":"30%","left":"30%"})
        $("#d4 .d_left div:eq(2)").css({"top":"30%","left":"30%"})
        $("#d4 .d_left div:eq(3)").css({"top":"30%","left":"30%"})
        $("#d4 .d_right div").css("width","25%")
        d4Bool=true;
    }

    /*d5部分动效*/
    var $d5=$("#d5");
    var d5top=$d5.offset().top-scrollTop;
    if(d5top<clientHeight-150&&d5top+500>0&&d5Bool){
        /*d5右*/
        $("#d5 .d_right div:nth-child(2) div").addClass("d51tran");
        setTimeout(function(){
            $("#d5 .d_right div:nth-child(3) div").addClass("d52tran");
        },1000)
        setTimeout(function(){
            $("#d5 .d_right div:nth-child(2) div").css("display","none");
            setTimeout(function(){
                $("#d5 .d_right div:nth-child(3) div").css("display","none")
            },1000)
        },1000)
        /*d5左*/
        $("#d5 .d_left div:nth-child(6) div").addClass("d54tran");
        $("#d5 .d_left div:nth-child(7) div").addClass("d53tran");
        setTimeout(function(){
            $("#d5 .d_left div:nth-child(6) div").css("display","none");
            $("#d5 .d_left div:nth-child(7) div").css("display","none");
        },1500)
        d5Bool=false
    }
    if(d5top>=clientHeight-150||d5top+500<0){
        $("#d5 .d_right div:nth-child(2) div").removeClass("d51tran");
        $("#d5 .d_right div:nth-child(3) div").removeClass("d52tran");
        $("#d5 .d_right div:nth-child(2) div").css("display","block");
        $("#d5 .d_right div:nth-child(3) div").css("display","block");
        $("#d5 .d_left div:nth-child(6) div").removeClass("d54tran");
        $("#d5 .d_left div:nth-child(7) div").removeClass("d53tran");
        $("#d5 .d_left div:nth-child(6) div").css("display","block");
        $("#d5 .d_left div:nth-child(7) div").css("display","block");
        d5Bool=true;
    }
}
var $d6Text=$("#d6>div:nth-child(2)>div");
for(var i=0,j=$d6Text.length;i<j;i++){
    var div=$d6Text.eq(i);
    div.hover(
        function(e){
        var width=parseFloat($(this).css("width"));
        var x_top=e.offsetY,x_left=e.offsetX;
        var x_bottom=135-x_top,x_right=width-x_left;
        var $text=$(this).children()
        if(x_left<x_right&&x_left<x_bottom&&x_left<x_top){
            $text.css({"animation": "left 1s","display":"block"});
        }else if(x_right<x_left&&x_right<x_bottom&&x_right<x_top){
            $text.css({"animation": "right 1s","display":"block"});
        }else if(x_top<x_right&&x_top<x_bottom&&x_top<x_left){
            $text.css({"animation": "top 1s","display":"block"});
        }else if(x_bottom<x_right&&x_bottom<x_top&&x_bottom<x_left){
            $text.css({"animation": "bottom 1s","display":"block"})
        }
    },
    function(){
        var $text=$(this).children()
        $text.css({"display":"none"});
    });
}
})

/*d4部分特效*/



