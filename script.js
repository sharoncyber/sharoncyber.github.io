const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");

    let iterations = 0;
    const interval = setInterval(() => {
        h1.innerText = h1.innerText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return h1.dataset.value[index];
                }
                if (h1.dataset.value[index] == " ") {
                    return " ";
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iterations >= h1.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
});
