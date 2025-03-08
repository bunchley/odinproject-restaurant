import { createDiv } from "./global";

const createHomeBody = () => {
  const contentDiv = document.getElementById("content");
  const homeBody = createDiv(contentDiv, "div", "home-container");
  const title = createDiv(homeBody, "div", "title-container");
  createDiv(title, "div", "leckerli-one-regular", "Red Hat Chicken");

  const iconContainer = createDiv(homeBody, "div", "icon-container");
  createDiv(iconContainer, "img", "icon");

  const descriptionContainer = createDiv(
    homeBody,
    "div",
    "description-container"
  );
  createDiv(
    descriptionContainer,
    "p",
    "description",
    "Rated Best Chicken shop in Westword.\n\n Order Now."
  );
};
export { createHomeBody };
