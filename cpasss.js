
document.getElementById('numbers').style.visibility = "hidden";
document.getElementById('lowercase').style.visibility = "hidden";
document.getElementById('uppercase').style.visibility = "hidden";
document.getElementById('upper').style.visibility = "hidden";
document.getElementById('num').style.visibility = "hidden";
document.getElementById('symbols').style.visibility = "hidden";
document.getElementById('sym').style.visibility = "hidden";
document.getElementById('lower').style.visibility = "hidden";
document.getElementById('p88').style.visibility = "hidden";
document.getElementById('p8').style.visibility = "hidden";
document.querySelector(".container").style.visibility = "hidden";

document.querySelector(".animated-button").onclick = function o()
{
    document.getElementById('p88').style.visibility = "visible";
    document.getElementById('p8').style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector('.k1').classList.add("active");
    // document.body.style.backgroundImage ="url('kkk.png')";
}
const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn");

const characters = { 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => { 
        if(option.checked) { 
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if(option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `; 
            } else { 
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) { 
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else { 
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword; 
}

const upadatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    upadatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "CHECK"; 
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { 
        copyIcon.innerText = "COPY";
        copyIcon.style.color = "#707070";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);



document.getElementById('numbers').style.visibility = "hidden";
document.getElementById('lowercase').style.visibility = "hidden";
document.getElementById('uppercase').style.visibility = "hidden";
document.getElementById('upper').style.visibility = "hidden";
document.getElementById('num').style.visibility = "hidden";
document.getElementById('symbols').style.visibility = "hidden";
document.getElementById('sym').style.visibility = "hidden";
document.getElementById('lower').style.visibility = "hidden";



document.getElementById('p8').onclick = function i()
{
document.getElementById('numbers').style.visibility = "visible";
document.getElementById('lowercase').style.visibility = "visible";
document.getElementById('uppercase').style.visibility = "visible";
document.getElementById('upper').style.visibility = "visible";
document.getElementById('num').style.visibility = "visible";
document.getElementById('symbols').style.visibility = "visible";
document.getElementById('sym').style.visibility = "visible";
document.getElementById('lower').style.visibility = "visible";
}


document.getElementById('p88').onclick = function i()
{
    document.getElementById('numbers').style.visibility = "hidden";
    document.getElementById('lowercase').style.visibility = "hidden";
    document.getElementById('uppercase').style.visibility = "hidden";
    document.getElementById('upper').style.visibility = "hidden";
    document.getElementById('num').style.visibility = "hidden";
    document.getElementById('symbols').style.visibility = "hidden";
    document.getElementById('sym').style.visibility = "hidden";
    document.getElementById('lower').style.visibility = "hidden";
}


document.getElementById('p7').onclick = function j()
{
    document.getElementById('numbers').style.visibility = "hidden";
    document.getElementById('lowercase').style.visibility = "hidden";
    document.getElementById('uppercase').style.visibility = "hidden";
    document.getElementById('upper').style.visibility = "hidden";
    document.getElementById('num').style.visibility = "hidden";
    document.getElementById('symbols').style.visibility = "hidden";
    document.getElementById('sym').style.visibility = "hidden";
    document.getElementById('lower').style.visibility = "hidden";
    document.getElementById('p88').style.visibility = "hidden";
    document.getElementById('p8').style.visibility = "hidden";
    document.querySelector(".container").style.visibility = "hidden";
    document.querySelector('.k1').classList.remove("active");
    document.querySelector("body").style.background = "black";
}