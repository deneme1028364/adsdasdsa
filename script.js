// Sidebar açılıp kapanma işlevi
let sidebarOpen = false;

document.getElementById('main-menu').onclick = function() {
    toggleSidebar();
};

function toggleSidebar() {
    if (sidebarOpen) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar').classList.add('closed');
        sidebarOpen = false;
    } else {
        document.getElementById('sidebar').classList.remove('closed');
        document.getElementById('sidebar').classList.add('open');
        sidebarOpen = true;
        document.getElementById('programmer-text').style.display = 'block';
    }
}

// Giriş ekranı 3 saniye sonra kaybolacak
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('name-input').style.display = 'block';
}, 3000);

// Kullanıcı ismini girdikten sonra sohbeti başlatacak
function startChat() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        document.getElementById('name-input').style.display = 'none';
        loadChannels();
    } else {
        alert("Lütfen isminizi girin.");
    }
}

// Kanalları yükleme
function loadChannels() {
    document.getElementById('channels').style.display = 'block';

    document.getElementById('chat-channel').onclick = function() {
        document.getElementById('chat-section').style.display = 'block';
        document.getElementById('anonymous-section').style.display = 'none';
    };

    document.getElementById('anonymous-channel').onclick = function() {
        document.getElementById('anonymous-section').style.display = 'block';
        document.getElementById('chat-section').style.display = 'none';
    };
}