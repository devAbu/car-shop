let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.querySelector(".navbar-include").innerHTML = xhr.responseText;
  }
};
xhr.open("GET", "/templates/navbar.html");
xhr.send();

let xhr_footer = new XMLHttpRequest();
xhr_footer.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.querySelector(".footer-include").innerHTML =
      xhr_footer.responseText;
  }
};
xhr_footer.open("GET", "/templates/footer.html");
xhr_footer.send();

let filter_btn = document.querySelector(".filter-btn");
filter_btn.addEventListener("click", () => {
  let filter_form = document.querySelector(".filter-form");
  let icon = document.querySelector(".filter-btn i");
  let htmlStyles = window.getComputedStyle(document.querySelector("html"));
  let rowNum = parseInt(htmlStyles.getPropertyValue("--rownum"));

  if (rowNum !== 0) {
    document.documentElement.style.setProperty("--rownum", 0);
    icon.classList.add("fa-plus");
    icon.classList.remove("fa-minus");
  } else {
    document.documentElement.style.setProperty("--rownum", 3);
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
});
