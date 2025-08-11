let div = document.getElementById("card");
let div2 = document.getElementById("card2");
div.style.width = "50%";
div2.style.width = "50%";

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let newwidth = parseInt(div.style.width) + 1 + "%";
    let newwidth2 = parseInt(div2.style.width) - 1 + "%";

    div.style.width = newwidth;
    div2.style.width = newwidth2;
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    let newwidth = parseInt(div.style.width) - 1 + "%";
    let newwidth2 = parseInt(div2.style.width) + 1 + "%";

    div.style.width = newwidth;
    div2.style.width = newwidth2;
  }
});
