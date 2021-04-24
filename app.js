let cart = document.querySelector('.img-cart');
let result = document.querySelector('.result');
let name = document.querySelector('.name');
let number = document.querySelector('.number');
let color = document.querySelector('.color');
let radio = document.getElementsByClassName('radio');
let radioText;
let chkText;
let sum;
let chk = document.getElementsByClassName('chk');
let btn = document.querySelector('.btn');
console.log(radio);
console.log(chk);
result.style.display = 'none';
function f() {
    for(let i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            radioText = radio[i].nextSibling.textContent;
        }
    }
    
    for (let i = 0; i < chk.length; i++){
        if (chk[i].checked == true) {
            chkText = chk[i].nextSibling.textContent + ' ';
        }
    }
    sum = number.value * 100;
    
    result.innerHTML += `<table style="border:1px solid silver; width:600px; margin:0 auto; border-radius:10px;">
    <tr>
        <td>Ф.И.О</td>
        <td>Сумма</td>
        <td>Цвет</td>
        <td>Количество</td>
        <td>Доставка</td>
        <td>Оплата</td>
    </tr>
    <tr>
        <td>${name.value}</td>
        <td>${sum} &#8381</td>
        <td style="background:${color.value}; color:white;">${color.value}</td>
        <td>${number.value} шт.</td>
        <td>${radioText}</td>
        <td>${chkText}</td>
    </tr>
</table>`;
alert('Ваш заказ принят');
}
btn.onclick = f;
cart.onclick = function(){
    result.style.display = "block";
}
cart.ondblclick = function(){
    result.style.display = "none";
}