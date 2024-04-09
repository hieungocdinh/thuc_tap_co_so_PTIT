$(document).ready(function(){
  $('#goRight').on('click', function(){
    $('#slideBox').animate({
      'marginLeft' : '0'
    });
    $('.topLayer').animate({
      'marginLeft' : '100%'
    });
  });
  $('#goLeft').on('click', function(){
    $('#slideBox').animate({
      'marginLeft' : '50%'
    });
    $('.topLayer').animate({
      'marginLeft': '0'
    });
  });
});


document.getElementById('signupButton').addEventListener('click', function() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;

  if (password !== confirmPassword) {
      alert('Mật khẩu nhập lại không khớp!');
      
  } else {
      if (username === "" || password === "" || confirmPassword === "" || email === "") {
        alert("Vui lòng điền đầy đủ thông tin vào các trường bắt buộc.");
        return false; // Ngăn chặn gửi biểu mẫu nếu có trường không được điền
    } else {
        // Nếu tất cả các trường đã được điền, cho phép gửi biểu mẫu
        document.getElementById("signupForm").submit();
    }
  }
});