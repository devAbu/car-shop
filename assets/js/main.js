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

new Glider(document.querySelector(".glider"), {
  slidesToShow: 3,
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
