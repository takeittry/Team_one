/**
 * Created by web on 2018/10/22.
 */
var fourObj=function(){
    this.alive=[];  //�Ƿ�
    this.pic1=new Image();
    this.pic2=new Image();
    this.pic3=new Image();
    this.pic4=new Image();
    this.x=[];
    this.y=[];
    this.spd=[];  //����Ư���ٶ�
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
//7.����ȫ�ֺ�������������ʳ������������15�������
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
//8.����ȫ�ֺ�������ʳ������ѡһ�����ʳ��
function sendfour(){
    for(var i=0;i<four.num;i++){
        if(!four.alive[i]){
            four.born(i);
            return;
        }
    }
}
//9.��ʳ��������ӷ���������������ָ��״̬����ȣ����ͣ�����
fourObj.prototype.born=function(i){
    this.x[i]=Math.random()*1300;
    this.y[i]=Math.random()*100;
    this.alive[i]=true;
    this.fourType[i]=Math.random()<0.25?"1":Math.random()<0.5?"2":Math.random()<0.75?"3":"4";
}


//������Ϸ����ȫ�ֱ���
//������Ϸ�и���������ó�ʼ���ͻ��Ʒ���
//1.����ȫ�ֱ���
var can=null;
var ctx=null;
var canWidth=0;
var canHeight=0;
//1.4����ȫ�ֶ��󱣴�404
var four=null;
//1.5����ȫ�ֱ����������λ��
var mx=0;
var my=0;
//1.6������������������һִ֡��ʱ�俪ʼ����֮֡��ʱ���
var lastTime=0;
var deltaTime=0;

//2.������ں���
function game(){
    maininit();
    gameloop();
}
//3.������ʼ������
function maininit(){
    //3.1��ʼ���������� ������Ⱥ͸߶�
    can=document.getElementById("canvas");
    ctx=can.getContext("2d");
    canWidth=can.width;
    canHeight=can.height;
    //3.5����404�����ҵ��ó�ʼ������
    four=new fourObj();
    four.init();
    //3.6Ϊ����1�󶨼�������ƶ��¼�������
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
    //3.7��ʼ����֮֡��ʱ���
    lastTime=Date.now();
    deltaTime=0;

}
//4.�������ƺ���
function gameloop(){
    //4.1�������ܶ�ʱ��
    requestAnimationFrame(gameloop);
    //4.2����ʳ���������
    fourMonitor();
    //4.3�������1������Ԫ��
    ctx.clearRect(0,0,canWidth,canHeight)
    //4.4����ʱ���
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //4.11������Ч���Ʒ���
    four.draw()
}
//5.��index.html���ؽ���ʱ������ں���
document.body.onload=game;

