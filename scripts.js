

const nextButton = document.getElementById("next-button");
const prevbutton = document.getElementById("prev-button");
const slide = document.getElementsByClassName("slide");
const miniButton =document.getElementsByClassName("mini-pic");
let bc = document.getElementById("mobileContainer");
const btnimg = document.querySelectorAll(".mini-pic img");

let backgroundColors =["yellow","rgb(80,80,80)","orange","rgb(243, 225, 255)","purple",
    "lightgreen","lightgray","gray","lightgray"];
let count = 0;

start();

nextButton.addEventListener("click",()=>{
    nextSlide();
});

prevbutton.addEventListener("click",()=>{
    prevSlide();
});

for(let j=0;j<miniButton.length;j++){
    miniButton[j].addEventListener("click",()=>{
        for(let k=0; k<slide.length; k++){
            slide[k].style.display = "none";
        }
        slide[j].style.display ="flex";
        count = j;
        changeBackground();
        checkButton();
    })
}

function nextSlide(){
    if(count!==slide.length-1){
        count++;
        for(let i=0; i<slide.length;i++){
            slide[i].style.display ="none";
        }
        slide[count].style.display ="flex";
    }
    changeBackground();
    checkButton();
}

function prevSlide(){
    if(count>0){
        count--;
        for(let i=0; i<slide.length;i++){
            slide[i].style.display ="none";
        }
        slide[count].style.display ="flex";
    }
    changeBackground();
    checkButton();

}

function start(){
    for(let i=0; i<slide.length;i++){
        slide[i].style.display ="none";
    }
    slide[0].style.display ="flex";
    changeBackground();
    checkButton();
}

function changeBackground(){
    bc.style.backgroundColor = backgroundColors[count];
    for(let h=0;h<slide.length;h++){
        btnimg[h].style.border = "none";
    }
    btnimg[count].style.border = "2px solid white";
}


function checkButton(){
    if(count===slide.length-1){
        nextButton.classList.add("hidden");
    }else {
        nextButton.classList.remove("hidden");
    }

    if(count===0){
        prevbutton.classList.add("hidden");
    }else {
        prevbutton.classList.remove("hidden");
    }
}

setInterval(nextSlide,5000);



