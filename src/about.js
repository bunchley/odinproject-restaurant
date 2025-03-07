import { createDiv } from "./global";

const createAboutBody = () => {
  const contentDiv = document.getElementById("content");
  const title = createDiv(contentDiv, "div", "title-container");
  createDiv(title, "div", "leckerli-one-regular", "About Us");
};
export { createAboutBody };
