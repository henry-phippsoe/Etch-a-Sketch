document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const num = (400 / 16) ** 2;

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("griditem");
        container.appendChild(div);
    }
});