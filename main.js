let btns = document.querySelectorAll(".btns span");
let inpValue = document.getElementById("inp");
let area = document.querySelector(".area > span");

window.onload = function () {
  inpValue.focus();
};

btns.forEach((span) => {
  span.addEventListener("click", function (e) {
    checkerInput();
    if (e.target.classList.contains("check")) {
      check();
    }

    if (e.target.classList.contains("add")) {
      add();
    }
    if (e.target.classList.contains("delete")) {
      deleteItem();
    }
    if (e.target.classList.contains("show")) {
      show();
    }
  });
});

function checkerInput() {
  if (inpValue.value == "") {
    area.innerHTML = "Input Can Not Be Empty";
  }
}

function showMess() {
  area.innerHTML = `<span>${inpValue.value}</span> is not exist in the localStorage`;
}

function check() {
  if (inpValue.value != "") {
    if (localStorage.getItem(inpValue.value)) {
      area.innerHTML = `Yes this word  is already exist in the localStorage Call <span>${inpValue.value}</span> `;
    } else {
      showMess();
    }
    inpValue.value = "";
  }
}
function add() {
  if (inpValue.value != "") {
    localStorage.setItem(inpValue.value, "test");
    area.innerHTML = `<span>${inpValue.value}</span> is added to localStorage`;
    inpValue.value = "";
  }
}
function deleteItem() {
  if (inpValue.value != "") {
    if (localStorage.getItem(inpValue.value)) {
      localStorage.removeItem(inpValue.value);
      area.innerHTML = `<span>${inpValue.value}</span> is remved from localStorage`;
    } else {
      showMess();
    }
    inpValue.value = "";
  }
}
function show() {
  if (localStorage.length) {
    area.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      area.innerHTML += `<span class ="keys">${key}</span>`;
    }
  }
}

Object.entries();
