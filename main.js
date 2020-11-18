 
 var sp = document.getElementsByTagName("span");
 var btn_start=document.getElementById("start");
 var btn_stop=document.getElementById("stop");
 var t;
 var ms=0,s=0,mn=0,h=0;
  
  

 function start()
    {
  t =setInterval(update_chrono,100);
  btn_start.disabled=true;
 
    }
 
 function update_chrono()
    {
    ms+=1;
  
        if(ms==10)
        {
        ms=1;
        s+=1;
        }
     
        if(s==60)
        {
        s=0;
        mn+=1;
        }


        if(mn==60)
        {
        mn=0;
        h+=1;
        }
     
        sp[0].innerHTML=h+" h";
        sp[1].innerHTML=mn+" min";
        sp[2].innerHTML=s+" s";
        sp[3].innerHTML=ms+" ms";

     }
 
  
   function stop()
   {
   clearInterval(t);
   btn_start.disabled=false;    
   }
 
 function reset()

    {
  clearInterval(t);
   btn_start.disabled=false;
   ms=0,s=0,mn=0,h=0;
  
   sp[0].innerHTML=h+" h";
   sp[1].innerHTML=mn+" min";
   sp[2].innerHTML=s+" s";
   sp[3].innerHTML=ms+" ms";
    }
