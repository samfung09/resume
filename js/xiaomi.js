$(function(){
    //----------------------------------头部导航下拉列表----------------------------------
    (function(){
        $('.header-nav .nav-item.h-dropdown').mouseenter(function(){
            var _index = $(this).index();
            $('.nav-menu').stop(true,true).slideDown();
            $('.menu-list').eq(_index).show().siblings().hide();
        })
        $(".header-nav .nav-item:not('.h-dropdown')").mouseenter(function(){
            $('.nav-menu').stop(true,true).slideUp(300);
        })
        $(".header-nav").mouseleave(function(){
            $('.nav-menu').stop(true,true).slideUp(300);
        })
    })();
    //----------------------------------头部导航下拉列表end----------------------------------
    //----------------------------------左侧分类导航---------------------------------------
    (function(){
        $('.cate .cate-menu-item').mouseenter(function(){
            var _index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.cate-con').show();
            $('.cate-con .cate-con-item').eq(_index).show().siblings().hide();
        })
        $('.cate').mouseleave(function(){
            $('.cate .cate-menu-item').removeClass('active');
            $('.cate-con').hide();
        })
    })();
    //----------------------------------左侧分类导航end---------------------------------------
    //----------------------------------banner轮播------------------------------------------
    (function(){
        var i = 0;
        var len = $('.banner-item').size();
        $('.banner-ind-item').click(function(){
            var _index = $(this).index();
            i = _index;
            $(this).addClass('active').siblings().removeClass('active');
            $('.banner-item').eq(i).fadeIn().siblings().fadeOut();
        })
        $('.banner .btn-next').click(function(){
            lunbo('r');
        })
        $('.banner .btn-prev').click(function(){
            lunbo('l');
        })
        // 定时器
        var timer = setInterval(function(){
            lunbo('r');
        },2000)
        $('.banner').hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                lunbo('r');
            },2000)
        })
        function lunbo(dir){
            if(dir == 'l'){
                i--;
                i = i < 0 ? len-1 : i;
            }else if(dir == 'r'){
                i++;
                i = i % len;
            }
            $('.banner-ind-item').eq(i).addClass('active').siblings().removeClass('active');
            $('.banner-item').eq(i).fadeIn().siblings().fadeOut();
        }
    })();
    //----------------------------------banner轮播end---------------------------------------
    //----------------------------------小米明星单品----------------------------------------
    (function(){
        var i = 0;
        var len = $('.star-goods-list').size();
        var w = $('.star-goods-list').width();
        $('.star-goods .btn-next').click(function(){
            toNext();
        })
        $('.star-goods .btn-prev').click(function(){
            toPrev();
        })
        function toNext(){
            $('.star-goods .btn-prev').attr('href','javascript:;').css('color','#333');
            i++;
            if(i >= len-1){
                i = len-1;
                $('.star-goods-bar').animate({'left':-i*w+'px'});
                $('.star-goods .btn-next').removeAttr('href').css('color','#ccc');
                return;
            }
            $('.star-goods-bar').animate({'left':-i*w+'px'});
        }
        function toPrev(){
            $('.star-goods .btn-next').attr('href','javascript:;').css('color','#333');
            i--;
            if(i <= 0){
                i = 0;
                $('.star-goods-bar').animate({'left':-i*w+'px'});
                $('.star-goods .btn-prev').removeAttr('href').css('color','#ccc');
                return;
            }
            $('.star-goods-bar').animate({'left':-i*w+'px'});
        }
    })();
    //----------------------------------小米明星单品end-------------------------------------
    //----------------------------------楼层商品列表选项卡-----------------------------------
    (function(){
        $('.f .f-tab-ind-item').hover(function(){
            var _index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parents('.f').find('.f-tab-item').eq(_index).show().siblings().hide();
        })
    })();
    //----------------------------------楼层商品列表选项卡end--------------------------------
    // alert($(document).height());
})