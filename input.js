let body = document.getElementsByTagName("body")[0];

let input = document.createElement("input");
let button = document.createElement("button");
let listData = [];
let ul = document.querySelector("ul");
const printInput = (value) => {
  console.log(value);
  hoosonstring = " ";
  if (input.value === hoosonstring) {
    return alert("hooson");
  }
  listData.push(value);
  console.log(listData);
};

const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    let li = document.createElement("li");
    li.className = "list";
    button2 = document.createElement("button");
    button3 = document.createElement("button");
    span = document.createElement("span");
    span.className = "material-symbols-outlined";
    span.innerText = "key";
    button2.className = "innerbutton";
    button2.innerHTML = "";
    button3.innerText = "Delete";

    button3.addEventListener("click", () => {
      let newlistdata = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newlistdata;
      render();
    });
    button2.addEventListener("click", () => {
      listData = listData.map((element, index2) => {
        if (index2 === index) {
          element = input.value;
        }

        return element;
      });
      render();
    });

    li.innerText = element;
    ul.appendChild(li);
    li.appendChild(button2);
    li.appendChild(button3);
    button2.appendChild(span);
  });
};

button.addEventListener("click", () => {
  if (input.value !== "") {
    printInput(input.value);
    render();
    input.value = " ";
  }
});
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value !== "") {
    printInput(input.value);
    render();
    input.value = " ";
  }
});
button.innerText = "Enter ";
body.appendChild(input);
body.appendChild(button);
