function checkInfo() {
    var phone = document.getElementById('phone').value;
    var result = document.getElementById('result');
    var first = parseInt(phone[0]);
    if (phone.value === '') {
        result.textContent = 'Số điện thoại trống!';
        result.style.color = 'red';
    }
    else if (phone.length !== 10 || isNaN((phone))) {
        result.textContent = 'Số điện thoại không hợp lệ. Vui lòng nhập lại!';
        result.style.color = 'red';
    }
    else {
        if (first !== 0) {
            result.textContent = 'Số điện thoại không hợp lệ. Vui lòng nhập lại!';
            result.style.color = 'red';
        } else {
            result.textContent = 'Đăng ký thành công. Chúng tôi sẽ gửi thông báo cho bạn ngay khi có ưu đãi mới!';
            result.style.color = 'green';
        }
    }
}

function openModal() {
    const modal = document.getElementById('myModal');

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const loginBtn = document.getElementById('loginBtn');
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const result = document.getElementById('resultModal');
    const user = document.getElementById('user');

    const submit = document.getElementById('submit').addEventListener('click', function() {
        if (email === 'sunflower@gmail.com' && pass === 'sunflower') {
            const img = document.createElement('img');
            img.src = '../ASSETS/img/SideBarIcon.png';
            img.style.width = '34px';
            img.style.height = '34px';
            img.style.borderRadius = '50%';
            img.style.border = '2px solid #DDD';

            loginBtn.appendChild(img);

            user.parentNode.replaceChild(img, user);
            localStorage.setItem('user', img);

            modal.style.display = 'none';
        }
        else {
            result.textContent = 'Email hoặc mật khẩu không đúng. Vui lòng nhập lại!';
            result.style.color = 'red';
        }
    });

    const cancel = document.getElementById('cancel').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

function printPrice(input) {
    var price = input.value;
    var resultPrice = document.getElementById('resultPrice');

    resultPrice.textContent = price + " VND";
    resultPrice.style.color = 'red';
}