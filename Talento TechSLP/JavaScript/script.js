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