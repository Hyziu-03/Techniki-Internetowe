const contentCopyBtn = document.querySelector(".content_copy");
const contentCopyIcon = document.querySelector(".content_copy_icon");
contentCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("PIERWSZASESJA");
  contentCopyIcon.innerText = "check";
});
