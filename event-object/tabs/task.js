
var tabElem = document.getElementsByClassName("tab");
for(let i = 0; i < tabElem.length; i++) { tabElem[i].onclick = function() {
    
        var Tabs = this.closest(".tab__navigation");
        Tabs.querySelector(".tab_active").classList.remove("tab_active");
        this.classList.add("tab_active");

        var index = 0;
        var oTab = Tabs.querySelectorAll(".tab");
        for(let j = 0; j < oTab.length; j++)
            if(oTab[j] === this) index = j;

        var Content = this.closest(".tabs").querySelector(".tab__contents");
        Content.querySelector(".tab__content_active").classList.remove("tab__content_active");
        Content.querySelectorAll(".tab__content")[index].classList.add("tab__content_active");
    }
}
