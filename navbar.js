"use strict"


let hamburger = document.getElementById("hamburger");
let exitbtn = document.getElementById("exit");
let navoptions = document.getElementsByClassName("option");
let navicons = document.getElementsByClassName("icon");
let content2 = document.getElementById("box2");
let container = document.getElementById("container")


hamburger.addEventListener("click",()=>{
    if(content2.style.display==="block"){
        content2.style.display="none"
    }
    else{
        content2.style.display="block"
    }
})

exitbtn.addEventListener("click",()=>{
    
    if(content2.style.display==="block"){
        content2.style.display="none"
    }
    else{
        content2.style.display="block"
    }
})

exitbtn.addEventListener("mouseover",()=>{
    exitbtn.style.transform='rotate(360deg)';
})
exitbtn.addEventListener("mouseout",()=>{
    exitbtn.style.transform='rotate(-360deg)';
})

for(let i=0;i<navicons.length;i++){
    navicons[i].addEventListener("mouseover",()=>{
        navicons[i].style.color="rgb(42, 95, 138)";
        navicons[i].style.transform = 'scale(1.1)';
    })
    navicons[i].addEventListener("mouseout",()=>{
        navicons[i].style.color="rgb(0, 140, 255)";
        navicons[i].style.transform = 'scale(1)';
    })
}

for(let i=0;i<navoptions.length;i++){
    navoptions[i].addEventListener("mouseover",()=>{
        navoptions[i].style.backgroundColor="rgb(109, 156, 194)";
        navoptions[i].style.transform = 'scale(1.1)';
        navoptions[i].style.transition = "1s";
    })
    navoptions[i].addEventListener("mouseout",()=>{
        navoptions[i].style.backgroundColor="rgb(255, 255, 255)";
        navoptions[i].style.transform = 'scale(1)';
    })
}

window.onclick = function(event) {
    if (event.target == container) {
        content2.style.display = "none";
    }
}