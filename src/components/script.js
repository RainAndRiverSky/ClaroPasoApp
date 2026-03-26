// --- LÓGICA DE NAVEGACIÓN Y TÍTULOS ---
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    
    // Usamos 'type' como prioridad, pero mantenemos 'pilar' por si acaso
    const pageType = params.get('type') || params.get('pilar');

    const titles = {
        'memorias': 'Archivo de Memorias',
        'galaxia': 'Exploración Galáctica',
        'ritmos': 'Sintonía de Nyx',
        'visiones': 'Cámara de Visiones',
        'esencia': 'Núcleo de Esencia',
        'noche': 'Manto de la Noche',
        'general': 'Nyx'
    };

    const titleElement = document.getElementById('nyx-title') || document.getElementById('pilar-title');
    
    if (pageType && titles[pageType.toLowerCase()]) {
        const fullTitle = titles[pageType.toLowerCase()];
        if (titleElement) titleElement.innerText = fullTitle;
        document.title = `Nyx | ${fullTitle}`;
    } else if (titleElement) {
        // Si no hay parámetro, ponemos un nombre por defecto
        titleElement.innerText = "Nyx";
    }
});

// --- LÓGICA DE VOZ (MICROFONO) ---
function startDictation() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.start();

        recognition.onresult = function(event) {
            const text = event.results[0][0].transcript;
            const inputField = document.getElementById('chat-input');
            if (inputField) {
                inputField.value = text;
                // Opcional: enviar automáticamente si tienes una función de envío
                // sendMessage(); 
            }
        };
    } else {
        alert("Tu navegador no soporta dictado por voz. Intenta usar Chrome.");
    }
}

// Conectar el botón (asegúrate de que este ID existe en tu HTML)
const micBtn = document.getElementById('mic-btn');
if (micBtn) {
    micBtn.addEventListener('click', startDictation);
}
