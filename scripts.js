const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm () {
form.style.left = "40%"
form.style.transform = "translateX(-50px)"
mascara.style.visibility = "visible"
}

function ocultarForm () {
form.style.left = "-300px"
form.style.transform = "translateX(0)"
mascara.style.visibility ="hidden"
}


