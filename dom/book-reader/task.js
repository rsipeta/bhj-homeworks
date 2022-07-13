var menuElem = document.getElementsByClassName("font-size");

for(var i = 0; i < menuElem.length; i++) {
    menuElem[i].onclick = function(){        
        
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        this.classList.add("font-size_active");
        
        let book = document.querySelector(".book");
    
        if (this.classList.contains("font-size_small")) {
            book.classList.add("font-size_small");
            if(book.classList.contains("font-size_big")) book.classList.remove("font-size_big");
        }
    
        if (this.classList.contains("font-size_big")) {
            book.classList.add("font-size_big");
            if(book.classList.contains("font-size_small")) book.classList.remove("font-size_small");
        }
    
        if (!this.classList.contains("font-size_small") && !this.classList.contains("font-size_big")) {
            if(book.classList.contains("font-size_big")) book.classList.remove("font-size_big");
            if(book.classList.contains("font-size_small")) book.classList.remove("font-size_small");
        }
    
        return false;
    };
}


var menu2Elem = document.getElementsByClassName("color");
for(var i = 0; i < menu2Elem.length; i++) {
    menu2Elem[i].onclick = function() {

        this.parentElement.querySelector(".color_active").classList.remove("color_active");
        this.classList.add("color_active");
        
        let book = document.querySelector(".book");

        if (this.getAttribute("data-text-color") != null)
            book.style.color = this.getAttribute("data-text-color");
        
        if (this.getAttribute("data-bg-color") != null)
            book.style.background = this.getAttribute("data-bg-color");
        
    
        return false;
    };
}