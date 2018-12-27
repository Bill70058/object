     var xleft=0;
     var ytop=0;
     var movex=1;
     var movey=1;
     function  move(){
         xleft+=movex;
         ytop+=movey;
         var xgg=document.getElementById("xgg");
         xgg.style.top=ytop;
         xgg.style.left=xleft;
        //  if(xleft+xgg.offsetWidth>=document.body.clientWidth|| xleft<=0){
        //      movex=-movex;
        //  }
//注意 document.body.clientHeight 兼容问题
             if(ytop+xgg.offsetHeight>=document.body.clientHeight||ytop<=0){
             movey=-movey;
         }

     }
     setInterval(move,10);

