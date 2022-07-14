document.querySelectorAll(".interest__check").forEach(element => {
    element.onchange = function(){
        var lCheck = this.checked;

        // Устанавливает checked всем "дочкам"
        this.closest(".interest").querySelectorAll(".interest__check").forEach(child => { child.checked = lCheck; });

        // Устанавливаем значение "родителям"
        this.closest(".interests_main").querySelectorAll(".interests").forEach(el => {             
            let checked = selectedInterests = el.querySelectorAll('.interest__check:checked').length;
            let unchecked = selectedInterests = el.querySelectorAll('.interest__check').length - checked;

            let parentNode = el.closest(".interest").querySelector(".interest__check");
            parentNode.indeterminate = (checked > 0 && unchecked > 0);
            parentNode.checked = checked > 0;              
        });
    }
});