function generateNew() {
    document.addEventListener("DOMContentLoaded", () => {

        const container = document.querySelector(".container");
        const griditem = document.querySelector(".pxsize")

        const dimensions = prompt("Please input dimensions: ");
        const pixel = parseInt(dimensions) / 25;
        const totalPixels = (parseInt(dimensions) / pixel) ** 2;

        console.log(pixel);
        console.log(totalPixels);

        container.style.width = "100px"
        container.style.height = "100px"
        griditem.style.width = "100px"
        griditem.style.height = "100px"



        for (let i = 0; i < totalPixels; i++) {
            const div = document.createElement('div');
            div.classList.add("pxsize");
            div.id = "griditem";
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "black";
            });
            container.appendChild(div);
        }
    });
}

generateNew();
