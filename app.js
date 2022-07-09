window.onload = ()=>{
    var seconds = 00;
    var tens = 00;
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var buttonStart=document.getElementById('button-start');
    var buttonStop=document.getElementById('button-stop');
    var buttonReset=document.getElementById('button-reset');
    var Interval;
// step 1 - call the startTimer method every 10 milliseconds
// using setInterval method
    buttonStart.onclick = () =>{
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        console.log(Interval);
        }
        startTimer = () =>{
        tens++;
        console.log(tens);

        if(tens<=9){
            appendTens.innerHTML="0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
             seconds++;
             console.log(seconds);
             appendSeconds.innerHTML="0"+seconds;
             tens=0;
             appendTens.innerHTML="0"+tens;
        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
        }
        buttonStop.onclick=() => {
            clearInterval(Interval);
        }
        buttonReset.onclick = ()=>{
            clearInterval(Interval);
            tens="00";
            seconds="00";
            appendTens.innerHTML=tens;
            appendSeconds.innerHTML=seconds;
        }
}    