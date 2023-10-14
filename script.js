// prompt that asks the user to introduce the number of squares
// and creates the canvas for ( T x T squares , where T is the number that the user introduced in the prompt))
const squares = document.querySelector(".choose");
let sqr;
const container = document.querySelector(".container");

function create() {
  while (sqr) {
    let w = document.createElement("div");
    container.appendChild(w);
    w.classList.add("pixel");
    w.textContent = "";
    sqr--;
  }
  const pixel = Array.from(document.querySelectorAll(".pixel"));
  console.log(pixel);
  let colorOnHover = () => {
    pixel.map((a) => {
      a.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        let currOpacity = event.target.style.opacity;
        event.target.style.backgroundColor = "#f4f4f4";
        if (currOpacity >= 0.2) {
          event.target.style.opacity = currOpacity - 0.1;
        }
      });
    });
  };
  colorOnHover();
}

let createGrid = () => {
  squares.addEventListener("click", () => {
    sqr = prompt("How Many Squares you Want you Canvas to Have?(1-100)");
    if (sqr > 100 || sqr < 1) {
      alert("Invalid Number!");
      sqr = null;
    } else {
      sqr = +(sqr * sqr);
    }
    console.log(`no. of sqrs: ${sqr}`);
    create();
  });
};

// restart button ( when clicked => refresh page)
const refreshButton = document.querySelector(".restart");
refreshButton.addEventListener("click", () => {
  window.location.reload();
});
// ----------------------------------------------------------------

function run() {
  createGrid();
}
run();
