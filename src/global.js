import { createHomeBody } from "./home.js";
import { createMenuBody } from "./menu.js";
import { createAboutBody } from "./about.js";

const createDiv = (appendElement, element, class2Add, text = null) => {
  const div = document.createElement(element);
  div.classList.add(class2Add);
  if (text != null) {
    div.textContent = text;
  }
  appendElement.appendChild(div);
  return div;
};

const clearContent = () => {
  document.getElementById("content").innerHTML = "";
};

const buttonListener = () => {
  const tabs = document.querySelectorAll("button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      clearContent();
      // TODO: need to clear the page before adding new content
      console.log("tab Selected", tab);

      if (tab.textContent === "Home") {
        createHomeBody();
      }
      if (tab.textContent === "Menu") {
        createMenuBody();
      }
      if (tab.textContent === "About") {
        createAboutBody();
      }
    });
  });
};

export { buttonListener };
export { createDiv };
