// g l f q
function getElement(ID) {
  return document.getElementById(ID);
}

function getElementInnerText(ID) {
  return parseInt(document.getElementById(ID).innerText);
}

function getInputValue(ID) {
  return parseInt(document.getElementById(ID).value);
}

// check input validity
function checkInputIsValid(ID) {
  if (getInputValue(ID) <= 0 || isNaN(getInputValue(ID) <= 0)) {
    return false;
  }
  return true;
}

//  --------------------------------------------------------------------------
// Home to Blog
getElement("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// tab switching from Donation to History & History to Donation
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

// Assigning variable to frequently use
const totalBalance = getElementInnerText("total-balance");
console.log(totalBalance);
