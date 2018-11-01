var mySwiper = new Swiper('.swiper-container',{
    speed:2000,
    autoplay: true,
	   loop: true, 
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  }) ;
$(".tabs:has([data-toggle=tab])")
    .on("click","[data-toggle=tab]",e=>{
        var $tar=$(e.target);
        if(!$tar.parent().is(".active")){
            $tar.parent().addClass("active")
                .siblings().removeClass("active");
            var id=$tar.attr("href");
            $(id).addClass("active1")
                .siblings().removeClass("active1");
        }
    })




