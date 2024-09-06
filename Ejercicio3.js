// Función para sumar
function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').value = resultado;
}

// Función para restar
function restar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').value = resultado;
}

// Función para multiplicar
function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').value = resultado;
}

// Función para dividir
function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById('resultado').value = resultado;
    } else {
        document.getElementById('resultado').value = "Error: División por cero";
    }
}
