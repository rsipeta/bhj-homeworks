document.querySelector(".slider__arrow_next").onclick = function() { moveSlide(true); }
document.querySelector(".slider__arrow_prev").onclick = function() { moveSlide(false); }

var dotElem = document.getElementsByClassName("slider__dot");
for(let i = 0; i < dotElem.length; i++) { dotElem[i].addEventListener("click", function() { activeSlide(i); }) }


var Sliders = document.getElementsByClassName("slider__items")[0].querySelectorAll(".slider__item");
var nCurrent = 0;
var nTotal = Sliders.length;

var Dots = document.getElementsByClassName("slider__dots")[0].querySelectorAll(".slider__dot");

function moveSlide(next){
    document.getElementsByClassName("slider__item_active")[0].classList.remove("slider__item_active");
    Dots[nCurrent].classList.remove("slider__dot_active");

    if (next === true){
        if (nCurrent < nTotal - 1)
            nCurrent++;
        else
            nCurrent = 0;
    } else{
        if (nCurrent === 0)
        nCurrent = nTotal - 1;
    else
        nCurrent--;
    }

    Sliders[nCurrent].classList.add("slider__item_active");
    Dots[nCurrent].classList.add("slider__dot_active");
}

function activeSlide(index) {
    Sliders[nCurrent].classList.remove("slider__item_active");
    Dots[nCurrent].classList.remove("slider__dot_active");
    nCurrent = index;
    Sliders[nCurrent].classList.add("slider__item_active");
    Dots[nCurrent].classList.add("slider__dot_active");

}