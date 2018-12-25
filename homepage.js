//搜索栏效果
window.onload=function(){
	var cover=document.getElementById('head');
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>180){
			cover.style.position='fixed';
			cover.style.backgroundColor='white';
			cover.style.zIndex='1';
		}else{
			cover.style.position='static';
		}
	}
}
//公告栏滚动效果
var notice=document.getElementById("scroll");
function gundong(){
	notice=document.getElementById("scroll");
	notice.style.top=parseInt(notice.style.top)-1+"px";
	if(parseInt(notice.style.top)==-364)
	{
		notice.style.top=0+"px";
	}
}
var roll=setInterval(gundong,50);
function stop(){
	clearInterval(roll);
}
function restart(){
	roll=setInterval(gundong,50);
}
//话费充值额度选择
function change(){
	var choose=document.getElementById("choose");
	var value=document.getElementById("op").value;
	choose.innerHTML="¥"+value;
}
//轮播图效果
function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},10)
	
	}
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}		
	}
	/*图片轮播*/
	var slider=document.getElementById('slider');
	var box=document.getElementById('box');
	var left=document.getElementById('former');
	var right=document.getElementById('latter');
	var oNavlist=document.getElementsByClassName('tag');
	var index=1;
	function next(){
		index++;
		animate(slider,{left:-789*index},function(){
			if(index==7){
				slider.style.left='-789px';
				index=1;
			}
		})
		navChange();
	}
	function prev(){
		index--;
		navChange();
		animate(slider,{left:-789*index},function(){
			if(index==0){
				slider.style.left='-4734px';
				index=6;
			}
		})
	}
	var timer=setInterval(next,2000);
	//鼠标划上，停止轮播,左右箭头淡入
	box.onmouseover=function(){
		clearInterval(timer);
		animate(left,{opacity:80});
		animate(right,{opacity:80});
	}
	//鼠标划出，继续轮播，左右箭头淡出
	box.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,2000);
	}
	//点击左右箭头的效果
	right.onclick=next;
	left.onclick=prev;
	//点击小按钮，对应到相应的图片
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].id='';
		}
		if(index==7){
			oNavlist[0].id='active';
		}else if(index==0){
			oNavlist[5].id='active';
		}else{
			oNavlist[index-1].id='active';
		}
	}
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx=i;
		oNavlist[i].onclick=function(){
			index=this.idx+1;
			animate(slider,{left:-789*index});
			navChange();
		}
	}
	//侧边栏划入划出效果
	
	//小帮资讯
	var slidin1=null;
	var slidout1=null;
	var help=document.getElementById('help');
	help.onmouseover=function(){
		clearInterval(slidin1);
		clearInterval(slidout1);
		slidout1=setInterval(function(){
			if(parseInt(help.style.left)==1228){
				clearInterval(slidout1);
			}else if(parseInt(help.style.left)>1228){
				help.style.left=parseInt(help.style.left)-1+'px';
			}
		},10);
	}
	help.onmouseout=function(){
		clearInterval(slidin1);
		clearInterval(slidout1);
		slidin1=setInterval(function(){
			if(parseInt(help.style.left)==1304){
					clearInterval(slidin1);
			}else if(parseInt(help.style.left)<1304){
				help.style.left=parseInt(help.style.left)+1+'px';
			}
		},10);
	}
	//优惠券
	var slidin2=null;
	var slidout2=null;
	var cheap=document.getElementById('cheap');
	cheap.onmouseover=function(){
		clearInterval(slidin2);
		clearInterval(slidout2);
		slidout2=setInterval(function(){
			if(parseInt(cheap.style.left)==1200){
				clearInterval(slidout2);
			}else if(parseInt(cheap.style.left)>1200){
				cheap.style.left=parseInt(cheap.style.left)-1+'px';
			}
		},10);
	}
	cheap.onmouseout=function(){
		clearInterval(slidin2);
		clearInterval(slidout2);
		slidin2=setInterval(function(){
			if(parseInt(cheap.style.left)==1305){
					clearInterval(slidin2);
			}else if(parseInt(cheap.style.left)<1305){
				cheap.style.left=parseInt(cheap.style.left)+1+'px';
			}
		},10);
	}
	//二维码框
	var slidin3=null;
	var slidout3=null;
	var erweima=document.getElementById('erweima');
	var serwei=document.getElementById('serwei');
	var berwei=document.getElementById('berwei');
	erweima.onmouseover=function(){
		clearInterval(slidin3);
		clearInterval(slidout3);
		serwei.style.opacity=0;
		berwei.style.opacity=1;
		slidout3=setInterval(function(){
			if(parseInt(erweima.style.left)==1218){
				clearInterval(slidout3);
			}else if(parseInt(erweima.style.left)>1218){
				erweima.style.left=parseInt(erweima.style.left)-1+'px';
			}
		},10);
	}
	erweima.onmouseout=function(){
		serwei.style.opacity=1;
		berwei.style.opacity=0;
		clearInterval(slidin3);
		clearInterval(slidout3);
		slidin3=setInterval(function(){
			if(parseInt(erweima.style.left)==1305){
					clearInterval(slidin3);
			}else if(parseInt(erweima.style.left)<1305){
				erweima.style.left=parseInt(erweima.style.left)+1+'px';
			}
		},10);
	}
	//购物车
	var slidin4=null;
	var slidout4=null;
	var gouwuche=document.getElementById('gouwuche');
	gouwuche.onmouseover=function(){
		clearInterval(slidin4);
		clearInterval(slidout4);
		slidout4=setInterval(function(){
			if(parseInt(gouwuche.style.left)==1218){
				clearInterval(slidout4);
			}else if(parseInt(gouwuche.style.left)>1218){
				gouwuche.style.left=parseInt(gouwuche.style.left)-1+'px';
			}
		},10);
	}
	gouwuche.onmouseout=function(){
		clearInterval(slidin4);
		clearInterval(slidout4);
		slidin4=setInterval(function(){
			if(parseInt(gouwuche.style.left)==1305){
					clearInterval(slidin4);
			}else if(parseInt(gouwuche.style.left)<1305){
				gouwuche.style.left=parseInt(cheap.style.left)+1+'px';
			}
		},10);
	}