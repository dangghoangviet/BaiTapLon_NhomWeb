// lấy tham chiếu đến hai trường nhập liệu
var passwordField = document.getElementById("inputField4");
var confirmPasswordField = document.getElementById("inputField5");

// kiểm tra xem hai giá trị có giống nhau không.
function validatePassword(){
    if(passwordField.value != confirmPasswordField.value){
        confirmPasswordField.setCustomValidity("Mật khẩu không khớp. Vui lòng nhập lại.");
    }else{
        confirmPasswordField.setCustomValidity('');
    }
}

//Gắn sự kiện kiểm tra khi có sự thay đổi trong trường nhập liệu nhập lại mật khẩu
confirmPasswordField.addEventListener("input",validatePassword);

