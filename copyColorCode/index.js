const generateRgbColr = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const updateColor = () => {
  const color = generateRgbColr();
  const colorBox = document.getElementById("color-box");
  const colorCode = document.getElementById("color-code");
  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;
};

const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
  const colorCode = document.getElementById("color-code");
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = colorCode.innerText;
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Color copy to clipboard");
});
const colorGenerator = document.getElementById("color-generator");
colorGenerator.addEventListener("click", () => {
  updateColor();
});
