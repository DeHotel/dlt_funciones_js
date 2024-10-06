// 3
const div_blue = document.getElementById("div_blue");
const div_red = document.getElementById("div_red");
const div_green = document.getElementById("div_green");
const div_yellow = document.getElementById("div_yellow");

div_blue.addEventListener("click", function () {
  div_blue.style.backgroundColor = "black";
});
div_red.addEventListener("click", function () {
  div_red.style.backgroundColor = "black";
});
div_green.addEventListener("click", function () {
  div_green.style.backgroundColor = "black";
});
div_yellow.addEventListener("click", function () {
  div_yellow.style.backgroundColor = "black";
});

//

const color_a = "pink";
const color_s = "orange";
const color_d = "lightblue";
const color_q = "purple";
const color_w = "gray";
const color_e = "brown";
const cuadro_key = document.getElementById("key");
const cuadro_key2 = document.getElementById("key2");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cuadro_key.style.backgroundColor = color_a;
  } else if (event.key === "s") {
    cuadro_key.style.backgroundColor = color_s;
  } else if (event.key === "d") {
    cuadro_key.style.backgroundColor = color_d;
  } else if (event.key === "q") {
    cuadro_key2.style.backgroundColor = color_q;
  } else if (event.key === "w") {
    cuadro_key2.style.backgroundColor = color_w;
  } else if (event.key === "e") {
    cuadro_key2.style.backgroundColor = color_e;
  }
});
