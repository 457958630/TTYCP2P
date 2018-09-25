$(function () {
    // 首页tab切换
    $('.main .function .top a').on("mouseenter", function () { //给a标签添加事件  
        var index = $(this).index(); //获取当前a标签的个数  
        $(this).parent().next().find(".box").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示  
        $(this).addClass("active").siblings().removeClass("active");
    })

    // 项目详情切换
    $(".details .information .top li a").on("click", function () { //给a标签添加事件  
        var index = $(this).parent().index(); //获取当前a标签的个数 
        $(this).parent().parent().parent().next().find(".box").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示  
        $(this).addClass("active").parent().siblings().children().removeClass("active");
    })
})