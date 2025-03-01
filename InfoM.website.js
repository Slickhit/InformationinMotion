document.addEventListener("DOMContentLoaded", function() {
    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Light/Dark Mode";
    toggleBtn.style.margin = "20px";
    document.body.prepend(toggleBtn);

    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});

// Light mode CSS
let style = document.createElement("style");
style.innerHTML = `
    .light-mode {
        background-color: #fff;
        color: #000;
    }
`;
document.head.appendChild(style);
