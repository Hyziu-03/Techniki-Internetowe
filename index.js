const arrowDownward = document.querySelector(".arrow_downward");
const footer = document.querySelector(".footer")
awaitScroll(arrowDownward, footer);

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

const contentCopyBtn = document.querySelector(".content_copy");
const contentCopyIcon = document.querySelector(".content_copy_icon");
contentCopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("PIERWSZASESJA")
    contentCopyIcon.innerText = "check"
})
