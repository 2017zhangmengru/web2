//搜索栏效果
window.onload=function(){
	var cover=document.getElementById('head');
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>180){
			cover.style.position='fixed';
			cover.style.backgroundColor='white';
			cover.style.zIndex=20;
		}else{
			cover.style.position='static';
		}
	}
}
//放大镜效果的实现
var objDemo = document.getElementById("demo");
var objSmallBox = document.getElementById("small-box");
var objMark = document.getElementById("mark");
var objFloatBox = document.getElementById("float-box");
var objBigBox = document.getElementById("big-box");
var objBigBoxImage = objBigBox.getElementsByTagName('img')[0];
objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                 objBigBox.style.display = "block"
             }
objMark.onmouseout = function () {
                 objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            }
objMark.onmousemove = function (ev) {
 
                var _event = ev || window.event;  
 
                 var left = _event.clientX - objDemo.offsetLeft-50- objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
                 var top = _event.clientY - objDemo.offsetTop-160- objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;
 
                 //设置边界处理，防止移出小图片
                 if (left < 0) {
                    left = 0;
                 } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }
 
                if (top < 0) {
                    top = 0;
                 } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                     top = objMark.offsetHeight - objFloatBox.offsetHeight;
 
                }

                 objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                 objFloatBox.style.top = top + "px";
                
                //求其比值
                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                 var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
                
                //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
                 objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
 }
//图片切换效果的实现
var box=document.getElementById('box').getElementsByTagName('img')[0];
var front=document.getElementById('front');
var next=document.getElementById('next');
var photo1=document.getElementById('photo1');
var photo2=document.getElementById('photo2');
function switch1(){
	box.src="任务所需小图/img/pp0.jpeg";
	objBigBoxImage.src="任务所需小图/img/pp0.jpeg";
	photo1.style.border="2px solid #ff9003";
	photo2.style.border="";
}
front.onclick=switch1;
photo1.onmouseover=switch1;
function switch2(){
	box.src="任务所需小图/img/pp1.jpeg";
	objBigBoxImage.src="任务所需小图/img/pp1.jpeg";
	photo1.style.border="";
	photo2.style.border="2px solid #ff9003";
}
next.onclick=switch2;
photo2.onmouseover=switch2;
//选择容量
var v1=document.getElementsByClassName('v1')[0];
var v2=document.getElementsByClassName('v2')[0];
var choose=document.getElementsByClassName('choose')[0];
var span=choose.getElementsByTagName('span')[0];
v1.onclick=function(){
    v1.id='vol';
    v2.id='';
    span.innerHTML='"150ml"';
}
v2.onclick=function(){
    v1.id='';
    v2.id='vol';
    span.innerHTML='"200ml"';
}
//数量加减
var sub=document.getElementsByClassName('sub')[0];
var add=document.getElementsByClassName('add')[0];
var num=document.getElementsByClassName('figinput')[0];
function changeValue(obj){
    $(obj).attr("value",$(obj).value());
}
sub.onclick=function(){
    if(num.value<=1){
        sub.style.cursor='not-allowed';
    }else if(num.value>1){
        num.value-=1;
    }
    if(num.value<=1){
        sub.style.cursor='not-allowed';
    }else{
        sub.style.cursor='pointer';
    }
 }   
sub.onmouseover=function(){
    if(num.value<=1){
        sub.style.cursor='not-allowed';
    }else{
        sub.style.cursor='pointer';
    }
}
add.onclick=function(){
    if(num.value>=5){
        add.style.cursor='not-allowed';
    }else if(num.value<5){
        num.value=parseInt(num.value)+1;
    }
    if(num.value>=5){
         add.style.cursor='not-allowed';
    }else{
         add.style.cursor='pointer';
    }
}
add.onmouseover=function() {
    if(num.value>=5){
         add.style.cursor='not-allowed';
    }else{
         add.style.cursor='pointer';
    }
}
//加入购物车效果
var mengzhao=document.getElementById('disappear');
var addgouwuche=document.getElementsByClassName('buylater')[0];
var ret=document.getElementById('ret');
var cont=document.getElementById('cont');
addgouwuche.onclick=function(){
    mengzhao.id="appear";
}
ret.onclick=function(){
    mengzhao.id="disappear";
}
cont.onclick=function(){
    mengzhao.id="disappear";
}