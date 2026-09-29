// Câu 18: Áp dụng Math để tính giai thừa
function factorialWithMath(n) {
  // Áp dụng Math.floor và Math.abs để đảm bảo số nguyên dương
  n = Math.floor(Math.abs(n));
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calcFactorial() {
  const input = document.getElementById("factN");
  const n = parseInt(input.value);

  if (isNaN(n) || n < 0) {
    alert("Vui lòng nhập một số nguyên không âm!");
    return;
  }

  const fact = factorialWithMath(n);
  const resultElem = document.getElementById("factResult");

  resultElem.innerHTML = `Giai thừa <strong>${n}!</strong> = <span class="badge highlight">${fact.toLocaleString()}</span>`;

  console.log(`[Câu 18] ${n}! = ${fact}`);
}

function testFact(val) {
  document.getElementById("factN").value = val;
  calcFactorial();
}

window.addEventListener("DOMContentLoaded", () => {
  calcFactorial();
});