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

function fillColor(e) {
    if (e.target.className === "grid") {
        if (e.target.style.backgroundColor) {
            let currentColor = e.target.style.backgroundColor.match(/\d+/g);
            currentColor.forEach((color, index, arr) => {
                arr[index] = parseInt(color * 0.9);
            });
            e.target.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
            return;
        }
        colors.forEach((color, index, arr) => {
            arr[index] = Math.floor(Math.random() * 256);
        });
        e.target.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    }
}

createGrid(16);
let mouseHold = false;
let colors = [0,0,0];

const container = document.querySelector(".container");
container.addEventListener("mousedown", (e) => {
    fillColor(e);
    mouseHold = true;
});

container.addEventListener("mouseup", () => {
    mouseHold = false;
})

container.addEventListener("mouseover", (e) => {
    if (mouseHold) fillColor(e);
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