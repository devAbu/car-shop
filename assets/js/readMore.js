let box = document.getElementById("box");
let isActive = false;
console.log(box.scrollHeight);
box.setAttribute("data", { height: box.offsetHeight });

box.style.height = 0;
document.getElementById("toggle").addEventListener("click", function () {
  slideToggle();
});

function slideToggle() {
  var moreText = document.getElementById("box");
  var btnText = document.getElementById("toggle");
  isActive = !isActive;

  if (isActive) {
    document.documentElement.classList.add("dropdown--is-open");
    box.style.height = box.dataset.height;
    btnText.innerHTML = "Read less";
  } else {
    document.documentElement.classList.remove("dropdown--is-open");
    box.style.height = 0;
    btnText.innerHTML = "Read more";
  }
}
