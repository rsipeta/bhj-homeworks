var menuElem = document.getElementsByClassName("menu__link");

for(var i = 0; i < menuElem.length; i++) {
    menuElem[i].onclick = function(){        
        
        // Закрываем все открытые окна
        var activeMenu = this.closest(".menu_main").querySelector(".menu_active");
        if (activeMenu != null) activeMenu.classList.remove("menu_active");
        
        var subMenu = this.closest(".menu__item").querySelector(".menu_sub");
        if (subMenu != null) {
            subMenu.classList.add("menu_active");
            return false;    
        }        
    };
}