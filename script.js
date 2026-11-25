// --------------------------------------------------------
// --- GELİŞTİRİCİ (DEV) MODU: OTOMATİK ADMİN GİRİŞİ ---
// --------------------------------------------------------
if (!localStorage.getItem('active_user')) {
    const devAdmin = {
        name: "Kurucu (Geliştirici)",
        email: "kurucu@sistem.com",
        password: "dev",
        role: "Sistem Yöneticisi",
        avatar: "",
        age: "",
        missingTeeth: "Belirtilmedi",
        chronicDisease: "Belirtilmedi",
        smoking: "Belirtilmedi"
    };
    localStorage.setItem('active_user', JSON.stringify(devAdmin));
    window.location.reload(); 
}

// --------------------------------------------------------
// UI ETKİLEŞİMLERİ (Menüler, Ayarlar)
// --------------------------------------------------------
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => sidebar.classList.toggle('active'));

const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
profileBtn.addEventListener('click', () => profileDropdown.classList.toggle('active'));

document.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.classList.remove('active');
    }
});

const togglePanelBtn = document.getElementById('togglePanelBtn');
const rightPanel = document.getElementById('rightPanel');
togglePanelBtn.addEventListener('click', () => rightPanel.classList.toggle('collapsed'));

const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
lightModeBtn.addEventListener('click', () => document.body.classList.remove('dark-mode'));
darkModeBtn.addEventListener('click', () => document.body.classList.add('dark-mode'));


// --------------------------------------------------------
// --- GEMINI YAPAY ZEKA API ENTEGRASYONU ---
// --------------------------------------------------------
const API_KEY = "BURAYA_API_ANAHTARINI_YAPISTIR"; // Kendi anahtarını eklemeyi unutma
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const aiInput = document.getElementById('aiInput');
const aiSendBtn = document.getElementById('aiSendBtn');
const chatHistory = document.getElementById('chatHistory');

async function sendMessage() {
    const text = aiInput.value.trim();
    if (text === "") return;

    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user-message';
    userMsgDiv.textContent = text;
    chatHistory.appendChild(userMsgDiv);
    aiInput.value = '';
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'message ai-message';
    aiMsgDiv.textContent = "Düşünüyor...";
    chatHistory.appendChild(aiMsgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
        });

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            const replyText = data.candidates[0].content.parts[0].text;
            aiMsgDiv.innerHTML = replyText.replace(/\n/g, '<br>');
        } else {
            aiMsgDiv.textContent = "Üzgünüm, şu an cevap veremiyorum.";
        }
    } catch (error) {
        console.error("Yapay Zeka Hatası:", error);
        if (API_KEY === "BURAYA_API_ANAHTARINI_YAPISTIR") {
            aiMsgDiv.textContent = "Sistem Uyarısı: Lütfen script.js dosyasındaki API_KEY alanına Google Gemini anahtarınızı ekleyin.";
        } else {
            aiMsgDiv.textContent = "Bağlantı hatası! Lütfen internetinizi kontrol edin.";
        }
    }
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
aiSendBtn.addEventListener('click', sendMessage);


// --------------------------------------------------------
// --- PROFİL FOTOĞRAFI, AYARLAR VE SAĞLIK VERİLERİ ---
// --------------------------------------------------------
const profileModal = document.getElementById('profileModal');
const openProfileSettings = document.getElementById('openProfileSettings');
const openProfileSettingsFromDropdown = document.getElementById('openProfileSettingsFromDropdown');
const closeProfileModal = document.getElementById('closeProfileModal');
const profileUpdateForm = document.getElementById('profileUpdateForm');
const avatarUpload = document.getElementById('avatarUpload');
const profileAvatarImg = document.getElementById('profileAvatarImg');
const defaultAvatarIcon = document.getElementById('defaultAvatarIcon');

let uploadedAvatarBase64 = "";

function openProfileModal() {
    const activeUser = JSON.parse(localStorage.getItem('active_user'));
    if (activeUser) {
        document.getElementById('updateName').value = activeUser.name;
        document.getElementById('updateEmail').value = activeUser.email;
        document.getElementById('updateRole').value = activeUser.role;
        document.getElementById('updatePassword').value = ""; 

        document.getElementById('updateAge').value = activeUser.age || "";
        document.getElementById('updateMissingTeeth').value = activeUser.missingTeeth || "Belirtilmedi";
        document.getElementById('updateSmoking').value = activeUser.smoking || "Belirtilmedi";

        // Hastalık bilgisini akıllıca oku
        const savedDisease = activeUser.chronicDisease || "Belirtilmedi";
        const chronicSel = document.getElementById('updateChronicDiseaseSelect');
        const chronicGrp = document.getElementById('chronicDiseaseDetailGroup');
        const chronicDet = document.getElementById('updateChronicDiseaseDetail');

        if (savedDisease === "Yok" || savedDisease === "Belirtilmedi") {
            chronicSel.value = savedDisease;
            chronicGrp.style.display = 'none';
            chronicDet.value = "";
        } else {
            chronicSel.value = "Var";
            chronicGrp.style.display = 'block';
            chronicDet.value = savedDisease;
        }

        if (activeUser.avatar) {
            profileAvatarImg.src = activeUser.avatar;
            profileAvatarImg.style.display = 'block';
            defaultAvatarIcon.style.display = 'none';
            uploadedAvatarBase64 = activeUser.avatar;
        } else {
            profileAvatarImg.style.display = 'none';
            defaultAvatarIcon.style.display = 'block';
            uploadedAvatarBase64 = "";
        }
    } else {
        alert("Lütfen profil ayarlarını görmek için önce giriş yapın.");
        return; 
    }
    profileModal.classList.add('active');
    sidebar.classList.remove('active'); 
}

if (openProfileSettings) openProfileSettings.addEventListener('click', openProfileModal);
if (openProfileSettingsFromDropdown) {
    openProfileSettingsFromDropdown.addEventListener('click', () => {
        openProfileModal();
        profileDropdown.classList.remove('active');
    });
}

if (closeProfileModal) closeProfileModal.addEventListener('click', () => profileModal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === profileModal) profileModal.classList.remove('active'); });

if (avatarUpload) {
    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                uploadedAvatarBase64 = event.target.result; 
                profileAvatarImg.src = uploadedAvatarBase64;
                profileAvatarImg.style.display = 'block';
                defaultAvatarIcon.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
}

if (profileUpdateForm) {
    profileUpdateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const activeUser = JSON.parse(localStorage.getItem('active_user'));
        let users = JSON.parse(localStorage.getItem('app_users')) || [];

        const newName = document.getElementById('updateName').value;
        const newEmail = document.getElementById('updateEmail').value;
        const newPassword = document.getElementById('updatePassword').value;

        if (newEmail !== activeUser.email) {
            const emailExists = users.some(u => u.email === newEmail);
            if (emailExists) {
                alert("Bu e-posta adresi başka bir hesaba ait! Lütfen farklı bir adres girin.");
                return;
            }
        }

        activeUser.name = newName;
        activeUser.email = newEmail;
        if (newPassword.trim() !== "") activeUser.password = newPassword;
        if (uploadedAvatarBase64 !== "") activeUser.avatar = uploadedAvatarBase64;

        activeUser.age = document.getElementById('updateAge').value;
        activeUser.missingTeeth = document.getElementById('updateMissingTeeth').value;
        activeUser.smoking = document.getElementById('updateSmoking').value;

        const selectedDisease = document.getElementById('updateChronicDiseaseSelect').value;
        if (selectedDisease === "Var") {
            activeUser.chronicDisease = document.getElementById('updateChronicDiseaseDetail').value;
        } else {
            activeUser.chronicDisease = selectedDisease;
        }

        localStorage.setItem('active_user', JSON.stringify(activeUser));
        
        const userIndex = users.findIndex(u => u.email === activeUser.email || u.name === activeUser.name);
        if (userIndex !== -1) {
            users[userIndex] = activeUser;
            localStorage.setItem('app_users', JSON.stringify(users));
        }

        alert("Profil bilgileriniz başarıyla güncellendi!");
        profileModal.classList.remove('active');
        window.location.reload(); 
    });
}

const chronicSelect = document.getElementById('updateChronicDiseaseSelect');
const chronicDetailGroup = document.getElementById('chronicDiseaseDetailGroup');

if (chronicSelect && chronicDetailGroup) {
    chronicSelect.addEventListener('change', function() {
        if (this.value === 'Var') {
            chronicDetailGroup.style.display = 'block'; 
        } else {
            chronicDetailGroup.style.display = 'none';  
        }
    });
}

// --------------------------------------------------------
// --- YENİ: GİZLİLİK POLİTİKASI MODALI VE KONTROL MERKEZİ ---
// --------------------------------------------------------
const privacyModal = document.getElementById('privacyModal');
const openPrivacyBtn = document.getElementById('openPrivacyBtn');
const closePrivacyModal = document.getElementById('closePrivacyModal');
const clearChatHistoryBtn = document.getElementById('clearChatHistoryBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

if (openPrivacyBtn) {
    openPrivacyBtn.addEventListener('click', () => {
        privacyModal.classList.add('active');
        sidebar.classList.remove('active'); 
    });
}
if (closePrivacyModal) closePrivacyModal.addEventListener('click', () => privacyModal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === privacyModal) privacyModal.classList.remove('active'); });

// Yapay Zeka Sohbetini Sil
if (clearChatHistoryBtn) {
    clearChatHistoryBtn.addEventListener('click', () => {
        if (confirm("Yapay zeka ile olan tüm sohbet geçmişiniz silinecek. Emin misiniz?")) {
            if (chatHistory) {
                chatHistory.innerHTML = `
                    <div class="message ai-message">
                        Sohbet geçmişiniz güvenle temizlendi. Yeni bir konuya başlayabiliriz, size nasıl yardımcı olabilirim?
                    </div>
                `;
            }
            alert("Sohbet geçmişi başarıyla temizlendi.");
            privacyModal.classList.remove('active');
        }
    });
}

// Hesabı ve Verileri Tamamen Sil
if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
        if (confirm("DİKKAT: Hesabınız, sağlık verileriniz ve tüm kayıtlarınız sistemden KALICI olarak silinecektir. Bu işlem geri alınamaz!\n\nEmin misiniz?")) {
            const activeUser = JSON.parse(localStorage.getItem('active_user'));
            let users = JSON.parse(localStorage.getItem('app_users')) || [];
            
            if (activeUser) {
                users = users.filter(u => u.email !== activeUser.email);
                localStorage.setItem('app_users', JSON.stringify(users));
            }
            localStorage.removeItem('active_user');
            
            alert("Unutulma hakkınız kullanıldı. Tüm verileriniz kalıcı olarak silindi. Çıkış yapılıyor...");
            window.location.href = 'login.html';
        }
    });
}

// --------------------------------------------------------
// --- GİRİŞ KONTROLÜ VE ÇIKIŞ YAPMA ---
// --------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    const activeUser = JSON.parse(localStorage.getItem('active_user'));
    
    if (activeUser) {
        const loginBtn = document.getElementById('mainLoginBtn');
        if (loginBtn) loginBtn.style.display = 'none'; 

        const userInfoContainer = document.querySelector('.user-info');
        if (userInfoContainer) {
            userInfoContainer.innerHTML = `
                <strong>${activeUser.name}</strong>
                <span>${activeUser.role} - ${activeUser.email}</span>
            `;
        }

        const headerProfileCircle = document.getElementById('profileBtn');
        if (headerProfileCircle && activeUser.avatar) {
            headerProfileCircle.innerHTML = `<img src="${activeUser.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        }
    }
});

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('active_user');
        alert("Çıkış yapıldı.");
        window.location.reload();
 // --------------------------------------------------------
// --- EŞ ZAMANLI (REAL-TIME) ÖNERİ VE KLİNİK ANALİZ MOTORU ---
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const updateAgeInput = document.getElementById('updateAge');
    const updateMissingTeeth = document.getElementById('updateMissingTeeth');
    const updateChronicSel = document.getElementById('updateChronicDiseaseSelect');
    const updateChronicDet = document.getElementById('updateChronicDiseaseDetail');
    const updateSmoking = document.getElementById('updateSmoking');

    // Anlık analiz üreten fonksiyon
    function generateLiveRecommendation() {
        const age = updateAgeInput ? updateAgeInput.value : "";
        const missing = updateMissingTeeth ? updateMissingTeeth.value : "Belirtilmedi";
        const chronicSel = updateChronicSel ? updateChronicSel.value : "Belirtilmedi";
        const chronicDet = updateChronicDet ? updateChronicDet.value : "";
        const smoking = updateSmoking ? updateSmoking.value : "Belirtilmedi";

        let notes = [];

        // Yaş kontrolü
        if (age !== "" && parseInt(age) < 18) {
            notes.push("⚠️ **Yaş Uyarısı:** 18 yaşından küçük bireylerde çene kemiği gelişimi tamamlanmadığı için implant tedavisi genellikle önerilmez.");
        }

        // Eksik diş durumu
        if (missing === "1-2 Diş") {
            notes.push("🦷 **1-2 Diş Eksikliği:** Komşu dişlere zarar verilmeden uygulanacak tekli implant tedavisi en ideal ve kalıcı çözümdür.");
        } else if (missing === "3 ve daha fazla" || missing === "Tam dişsizlik") {
            notes.push("🦷 **Çoklu / Tam Dişsizlik:** All-on-4 / All-on-6 konseptleri veya implant destekli köprü sistemleri değerlendirilmelidir.");
        }

        // Sigara kullanımı
        if (smoking === "Kullanıyorum") {
            notes.push("🚬 **Sigara Kullanımı:** Nikotin, implantın çene kemiğine kaynama (osseointegrasyon) başarısını düşürebilir ve iyileşme süresini uzatabilir.");
        }

        // Kronik rahatsızlık
        if (chronicSel === "Var") {
            let detailText = chronicDet.trim() !== "" ? ` (${chronicDet})` : "";
            notes.push(`🩺 **Kronik Rahatsızlık${detailText}:** Sistemik durumun kontrol altında olması ve hekim onaylı planlama yapılması operasyon başarısı için kritik öneme sahiptir.`);
        }

        // Eğer hiçbir özel veri girilmemişse varsayılan mesaj
        if (notes.length === 0) {
            return "Merhaba! Ben diş sağlığı yapay zeka asistanınızım. Profil ayarlarından sağlık ve diş durumunuzu güncelledikçe size özel analizler burada anlık olarak görünecektir.";
        }

        return "🤖 **Anlık Yapay Zeka Klinik Ön Analizi:**\n\n" + notes.join("\n\n");
    }

    // Sağ taraftaki yapay zeka paneline (chatHistory içine) anlık öneriyi yansıtan fonksiyon
    function updateRightPanelLiveAI() {
        // Sağ paneldeki ilk AI mesaj kutusunu bul veya yoksa oluştur
        let aiMessageEl = document.querySelector('#chatHistory .ai-message');
        const recommendationHtml = generateLiveRecommendation().replace(/\n/g, '<br>');

        if (aiMessageEl) {
            aiMessageEl.innerHTML = recommendationHtml;
        } else {
            const chatHistoryContainer = document.getElementById('chatHistory');
            if (chatHistoryContainer) {
                const newMsgDiv = document.createElement('div');
                newMsgDiv.className = 'message ai-message';
                newMsgDiv.innerHTML = recommendationHtml;
                chatHistoryContainer.appendChild(newMsgDiv);
            }
        }
    }

    // Form elemanlarında herhangi bir değişiklik olduğunda (input veya change) anında tetikle
    const monitoredElements = [updateAgeInput, updateMissingTeeth, updateChronicSel, updateChronicDet, updateSmoking];
    monitoredElements.forEach(element => {
        if (element) {
            element.addEventListener('input', updateRightPanelLiveAI);
            element.addEventListener('change', updateRightPanelLiveAI);
        }
    });
});
    });
}