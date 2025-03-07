import { createDiv } from "./global";

const createMenuBody = () => {
  const contentDiv = document.getElementById("content");
  const title = createDiv(contentDiv, "div", "title-container");
  createDiv(title, "div", "leckerli-one-regular", "Menu");
};

export { createMenuBody };
