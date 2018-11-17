
//页面加载完成之后再执行js代码
window.addEventListener('load',function(){


    //页面一加载的时候就调用setOpacity函数
    //1.获取轮播图的高度
    var slideHeight = document.getElementById('slide').offsetHeight;
    //2.获取头部元素
    var header = document.getElementById('header');
    //3.给window添加一个滚动条的滚动事件
    window.addEventListener('scroll',setOpacity);
    setOpacity();
    function setOpacity(){
        //3.1获取滚动条滚动出去的高度
        var scrollHeight = document.body.scrollTop||window.scrollTop||document.documentElement.scrollTop;
        // console.log(scrollHeight);
        //js中window没有scrollTop方法
        // console.log($(window).scrollTop());
        //3.2计算opacity的值
        var opacity = scrollHeight / slideHeight;
        // console.log(opacity);
        
        if(opacity <= 1) {
            header.style.backgroundColor = "rgba(222,24,27,"+opacity+")";
        }
        else {
            header.style.backgroundColor = "rgba(222,24,27,1)";
        }
    }
    



    //2.初始化swiper
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // vertical垂直切换选项
        loop: true, // 循环模式选项
        
        autoplay: {
		    delay: 3000,//间隔时间 
		    stopOnLastSlide: false,//在最后一张是否要停止  如果开启loop模式无效
		    disableOnInteraction: false,// 是否要当(交互的时候)滑动的时候禁用自动轮播图
		  },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      }) 
      
      
      //3.倒计时
      //获取倒计时的结束时间-使用new Date传参-年,月,日,分,秒,毫秒,国外的月份是从0开始的
      //getTime()可以将指定时间距离1977年的毫秒数计算出来
      var futureTime = new Date(2018,10,14,15,48,00).getTime();//毫秒数
      //获取当前时间--使用new Date(),不传参,表示当前时间
      var currentTime = new Date().getTime();
      //时间间隔
      var time = Math.floor((futureTime - currentTime)/1000);//秒数
      //获取页面显示时分秒的所有span元素
      var spans = document.querySelectorAll('.seckill-time span');
      //定义定时器,让总时间每隔一秒--
      var timeID = setInterval(function (){
          //每隔一秒--
          time--;
          if(time<=0) {
            //   clearInterval(timeID);
            //   return;
            time = 7200;
          }
          //计算当前要显示的小时数--一小时为3600秒,而time是秒数
          var hour = Math.floor(time / 3600);
          //计算当前要你显示的分钟--
          var minute = Math.floor(time / 60 % 60);
          //求秒
          var second = time % 60;
          //把求得的时间数显示到页面上
          spans[0].innerHTML = Math.floor(hour/10);//小时的十位数
          spans[1].innerHTML = hour % 10;
          spans[3].innerHTML = Math.floor(minute/10);
          spans[4].innerHTML = minute%10;
          spans[6].innerHTML = Math.floor(second/10);
          spans[7].innerHTML = second%10;
      },1000);

});