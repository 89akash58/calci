let buttons = document.querySelectorAll("#buttons, #air, #reset, #equal, #del");

let display = document.getElementById("display");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerText == "RESET") {
      string = "";
      display.value = string;
    } else if (e.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.innerText;
      display.value = string;
    }
  });
});
