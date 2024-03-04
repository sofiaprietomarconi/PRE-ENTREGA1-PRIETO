

for (let i = 0; i < 3; i++) {
    let nombreAlumno = prompt("Ingresa nombre del alumno ")
    let notaTpUno = Number(prompt("Ingresa nota del trabajo practico 1 para " + nombreAlumno))
    let notaTpDos = Number(prompt("Ingresa nota del trabajo practico 2 para " + nombreAlumno))
    let notaParcial = Number(prompt("Ingresa nota parcial para " + nombreAlumno))

    function calcularNota() {
        let notaFinal = (notaTpUno + notaTpDos + notaParcial) / 3
        return notaFinal
    }    

    let notaFinal = calcularNota(notaTpUno, notaTpDos, notaParcial)

    console.log("La nota final de " + nombreAlumno + " es " + notaFinal)

    if (notaFinal >= 7){
        console.log("El alumno" + " " + nombreAlumno + " " + "ha ingresado al certamen con exito")
    } else if (notaFinal == 6) {
        console.log ("El alumno" + " " + nombreAlumno + " " + "debe volver a realizar el examen")
    } else {
        console.log ("El alumno" + " " +  nombreAlumno + " " + "no ha ingresado al certamen")
    }
}


