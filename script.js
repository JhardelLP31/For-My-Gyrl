const darkness = document.querySelector('.darkness');
const fire = document.querySelector('.fire');
const sobre = document.getElementById('sobre');
const carta = document.getElementById('carta');
const cassette = document.getElementById('cassette');
const audioCassette = document.getElementById('audio-cassette');

let lampLit = false;

document.addEventListener('mousemove', (e) => {
    const fireRect = fire.getBoundingClientRect();
    const fireX = fireRect.left + fireRect.width / 2;
    const fireY = fireRect.top + fireRect.height / 2;
    const dx = e.clientX - fireX;
    const dy = e.clientY - fireY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Encender la vela si el mouse está cerca
    if (!lampLit && distance < 40) {
        lampLit = true;
    }

    const radius = lampLit ? 150 : 0;
    darkness.style.mask = `radial-gradient(circle ${radius}px at ${e.clientX}px ${e.clientY}px, transparent 0%, black 100%)`;
    darkness.style.webkitMask = `radial-gradient(circle ${radius}px at ${e.clientX}px ${e.clientY}px, transparent 0%, black 100%)`;

    // Mostrar sobre y casetera solo si la luz está encendida
    if (lampLit) {
        sobre.style.opacity = '1';
        sobre.style.pointerEvents = 'auto';
        cassette.style.opacity = '1';
        cassette.style.pointerEvents = 'auto';
    } else {
        sobre.style.opacity = '0';
        sobre.style.pointerEvents = 'none';
        cassette.style.opacity = '0';
        cassette.style.pointerEvents = 'none';
    }
});

// Al principio están ocultos
sobre.style.opacity = '0';
sobre.style.pointerEvents = 'none';
cassette.style.opacity = '0';
cassette.style.pointerEvents = 'none';

// Mostrar carta al hacer clic en el sobre
sobre.addEventListener('click', () => {
    sobre.style.display = "none";
    carta.classList.add('show');
    
});

// Reproducir/pausar música al hacer clic en la casetera
cassette.addEventListener('click', () => {
    if (audioCassette.paused) {
        audioCassette.play();
    } 
});

// Quitar introducción después de 3 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('intro').classList.add('fade-out');
    }, 7000);
});