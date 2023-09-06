const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

document.querySelector(".number-1-0").style.visibility = "hidden";
document.querySelector("#N2").onclick = function leanggggg()
{
    document.querySelector("#hidd").style.visibility = "hidden";
    document.querySelector(".number-1-0").style.visibility = "visible";
}
//home
document.querySelector(".b-hidden").style.visibility = "hidden";
document.querySelector(".c-hidden").style.visibility = "hidden";
document.querySelector(".d-hidden").style.visibility = "hidden";
document.querySelector(".e-hidden").style.visibility = "hidden";

document.querySelector("#h1").onclick = function leangg()
{
    document.querySelector(".b-hidden").style.visibility = "visible";
    document.querySelector(".c-hidden").style.visibility = "hidden";
    document.querySelector(".d-hidden").style.visibility = "hidden";
    document.querySelector(".e-hidden").style.visibility = "hidden";
}
document.querySelector("#h2").onclick = function leangg()
{
    document.querySelector(".b-hidden").style.visibility = "hidden";
    document.querySelector(".c-hidden").style.visibility = "visible";
    document.querySelector(".d-hidden").style.visibility = "hidden";
    document.querySelector(".e-hidden").style.visibility = "hidden";
}
document.querySelector("#h3").onclick = function leangg()
{
    document.querySelector(".b-hidden").style.visibility = "hidden";
    document.querySelector(".c-hidden").style.visibility = "hidden";
    document.querySelector(".d-hidden").style.visibility = "visible";
    document.querySelector(".e-hidden").style.visibility = "hidden";
}
document.querySelector("#h4").onclick = function leangg()
{
    document.querySelector(".b-hidden").style.visibility = "hidden";
    document.querySelector(".c-hidden").style.visibility = "hidden";
    document.querySelector(".d-hidden").style.visibility = "hidden";
    document.querySelector(".e-hidden").style.visibility = "visible";
}

document.querySelector("#h5").onclick = function leangg()
{
    
    document.querySelector(".number-1-0").style.visibility = "hidden";
    document.querySelector(".b-hidden").style.visibility = "hidden";
    document.querySelector(".c-hidden").style.visibility = "hidden";
    document.querySelector(".d-hidden").style.visibility = "hidden";
    document.querySelector(".e-hidden").style.visibility = "hidden";
    document.querySelector("#hidd").style.visibility = "visible";
}


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 4000)
});


const containerEl = document.querySelector(".container");
const careers = ["GROUP-4️⃣therealoneeee"];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = ` <h1> ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex== careers.length) {
    careerIndex = 0;
  }
   setTimeout(updateText, 400);
}





