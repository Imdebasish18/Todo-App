let input = document.querySelector("#input-box");
let addBtn = document.querySelector(".btn");
let list = document.querySelector("#list-container");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    return alert("You must write something!");
  }
  const listItem = document.createElement("li");

  listItem.textContent = input.value;
  list.appendChild(listItem);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.className = "cross";
  listItem.appendChild(span);

  //my own code:

  //   function deleteListItem(event) {
  //     const parentElement = event.target.parentElement;
  //     parentElement.remove();
  //   }

  //   const crosses = document.querySelectorAll(".cross");
  //   crosses.forEach((span) => {
  //     span.addEventListener("click", (e) => {
  //       deleteListItem(e);
  //     });
  //   });

  //   listItem.addEventListener("click", () => {
  //     listItem.className = "checked";
  //   });
  input.value = "";
  saveData();
});
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.classList.contains("cross")) {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
