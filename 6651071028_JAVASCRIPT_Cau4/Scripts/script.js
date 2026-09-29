// Câu 4: In ra tất cả các số lẻ < 100 trừ 5, 7, 93
function getOddNumbersExcept() {
  const result = [];
  for (let i = 1; i < 100; i += 2) {
    if (i === 5 || i === 7 || i === 93) {
      continue; // Bỏ qua 5, 7, 93
    }
    result.push(i);
  }
  return result;
}

function displayOddNumbers() {
  const numbers = getOddNumbersExcept();
  const container = document.getElementById("numbersContainer");
  const statsText = document.getElementById("statsText");

  statsText.innerHTML = `Tổng cộng có <strong>${numbers.length}</strong> số lẻ thỏa điều kiện (đã loại bỏ 5, 7, 93).`;

  container.innerHTML = numbers.map(n => `<span class="num-chip">${n}</span>`).join("");

  console.log("=== CÂU 4: CÁC SỐ LẺ < 100 TRỪ 5, 7, 93 ===");
  console.log(numbers.join(", "));
}

window.addEventListener("DOMContentLoaded", () => {
  displayOddNumbers();
});