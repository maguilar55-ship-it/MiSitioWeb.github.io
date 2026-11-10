// Asignamos el evento de clic al botón cuando la página carga
document.getElementById("btnConvertir").addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
    // 1. Obtener los elementos y valores del HTML
    const inputTemp = document.getElementById("temperatura").value;
    const tipoConversion = document.getElementById("tipoConversion").value;
    const divResultado = document.getElementById("resultado");

    // 2. Validación: Verificar si el campo está vacío
    if (inputTemp === "") {
        alert("Por favor, ingresa un valor numérico para la temperatura.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Convertir el valor de entrada a un número tipo float
    const tempOriginal = parseFloat(inputTemp);
    let tempConvertida = 0;
    let textoResultado = "";

    // 3. Identificar el tipo de conversión y aplicar la fórmula correspondiente
    if (tipoConversion === "cToF") {
        // Fórmula: Fahrenheit = (Celsius × 9 / 5) + 32
        tempConvertida = (tempOriginal * 9 / 5) + 32;
        textoResultado = `${tempOriginal.toFixed(2)} °C son equivalentes a ${tempConvertida.toFixed(2)} °F`;
    } else if (tipoConversion === "fToC") {
        // Fórmula: Celsius = (Fahrenheit - 32) × 5 / 9
        tempConvertida = (tempOriginal - 32) * 5 / 9;
        textoResultado = `${tempOriginal.toFixed(2)} °F son equivalentes a ${tempConvertida.toFixed(2)} °C`;
    }

    // 4. Mostrar el resultado en el elemento seleccionado dentro de la página
    divResultado.textContent = textoResultado;
}