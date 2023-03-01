import { setupElement } from "./website";

function createContact() {
    const main = document.getElementById("mainContactUs");

    const firstSection = document.createElement("section");
    main.appendChild(firstSection);

    const secondSection = document.createElement("section");
    main.appendChild(secondSection);

    firstSection.appendChild(setupElement("h2", "Our Location"));

    const address = document.createElement("address");
    const telLink = document.createElement("a");
    telLink.setAttribute("href", "tel:+5555555555");
    telLink.textContent = "555-555-5555";
    address.textContent = "555 Pizza Temptation Lane, Suite T" + document.createElement("br")
        + "Kansas City, MO 55555-5555" + document.createElement("br") + document.createElement("br")
        + "Phone:" + telLink;
    firstSection.appendChild(address);

    secondSection.appendChild(setupElement("h2", "We would be happy to see you!"));

    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", "img/pizza_shop.jpg");
    contactImg.setAttribute("alt", "Pizza Shop");
    contactImg.setAttribute("id", "pizzaShopImg");
    secondSection.appendChild(contactImg);
}

function loadContact() {
    const main = document.querySelector("main");
    main.setAttribute("id", "");
    main.setAttribute("id", "mainContactUs");
    main.textContent = "";
    createContact();
}

export default loadContact;