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

// ---------------------check donation input validity-----------------------------
function checkInputIsValid(val, tbalance) {
  if (val <= 0 || isNaN(val) || tbalance < val) {
    return false;
  }
  return true;
}

//  ------------------------Home to Blog page-------------------------------
getElement("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// --------tab switching from Donation to History & History to Donation------
const btns = document.querySelectorAll(".tab-btns button");
for (const EveryBtn of btns) {
  EveryBtn.addEventListener("click", function (e) {
    for (const i of btns) {
      i.classList.remove("tab-btn-active");
      getElement(i.getAttribute("data-details")).classList.add("hidden");
      document.querySelector("footer").classList.remove("hidden");
    }
    e.target.classList.add("tab-btn-active");
    getElement(e.target.getAttribute("data-details")).classList.remove(
      "hidden"
    );
    if (e.target.innerText === "History") {
      document.querySelector("footer").classList.add("hidden");
    }
  });
}

// ---------------add my donation data to the history page----------------------
function addHistory(donatedTaka, forWhat) {
  forWhat = forWhat.split(" ").slice(2).join(" ");
  getElement(
    "history-details"
  ).innerHTML = `<div class="space-y-1 border-2 border-[#ffffff33] p-5 rounded-md">
          <h4 class="text-lg font-bold">
            ${donatedTaka} Taka is Donated for ${forWhat}
          </h4>
          <p>
            Date : ${new Date()}
          </p>
        </div> ${getElement("history-details").innerHTML}`;
}

//  -----------------------Donate Now btn functionality------------------------------
const donateNowBtn = document.querySelectorAll(".donate-now-btn");

for (const btn of donateNowBtn) {
  btn.addEventListener("click", function (e) {
    const totalBalance = getElementInnerText("total-balance");
    let soFarDonatedElement =
      e.target.parentElement.querySelector(".donated-amount");
    let soFarDonatedAmount = parseInt(
      e.target.parentElement.querySelector(".donated-amount").innerText
    );
    const myDonationElement =
      e.target.parentElement.querySelector(".donation-amount");
    const myDonationAmount = parseInt(
      e.target.parentElement.querySelector(".donation-amount").value
    );

    // handling Error
    if (!checkInputIsValid(myDonationAmount, totalBalance)) {
      e.target.parentElement
        .querySelector(".invalid-warning")
        .classList.remove("hidden");
      return;
    }

    if (checkInputIsValid(myDonationAmount, totalBalance)) {
      e.target.parentElement
        .querySelector(".invalid-warning")
        .classList.add("hidden");
      // -----------updating so Far Donattion---------
      soFarDonatedElement.innerText = myDonationAmount + soFarDonatedAmount;
      // ----------updating total balance--------
      getElement("total-balance").innerText = totalBalance - myDonationAmount;
      // ----------showing modal------------
      getElement("modal").style.display = "grid";
      // ----------remove modal-------------
      getElement("modal").addEventListener("click", function (e) {
        if (e.target.innerText === "Close Confirmation") {
          getElement("modal").style.display = "none";
        }
      });
      // -------------------clearing input value--------------
      myDonationElement.value = "";

      // -------------------passig data for history--------------
      addHistory(
        myDonationAmount,
        e.target.parentElement.querySelector(".donation-title").innerText
      );
    }
  });
}
//  ----------------------------Donate Now Ends------------------------------------
// console.log(totalBalance);
