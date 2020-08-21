let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const opcoes = document.querySelector(".opcoes");


function show_option() {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
}

opcoes.addEventListener("click", () => {
    show_option();
})

menuToggle.addEventListener("click", () => {
    show_option();
})