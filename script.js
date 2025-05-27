function newBoard() {
    const container = document.querySelector(".container");
    const gridItem = document.getElementById("griditem");
    const num = (400 / 16) ** 2;

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.id = "griditem";
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }

    

}