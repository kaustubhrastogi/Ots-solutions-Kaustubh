let timer=document.getElementById("stopwatch")
let min=0;
let sec=0;
let msec=0;
let stopTime=true

const stop = () =>{
if(stopTime==true){
    stopTime=false
    start()
}
}
const start=()=>{
    if(stopTime==false){
        msec=parseInt(msec)
        sec=parseInt(sec)
        min=parseInt(min)
        msec=msec+1
    }
}
timer.innerHTML= min+":"+sec+":"+msec