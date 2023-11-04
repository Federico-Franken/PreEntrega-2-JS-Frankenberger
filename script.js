class Persona {
    constructor (nombre, apellido, usuario, contraseña, edad, mail,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.edad = edad;
        this.mail = mail;
        this.telefono = telefono;
    }
}
const usuarios = []
const clientes = []
let registro = false
let inicio = false
let i = 0

/* INTRODUCCIÓN */

alert("                                              TURNOS WEB 2.0 \n \n         Turnos web es una página especializada en la carga, control y \n                                         siguimentos de turnos.\n\n")

/* REGISTRO E INICIO DE SESIÓN */ 

while (i < 1){
    pregunta1 = prompt("Seleccione una de las siguientes opciones:\n A- Iniciar sesión \n B- Regitrarse \n C- Salir. ")
    switch (pregunta1){
        case "A":
           let usuariorev = prompt ("Ingrese su usuario:")
           let contraseñarev = prompt ("Ingrese su contraseña:")
           existe = usuarios.some((item) => item.usuario === usuariorev)
           existe2 = usuarios.some((item) => item.contraseña === contraseñarev )
           if (existe === true && existe2 === true ){
            alert("Felicitaciones usted a iniciado sesion correctamente!")
            inicio = true
            i++
           }else {
            alert("Usuario o contraseña incorrectos, vuelva a intentar nuevamente!")
           }
           break
        case "B":
            do {
                let nombre
                let apellido
                let usuario
                let contraseña
                nombre = prompt ("Ingrese su nombre:")
                apellido = prompt ("Ingrese su apellido:")
                usuario = prompt ("Ingrese su usuario:")
                contraseña = prompt ("Ingrese su contraseña:")
                usuarios.push(new Persona(nombre, apellido, usuario, contraseña))
                if (nombre != " " && apellido != "" && usuario!="" && contraseña!=" "){
                    alert("Se registro con excito!")
                    registro = true
                }else{
                    alert("Uno o más de los campos del registro no se completo, vuelva a ingresar los datos nuevamente")
                }
            } while(registro== false)
            break
        case "C":
            alert("Gracias por utilizar Turnos Web 2.0")
            i++
            break

        default:
            alert("Letra incorrecta o en minusculas")
            break
    }
}

/* MENU DE TURNOS */

while (inicio === true){
    alert("menu")

}













