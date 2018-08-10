myHeader();
timeGo();
mySlides();
function myHeader(){
    //获取头部的标签
    var header=document.querySelector("header");
    //获取轮播图的高度
    var height=document.querySelector(".slides img").offsetHeight;
    window.onscroll=function(){
    //兼容问题
    var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrolltop;

    //透明度
    var tmpOpa=scrollTop/height;
    //判断
    if(tmpOpa>0.9){
        tmpOpa=0.9;
    }
    //赋值
    header.style.backgroundColor="rgba(201,21,35,"+tmpOpa+")";
}
}

function timeGo(){
    var time=1*60*60;
    //获取时间的标签
    var spans=document.querySelectorAll(".timer>span");
    setTime();
    //开启定时器
    var timeId=setInterval(function(){
        time--;
        setTime();
    //判断是否到时间
    if(time==0){
        clearInterval(timeId);
        console.log("时间到了");
    }
},1000);
function setTime(){
    //时
    var hour=parseInt(time/60/60);
    //分
    var minutes=parseInt(time/60-hour*60);
    //秒
    var seconds=time-hour*60*60-minutes*60;
    var hour0=parseInt(hour/10);
    var hour1=hour%10;
    var minutes0=parseInt(minutes/10);
    var minutes1=minutes%10;
    var seconds0=parseInt(seconds/10);
    var seconds1=seconds%10;
    //赋值
    spans[0].innerText=hour0;
    spans[1].innerText=hour1;
    spans[3].innerText=minutes0;
    spans[4].innerText=minutes1;
    spans[6].innerText=seconds0;
    spans[7].innerText=seconds1;
}

}

function mySlides(){
    //轮播图里的ul
    var slides_ul=document.querySelector(".slides_ul");
    //轮播图的索引
    var index=1;
    //显示第一张图片
    slides_ul.style.transform="translateX(-"+index+"0%)";
    //开启定时器
    setInterval(function(){
index++;
slides_ul.style.transition="transform .3s";
    //显示第一张图片
    slides_ul.style.transform="translateX(-"+index+"0%)";
},1000);

slides_ul.addEventListener("transitionend",function(){
    if(index>=9){
        index=1;
        slides_ul.style.transition="none";
        //显示第一张图片
        slides_ul.style.transform="translateX(-"+index+"0%)";
    }
})
}
