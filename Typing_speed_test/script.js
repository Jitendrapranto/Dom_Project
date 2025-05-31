const input = document.getElementById("input");
const randomText = document.getElementById("randomText");
const result = document.getElementById("result");
const processStart = () => {
  input.removeAttribute("disabled");
  input.value = "";
  result.textContent = "";
  input.focus();

  fetch("https://dummyjson.com/quotes?limit=3&skip=10")
    .then((res) => res.json())
    .then((data) => showQuote(data));
};
let startTime;
let generatedText;
let wordLength;
const showQuote = (data) => {
  startTime = new Date().getTime();
  const randomIndex = Math.floor(Math.random() * 3);
  generatedText = data.quotes[randomIndex].quote;
  wordLength = generatedText.split(" ").length;
  randomText.textContent = generatedText;
};

input.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    const endTime = new Date().getTime();
    let needTime = endTime - startTime;
    needTime = Math.round(needTime / 1000);
    const wordPerMinute = Math.round((wordLength * 60) / needTime);

    result.textContent = `
       ✔You typed ${wordPerMinute} text per Minute
    `;
  } else {
    result.textContent = "❌Dont match.Try Again";
  }
});
