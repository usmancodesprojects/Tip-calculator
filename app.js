// Tip Calculator — core logic
// Developer 1 (Ali) works in THIS file, on the calculate() function.

function calculate(bill, tipPercent, people) {
  // TODO (Ali): improve this function on your branch
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / people;
  return perPerson;
}

document.getElementById("calcBtn").addEventListener("click", function () {
  const bill = parseFloat(document.getElementById("bill").value) || 0;
  const tip = parseFloat(document.getElementById("tip").value) || 0;
  const people = parseInt(document.getElementById("people").value) || 1;

  const perPerson = calculate(bill, tip, people);

  document.getElementById("result").textContent =
    "Each person pays: " + perPerson;
});
