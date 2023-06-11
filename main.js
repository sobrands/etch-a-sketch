function createGrid(num1) {
    let numSquares = num1 ** 2;
    const container = document.querySelector(".container");
    const width = container.clientWidth;
    const height = container.clientHeight;
    for (let i=0; i<numSquares; i++)
    {
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = width/num1 + "px";
        grid.style.height = height/num1 + "px";
        container.appendChild(grid);
    }
}

function refreshGrid(num1) {
    const container = document.querySelector(".container");
    container.replaceChildren();
    createGrid(num1);
}

function fillBlack(e) {
    if (e.target.className === "grid") {
        e.target.style.backgroundColor = "black";
    }
}

createGrid(16);
let mouseHold = false;

const container = document.querySelector(".container");
container.addEventListener("mousedown", (e) => {
    fillBlack(e);
    mouseHold = true;
});

container.addEventListener("mouseup", () => {
    mouseHold = false;
})

container.addEventListener("mouseover", (e) => {
    if (mouseHold) fillBlack(e);
})

const refreshButton = document.querySelector("div#reset");
refreshButton.addEventListener("click", () => {
    let numSquares = prompt("How many squares per row?");
    if (numSquares > 100) {
        alert("Number of squares must be less than 100!");
        return;
    }
    refreshGrid(numSquares);
})