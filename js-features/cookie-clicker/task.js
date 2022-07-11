const cookie = document.getElementById("cookie");
var nCount = 0;
var dLastClick = null;

cookie.onclick = function() {
    nCount += 1;
    document.getElementById("clicker__counter").textContent = nCount.toString();
    cookie.width = (nCount % 2 === 1 ? 250 : 200);
    if (dLastClick != null)
        document.getElementById("clicker__counter").innerHTML += "<br/>Скорость клика: " + (1 / ((Date.now() - dLastClick) / 1000)).toFixed(2);
    dLastClick = Date.now();
}