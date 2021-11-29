const onlyVal =(variable)=>{
    let val = variable;
    let finalTime;
    let hrs=(val/3600)|0;
    val=val%3600;
    finalTime="Hours = "+hrs;
    let minutes=(val/60)|0;
    val=val%60;
    finalTime=finalTime+" , minutes = "+minutes;
    finalTime=finalTime+", seconds = "+val;
    console.log(finalTime);
}

let variable=prompt("Enter the time in seconds");

onlyVal(variable);