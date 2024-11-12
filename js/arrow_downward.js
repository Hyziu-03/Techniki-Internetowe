const arrowDownward = document.querySelector(".arrow_downward");
const footer = document.querySelector(".footer");
awaitScroll(arrowDownward, footer);

function awaitScroll(selector, coord) {
    const top = coord.getBoundingClientRect().y + coord.getBoundingClientRect().height;

    selector.addEventListener("click", () => window.scrollTo({
        top: top,
        behavior: "smooth",
    }))
}
