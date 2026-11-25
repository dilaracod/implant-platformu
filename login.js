// Sekme Geçiş İşlemleri
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');

tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.add('active');
    formRegister.classList.remove('active');
});

tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.add('active');
    formLogin.classList.remove('active');
});

// KAYIT OLMA İŞLEMİ
formRegister.addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;

    // Mevcut kullanıcıları localStorage'dan al
    let users = JSON.parse(localStorage.getItem('app_users')) || [];

    // E-posta kullanılmış mı kontrol et
    const userExists = users.some(u => u.email === email);
    if (userExists) {
        alert("Bu e-posta adresi zaten kayıtlı!");
        return;
    }

    // Yeni kullanıcıyı kaydet
    users.push({ name, email, password, role });
    localStorage.setItem('app_users', JSON.stringify(users));

    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    
    // Giriş sekmesine otomatik geç
    tabLogin.click();
    document.getElementById('loginEmail').value = email;
});

// GİRİŞ YAPMA İŞLEMİ
formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('app_users')) || [];

    // Kullanıcıyı doğrula
    const validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
        alert(`Hoş geldin, ${validUser.name}!`);
        // Giriş yapan kullanıcıyı aktif olarak kaydet
        localStorage.setItem('active_user', JSON.stringify(validUser));
        
        // Ana sayfaya yönlendir
        window.location.href = 'index.html'; 
    } else {
        alert("E-posta veya şifre hatalı!");
    }
});