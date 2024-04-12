

var hour;
var minute;
var second;


setInterval(()=>{
    let myDate=new Date();
    hour=myDate.getHours();
    minute=myDate.getMinutes();
    second=myDate.getSeconds();

    document.getElementById('hour').innerText=hour;
    document.getElementById('minute').innerText=minute;
    document.getElementById('second').innerText=second;

},1000)