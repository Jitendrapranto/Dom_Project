const input = document.getElementById("input");
let li;
addButton.addEventListener("click", () => {
  let inputValue = input.value.trim();
  if (inputValue == "") {
    alert("Please add a Task");
  } else {
    const taskList = document.getElementById("taskList");
    li = document.createElement("li");
    li.className = "d-flex justify-content-between align-items-center mt-4";

    li.innerHTML = `
      <label>
        <input type="checkbox" class="form-check-input me-2">
        <span class="text-white">${inputValue}</span>
      </label>
      <button onclick="deleteTask(this)" id="deleteTask" class="btn btn-sm btn-danger ">Delete</button>
    `;
    taskList.appendChild(li);
    input.value = "";
  }
});

const deleteTask = (btn) => {
  const li = btn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
};

const deletechecked = () => {
  const taskList = document.getElementById("taskList");
  const checkBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkBoxes.forEach((checkBox) => {
    const li = checkBox.closest("li");
    li.remove();
  });
};
