// Función para activar el micrófono
function startDictation() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.start();

        recognition.onresult = function(event) {
            const text = event.results[0][0].transcript;
            document.getElementById('chat-input').value = text;
            // Aquí se enviaría el texto a Nyx automáticamente
        };
    } else {
        alert("Tu navegador no soporta dictado por voz. Intenta usar Chrome.");
    }
}

// Conectar el botón con la función
document.getElementById('mic-btn').addEventListener('click', startDictation);
