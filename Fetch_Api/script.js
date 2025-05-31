const container = document.getElementById("container");

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayData(data.slice(0, 9))); // show only 9 for demo
};

const displayData = (data) => {
  for (let i = 0; i < data.length; i++) {
    const photo = data[i];
    const div = document.createElement("div");

    // Each card takes 4 columns (12 / 4 = 3 cards per row)
    div.className = "col-md-4 mb-4";

    div.innerHTML = `
          <div class="card bg-secondary text-white h-100">
            <img src="${photo.thumbnailUrl}" alt="Photo" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
            </div>
          </div>
        `;

    container.appendChild(div);
  }
};
