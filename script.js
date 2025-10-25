function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); 

const welcome = document.getElementById('welcome');
const name = prompt("Comment tu t'appelles ?");
welcome.textContent = `Bienvenue sur mon Portfolio, ${name} !`;
if (!localStorage.getItem('welcomeShown')) {
    const welcome = document.getElementById('welcome');
    const name = prompt("Comment tu t'appelles ?");
    welcome.textContent = `Bienvenue sur mon portfolio, ${name} !`;
    
    setTimeout(() => {
        welcome.style.display = 'none';
    }, 5000);

    localStorage.setItem('welcomeShown', 'true');
}
