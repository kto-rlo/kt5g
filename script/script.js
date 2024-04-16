$("document").ready(function(){
    $("a").click(function(e){
        e.preventDefault();
    })

    $(function(){
        if($(window).width() <= 640){
            var curDown = false,
          curYPos = 0,
          curXPos = 0;
        $(window).mousemove(function(m){
          if(curDown === true){
           $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
           $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
          }
        });
        
        $(window).mousedown(function(m){
          curDown = true;
          curYPos = m.pageY;
          curXPos = m.pageX;
        });
        
        $(window).mouseup(function(){
          curDown = false;
        });
        }
    })
})