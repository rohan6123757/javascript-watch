setInterval(()=>{
    let d=new Date();
    let dmin=d.getMinutes();
    let dhr=d.getHours();
    let dsec=d.getSeconds();
    let hrrotation=30*dhr +dmin/2;
    let mrotation=6*dmin;
    let secrotation=6*dsec;
    document.getElementsByClassName("hour")[0].style.transform=`rotate(${hrrotation}deg)`;
    document.getElementsByClassName("minute")[0].style.transform=`rotate(${mrotation}deg)`;
    document.getElementsByClassName("second")[0].style.transform=`rotate(${secrotation}deg)`;
},1000);