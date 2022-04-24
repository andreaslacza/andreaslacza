const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
copyright.innerText = `© ${year} Andreas Lacza`

const dialog = document.getElementById("dialog");
const open = document.getElementById("open");
open.addEventListener("click", function () {
    dialog.style.display = "block";
});

const close = document.getElementById("close");
close.addEventListener("click", function () {
    dialog.style.display = "none";
});
