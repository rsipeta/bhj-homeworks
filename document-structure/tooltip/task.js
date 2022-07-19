var current = null;

document.querySelectorAll(".has-tooltip").forEach(element => {
    element.onclick = function() {
        if (current === this) { 
            document.querySelector(".tooltip").classList.remove("tooltip_active"); 
            current = null;
            return false;
        }
        
        current = this;
        var pos =  this.getBoundingClientRect();

        let tooltip = document.querySelector(".tooltip");
        if (tooltip === null) tooltip = document.createElement('div');
        
        tooltip.classList = "tooltip tooltip_active";
        tooltip.innerHTML = this.getAttribute("title");
        document.body.append(tooltip);
        //this.appendChild(tooltip);

        let posTT = tooltip.getBoundingClientRect();

        let top = pos.bottom + window.pageYOffset;
        let left = pos.left + window.pageXOffset;

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

        tooltip.style.position = "absolute";
        tooltip.style.top = top  + "px"; 
        tooltip.style.left = left  + "px";
        
        return false;
    }
});

