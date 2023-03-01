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

    const h1 = document.createElement("h1");
    h1.textContent = "The Little Pizza Shop";
    titleAndIcon.appendChild(h1);

    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const aboutBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact Us";
    aboutBtn.textContent = "About";
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    nav.appendChild(aboutBtn);

    const accBlock = document.createElement("div");
    accBlock.setAttribute("id", "accountBlock");
    accAndBtn.appendChild(accBlock);

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Cart";
    accAndBtn.appendChild(cartBtn);

    const userImg = document.createElement("img");
    userImg.setAttribute("src", "img/user-icon.png");
    userImg.setAttribute("alt", "User Icon");
    userImg.setAttribute("height", "32");
    accBlock.appendChild(userImg);

    const accPar = document.createElement("p");
    accPar.textContent = "Account";
    accBlock.appendChild(accPar);

    return header;
}

function createBase() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export default createBase;