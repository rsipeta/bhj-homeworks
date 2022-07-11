
const timer = document.getElementById("timer");
var cTime = timer.textContent;
var cTimePath = cTime.split(":");

if (cTimePath.length === 1) {
    var nTime = parseInt(cTime);
    var lSimpleFormat = true;
}
else {
    var nTime = parseInt(cTimePath[0]) * 3600 + parseInt(cTimePath[1]) * 60 + parseInt(cTimePath[2]);
    var lSimpleFormat = false;
}

const addText = function(){
        if (nTime > 0)
        {
            nTime -= 1;
            if (lSimpleFormat)
                timer.textContent = nTime;
            else {
                var nHour = Math.floor(nTime / 3600);
                var nMinute = Math.floor(nTime % 3600 / 60);
                var nSecond = Math.floor(nTime % 3600 % 60);
                timer.textContent = (nHour < 10 ? "0" : "") + nHour.toString() + ":" + (nMinute < 10 ? "0": "") + nMinute.toString() + ":" + (nSecond < 10 ? "0" : "") + nSecond.toString();
            }

            if (nTime === 0) {
                alert("Вы победили в конкурсе!");
                var link = document.getElementById("link_complete");
                link.href = "https://chudo-prirody.com/uploads/posts/2021-08/1628904984_1-p-skachat-foto-milikh-kotikov-1.jpg";
                link.click();
            }
        }
    }

    setInterval(addText, 1000);