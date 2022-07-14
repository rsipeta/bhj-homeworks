document.querySelector(".chat-widget").onclick = function() { 
    document.querySelector(".chat-widget").classList.add("chat-widget_active"); 
    ClearInterval();
}


const widget_container = document.querySelector(".chat-widget__messages-container");

const widget_input = document.getElementById("chat-widget__input");
widget_input.onkeyup = onInput;

var MiSeconds = 30000;
var interval = setInterval(addQuestion, MiSeconds);


var answers = [
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет", 
    "К счастью, я сейчас занят. Не пишите нам больше", 
    "Спокойной ночи, малыши!", 
    "Кто здесь?", 
    "Вам повезло, вы общаетесь с самым развитым в мире искуственным интеллектом", 
    "Стой! Стрелять буду!", 
    "Вас не слышно, повторите, пожалуйста", 
    "Будьте добры, помедленнее. Я записываю" ];

var questions = [
    "Вы спите?", 
    "Мое терпение кончилось, напишите что-нибудь", 
    "Полковнику никто не пишет...", 
    "Вы еще здесь или уже там?", 
    "Кто-нибудь дома?" ];


function onInput(e) {     
    if (e.key === "Enter" && widget_input.value != ""){
        const messages = document.querySelector('.chat-widget__messages' );
        var d = new Date();
        let time = (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
        // добавить сообщение пользователя
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">` + time + `</div>
            <div class="message__text">` + widget_input.value + `</div>
        </div>
        `;
  
        // добавить сообщение бота
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">` + time + `</div>
            <div class="message__text">` + answers[Math.floor(Math.random() * 8)] + `</div>
        </div>
        `;
        
        widget_input.value = "";
        
        ScrollBottom();
    }
}


function addQuestion(){
    if (document.querySelector(".chat-widget").classList.contains("chat-widget_active")){
        const messages = document.querySelector('.chat-widget__messages' );
        var d = new Date();
        let time = (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

        // добавить сообщение бота
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">` + time + `</div>
            <div class="message__text">` + questions[Math.floor(Math.random() * 5)] + `</div>
        </div>
        `;

        ScrollBottom();
    }
}


function ScrollBottom() { widget_container.scrollTop = widget_container.scrollHeight; }  // Прокрутка до низа

function ClearInterval() {
    clearInterval(interval);
    interval = setInterval(addQuestion, MiSeconds);
}