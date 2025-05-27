function newBoard(numSquares) {
    const container = document.querySelector(".container");
    const gridItem = document.getElementById("griditem");
    const num = (400 / numSquares) ** 2;

    console.log(num);
    console.log(window.getComputedStyle(container).getPropertyValue('width'));

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.id = "griditem";
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }



}