/* function myFunction() {
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
 */
let box = document.getElementById('box');
let isActive = false;
console.log( box.scrollHeight );
box.setAttribute( 'data', { 'height': box.offsetHeight} );

box.style.height = 0;
document.getElementById("toggle").addEventListener('click', function() {
  slideToggle();
});

function slideToggle() {

  var moreText = document.getElementById("box");
  var btnText = document.getElementById("toggle");
    	isActive = !isActive;

			if ( isActive ) {

				document.documentElement.classList.add( 'dropdown--is-open');
        box.style.height = box.dataset.height;
        btnText.innerHTML = "Read less";

        
			} else {

				document.documentElement.classList.remove( 'dropdown--is-open');
        box.style.height = 0;
        btnText.innerHTML = "Read more";


			}
  
}