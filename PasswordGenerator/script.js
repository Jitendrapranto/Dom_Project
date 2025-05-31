const showPassword = document.getElementById("showPassword");
const input = document.getElementById("length");
const password =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+{}[]:;|?/<>,.-=";
let length = password.length;

const generatePassword = () => {
  const inputRange = input.value;
  let createPassword = "";
  for (let i = 0; i < inputRange; i++) {
    const randomPosition = Math.floor(Math.random() * length);
    createPassword += password[randomPosition];
  }

  showPassword.textContent = createPassword;
};
