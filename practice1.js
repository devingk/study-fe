
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
    if(!e.target.className) {
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone)
})

const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello world!";