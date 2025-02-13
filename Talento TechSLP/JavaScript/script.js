/*
function operar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var op = document.getElementById("operacion").value

    if (op =="suma"){
        alert(`La suma de los numeros es: ${(num1+num2)}`)
    }

    if (op =="resta"){
        alert(`La resta de los numeros es: ${(num1-num2)}`)
    }

    if (op =="dividir"){
        alert(`La resta de los numeros es: ${(num1/num2)}`)
    }
}   
*/
function operar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var eleccion = document.getElementById("operacion").value;
    

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = `<b style="color: crimson;"> los campos estan vacios </b>`;
        return;
    }
    switch (eleccion) {
        case "suma":
            resultado.innerHTML = `el resultado de la suma es: ${num1 + num2}`;
            break;
        case "resta":
            resultado.innerHTML = `el resultado de la resta es: ${num1 - num2}`;
            break;
        case "multiplicar":
            resultado.innerHTML = `el resultado de la multiplicacion es: ${num1 * num2}`;
            break;
        case "division":
            if (num2 === 0){
                resultado.innerHTML = `no se puede dividir por 0`;
            } else {
                resultado.innerHTML = `el resultado de la division es: ${num1 / num2}`;
            }
            break;
        default:
            resultado.innerHTML = `<b style="color: crimson;"> Seleccione la operacion </b>`;
    }
}