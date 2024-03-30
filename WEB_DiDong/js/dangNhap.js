$(document).ready(function() {
    const username = $("#inputSDT_DN");
    const password = $("#inputMatKhau_DN");
    const btnDangNhap = $("#btnDangNhap");

    btnDangNhap.click(function(e) {
        e.preventDefault();
        const inputUsernameValue = username.val();
        const inputPasswordValue = password.val();

        if (inputUsernameValue === "" || inputPasswordValue === "") {
            alert("Vui lòng không để trống");
        } else {
            const user = JSON.parse(localStorage.getItem(inputUsernameValue));
            if (user && user.username === inputUsernameValue && user.password === inputPasswordValue) {
                alert("Đăng Nhập Thành Công");
                window.location.href = "home.html";
            } else {
                alert("Số điện thoại hoặc mật khẩu không đúng");
            }
        }
    });
});