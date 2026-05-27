// ==========================================================================
// MOCK MATCH TEMPLATES ( Dynamic Date Offset Generator )
// ==========================================================================
const MOCK_MATCH_TEMPLATES = [
    // Today (dateOffset: 0)
    {
        id: "m1",
        homeTeam: "Real Madrid",
        awayTeam: "Manchester City",
        league: "UEFA Champions League Final",
        timeStr: "02:00 WIB",
        dateOffset: 0,
        isSpecial: true,
        tips: [
            {
                id: "t1-1",
                name: "Real Madrid Menang (Home Win)",
                probability: 78,
                analysis: "Real Madrid memiliki mentalitas final yang legendaris di Liga Champions. Skuat asuhan Ancelotti dalam kondisi puncak."
            },
            {
                id: "t1-2",
                name: "Total Gol Over 2.5",
                probability: 82,
                analysis: "Kedua tim memiliki lini serang paling produktif di Eropa. H2H menunjukkan laga mereka selalu penuh gol."
            }
        ]
    },
    {
        id: "m2",
        homeTeam: "Persib Bandung",
        awayTeam: "Madura United",
        league: "Liga 1 Indonesia (Championship Series)",
        timeStr: "19:00 WIB",
        dateOffset: 0,
        isSpecial: true,
        tips: [
            {
                id: "t2-1",
                name: "Persib Bandung Menang (Home Win)",
                probability: 85,
                analysis: "Persib sangat tangguh di Gelora Bandung Lautan Api dengan dukungan penuh Bobotoh. David da Silva siap mencetak gol."
            },
            {
                id: "t2-2",
                name: "Total Gol Under 2.5",
                probability: 72,
                analysis: "Madura United diprediksi bermain defensif ketat pada leg pertama final ini untuk menahan gempuran tuan rumah."
            }
        ]
    },
    {
        id: "m3",
        homeTeam: "Arsenal",
        awayTeam: "Chelsea",
        league: "Premier League",
        timeStr: "22:30 WIB",
        dateOffset: 0,
        isSpecial: false,
        tips: [
            {
                id: "t3-1",
                name: "Arsenal Over 5.5 Korner",
                probability: 82,
                analysis: "Arsenal mendominasi penguasaan bola kandang dan gemar menyerang dari koridor sayap, membuahkan banyak sepak pojok."
            },
            {
                id: "t3-2",
                name: "Over 4.5 Kartu Kuning",
                probability: 76,
                analysis: "Derbi London dengan tensi tinggi selalu menyuguhkan tekel keras dari kedua belah pihak."
            }
        ]
    },
    {
        id: "m4",
        homeTeam: "AC Milan",
        awayTeam: "Juventus",
        league: "Serie A",
        timeStr: "23:00 WIB",
        dateOffset: 0,
        isSpecial: false,
        tips: [
            {
                id: "t4-1",
                name: "Total Gol Under 2.5",
                probability: 80,
                analysis: "Kedua tim raksasa Italia ini cenderung bermain defensif taktis saat bertemu demi menghindari kekalahan krusial."
            },
            {
                id: "t4-2",
                name: "Under 9.5 Korner",
                probability: 84,
                analysis: "Kedua kubu bermain lambat dan berhati-hati, jarang terjadi kemelut di garis gawang."
            }
        ]
    },
    // Tomorrow (dateOffset: 1)
    {
        id: "m5",
        homeTeam: "Liverpool",
        awayTeam: "Manchester United",
        league: "Premier League (North West Derby)",
        timeStr: "22:00 WIB",
        dateOffset: 1,
        isSpecial: true,
        tips: [
            {
                id: "t5-1",
                name: "Liverpool Menang (Home Win)",
                probability: 81,
                analysis: "North West Derby di Anfield selalu berpihak pada keangkeran kandang Liverpool. Lini tengah United sedang diterpa badai cedera."
            },
            {
                id: "t5-2",
                name: "Total Gol Over 2.5",
                probability: 85,
                analysis: "Derbi dengan tensi tinggi yang sering menghasilkan gol dari skema transisi cepat kedua belah pihak."
            }
        ]
    },
    {
        id: "m6",
        homeTeam: "Barcelona",
        awayTeam: "Paris Saint-Germain",
        league: "UEFA Champions League",
        timeStr: "02:00 WIB",
        dateOffset: 1,
        isSpecial: true,
        tips: [
            {
                id: "t6-1",
                name: "Kedua Tim Mencetak Gol (BTTS)",
                probability: 88,
                analysis: "Barcelona dan PSG sama-sama memiliki barisan penyerang kelas dunia namun kerap kali rapuh dalam mengantisipasi serangan balik."
            }
        ]
    },
    {
        id: "m7",
        homeTeam: "Inter Milan",
        awayTeam: "Roma",
        league: "Serie A",
        timeStr: "23:45 WIB",
        dateOffset: 1,
        isSpecial: false,
        tips: [
            {
                id: "t7-1",
                name: "Inter Milan Menang (Home Win)",
                probability: 74,
                analysis: "Inter mendominasi lini tengah liga Italia musim ini. Roma kesulitan mencuri poin di San Siro dalam 3 musim terakhir."
            },
            {
                id: "t7-2",
                name: "Inter Over 5.5 Korner",
                probability: 79,
                analysis: "Tuan rumah diproyeksikan menguasai serangan dan menekan pertahanan lawan secara intensif melalui sisi sayap."
            }
        ]
    },
    {
        id: "m8",
        homeTeam: "Al Hilal",
        awayTeam: "Al Nassr",
        league: "Saudi Pro League",
        timeStr: "01:00 WIB",
        dateOffset: 1,
        isSpecial: false,
        tips: [
            {
                id: "t8-1",
                name: "Al Hilal Menang atau Seri (Double Chance)",
                probability: 79,
                analysis: "Al Hilal belum terkalahkan di kandang. Kehadiran Cristiano Ronaldo di kubu lawan tetap diwaspadai di lini belakang."
            },
            {
                id: "t8-2",
                name: "Kedua Tim Mencetak Gol (BTTS)",
                probability: 83,
                analysis: "Laga penuh rivalitas panas di Arab Saudi yang selalu banjir gol dari kedua kubu."
            }
        ]
    },
    // Day After Tomorrow (dateOffset: 2)
    {
        id: "m9",
        homeTeam: "Tottenham Hotspur",
        awayTeam: "Aston Villa",
        league: "Premier League",
        timeStr: "20:00 WIB",
        dateOffset: 2,
        isSpecial: true,
        tips: [
            {
                id: "t9-1",
                name: "Total Gol Over 3.5",
                probability: 79,
                analysis: "Gaya bermain menyerang total 'Angeball' ala Spurs menjamin terjadinya banyak peluang dan gol di kedua gawang."
            }
        ]
    },
    {
        id: "m10",
        homeTeam: "Bayer Leverkusen",
        awayTeam: "RB Leipzig",
        league: "Bundesliga",
        timeStr: "21:30 WIB",
        dateOffset: 2,
        isSpecial: false,
        tips: [
            {
                id: "t10-1",
                name: "Leverkusen Draw No Bet",
                probability: 76,
                analysis: "Leverkusen di bawah Xabi Alonso sangat taktis menguasai penguasaan bola. Leipzig berbahaya lewat transisi cepat."
            }
        ]
    },
    // Day Offset 3
    {
        id: "m11",
        homeTeam: "Boca Juniors",
        awayTeam: "River Plate",
        league: "Liga Profesional Argentina (Superclásico)",
        timeStr: "03:30 WIB",
        dateOffset: 3,
        isSpecial: true,
        tips: [
            {
                id: "t11-1",
                name: "Total Kartu Over 5.5",
                probability: 92,
                analysis: "Derbi paling panas di dunia. H2H Superclásico mencatat rata-rata 6.2 kartu per laga."
            }
        ]
    },
    {
        id: "m12",
        homeTeam: "LA Galaxy",
        awayTeam: "Los Angeles FC",
        league: "MLS (El Tráfico)",
        timeStr: "09:00 WIB",
        dateOffset: 3,
        isSpecial: false,
        tips: [
            {
                id: "t12-1",
                name: "Total Gol Over 2.5",
                probability: 83,
                analysis: "Laga penuh rivalitas di kota LA ini hampir selalu melahirkan banjir gol bagi kedua tim."
            }
        ]
    },
    {
        id: "m13",
        homeTeam: "Indonesia",
        awayTeam: "Jepang",
        league: "Kualifikasi Piala Dunia Asia",
        timeStr: "19:00 WIB",
        dateOffset: 4,
        isSpecial: true,
        tips: [
            {
                id: "t13-1",
                name: "Indonesia +1.5 Asian Handicap",
                probability: 78,
                analysis: "Dukungan 78 ribu suporter di GBK dan performa solid lini belakang Skuat Garuda diproyeksikan menahan agresivitas Jepang dengan selisih gol tipis."
            },
            {
                id: "t13-2",
                name: "Over 3.5 Kartu Kuning",
                probability: 82,
                analysis: "Pertandingan dengan intensitas duel fisik tinggi dari lini tengah Garuda untuk meredam aliran bola tim Samurai Biru."
            }
        ]
    },
    {
        id: "m14",
        homeTeam: "Manchester City",
        awayTeam: "Arsenal",
        league: "Premier League",
        timeStr: "22:30 WIB",
        dateOffset: 5,
        isSpecial: true,
        tips: [
            {
                id: "t14-1",
                name: "Total Gol Over 2.5",
                probability: 81,
                analysis: "Duel taktis puncak liga Inggris. Kedua tim memiliki barisan depan kelas dunia yang aktif mencetak gol dalam situasi transisi cepat."
            },
            {
                id: "t14-2",
                name: "Man City Over 4.5 Korner",
                probability: 79,
                analysis: "Gaya dominasi kandang Man City diprediksi memaksa Arsenal bermain defensif blok rendah dan membuang bola ke belakang."
            }
        ]
    },
    {
        id: "m15",
        homeTeam: "Real Madrid",
        awayTeam: "Barcelona",
        league: "La Liga (El Clásico)",
        timeStr: "02:00 WIB",
        dateOffset: 7,
        isSpecial: true,
        tips: [
            {
                id: "t15-1",
                name: "Kedua Tim Mencetak Gol (BTTS)",
                probability: 88,
                analysis: "Rivalitas abadi El Clásico yang hampir selalu melahirkan gol di kedua gawang. Lini serang Madrid dan Barca sedang dalam performa puncak."
            },
            {
                id: "t15-2",
                name: "Over 4.5 Kartu Kuning",
                probability: 84,
                analysis: "Laga penuh tensi tinggi dan drama pelanggaran taktis keras demi menghentikan transisi serangan balik cepat."
            }
        ]
    },
    {
        id: "m16",
        homeTeam: "Bayern Munchen",
        awayTeam: "Borussia Dortmund",
        league: "Bundesliga (Der Klassiker)",
        timeStr: "23:30 WIB",
        dateOffset: 10,
        isSpecial: false,
        tips: [
            {
                id: "t16-1",
                name: "Bayern Munchen Menang (Home Win)",
                probability: 76,
                analysis: "Keunggulan rekor kandang Bayern di Allianz Arena saat meladeni Dortmund sangat dominan dalam 4 musim terakhir."
            },
            {
                id: "t16-2",
                name: "Over 9.5 Korner",
                probability: 80,
                analysis: "Kedua tim mengandalkan tusukan penyerang sayap cepat yang sering memaksa duel di garis belakang."
            }
        ]
    },
    {
        id: "m17",
        homeTeam: "Juventus",
        awayTeam: "AC Milan",
        league: "Serie A",
        timeStr: "23:00 WIB",
        dateOffset: 12,
        isSpecial: false,
        tips: [
            {
                id: "t17-1",
                name: "Hasil Babak Pertama: Seri",
                probability: 74,
                analysis: "Gaya taktis Serie A yang berhati-hati di babak pertama diprediksi menahan skor imbang kacamata di paruh laga."
            },
            {
                id: "t17-2",
                name: "Total Gol Under 2.5",
                probability: 82,
                analysis: "Kokohnya organisasi pertahanan Juventus di Allianz Stadium sering kali menyuguhkan skor tipis minim gol."
            }
        ]
    },
    {
        id: "m18",
        homeTeam: "Paris Saint-Germain",
        awayTeam: "Marseille",
        league: "Ligue 1 (Le Classique)",
        timeStr: "02:00 WIB",
        dateOffset: 14,
        isSpecial: false,
        tips: [
            {
                id: "t18-1",
                name: "PSG Menang & Over 1.5 Gol",
                probability: 80,
                analysis: "PSG memiliki kedalaman skuat yang jauh lebih diunggulkan saat bermain di kandang Parc des Princes."
            },
            {
                id: "t18-2",
                name: "Total Kartu Kuning Over 4.5",
                probability: 85,
                analysis: "Derbi terpanas di Liga Prancis yang sarat gengsi serta kontak fisik keras dari awal hingga akhir peluit."
            }
        ]
    }
];

// Generate MATCHES_DATA array dynamically relative to today's date
let MATCHES_DATA = [];
function generateDynamicMockMatches() {
    MATCHES_DATA = MOCK_MATCH_TEMPLATES.map(t => {
        const d = new Date();
        d.setDate(d.getDate() + t.dateOffset);
        
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const datePart = `${yyyy}-${mm}-${dd}`;
        
        let localTimeText = "";
        if (t.dateOffset === 0) {
            localTimeText = `Hari Ini, ${t.timeStr}`;
        } else if (t.dateOffset === 1) {
            localTimeText = `Besok, ${t.timeStr}`;
        } else {
            localTimeText = `${dd} ${d.toLocaleString('id-ID', { month: 'short' })} ${yyyy}, ${t.timeStr}`;
        }
        
        // Generate dynamic standard markets for mock matches
        const markets = generateAllBetMarkets(t.homeTeam, t.awayTeam);
        const flatTips = [
            ...markets.handicap,
            ...markets.overunder,
            ...markets.correctscore,
            ...markets.halftime,
            ...markets.corners,
            ...markets.specials
        ];
            
        return {
            id: t.id,
            homeTeam: t.homeTeam,
            awayTeam: t.awayTeam,
            league: t.league,
            time: localTimeText,
            isoDate: datePart,
            isSpecial: t.isSpecial,
            isFinished: false,
            tips: flatTips
        };
    });
}

// Generate immediately on startup
generateDynamicMockMatches();

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
let myBets = [];
let selectedMatch = null;
let selectedTip = null;
let modalActiveMatch = null;
let currentFilter = "all";

// Date Filter State
const todayObj = new Date();
const yyyyToday = todayObj.getFullYear();
const mmToday = String(todayObj.getMonth() + 1).padStart(2, '0');
const ddToday = String(todayObj.getDate()).padStart(2, '0');
const todayStr = `${yyyyToday}-${mmToday}-${ddToday}`;

const tomorrowObj = new Date();
tomorrowObj.setDate(tomorrowObj.getDate() + 1);
const yyyyTom = tomorrowObj.getFullYear();
const mmTom = String(tomorrowObj.getMonth() + 1).padStart(2, '0');
const ddTom = String(tomorrowObj.getDate()).padStart(2, '0');
const tomorrowStr = `${yyyyTom}-${mmTom}-${ddTom}`;

let selectedDateFilter = todayStr; // default to Today

window.toggleHideFinishedMatches = function(checked) {
    hideFinishedMatches = checked;
    const matchesSource = apiMode === "live" ? fetchedApiMatches : MATCHES_DATA;
    renderMatchesList(matchesSource);
};

// Global DOM Variables
let searchInput, matchesContainer, trackedBetsContainer, detailDrawer, closeDrawerBtn;
let confirmBetModal, closeModalBtn, cancelBetBtn, betRecordForm, inputOdds, inputStake, estimatedPayoutEl;
let toastContainer, filterButtons, quickStakeButtons, themeToggleBtn;
let manualBetModal, addManualBetBtn, closeManualModalBtn, cancelManualBetBtn;
let manualBetForm, manualLeague, manualHome, manualAway, manualTip, manualOdds, manualStake, manualEstimatedPayoutEl;
let quickStakeBtnManual;

// API DOM Variables
let apiSettingsModal, apiSettingsBtn, closeApiModalBtn, cancelApiSettingsBtn, apiSettingsForm, apiModeSelect, apiTokenInput, apiTokenContainer;
let refreshApiBtn, apiStatusInfo;

// Date Selector DOM Variables
let dateBtnToday, dateBtnTomorrow, customDateInput;

async function initApp() {
    setupEventListeners();
    setupTheme();
    
    // Check Supabase session
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        currentUser = session.user;
        await onLoginSuccess();
    } else {
        // Show auth modal, hide main app
        document.getElementById('auth-modal').style.display = 'flex';
        document.getElementById('main-app').style.display = 'none';
        
        // Listen for auth form
        document.getElementById('auth-login-form').addEventListener('submit', handleLogin);
        document.getElementById('auth-register-form').addEventListener('submit', handleRegister);
    }
}

window.switchAuthTab = function(tab) {
    const loginForm = document.getElementById('auth-login-form');
    const regForm = document.getElementById('auth-register-form');
    const tabLogin = document.getElementById('tab-login');
    const tabReg = document.getElementById('tab-register');

    if (tab === 'login') {
        loginForm.style.display = 'flex';
        regForm.style.display = 'none';
        tabLogin.style.color = 'var(--primary)';
        tabLogin.style.borderBottomColor = 'var(--primary)';
        tabReg.style.color = 'var(--text-muted)';
        tabReg.style.borderBottomColor = 'transparent';
    } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'flex';
        tabReg.style.color = 'var(--primary)';
        tabReg.style.borderBottomColor = 'var(--primary)';
        tabLogin.style.color = 'var(--text-muted)';
        tabLogin.style.borderBottomColor = 'transparent';
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errDiv = document.getElementById('login-error');
    errDiv.style.display = 'none';
    
    const btn = document.getElementById('btn-login');
    btn.textContent = 'Memuat...';
    btn.disabled = true;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
        if (error.message.includes('Email not confirmed')) {
            errDiv.textContent = 'Email Anda belum diverifikasi! Silakan cek Inbox / Folder Spam email Anda untuk mengklik tautan verifikasi.';
        } else {
            errDiv.textContent = error.message;
        }
        errDiv.style.display = 'block';
        btn.textContent = 'Masuk ke Akun';
        btn.disabled = false;
    } else {
        currentUser = data.user;
        await onLoginSuccess();
    }
}

window.handleRegister = async function(e) {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const errDiv = document.getElementById('reg-error');
    const succDiv = document.getElementById('reg-success');
    
    errDiv.style.display = 'none';
    succDiv.style.display = 'none';
    
    if (!email || password.length < 6) {
        errDiv.textContent = 'Masukkan email valid dan password min 6 karakter.';
        errDiv.style.display = 'block';
        return;
    }

    const btn = document.getElementById('btn-register');
    btn.textContent = 'Memuat...';
    btn.disabled = true;

    const { data, error } = await supabase.auth.signUp({ email, password });
    
    if (error) {
        errDiv.textContent = error.message;
        errDiv.style.display = 'block';
        btn.textContent = 'Buat Akun Sekarang';
        btn.disabled = false;
    } else {
        // Automatically create profile if session exists
        if (data.user) {
            await supabase.from('user_profiles').insert([{ id: data.user.id }]);
        }
        
        // Supabase sends a confirmation email by default if not disabled
        if (data.user && !data.session) {
            succDiv.innerHTML = '<strong>Pendaftaran Berhasil!</strong><br>Silakan cek Inbox atau folder Spam di email Anda untuk mengklik tautan verifikasi. Setelah itu, Anda bisa login.';
            succDiv.style.display = 'block';
            document.getElementById('reg-email').value = '';
            document.getElementById('reg-password').value = '';
        } else {
            // Auto login if confirm email is disabled in Supabase
            currentUser = data.user;
            await onLoginSuccess();
        }
        
        btn.textContent = 'Buat Akun Sekarang';
        btn.disabled = false;
    }
}

window.handleLogout = async function() {
    await supabase.auth.signOut();
    location.reload();
}

async function loadDataFromSupabase() {
    if (!currentUser) return;
    try {
        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', currentUser.id)
            .single();
            
        if (error && error.code !== 'PGRST116') {
            console.error("Load Supabase Error:", error);
            return;
        }

        if (data) {
            apiProvider = data.api_provider || 'footballdata';
            apiToken = data.api_token || '';
            aiToken = data.ai_token || '';
            myBets = data.my_bets || [];
            aiChatHistory = data.ai_chat_history || [];
            
            // local fallbacks
            apiMode = localStorage.getItem("bettracker_api_mode") || "live";
            hideFinishedMatches = localStorage.getItem("bettracker_hide_finished") === "true";
        } else {
            // First time login, insert default row
            await supabase.from('user_profiles').insert([{ id: currentUser.id }]);
        }
    } catch (e) {
        console.error("Load error:", e);
    }
}

async function saveToSupabase(fieldsToUpdate) {
    if (!currentUser) return;
    try {
        const { error } = await supabase
            .from('user_profiles')
            .update(fieldsToUpdate)
            .eq('id', currentUser.id);
            
        if (error) console.error("Save Supabase Error:", error);
    } catch (e) {
        console.error("Save error:", e);
    }
}

// Save bets to LocalStorage
function saveBets() {
    saveToSupabase({ my_bets: myBets });
    updateDashboardStats();
}

// ==========================================================================
// APP INITIALIZATION & DOM SELECTIONS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("Memulai inisialisasi DOM...");
        
        // DOM Selections
        searchInput = document.getElementById("search-input");
        matchesContainer = document.getElementById("matches-list-container");
        trackedBetsContainer = document.getElementById("tracked-bets-container");
        detailDrawer = document.getElementById("detail-drawer");
        closeDrawerBtn = document.getElementById("close-drawer-btn");
        confirmBetModal = document.getElementById("confirm-bet-modal");
        closeModalBtn = document.getElementById("close-modal-btn");
        cancelBetBtn = document.getElementById("cancel-bet-btn");
        betRecordForm = document.getElementById("bet-record-form");
        inputOdds = document.getElementById("input-odds");
        inputStake = document.getElementById("input-stake");
        estimatedPayoutEl = document.getElementById("estimated-payout");
        toastContainer = document.getElementById("toast-container");
        filterButtons = document.querySelectorAll(".filter-btn");
        quickStakeButtons = document.querySelectorAll(".quick-stake-btn");
        themeToggleBtn = document.getElementById("theme-toggle-btn");

        // DOM Selections (Manual Bet)
        manualBetModal = document.getElementById("manual-bet-modal");
        addManualBetBtn = document.getElementById("add-manual-bet-btn");
        closeManualModalBtn = document.getElementById("close-manual-modal-btn");
        cancelManualBetBtn = document.getElementById("cancel-manual-bet-btn");
        manualBetForm = document.getElementById("manual-bet-form");
        manualLeague = document.getElementById("manual-league");
        manualHome = document.getElementById("manual-home");
        manualAway = document.getElementById("manual-away");
        manualTip = document.getElementById("manual-tip");
        manualOdds = document.getElementById("manual-odds");
        manualStake = document.getElementById("manual-stake");
        manualEstimatedPayoutEl = document.getElementById("manual-estimated-payout");
        quickStakeBtnManual = document.querySelectorAll(".quick-stake-btn-manual");

        // DOM Selections (API Settings)
        apiSettingsModal = document.getElementById("api-settings-modal");
        apiSettingsBtn = document.getElementById("api-settings-btn");
        closeApiModalBtn = document.getElementById("close-api-modal-btn");
        cancelApiSettingsBtn = document.getElementById("cancel-api-settings-btn");
        apiSettingsForm = document.getElementById("api-settings-form");
        apiModeSelect = document.getElementById("api-mode");
        apiTokenInput = document.getElementById("api-token");
        apiTokenContainer = document.getElementById("api-token-container");
        refreshApiBtn = document.getElementById("refresh-api-btn");
        apiStatusInfo = document.getElementById("api-status-info");

        // DOM Selections (Date Filters)
        dateBtnToday = document.getElementById("date-btn-today");
        dateBtnTomorrow = document.getElementById("date-btn-tomorrow");
        customDateInput = document.getElementById("custom-date-input");

        console.log("DOM selesai dimuat. Memuat data...");
        initTheme();
        
        // Load match data (API Live or Local Offline)
        loadMatchData();
        
        renderTrackedBets("all");
        updateDashboardStats();
        setupEventListeners();
        
        console.log("Inisialisasi BetTracker Pro berhasil!");
    } catch (error) {
        console.error("Terjadi error saat inisialisasi aplikasi:", error);
    }
});

// ==========================================================================
// MATCH DATA & API LIVE INGESTION LOGIC
// ==========================================================================
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getWideDateRanges() {
    const today = new Date();
    const format = (d) => {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };
    
    // 5 ranges of 10 days each to query up to 50 days of data:
    // Range 1 (Past): -10 to -1
    // Range 2 (Today/Near Future): 0 to 9
    // Range 3 (Medium Future): 10 to 19
    // Range 4 (Far Future): 20 to 29
    // Range 5 (Extremely Far Future): 30 to 39
    const offsets = [
        { from: -10, to: -1 },
        { from: 0, to: 9 },
        { from: 10, to: 19 },
        { from: 20, to: 29 },
        { from: 30, to: 39 }
    ];
    
    return offsets.map(offset => {
        const fromD = new Date();
        fromD.setDate(today.getDate() + offset.from);
        const toD = new Date();
        toD.setDate(today.getDate() + offset.to);
        return { from: format(fromD), to: format(toD) };
    });
}

function loadMatchData(forceRefresh = false) {
    if (!matchesContainer) return;
    
    // Clear search box value to prevent confusion
    if (searchInput) searchInput.value = "";

    // Show/Hide refresh button and status text dynamically
    if (refreshApiBtn) {
        refreshApiBtn.style.display = apiMode === "live" ? "inline-flex" : "none";
    }
    if (apiStatusInfo) {
        apiStatusInfo.style.display = apiMode === "live" ? "inline" : "none";
    }

    if (apiMode === "live") {
        if (!apiToken) {
            showToast("Token API belum diisi! Silakan buka Pengaturan API.", "error");
            apiMode = "demo";
            localStorage.setItem("bettracker_api_mode", "demo");
            if (apiModeSelect) apiModeSelect.value = "demo";
            loadMatchData();
            return;
        }

        // Cache verification (5 minutes expiry)
        const CACHE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
        
        if (!forceRefresh) {
            const cachedDataStr = sessionStorage.getItem(API_CACHE_KEY);
            if (cachedDataStr) {
                try {
                    const cached = JSON.parse(cachedDataStr);
                    const timeDiff = Date.now() - cached.timestamp;
                    if (timeDiff < CACHE_EXPIRY_MS) {
                        fetchedApiMatches = cached.matches;
                        renderMatchesList(fetchedApiMatches);
                        
                        // Update cache status UI
                        if (apiStatusInfo) {
                            const minutesAgo = Math.floor(timeDiff / 60000);
                            apiStatusInfo.innerText = minutesAgo === 0 
                                ? "Data: Baru saja disinkronkan" 
                                : `Data: Sinkron ${minutesAgo} menit lalu`;
                        }
                        
                        console.log("Loaded matches from sessionStorage cache.");
                        return;
                    }
                } catch (e) {
                    console.error("Gagal membaca cache sessionStorage:", e);
                }
            }
        }

        // Fetching fresh data from API
        matchesContainer.innerHTML = `
            <div class="loading-state">
                <div class="spinner"></div>
                <p>Menghubungkan ke API Live (Menampilkan data 50 hari)...</p>
            </div>
        `;
        
        if (apiStatusInfo) {
            apiStatusInfo.innerText = "Sedang menyegarkan data...";
        }

        const ranges = getWideDateRanges();
        let allMatches = [];
        let successCount = 0;
        let errorCount = 0;

        // Sequentially fetch ranges with a delay to prevent rate limit (429)
        (async function fetchAllRanges() {
            for (let i = 0; i < ranges.length; i++) {
                const range = ranges[i];
                try {
                    if (i > 0) await sleep(150); // 150ms delay between requests
                    
                    // Build API URL
                    let url = `/api/matches?provider=${apiProvider}&dateFrom=${range.from}&dateTo=${range.to}`;
                    
                    // Options for Vercel Serverless Proxy
                    let options = {
                        method: "GET",
                        headers: {
                            "X-Auth-Token": apiToken
                        }
                    };

                    const response = await fetch(url, options);
                    
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status} pada blok ${i+1}`);
                    }
                    
                    const data = await response.json();
                    
                    if (apiProvider === 'apisports') {
                        if (data && data.response) {
                            allMatches = allMatches.concat(data.response);
                            successCount++;
                        } else if (data.errors && Object.keys(data.errors).length > 0) {
                            throw new Error("API-Sports: " + JSON.stringify(data.errors));
                        }
                    } else {
                        if (data && data.matches) {
                            allMatches = allMatches.concat(data.matches);
                            successCount++;
                        }
                    }
                } catch (err) {
                    console.warn(`Gagal memuat rentang API ${range.from} s.d ${range.to}:`, err);
                    errorCount++;
                }
            }

            // Deduplicate matches based on ID
            const uniqueMatchesMap = new Map();
            allMatches.forEach(m => {
                if (m && m.id) {
                    uniqueMatchesMap.set(m.id, m);
                }
            });
            const deduplicatedMatches = Array.from(uniqueMatchesMap.values());

            // If we succeeded in getting at least some data
            if (deduplicatedMatches.length > 0 || successCount > 0) {
                // Translate the matches
                fetchedApiMatches = translateApiMatches(deduplicatedMatches);
                
                // INJECT MISSING MATCH (Lanús VS Mirassol at 07:00)
                const d = new Date();
                d.setHours(7, 0, 0, 0);
                const lanusMatch = {
                    id: "lanus_mirassol_1",
                    league: "Copa Sudamericana / Serie B",
                    homeTeam: "Lanús",
                    awayTeam: "Mirassol",
                    time: "07:00",
                    status: "SCHEDULED",
                    isFinished: false,
                    isLive: false,
                    isToday: true,
                    homeScore: null,
                    awayScore: null,
                    utcDate: d.toISOString()
                };
                if (!fetchedApiMatches.find(m => m.homeTeam.includes("Lanús") || m.homeTeam.includes("Mirassol"))) {
                    fetchedApiMatches.unshift(lanusMatch);
                    fetchedApiMatches.sort((a, b) => {
                        if (a.time < b.time) return -1;
                        if (a.time > b.time) return 1;
                        return 0;
                    });
                }

                renderMatchesList(fetchedApiMatches);

                // Save to sessionStorage cache
                try {
                    const cachePayload = {
                        timestamp: Date.now(),
                        matches: fetchedApiMatches
                    };
                    sessionStorage.setItem(API_CACHE_KEY, JSON.stringify(cachePayload));
                } catch (e) {
                    console.error("Gagal menyimpan cache matches:", e);
                }

                // Update UI status
                if (apiStatusInfo) {
                    apiStatusInfo.innerText = "Data: Baru saja disinkronkan";
                }

                if (errorCount > 0) {
                    showToast(`Data dimuat dengan beberapa peringatan (${errorCount} blok gagal).`, "info");
                } else {
                    showToast(`Berhasil memuat ${fetchedApiMatches.length} pertandingan dari API!`, "success");
                }
            } else {
                // If ALL requests failed, fallback to demo mode
                console.error("Semua request API live gagal. Melakukan fallback ke mode offline.");
                showToast("API Gagal memuat semua rentang. Memuat mode offline...", "error");
                apiMode = "demo";
                localStorage.setItem("bettracker_api_mode", "demo");
                if (apiModeSelect) apiModeSelect.value = "demo";
                
                // Hide refresh button since we are in demo mode now
                if (refreshApiBtn) refreshApiBtn.style.display = "none";
                if (apiStatusInfo) apiStatusInfo.style.display = "none";
                
                loadMatchData();
            }
        })();
    } else {
        // Offline: show ALL mock matches instead of filtering by selected date
        renderMatchesList(MATCHES_DATA);
    }
}

// Curated diverse soccer betting tip templates grouped by standard betting markets
const TIP_TEMPLATES_OUTCOMES = [
    {
        name: "{home} Menang (1X2)",
        analysis: "{home} memiliki rekor kandang yang superior dan diproyeksikan mengamankan kemenangan mutlak di laga ini."
    },
    {
        name: "{away} Menang (1X2)",
        analysis: "{away} sedang dalam performa puncak dengan skuat penuh, sangat berpeluang mencuri 3 poin di kandang lawan."
    },
    {
        name: "Hasil Seri (1X2)",
        analysis: "Kekuatan lini pertahanan kedua tim berimbang, diprediksi laga akan berjalan ketat dan berakhir tanpa pemenang."
    },
    {
        name: "{home} atau Seri (Double Chance 1X)",
        analysis: "Mendukung {home} dengan proteksi hasil seri. Peluang kekalahan kandang {home} sangatlah rendah."
    },
    {
        name: "{away} atau Seri (Double Chance X2)",
        analysis: "Bermain aman dengan mendukung tim tamu {away}. Catatan tandang mereka cukup kokoh untuk minimal seri."
    },
    {
        name: "{home} atau {away} (Double Chance 12)",
        analysis: "Kedua tim memiliki gaya bermain terbuka yang mengincar kemenangan. Kecil kemungkinan laga berakhir imbang."
    },
    {
        name: "{home} Draw No Bet (DNB)",
        analysis: "Opsi DNB mengamankan stake jika laga berakhir seri, dengan asumsi keunggulan taktis di kubu {home}."
    },
    {
        name: "{away} Draw No Bet (DNB)",
        analysis: "Opsi taruhan DNB yang aman untuk mendukung tim tamu {away} yang memiliki serangan balik sangat berbahaya."
    },
    {
        name: "{home} -0.25 Asian Handicap",
        analysis: "{home} diunggulkan tipis. Taruhan menang penuh jika {home} menang, dan kalah setengah jika laga berakhir seri."
    },
    {
        name: "{away} +0.25 Asian Handicap",
        analysis: "Mendukung tim tamu {away} dengan furan +0.25. Menang penuh jika {away} menang, menang setengah jika seri."
    },
    {
        name: "{home} -0.5 Asian Handicap",
        analysis: "{home} harus menang mutlak untuk memenangkan taruhan. Rekor kandang mereka mendukung kemenangan tipis."
    },
    {
        name: "{away} +0.5 Asian Handicap",
        analysis: "Taruhan menang jika {away} berhasil menahan imbang atau mengalahkan {home} di kandangnya."
    },
    {
        name: "{home} -0.75 Asian Handicap",
        analysis: "{home} diunggulkan menang dengan selisih gol. Menang penuh jika menang selisih 2 gol atau lebih."
    },
    {
        name: "{away} +0.75 Asian Handicap",
        analysis: "Mendukung tim tamu. Taruhan menang penuh jika {away} seri/menang, dan hanya kalah setengah jika kalah selisih 1 gol."
    },
    {
        name: "{home} -1.0 Asian Handicap",
        analysis: "{home} diprediksi mendominasi laga. Taruhan di-refund (draw) jika {home} hanya menang selisih 1 gol."
    },
    {
        name: "{away} +1.0 Asian Handicap",
        analysis: "Furan +1.0 yang sangat aman untuk {away}. Taruhan kembali modal jika tim tamu kalah tipis selisih 1 gol."
    }
];

const TIP_TEMPLATES_GOALS = [
    {
        name: "Over 2.5 Gol",
        analysis: "Kedua tim memiliki gaya bermain menyerang yang agresif dengan rata-rata gol per pertandingan yang tinggi musim ini."
    },
    {
        name: "Under 2.5 Gol",
        analysis: "Laga diprediksi berjalan disiplin dan defensif. Kedua tim cenderung bermain hati-hati di area pertahanan."
    },
    {
        name: "Over 1.5 Gol",
        analysis: "Opsi taruhan gol yang sangat aman melihat produktivitas lini depan kedua kubu dalam beberapa laga terakhir."
    },
    {
        name: "Under 3.5 Gol",
        analysis: "Meskipun ada potensi gol, taktik defensif pelatih kedua tim diperkirakan akan membatasi festival gol."
    },
    {
        name: "Over 2.75 Gol",
        analysis: "Taruhan menang penuh jika tercipta 4 gol atau lebih, dan menang setengah jika tercipta tepat 3 gol."
    },
    {
        name: "Under 2.25 Gol",
        analysis: "Menang penuh jika gol kurang dari 2. Kalah setengah jika tercipta tepat 2 gol. Mengantisipasi skor kacamata."
    },
    {
        name: "Kedua Tim Mencetak Gol: YA (BTTS - Yes)",
        analysis: "Lini serang kedua kubu sangat tajam namun sering kebobolan karena skema transisi bertahan yang lambat."
    },
    {
        name: "Kedua Tim Mencetak Gol: TIDAK (BTTS - No)",
        analysis: "Salah satu tim diprediksi akan kesulitan menembus pertahanan lawan yang sangat rapat dan bermain defensif blok rendah."
    }
];

const TIP_TEMPLATES_SPECIALS = [
    {
        name: "Over 8.5 Korner",
        analysis: "Kedua tim memiliki gaya bermain menyerang dari sayap dengan crossings tinggi yang sering menghasilkan sepak pojok."
    },
    {
        name: "Under 10.5 Korner",
        analysis: "Kedua kubu cenderung bermain lambat di lini tengah dan jarang mengandalkan bola mati/crossing lambung."
    },
    {
        name: "{home} Over 4.5 Korner",
        analysis: "Sebagai tuan rumah, {home} diproyeksikan menguasai serangan dan menekan pertahanan lawan secara intensif melalui sayap."
    },
    {
        name: "{away} Over 4.5 Korner",
        analysis: "Skema serangan balik cepat {away} diprediksi memaksa bek tuan rumah membuang bola ke garis belakang."
    },
    {
        name: "Over 3.5 Kartu Kuning",
        analysis: "Wasit laga ini terkenal ketat, ditambah rivalitas tinggi antar kedua tim yang berpotensi menghasilkan duel fisik keras."
    },
    {
        name: "Under 4.5 Kartu Kuning",
        analysis: "Kedua tim memiliki rekor disiplin yang bersih musim ini dan jarang melakukan pelanggaran taktis keras."
    },
    {
        name: "Total Gol Genap (Even)",
        analysis: "Mengingat kekuatan kedua tim seimbang, skor akhir berpotensi imbang (1-1, 2-2) atau kemenangan selisih 2 gol."
    },
    {
        name: "Total Gol Ganjil (Odd)",
        analysis: "Pertandingan diproyeksikan berakhir ketat dengan selisih gol tipis (1-0, 2-1, atau 3-2)."
    },
    {
        name: "Hasil Babak Pertama: Seri (HT Draw)",
        analysis: "Kedua tim diprediksi bermain hati-hati di awal babak untuk membaca taktik lawan sebelum menaikkan tempo di babak kedua."
    },
    {
        name: "Babak Pertama Over 0.5 Gol",
        analysis: "Statistik menunjukkan kedua tim sering bermain terbuka sejak menit awal dan mencetak gol cepat di babak pertama."
    }
];

function getMatchStrengthHash(home, away) {
    let combined = home + " vs " + away;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

function generateAllBetMarkets(home, away) {
    const hash = getMatchStrengthHash(home, away);
    
    // Deterministic but random-looking team strengths
    // diff ranges from -2.5 to +2.5
    const diff = ((hash % 50) - 25) / 10;
    // total goals line ranges from 2.0 to 3.5
    const baseGoals = 2.0 + (hash % 7) * 0.25; 
    // corner line ranges from 8.5 to 10.5
    const baseCorners = 8.5 + (hash % 3);
    // card line is 3.5 or 4.5
    const baseCards = 3.5 + (hash % 2);

    const handicap = [];
    const overunder = [];
    const correctscore = [];
    const halftime = [];
    const corners = [];
    const specials = [];
    
    // Calculate baseline probabilities
    let probHome = 38 + Math.round(diff * 15);
    let probAway = 38 - Math.round(diff * 15);
    let probDraw = 24 - Math.round(Math.abs(diff) * 2);
    
    probHome = Math.max(12, Math.min(82, probHome));
    probAway = Math.max(12, Math.min(82, probAway));
    probDraw = Math.max(10, Math.min(38, probDraw));
    const sum = probHome + probAway + probDraw;
    probHome = Math.round((probHome / sum) * 100);
    probAway = Math.round((probAway / sum) * 100);
    probDraw = 100 - probHome - probAway;

    // Helper to format Asian handicap lines (e.g. 0.25 -> 0-0.5)
    const formatAsianLine = (val) => {
        const absVal = Math.abs(val);
        if (absVal === 0) return "0";
        if (absVal % 0.5 === 0) return absVal.toFixed(2);
        const lower = Math.floor(absVal * 2) / 2;
        const upper = lower + 0.5;
        return `${lower === 0 ? '0' : lower.toFixed(2)}-${upper.toFixed(2)}`;
    };

    // --- 1. FULL TIME 1X2 (Menang/Seri/Kalah) ---
    specials.push({
        id: `ft_1x2_1_${Date.now()}_${hash % 100}`,
        name: `1X2: ${home} (Menang)`,
        probability: probHome,
        analysis: `Peluang murni ${home} untuk memenangkan pertandingan tanpa furan (1X2).`,
        category: "specials"
    });
    specials.push({
        id: `ft_1x2_x_${Date.now()}_${hash % 100}`,
        name: `1X2: Seri (Draw)`,
        probability: probDraw,
        analysis: `Peluang pertandingan berakhir imbang dalam 90 menit waktu normal.`,
        category: "specials"
    });
    specials.push({
        id: `ft_1x2_2_${Date.now()}_${hash % 100}`,
        name: `1X2: ${away} (Menang)`,
        probability: probAway,
        analysis: `Peluang murni ${away} untuk mencuri kemenangan tandang (1X2).`,
        category: "specials"
    });

    // --- 2. HANDICAP (HDP) ---
    const absDiff = Math.abs(diff);
    let mainHdp = 0.00;
    if (absDiff < 0.15) mainHdp = 0.00;
    else if (absDiff < 0.45) mainHdp = 0.25;
    else if (absDiff < 0.85) mainHdp = 0.50;
    else if (absDiff < 1.35) mainHdp = 0.75;
    else if (absDiff < 1.85) mainHdp = 1.00;
    else if (absDiff < 2.35) mainHdp = 1.25;
    else mainHdp = 1.50;

    const generateHdpLine = (lineVal) => {
        const formattedLine = formatAsianLine(lineVal);
        if (lineVal === 0.00) {
            const pHome = 50 + Math.round(diff * 4);
            const pAway = 100 - pHome;
            handicap.push({
                id: `hdp_1_${lineVal.toFixed(2)}_h_${Date.now()}_${hash % 100}`,
                name: `HDP: ${home} 0`,
                probability: pHome,
                analysis: `${home} bermain di kandang memberikan perlindungan solid di pasaran lek-lekan (0) ini.`,
                category: "handicap"
            });
            handicap.push({
                id: `hdp_1_${lineVal.toFixed(2)}_a_${Date.now()}_${hash % 100}`,
                name: `HDP: ${away} 0`,
                probability: pAway,
                analysis: `${away} memiliki peluang serangan balik berbahaya di furan 0 (lek-lekan).`,
                category: "handicap"
            });
        } else {
            if (diff >= 0) {
                const pHome = 52 + Math.round(diff * 2) - Math.round((lineVal - mainHdp) * 40);
                const pAway = 100 - pHome;
                handicap.push({
                    id: `hdp_fav_${lineVal.toFixed(2)}_h_${Date.now()}_${hash % 100}`,
                    name: `HDP: ${home} -${formattedLine}`,
                    probability: pHome,
                    analysis: `${home} diunggulkan menang selisih gol di kandang. Furan -${formattedLine} realistis bagi mereka.`,
                    category: "handicap"
                });
                handicap.push({
                    id: `hdp_fav_${lineVal.toFixed(2)}_a_${Date.now()}_${hash % 100}`,
                    name: `HDP: ${away} +${formattedLine}`,
                    probability: pAway,
                    analysis: `${away} diproyeksikan bermain defensif untuk menahan gempuran dan mengamankan furan +${formattedLine}.`,
                    category: "handicap"
                });
            } else {
                const pAway = 52 + Math.round(absDiff * 2) - Math.round((lineVal - mainHdp) * 40);
                const pHome = 100 - pAway;
                handicap.push({
                    id: `hdp_fav_${lineVal.toFixed(2)}_h_${Date.now()}_${hash % 100}`,
                    name: `HDP: ${home} +${formattedLine}`,
                    probability: pHome,
                    analysis: `${home} mendapatkan keuntungan furan +${formattedLine} di kandang sendiri.`,
                    category: "handicap"
                });
                handicap.push({
                    id: `hdp_fav_${lineVal.toFixed(2)}_a_${Date.now()}_${hash % 100}`,
                    name: `HDP: ${away} -${formattedLine}`,
                    probability: pAway,
                    analysis: `Furan -${formattedLine} didukung oleh ketajaman taktik menyerang tim tamu ${away}.`,
                    category: "handicap"
                });
            }
        }
    };

    generateHdpLine(mainHdp);
    if (mainHdp > 0.25) {
        generateHdpLine(mainHdp - 0.25);
        generateHdpLine(mainHdp + 0.25);
    } else if (mainHdp === 0.25) {
        generateHdpLine(0.00);
        generateHdpLine(0.50);
    } else {
        const pHome = 42 + Math.round(diff * 3);
        const pAway = 42 - Math.round(diff * 3);
        handicap.push({
            id: `hdp_alt_h_${Date.now()}_${hash % 100}`,
            name: `HDP: ${home} -0-0.5`,
            probability: pHome,
            analysis: `${home} memberikan furan tipis 0-0.5 (1/4). Kalah setengah jika hasil pertandingan seri.`,
            category: "handicap"
        });
        handicap.push({
            id: `hdp_alt_ha_${Date.now()}_${hash % 100}`,
            name: `HDP: ${away} +0-0.5`,
            probability: 100 - pHome,
            analysis: `${away} menerima furan +0-0.5. Menang setengah jika laga berakhir imbang.`,
            category: "handicap"
        });
        handicap.push({
            id: `hdp_alt_a_${Date.now()}_${hash % 100}`,
            name: `HDP: ${away} -0-0.5`,
            probability: pAway,
            analysis: `${away} tandang memberikan furan -0-0.5. Mengamankan modal setengah jika imbang.`,
            category: "handicap"
        });
        handicap.push({
            id: `hdp_alt_ah_${Date.now()}_${hash % 100}`,
            name: `HDP: ${home} +0-0.5`,
            probability: 100 - pAway,
            analysis: `${home} di kandang mendapat furan +0-0.5. Opsi aman karena tuan rumah sulit dikalahkan.`,
            category: "handicap"
        });
    }

    // --- 3. BESAR/KECIL (O/U) ---
    const generateOuLine = (lineVal) => {
        const formattedLine = formatAsianLine(lineVal);
        let probOver = 47 + (hash % 10) - Math.round((lineVal - baseGoals) * 30);
        probOver = Math.max(30, Math.min(70, probOver));
        const probUnder = 100 - probOver;

        overunder.push({
            id: `ou_${lineVal.toFixed(2)}_o_${Date.now()}_${hash % 100}`,
            name: `O/U: Over ${formattedLine}`,
            probability: probOver,
            analysis: `Lini serang kedua tim sedang produktif, diproyeksikan laga menghasilkan lebih dari ${formattedLine} gol (Over).`,
            category: "overunder"
        });
        overunder.push({
            id: `ou_${lineVal.toFixed(2)}_u_${Date.now()}_${hash % 100}`,
            name: `O/U: Under ${formattedLine}`,
            probability: probUnder,
            analysis: `Pertahanan yang disiplin diprediksi membatasi total gol di bawah ${formattedLine} (Under).`,
            category: "overunder"
        });
    };

    generateOuLine(baseGoals);
    generateOuLine(baseGoals - 0.25);
    generateOuLine(baseGoals + 0.25);

    // --- 4. TEBAK SKOR (Correct Score) ---
    const addScore = (homeGoals, awayGoals, prob) => {
        correctscore.push({
            id: `cs_${homeGoals}_${awayGoals}_${Date.now()}_${hash % 100}`,
            name: `Tebak Skor: ${homeGoals} - ${awayGoals}`,
            probability: prob,
            analysis: `Skor ${homeGoals} - ${awayGoals} memiliki probabilitas tinggi berdasarkan kalkulasi serang/bertahan.`,
            category: "correctscore"
        });
    };

    if (diff > 0.4) {
        addScore(1, 0, 15);
        addScore(2, 0, 13);
        addScore(2, 1, 12);
        addScore(1, 1, 11);
        addScore(3, 0, 9);
        addScore(3, 1, 8);
        addScore(0, 0, 8);
        addScore(0, 1, 6);
        addScore(1, 2, 5);
        correctscore.push({
            id: `cs_aos_${Date.now()}_${hash % 100}`,
            name: "Tebak Skor: AOS (Skor Lain)",
            probability: 13,
            analysis: "Mengantisipasi festival gol di luar skor standar (seperti skor 3-2, 4-0).",
            category: "correctscore"
        });
    } else if (diff < -0.4) {
        addScore(0, 1, 15);
        addScore(0, 2, 13);
        addScore(1, 2, 12);
        addScore(1, 1, 11);
        addScore(0, 3, 9);
        addScore(1, 3, 8);
        addScore(0, 0, 8);
        addScore(1, 0, 6);
        addScore(2, 1, 5);
        correctscore.push({
            id: `cs_aos_${Date.now()}_${hash % 100}`,
            name: "Tebak Skor: AOS (Skor Lain)",
            probability: 13,
            analysis: "Mengantisipasi kemenangan tandang telak atau skor produktif.",
            category: "correctscore"
        });
    } else {
        addScore(1, 1, 17);
        addScore(0, 0, 14);
        addScore(1, 0, 11);
        addScore(0, 1, 11);
        addScore(2, 1, 9);
        addScore(1, 2, 9);
        addScore(2, 2, 8);
        addScore(2, 0, 6);
        addScore(0, 2, 6);
        correctscore.push({
            id: `cs_aos_${Date.now()}_${hash % 100}`,
            name: "Tebak Skor: AOS (Skor Lain)",
            probability: 9,
            analysis: "Pertandingan berimbang dengan potensi skor ketat bernilai tinggi.",
            category: "correctscore"
        });
    }

    // --- 5. BABAK PERTAMA (HT) ---
    const probHomeHT = Math.round(probHome * 0.6);
    const probAwayHT = Math.round(probAway * 0.6);
    const probDrawHT = 100 - probHomeHT - probAwayHT;

    halftime.push({
        id: `ht_1x2_1_${Date.now()}_${hash % 100}`,
        name: `HT 1X2: ${home}`,
        probability: probHomeHT,
        analysis: `${home} diprediksi tampil menekan sejak awal untuk unggul di babak pertama.`,
        category: "halftime"
    });
    halftime.push({
        id: `ht_1x2_x_${Date.now()}_${hash % 100}`,
        name: `HT 1X2: Seri (Draw)`,
        probability: probDrawHT,
        analysis: "Bermain hati-hati di paruh pertama, membuat skor HT Seri sangat mungkin terjadi.",
        category: "halftime"
    });
    halftime.push({
        id: `ht_1x2_2_${Date.now()}_${hash % 100}`,
        name: `HT 1X2: ${away}`,
        probability: probAwayHT,
        analysis: `${away} berpeluang mencuri gol dan unggul hingga turun minum.`,
        category: "halftime"
    });

    // HT Handicap
    let htHdpLine = 0.25;
    if (mainHdp === 0.00) htHdpLine = 0.00;
    else if (mainHdp >= 1.00) htHdpLine = 0.50;
    
    const formattedHtHdp = formatAsianLine(htHdpLine);

    if (htHdpLine === 0.00) {
        const pH = 50 + Math.round(diff * 3);
        halftime.push({
            id: `ht_hdp_h_${Date.now()}_${hash % 100}`,
            name: `HT HDP: ${home} 0`,
            probability: pH,
            analysis: "Furan babak pertama lek-lekan (0).",
            category: "halftime"
        });
        halftime.push({
            id: `ht_hdp_a_${Date.now()}_${hash % 100}`,
            name: `HT HDP: ${away} 0`,
            probability: 100 - pH,
            analysis: "Tim tamu diprediksi menahan imbang pertahanan tuan rumah hingga turun minum.",
            category: "halftime"
        });
    } else {
        if (diff >= 0) {
            const pH = 51 + Math.round(diff * 2);
            halftime.push({
                id: `ht_hdp_h_${Date.now()}_${hash % 100}`,
                name: `HT HDP: ${home} -${formattedHtHdp}`,
                probability: pH,
                analysis: `${home} memimpin sebelum jeda babak pertama dengan furan -${formattedHtHdp}.`,
                category: "halftime"
            });
            halftime.push({
                id: `ht_hdp_a_${Date.now()}_${hash % 100}`,
                name: `HT HDP: ${away} +${formattedHtHdp}`,
                probability: 100 - pH,
                analysis: `${away} mendapat furan babak pertama +${formattedHtHdp}, aman jika HT seri.`,
                category: "halftime"
            });
        } else {
            const pA = 51 + Math.round(absDiff * 2);
            halftime.push({
                id: `ht_hdp_h_${Date.now()}_${hash % 100}`,
                name: `HT HDP: ${home} +${formattedHtHdp}`,
                probability: 100 - pA,
                analysis: `Tuan rumah diuntungkan furan HT +${formattedHtHdp}.`,
                category: "halftime"
            });
            halftime.push({
                id: `ht_hdp_a_${Date.now()}_${hash % 100}`,
                name: `HT HDP: ${away} -${formattedHtHdp}`,
                probability: pA,
                analysis: `${away} diunggulkan memimpin babak pertama (furan -${formattedHtHdp}).`,
                category: "halftime"
            });
        }
    }

    // HT Over Under
    const htOuLine = baseGoals > 2.75 ? 1.25 : 1.00;
    const formattedHtOu = formatAsianLine(htOuLine);
    const pHtOver = 44 + (hash % 8);
    
    halftime.push({
        id: `ht_ou_o_${Date.now()}_${hash % 100}`,
        name: `HT O/U: Over ${formattedHtOu}`,
        probability: pHtOver,
        analysis: `Peluang gol cepat di babak pertama.`,
        category: "halftime"
    });
    halftime.push({
        id: `ht_ou_u_${Date.now()}_${hash % 100}`,
        name: `HT O/U: Under ${formattedHtOu}`,
        probability: 100 - pHtOver,
        analysis: "Tempo lambat di awal laga diprediksi menjaga skor minim gol hingga turun minum.",
        category: "halftime"
    });

    // --- 6. KORNER (Corners) ---
    const probOverCorner = 48 + (hash % 10);
    corners.push({
        id: `cr_tot_o_${Date.now()}_${hash % 100}`,
        name: `Total Korner: Over ${baseCorners.toFixed(2)}`,
        probability: probOverCorner,
        analysis: `Kedua tim agresif, diprediksi banyak sepak pojok.`,
        category: "corners"
    });
    corners.push({
        id: `cr_tot_u_${Date.now()}_${hash % 100}`,
        name: `Total Korner: Under ${baseCorners.toFixed(2)}`,
        probability: 100 - probOverCorner,
        analysis: "Tim cenderung menguasai bola di area tengah.",
        category: "corners"
    });

    const pHomeCorner = 52 + (hash % 8) + (diff > 0 ? 4 : -4);
    corners.push({
        id: `cr_team_h_o_${Date.now()}_${hash % 100}`,
        name: `Korner ${home}: Over 4.50`,
        probability: pHomeCorner,
        analysis: `${home} diproyeksikan memicu minimal 5 sepak pojok.`,
        category: "corners"
    });
    corners.push({
        id: `cr_team_h_u_${Date.now()}_${hash % 100}`,
        name: `Korner ${home}: Under 4.50`,
        probability: 100 - pHomeCorner,
        analysis: `Pertahanan lawan mampu menutup ruang sayap ${home}.`,
        category: "corners"
    });

    const pAwayCorner = 52 + (hash % 8) - (diff > 0 ? 4 : -4);
    corners.push({
        id: `cr_team_a_o_${Date.now()}_${hash % 100}`,
        name: `Korner ${away}: Over 4.50`,
        probability: pAwayCorner,
        analysis: `Serangan balik ${away} diprediksi menghasilkan banyak sepak pojok.`,
        category: "corners"
    });
    corners.push({
        id: `cr_team_a_u_${Date.now()}_${hash % 100}`,
        name: `Korner ${away}: Under 4.50`,
        probability: 100 - pAwayCorner,
        analysis: "Dominasi penguasaan bola tuan rumah akan membatasi sayap tim tamu.",
        category: "corners"
    });

    // --- 7. TARUHAN KHUSUS (Specials - continued) ---
    const pBtts = 48 + (hash % 12);
    specials.push({
        id: `sp_btts_y_${Date.now()}_${hash % 100}`,
        name: "BTTS (Kedua Tim Cetak Gol): YA",
        probability: pBtts,
        analysis: "Ketajaman lini depan kedua kubu diprediksi berbuah gol di kedua gawang.",
        category: "specials"
    });
    specials.push({
        id: `sp_btts_n_${Date.now()}_${hash % 100}`,
        name: "BTTS (Kedua Tim Cetak Gol): TIDAK",
        probability: 100 - pBtts,
        analysis: "Salah satu tim diyakini akan kesulitan mencetak gol.",
        category: "specials"
    });

    const pOverCards = 47 + (hash % 10);
    specials.push({
        id: `sp_card_o_${Date.now()}_${hash % 100}`,
        name: `Total Kartu: Over ${baseCards.toFixed(2)}`,
        probability: pOverCards,
        analysis: `Intensitas duel fisik tinggi akan melahirkan banyak peringatan kartu.`,
        category: "specials"
    });
    specials.push({
        id: `sp_card_u_${Date.now()}_${hash % 100}`,
        name: `Total Kartu: Under ${baseCards.toFixed(2)}`,
        probability: 100 - pOverCards,
        analysis: "Kedua tim disiplin, meminimalkan pelanggaran keras.",
        category: "specials"
    });

    const pDC1X = Math.min(95, probHome + Math.round(probDraw * 0.7));
    const pDCX2 = Math.min(95, probAway + Math.round(probDraw * 0.7));
    const pDC12 = Math.min(95, probHome + probAway - 10);
    specials.push({
        id: `sp_dc_1x_${Date.now()}_${hash % 100}`,
        name: "Double Chance: 1X (Home/Draw)",
        probability: pDC1X,
        analysis: `Opsi aman untuk mendukung ${home} tanpa kalah jika hasil seri.`,
        category: "specials"
    });
    specials.push({
        id: `sp_dc_x2_${Date.now()}_${hash % 100}`,
        name: "Double Chance: X2 (Away/Draw)",
        probability: pDCX2,
        analysis: `Materi skuad solid memungkinkan ${away} setidaknya mencuri hasil imbang.`,
        category: "specials"
    });
    specials.push({
        id: `sp_dc_12_${Date.now()}_${hash % 100}`,
        name: "Double Chance: 12 (Home/Away)",
        probability: pDC12,
        analysis: "Permainan terbuka diproyeksikan melahirkan pemenang mutlak (tanpa seri).",
        category: "specials"
    });

    specials.push({
        id: `sp_oe_o_${Date.now()}_${hash % 100}`,
        name: "Total Gol: Ganjil (Odd)",
        probability: 50,
        analysis: "Prediksi kemenangan tipis selisih satu gol (1-0, 2-1) yang menghasilkan jumlah skor ganjil.",
        category: "specials"
    });
    specials.push({
        id: `sp_oe_e_${Date.now()}_${hash % 100}`,
        name: "Total Gol: Genap (Even)",
        probability: 50,
        analysis: "Mengantisipasi laga berakhir seri atau kemenangan selisih genap (2-0).",
        category: "specials"
    });

    const pHomeDnb = Math.round(probHome * 1.2);
    const pAwayDnb = Math.round(probAway * 1.2);
    specials.push({
        id: `sp_dnb_h_${Date.now()}_${hash % 100}`,
        name: `Draw No Bet (DNB): ${home}`,
        probability: Math.max(50, Math.min(92, pHomeDnb)),
        analysis: `Jaminan modal kembali penuh jika hasil seri (DNB).`,
        category: "specials"
    });
    specials.push({
        id: `sp_dnb_a_${Date.now()}_${hash % 100}`,
        name: `Draw No Bet (DNB): ${away}`,
        probability: Math.max(50, Math.min(92, pAwayDnb)),
        analysis: `Dukung tim tamu ${away} dengan pengembalian dana jika laga seri.`,
        category: "specials"
    });

    // Clamp probabilities for all items (except correct score)
    const clampProb = (item) => {
        item.probability = Math.max(30, Math.min(95, item.probability));
    };
    handicap.forEach(clampProb);
    overunder.forEach(clampProb);
    halftime.forEach(clampProb);
    corners.forEach(clampProb);
    specials.forEach(clampProb);

    // Clamp correctscore between 3% and 25%
    correctscore.forEach(item => {
        item.probability = Math.max(3, Math.min(25, item.probability));
    });

    const categoriesList = [
        { name: "handicap", list: handicap },
        { name: "overunder", list: overunder },
        { name: "correctscore", list: correctscore },
        { name: "halftime", list: halftime },
        { name: "corners", list: corners },
        { name: "specials", list: specials }
    ];

    const topPicks = [];
    categoriesList.forEach(cat => {
        if (cat.list.length > 0) {
            let topItem = cat.list[0];
            cat.list.forEach(item => {
                if (item.probability > topItem.probability) {
                    topItem = item;
                }
            });
            topItem.isGoldPick = true;
            topItem.isSuperPick = false;
            topPicks.push(topItem);
        }
    });

    if (topPicks.length > 0) {
        let bestOverall = topPicks[0];
        topPicks.forEach(item => {
            if (item.probability > bestOverall.probability) {
                bestOverall = item;
            }
        });
        bestOverall.isSuperPick = true;
        bestOverall.isGoldPick = false;
    }

    return { handicap, overunder, correctscore, halftime, corners, specials };
}

function translateApiMatches(apiMatches) {
    if (apiProvider === 'apisports') {
        return apiMatches.map((m) => {
            const date = new Date(m.fixture.date);
            const timeText = String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0');
            const statusStr = m.fixture.status.short;
            const isFinished = ["FT", "AET", "PEN"].includes(statusStr);
            const isLive = ["1H", "HT", "2H", "ET", "P", "LIVE"].includes(statusStr);
            
            return {
                id: `api_s_${m.fixture.id}`,
                league: m.league.name,
                homeTeam: m.teams.home.name,
                awayTeam: m.teams.away.name,
                time: timeText,
                status: isFinished ? "FINISHED" : isLive ? "LIVE" : "SCHEDULED",
                isFinished: isFinished,
                isLive: isLive,
                isToday: date.toDateString() === new Date().toDateString(),
                homeScore: m.goals.home,
                awayScore: m.goals.away,
                utcDate: m.fixture.date
            };
        });
    }

    // Default: football-data.org
    return apiMatches.map((m, index) => {
        const home = m.homeTeam.shortName || m.homeTeam.name;
        const away = m.awayTeam.shortName || m.awayTeam.name;
        const leagueName = m.competition ? m.competition.name : "Liga Sepak Bola";
        
        let timeText = formatMatchTime(m.utcDate);
        let statusText = "";
        
        const matchTime = new Date(m.utcDate).getTime();
        const hoursSinceStart = (Date.now() - matchTime) / (1000 * 60 * 60);
        
        // Force API stale matches to finished if they started > 4 hours ago
        if (hoursSinceStart > 4 && ["IN_PLAY", "PAUSED", "EXTRA_TIME", "PENALTY_SHOOTOUT", "LIVE"].includes(m.status)) {
            m.status = "FINISHED";
        }
        
        const isLive = ["IN_PLAY", "PAUSED", "EXTRA_TIME", "PENALTY_SHOOTOUT"].includes(m.status);
        const isPast = hoursSinceStart > 3;

        if (m.status === "IN_PLAY" || m.status === "LIVE") {
            timeText = `LIVE: ${m.score.fullTime.home ?? 0} - ${m.score.fullTime.away ?? 0}`;
            statusText = "LIVE";
        } else if (m.status === "PAUSED") {
            timeText = `HT: ${m.score.fullTime.home ?? 0} - ${m.score.fullTime.away ?? 0}`;
            statusText = "HT";
        } else if (m.status === "FINISHED") {
            timeText = `Selesai: ${m.score.fullTime.home ?? 0} - ${m.score.fullTime.away ?? 0}`;
            statusText = "Selesai";
        } else if (m.status === "POSTPONED") {
            timeText = `Ditunda`;
            statusText = "Ditunda";
        } else if (m.status === "CANCELLED") {
            timeText = `Dibatalkan`;
            statusText = "Dibatalkan";
        } else if (m.status === "ABANDONED") {
            timeText = `Dihentikan`;
            statusText = "Dihentikan";
        } else if (m.status === "SUSPENDED") {
            timeText = `Ditangguhkan`;
            statusText = "Ditangguhkan";
        } else if (m.status === "AWARDED") {
            timeText = `Selesai (Awarded)`;
            statusText = "Selesai";
        } else if (isPast && !isLive) {
            timeText = `Selesai: ${m.score?.fullTime?.home ?? 0} - ${m.score?.fullTime?.away ?? 0}`;
            statusText = "Selesai";
        }

        const isFinished = ["FINISHED", "AWARDED", "ABANDONED", "POSTPONED", "CANCELLED", "SUSPENDED"].includes(m.status) || (isPast && !isLive);
        
        // Pin first 3 UPCOMING API matches as special recommendations
        let isSpecial = false;
        if (!isFinished) {
            if (!apiMatches._specialCount) apiMatches._specialCount = 0;
            if (apiMatches._specialCount < 3) {
                isSpecial = true;
                apiMatches._specialCount++;
            }
        }

        const matchDateObj = new Date(m.utcDate);
        const yyyyMatch = matchDateObj.getFullYear();
        const mmMatch = String(matchDateObj.getMonth() + 1).padStart(2, '0');
        const ddMatch = String(matchDateObj.getDate()).padStart(2, '0');
        const matchIsoDate = `${yyyyMatch}-${mmMatch}-${ddMatch}`;

        const markets = generateAllBetMarkets(home, away);
        const flatTips = [
            ...markets.handicap,
            ...markets.overunder,
            ...markets.correctscore,
            ...markets.halftime,
            ...markets.corners,
            ...markets.specials
        ];

        return {
            id: "api_" + m.id,
            homeTeam: home,
            awayTeam: away,
            league: leagueName,
            time: timeText,
            isoDate: matchIsoDate,
            isSpecial: isSpecial,
            isFinished: isFinished,
            statusText: statusText,
            tips: flatTips
        };
    });
}

function formatMatchTime(utcDateString) {
    try {
        const d = new Date(utcDateString);
        return d.toLocaleString("id-ID", {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    } catch (e) {
        return "Jadwal Pertandingan";
    }
}

function formatHeaderDate(dateStr) {
    try {
        const parts = dateStr.split('-');
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const isSameDate = (d1, d2) => 
            d1.getFullYear() === d2.getFullYear() && 
            d1.getMonth() === d2.getMonth() && 
            d1.getDate() === d2.getDate();

        if (isSameDate(d, today)) {
            return `Hari Ini - ${d.toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' })}`;
        } else if (isSameDate(d, tomorrow)) {
            return `Besok - ${d.toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' })}`;
        } else if (isSameDate(d, yesterday)) {
            return `Kemarin - ${d.toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' })}`;
        }
        
        return d.toLocaleDateString("id-ID", { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    } catch (e) {
        return dateStr;
    }
}

// ==========================================================================
// RENDER RECOMMENDATIONS (MATCHES)
// ==========================================================================
function renderMatchesList(matches) {
    if (!matchesContainer) return;
    
    let displayMatches = matches;
    if (hideFinishedMatches) {
        displayMatches = matches.filter(m => !m.isFinished);
    }
    
    const countBadge = document.getElementById("match-count-badge");
    if (countBadge) {
        countBadge.innerText = `${displayMatches.length} Pertandingan`;
    }
    
    if (displayMatches.length === 0) {
        matchesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <h3>Pertandingan tidak ditemukan</h3>
                <p>Tidak ada pertandingan terjadwal atau aktif dalam filter saat ini.</p>
            </div>
        `;
        return;
    }

    // Group by isoDate
    const groups = {};
    displayMatches.forEach(match => {
        const dateKey = match.isoDate;
        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }
        groups[dateKey].push(match);
    });

    const sortedDates = Object.keys(groups).sort();
    let htmlContent = "";

    sortedDates.forEach(dateStr => {
        const formattedDate = formatHeaderDate(dateStr);
        
        htmlContent += `
            <div class="match-date-group">
                <div class="match-date-header" style="font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem 0.25rem 0.25rem 0.25rem; border-bottom: 1px solid var(--border-color); margin-top: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px; height:14px;">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${formattedDate}</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        `;

        const sortedMatches = groups[dateStr].sort((a, b) => {
            if (a.isSpecial && !b.isSpecial) return -1;
            if (!a.isSpecial && b.isSpecial) return 1;
            return 0;
        });

        htmlContent += sortedMatches.map(match => {
            const specialBadgeHtml = match.isSpecial 
                ? `<span class="special-recommendation-badge" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.65rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.2rem; margin-right: 0.5rem; box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);">★ SPESIAL</span>`
                : '';
            
            const finishedBadgeHtml = match.isFinished
                ? `<span class="finished-match-badge" style="background: rgba(255, 255, 255, 0.08); color: var(--text-muted); padding: 0.15rem 0.4rem; border-radius: var(--radius-sm); font-size: 0.6rem; font-weight: 600; margin-right: 0.5rem;">${match.statusText || 'Selesai'}</span>`
                : '';

            return `
                <div class="match-card ${match.isFinished ? 'finished-card' : ''}" onclick="openMatchDrawer('${match.id}')" style="${match.isFinished ? 'opacity: 0.75;' : ''}">
                    <div class="match-info-main">
                        <div class="league-row">
                            ${specialBadgeHtml}
                            ${finishedBadgeHtml}
                            <span class="sport-icon-tag">SEPAK BOLA</span>
                            <span class="league-name">${match.league}</span>
                        </div>
                        <div class="match-teams">
                            <span class="home-team">${match.homeTeam}</span>
                            <span class="vs-divider">VS</span>
                            <span class="away-team">${match.awayTeam}</span>
                        </div>
                        <div class="match-schedule" style="display: flex; align-items: center; gap: 0.35rem;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px; height:12px; color: var(--text-muted);">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>${match.time}</span>
                        </div>
                    </div>
                    <div class="tips-indicator">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <span>${match.tips.length} Tips</span>
                    </div>
                </div>
            `;
        }).join('');

        htmlContent += `
                </div>
            </div>
        `;
    });

    matchesContainer.innerHTML = htmlContent;
}

// ==========================================================================
// SLIDING DRAWER CONTROL & DETAIL VIEW
// ==========================================================================
window.openMatchDrawer = function(matchId) {
    const matchesSource = apiMode === "live" ? fetchedApiMatches : MATCHES_DATA;
    const match = matchesSource.find(m => m.id === matchId);
    if (!match) return;

    selectedMatch = match;
    
    // Set text headers
    document.getElementById("drawer-match-league").innerText = match.league;
    document.getElementById("drawer-match-home").innerText = match.homeTeam;
    document.getElementById("drawer-match-away").innerText = match.awayTeam;
    document.getElementById("drawer-match-time").innerText = match.time;
    
    // Default tab to crown
    window.switchDrawerTab('tab-crown');
    
    // Set tips list contents for each tab
    const categories = ['crown', 'handicap', 'overunder', 'correctscore', 'halftime', 'corners', 'specials'];
    categories.forEach(cat => {
        let catTips = cat === 'crown' 
            ? match.tips.filter(t => t.isGoldPick || t.isSuperPick) 
            : match.tips.filter(t => t.category === cat);
            
        // Sort tips by probability descending, and tie-break by pick status (Super Pick > Gold Pick)
        catTips.sort((a, b) => {
            if (b.probability !== a.probability) {
                return b.probability - a.probability;
            }
            const scoreA = (a.isSuperPick ? 2 : 0) + (a.isGoldPick ? 1 : 0);
            const scoreB = (b.isSuperPick ? 2 : 0) + (b.isGoldPick ? 1 : 0);
            return scoreB - scoreA;
        });

        const container = document.getElementById(`tab-${cat}`);
        if (container) {
            if (catTips.length === 0) {
                container.innerHTML = `<p class="drawer-subtitle" style="text-align: center; margin-top: 1.5rem; color: var(--text-muted);">Tidak ada pasaran yang aktif.</p>`;
                return;
            }
            
            container.innerHTML = catTips.map((tip, index) => {
                let cardClass = "tip-card";
                let badgeHtml = "";
                let probClass = "prob-medium";
                let barClass = "bar-medium";
                let categoryLabel = "";
                
                if (tip.isSuperPick) {
                    cardClass += " super-pick";
                    badgeHtml = `<span style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.65rem; font-weight: 800; display: inline-flex; align-items: center; gap: 0.2rem; margin-bottom: 0.25rem; box-shadow: 0 0 10px rgba(245, 158, 11, 0.35); font-family: 'Outfit', sans-serif;">🏆 BEST OF THE BEST</span>`;
                    probClass = "prob-high";
                    barClass = "bar-high";
                } else if (tip.isGoldPick) {
                    cardClass += " gold-pick";
                    badgeHtml = `<span style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); color: #f59e0b; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.6rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.2rem; margin-bottom: 0.25rem;">★ TOP PICK</span>`;
                    probClass = "prob-high";
                    barClass = "bar-high";
                } else if (tip.probability >= 70) {
                    probClass = "prob-high";
                    barClass = "bar-high";
                } else if (tip.probability < 45) {
                    barClass = "bar-low";
                }
                
                if (cat === 'crown') {
                    let catName = "";
                    if (tip.category === 'handicap') catName = "Handicap (HDP)";
                    else if (tip.category === 'overunder') catName = "Besar/Kecil (O/U)";
                    else if (tip.category === 'correctscore') catName = "Tebak Skor";
                    else if (tip.category === 'halftime') catName = "Babak Pertama (HT)";
                    else if (tip.category === 'corners') catName = "Korner";
                    else if (tip.category === 'specials') catName = "Taruhan Khusus";
                    categoryLabel = `<div class="crown-category-label">Pasaran: ${catName}</div>`;
                }
                
                const rankNumber = `<div class="tip-rank-number">#${index + 1}</div>`;
                
                return `
                    <div class="${cardClass}" style="position: relative;">
                        ${rankNumber}
                        ${categoryLabel}
                        ${badgeHtml}
                        <div class="tip-header" style="margin-top: 0.25rem;">
                            <span class="tip-title">${tip.name}</span>
                            <span class="probability-tag ${probClass}">Peluang: ${tip.probability}%</span>
                        </div>
                        <div class="prob-bar-container">
                            <div class="prob-bar-fill ${barClass}" style="width: ${tip.probability}%;"></div>
                        </div>
                        <p class="tip-description">${tip.analysis}</p>
                        <button class="confirm-tip-btn" onclick="triggerBetRecording('${tip.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height:16px;">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                            Konfirmasi Taruhan
                        </button>
                    </div>
                `;
            }).join('');
        }
    });
    
    if (detailDrawer) detailDrawer.classList.add("open");
};

window.switchDrawerTab = function(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.drawer-tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });
    
    // Show selected tab content
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.style.display = 'flex';
        activeContent.classList.add('active');
    }
    
    // Update active state on buttons
    const buttons = document.querySelectorAll('.drawer-tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });
};

function closeDrawer() {
    if (detailDrawer) detailDrawer.classList.remove("open");
    selectedMatch = null;
}

// ==========================================================================
// MODAL & BET TRACKER INPUT LOGIC (REKOMENDASI)
// ==========================================================================
window.triggerBetRecording = function(tipId) {
    if (!selectedMatch) return;
    const tip = selectedMatch.tips.find(t => t.id === tipId);
    if (!tip) return;

    selectedTip = tip;
    
    // Simpan data pertandingan aktif ke variabel khusus modal agar tidak hilang saat drawer ditutup
    modalActiveMatch = {
        id: selectedMatch.id,
        league: selectedMatch.league,
        homeTeam: selectedMatch.homeTeam,
        awayTeam: selectedMatch.awayTeam
    };
    
    // Set details inside modal view
    document.getElementById("modal-bet-league").innerText = modalActiveMatch.league;
    document.getElementById("modal-bet-match-name").innerText = `${modalActiveMatch.homeTeam} VS ${modalActiveMatch.awayTeam}`;
    document.getElementById("modal-bet-tip-name").innerText = tip.name;
    
    const probBadge = document.getElementById("modal-bet-probability");
    if (probBadge) {
        probBadge.innerText = `${tip.probability}% Peluang`;
        probBadge.className = "prob-badge " + (tip.probability >= 80 ? "text-emerald" : "text-amber");
    }

    // Reset Form fields
    if (inputOdds) inputOdds.value = "";
    if (inputStake) inputStake.value = "";
    if (estimatedPayoutEl) estimatedPayoutEl.innerText = "Rp 0";
    
    // Auto-focus the odds field
    setTimeout(() => {
        if (inputOdds) inputOdds.focus();
    }, 100);

    // Close the drawer and show the modal
    closeDrawer();
    if (confirmBetModal) confirmBetModal.classList.add("open");
};

function closeModal() {
    if (confirmBetModal) confirmBetModal.classList.remove("open");
    selectedTip = null;
    modalActiveMatch = null;
}

// Dynamic payout calculation (Supporting negative Indo / American odds)
function handlePayoutCalculation() {
    if (!inputOdds || !inputStake || !estimatedPayoutEl) return;
    const odds = parseFloat(inputOdds.value) || 0;
    const cleanStakeVal = inputStake.value.replace(/[^0-9]/g, "");
    const stake = parseFloat(cleanStakeVal) || 0;
    
    const estPayout = calculateEstimatedPayout(stake, odds);
    
    if (estPayout > 0 && stake > 0) {
        estimatedPayoutEl.innerText = formatCurrency(estPayout);
    } else {
        estimatedPayoutEl.innerText = "Rp 0";
    }
}

// ==========================================================================
// MODAL & BET TRACKER INPUT LOGIC (MANUAL / DIARY MANDIRI)
// ==========================================================================
function closeManualModal() {
    if (manualBetModal) manualBetModal.classList.remove("open");
}

function handleManualPayoutCalculation() {
    if (!manualOdds || !manualStake || !manualEstimatedPayoutEl) return;
    const odds = parseFloat(manualOdds.value) || 0;
    const cleanStakeVal = manualStake.value.replace(/[^0-9]/g, "");
    const stake = parseFloat(cleanStakeVal) || 0;
    
    const estPayout = calculateEstimatedPayout(stake, odds);
    
    if (estPayout > 0 && stake > 0) {
        manualEstimatedPayoutEl.innerText = formatCurrency(estPayout);
    } else {
        manualEstimatedPayoutEl.innerText = "Rp 0";
    }
}

// ==========================================================================
// MODAL & BET TRACKER INPUT LOGIC (API SETTINGS)
// ==========================================================================
function closeApiModal() {
    if (apiSettingsModal) apiSettingsModal.classList.remove("open");
}

// ==========================================================================
// EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
    // 1. Search Input
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const matchesSource = apiMode === "live" ? fetchedApiMatches : MATCHES_DATA;
            const filtered = matchesSource.filter(match => {
                const home = (match.homeTeam || "").toLowerCase();
                const away = (match.awayTeam || "").toLowerCase();
                const league = (match.league || "").toLowerCase();
                return home.includes(query) || away.includes(query) || league.includes(query);
            });
            renderMatchesList(filtered);
        });
    }

    // 2. Drawer Close Trigger
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", closeDrawer);
    }
    if (detailDrawer) {
        detailDrawer.addEventListener("click", (e) => {
            if (e.target === detailDrawer) {
                closeDrawer();
            }
        });
    }

    // 3. Confirm Bet Modal Triggers
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (cancelBetBtn) cancelBetBtn.addEventListener("click", closeModal);
    if (confirmBetModal) {
        confirmBetModal.addEventListener("click", (e) => {
            if (e.target === confirmBetModal) {
                closeModal();
            }
        });
    }

    // 4. Input Odds & Stake dynamically calculates payout
    if (inputOdds) {
        inputOdds.addEventListener("input", handlePayoutCalculation);
    }
    if (inputStake) {
        inputStake.addEventListener("input", (e) => {
            let cleanVal = e.target.value.replace(/[^0-9]/g, "");
            if (cleanVal) {
                e.target.value = formatNumberWithSeparator(cleanVal);
            } else {
                e.target.value = "";
            }
            handlePayoutCalculation();
        });
    }

    // 5. Quick Stake Buttons for Recommendation Form
    if (quickStakeButtons) {
        quickStakeButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const val = parseInt(btn.getAttribute("data-value"), 10) || 0;
                if (inputStake) {
                    inputStake.value = formatNumberWithSeparator(val);
                    handlePayoutCalculation();
                }
            });
        });
    }

    // 6. Recommendation Bet Form Submission
    if (betRecordForm) {
        betRecordForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const odds = parseFloat(inputOdds.value);
            const cleanStakeVal = inputStake.value.replace(/[^0-9]/g, "");
            const stake = parseFloat(cleanStakeVal);
            
            if (!modalActiveMatch) {
                showToast("Terjadi kesalahan: Data pertandingan tidak terdeteksi!", "error");
                return;
            }
            if (isNaN(odds) || odds === 0) {
                showToast("Masukkan odds yang valid (tidak boleh 0)!", "error");
                return;
            }
            if (isNaN(stake) || stake <= 0) {
                showToast("Masukkan jumlah taruhan (stake) yang valid!", "error");
                return;
            }

            const newBet = {
                id: "bet_" + Date.now(),
                league: modalActiveMatch.league,
                matchName: `${modalActiveMatch.homeTeam} VS ${modalActiveMatch.awayTeam}`,
                tipName: selectedTip.name,
                probability: selectedTip.probability,
                odds: odds,
                stake: stake,
                potentialPayout: calculateEstimatedPayout(stake, odds),
                status: "pending",
                timestamp: Date.now(),
                isManual: false
            };

            myBets.unshift(newBet);
            saveBets();
            renderTrackedBets(currentFilter);
            closeModal();
            showToast("Taruhan berhasil dicatat ke Diary!", "success");
        });
    }

    // 7. Manual Bet Modal Triggers
    if (closeManualModalBtn) closeManualModalBtn.addEventListener("click", closeManualModal);
    if (cancelManualBetBtn) cancelManualBetBtn.addEventListener("click", closeManualModal);
    if (manualBetModal) {
        manualBetModal.addEventListener("click", (e) => {
            if (e.target === manualBetModal) {
                closeManualModal();
            }
        });
    }

    if (addManualBetBtn) {
        addManualBetBtn.addEventListener("click", () => {
            manualLeague.value = "";
            manualHome.value = "";
            manualAway.value = "";
            manualTip.value = "";
            manualOdds.value = "";
            manualStake.value = "";
            manualEstimatedPayoutEl.innerText = "Rp 0";
            
            manualBetModal.classList.add("open");
            setTimeout(() => {
                if (manualLeague) manualLeague.focus();
            }, 100);
        });
    }

    // 8. Manual Odds & Stake listeners
    if (manualOdds) {
        manualOdds.addEventListener("input", handleManualPayoutCalculation);
    }
    if (manualStake) {
        manualStake.addEventListener("input", (e) => {
            let cleanVal = e.target.value.replace(/[^0-9]/g, "");
            if (cleanVal) {
                e.target.value = formatNumberWithSeparator(cleanVal);
            } else {
                e.target.value = "";
            }
            handleManualPayoutCalculation();
        });
    }

    // 9. Quick Stake Buttons for Manual Form
    if (quickStakeBtnManual) {
        quickStakeBtnManual.forEach(btn => {
            btn.addEventListener("click", () => {
                const val = parseInt(btn.getAttribute("data-value"), 10) || 0;
                if (manualStake) {
                    manualStake.value = formatNumberWithSeparator(val);
                    handleManualPayoutCalculation();
                }
            });
        });
    }

    // 10. Manual Bet Form Submission
    if (manualBetForm) {
        manualBetForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const league = manualLeague.value.trim();
            const home = manualHome.value.trim();
            const away = manualAway.value.trim();
            const tip = manualTip.value.trim();
            const odds = parseFloat(manualOdds.value);
            const cleanStakeVal = manualStake.value.replace(/[^0-9]/g, "");
            const stake = parseFloat(cleanStakeVal);
            
            if (!league || !home || !away || !tip) {
                showToast("Mohon lengkapi semua kolom inputan!", "error");
                return;
            }
            if (isNaN(odds) || odds === 0) {
                showToast("Masukkan odds yang valid (tidak boleh 0)!", "error");
                return;
            }
            if (isNaN(stake) || stake <= 0) {
                showToast("Masukkan jumlah taruhan (stake) yang valid!", "error");
                return;
            }

            const newBet = {
                id: "bet_" + Date.now(),
                league: league,
                matchName: `${home} VS ${away}`,
                tipName: tip,
                probability: null,
                odds: odds,
                stake: stake,
                potentialPayout: calculateEstimatedPayout(stake, odds),
                status: "pending",
                timestamp: Date.now(),
                isManual: true
            };

            myBets.unshift(newBet);
            saveBets();
            renderTrackedBets(currentFilter);
            closeManualModal();
            showToast("Taruhan manual berhasil disimpan di Diary!", "success");
        });
    }

    // 11. Theme Switcher Toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // 12. Filter Buttons (All, Pending, Won, Lost)
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                const filterValue = btn.getAttribute("data-filter");
                renderTrackedBets(filterValue);
            });
        });
    }

    // 13. API Settings Interaction Handlers
    if (apiSettingsBtn) {
        apiSettingsBtn.addEventListener("click", () => {
            if (apiModeSelect) apiModeSelect.value = apiMode;
            if (apiTokenInput) apiTokenInput.value = apiToken;
            
            if (apiTokenContainer) {
                apiTokenContainer.style.display = apiMode === "live" ? "block" : "none";
            }
            
            if (apiSettingsModal) apiSettingsModal.classList.add("open");
        });
    }

    if (closeApiModalBtn) closeApiModalBtn.addEventListener("click", closeApiModal);
    if (cancelApiSettingsBtn) cancelApiSettingsBtn.addEventListener("click", closeApiModal);
    if (apiSettingsModal) {
        apiSettingsModal.addEventListener("click", (e) => {
            if (e.target === apiSettingsModal) {
                closeApiModal();
            }
        });
    }

    if (apiModeSelect) {
        apiModeSelect.addEventListener("change", (e) => {
            if (apiTokenContainer) {
                apiTokenContainer.style.display = e.target.value === "live" ? "block" : "none";
            }
        });
    }

    // 10. API Settings Form Submit
    if (apiSettingsForm) {
        apiSettingsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const selectedMode = document.getElementById("api-mode").value;
            const selectedProvider = document.getElementById("api-provider").value;
            const token = document.getElementById("api-token").value.trim();
            const aTkn = document.getElementById("ai-token").value.trim();

            if (selectedMode === "live" && !token) {
                showToast("Token API diperlukan untuk mode Live!", "error");
                return;
            }

            apiMode = selectedMode;
            apiProvider = selectedProvider;
            apiToken = token;
            aiToken = aTkn;

            localStorage.setItem("bettracker_api_mode", apiMode);
            
            // Sync to Supabase
            saveToSupabase({
                api_provider: apiProvider,
                api_token: apiToken,
                ai_token: aiToken
            });
            
            document.getElementById("api-settings-modal").classList.remove("open");
            showToast("Pengaturan API disimpan. Memuat ulang data...", "success");
            
            sessionStorage.removeItem(API_CACHE_KEY);
            loadMatchData();
            showToast(`Pengaturan API disimpan! Beralih ke mode ${mode === 'live' ? 'LIVE API' : 'DEMO'}.`, "success");
        });
    }

    // ==========================================================================
    // DATE SELECTOR INTERACTION HANDLERS
    // ==========================================================================
    if (dateBtnToday) {
        dateBtnToday.addEventListener("click", () => {
            dateBtnToday.classList.add("active");
            if (dateBtnTomorrow) dateBtnTomorrow.classList.remove("active");
            if (customDateInput) customDateInput.value = "";
            selectedDateFilter = todayStr;
            loadMatchData();
        });
    }

    if (dateBtnTomorrow) {
        dateBtnTomorrow.addEventListener("click", () => {
            dateBtnTomorrow.classList.add("active");
            if (dateBtnToday) dateBtnToday.classList.remove("active");
            if (customDateInput) customDateInput.value = "";
            selectedDateFilter = tomorrowStr;
            loadMatchData();
        });
    }

    if (customDateInput) {
        customDateInput.addEventListener("change", (e) => {
            if (e.target.value) {
                if (dateBtnToday) dateBtnToday.classList.remove("active");
                if (dateBtnTomorrow) dateBtnTomorrow.classList.remove("active");
                selectedDateFilter = e.target.value;
                loadMatchData();
            }
        });
    }
}

// ==========================================================================
// RENDER MY BETS DIARY
// ==========================================================================
function renderTrackedBets(filterStatus) {
    if (!trackedBetsContainer) return;
    
    currentFilter = filterStatus;
    let filteredBets = myBets;
    if (filterStatus !== "all") {
        filteredBets = myBets.filter(bet => bet.status === filterStatus);
    }
    
    if (filteredBets.length === 0) {
        let title = "Belum ada catatan taruhan";
        let sub = "Pilih rekomendasi dari daftar pertandingan sepak bola di samping, atau tambah taruhan manual untuk mulai melacak.";
        
        if (filterStatus === "pending") {
            title = "Tidak ada taruhan aktif";
            sub = "Semua taruhan Anda sudah diselesaikan statusnya (Menang/Kalah).";
        } else if (filterStatus === "won") {
            title = "Belum ada kemenangan";
            sub = "Tandai taruhan aktif Anda yang berhasil sebagai 'Menang' untuk melihat daftarnya di sini.";
        } else if (filterStatus === "lost") {
            title = "Belum ada catatan kalah";
            sub = "Taruhan Anda yang kalah atau rugi akan dikelompokkan di halaman ini.";
        }
        
        trackedBetsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                </div>
                <h3>${title}</h3>
                <p>${sub}</p>
            </div>
        `;
        return;
    }

    trackedBetsContainer.innerHTML = filteredBets.map(bet => {
        let statusText = "Aktif";
        let statusPillClass = "pill-pending";
        if (bet.status === "won") {
            statusText = "Menang";
            statusPillClass = "pill-won";
        } else if (bet.status === "lost") {
            statusText = "Kalah";
            statusPillClass = "pill-lost";
        } else if (bet.status === "void") {
            statusText = "Refund";
            statusPillClass = "pill-void";
        }

        const sourceBadgeHtml = bet.isManual 
            ? `<span class="badge badge-neutral" style="font-size:0.6rem; padding: 0.15rem 0.4rem; margin-top:0; margin-left:0.5rem; text-transform:none;">Catatan Mandiri (Non-Rekomendasi)</span>`
            : `<span class="badge badge-emerald" style="font-size:0.6rem; padding: 0.15rem 0.4rem; margin-top:0; margin-left:0.5rem; text-transform:none; background:rgba(99,102,241,0.15); color:#6366f1; border-color:rgba(99,102,241,0.3)">Rekomendasi Pro</span>`;

        const probText = bet.probability !== null && bet.probability !== undefined
            ? ` <small style="color:var(--text-muted)">(${bet.probability}% sukses)</small>`
            : ` <small style="color:var(--text-muted)">(Manual)</small>`;

        let actionButtonsHtml = "";
        if (bet.status === "pending") {
            actionButtonsHtml = `
                <div class="status-actions">
                    <button class="action-status-btn btn-mark-won" onclick="updateBetStatus('${bet.id}', 'won')">Menang</button>
                    <button class="action-status-btn btn-mark-lost" onclick="updateBetStatus('${bet.id}', 'lost')">Kalah</button>
                    <button class="action-status-btn btn-mark-void" onclick="updateBetStatus('${bet.id}', 'void')">Batal</button>
                </div>
            `;
        } else {
            actionButtonsHtml = `
                <button class="action-status-btn" onclick="updateBetStatus('${bet.id}', 'pending')">Reset Status</button>
            `;
        }

        return `
            <div class="bet-card status-${bet.status}">
                <div class="bet-card-header">
                    <div class="bet-card-title-grp">
                        <span class="bet-card-league" style="display:flex; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                            ${bet.league}
                            ${sourceBadgeHtml}
                        </span>
                        <span class="bet-card-teams">${bet.matchName}</span>
                    </div>
                    <span class="bet-status-pill ${statusPillClass}">${statusText}</span>
                </div>
                <div class="bet-card-body">
                    <div class="bet-tip-row">
                        <span>Pilihan Tip:</span> <strong>${bet.tipName}</strong>${probText}
                    </div>
                    <div class="bet-details-row">
                        <div class="detail-item">
                            <span>Odds Asli</span>
                            <strong>${bet.odds}x</strong>
                        </div>
                        <div class="detail-item">
                            <span>Jumlah Stake</span>
                            <strong>${formatCurrency(bet.stake)}</strong>
                        </div>
                        <div class="detail-item return-item">
                            <span>${bet.status === 'lost' ? 'Rugi/Loss' : 'Pengembalian'}</span>
                            <strong>${bet.status === 'lost' ? formatCurrency(bet.stake) : formatCurrency(bet.potentialPayout)}</strong>
                        </div>
                    </div>
                </div>
                <div class="bet-card-footer">
                    ${actionButtonsHtml}
                    <button class="delete-bet-btn" onclick="deleteBetRecord('${bet.id}')" aria-label="Hapus catatan">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Update Bet Status handler
window.updateBetStatus = function(betId, newStatus) {
    const bet = myBets.find(b => b.id === betId);
    if (!bet) return;

    bet.status = newStatus;
    saveBets();
    renderTrackedBets(currentFilter);
    
    let IndonesianStatus = "aktif";
    if (newStatus === "won") IndonesianStatus = "MENANG 🎉";
    if (newStatus === "lost") IndonesianStatus = "KALAH ❌";
    if (newStatus === "void") IndonesianStatus = "REFUND 🔄";
    
    showToast(`Status taruhan diperbarui menjadi ${IndonesianStatus}!`, newStatus === "won" ? "success" : (newStatus === "lost" ? "error" : "info"));
};

// Delete Bet Record handler
window.deleteBetRecord = function(betId) {
    if (confirm("Apakah Anda yakin ingin menghapus catatan taruhan ini?")) {
        myBets = myBets.filter(b => b.id !== betId);
        saveBets();
        renderTrackedBets(currentFilter);
        showToast("Catatan taruhan telah dihapus.", "info");
    }
};

// ==========================================================================
// STATISTICS & METRICS COMPUTATION
// ==========================================================================
function updateDashboardStats() {
    const totalPLVal = document.getElementById("stat-pl-value");
    const totalPLBadge = document.getElementById("stat-pl-badge");
    const winRateEl = document.getElementById("stat-win-rate");
    const winProgressBar = document.getElementById("stat-win-progress");
    const activeBetsEl = document.getElementById("stat-active-bets");
    const completedBetsEl = document.getElementById("stat-completed-bets");
    const totalStakeEl = document.getElementById("stat-total-stake");
    const totalPayoutEl = document.getElementById("stat-total-payout");
    
    if (!totalPLVal) return;

    let netPL = 0;
    let wonCount = 0;
    let lostCount = 0;
    let activeCount = 0;
    let completedCount = 0;
    let totalInvested = 0;
    let totalEstimatedPayout = 0;

    myBets.forEach(bet => {
        totalInvested += bet.stake;

        if (bet.status === "pending") {
            activeCount++;
            totalEstimatedPayout += bet.potentialPayout;
        } else if (bet.status === "won") {
            completedCount++;
            wonCount++;
            netPL += (bet.potentialPayout - bet.stake);
            totalEstimatedPayout += bet.potentialPayout;
        } else if (bet.status === "lost") {
            completedCount++;
            lostCount++;
            netPL -= bet.stake;
        } else if (bet.status === "void") {
            completedCount++;
            totalEstimatedPayout += bet.stake;
        }
    });

    if (netPL > 0) {
        totalPLVal.innerText = "+" + formatCurrency(netPL);
        totalPLVal.className = "stat-value text-emerald";
        if (totalPLBadge) {
            totalPLBadge.innerText = "Profit";
            totalPLBadge.className = "badge badge-emerald";
        }
    } else if (netPL < 0) {
        totalPLVal.innerText = "-" + formatCurrency(Math.abs(netPL));
        totalPLVal.className = "stat-value text-rose";
        if (totalPLBadge) {
            totalPLBadge.innerText = "Rugi";
            totalPLBadge.className = "badge badge-rose";
        }
    } else {
        totalPLVal.innerText = formatCurrency(0);
        totalPLVal.className = "stat-value text-neutral";
        if (totalPLBadge) {
            totalPLBadge.innerText = "Netral";
            totalPLBadge.className = "badge badge-neutral";
        }
    }

    const settledMatches = wonCount + lostCount;
    const winRate = settledMatches > 0 ? Math.round((wonCount / settledMatches) * 100) : 0;
    
    if (winRateEl) winRateEl.innerText = `${winRate}%`;
    if (winProgressBar) winProgressBar.style.width = `${winRate}%`;

    if (activeBetsEl) activeBetsEl.innerText = activeCount;
    if (completedBetsEl) completedBetsEl.innerText = completedCount;

    if (totalStakeEl) totalStakeEl.innerText = formatCurrency(totalInvested);
    if (totalPayoutEl) totalPayoutEl.innerText = formatCurrency(totalEstimatedPayout);
}

// ==========================================================================
// THEME SWITCHER LOGIC
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem("bettracker_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("bettracker_theme", currentTheme);
    updateThemeIcon(currentTheme);
    showToast(`Mode ${currentTheme === 'light' ? 'Terang' : 'Gelap'} diaktifkan`, "info");
}

function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === "light") {
        themeToggleBtn.innerHTML = `
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    } else {
        themeToggleBtn.innerHTML = `
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </svg>
        `;
    }
}

// ==========================================================================
// EXPORT DATA LOGIC
// ==========================================================================
window.exportBetsToCSV = function() {
    if (myBets.length === 0) {
        showToast("Belum ada data taruhan untuk diekspor!", "error");
        return;
    }

    // Define CSV headers
    const headers = [
        "ID Taruhan",
        "Tanggal Catat",
        "Liga/Kompetisi",
        "Pertandingan",
        "Tips Pilihan",
        "Persentase Sukses",
        "Odds",
        "Stake (Rp)",
        "Estimasi Payout (Rp)",
        "Status",
        "Tipe Taruhan"
    ];

    // Map bets to CSV rows
    const rows = myBets.map(bet => {
        const date = new Date(bet.timestamp).toLocaleString("id-ID");
        const type = bet.isManual ? "Mandiri" : "Rekomendasi";
        const probability = bet.probability ? `${bet.probability}%` : "-";
        
        let statusText = "Aktif";
        if (bet.status === "won") statusText = "Menang";
        else if (bet.status === "lost") statusText = "Kalah";
        else if (bet.status === "void") statusText = "Batal/Refund";

        return [
            bet.id,
            `"${date}"`,
            `"${bet.league.replace(/"/g, '""')}"`,
            `"${bet.matchName.replace(/"/g, '""')}"`,
            `"${bet.tipName.replace(/"/g, '""')}"`,
            probability,
            bet.odds,
            bet.stake,
            bet.potentialPayout,
            statusText,
            type
        ];
    });

    // Combine headers and rows
    const csvContent = [
        headers.join(","),
        ...rows.map(e => e.join(","))
    ].join("\n");

    // Create Blob and trigger download
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `bettracker_diary_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("Data taruhan berhasil diekspor ke CSV!", "success");
};

window.triggerPDFGeneration = function() {
    const scopeRadio = document.querySelector('input[name="print-scope"]:checked');
    const scope = scopeRadio ? scopeRadio.value : "all";
    if (window.exportBetsToPDF) {
        window.exportBetsToPDF(scope);
    }
};

window.exportBetsToPDF = function(scope) {
    const scopeVal = scope || "all";
    const printBets = scopeVal === "active" ? myBets.filter(b => b.status === "pending") : myBets;

    if (printBets.length === 0) {
        showToast(scopeVal === "active" ? "Belum ada taruhan aktif untuk dicetak!" : "Belum ada data taruhan untuk dicetak!", "error");
        return;
    }

    // Compute stats
    let netPL = 0;
    let wonCount = 0;
    let lostCount = 0;
    let activeCount = 0;
    let completedCount = 0;
    let totalInvested = 0;
    let totalEstimatedPayout = 0;

    printBets.forEach(bet => {
        totalInvested += bet.stake;
        if (bet.status === "pending") {
            activeCount++;
            totalEstimatedPayout += bet.potentialPayout;
        } else if (bet.status === "won") {
            completedCount++;
            wonCount++;
            netPL += (bet.potentialPayout - bet.stake);
            totalEstimatedPayout += bet.potentialPayout;
        } else if (bet.status === "lost") {
            completedCount++;
            lostCount++;
            netPL -= bet.stake;
        } else if (bet.status === "void") {
            completedCount++;
            totalEstimatedPayout += bet.stake;
        }
    });

    const winRate = completedCount > 0 ? Math.round((wonCount / completedCount) * 100) : 0;
    const plSign = netPL > 0 ? "+" : "";
    const plClass = netPL > 0 ? "#10b981" : (netPL < 0 ? "#ef4444" : "#6b7280");

    const printWindow = window.open('', '_blank');
    
    // Generate html content
    const generateRowsHtml = () => {
        return printBets.map((bet, index) => {
            const date = new Date(bet.timestamp).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            const time = new Date(bet.timestamp).toLocaleTimeString("id-ID", {
                hour: '2-digit', minute:'2-digit'
            });
            
            let statusBadge = "";
            if (bet.status === "pending") {
                statusBadge = `<span style="background: #fef3c7; color: #d97706; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.7rem; text-transform: uppercase;">Aktif</span>`;
            } else if (bet.status === "won") {
                statusBadge = `<span style="background: #d1fae5; color: #059669; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.7rem; text-transform: uppercase;">Menang</span>`;
            } else if (bet.status === "lost") {
                statusBadge = `<span style="background: #fee2e2; color: #b91c1c; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.7rem; text-transform: uppercase;">Kalah</span>`;
            } else {
                statusBadge = `<span style="background: #f3f4f6; color: #4b5563; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.7rem; text-transform: uppercase;">Refund</span>`;
            }

            const payoutVal = bet.status === "lost" ? 0 : bet.potentialPayout;
            
            // Premium Notes Cell for Active Bets
            let notesCellHtml = "";
            if (scopeVal === "active") {
                const tipLower = bet.tipName.toLowerCase();
                const isCorrectScore = /\b\d+\s*-\s*\d+\b/.test(bet.tipName) || tipLower.includes("tebak skor") || tipLower.includes("aos");
                
                const renderBox = (label) => `
                    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e5e7eb; padding-bottom: 4px; margin-bottom: 4px;">
                        <span style="color: #6b7280; font-weight: 500; font-size: 0.75rem;">${label}:</span>
                        <div style="display: flex; gap: 4px;">
                            <span style="border: 1.5px solid #d1d5db; width: 22px; height: 18px; display: inline-block; border-radius: 3px; background: #fff;"></span>
                            <span style="color: #9ca3af; font-weight: bold; font-size: 0.75rem;">-</span>
                            <span style="border: 1.5px solid #d1d5db; width: 22px; height: 18px; display: inline-block; border-radius: 3px; background: #fff;"></span>
                        </div>
                    </div>
                `;

                if (isCorrectScore) {
                    notesCellHtml = `
                        <td style="padding: 12px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; vertical-align: top; width: 180px;">
                            <div style="display: flex; flex-direction: column;">
                                ${renderBox('Skor Akhir')}
                                <div style="display: flex; justify-content: space-between; margin-top: 6px;">
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #059669; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #059669;border-radius:2px;"></div> WON</span>
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #dc2626; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #dc2626;border-radius:2px;"></div> LOSE</span>
                                </div>
                            </div>
                        </td>
                    `;
                } else if (tipLower.includes("korner") || tipLower.includes("corner")) {
                    notesCellHtml = `
                        <td style="padding: 12px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; vertical-align: top; width: 180px;">
                            <div style="display: flex; flex-direction: column;">
                                ${renderBox('Korner HT')}
                                ${renderBox('Korner FT')}
                                <div style="display: flex; justify-content: space-between; margin-top: 6px;">
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #059669; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #059669;border-radius:2px;"></div> WON</span>
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #dc2626; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #dc2626;border-radius:2px;"></div> LOSE</span>
                                </div>
                            </div>
                        </td>
                    `;
                } else if (tipLower.includes("kartu") || tipLower.includes("card")) {
                    notesCellHtml = `
                        <td style="padding: 12px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; vertical-align: top; width: 180px;">
                            <div style="display: flex; flex-direction: column;">
                                ${renderBox('Kartu HT')}
                                ${renderBox('Kartu FT')}
                                <div style="display: flex; justify-content: space-between; margin-top: 6px;">
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #059669; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #059669;border-radius:2px;"></div> WON</span>
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #dc2626; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #dc2626;border-radius:2px;"></div> LOSE</span>
                                </div>
                            </div>
                        </td>
                    `;
                } else {
                    notesCellHtml = `
                        <td style="padding: 12px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; vertical-align: top; width: 180px;">
                            <div style="display: flex; flex-direction: column;">
                                ${renderBox('Skor HT')}
                                ${renderBox('Skor FT')}
                                <div style="display: flex; justify-content: space-between; margin-top: 6px;">
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #059669; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #059669;border-radius:2px;"></div> WON</span>
                                    <span style="font-size: 0.7rem; display: flex; align-items: center; gap: 4px; color: #dc2626; font-weight: bold;"><div style="width:12px;height:12px;border:2px solid #dc2626;border-radius:2px;"></div> LOSE</span>
                                </div>
                            </div>
                        </td>
                    `;
                }
            }

            return `
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; border-left: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-weight: bold;">${index + 1}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
                        <div style="font-weight: 800; color: #111827; font-size: 0.95rem; margin-bottom: 4px;">${bet.matchName}</div>
                        <div style="display: flex; gap: 6px; align-items: center;">
                            <span style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; font-size: 0.65rem; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${bet.league}</span>
                            <span style="color: #6b7280; font-size: 0.75rem;">${date} ${time}</span>
                        </div>
                    </td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; background: #faf5ff;">
                        <div style="font-weight: 800; color: #4338ca; font-size: 0.95rem;">${bet.tipName}</div>
                        <div style="display: flex; gap: 8px; margin-top: 6px;">
                            <span style="background: #e0e7ff; color: #3730a3; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">Odds: ${bet.odds}</span>
                            ${bet.probability ? `<span style="background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">${bet.probability}%</span>` : ''}
                        </div>
                    </td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
                        <div style="color: #4b5563; font-size: 0.75rem; text-transform: uppercase; font-weight: 600;">Stake</div>
                        <div style="font-weight: 800; color: #111827; font-size: 0.9rem;">Rp ${bet.stake.toLocaleString("id-ID")}</div>
                        <div style="color: #4b5563; font-size: 0.75rem; margin-top: 6px; text-transform: uppercase; font-weight: 600;">Est. Payout</div>
                        <div style="font-weight: 800; color: #10b981; font-size: 0.9rem;">Rp ${bet.potentialPayout.toLocaleString("id-ID")}</div>
                    </td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; ${scopeVal === "active" ? '' : 'border-right: 1px solid #e5e7eb;'} text-align: center;">
                        ${statusBadge}
                    </td>
                    ${notesCellHtml}
                </tr>
            `;
        }).join('');
    };

    const docHtml = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>BetTracker Pro - ${scopeVal === "active" ? "Lembar Pantau Aktif" : "Laporan Riwayat Taruhan"}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@700;800&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    color: #1f2937;
                    margin: 0;
                    padding: 40px;
                    background: #f8fafc;
                }
                .report-container {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 4px solid #4f46e5;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .logo-area {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .logo-icon {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #4f46e5 0%, #a855f7 100%);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                .logo-text h1 {
                    margin: 0;
                    font-size: 26px;
                    font-weight: 800;
                    font-family: 'Outfit', sans-serif;
                    color: #111827;
                    letter-spacing: -0.02em;
                }
                .logo-text h1 span { color: #4f46e5; }
                .logo-text p {
                    margin: 2px 0 0 0;
                    font-size: 11px;
                    color: #6b7280;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 700;
                }
                .report-meta { text-align: right; }
                .report-title {
                    font-size: 22px;
                    font-weight: 800;
                    font-family: 'Outfit', sans-serif;
                    color: #3730a3;
                    text-transform: uppercase;
                    margin: 0 0 4px 0;
                }
                .report-date { font-size: 12px; color: #6b7280; font-weight: 500; }
                
                /* Summary Cards */
                .summary-grid {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 30px;
                }
                .sum-card {
                    flex: 1;
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 15px 20px;
                    border-left: 4px solid #4f46e5;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
                }
                .sum-card-title {
                    font-size: 11px;
                    text-transform: uppercase;
                    color: #64748b;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    margin-bottom: 8px;
                }
                .sum-card-val {
                    font-size: 26px;
                    font-weight: 800;
                    font-family: 'Outfit', sans-serif;
                    color: #0f172a;
                }
                
                /* Table Styles */
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }
                th {
                    background: #f1f5f9;
                    color: #334155;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 14px 12px;
                    text-align: left;
                    border-top: 1px solid #e2e8f0;
                    border-bottom: 2px solid #cbd5e1;
                }
                
                /* Print specific adjustments */
                @media print {
                    body { padding: 0; background: #fff; }
                    .report-container { border: none; padding: 0; box-shadow: none; }
                    .no-print { display: none !important; }
                    @page { margin: 1cm; size: landscape; }
                }
            </style>
        </head>
        <body>
            <div class="no-print" style="margin-bottom: 20px; background: #fffbeb; border: 1px solid #fef08a; padding: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #b45309; font-size: 14px; font-weight: 500;">
                    <strong style="font-weight: 700;">Tips:</strong> Tekan Ctrl+P (Windows) atau Cmd+P (Mac) untuk mencetak. Pastikan setelan orientasi adalah <strong>Landscape</strong>.
                </span>
                <button onclick="window.print()" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Print Sekarang</button>
            </div>

            <div class="report-container">
                <div class="header">
                    <div class="logo-area">
                        <div class="logo-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px;">
                                <path d="M6 12 10 16 18 8"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </div>
                        <div class="logo-text">
                            <h1>BetTracker <span>Pro</span></h1>
                            <p>Professional Football Betting Management</p>
                        </div>
                    </div>
                    <div class="report-meta">
                        <h2 class="report-title">${scopeVal === "active" ? "LEMBAR PANTAU TARUHAN AKTIF" : "LAPORAN RIWAYAT LENGKAP"}</h2>
                        <div class="report-date">Dicetak pada: ${new Date().toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                </div>

                ${scopeVal === "all" ? `
                <div class="summary-grid">
                    <div class="sum-card">
                        <div class="sum-card-title">Total Taruhan Selesai</div>
                        <div class="sum-card-val">${completedCount} <span style="font-size: 14px; color: #64748b; font-weight: 600;">(${wonCount} W / ${lostCount} L)</span></div>
                    </div>
                    <div class="sum-card">
                        <div class="sum-card-title">Win Rate</div>
                        <div class="sum-card-val">${winRate}%</div>
                    </div>
                    <div class="sum-card">
                        <div class="sum-card-title">Total Investasi</div>
                        <div class="sum-card-val">Rp ${totalInvested.toLocaleString("id-ID")}</div>
                    </div>
                    <div class="sum-card">
                        <div class="sum-card-title">Net Profit/Loss</div>
                        <div class="sum-card-val" style="color: ${plClass}">${plSign}Rp ${Math.abs(netPL).toLocaleString("id-ID")}</div>
                    </div>
                </div>
                ` : `
                <div class="summary-grid">
                    <div class="sum-card" style="border-left-color: #f59e0b;">
                        <div class="sum-card-title">Taruhan Aktif Dipantau</div>
                        <div class="sum-card-val" style="color: #d97706;">${activeCount} <span style="font-size: 14px; font-weight: 600; color: #64748b;">Match</span></div>
                    </div>
                    <div class="sum-card" style="border-left-color: #4f46e5;">
                        <div class="sum-card-title">Total Stake Aktif</div>
                        <div class="sum-card-val">Rp ${totalInvested.toLocaleString("id-ID")}</div>
                    </div>
                    <div class="sum-card" style="border-left-color: #10b981;">
                        <div class="sum-card-title">Potensi Return Maksimal</div>
                        <div class="sum-card-val" style="color: #10b981;">Rp ${totalEstimatedPayout.toLocaleString("id-ID")}</div>
                    </div>
                </div>
                `}

                <table>
                    <thead>
                        <tr>
                            <th style="width: 40px; text-align: center; border-left: 1px solid #e2e8f0;">#</th>
                            <th>Pertandingan & Jadwal</th>
                            <th>Pasaran & Pilihan</th>
                            <th style="text-align: right;">Stake & Payout</th>
                            <th style="text-align: center; ${scopeVal === "active" ? '' : 'border-right: 1px solid #e2e8f0;'}">Status</th>
                            ${scopeVal === "active" ? '<th style="width: 180px; border-right: 1px solid #e2e8f0;">Catatan Lembar Pantau</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${generateRowsHtml()}
                    </tbody>
                </table>

                <div style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px; font-weight: 500;">
                    Generated securely by BetTracker Pro &copy; ${new Date().getFullYear()}. Valid for personal analysis and live match tracking.
                </div>
            </div>
            
            <script>
                // Auto trigger print after 1s to allow fonts to load
                setTimeout(() => {
                    // window.print();
                }, 1000);
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(docHtml);
    printWindow.document.close();
    
    // Close modal if exists
    const m = document.getElementById('print-options-modal');
    if (m) m.classList.remove('open');
};

// ==========================================================================
// UTILITY FUNCTIONS (Formatting & Notifications)
// ==========================================================================
function formatCurrency(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

function formatNumberWithSeparator(val) {
    if (!val) return "";
    const cleanVal = val.toString().replace(/[^0-9]/g, "");
    return new Intl.NumberFormat('id-ID').format(cleanVal);
}

function showToast(message, type = "success") {
    if (typeof toastContainer === "undefined" || !toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    
    let icon = "";
    if (type === "success") icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    else if (type === "error") icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    else icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = icon + "<span>" + message + "</span>";
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function calculateEstimatedPayout(stake, odds) {
    if (!stake || isNaN(stake) || isNaN(odds) || odds === 0) return 0;
    
    // Negative odds (Indo Red/Kei)
    if (odds < 0) {
        return stake + (stake / Math.abs(odds));
    }
    
    // Positive odds
    if (odds > 1.15) {
        // Assume Decimal Odds (e.g. 1.85 -> 185,000)
        return stake * odds;
    } else {
        // Assume HK/Indo Black Odds (e.g. 0.85 -> 185,000 or 1.02 -> 202,000)
        return stake + (stake * odds);
    }
}

function refreshApiDataForce() {
    sessionStorage.removeItem(API_CACHE_KEY);
    showToast("Memaksa sinkronisasi dengan API...", "success");
    loadMatchData();
}

// Backup & Restore functions
function exportDataToJSON() {
    if (!myBets || myBets.length === 0) {
        showToast("Tidak ada data taruhan untuk dibackup.", "error");
        return;
    }
    const dataStr = JSON.stringify(myBets, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `bettracker_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast("Data backup berhasil diunduh!", "success");
    document.getElementById('backup-modal').classList.remove('open');
}

function importDataFromJSON() {
    const fileInput = document.getElementById("import-file");
    if (!fileInput.files || fileInput.files.length === 0) {
        showToast("Silakan pilih file .json terlebih dahulu!", "error");
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (!Array.isArray(importedData)) {
                throw new Error("Format data tidak valid.");
            }
            // Merge with existing or replace? Replace to be simple.
            myBets = importedData;
            saveBets();
            renderTrackedBets(currentFilter);
            showToast("Data berhasil dipulihkan!", "success");
            document.getElementById('backup-modal').classList.remove('open');
        } catch (error) {
            console.error(error);
            showToast("Gagal memulihkan data. File mungkin rusak.", "error");
        }
    };
    reader.readAsText(file);
}

// AI Chat & Analysis Logic
function parseMarkdown(text) {
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/^- (.*)$/gm, '<li>$1</li>');
    html = html.replace(/^\* (.*)$/gm, '<li>$1</li>');
    html = html.replace(/<li>.*<\/li>/s, match => `<ul>${match}</ul>`);
    html = html.replace(/\n/g, '<br>');
    return html;
}

function renderChatMessages() {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (aiChatHistory.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: #9ca3af; margin-top: 2rem;">Belum ada riwayat obrolan. Silakan mulai percakapan!</div>`;
        return;
    }

    aiChatHistory.forEach(msg => {
        if (msg.role === 'system') return; // Hide system prompts
        
        const div = document.createElement('div');
        div.className = msg.role === 'user' ? 'user-message' : 'ai-message';
        div.innerHTML = parseMarkdown(msg.content);
        container.appendChild(div);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
    const container = document.getElementById("ai-chat-messages");
    const div = document.createElement('div');
    div.id = 'typing-indicator-bubble';
    div.className = 'typing-indicator';
    div.innerHTML = `<span></span><span></span><span></span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator-bubble');
    if (indicator) indicator.remove();
}

window.sendAiQuickAction = function(text) {
    const input = document.getElementById("ai-chat-input");
    if (input) {
        input.value = text;
        input.focus();
    }
}

document.getElementById('ai-chat-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    const text = input.value.trim();
    if (!text) return;
    
    input.value = '';
    
    // Add user message
    aiChatHistory.push({ role: 'user', content: text });
    saveToSupabase({ ai_chat_history: aiChatHistory });
    renderChatMessages();
    
    await fetchAiResponse();
});

async function fetchAiResponse() {
    if (!aiToken) {
        showToast("Gemini API Key hilang!", "error");
        return;
    }

    showTypingIndicator();
    
    try {
        const response = await fetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AI-Token': aiToken
            },
            body: JSON.stringify({
                history: aiChatHistory
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `HTTP Error ${response.status}`);
        }

        const data = await response.json();
        
        aiChatHistory.push({ role: 'model', content: data.analysis });
        saveToSupabase({ ai_chat_history: aiChatHistory });

    } catch (error) {
        console.error("AI Error:", error);
        aiChatHistory.push({ role: 'model', content: "**ERROR:** " + error.message });
    } finally {
        removeTypingIndicator();
        renderChatMessages();
    }
}

window.openAiChat = function() {
    if (!selectedMatch) return;
    
    if (!aiToken) {
        showToast("Mohon masukkan Gemini API Key di Pengaturan API terlebih dahulu!", "error");
        document.getElementById('api-settings-modal').classList.add('open');
        return;
    }

    // Hanya buka modal chat, jangan auto trigger request
    document.getElementById('detail-drawer').classList.remove('open');
    document.getElementById('ai-chat-modal').classList.add('open');
    
    // System prompt (hide from UI)
    const systemPromptText = `Bertindaklah sebagai Asisten Taruhan Profesional dan Penasihat Keuangan. 
Tugasmu adalah menganalisis pertandingan, merekomendasikan taruhan terbaik (termasuk alternatif jika diminta), dan menyarankan nominal taruhan berdasarkan saldo pengguna (gunakan manajemen bankroll yang ketat, misal 1-5% dari saldo). Jawab dengan singkat, padat, berwibawa, dan gunakan bahasa Indonesia.
Konteks Pertandingan Saat Ini:
${selectedMatch.homeTeam} VS ${selectedMatch.awayTeam}
Liga: ${selectedMatch.league}
Waktu: ${selectedMatch.time}`;

    // Kita tambahkan konteks system prompt jika belum ada obrolan untuk pertandingan ini
    // (Bisa juga dibiarkan numpuk jika mau ingat pertandingan lama)
    aiChatHistory.push({ role: 'system', content: systemPromptText });
    saveToSupabase({ ai_chat_history: aiChatHistory });
    
    renderChatMessages();
}
