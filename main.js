// Selecciona los elementos HTML que vamos a manipular
const franjaVerde = document.querySelector('.franja.verde');
const franjaRoja = document.querySelector('.franja.roja');

const sliderVerde = document.getElementById('sliderVerde');
const hexVerdeSpan = document.getElementById('hexVerde');

const sliderRojo = document.getElementById('sliderRojo');
const hexRojoSpan = document.getElementById('hexRojo');

const hexBlancoSpan = document.getElementById('hexBlanco');

// Función para convertir un valor RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Función para actualizar el color verde
function updateColorVerde() {
    const value = parseInt(sliderVerde.value);
    const finalColor = rgbToHex(0, value, 0); 
    franjaVerde.style.backgroundColor = finalColor;
    hexVerdeSpan.textContent = finalColor;
}

// Función para actualizar el color rojo
function updateColorRojo() {
    const value = parseInt(sliderRojo.value);
    const finalColor = rgbToHex(value, 0, 0); 
    franjaRoja.style.backgroundColor = finalColor;
    hexRojoSpan.textContent = finalColor;
}

// Inicializa los valores y colores
franjaVerde.style.backgroundColor = "#006847";
franjaRoja.style.backgroundColor = "#CE1126";
hexBlancoSpan.textContent = "#FFFFFF";

// Agrega los "escuchadores de eventos" para los controles deslizantes
sliderVerde.addEventListener('input', updateColorVerde);
sliderRojo.addEventListener('input', updateColorRojo);