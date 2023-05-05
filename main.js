
var dangKy = document.querySelectorAll('.lable-user button')[0];
var dangNhap = document.querySelectorAll('.lable-user button')[1];
var formRegister = document.querySelector('.form-register');
var formLogin = document.querySelector('.form-login');
var modalButton = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal__overlay');
var dnRegister = document.querySelector('.form-register-header button');
var dkLogin = document.querySelector('.form-login-note button');
var returnRegister = document.querySelectorAll('.form-register-btn button')[0];
dangKy.onclick = function () {
    formRegister.classList.add('block');
    modalButton.classList.add('flex');
    modalOverlay.onclick = function (e) {
        modalButton.classList.remove('flex');
        formRegister.classList.remove('block');
        formLogin.classList.remove('block');
    }
}
dangNhap.onclick = function () {
    formLogin.classList.add('block');
    modalButton.classList.add('flex');

    modalOverlay.onclick = function (e) {
        modalButton.classList.remove('flex');
        formLogin.classList.remove('block');
        formRegister.classList.remove('block');
    }
}
dnRegister.onclick = function () {
    formRegister.classList.remove('block');
    formLogin.classList.add('block');
}
dkLogin.onclick = function () {
    formRegister.classList.add('block');
    formLogin.classList.remove('block');
}
returnRegister.onclick = function () {
    modalButton.classList.remove('flex');
    formLogin.classList.remove('block');
    formRegister.classList.remove('block');
}


var $ = document.querySelectorAll.bind(document);
var $$ = document.querySelectorAll.bind(document);
var userName = $('.form-register-user input')[0];
var spanName = $$('.form-register-user span')[0];
var passForm = $('.form-register-user input')[1];
var spanPass = $$('.form-register-user span')[1];
var confirmPass = $('.form-register-user input')[2];
var spanConfirm = $$('.form-register-user span')[2];
userName.onblur = function () {
    if (userName.value.trim()) {
        spanName.innerText = '';
        userName.classList.remove('boder-red');
    }
    else {
        spanName.innerText = 'Vui long nhap ten dang nhap';
        userName.classList.add('boder-red');
    }
}
passForm.onblur = function () {
    if (passForm.value.trim()) {
        spanPass.innerText = '';
        passForm.classList.remove('boder-red');
    }
    else {
        spanPass.innerText = 'Vui long nhap mat khau';
        passForm.classList.add('boder-red');
    }
}
confirmPass.onblur = function () {
    if (passForm.value === confirmPass.value) {
        confirmPass.classList.remove('boder-red');
        spanConfirm.innerText = '';
    }
    else {
        spanConfirm.innerText = 'mat khau nhap lai chua chinh xac';
        confirmPass.classList.add('boder-red');
    }
}

let submitRegister = document.querySelector(".submit-register");
let userdatas = [];
function checkRegister() {
    let count = 0;
    submitRegister.onclick = function () {
        if (userName.value.trim() && passForm.value.trim()
            && confirmPass.value.trim()
            && passForm.value.trim() == confirmPass.value.trim()) {
            userdatas.push({
                id: count,
                name: userName.value.trim(),
                pass: passForm.value.trim()
            })
            localStorage.setItem('user', JSON.stringify(userdatas))
            count++;
            alert("dky thanh cong")
        }
        
    }
}
checkRegister();

let isUsers = JSON.parse(localStorage.getItem('user'))
let nameLogin = document.querySelector('.name-login')
let passLogin = document.querySelector('.pass-login')
let loginBtn = document.querySelector('.login-btn')
function login() {
    loginBtn.onclick = function () {
        isUsers.forEach(function(isUser,index){
            console.log(nameLogin.value,passLogin.value)
            if (nameLogin.value.trim() == isUser.name
                && passLogin.value.trim() == isUser.pass) {
                alert("Đăng nhập thành công")
                renderUser(index)   
                formLogin.classList.remove('block');            
            }
        })
    }
}

login();

let nameRender = document.querySelector('.name-render')
let userHeading = document.querySelector('.user-heading')
let userGuest = document.querySelector('.user-guest')
function renderUser(index) {
    nameRender.innerText = `${isUsers[index].name}`
    userHeading.classList.add('none');
    userGuest.classList.remove('none');
    modalButton.classList.remove('flex');
}

var cartBtn = document.querySelector('.btn-buy');
var cartForm = document.querySelector('.cart');
cartBtn.onclick = function () {
    cartForm.classList.add('block');
    modalButton.classList.add('flex');
    modalOverlay.onclick = function () {
        modalButton.classList.remove('flex');
        cartForm.classList.remove('block');
    }
}


var cartFormBody = document.querySelector('.cart-body');
var buyBtn = document.querySelectorAll('.container-item-buy button');
var numberGoods = document.querySelector('.quantity-of-goods');

for (let i = 1; i < buyBtn.length; i += 2) {

    buyBtn[i].onclick = function (e) {
        var a = e.target.parentElement.parentElement.querySelector('p').innerHTML;
        var b = e.target.parentElement.parentElement.querySelector('div').querySelectorAll('p')[1].innerHTML;
        cartFormBody.innerHTML += (`<tr>
        
<th class= 'name-items'>${a}<i class="close fas fa-window-close"></i></th>
<td class = 'cost-items'>${b}</td>
<td class = 'amout-items'><i class="minus fas fa-minus"></i> <p>1</p> <i class="plus fas fa-plus"></i></td>
<td class = 'price-items'>${b}</td>
</tr>`)
        cartRow();
        total();
        numberGoods.classList.add('block');
        numberItems();
    }
}
function cartRow() {
    var plusCart = document.querySelector('.cart-body').querySelectorAll('.plus');
    var minusCart = document.querySelector('.cart-body').querySelectorAll('.minus');

    for (let i = 0; i < plusCart.length; i++) {
        let index = 1;

        plusCart[i].onclick = function (e) {
            var amoutItems = e.target.parentElement.querySelector('p');
            var costItems = document.querySelectorAll('.cost-items')[i];
            var priceItems = document.querySelectorAll('.price-items')[i];

            index++;
            amoutItems.innerHTML = `${index}`;
            var c = Number(costItems.textContent.replace(',', '').replace('đ', '')) * index;
            priceItems.innerHTML = `${c}đ`;
            total();

        }
        minusCart[i].onclick = function (e) {
            var amoutItems = e.target.parentElement.querySelector('p');
            var costItems = document.querySelectorAll('.cost-items')[i];
            var priceItems = document.querySelectorAll('.price-items')[i];


            if (index > 0) {
                index--;
                amoutItems.innerHTML = `${index}`;
                var c = Number(costItems.textContent.replace(',', '').replace('đ', '')) * index;
                priceItems.innerHTML = `${c}đ`;
                total();
            }
        }
        document.querySelectorAll('.close')[i].onclick = function (e) {
            e.target.parentElement.parentElement.remove();
            numberItems()
            total();
        }
    }

}
function total() {
    var totalCost = document.querySelectorAll('.price-items');
    var totalPayment = document.querySelector('.cart-footer');
    var sum = 0;
    for (let i = 0; i < totalCost.length; i++) {
        sum += Number(totalCost[i].textContent.replace('đ', '').replace(',', ''));
    }
    totalPayment.innerText = `Tổng : ${sum}đ`;
}
//Xử lý hiển thị số lượng hàng
function numberItems() {
    var nameItems = document.querySelectorAll('.name-items');
    // console.log(nameItems);
    numberGoods.innerHTML = `${nameItems.length}`;
    if (nameItems.length == 0) {
        numberGoods.classList.remove('block');
    }
}
// Xử lý quay lại đầu trang
var up = document.querySelector('.up');
up.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};



