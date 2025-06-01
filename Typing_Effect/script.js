const showText = document.getElementById("show-text");
let text = "Welcome to our Website!";

let isDeleting = false;
let index = 1;
let delay = 100;
const animateText = () => {
  if (!isDeleting && index <= text.length) {
    showText.textContent = text.substring(0, index);
    index++;
  } else if (isDeleting && index >= 0) {
    index--;
    showText.textContent = text.substring(0, index);
  }

  if (index > text.length) {
    isDeleting = true;
    delay = 1000;
  }

  if (index < 0) {
    isDeleting = false;
    index = 1;
    delay = 500;
  } else {
    delay = 100;
  }

  setTimeout(animateText, delay);
};

animateText();
