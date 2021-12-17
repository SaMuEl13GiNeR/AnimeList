export {
    renderLogin
};
export {
    logout
};
import {
    renderMenu
} from "./menu.js";
import {
    renderHome
} from "./home.js";
import {
    renderRegistrar
} from "./registre.js";



function renderLogin(container) {
    console.log("renderlogin");
    console.log(container);
    container.innerHTML = `
    <h2>Login:</h2>
    <form id="formLogin">
    <div class='mb-3'>
    <label for='email' class='form-label'>Correo electrónico</label>
    <input type='email' name="email" class='form-control' id='email'>
    </div>
    <div class='mb-3'>
    <label for='password' class='form-label'>Contraseña</label>
    <input type='password' name="password" class='form-control' id='password'>
    </div>
    <span id="logError" style="color:red"></span><br><br>

    <button id="boto" class='btn btn-primary'>Enviar</button>
    <a href="#" role="button" class='btn btn-primary' id="registrar">Registrarse</a>
  </form>`;
    document.querySelector('#registrar').addEventListener('click', renderRegistrar);
    document.querySelector("#boto").addEventListener("click", login);
}


function login(event) {
    event.preventDefault();
    let datosFormData = new FormData(document.querySelector("#formLogin"));
    let objecteFormData = Object.fromEntries(datosFormData);
    objecteFormData.returnSecureToken = true;
    delete objecteFormData.remember;
    let datos = JSON.stringify(objecteFormData);


    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYTWCeDdnPeK3TgrRUQvFwOSafYamulZg", {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: datos,
        }).then((response) => {
            if (response.ok) return response.json();
            // else throw Error(response.statusText);
            else {
                return response.json().then((text) => {
                    console.log(text);
                    // document.querySelector("#logError").innerHTML = error;
                    throw new Error(text.error.message);

                });
            }
        })
        .then((datos) => {
            console.log(datos);
            document.querySelector("#logError").innerHTML = "";
            // container.innerHTML = JSON.stringify(datos);
            document.querySelector("#user").innerHTML = `${datos.email}`;

            localStorage.setItem("localId", datos.localId);
            localStorage.setItem("idToken", datos.idToken);
            localStorage.setItem("email", datos.email);

            console.log(datos);

            renderHome();
        })
        .catch((error) => {
            console.error("Error;", error);
            // container.innerHTML = error;
            document.querySelector("#logError").innerHTML = error;
        });


}

function logout() {
    console.log("logout");
    console.log("Antes -> " + localStorage.getItem("email"));
    document.querySelector("#user").innerHTML = "";
    localStorage.clear();
    console.log("Después -> " + localStorage.getItem("email"))
}