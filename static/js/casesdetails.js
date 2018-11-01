/*轮播图*/
/*动态获取*/
(async function() {

    /*if (location.search.indexOf("cid=") != -1) {*/
        var cid = location.search.split("=")[1];
        //         ?lid=5   ?lid,5   5
        var res = await ajax({
            url: "/casesdetails/info",
            type: "get",
            data: `cid=${cid}`,
            dataType: "json"
        });
        var data=res[0];
        data.images=JSON.parse(res[0].images);
        data.points=JSON.parse(res[0].points)
        console.log(data);
    //}
    var {title,images,description,points} = data;
    var titles = document.querySelectorAll('.con-title');
    console.log(titles)
    titles[0].innerHTML=title;
    titles[1].innerHTML=title;
    console.log(JSON.stringify(images));
    console.log(JSON.stringify(points));


    html = '';
    var imgHtmls =`
                <li class="left2"><img src="${images[0]}" alt=""></li>
                <li class="left1"><img src="${images[1]}" alt=""></li>
                <li class="first"><img src="${images[2]}" alt=""></li>
                <li class="right1"><img src="${images[3]}" alt=""></li>
                <li class="right2"><img src="${images[4]}" alt=""></li>
       `;
    var lunbo = document.getElementById('lunbo-img');
    console.log(lunbo);
    lunbo.innerHTML = imgHtmls;
   /*案例描述*/
    html = '';
    var des = document.querySelector('#case-description');
    des.innerHTML = description;
    /*功能亮点*/
    html = '';
    points.forEach((v,i) => {

        html += `<div class="title">${v.title}</div>
                <div class="${['content','fade',i==0?'in':''].join(' ')}"><img src="${v.img}" alt=""/><br/>
                    ${v.content}
                </div>`
    })
    var accordion = document.querySelector('#my-accordion');
    accordion.innerHTML = html;


})();




/**/
window.onload = function() {
  /*  /!*掩饰动态获取*!/
    let data = {
        title: 'ABB SAFE MOVE2',
        imgs:[
            'img/case3-3.png',
            'img/case3-2.png',
            'img/case3-1.png',
            'img/case3-4.png',
            'img/case3-5.png',
        ],
        description: '动态ABB SAFE MOVE2是为智能机器人提供的安全解决方案，适用于ABB的大部分机器人，通过3D建模的形式立体呈现SAFEMOVE2的使用场景。VR技术带来的沉浸感，能够使观看者感受到亲临现场，切身操作。',
        points:[
            {
                title: '1.3D立体展现',
                content: '全景展示店铺形象，客户可以体验一键逛街的便捷。',
                img: 'img/casesdetails3-2.jpg',
            },
            {
                title: '2.精准模拟机器人动作，流畅自然',
                content: '作品完成后制作成链接和二维码达到裂变式营销的效果',
                img: 'img/casesdetails3-3.jpg',
            },
        ]
    }
    var {title,imgs,description,points} = data;
    var titles = document.querySelectorAll('.con-title');
    console.log(titles)
    titles[0].innerHTML=title;
    titles[1].innerHTML=title;
    console.log(JSON.stringify(imgs));
    console.log(JSON.stringify(points));


    html = '';
    var imgHtmls =`
                <li class="left2"><img src="${imgs[0]}" alt=""></li>
                <li class="left1"><img src="${imgs[1]}" alt=""></li>
                <li class="first"><img src="${imgs[2]}" alt=""></li>
                <li class="right1"><img src="${imgs[3]}" alt=""></li>
                <li class="right2"><img src="${imgs[4]}" alt=""></li>
       `;
    var lunbo = document.getElementById('lunbo-img');
    console.log(lunbo);
    lunbo.innerHTML = imgHtmls;
/!*案例描述*!/
    html = '';
    var des = document.querySelector('#case-description');
    des.innerHTML = description;
/!*功能亮点*!/
    html = '';
    points.forEach((v,i) => {
        html += `<div>${v.title}</div>
                <div><img src="${v.img}" alt=""/><br/>
                    ${v.content}
                </div>`
    })
    var accordion = document.querySelector('#my-accordion');
    //accordion.innerHTML = html;

*/


    var pre = document.getElementById('pre');
    var next = document.getElementById('next');
    var lunbo = document.getElementById('lunbo-img');
    var lis = lunbo.getElementsByTagName('li');
    var lock = false;
    var classes = ['left2', 'left1', 'first', 'right1', 'right2'];
    pre.onclick = function() {
        // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
        // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
        if (lock == true) {return;}
        // 锁定
        lock = true;
        setTimeout(function() {
            lock = false;
        }, 2000)
        // 将classes的第一个取出来， 放在最后一个位置
        var firstclass = classes.shift();
        classes.push(firstclass);
        // 然后将classes给相应的class
        for (var i = 0; i < classes.length; i++) {
            lis[i].className = classes[i];
        }
    }
    next.onclick = function() {
        // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
        // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
        if (lock == true) {return;}
        // 锁定
        lock = true;
        setTimeout(function() {
            lock = false;
        }, 2000)
        // var lastclass = classes.pop();
        classes.unshift(classes.pop());
        for (var i = 0; i < classes.length; i++) {
            lis[i].className = classes[i];
        }
    }

}
/*手风琴*/
jQuery.fn.accordion=function(){
    //this->$("#my-accordion")
    var $parent=this;
    //侵入class和自定义扩展属性:
    $parent
        .addClass("accordion")//return $parent
        .children(":even") //div title
        .addClass("title") //return div title
        .next() //div content
        .addClass("content fade")
        //return div content
       .first() //=>:first
        .addClass("in")
    //查找触发事件的元素，绑定事件
    $parent.on("click",".title",e=>
            $(e.target).next(".content").toggleClass("in")
                .siblings(".content").removeClass("in")
    );
}
jQuery.fn.tabs=function(){
    var $parent=this;//this->$("#my-tabs")
    $parent
        .children(":first-child").addClass("tabs")
        .children().children().attr("data-toggle","tab")
        .parent().first().addClass("active")
    $parent
        .children(":last-child").addClass("inner")
        .children(":first-child").addClass("active")
    $parent.children(":first-child").on("click","[data-toggle=tab]",e=>{
        e.preventDefault();
        var $tar=$(e.target);
        if(!$tar.parent().is(".active")){
            $tar.parent().addClass("active")
                .siblings().removeClass("active")
            var id=$tar.attr("data-target");
            $(id).addClass("active")
        }
    })
}

