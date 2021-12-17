export {
    renderHome
};
import {
    anadirList
} from './animeList.js';
import {
    logout
} from './login.js';



function renderHome() {
    // container.innerHTML = `<p>HOME DE LA PÀGINA PRINCIPAL</p>`;

    getAnimes().then((animes) => {
        let tdsAnimes = ``;
        for (let i in animes) {
            tdsAnimes +=
                `<tr>
                <td>` + animes[i].rated + `</td>
                <td id="num">` + i + `</td>
                <td><a href="` + animes[i].url + `"><img src="` + animes[i].image_url + `" width="100" class="img-thumbnail" alt="Responsive image"></a></td>
                <td>` + animes[i].title + `</td>
                <td>` + animes[i].score + `</td>
                <td>` + animes[i].episodes + `</td>
                <td> <input type="button" id="` + i + `" name="` + i + `" value="Añadir" onclick="a(` + i + `)"></td>
            </tr>`;
        }

        container.innerHTML = `        
    <div>
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Recomendado</th>
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Puntuacion</th>
                    <th scope="col">Progreso</th>
                    <th scope="col">En tu lista</th>
                </tr>
            </thead>
            <tbody id="json">
            ` + tdsAnimes + `
            </tbody>
        </table>
    </div>`;





    });
}

async function getAnimes() {
    let response = await fetch(
        "https://animelist-1f43f-default-rtdb.firebaseio.com/Animes.json"
        // "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
    );
    let data = await response.json();
    return data;
}