// Câu 23: Tính tiền lương: Lương tháng = Lương * Hệ số lương
function calculateSalary() {
  const baseSalaryInput = document.getElementById("baseSalary");
  const coeffInput = document.getElementById("salaryCoefficient");
  const monthlySalaryInput = document.getElementById("monthlySalary");

  const base = parseFloat(baseSalaryInput.value);
  const coeff = parseFloat(coeffInput.value);

  if (isNaN(base) || isNaN(coeff)) {
    alert("Vui lòng nhập đầy đủ lương và hệ số lương hợp lệ!");
    return;
  }

  const total = base * coeff;
  monthlySalaryInput.value = Math.round(total);

  console.log(`[Câu 23] Lương: ${base} * Hệ số: ${coeff} = ${total}`);
}

window.addEventListener("DOMContentLoaded", () => {
  calculateSalary();
});