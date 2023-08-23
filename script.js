
const endD= "31 August 2023 09:00 PM";
document.getElementById("end-date").innerHTML=endD;


const clock=()=>{

    const EndDate= new Date(endD);
    const currentDate= new Date();
    const diff=(EndDate-currentDate)/1000;

    const inputs=document.querySelectorAll('input')

    if(diff<0) return;

    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
   
   
}

setInterval(clock,1000);





