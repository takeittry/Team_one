//鼠标滚轮事件
var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    if(t>=0){
        $("#title_h1").attr("class","title_h1 fade1 in");
    }
    if(t<0){
        $("#title_h1").attr("class","title_h1 fade1");
    }
    if(t>=200){
        $("#border").attr("class","title_border fade1 in");
    }
    if(t<200){
        $("#border").attr("class","title_border fade1");
    }
    if(t>=400){
        $("#h5info").attr("class","h5info fade1 in");
    }
    if(t<400){
        $("#h5info").attr("class","h5info fade1");
    }
    if(t>=600){
        $("#conmain").attr("class","conmain fade1 in");
    }
    if(t<600){
        $("#conmain").attr("class","conmain fade1");
    }
    if(t>=800){
        $("#title_h2").attr("class","title_h2 fade1 in");
    }
    if(t<800){
        $("#title_h2").attr("class","title_h2 fade1");
    }
    if(t>=1000){
        $("#colgroup").attr("class","colgroup fade1 in");
    }
    if(t<1000){
        $("#colgroup").attr("class","colgroup fade1");
    }
  }
}
