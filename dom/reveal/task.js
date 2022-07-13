var isInViewport = function(element){
    const viewportHeight = window.innerHeight;
    const elementTop =
    element.getBoundingClientRect().top;
    return elementTop > 0 && elementTop < viewportHeight;
    };

const div = document.querySelectorAll('.reveal');

window.onscroll = function(){
    //console.log(document.documentElement.scrollTop || document.body.scrollTop);
    div.forEach(element => {
        if (isInViewport(element)) {
            if (!element.classList.contains("reveal_active")) {
                element.classList.add("reveal_active");
                console.log("Show " + element);
            }
        }
        else {
            if (element.classList.contains("reveal_active")){
                element.classList.remove("reveal_active");                
                console.log("Hide " + element);
            }
        }
    });
}


    