const addToDo = document.querySelector(".add-button");
const input = document.querySelector(".add-text");
const divToDoList = document.querySelector(".to-do-list");
const anyTask = document.querySelector(".any-task");

addToDo.addEventListener("click", (e) => {
  e.preventDefault();
  anyTask.style = "display: none";
  const task = input.value;

  const divToDo$$ = document.createElement("div");
  divToDo$$.classList.add("to-do");

  const divContent$$ = document.createElement("div");
  divContent$$.classList.add("content");

  divToDo$$.appendChild(divContent$$);

  const newInput$$ = document.createElement("input");
  newInput$$.classList.add("new-to-do");
  newInput$$.type = "text";
  newInput$$.value = task;
  newInput$$.setAttribute("readonly", "readonly");

  divContent$$.appendChild(newInput$$);

  const buttonsContainer$$ = document.createElement("div");
  buttonsContainer$$.classList.add("buttons-container");

  const buttonEdit$$ = document.createElement("button");
  buttonEdit$$.classList.add("edit-button");
  buttonEdit$$.innerHTML = "Edit";

  const buttonDelete$$ = document.createElement("button");
  buttonDelete$$.classList.add("delete-button");

  const buttonDeleteImg$$ = document.createElement("img");
  buttonDeleteImg$$.src = "./img/trash.png";
  buttonDeleteImg$$.alt = "delete image";
  buttonDeleteImg$$.classList.add("delete-img");
  buttonDelete$$.appendChild(buttonDeleteImg$$);

  buttonsContainer$$.appendChild(buttonEdit$$);
  buttonsContainer$$.appendChild(buttonDelete$$);

  divToDo$$.appendChild(buttonsContainer$$);

  divToDoList.appendChild(divToDo$$);

  input.value = "";

  buttonEdit$$.addEventListener("click", () => {
    if (buttonEdit$$.innerText.toLowerCase() == "edit") {
      buttonEdit$$.innerText = "Save";
      newInput$$.removeAttribute("readonly");
      newInput$$.focus();
    } else {
      buttonEdit$$.innerText = "Edit";
      newInput$$.setAttribute("readonly", "readonly");
    }
  });

  buttonDelete$$.addEventListener("click", () => {
    divToDoList.removeChild(divToDo$$);
  });
});