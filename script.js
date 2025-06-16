function newBoard(numSquares) {
    if (numSquares > 100) {
        newBoard(prompt('Please input squares per side: '));
    }

    const container = document.querySelector(".container");
    const gridItem = document.getElementById("griditem");

    container.innerHTML = '';

    for (let i = 0; i < numSquares ** 2; i++) {
        const div = document.createElement('div');
        div.style.width = `${(400 / numSquares)}px`;
        div.style.height = `${(400 / numSquares)}px`;
        div.id = "griditem";

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }

}

newBoard(16);
