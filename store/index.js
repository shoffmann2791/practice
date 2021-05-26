import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import { GalleryPictures, AddPicturesToGallery } from "./lib";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.links)}}
  ${Main(st)}
  ${Footer()}
  `;

  addEventListeners();
}
render(state.Home);

// add menu toggle to bars icon in nav bar
function addEventListeners() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  const gallerySection = document.querySelector("#gallery");
  AddPicturesToGallery(GalleryPictures, gallerySection);
}