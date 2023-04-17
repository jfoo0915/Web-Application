startTime();
setInterval("startTime()", 1000);

function startTime()
{
   var today = new Date();

   var localTime = today.toLocaleTimeString();
   var ThisDay=today.getDate();
   var ThisMonth=today.getMonth()+1;
   var ThisYear=today.getFullYear();   


   var workerday=new Date("May 1, 2021");
   var moondays=new Date("June 7, 2021");  

   var dayleft1=(workerday-today)/(1000*60*60*24);

   var dayleft2=(moondays-today)/(1000*60*60*24);

  var MonthTxt = new Array("", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December");

   document.getElementById("currentdate").innerHTML = "Today is " + MonthTxt[ThisMonth] + " " + ThisDay + ", " + ThisYear + " " + localTime;
  
   if (dayleft1 >0) {
      innerHTML = dayleft1 ;
      document.getElementById("dLeft").textContent = Math.floor(dayleft1);
      
   }  

   if (dayleft2 >0) {
       innerHTML = dayleft2 ;
       document.getElementById("d1Left").textContent = Math.floor(dayleft2);
       
    }  

  


}  

  






