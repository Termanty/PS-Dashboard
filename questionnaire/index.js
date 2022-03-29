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
