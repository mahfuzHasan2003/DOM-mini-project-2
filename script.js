// g l f q
function getElement(ID) {
  return document.getElementById(ID);
}

const btns = document.querySelectorAll(".tab-btns button");
for (const EveryBtn of btns) {
  EveryBtn.addEventListener("click", function (e) {
    for (const i of btns) {
      i.classList.remove("tab-btn-active");
      getElement(i.getAttribute("data-details")).classList.add("hidden");
    }
    e.target.classList.add("tab-btn-active");
    getElement(e.target.getAttribute("data-details")).classList.remove(
      "hidden"
    );
  });
}
