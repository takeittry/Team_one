(async function() {

    /*if (location.search.indexOf("cid=") != -1) {*/
    var cid = location.search.split("=")[1];
    //         ?lid=5   ?lid,5   5
    var res = await ajax({
        url: "/cases/list",
        type: "get"
    });
    var data=JSON.parse(res);
    console.log(data);
    var html=``;
    for(var i=0;i<data.length;i++){
        console.log(data[i].title)
        console.log(data[i].indexImg)
        html+=`<div class="col-xs-12 col-sm-6 col-md-4">
                  <a href="casesdetails.html?cid=${data[i].cid}">
                      <img src="${data[i].indexImg}" alt=""/>
                      <div class="mask"><span>show</span></div>
                      <div class="draw">
						<p class="p1"></p>
						<p class="p2"></p>
						<p class="p3"></p>
						<p class="p4"></p>
					</div>
                  </a>
                  <lediv class="case_name"><a href="casesdetails.html?cid=${data[i].cid}">${data[i].title}</a></lediv>
              </div>`
    }
    var case1=document.getElementsByClassName("case1");
    console.log(case1[0]);
    case1[0].innerHTML=html;
})()