// Câu 2: Xác định năm nhuận
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkYear() {
  const input = document.getElementById("yearInput");
  const year = parseInt(input.value);

  if (isNaN(year)) {
    alert("Vui lòng nhập năm hợp lệ!");
    return;
  }

  const result = isLeapYear(year);
  const resultText = document.getElementById("resultText");

  if (result) {
    resultText.innerHTML = `<span class="badge success">Năm ${year} LÀ năm nhuận.</span>`;
  } else {
    resultText.innerHTML = `<span class="badge danger">Năm ${year} KHÔNG PHẢI là năm nhuận.</span>`;
  }

  console.log(`[Câu 2] Năm ${year}: ${result ? "Là năm nhuận" : "Không phải năm nhuận"}`);
}

function testYear(y) {
  document.getElementById("yearInput").value = y;
  checkYear();
}

window.addEventListener("DOMContentLoaded", () => {
  checkYear();
});