$(function(){
    // (function(){
    //     var a = 3;
    // })();
    // (function(){
    //     var a = 1;
    //     alert(a);
    // })();
    // if(screen.width<768){
    //     $('p.hover').removeClass('hover');
    // }
    document.write('<h1>hello world</h1>');
    document.write('<h2>hello world</h2>');
    document.write('<h3>hello world</h3>');
    document.write('<h4>hello world</h4>');
    for(var i = 0; i<9; i++){
        if(i<5){
            for(var j = 0; j<=i; j++){
                document.write('❤');
            }
        }else{
            for(var j = 0; j<9-i; j++){
                document.write('❤');
            }
        }
        document.write('<br>');
    }
    for(var i = 1; i<=9; i++){
        for(var j = 1; j<=i; j++){
            document.write(j+'*'+i+'='+j*i+'&emsp;');
        }
        document.write('<br>');
    }
    
    (function(){
        var a = b = 321;
    })();
    alert(b);
})