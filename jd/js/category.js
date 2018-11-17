window.addEventListener('load', function () {
    //初始化左侧分类swiper内容滚动
    var mySwiper = new Swiper('.category-left .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView: "auto",
        freeMode: true,//自由滑动,可以不用每次都滑动一页的距离
    });
    //初始化右侧分类swiper内容滚动
    var mySwiper = new Swiper('.category-right .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView: "auto",
        freeMode: true,//自由滑动,可以不用每次都滑动一页的距离

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        //鼠标滚轮
        mousewheel: true,
    });
});