function animation() {
  const emoji = document.getElementById("emoji");
  const btn10 = document.getElementsByClassName("bt10");
  emoji.innerText = String.fromCodePoint(0x1f495, 0x1f60a);
  emoji.classList.add("btn10animation");
}

function clearEmoji() {
  document.getElementById("emoji").innerText = "";
  document.getElementById("emoji").classList.remove("btn10animation");
}

var rating = document.getElementById("rating");
var ratingValue = document.getElementById("ratingValue");
rating.position = ratingValue;
rating.addEventListener("click", function (e) {
  var x = e.pageX - this.offsetLeft;
  console.log(`x=${x}`);
  // var startPosition = document.getElementById("rating").position;
  var xconvert = x / 300;
  var finalx = xconvert.toFixed(1);
  document.getElementById("rating").value = finalx;

  console.log(finalx);
  ratingValue.value = finalx * 10;
});
