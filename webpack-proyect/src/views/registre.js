export {
    renderRegistrar
};
export {
    registre
};
import {
    renderLogin
} from "./login.js";


function renderRegistrar() {
    container.innerHTML = `
    <h2>Regístrate si eres nuevo:</h2>
    <form id="formRegistre">
    <div class='mb-3'>
    <label for='nombre' class='form-label'>Nombre:</label>
    <input type='text' name="nombre" class='form-control' id='nombre' aria-describedby='nombre'>
   
  </div>
  <div class='mb-3'>
  <label for='apellido' class='form-label'>Apellido:</label>
  <input type='text' name="apellido" class='form-control' id='apellido' aria-describedby='apellido'>
 
</div>
    <div class='mb-3'>
      <label for='email' class='form-label'>Correo electrónico:</label>
      <input type='email' name="email" class='form-control' id='email'>
  
    </div>

    <div class='mb-3'>
      <input id="list" name="list" type="hidden" value="list">
      <label for='exampleInputPassword1' class='form-label'>Contraseña:</label>
      <input type='password' name="password" class='form-control' id='password'>
    </div>
    <div class='mb-3'>
      <label for='exampleInputPassword2' class='form-label'>Comfirmar contraseña:</label>
      <input type='password' name="passwordConfirm" class='form-control' id='passwordConfirm'>
    </div>
    <div class='mb-3'>
        <label for='Rol' class='form-label'>Rol:</label>
        <select class="form-select" name="rol">
            <option value="user" selected>Usuario</option>
            <option value="invitado">Invitado</option> 
            <option value="admin" disabled>Admin</option>
        </select>
    </div>
    <span id="logError" style="color:red"></span><br><br>
    <button id="boto" class='btn btn-primary'>Registrarse</button>
    <a href="#"' class='btn btn-primary' id="login">Login</a>
  </form>`;
    document.querySelector('#login').addEventListener('click', renderLogin);
    document.querySelector("#boto").addEventListener("click", registre);
}

function registre(event) {
    event.preventDefault();
    // console.log(this, document.querySelector("#formRegistre"));
    let datosFormData = new FormData(document.querySelector("#formRegistre"));
    // console.log(datosFormData);
    let objecteFormData = Object.fromEntries(datosFormData);
    objecteFormData.list = {
        anime: "",
        manga: ""

    };
    console.log(objecteFormData);
    objecteFormData.returnSecureToken = true;
    delete objecteFormData.remember;
    let dato = JSON.stringify(objecteFormData);
    console.log(dato);

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYTWCeDdnPeK3TgrRUQvFwOSafYamulZg", {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: dato,
        }).then((response) => {
            if (response.ok) return response.json();
            // else throw Error(response.statusText);
            else {
                return response.json().then((text) => {
                    console.log(text);
                    throw new Error(text.error.message);
                });
            }
        })
        .then((datos) => {
            localStorage.setItem("idToken", datos.idToken);
            localStorage.setItem("localId", datos.localId);

            console.log(datos);
            console.log(datos.localId);



            fetch(`https://animelist-1f43f-default-rtdb.firebaseio.com/Usuarios/${datos.localId}.json`, {
                    method: "put",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    body: dato,
                }).then((response) => {
                    if (response.ok) return response.json();
                    // else throw Error(response.statusText);
                    else {
                        return response.json().then((text) => {
                            console.log(text);
                            throw new Error(text.error.message);
                        });
                    }
                })
                .then((datos) => {
                    document.querySelector("#logError").innerHTML = "";
                    renderLogin(document.querySelector("#container"));
                })
                .catch((error) => {
                    console.error("Error;", error);
                    document.querySelector("#logError").innerHTML = error;
                    // container.innerHTML = error;

                });



            document.querySelector("#logError").innerHTML = "";
            renderLogin();
            // container.innerHTML = JSON.stringify(datos);
            // console.log(datos);
            //renderHome();
        })
        .catch((error) => {
            console.error("Error;", error);
            document.querySelector("#logError").innerHTML = error;
            // container.innerHTML = error;

        });





    // if (datos.email != null && datos.apellido != null && datos.password != null && datos.passwordConfirm != null) {


    // }




}