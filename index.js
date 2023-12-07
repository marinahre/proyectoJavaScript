function Usuario(usuario, contraseña){
    this.usuario= usuario;
    this.contraseña= contraseña;
}

const BBDD = [];

function pushUser(usuario, contraseña){
    BBDD.push(new Usuario(usuario, contraseña))
}


pushUser("Marina", "asdsa123")
pushUser("Tere", "12345")
pushUser("Inu", "guau")
pushUser("Juan", "aaa111")

const isAuth = JSON.parse(localStorage.getItem("authUser"))
if(isAuth){
    const login = document.querySelector("#login")
    login.innerHTML = `<span class= "span-log">¡Estás loguead@ como ${isAuth.user}!</span>`
}

const inputUsuario = document.querySelector("#usuario")
const inputContra = document.querySelector("#contraseña")
const btnLogin = document.querySelector("#btn-login")
const container = document.querySelector("#contenedor")

const nuevoUser = {
    usuario: '',
    contraseña: ''
}

inputUsuario.addEventListener("input",(e)=>{
    nuevoUser.usuario = e.target.value
})
inputContra.addEventListener("input",(e)=>{
    nuevoUser.contraseña = e.target.value
})

btnLogin.addEventListener("click", (e)=>{
    const findUser = BBDD.find((el)=>{
        return nuevoUser.usuario === el.usuario && nuevoUser.contraseña === el.contraseña
    })
    if(findUser===undefined){
        container.innerHTML = "<p>Nombre de usuario y/o contraseña incorrectos.</p>"
    }else{
        const stringify = JSON.stringify({user: findUser.usuario})
        localStorage.setItem("authUser", stringify)
        const login = document.querySelector("#login")
        login.innerHTML = `<span class= "span-log">¡Estás loguead@ como ${findUser.usuario}!</span>`
    }
})

/* Registro *  no pude lograr que el usuario registrado permanezca en la BBDD :(  *
const botonReg = document.querySelector("#btn-reg")

botonReg.addEventListener("click", ()=>{
    const findUser = BBDD.find((el)=>{
        return nuevoUser.usuario === el.usuario
    })
    if(findUser===undefined){
        BBDD = pushUser(nuevoUser.usuario, nuevoUser.contraseña)
    }else{
        container.innerHTML = "<p>El nombre de usuario ya existe</p>"
    }
})
*/
