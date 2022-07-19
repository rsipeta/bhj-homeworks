document.querySelectorAll(".product__quantity-control").forEach(element => {
    element.onclick = function(){
        let objQuantity = this.parentElement.querySelector(".product__quantity-value");
        let nKol = Number(objQuantity.innerHTML);
        nKol += (this.classList.contains("product__quantity-control_dec") ? -1 : 1);
        if (nKol < 1) nKol = 1;
        objQuantity.innerHTML = nKol;
        
    }
});

var product;
var nID;
var nKolAdd;

document.querySelectorAll(".product__add").forEach(element => {
    element.onclick = function(){
        product = this.closest(".product");
        nID = product.getAttribute("data-id");
        nKolAdd = Number(product.querySelector(".product__quantity-value").innerHTML);

        let chart = document.querySelector(".cart__products");
        let isExists = false;
        chart.querySelectorAll(".cart__product").forEach (element => {
            if (element.getAttribute("data-id") === nID) {
                let nKol = Number(element.querySelector(".cart__product-count").innerHTML);
                element.querySelector(".cart__product-count").innerHTML = nKol + nKolAdd;

                Animation(product.querySelector(".product__image"), element.querySelector(".cart__product-image"));
                isExists = true;
                SaveData();
            }
        });


        if (isExists)   return false;
        AddProduct();
        SaveData();
        CartVisible();
    }
});


function AddProduct(){
    let newProd = document.createElement("div");
    newProd.classList = "cart__product";
    newProd.setAttribute("data-id", nID);

    let image = document.createElement("img");
    image.setAttribute("src", product.querySelector(".product__image").getAttribute("src"));
    image.classList = "cart__product-image";
    
    let quantity = document.createElement("div");
    quantity.classList = "cart__product-count";
    quantity.innerHTML = nKolAdd;
    

    let btn_del = document.createElement("a");
    btn_del.setAttribute("href", "#");
    btn_del.classList = "product__remove";
    btn_del.innerHTML = "&times;";
    btn_del.onclick = function(){
        let task = this.closest(".cart__product");
        document.querySelector(".cart__products").removeChild(task);        
        SaveData();
        CartVisible();
    }

    newProd.appendChild(image);
    newProd.appendChild(quantity);
    newProd.appendChild(btn_del);

    document.querySelector(".cart__products").appendChild(newProd);
}


function CartVisible(){
    document.querySelector(".cart").style.display = (document.querySelector(".cart__products").querySelectorAll(".cart__product").length > 0 ? "block" : "none");
}



var animationDuration = 500;   // продолжительность анимации

function Animation(sourceImg, destinationImg){
    var animationElement = null;
    animationElement = document.createElement("img");
    animationElement.setAttribute("src", sourceImg.getAttribute("src"));
    animationElement.style.left = sourceImg.getBoundingClientRect().x + "px";
    animationElement.style.top = sourceImg.getBoundingClientRect().y + "px";
    animationElement.width = sourceImg.width;
    animationElement.height = sourceImg.height;
    animationElement.style.position = "absolute";
    document.body.appendChild(animationElement);

    var nX = (destinationImg.getBoundingClientRect().x - sourceImg.getBoundingClientRect().x) / (animationDuration / 20);
    var nY = (destinationImg.getBoundingClientRect().y - sourceImg.getBoundingClientRect().y) / (animationDuration / 20);

    let start = Date.now(); // запомнить время начала
    
    let timer = setInterval(function() {
    let timePassed = Date.now() - start;  // сколько времени прошло с начала анимации?
        if (timePassed >= animationDuration) {
            clearInterval(timer); // закончить анимацию
            document.body.removeChild(animationElement);
            return;
        }
        
        draw(timePassed); // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    }, 20);

    function draw(timePassed) {
        animationElement.style.left = animationElement.getBoundingClientRect().x + nX + 'px';
        animationElement.style.top = animationElement.getBoundingClientRect().y + nY + 'px';
    }
}




function SaveData() {
    var aData = [];
    document.querySelectorAll(".cart__product").forEach(element => {
        aData.push( [ element.getAttribute("data-id"), element.querySelector(".cart__product-count").innerHTML ] );
    });
    //console.log(aData);
    localStorage.setItem("myCart", JSON.stringify(aData));
}

window.onload = function() {
    var aData = JSON.parse(localStorage.getItem("myCart"));
   
    aData.forEach(element => { 
        nID = element[0];
        nKolAdd = element[1];

        document.querySelectorAll(".product").forEach(el => {
            if (el.getAttribute("data-id") === nID)
                product = el;
        });

        AddProduct();
     });

     CartVisible();
}