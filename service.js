function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let count = 0;
getElement("service-card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-icon")) {
    count++;
    getElement("heart-count").innerText = count;
  }
});
