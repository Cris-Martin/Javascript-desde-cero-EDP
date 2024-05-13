const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const languageSelect = document.getElementById('language-select');
/*
languageSelect.addEventListener('change', function() {
    idiomaActual = languageSelect.value;
});
*/

const preguntasRespuestas = {
    'es': {
        'Hola': '¡Hola! ¿En qué puedo ayudarte?',
        'hola': '¡Hola! ¿En qué puedo ayudarte?',
        'Cómo estás': 'Estoy bien, gracias por preguntar.',
        'como estas':'Estoy bien, gracias por preguntar.',
        'Adiós': '¡Hasta luego!',
        'adios': '¡Hasta luego!',
        'Cuál es tu nombre': 'Soy un chatbot llamado ChatBot.',
        'Qué tiempo hace': 'Para obtener el pronóstico del tiempo, por favor, visita un sitio web de pronósticos meteorológicos.',
        'Qué es el amor': 'El amor es un sentimiento complejo que implica afecto, cariño y conexión emocional hacia otra persona.',
        'Cuál es el sentido de la vida': 'El sentido de la vida es una pregunta filosófica profunda y puede variar según las creencias y valores de cada persona.',
        'En qué consiste la felicidad': 'La felicidad es un estado emocional de bienestar y satisfacción general con la vida.',
        'Dónde vives': 'Soy un chatbot virtual y no tengo una ubicación física.',
        'Cuál es la capital de Francia': 'La capital de Francia es París.'  
    },
    'en': {
        'Hello': 'Hello! How can I help you?',
        'How are you': 'I\'m fine, thank you for asking.',
        'Goodbye': 'Goodbye! See you later!','What\'s your name': 'I\'m a chatbot named ChatBot.',
        'What\'s the weather like': 'To get the weather forecast, please visit a weather forecasting website.',
        'What is love': 'Love is a complex feeling involving affection, care, and emotional connection to another person.',
        'What is the meaning of life': 'The meaning of life is a deep philosophical question and may vary based on each person\'s beliefs and values.',
        'What is happiness': 'Happiness is an emotional state of well-being and overall satisfaction with life.',
        'Where do you live': 'I\'m a virtual chatbot and do not have a physical location.',
        'What is the capital of France': 'The capital of France is Paris.'
    }
};

const idiomaActual = 'es';

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pregunta = userInput.value;
    agregarMensajeUsuario(pregunta);
    const respuesta = obtenerRespuesta(pregunta);
    agregarMensajeChatbot(respuesta);
    userInput.value = '';
});

function agregarMensajeUsuario(mensaje) {
    const mensajeUsuario = document.createElement('div');
    mensajeUsuario.className = 'mensaje-usuario';
    mensajeUsuario.textContent = mensaje;
    chatBox.appendChild(mensajeUsuario);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function agregarMensajeChatbot(mensaje) {
    const mensajeChatbot = document.createElement('div');
    mensajeChatbot.className = 'mensaje-chatbot';
    mensajeChatbot.textContent = mensaje;
    chatBox.appendChild(mensajeChatbot);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function obtenerRespuesta(pregunta) {
    return preguntasRespuestas[idiomaActual][pregunta] || 'Lo siento, no entiendo la pregunta.';
}
