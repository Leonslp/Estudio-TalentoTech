function info() {
    alert('Bienvenido 👈(ﾟヮﾟ👈)')
}

//Crear funcionalidad para desaparecer el formulario

function ver(id) {
    //Metodo
    document.getElementById(id).style.display = "block"
}

function cerrar(id) {
    document.getElementById(id).style.display = "none"
}

//Crear funcion para visualizar el boton Arriba
let up = document.querySelector('#arriba')

window.addEventListener('scroll', btn_arriba)

function btn_arriba() {
    if (window.scrollY > 200){
        console.log('Estas ubicado por encima de los 200px');
    arriba.classList.add('activar');
    } else {
        arriba.classList.remove('activar')
    }
}
