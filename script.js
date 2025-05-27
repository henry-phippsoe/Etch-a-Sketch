function newBoard(numSquares) {
    const container = document.querySelector(".container");
    const gridItem = document.getElementById("griditem");
    const sqsize = (400 / numSquares);
    const num =  sqsize ** 2;

    container.innerHTML = '';

    console.log(num);
    console.log(window.getComputedStyle(container).getPropertyValue('width'));

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.id = "griditem";
        div.style.width = sqsize;
        div.style.height = sqsize;
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }

}
