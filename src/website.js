import loadMenu from "./menu";
import loadContact from "./contact";
import loadAbout from "./about";

function setupElement(type, text) {
    const element = document.createElement(type);
    element.textContent = text;
    return element;
}

function createHeader() {
    const header = document.createElement("header");

    const titleAndNav = document.createElement("div");
    titleAndNav.setAttribute("id", "titleAndNav");
    header.appendChild(titleAndNav);

    const accAndBtn = document.createElement("div");
    accAndBtn.setAttribute("id", "accAndBtn");
    header.appendChild(accAndBtn);

    const titleAndIcon = document.createElement("div");
    titleAndIcon.setAttribute("id", "titleAndIcon");
    titleAndNav.appendChild(titleAndIcon);

    const nav = document.createElement("nav");
    titleAndNav.appendChild(nav);

    const headerImg = document.createElement("img");
    headerImg.setAttribute("src", "img/header-icon.png");
    headerImg.setAttribute("alt", "Header Pizza Icon");
    headerImg.setAttribute("height", "56");
    titleAndIcon.appendChild(headerImg);

    titleAndIcon.appendChild(setupElement("h1", "The Little Pizza Shop"));

    nav.appendChild(setupElement("button", "Menu"));
    nav.appendChild(setupElement("button", "Contact Us"));
    nav.appendChild(setupElement("button", "About"));

    const accBlock = document.createElement("div");
    accBlock.setAttribute("id", "accountBlock");
    accAndBtn.appendChild(accBlock);

    accAndBtn.appendChild(setupElement("button", "Cart"));

    const userImg = document.createElement("img");
    userImg.setAttribute("src", "img/user-icon.png");
    userImg.setAttribute("alt", "User Icon");
    userImg.setAttribute("height", "32");
    accBlock.appendChild(userImg);

    accBlock.appendChild(setupElement("p", "Account"));

    return header;
}

function initBtns() {

}

function createMain() {
    const main = document.createElement("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.appendChild(setupElement("p", "© avshady 2023"));
    return footer;
}

function createBase() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    //initBtns();

    loadMenu();
}

export default createBase;
export { setupElement };