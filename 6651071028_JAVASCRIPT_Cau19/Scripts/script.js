// Câu 19: Máy tính lãi suất với Math.pow
function calculateInvestment(p, r, n) {
  // Lãi đơn: A = P * (1 + r * n)
  const simpleTotal = p * (1 + (r / 100) * n);

  // Lãi kép hàng năm: A = P * (1 + r)^n -> sử dụng Math.pow
  const compoundTotal = p * Math.pow(1 + r / 100, n);

  return {
    simpleTotal: Math.round(simpleTotal),
    compoundTotal: Math.round(compoundTotal),
    compoundInterest: Math.round(compoundTotal - p),
    simpleInterest: Math.round(simpleTotal - p)
  };
}

function calculateInterest() {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const n = parseInt(document.getElementById("years").value);

  if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
    alert("Vui lòng nhập các giá trị tiền gốc, lãi suất và số năm hợp lệ!");
    return;
  }

  const res = calculateInvestment(p, r, n);
  const resElem = document.getElementById("interestResults");

  resElem.innerHTML = `
    <div class="interest-comparison">
      <div class="interest-col">
        <h4>Lãi kép (Compound Interest - áp dụng Math.pow):</h4>
        <p>Tổng tiền sau ${n} năm: <span class="badge highlight">${res.compoundTotal.toLocaleString()} VNĐ</span></p>
        <p>Tiền lãi sinh ra: <strong>+${res.compoundInterest.toLocaleString()} VNĐ</strong></p>
      </div>
      <div class="interest-col">
        <h4>Lãi đơn (Simple Interest):</h4>
        <p>Tổng tiền sau ${n} năm: <span class="badge success">${res.simpleTotal.toLocaleString()} VNĐ</span></p>
        <p>Tiền lãi sinh ra: <strong>+${res.simpleInterest.toLocaleString()} VNĐ</strong></p>
      </div>
    </div>
  `;

  console.log(`[Câu 19] Gốc: ${p}, Lãi suất: ${r}%, Năm: ${n} => Lãi kép: ${res.compoundTotal}`);
}

window.addEventListener("DOMContentLoaded", () => {
  calculateInterest();
});