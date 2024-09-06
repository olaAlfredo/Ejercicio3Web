function realizarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resul;

    if (operacion === '+') {
        resul = num1 + num2;
    } else if (operacion === '-') {
        resul = num1 - num2;
    } else if (operacion === '*') {
        resul = num1 * num2;
    } else if (operacion === '/') {
        if (num2 !== 0) {
            resul = num1 / num2;
        } else {
            resul = "Error: División por 0";
        }
    }

    document.getElementById("resultado: ").value = resul;
}