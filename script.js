class Persona {
    constructor (nombre, apellido, usuario, contraseña, edad, mail,telefono, time){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.edad = edad;
        this.mail = mail;
        this.telefono = telefono;
        this.time= time ;
    }
}
const usuarios = []
const clientes = []
const lunes = []
const martes = []
const miercoles = []
const jueves = []
const viernes = []
const sabado = []
let registro = false
let inicio = false
let carga = false
let i = 0
let x = 0
let y = 0

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
    while (x < 1){
        preguntax = prompt ("                                              TURNOS WEB 2.0 \n \n         1- Ingresar turnos \n \n         2- Anular turnos \n \n         3- Ver turnos \n \n         4- Buscar cliente \n \n         ---------------------------\n \n        5- Cerrar sesión")

        switch (preguntax){
            case "1":
                while (y < 1){
                    dia = prompt ("Selecciones el día del turno: \n \n 1- Lunes \n \n 2- Martes \n \n 3- Miércoles \n \n 4- Jueves \n \n 5- Viernes \n \n 6- Sábado \n \n---------------------------\n \n 7- Volvel al menú" )
                    
                switch (dia){
                    case "1":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                lunes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "2":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                martes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "3":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                miercoles.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "4":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                jueves.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "5":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                viernes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "6":
                        carga = false
                        alert("Por favor ingrese los datos solicitados del cliente")
                        do {
                            let nombre = prompt ("Nombre:")
                            let apellido = prompt ("Apellido:")
                            let edad = prompt ("Edad:")
                            let mail = prompt ("Mail:")
                            let telefono = prompt ("Teléfono:")
                            let hora = prompt ("Hora del turno:")
                            if (nombre && apellido && edad && mail && telefono && hora != " "){
                                clientes.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                sabado.push(new Persona(nombre, apellido, edad, mail, telefono, hora))
                                alert("Datos cargados de manera exitosa ")
                                carga = true
                            }else{
                                alert("Uno o más campos se encuentran incompletos \n \n Ingrese los datos nuevamente!  ")
                            }
                        } while (carga == false) 
                        break
                    case "7":
                        y++
                        break
                    default:
                        alert("Opción ingresada incorrecta vuelva a intentarlo nuevamente.")
                        break
                }
                }
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                alert("¡Sesión cerrada exitosamente! \n \nGracias por utilizar Turnos Web 2.0")
                x++
                break
            default:
                alert("Opción ingresada incorrecta vuelva a intentarlo nuevamente.")
                break
        }
    }

}













