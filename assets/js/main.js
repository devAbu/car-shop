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
  if (filter_form.style.maxHeight) {
    filter_form.style.maxHeight = null;
    icon.classList.remove("fa-sort-up");
    icon.classList.add("fa-sort-down");
    filter_form.style.marginTop = "0";
  } else {
    filter_form.style.maxHeight = filter_form.scrollHeight + "px";
    icon.classList.add("fa-sort-up");
    icon.classList.remove("fa-sort-down");
    filter_form.style.marginTop = "2em";
  }
}); 
