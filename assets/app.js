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
        
        // فراخوانی تابع ساخت منو بعد از لاگین موفق
        renderDashboardMenu(); 
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است");
    }
}

// اضافه کردن امکان لاگین با زدن دکمه اینتر
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

// =========================================
// ۳. ساخت خودکار منو از روی دیتای داشبورد
// =========================================
function renderDashboardMenu() {
    const menuContainer = document.getElementById('menu-container');
    const data = window.DASHBOARD_DATA;

    // بررسی اینکه آیا دیتا به درستی لود شده است
    if (!data || !data.pages) {
        console.error("داده‌های داشبورد یافت نشد!");
        return;
    }

    // خالی کردن محتوای قبلی کانتینر منو
    menuContainer.innerHTML = '';

    // حلقه تو در تو برای یافتن فایل‌هایی که تصویر نقشه دارند
    data.pages.forEach(page => {
        page.sections.forEach(section => {
            section.attachments.forEach(attachment => {
                
                // فقط مواردی به منو اضافه می‌شوند که کلید map_image را داشته باشند
                if (attachment.map_image) {
                    
                    const btn = document.createElement('button');
                    btn.className = 'zone-item';
                    
                    // نامگذاری دکمه: ترکیب نام فایل و نام سکشن
                    btn.innerHTML = `
                        <span>نقشه ${attachment.title}</span>
                        <span class="arrow">⌄</span>
                    `;
                    
                    // افزودن رویداد کلیک برای تغییر نقشه
                    btn.onclick = () => changeMap(attachment.map_image);
                    
                    // افزودن دکمه به کانتینر
                    menuContainer.appendChild(btn);
                }
            });
        });
    });
}
