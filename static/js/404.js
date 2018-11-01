/**
 * Created by web on 2018/10/22.
 */
var fourObj=function(){
    this.alive=[];  //是否活动
    this.pic1=new Image();
    this.pic2=new Image();
    this.pic3=new Image();
    this.pic4=new Image();
    this.x=[];
    this.y=[];
    this.spd=[];  //生长漂浮速度
    this.fourType=[];
}

fourObj.prototype.num=20;

fourObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.spd[i]=Math.random()*0.017+0.03;
        this.fourType[i]=""
    }
    this.pic1.src="./img/404-01.png";
    this.pic2.src="./img/404-02.png";
    this.pic3.src="./img/404-03.png";
    this.pic4.src="./img/404-04.png";
}

fourObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.y[i]+=this.spd[i]*40;
            if(this.fourType[i]=="1"){
                var pic=this.pic1;
            }else if(this.fourType[i]=="2"){
                var pic=this.pic2;
            }else if(this.fourType[i]=="3"){
                var pic=this.pic3;
            }else{
                var pic=this.pic4;
            }
            ctx.drawImage(pic,this.x[i]-16,this.y[i]-16,32,32);
            if(this.y[i]>700){
                this.alive[i]=false;
            }
        }
    }
}
//7.创建全局函数，监听画布食物数量，不足15个活动出生
function fourMonitor(){
    var sum=0;
    for(var i=0;i<four.num;i++){
        if(four.alive[i]==1){
            sum++;
        }
    }
    if(sum<four.num){
        sendfour();
        return;
    }
}
//8.创建全局函数，从食物中挑选一个不活动食物
function sendfour(){
    for(var i=0;i<four.num;i++){
        if(!four.alive[i]){
            four.born(i);
            return;
        }
    }
}
//9.在食物类中添加方法，【出生】，指定状态，宽度，类型，坐标
fourObj.prototype.born=function(i){
    this.x[i]=Math.random()*1300;
    this.y[i]=Math.random()*100;
    this.alive[i]=true;
    this.fourType[i]=Math.random()<0.25?"1":Math.random()<0.5?"2":Math.random()<0.75?"3":"4";
}


//创建游戏所有全局变量
//创建游戏中各个对象调用初始化和绘制方法
//1.创建全局变量
var can=null;
var ctx=null;
var canWidth=0;
var canHeight=0;
//1.4创建全局对象保存404
var four=null;
//1.5创建全局变量保存鼠标位置
var mx=0;
var my=0;
//1.6创建两个变量保存上一帧执行时间开始，两帧之间时间差
var lastTime=0;
var deltaTime=0;

//2.创建入口函数
function game(){
    maininit();
    gameloop();
}
//3.创建初始化函数
function maininit(){
    //3.1初始化画布画笔 画布宽度和高度
    can=document.getElementById("canvas");
    ctx=can.getContext("2d");
    canWidth=can.width;
    canHeight=can.height;
    //3.5创建404对象并且调用初始化方法
    four=new fourObj();
    four.init();
    //3.6为画布1绑定监听鼠标移动事件处理函数
    can.onclick=function(e){
        if(e.offsetX||e.layerX){
            mx=e.offsetX==undefined?e.layerX:e.offsetX;
        }
        if(e.offsetY||e.layerY){
            my=e.offsetY==undefined?e.layerY:e.offsetY;
        }
        four.alive[four.num]=true;
        four.x[four.num]=mx;
        four.y[four.num]=my;
        four.spd[four.num]=Math.random()*0.017+0.03;
        four.fourType[four.num]=Math.random()<0.25?"1":Math.random<0.5?"2":Math.random()<0.75?"3":"4";
        if(four.fourType[four.num]=="1"){
            var pic=four.pic1;
        }else if(four.fourType[four.num]=="2"){
            var pic=four.pic2;
        }else if(four.fourType[four.num]=="3"){
            var pic=four.pic3;
        }else{
            var pic=four.pic4;
        }
        four.num++;
    }
    //3.7初始化两帧之间时间差
    lastTime=Date.now();
    deltaTime=0;

}
//4.创建绘制函数
function gameloop(){
    //4.1创建智能定时器
    requestAnimationFrame(gameloop);
    //4.2调用食物监听方法
    fourMonitor();
    //4.3清除画布1上所有元素
    ctx.clearRect(0,0,canWidth,canHeight)
    //4.4计算时间差
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //4.11调用特效绘制方法
    four.draw()
}
//5.当index.html加载结束时调用入口函数
document.body.onload=game;

