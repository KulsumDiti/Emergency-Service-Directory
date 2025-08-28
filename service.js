function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//heart-Count:
let count = 0;

getElement("service-card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-icon")) {
    count++;
    getElement("heart-count").innerText = count;
  }
});

//Calling-part:

let coins = 100;
getElement("service").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const callButton = e.target;

    const serviceTitle =
      callButton.parentNode.parentNode.children[1].children[0].innerText;

    const serviceName =
      callButton.parentNode.parentNode.children[1].children[1].innerText;

    const serviceNumber =
      callButton.parentNode.parentNode.children[1].children[2].innerText;

    if (coins < 20) {
      alert("❌ আপনার কাছে পর্যাপ্ত কয়েন নেই, কল করতে ২০ কয়েন প্রয়োজন।");
      return;
    }

    coins -= 20;
    getElement("coin-count").innerText = coins;

    alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

    const time = new Date();
    const localTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const callAdd = document.createElement("div");
    callAdd.innerHTML = `
    <div class="flex justify-between items-center bg-gray-200 mx-4 my-3 p-4 text-[16px] rounded-lg">
      <div>
        <h3>${serviceTitle}</h3>
        <p>${serviceNumber}</p>
     </div>
     <div>${localTime}</div>
    </div>`;
    document.getElementById("call-history-add").appendChild(callAdd);
  }
});

//History-Clear:
getElement("history-clear-btn").addEventListener("click", function () {
  const historyClearBtn = getElement("call-history-add");
  historyClearBtn.innerHTML = "";
});

//Copy BUtton:
let copyCount = 0;
getElement("service").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;
    const serviceNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard
      .writeText(serviceNumber)
      .then(() => {
        alert("নাম্বার কপি হয়েছে: " + serviceNumber);
        copyCount++;
        getElement("copy-number").innerText = copyCount;
      })
      .catch((err) => console.error("কপি করতে সমস্যা হয়েছে:", err));
  }
});
