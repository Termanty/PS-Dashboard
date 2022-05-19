let npsScore = undefined;

function animation() {
  npsScore = 10;
  const emoji = document.getElementById("emoji");
  emoji.innerText = String.fromCodePoint(0x1f495, 0x1f60a);
  emoji.classList.add("btn10animation");
}

function clearEmoji(value) {
  npsScore = value;
  document.getElementById("emoji").innerText = "";
  document.getElementById("emoji").classList.remove("btn10animation");
}
// code for mobile version
const rating = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
rating.position = ratingValue;
rating.style.backgroundColor = "gray";
rating.addEventListener("click", function (e) {
  const x = e.pageX - this.offsetLeft;
  const xconvert = x / 300;
  var finalx = xconvert.toFixed(1);
  rating.value = finalx;
  ratingValue.value = finalx * 10;
  let ratingScore = ratingValue.value;
  npsScore = ratingScore;
  switch (ratingScore) {
    case "0":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgba(0,0,0,0) 0%, gray 20%)";
      break;
    case "1":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 10%, gray 20%)";
      break;
    case "2":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 10%,rgb(220, 95, 68) 20%, gray 20%";
      break;
    case "3":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 10%, rgb(220, 95, 68) 30%, gray 20%";
      break;
    case "4":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 20%, rgb(220, 95, 68) 30%,rgb(226, 96, 96) 40%, gray 20%";
      break;
    case "5":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 10%, rgb(220, 95, 68) 20%, rgb(220, 95, 68) 30%,rgb(226, 96, 96) 40%, rgb(220, 159, 68) 50%, gray 50%";
      break;
    case "6":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, gray 20%";
      break;
    case "7":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, gray 20%";
      break;
    case "8":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, gray 20%";
      break;
    case "9":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, rgb(82, 165, 105) 90%, gray 20%";
      break;
    case "10":
      rating.style.backgroundImage =
        "linear-gradient(to right, rgb(226, 96, 96) 9%, rgb(220, 95, 68) 9%, rgb(220, 95, 68) 12%,rgb(226, 96, 96) 10%, rgb(220, 159, 68) 50%, rgb(218, 188, 111) 60%, rgb(183, 193, 122) 70%, rgb(159, 203, 103) 80%, rgb(82, 165, 105) 90%,rgb(59, 133, 84) 100%, gray 20%";
      break;
    default:
      rating.style.backgroundColor = "gray";
      break;
  }
});

// const setCookie = (getName, getValue, expiredAt) => {
//   const currentDate = new Date();
//   currentDate.setTime(currentDate.getTime() + expiredAt * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + currentDate.toUTCString();
//   document.cookie = getName + "=" + getValue + ";" + expires + ";path=/";
// };

// const getCookie = (getName) => {
//   let name = getName + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let cookiesAccess = decodedCookie.split(";");
//   for (let i = 0; i < cookiesAccess.length; i++) {
//     while (cookiesAccess[i].charAt(0) === " ") {
//       cookiesAccess[i] = cookiesAccess[i].substring(1);
//     }
//     if (cookiesAccess[i].indexOf(name) === 0) {
//       return cookiesAccess[i].substring(name.length, cookiesAccess[i].length);
//     }
//   }
//   return "";
// };

// const checkCookie = () => {
//   let userName = getCookie("userName");

//   if (userName !== "") {
//     alert("Welcome again " + userName);
//   } else {
//     userName = prompt(
//       "Please insert your name to accept or cancel to checked our policy :",
//       ""
//     );
//     if (userName !== "" && userName != null) {
//       setCookie("userName", userName, 30);
//     } else {
//       alert(
//         "Click ok to read more about cookies and the GDPR policy in EU",
//         (window.location.href = "https://gdpr.eu/cookies/")
//       );
//     }
//   }
// };
// checkCookie();

document.getElementById("save").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
  if (npsScore === undefined) return;

  const comment = document.getElementById("message").value;
  const url =
    "http://ec2-13-53-206-94.eu-north-1.compute.amazonaws.com/responses";
  // const url = "http://localhost:3001/responses";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      surveyId: "6a3734d0-4499-4dd7-aa06-94a1f8c6f21e",
      score: npsScore,
      comment,
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.querySelector("#thanks_close").addEventListener("click", function () {
  window.close();
});

document.querySelector("#close").addEventListener("click", function () {
  window.open("", "_parent", "");
  window.close();
});
