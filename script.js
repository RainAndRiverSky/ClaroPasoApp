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

// --- LÓGICA DEL CHAT (ENTER KEY) ---
const inputField = document.getElementById("chat-input");
const chatArea = document.getElementById("chat-nyx");

if (inputField) {
    inputField.addEventListener("keydown", async (event) => {
        // Solo actúa si presionas Enter y el cuadro no está vacío
        if (event.key === "Enter" && inputField.value.trim() !== "") {
            const userMessage = inputField.value;
            
            // 1. Limpiar el cuadro de texto
            inputField.value = "";

            // 2. Mostrar tu mensaje en la pantalla
            appendMessage("Usuario", userMessage);

            // 3. Respuesta temporal de Nyx (Simulación)
            setTimeout(() => {
                appendMessage("Nyx", "¡Recibido! Estoy conectando mi cerebro a la base de datos...");
            }, 600);
        }
    });
}

function appendMessage(sender, text) {
    if (!chatArea) return;
    
    const msgDiv = document.createElement("div");
    // Esto usa las clases que deberías tener en tu style.css
    msgDiv.className = sender === "Nyx" ? "message-nyx" : "message-user";
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    
    chatArea.appendChild(msgDiv);
    
    // Auto-scroll hacia abajo para ver el último mensaje
    chatArea.scrollTop = chatArea.scrollHeight;
}

// --- LÓGICA DE LA CÁMARA ---
const cameraBtn = document.getElementById('camera-btn');
const fileInput = document.getElementById('file-input');

if (cameraBtn && fileInput) {
    cameraBtn.addEventListener('click', () => {
        fileInput.click(); // Abre el selector de archivos
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            appendMessage("Usuario", `📎 Imagen seleccionada: ${file.name}`);
            // Aquí es donde Nyx analizará la imagen más adelante
            setTimeout(() => {
                appendMessage("Nyx", "Veo que has subido una imagen. ¿Quieres que la analice?");
            }, 800);
        }
    });
}
