var input = document.querySelector("input[type=range]");
input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
   input.style.setProperty("--value", input.value);
  },false);