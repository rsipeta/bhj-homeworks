var current = null;

document.querySelectorAll(".has-tooltip").forEach(element => {
    element.onclick = function() {
        if (current === this) { 
            document.querySelector(".tooltip").classList.remove("tooltip_active"); 
            return false;
        }
        
        current = this;
        var pos =  this.getBoundingClientRect();

        let tooltip = document.querySelector(".tooltip");
        if (tooltip === null) tooltip = document.createElement('div');
        
        tooltip.classList = "tooltip tooltip_active";
        tooltip.innerHTML = this.getAttribute("title");
        let posTT = tooltip.getBoundingClientRect();

        let top = pos.bottom;
        let left = pos.left;

        if (this.getAttribute("data-position") === "left"){
            top -= posTT.height / 2 + pos.height / 2;
            left -= posTT.width;
        }

        if (this.getAttribute("data-position") === "right"){
            top -= posTT.height / 2 + pos.height / 2;
            left += pos.width;
        }

        if (this.getAttribute("data-position") === "top"){
            top -= posTT.height + pos.height;
        }

        tooltip.style.top = top  + "px";; 
        tooltip.style.left = left  + "px";;

        document.body.append(tooltip);
        return false;
    }
});

