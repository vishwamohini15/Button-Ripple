let btn1=document.querySelector(".btn")

btn1.addEventListener("mouseover",(event)=>{
    let x=(event.x-btn1.offsetleft);
    // let x=(event.x-btn1.offsetleft);

    let y=(event.y-btn1.offsetTop);

    btn1.style.setProperty("--xpos", x+"px")
    btn1.style.setProperty("--ypos", y+"px")


    console.log("hlo");
})
