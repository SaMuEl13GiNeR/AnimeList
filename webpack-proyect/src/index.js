import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    renderMenu
} from "./views/menu.js";
import {
    renderLogin
} from "./views/login.js";
import {
    logout
} from "./views/login.js";
import {
    renderHome
} from "./views/home.js";
import {
    renderAnimeList
} from "./views/animeList.js";

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        let container = document.querySelector('#container');
        renderMenu();
        renderHome();
        document.querySelector('#home_link').addEventListener('click', renderHome);
        document.querySelector('#login_link').addEventListener('click', () => renderLogin(container));
        document.querySelector('#logout_link').addEventListener('click', logout);
        document.querySelector('#listaAnime_link').addEventListener('click', renderAnimeList);
    });
})();