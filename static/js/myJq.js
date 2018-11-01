jQuery.fn.tabs=function(){
    this.children("ul").addClass("tabs").children("li:first").addClass("active")
    this.children("div").addClass("container").children("div:first").addClass("active")

    this.on("click","[data-toggle=tab]",e=>{
          e.preventDefault();
      var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
    })
}