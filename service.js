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

    const serviceName =
      callButton.parentNode.parentNode.children[1].children[1].innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.children[1].children[2].innerText;

    if (coins < 20) {
      alert("আপনার কাছে পর্যাপ্ত কয়েন নেই,কল করতে ২০ কয়েন প্রয়োজন।");
    }

    coins -= 20;
    getElement("coin-count").innerText = coins;

    alert(`Calling ${serviceName} ${serviceNumber}...`);
    const callAdd = document.createElement("div");
    callAdd.innerText = `${serviceName}-${serviceNumber}`;
    document.getElementById("call-history-add").appendChild(callAdd);
  }
});
