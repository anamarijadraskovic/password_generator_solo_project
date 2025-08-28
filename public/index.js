const lettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtn = document.getElementById("generate-password-btn");
const passwordOutputEl = document.getElementById("password-output");
const passwordLengthEl = document.querySelector("#password-length-input");
const symbolsExcluded = document.querySelector("#no-symbols-checkbox");
const numsExcluded = document.querySelector("#no-nums-checkbox");
const copyBtn = document.getElementById("copy-text-btn");
const changeThemeBtn = document.getElementById("change-theme-btn");
const root = document.documentElement;

generateBtn.addEventListener("click", generatePasswords);

function generatePasswords() {
  let array = generateArray();
  let passwordLength = Number(passwordLengthEl.value);
  passwordOutputEl.value = generateRandomPassword(passwordLength, array);
}

function generateArray() {
  let array = lettersArray;
  if (!numsExcluded.checked) array = array.concat(numsArray);
  if (!symbolsExcluded.checked) array = array.concat(symbolsArray);
  return array;
}

function generateRandomPassword(length, array) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * array.length);
    password += array[randomNum];
  }
  return password;
}

copyBtn.addEventListener("click", copyOnClick);

let copyTimeout;

function copyOnClick() {
  let password = passwordOutputEl.value;
  navigator.clipboard.writeText(password).then(() => {
    copyBtn.textContent = "Copied!";
    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    }, 2000);
  });
}

changeThemeBtn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme"); // back to light
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
