/**
 * Created by web on 2018/10/15.
 */
 var $pic=$(".pic");
 var $menber=$pic.children("div");
 var $bigPic=$(".bigPic");
 var $name=$(".name");
 var $desc=$(".desc");

$bigPic.click(function(){
  $bigPic.css("opacity","0")
  $bigPic.css("width", 0);
  $bigPic.css("height", 0);
  $bigPic.css("margin-left", 0);
  $bigPic.css("margin-top", 0);
  $name.css("width",0)
  $desc.css("width","0")
 for(var j=0;j<6;j++){
  $menber.eq(j).css("opacity","1")
 }
});

$.ajax({
    url:"http://127.0.0.1:3000/pic/list",
    type:"get",
    success:(res)=> {
        for(var i=0;i<6;i++){
            $menber.eq(i).mouseenter(function(e){
                $pic.css("animationPlayState","paused");
                for(var j=0;j<6;j++){
                    $menber.eq(j).css("animationPlayState","paused")
                }
            }).mouseleave(function(){
                $pic.css("animationPlayState","running");
                for(var j=0;j<6;j++){
                    $menber.eq(j).css("animationPlayState","running")
                }
            }).click(function(){
                var src=$(this).children().attr("src");
                var i=parseInt($(this).children().attr("data-id"))
                $bigPic.css("opacity","1")
                $bigPic.css("width", 360);
                $bigPic.css("height", 360);
                $bigPic.css("margin-left", -180);
                $bigPic.css("margin-top", -180);
                $bigPic.css("background",`url(${src})`)
                $bigPic.css("background-size",`cover`)
                $name.html(`<p>${res[i].uname}</p>`)
                $desc.html(`<p>${res[i].des}</p>`)
                $name.css("width","300px")
                $desc.css("width","400px")
                for(var j=0;j<6;j++){
                    $menber.eq(j).css("opacity","0")
                }
            })
        };
    }
})

