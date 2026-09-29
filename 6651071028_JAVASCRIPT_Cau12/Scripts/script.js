// Câu 12: Hàm tính giá trị b^n
function power(b, n) {
  // Có thể dùng Math.pow hoặc vòng lặp nhân
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= b;
  }
  return result;
}

function handlePower() {
  const b = parseInt(document.getElementById("baseB").value);
  const n = parseInt(document.getElementById("powerN").value);

  if (isNaN(b) || isNaN(n) || b <= 0 || n < 0) {
    alert("Vui lòng nhập b và n là các số nguyên dương hợp lệ!");
    return;
  }

  const result = power(b, n);
  const resultElem = document.getElementById("powerResult");

  resultElem.innerHTML = `Giá trị <strong>${b}<sup>${n}</sup></strong> = <span class="badge highlight">${result.toLocaleString()}</span>`;

  console.log(`[Câu 12] ${b}^${n} = ${result}`);
}

window.addEventListener("DOMContentLoaded", () => {
  handlePower();
});