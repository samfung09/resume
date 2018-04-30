
$(function(){
    //---------------------------分类菜单--------------------------------------
    (function(){
        $('.cate-menu-item').mouseenter(function(){
            var _index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.cate-con').show();
            $('.cate-con-item').eq(_index).show().siblings().hide();
        })
        $('.cate').mouseleave(function(){
            $('.cate-menu-item').removeClass('active');
            $('.cate-con').hide();
        })
    })();
    //----------------------------分类菜单end--------------------------------
    //----------------------------banner轮播---------------------------------
    (function(){
        var i = 0;
        $('.banner .tab-item').hover(function(){
            var _index = $(this).index();
            i = _index;
            $(this).addClass('active').siblings().removeClass('active');
            $('.pic-list-item').eq(i).stop(true,true).fadeIn().siblings().fadeOut();
        })
        $('.banner .btn-next').click(function(){
            lunbo('r');
        })
        $('.banner .btn-prev').click(function(){
            lunbo('l');
        })
        // 定时器
        var timer = setInterval(function(){
            lunbo('r')
        },2000);
        $('.banner').hover(function(){
            $('.banner .btn').show();
            clearInterval(timer);
        },function(){
            $('.banner .btn').hide();
            timer = setInterval(function(){
                lunbo('r');
            },2000);
        })
        function lunbo(dir){
            if(dir == 'r'){
                i++;
                i = i%8;
            }else if(dir == 'l'){
                i--;
                i = i < 0 ? 7 : i;
            }
            $('.banner .tab .tab-item').eq(i).addClass('active').siblings().removeClass('active');
            $('.pic-list-item').eq(i).stop(true,true).fadeIn().siblings().fadeOut();
        }
    })();
    //-------------------------- banner轮播end----------------------------------
    //--------------------------jdnews选项卡效果--------------------------------
    (function(){
        $('.news .tab-head-item').hover(function(){
            var _index = $(this).index();
            // $('.news .tab-active').animate({'left':_index*50+'px'},100);
            $('.news .tab-active').css('transform','translateX('+_index*50+'px)');
            $('.news .tab-con-item').eq(_index).show().siblings().hide();
        })
    })();
    //--------------------------jdnews选项卡效果end-------------------------------
    //--------------------------秒杀列表无缝滚动效果---------------------------------------
    (function(){
        var ssxWrap = $('.sk-list-wrap');
        var ssxList = $('.sk-list');
        ssX(ssxWrap,ssxList);
    })();
    //--------------------------秒杀列表无缝滚动效果end-----------------------------------
    //--------------------------秒杀special--------------------------------------
    (function(){
        var i = 0;
        $('.sk-special-inditem').hover(function(){
            var _index = $(this).index();
            i = _index;
            $(this).addClass('active').siblings().removeClass('active');
            $('.sk-special-item').eq(i).stop(true,true).fadeIn().siblings().fadeOut();
        })
        var timer;
        function interval(){
            timer = setInterval(function(){
                i++;
                i=i%2;
                $('.sk-special-inditem').eq(i).addClass('active').siblings().removeClass('active');
                $('.sk-special-item').eq(i).stop(true,true).fadeIn().siblings().fadeOut();
            },2000)
        }
        interval();
        $('.sk-special').hover(function(){
            clearInterval(timer);
        },function(){
            interval();
        })
    })();
    //--------------------------秒杀special end--------------------------------------
    //--------------------------楼层分列底部无缝滚动----------------------------------
    (function(){
        var ssxWrap = $('.jd-f .col .ft');
        var ssxList = $('.f1 .col1 .ft .list');
        ssX(ssxWrap,ssxList);
    })();
    //--------------------------楼层分列底部无缝滚动end-------------------------------
    //--------------------------楼层指示器------------------------------------------
    (function(){
        //指示器出现
        $(document).scroll(function(){
            if($(document).scrollTop() > $('.jd-f .f1').offset().top-100){
                $('.jd-f .f-ind').fadeIn();
            }else{
                $('.jd-f .f-ind').fadeOut();
            }
        })
        $('.jd-f .f-ind-item').click(function(){
            var _index = $(this).index();
            var st = $('.jd-f .f-bd').eq(_index).offset().top-50;
            $('html,body').animate({'scrollTop':st},500);
        })
    })();
    //--------------------------楼层指示器end---------------------------------------
    //x轴无缝滚动函数封装
    function ssX(ssxWrap,ssxList){
        var w = ssxList.width();
        var length = ssxList.parent().children().size();
        var i = 0;
        ssxWrap.hover(function(){
            $(this).find('.btn').show();
        },function(){
            $(this).find('.btn').hide();
        })
        ssxWrap.find('.btn-next').click(function(){
            i++;
            if(i==length){
                $(this).parent().children().first().css('left','0');
                i = 1;
            }
            $(this).parent().children().first().stop(true,true).animate({'left':-i*w+'px'});
        })
        ssxWrap.find('.btn-prev').click(function(){
            i--;
            if(i<0){
                $(this).parent().children().first().css('left',-(length-1)*w+'px');
                i = length-2;
            }
            $(this).parent().children().first().stop().animate({'left':-i*w+'px'});
        })
    }
    
    // $(document).click(function(){
    //     $('html,body').animate({'scrollTop':2000},500);
    // })
})
//返回顶部函数
function backtop(){
    $('html,body').animate({'scrollTop':0},500);
}

