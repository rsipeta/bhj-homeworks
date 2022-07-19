document.getElementById("tasks__add").onclick = function(){
    let txtData = document.querySelector(".tasks__input");
    AddTask(txtData.value);
    txtData.value = "";
    SaveData();
    return false;
}

function AddTask(cText) {
    let task = document.createElement("div");
    task.classList = "task";
    let title = document.createElement("div");
    title.classList = "task__title";
    title.innerHTML = cText;
    
    let btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.classList = "task__remove";
    btn.innerHTML = "&times;";

    btn.onclick = function(){
        let task = this.closest(".task");
        document.querySelector(".tasks__list").removeChild(task);
        SaveData();
    }

    task.appendChild(title);
    task.appendChild(btn);
    document.querySelector(".tasks__list").appendChild(task);
}


function SaveData() {
    var aData = [];
    document.querySelectorAll(".task").forEach(element => {
        aData.push(element.querySelector(".task__title").textContent);
    });
    console.log(aData);
    localStorage.setItem("myTasks", JSON.stringify(aData));
}

window.onload = function() {
    var aData = JSON.parse(localStorage.getItem("myTasks"));
    aData.forEach(element => { AddTask(element); });
}