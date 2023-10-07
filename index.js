let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("card");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "laxmi";
bgContainerEl.appendChild(headingEl);

let paragraphEl = document.createElement("p");
paragraphEl.classList.add("paragraph");
paragraphEl.textContent = "FULLSTACK DEVELOPER";
headingEl.appendChild(paragraphEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

let skills = ["HTML", "CSS", "JAVASCRIPT", "SQL", "NODE JS"];

for (let skill of skills) {
  let listItemEl = document.createElement("li");
  listItemEl.textContent = skill;
  listContainerEl.appendChild(listItemEl);
}

let btnEl = document.createElement("button");
btnEl.classList.add("button");
btnEl.textContent = "START";
headingEl.appendChild(btnEl);
