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
// code for mobile version
const rating = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
rating.position= ratingValue;
rating.style.backgroundColor="gray"
rating.addEventListener('click',function (e) {
  const x = e.pageX - this.offsetLeft;
  const xconvert = x/300;
  var finalx = (xconvert).toFixed(1);
  rating.value = finalx;
  ratingValue.value = finalx*10;
  let ratingScore=ratingValue.value;
  switch (ratingScore){
    case "0" :rating.style.backgroundImage= "linear-gradient(to right, rgba(0,0,0,0) 0%, gray 20%)";
    break;
    case "1" :rating.style.backgroundImage= "linear-gradient(to right, rgb(226, 96, 96) 10%, gray 20%)";
    break;
    case "2" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 10%,rgb(220, 95, 68) 20%, gray 20%";
    break;
    case "3" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 10%, rgb(220, 95, 68) 30%, gray 20%";
    break;
    case "4" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 20%, rgb(220, 95, 68) 30%,rgb(226, 96, 96) 40%, gray 20%";
    break;
    case "5" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 20%, rgb(220, 95, 68) 30%,rgb(226, 96, 96) 40%, rgb(220, 159, 68) 50%, gray 50%";
    break;
    case "6" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, gray 20%";
    break;
    case "7" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, gray 20%";
    break;
    case "8" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, gray 20%";
    break;
    case "9" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, rgb(82, 165, 105) 90%, gray 20%";
    break;
    case "10" :rating.style.backgroundImage="linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, rgb(82, 165, 105) 90%,rgb(59, 133, 84) 100%, gray 20%";
    break;
    default : rating.style.backgroundColor="gray";
    break
  }

});
