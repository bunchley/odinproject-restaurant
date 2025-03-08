import { createDiv } from "./global";

const MenuItems = [];

function createItem(itemName, description, price, image) {
  const contentDiv = document.getElementById("content");
  const itemContainer = createDiv(contentDiv, "div", "item-container");
  createDiv(itemContainer, "h2", "item-title", itemName);
  createDiv(itemContainer, "p", "item-description", description);
  createDiv(itemContainer, "div", "price", price);
  createDiv(itemContainer, "img", "item-image", image);
}

const createMenuBody = () => {
  const goofyRedFont = "leckerli-one-regular";
  const contentDiv = document.getElementById("content");
  const title = createDiv(contentDiv, "div", "title-container");
  createDiv(title, "div", goofyRedFont, "Menu");

  //menu
  const menuContainer = createDiv(contentDiv, "div", "menu-container");
  const menuTitle = createDiv(menuContainer, "div", "menu-title", "Red Hat");
  //   createDiv(menuTitle, "h1", "title", "Red Hat");

  createItem(
    "Hamburger",
    "steal cut beef, fairy grass patty",
    10.99,
    "an image"
  );
};

export { createMenuBody };
