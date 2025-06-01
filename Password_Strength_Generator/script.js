const passwordElement = document.querySelector(".password");
const strengthElement = document.querySelector(".strength");
const removeClass = document.querySelector(".visually-hidden");
const checkBox = document.getElementById("check-box");
const copyBtn = document.querySelector(".copy-btn");
let strength = 0;
pass = "";
const genratePassword = () => {
  let text =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`!@#$%^&*()_+=-";
  let len = text.length;
  pass = "";
  for (let i = 0; i < 12; i++) {
    let randomNumber = Math.floor(Math.random() * len);
    pass += text[randomNumber];
  }
  removeClass.classList.remove("visually-hidden");
  checkBox.checked = false;
  passwordElement.textContent = pass;
  strength = 0;
  strengthCheck(pass);
};

const strengthCheck = (pass) => {
  if (/[A-B]/.test(pass)) strength++;
  if (/[a-b]/.test(pass)) strength++;
  if (/[0-9]/.test(pass)) strength++;
  if (/[`!@#$%^&*()_+=-]/.test(pass)) strength++;
  const strengthType = ["Medium", "Strong", "Standard", "Very Strong"];
  const level = strengthType[strength - 1] || "Weak";
  strengthElement.innerHTML = `Strength:
  <span id="bgColor" class="text-body p-2 rounded"> ${level}</span>`;
  const bgColor = document.getElementById("bgColor");
  if (strength == 4) {
    bgColor.style.background = "green";
  } else if (strength == 3) {
    bgColor.style.background = "blue";
  } else if (strength == 2) {
    bgColor.style.background = "yellow";
  } else if (strength == 1) {
    bgColor.style.background = "red";
  }
};

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(pass);
  checkBox.checked = true;
});
