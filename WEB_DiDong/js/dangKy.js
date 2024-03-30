const inputHoTen = document.querySelector("#inputHoTen");
const inputSDT = document.querySelector("#inputSDT");
const inputMatKhau = document.querySelector("#inputMatKhau");
const inputMatKhau2 = document.querySelector("#inputMatKhau2");
const btnDangKy = document.querySelector("#btnDangKy");
//Biểu thức chính quy.
const regexHoTen = /^[\p{L}\s]+$/u;
const regexSDT = /^[0-9]{10}$/;
const regexMatKhau = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Gắn sự kiện click vào nút đăng ký
btnDangKy.addEventListener("click", (e) => {
    // Ngăn chặn hành vi mặc định của form
    e.preventDefault();
    if (inputHoTen.value === "" || !regexHoTen.test(inputHoTen.value)) {
        alert("Vui lòng nhập họ tên hợp lệ");
        inputHoTen.focus();
    }else if(inputSDT.value === "" || !regexSDT.test(inputSDT.value)){
        alert("Vui lòng nhập số điện thoại hợp lệ vd:0123456789");
        inputSDT.focus();
    }else if(inputMatKhau ==="" || !regexMatKhau.test(inputMatKhau.value)){
        alert("Vui lòng nhập mật khẩu lớn hơn 6 kí tự. vd:12345a");
        inputMatKhau.focus();
    }else if(inputMatKhau.value != inputMatKhau2.value){
        alert("Nhập lại mật khẩu không khớp");
        inputMatKhau2.focus();
    }
    else {
        // Tạo một đối tượng user với sdt và mật khẩu
        const user = {
            username: inputSDT.value,
            password: inputMatKhau.value,
        };
        // Chuyển đổi đối tượng user thành chuỗi Json
        let json = JSON.stringify(user);
        // Lưu thông tin người dùng đã đăng ký vào localStorage với key là sdt
        localStorage.setItem(inputSDT.value, json);
        // Hiển thị cảnh báo đăng ký thành công
        alert("Đăng ký thành công");
        // Chuyển hướng dẫn đến trang đăng nhập
        window.location.href = "DangNhap.html";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cbxBanTin = document.getElementById("cbxBanTin");
    const cbxDongY = document.getElementById("cbxDongY");
    const btnDangKy = document.getElementById("btnDangKy");

    function kiemTraCheckbox() {
        if (cbxBanTin.checked && cbxDongY.checked) {
            btnDangKy.disabled = false;
        } else {
            btnDangKy.disabled = true;
        }
    }

    cbxBanTin.addEventListener("change", kiemTraCheckbox);
    cbxDongY.addEventListener("change", kiemTraCheckbox);
});
