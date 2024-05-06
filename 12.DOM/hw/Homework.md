# ChatBot

1. Crear una estructura HTML básica para el chatbot, incluyendo un contenedor para el chat y un formulario para enviar mensajes.
2. Usar CSS para dar estilo al chatbot, incluyendo el aspecto del contenedor del chat y los mensajes.
3. Usar JavaScript para permitir que el usuario envíe preguntas al chatbot y para que el chatbot responda automáticamente con una respuesta predefinida.
4. Agregar un conjunto de preguntas y respuestas predefinidas para que el chatbot pueda responder a las preguntas del usuario. Estas preguntas y respuestas deben ser escritas dentro del código JavaScript.
5. Agregar una opción para que el usuario pueda cambiar el idioma del chatbot y que las preguntas y respuestas cambien automáticamente.
6. Probar el chatbot y realizar ajustes según sea necesario.

Ejemplo: 

![Captura de pantalla 2023-08-06 214837.png](./img/Captura%20de%20pantalla%202023-08-06%20214837.png)
¡Buena suerte!

const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

const preguntasRespuestas = {
    'es': {
        'Hola': '¡Hola! ¿En qué puedo ayudarte?',
        'Cómo estás': 'Estoy bien, gracias por preguntar.',
        'Adiós': '¡Hasta luego!'
    },
    'en': {
        'Hello': 'Hello! How can I help you?',
        'How are you': 'I\'m fine, thank you for asking.',
        'Goodbye': 'Goodbye! See you later!'
    }
};
const idiomaActual = ´es´;
