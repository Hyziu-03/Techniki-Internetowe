const header = document.querySelector(".header");
const arrowUpward = document.querySelector(".arrow_upward");
awaitScroll(arrowUpward, header);

function awaitScroll(selector, coord) {
    const top = coord.getBoundingClientRect().y + coord.getBoundingClientRect().height;

    selector.addEventListener("click", () => window.scrollTo({
        top: top,
        behavior: "smooth",
    }))
}
