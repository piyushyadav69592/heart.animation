let body = document.querySelector("body");



document.addEventListener("mousemove", function (event) {
    let span = document.createElement("SPAN")
    span.style.position = "absolute";
    span.style.left = event.offsetX + "px";
    span.style.top = event.offsetY + "px";
    body.appendChild(span);

    // remove span tag
    setTimeout(()=>{
        span.remove();
    },5000);


    // heart ko diffrent size me banana

    let size = Math.floor(Math.random()*100)
    span.style.height= size+"px"
    span.style.width= size+"px"
})