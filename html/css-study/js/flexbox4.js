const switcher = document.getElementById("switcher");
const demo = document.getElementById("container");

switcher.addEventListener("change", (evt) => {
  demo.style.flexDirection = evt.target.value;
});
