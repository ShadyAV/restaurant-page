import { setupElement } from "./website";

function createPizza(title, description, price, img) {
    const pizzaBlock = document.createElement("div");
    pizzaBlock.classList.add("pizza-block");

    const pizzaHeader = document.createElement("div");
    pizzaHeader.classList.add("pizza-header");
    pizzaBlock.appendChild(pizzaHeader);

    const pizzaFooter = document.createElement("div");
    pizzaFooter.classList.add("price-and-select");
    pizzaBlock.appendChild(pizzaFooter);

    const pizzaImg = document.createElement("img");
    pizzaImg.setAttribute("src", img);
    pizzaImg.setAttribute("alt", title);
    pizzaHeader.appendChild(pizzaImg);

    pizzaHeader.appendChild(setupElement("h3", title));
    pizzaHeader.appendChild(setupElement("p", description));

    pizzaFooter.appendChild(setupElement("p", price));
    pizzaFooter.appendChild(setupElement("button", "Select"));

    return pizzaBlock;
}

function createMenu() {
    const main = document.getElementById("mainMenu");

    main.appendChild(createPizza("Sea Pizza", "Salmon with shrimps", "20$", "img/sea_pizza.jpg"));
    main.appendChild(createPizza("Mushroom Pizza", "A taste of several types of mushrooms", "12$",
        "img/mushroom_pizza.jpg"));
    main.appendChild(createPizza("Vegetarian Pizza", "A lot of vegetables without any meat", "10$",
        "img/vegetarian_pizza.jpg"));
    main.appendChild(createPizza("Cheese Pizza", "Mix of 4 different types of cheese", "15$",
        "img/cheese_pizza.jpg"));
    main.appendChild(createPizza("Meat Pizza", "Sausages, cheese and tomato sauce", "18$",
        "img/meat_pizza.jpg"));
    main.appendChild(createPizza("Super Meat Pizza", "Meat pizza with vegetables", "20$",
        "img/super_meat_pizza.jpg"));
}

function loadMenu() {
    const main = document.querySelector("main");
    main.setAttribute("id", "");
    main.setAttribute("id", "mainMenu");
    main.textContent = "";
    createMenu();
}

export default loadMenu;