import { setupElement } from "./website";

function createAbout() {
    const main = document.createElement("div");
    main.setAttribute("id", "mainAbout");

    const article = document.createElement("article");
    article.setAttribute("id", "about");
    main.appendChild(article);

    const chiefImg = document.createElement("img");
    chiefImg.setAttribute("src", "img/chief.jpg");
    chiefImg.setAttribute("alt", "Chief");
    chiefImg.setAttribute("id", "chiefImg");
    main.appendChild(chiefImg);

    article.appendChild(setupElement("h2", "The Little Pizza Shop"));
    article.appendChild(setupElement("p", "LPS was founded in 2023. Our shop was built from a love of pizza 🍕🍕🍕. We hope our shop adds a unique and interesting place to our little town."));
    article.appendChild(setupElement("p", "It is not just about pizza. It's pizza too, but first and foremost it's a great cause that inspires us, makes us wake up every morning and keep working with interest."));

    return main;
}

function loadAbout() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;