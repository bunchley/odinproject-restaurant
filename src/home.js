import { createDiv } from "./global";

const createHomeBody = () => {
  const contentDiv = document.getElementById("content");
  const title = createDiv(contentDiv, "div", "title-container");
  createDiv(title, "div", "leckerli-one-regular", "Red Hat Chicken");
};
export { createHomeBody };
