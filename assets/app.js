// =========================================
// ۱. توابع مربوط به ورود (Login)
// =========================================
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // بررسی یوزر و پسورد
    if (user === "mahanproject" && pass === "parnoun135") {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('app-wrapper').style.display = 'block';
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است");
    }
}

// =========================================
// ۲. توابع مربوط به داشبورد و تغییر نقشه
// =========================================
function changeMap(imagePath) {
    const mapImage = document.getElementById('active-map');
    
    // افکت محو شدن کوتاه هنگام تغییر عکس
    mapImage.style.opacity = 0.5;
    
    setTimeout(() => {
        mapImage.src = imagePath;
        mapImage.style.opacity = 1;
    }, 150);
}

// اضافه کردن قابلیت لاگین با فشردن دکمه Enter (اختیاری جهت بهبود تجربه کاربری)
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    if(passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkLogin();
            }
        });
    }
});
