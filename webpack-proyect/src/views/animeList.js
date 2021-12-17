export {
    getAnimesUser
};
export {
    renderAnimeList
};
export {
    anadirList
};
import {
    renderLogin
} from "./login.js";



async function getAnimesUser() {
    // let user = document.querySelector("#user");
    if (localStorage.getItem("email") == null || localStorage.getItem("email") == "") {


        renderLogin(document.querySelector("#container"));
        console.log("no login");
        document.querySelector("#logError").innerHTML = "Inicia sesión para ver tus listas.";
        return Promise.reject();

    } else {


        console.log(localStorage.getItem("email"));
        console.log("si login");
        let response = await fetch(
            "https://animelist-1f43f-default-rtdb.firebaseio.com/Usuarios/" + localStorage.getItem("localId") + "/list/anime.json"
            // "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
        );
        let data = await response.json();
        return data;
    }
}






function renderAnimeList() {
    // let arrayAnimes = [];
    // let objectAnimes = {};
    getAnimesUser().then((animes) => {
        // console.log(animes);
        // for (let i of animes.results) {
        //     // console.log(i.title);
        //     arrayAnimes.push(i);
        //     // console.log(arrayAnimes);
        //     objectAnimes[i.mal_id] = i;

        // }

        // console.log(arrayAnimes);

        let tdsAnimes = ``;
        // for (let i in arrayAnimes) {
        for (let i in animes) {
            tdsAnimes +=
                `<tr>
                <td>` + animes[i].rated + `</td>
                <td>` + i + `</td>
                <td><a href="` + animes[i].url + `"><img src="` + animes[i].image_url + `" width="100" class="img-thumbnail" alt="Responsive image"></a></td>
                <td>` + animes[i].title + `</td>
                <td>` + animes[i].score + `</td>
                <td>` + animes[i].episodes + `</td>
            </tr>`;
        }
        // console.log(tdsAnimes);


        container.innerHTML = `        <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" href="#">Todos los Animes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Viendo</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Completados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">En pausa</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Abandonados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Plan para ver</a>
        </li>
    </ul>

    <div>
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Puntuacion</th>
                    <th scope="col">Progreso</th>
                </tr>
            </thead>
            <tbody id="json">
            ` + tdsAnimes + `
            </tbody>
        </table>
        <!-- <div>
             
         </div> -->
    </div>`;
    });

    // ${JSON.stringify(objectAnimes)}

}


function anadirList(event) {

    console.log(this);


    // event.preventDefault();
    // let datosFormData = new FormData(document.querySelector("#formLogin"));
    // let objecteFormData = Object.fromEntries(datosFormData);
    // objecteFormData.returnSecureToken = true;
    // delete objecteFormData.remember;
    // let datos = JSON.stringify(objecteFormData);


    // fetch("https://animelist-1f43f-default-rtdb.firebaseio.com/Usuarios/" + localStorage.getItem("localId") + "/list/anime.json", {
    //         method: "put",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //         body: datos,
    //     }).then((response) => {
    //         if (response.ok) return response.json();
    //         // else throw Error(response.statusText);
    //         else {
    //             return response.json().then((text) => {
    //                 console.log(text);
    //                 // document.querySelector("#logError").innerHTML = error;
    //                 throw new Error(text.error.message);

    //             });
    //         }
    //     })
    //     .then((datos) => {
    //         renderAnimeList();
    //     })
    //     .catch((error) => {
    //         console.error("Error;", error);
    //         // container.innerHTML = error;
    //     });
}