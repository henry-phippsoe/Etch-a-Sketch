const container = document.querySelector(".container");
const num = (400 / 16) ** 2;

for (let i = 0; i < num; i++) {
    container.appendChild((document.createElement('div')).classList.add(".griditem"));
}