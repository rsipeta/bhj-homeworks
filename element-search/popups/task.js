document.getElementById("modal_main").classList.add("modal_active");


var closeElem = document.getElementsByClassName("modal__close");

for(var i = 0; i < closeElem.length; i++) {
    closeElem[i].addEventListener('click', function(){
        this.closest(".modal").classList.remove("modal_active");
    }, false);
}


document.getElementsByClassName("show-success")[0].onclick = function(){
    document.getElementsByClassName("btn_success")[0].closest(".modal").classList.add("modal_active");
}