function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "inline") {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
