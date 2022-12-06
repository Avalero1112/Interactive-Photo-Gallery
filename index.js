//const e = require("express");

let thumbnail = document.getElementsByClassName('thumbnail');
const searchBar = document.getElementById('search');
const gridChildren = document.getElementById('grid');
let imgName = document.getElementsByTagName('p');
const overlay = document.getElementsByClassName('overlay');
let overlaySwitch = document.getElementsByClassName('1');
const arrowLeft = document.getElementsByClassName('fa-chevron-left');
const arrowRight = document.getElementsByClassName('fa-chevron-right');
const xMark = document.getElementsByClassName('fa-xmark');
const shadow = document.getElementsByClassName('shadow');
const clickGone = document.getElementById('clickGone');
const h6 = document.getElementsByTagName("h6");
const img = document.getElementsByClassName("img");
let scroll;
console.log(img);

const li = document.getElementsByClassName("OvLayContent");

searchBar.addEventListener('keyup', (e) => {
    for (let i = 0; i < imgName.length; i++) {

    const className = e.target.value;
   
    if (!thumbnail[i] || !li[i].innerHTML.toLowerCase().includes(className.toLowerCase())) {
        thumbnail[i].style.display="none";
    } else {
        thumbnail[i].style.display="grid";
    }
    }});

const prevContent = document.getElementsByClassName("prevContent");
const nextContent = document.getElementsByClassName("nextContent");


for (let i = 0; i < li.length; i++) {
    
    arrowLeft[0].style.display = "none";
    console.log(i);

    thumbnail[i].addEventListener("click", function () {
        console.log(imgName[i].innerHTML);
        li[i].style.display = "flex";
        arrowLeft[i].style.display = "flex";
        arrowRight[i].style.display = "flex";
        console.log(i);
        if (i === 11) {
            arrowRight[i].style.display = "none";
        } else if (i === 0) {
            arrowLeft[i].style.display = "none";
        }
        
    })

    xMark[i].addEventListener("click", function () {
        li[i].style.display = "none";
        arrowLeft[i].style.display = "none";
        arrowRight[i].style.display = "none";
    })

    arrowLeft[i].addEventListener("click", function () {

        if (i === 1) {
            img[i].classList.add("imgToNext");
            prevContent[i - 1].classList.add("prevAnimation");
        } else {
        prevContent[i - 1].classList.add("prevAnimation");
        img[i].classList.add("imgToNext");
        prevContent[i - 2].classList.add("prevContentSlide");
        }
            mobileAnimationPrev();
            prevDelay();
            resetPrevClasses();
})


    arrowRight[i].addEventListener("click", function () {
        goToNextImage();
    })

    function goToNextImage () {
        if (i <= 10 && i != 0) {
            nextContent[i].classList.add("nextAnimation");
            prevContent[i - 1].classList.add("prevDisappear");
            img[i].classList.add("imgToPrev");
            if (i === 10) {
                console.log("Last img");
            } else {
                nextContent[i + 1].classList.add("nextContentSlide");
            }

            if (i === 2) {
                nextContent[i].classList.add("nextAnimation");
                img[i].classList.add("imgToPrev");
            }


            mobileAnimationNext();
            resetClasses();
            delay();
        }

        if (i === 11) {
            arrowRight[i].style.display = "none";
        }
        if (i === 0) {
            nextContent[i].classList.add("nextAnimation");
            nextContent[i + 1].classList.add("nextContentSlide");
            mobileAnimationNext();
            delay();
        }
}

    function mobileAnimationNext () {
        if (window.innerWidth <= 844) {
            img[i].classList.remove("imgToNext");
            if (i < 11) {
            nextContent[i].classList.remove("nextAnimation");
        nextContent[i].classList.remove("nextContentSlide");
            }
        img[i].classList.remove("imgToPrev");
        li[i].style.display = "none";
        li[i + 1].style.display = "flex";
        arrowLeft[i + 1].style.display = "flex";
        arrowRight[i + 1].style.display = "flex";
        }
    }

    function mobileAnimationPrev () {
        if (window.innerWidth <= 844) {
 
            prevContent[i - 1].classList.remove("prevAnimation");
            prevContent[i - 1].classList.remove("prevContentSlide");
            prevContent[i - 1].classList.add("slidePrev");
            prevContent[i - 1].classList.remove("prevDisappear");
            
        li[i].style.display = "none";
        li[i - 1].style.display = "flex";
        arrowLeft[i - 1].style.display = "flex";
        arrowRight[i - 1].style.display = "flex";
    }}

    function resetClasses () {

    setTimeout(() => {
        nextContent[i].classList.remove("nextAnimation");
        nextContent[i].classList.remove("nextContentSlide");
        prevContent[i - 1].classList.remove("prevDisappear");
        img[i].classList.remove("imgToPrev");
    }, "200")

    setTimeout (() => {
        nextContent[i + 1].classList.remove("nextContentSlide");
    },"200")
    }

    function resetPrevClasses () {
        setTimeout(() => {
            prevContent[i - 1].classList.remove("prevAnimation");
            prevContent[i - 1].classList.remove("prevContentSlide");
        }, "200");

        setTimeout(() => {
            img[i].classList.remove("imgToNext");
        },"200");
    }


    function delay () {
        if (window.innerWidth <= 844) {
            return;
        } else {
        setTimeout (() => {
        li[i].style.display = "none";
        li[i + 1].style.display = "flex";
        arrowLeft[i + 1].style.display = "flex";
        arrowRight[i + 1].style.display = "flex";
        }, "200")
    }}

    function prevDelay () {
        if (window.innerWidth <= 844) {
            return 
        } else {
        setTimeout (() => {
        li[i].style.display = "none";
        li[i - 1].style.display = "flex";
        arrowLeft[i - 1].style.display = "flex";
        arrowRight[i - 1].style.display = "flex";
        }, "200")}
    }

}





