let image = document.querySelector(".image")
let btnNext = document.getElementById("next")
let btnPrev = document.getElementById("prev")

let pos = 0;

btnNext.addEventListener("click" ,()=> {
    pos -= 90;
    image.style.transform = `rotateY(${pos}deg)`
})

btnPrev.addEventListener("click" ,()=> {
    pos += 90;
    image.style.transform = `rotateY(${pos}deg)`
})