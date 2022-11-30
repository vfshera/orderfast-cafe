const links = document.querySelectorAll(".hash-slide-link");

function resetLinks() {
  links.forEach((link) => link.setAttribute("data-active", "false"));
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    resetLinks();
    const isActive = link.getAttribute("data-active") === "true";
    link.setAttribute("data-active", isActive ? "false" : "true");
  });
});

//

const OrderCard = document.querySelector("#OrderCard");
const search = document.querySelector("#SearchBox");
const citiesContainer = document.querySelectorAll(".city");
const cityBtns = document.querySelectorAll(".CityBtn");
const validCityAreas = document.querySelectorAll(".city-areas");

cityBtns.forEach((cb) => {
  cb.addEventListener("click", () => {
    const isActive = cb.parentElement.getAttribute("data-collapsed") === "true";
    let collapsed = isActive ? "false" : "true";
    cb.parentElement.setAttribute("data-collapsed", collapsed);
  });
});

validCityAreas.forEach((area) => {
  area.addEventListener("click", () => {
    OrderCard.setAttribute("data-tab", "2");
  });
});
search.oninput = (e) => {
  if (e.target.value !== "") {
    citiesContainer.forEach((cty) => {
      cty.classList.add("hidden");

      validCityAreas.forEach((cityArea) => cityArea.classList.add("hidden"));
    });

    validCityAreas.forEach((area) => {
      if (area.getAttribute("data-title").startsWith(e.target.value)) {
        area.classList.remove("hidden");
        area.parentElement.classList.remove("hidden");
        area.parentElement.setAttribute("data-collapsed", "false");
      } else {
        area.parentElement.setAttribute("data-collapsed", "true");
      }
    });
  } else {
    citiesContainer.forEach((cty) => {
      cty.classList.remove("hidden");
      validCityAreas.forEach((cityArea) => cityArea.classList.remove("hidden"));
    });
  }
};
