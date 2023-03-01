import { setupElement } from "./website";

function createAbout() {
    const main = document.getElementById("mainAbout");

    const article = document.createElement("article");
    article.setAttribute("id", "about");
    main.appendChild(article);

    const chiefImg = document.createElement("img");
    chiefImg.setAttribute("src", "img/chief.jpg");
    chiefImg.setAttribute("alt", "Chief");
    chiefImg.setAttribute("id", "chiefImg");
    main.appendChild(chiefImg);

    const h2 = document.createElement("h2");
    const abbrLPS = document.createElement("abbr");
    abbrLPS.setAttribute("title", "The Little Pizza Shop");
    h2.textContent = "About" + abbrLPS;
    article.appendChild(h2);

    const pWithStrong = document.createElement("p");
    const strongText = document.createElement("strong");
    strongText.textContent = "love of pizza";
    pWithStrong = "LPS was founded in 2023. Our shop was built from a" + strongText
        + "🍕🍕🍕. We hope our shop adds a unique and interesting place to our little town."
    article.appendChild(pWithStrong);
    article.appendChild(setupElement("p", "It is not just about pizza. It's pizza too, but first and foremost it's a great cause that inspires us, makes us wake up every morning and keep working with interest."));
}

function loadAbout() {
    const main = document.querySelector("main");
    main.setAttribute("id", "");
    main.setAttribute("id", "mainAbout");
    main.textContent = "";
    createAbout();
}

export default loadAbout;