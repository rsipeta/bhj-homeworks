function Show(parent, index){
    let current = parent.querySelector(".rotator__case_active");

    let next = current.nextElementSibling;
    if (next === null) next = parent.querySelector(".rotator__case");
    current.classList.remove("rotator__case_active");
    next.classList.add("rotator__case_active");
    
    next.style.color = next.getAttribute("data-color");

    clearInterval(interval[index]);
    interval[index] = setInterval(Show, next.getAttribute("data-speed"), parent, interval);
}


let interval = [];
let count = 0;

document.querySelectorAll(".card").forEach(element => {
    interval.push(setInterval(Show, 1000, element, count));
    count++;
});
