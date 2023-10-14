// prompt that asks the user to introduce the number of squares
// and creates the canvas for ( T x T squares , where T is the number that the user introduced in the prompt))
const squares = document.querySelector(".choose");
let sqr;
const container = document.querySelector(".container");

squares.addEventListener("click", () => {
  sqr = prompt("How Many Squares you Want you Canvas to Have?(1-100)");
  if (sqr > 100 || sqr < 1) {
    alert("Invalid Number!");
    sqr = null;
  } else {
    sqr = +sqr;
  }
  console.log(`no. of sqrs: ${sqr}`);

  create();
});

function create() {
  while (sqr) {
    let w = document.createElement("div");
    container.appendChild(w);
    w.classList.add("pixel");
    w.textContent = "";
    sqr--;
  }
}

// restart button ( when clicked => refresh page)
const refreshButton = document.querySelector(".restart");
refreshButton.addEventListener("click", () => {
  window.location.reload();
});
// ----------------------------------------------------------------

// adaugam culoare cand dai hover peste div
const pixel = document.querySelectorAll(".pixel");

pixel.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(this);
    this.style.backgroundColor = "white";
  });
});
