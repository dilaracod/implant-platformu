
(function () {
    const LANG_TEXT = {
        tr: {
            pageTitle: "İmplant Bilgi Platformu",
            defaultUserName: "Kullanıcı Adı",
            accountSettings: "Hesap Ayarları",
            helpText: "Yardım",
            loginBtn: "Giriş Yap",
            settingsTitle: "Ayarlar",
            profileSettings: "Profil Ayarları",
            themeOptions: "Tema Seçenekleri",
            lightMode: "Açık Mod",
            darkMode: "Koyu Mod",
            privacyControl: "Gizlilik ve Veri Kontrolü",
            logoutBtn: "Çıkış Yap",
            panel3dTitle: "3D Diş & İmplant İnceleme Alanı",
            panel3dSubtitle: "Modeli döndürmek, incelemek ve simülasyonu görmek için fare ile sürükleyin",
            aiAssistantTitle: "Yapay Zeka Asistanı",
            aiWelcomeMsg: "Merhaba! Ben diş sağlığı yapay zeka asistanınızım. İmplantlar hakkında ne öğrenmek istersiniz?",
            searchPlaceholder: "Platformda bilgi ara...",
            aiPlaceholder: "Yapay zekaya sorun...",

            educationCards: "Eğitim Kartları",
            eduModalTitle: "İmplant Eğitim Kartları",
            eduIntroNote: "İmplant formları ve kullanıldığı klinik/anatomik durumlar hakkında bilgilendirme kartlarıdır; kesin planlama diş hekimi değerlendirmesiyle yapılır.",
            indicationLabel: "Kullanıldığı durum / hastalık:",
            eduCat0Title: "Temel İmplant Bilgileri (4 Kart)",
            eduCat0Badge: "Temel Bilgi",
            c0_t1: "İmplant Nedir?",
            c0_d1: "Eksik diş kökünün yerini alan, biyouyumlu (genellikle titanyum veya zirkonyum) yapay diş köküdür; doğal diş görünümü ve çiğneme fonksiyonuna destek sağlar.",
            c0_u1: "Çürük, travma, periodontal hastalık veya diş gelişim eksikliğine bağlı tek diş, çoklu diş ya da tam dişsizlik durumlarında değerlendirilir.",
            c0_t2: "Tedavi Süreci ve Aşamaları",
            c0_d2: "Klinik muayene ve radyolojik/3D değerlendirme sonrası implant yerleştirilir, kemikle kaynaşma (osseointegrasyon) süreci beklenir ve üst yapı protez tamamlanır.",
            c0_u2: "Tedavi planı; eksik diş sayısı, çene kemiği durumu ve sistemik sağlık bulgularına göre hekim tarafından aşamalandırılır.",
            c0_t3: "Kemik Yapısı ve Uygunluk",
            c0_d3: "Çene kemiğinin genişliği, yüksekliği ve yoğunluğu implant planlamasında önemlidir; yetersiz kemik hacminde ek cerrahi yaklaşımlar değerlendirilebilir.",
            c0_u3: "Diş çekimi sonrası kemik rezorpsiyonu, kontrolsüz diyabet veya sigara kullanımı gibi durumlarda risk ve uygunluk hekimce ayrıca incelenir.",
            c0_t4: "Günlük Bakım ve Uzun Ömür",
            c0_d4: "Düzenli diş fırçalama, arayüz temizliği ve hekim kontrolleri çevre dokuların sağlığını koruyarak implantın uzun süreli kullanımını destekler.",
            c0_u4: "Peri-implant mukozit ve peri-implantitis gibi doku iltihaplarının önlenmesi için düzenli ağız hijyeni ve kontrol muayeneleri kritik önem taşır.",
            eduCat1Title: "1. Kemik İçi (Endosteal) (6 Form)",
            eduCat1Badge: "1. Kemik İçi (Endosteal)",
            c1_t1: "Silindirik (Paralel Duvarlı) Vidalı İmplant",
            c1_d1: "Boydan uca paralel vida formuna sahip, uygun kemik genişliği ve yüksekliğinde dengeli tutunma sağlayan yaygın implant formudur.",
            c1_u1: "Çürük, travma veya periodontal nedenlerle oluşan tek ya da çoklu diş eksikliklerinde, kemik kalınlığının yeterli olduğu vakalarda değerlendirilir.",
            c1_t2: "Konik (Kök Formlu) İmplant",
            c1_d2: "Doğal diş köküne benzer şekilde apikale doğru daralan, kök anatomisine uyum ve kademeli sıkışma sunan formdur.",
            c1_u2: "Çekim sonrası soketlere veya komşu kök eğimlerinin ya da anatomik girintilerin bulunduğu diş eksikliklerinde tercih edilir.",
            c1_t3: "Hibrit Gövdeli İmplant",
            c1_d3: "Üst kısmı silindirik, alt kısmı konik geometrili yapısıyla farklı kemik bölgelerinde esnek yerleşim sağlayan formdur.",
            c1_u3: "Kemik yoğunluğunun bölgeden bölgeye değiştiği (kortikal ve trabeküler yapının farklılaştığı) kısmi diş eksikliklerinde kullanılır.",
            c1_t4: "Vidasız Silindirik (Press-Fit) İmplant",
            c1_d4: "Vida yivi bulunmayan, kemik yuvasına uyum ve sürtünme ile yerleşen implant yaklaşımıdır.",
            c1_u4: "Uygun kemik yatağına sahip seçili diş eksikliklerinde mekanik uyum hedefiyle planlanır.",
            c1_t5: "Blade (Bıçak / Plaka) İmplant",
            c1_d5: "Dar çene kretleri için kemik dokusuna yerleştirilen yassı plaka formundaki gövde yapısıdır.",
            c1_u5: "Yatay yönde daralmış (ince) çene kemiği nedeniyle standart silindirik implantın sığmadığı bölgesel diş eksikliklerinde değerlendirilir.",
            c1_t6: "Kısa ve Mini İmplantlar",
            c1_d6: "Dikey kemik yüksekliğinin sınırlı olduğu durumlarda tercih edilen kısa gövdeli veya ince çaplı seçeneklerdir.",
            c1_u6: "Kemik erimesine (rezorpsiyon) veya sinüs/sinir yakınlığına bağlı dikey kemik yüksekliği azalmış olgularda ya da dar aralıklı diş eksikliklerinde kullanılır.",
            eduCat2Title: "2. Özel Kafes, Plaka & Doku İçi (4 Form)",
            eduCat2Badge: "2. Özel Kafes, Plaka & Doku İçi",
            c2_t1: "Subperiostal (Kafes / Kemik Üstü) Yapılar",
            c2_d1: "Kemik içine vidalanmak yerine kemik yüzeyinin üzerine, diş etinin altına oturan özel kafes/iskelet tasarımlardır.",
            c2_u1: "İleri kemik kaybı bulunan ve kemik içi implant için yeterli kemik hacmi olmayan seçili parsiyel veya total dişsizlik durumlarında gündeme gelir.",
            c2_t2: "Kişiye Özel Plaka ve Kafes Sistemleri",
            c2_d2: "İleri kemik kayıplarında anatomiye uyumlu olarak planlanan plaka veya kafes destekli rekonstrüksiyon yaklaşımlarıdır.",
            c2_u2: "Travma, tümör rezeksiyonu veya ileri alveoler kemik kaybı sonrası anatomik bütünlüğün desteklenmesi gereken vakalarda değerlendirilir.",
            c2_t3: "İntramukozal (Doku İçi) Tutucular",
            c2_d3: "Kemik yerine diş eti mukozasının içindeki sığ yuvalara tutunan, protez stabilitesini destekleyen doku içi yapılardır.",
            c2_u3: "Kemik desteğinin sınırlı olduğu hareketli veya tam protez kullanıcılarında protez tutuculuğuna ek destek sağlamak amacıyla tanımlanır.",
            c2_t4: "Özel Formlu Destek Yapıları",
            c2_d4: "Standart silindirik/konik formların dışında, vakanın anatomik sınırlarına göre tanımlanan özel form seçenekleridir.",
            c2_u4: "Standart implant formlarının yerleşimine elverişli olmayan, kişiye özel anatomik sapmaların bulunduğu diş eksikliklerinde incelenir.",
            eduCat3Title: "3. İleri Anatomik Tutunma (3 Form)",
            eduCat3Badge: "3. İleri Anatomik Tutunma",
            c3_t1: "Zigomatik Yaklaşımlar",
            c3_d1: "Üst çenede ileri kemik kaybı bulunan durumlarda tutunmanın elmacık kemiğinden (zigoma) sağlandığı ileri anatomik planlamalardır.",
            c3_u1: "Üst çenede şiddetli kemik erimesi (maksiller atrofi) veya geniş sinüs pnömatizasyonu nedeniyle klasik implantların uygulanamadığı ileri dişsizlik vakalarında değerlendirilir.",
            c3_t2: "Pterigoid / Tuber Bölgesi Yaklaşımları",
            c3_d2: "Üst çene arka bölgesinde kemik yüksekliği yetersiz olduğunda pterigoid veya maksiller tüber bölgesinden destek alan yaklaşımlardır.",
            c3_u2: "Üst çene arka bölgede ileri kemik kaybı ve sinüs sarkması bulunan diş eksikliklerinde alternatif arka destek sağlamak için planlanır.",
            c3_t3: "Transosteal / İleri Kemik Ankrajı",
            c3_d3: "İleri düzeyde kemik rezorpsiyonu olan özel olgularda alternatif anatomik tutunma noktalarını değerlendiren ileri yaklaşımlardır.",
            c3_u3: "Ağır kemik kaybı veya önceki cerrahi ya da patolojik süreçlere bağlı ileri doku kayıplarında özel multidisipliner değerlendirmeyle ele alınır."
        },
        en: {
            pageTitle: "Dental Implant Information Platform",
            defaultUserName: "User Name",
            accountSettings: "Account Settings",
            helpText: "Help",
            loginBtn: "Sign In",
            settingsTitle: "Settings",
            profileSettings: "Profile Settings",
            themeOptions: "Theme Options",
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            privacyControl: "Privacy & Data Control",
            logoutBtn: "Sign Out",
            panel3dTitle: "3D Tooth & Implant Inspection Area",
            panel3dSubtitle: "Drag with your mouse to rotate, inspect the model, and view the simulation",
            aiAssistantTitle: "AI Assistant",
            aiWelcomeMsg: "Hello! I am your dental health AI assistant. What would you like to learn about implants?",
            searchPlaceholder: "Search information on platform...",
            aiPlaceholder: "Ask the AI...",

            educationCards: "Education Cards",
            eduModalTitle: "Implant Education Cards",
            eduIntroNote: "Informational cards covering implant forms and clinical/anatomical indications; final treatment planning requires a dentist evaluation.",
            indicationLabel: "Used in / condition:",
            eduCat0Title: "Core Implant Information (4 Cards)",
            eduCat0Badge: "Core Info",
            c0_t1: "What Is a Dental Implant?",
            c0_d1: "A biocompatible artificial tooth root (typically titanium or zirconia) that replaces a missing tooth root and supports natural appearance and chewing function.",
            c0_u1: "Evaluated in single-tooth, multiple-tooth, or full-arch edentulism resulting from decay, trauma, periodontal disease, or congenitally missing teeth.",
            c0_t2: "Treatment Process and Stages",
            c0_d2: "After clinical exam and radiographic/3D assessment, the implant is placed, osseointegration takes place, and the final prosthetic crown/restoration is completed.",
            c0_u2: "The treatment timeline is staged by the dentist based on missing tooth count, jawbone status, and systemic health factors.",
            c0_t3: "Bone Structure and Suitability",
            c0_d3: "Jawbone width, height, and density guide implant planning; additional surgical approaches may be considered when bone volume is limited.",
            c0_u3: "Suitability and risk are specifically evaluated by a dentist in cases of post-extraction bone resorption, uncontrolled diabetes, or smoking.",
            c0_t4: "Daily Care and Longevity",
            c0_d4: "Consistent brushing, interdental cleaning, and routine dental checkups help maintain surrounding tissues and support long-term implant stability.",
            c0_u4: "Regular oral hygiene and follow-up visits are essential to help prevent peri-implant mucositis and peri-implantitis.",
            eduCat1Title: "1. Endosteal (6 Forms)",
            eduCat1Badge: "1. Endosteal",
            c1_t1: "Cylindrical (Parallel-Walled) Threaded Implant",
            c1_d1: "A common implant form with parallel threads along its body, providing balanced stability where bone width and height are sufficient.",
            c1_u1: "Evaluated in single or multiple tooth loss due to decay, trauma, or periodontal reasons when jawbone thickness is adequate.",
            c1_t2: "Conical (Root-Form) Implant",
            c1_d2: "A root-like design tapering toward the apex, offering anatomical adaptation and gradual stability.",
            c1_u2: "Preferred in post-extraction sockets or tooth loss cases with adjacent root angulations or anatomical contours.",
            c1_t3: "Hybrid-Body Implant",
            c1_d3: "Features a cylindrical upper section and conical lower section for adaptable placement across varying bone regions.",
            c1_u3: "Used in partial edentulism where bone density varies across regions (differing cortical and trabecular bone).",
            c1_t4: "Threadless Cylindrical (Press-Fit) Implant",
            c1_d4: "A design without screw threads that seats into the bone socket through anatomical fit and friction.",
            c1_u4: "Planned for mechanical adaptation in selected tooth loss cases with a suitable bone bed.",
            c1_t5: "Blade (Plate) Implant",
            c1_d5: "A flat plate-shaped body inserted into the bone for narrow alveolar ridges.",
            c1_u5: "Considered in localized tooth loss where horizontally narrow jawbone cannot accommodate a standard cylindrical implant.",
            c1_t6: "Short and Mini Implants",
            c1_d6: "Short-body or narrow-diameter options used when vertical bone height is limited.",
            c1_u6: "Used when vertical bone height is reduced due to resorption or proximity to sinuses/nerves, or in narrow interdental spaces.",
            eduCat2Title: "2. Special Cage, Plate & Tissue-Supported (4 Forms)",
            eduCat2Badge: "2. Special Cage, Plate & Tissue",
            c2_t1: "Subperiosteal (Framework) Structures",
            c2_d1: "Custom framework structures placed on top of the bone surface beneath the gum rather than screwed into the bone.",
            c2_u1: "Considered in selected partial or complete edentulism with advanced bone loss and insufficient bone volume for endosteal implants.",
            c2_t2: "Custom Plate and Cage Systems",
            c2_d2: "Anatomically tailored plate or cage reconstruction approaches for severe bone deficiencies.",
            c2_u2: "Evaluated in cases requiring anatomical support after trauma, tumor resection, or advanced alveolar bone loss.",
            c2_t3: "Intramucosal Retainers",
            c2_d3: "Small tissue-level retainers engaging shallow sockets in the oral mucosa to support prosthesis stability.",
            c2_u3: "Defined to provide additional retention support for removable or complete denture wearers with limited bone support.",
            c2_t4: "Custom-Form Support Structures",
            c2_d4: "Specialized form options defined by case-specific anatomical boundaries beyond standard cylindrical or conical shapes.",
            c2_u4: "Examined in tooth loss cases with individualized anatomical variations unsuitable for standard implant forms.",
            eduCat3Title: "3. Advanced Anatomical Anchorage (3 Forms)",
            eduCat3Badge: "3. Advanced Anatomical Anchorage",
            c3_t1: "Zygomatic Approaches",
            c3_d1: "Advanced anatomical planning where anchorage is achieved in the cheekbone (zygoma) in cases of severe upper jaw bone loss.",
            c3_u1: "Evaluated in severe maxillary atrophy or extensive sinus pneumatization where conventional implants cannot be placed.",
            c3_t2: "Pterygoid / Tuberosity Approaches",
            c3_d2: "Approaches obtaining support from the pterygoid or maxillary tuberosity region when posterior upper jaw height is limited.",
            c3_u2: "Planned to provide alternative posterior support in posterior maxilla tooth loss with bone loss or sinus descent.",
            c3_t3: "Transosteal / Advanced Bone Anchorage",
            c3_d3: "Advanced approaches evaluating alternative anatomical anchorage points in cases of severe bone resorption.",
            c3_u3: "Addressed via specialized multidisciplinary evaluation in severe tissue loss following major bone loss, surgery, or pathology."
        }
    };

    function paintLanguage(lang) {
        const activeLang = lang === "en" ? "en" : "tr";
        const dict = LANG_TEXT[activeLang];
        localStorage.setItem("siteLang", activeLang);
        document.documentElement.lang = activeLang;

        if (dict.pageTitle) {
            document.title = dict.pageTitle;
        }

        const label = document.getElementById("currentLangLabel");
        if (label) {
            label.textContent = activeLang.toUpperCase();
        }

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        const searchInput = document.querySelector(".search-wrapper input");
        if (searchInput && dict.searchPlaceholder) {
            searchInput.placeholder = dict.searchPlaceholder;
        }

        const aiInput = document.getElementById("aiInput");
        if (aiInput && dict.aiPlaceholder) {
            aiInput.placeholder = dict.aiPlaceholder;
        }
    }

    window.applyLanguage = paintLanguage;

    document.addEventListener("click", function (e) {
        const langBtn = e.target.closest("#langToggleBtn");
        if (!langBtn) return;

        e.preventDefault();
        e.stopPropagation();
        const current = localStorage.getItem("siteLang") || "tr";
        paintLanguage(current === "tr" ? "en" : "tr");
    }, true);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            paintLanguage(localStorage.getItem("siteLang") || "tr");
        });
    } else {
        paintLanguage(localStorage.getItem("siteLang") || "tr");
    }
})();// --------------------------------------------------------
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
function applyLanguage(lang) {
    const dict = translations[lang] || translations.tr;
    localStorage.setItem("siteLang", lang);
    document.documentElement.lang = lang;

    const langLabel = document.getElementById("currentLangLabel");
    if (langLabel) {
        langLabel.textContent = lang.toUpperCase();
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
}
window.applyLanguage = applyLanguage;

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLang") || "tr";
    applyLanguage(savedLang);

    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("siteLang") || "tr";
            const nextLang = currentLang === "tr" ? "en" : "tr";
            applyLanguage(nextLang);
        });
    }

    const eduModal = document.getElementById("educationModal");
    const openEduBtn = document.getElementById("openEducationBtn");
    const closeEduBtn = document.getElementById("closeEducationModal");

    const closeEducationView = () => {
        if (!eduModal) return;
        eduModal.classList.remove("is-open");
        eduModal.style.display = "none";
        document.body.style.overflow = "";
    };

    if (openEduBtn && eduModal) {
        openEduBtn.addEventListener("click", (e) => {
            e.preventDefault();
            eduModal.classList.add("is-open");
            eduModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    if (closeEduBtn && eduModal) {
        closeEduBtn.addEventListener("click", closeEducationView);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && eduModal && eduModal.classList.contains("is-open")) {
            closeEducationView();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const eduModal = document.getElementById("educationModal");
    const openEduBtn = document.getElementById("openEducationBtn");
    const closeEduBtn = document.getElementById("closeEducationModal");
    const langToggleBtn = document.getElementById("langToggleBtn");

    function closeEduModal() {
        if (!eduModal) return;
        eduModal.classList.remove("active", "is-open");
        eduModal.style.display = "none";
        document.body.style.overflow = "";
    }

    function openEduModal() {
        if (!eduModal) return;
        eduModal.classList.add("active", "is-open");
        eduModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    if (openEduBtn) {
        openEduBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openEduModal();
        });
    }

    if (closeEduBtn) {
        closeEduBtn.addEventListener("click", closeEduModal);
    }

    if (eduModal) {
        eduModal.addEventListener("click", (e) => {
            if (e.target === eduModal) closeEduModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeEduModal();
    });

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const nextLang = (localStorage.getItem("siteLang") || "tr") === "tr" ? "en" : "tr";
            if (typeof window.applyLanguage === "function") {
                window.applyLanguage(nextLang);
            } else {
                localStorage.setItem("siteLang", nextLang);
                const label = document.getElementById("currentLangLabel");
                if (label) label.textContent = nextLang.toUpperCase();
            }
        });
    }
});
