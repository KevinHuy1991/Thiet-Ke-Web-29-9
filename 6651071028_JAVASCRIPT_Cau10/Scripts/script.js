// Câu 10: Tính tổng n + n/2 + n/4 + n/8 + ... (phép chia nguyên)
function calculateSeriesSum(n) {
  let sum = 0;
  let current = n;
  const terms = [];

  while (current > 0) {
    terms.push(current);
    sum += current;
    current = Math.floor(current / 2);
  }

  return { sum, terms };
}

function calcSeriesSumPrompt() {
  const input = prompt("Nhập một số nguyên dương n (ví dụ: 16):");
  if (input === null) return;

  const n = parseInt(input.trim());
  const resBox = document.getElementById("seriesResult");

  if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương lớn hơn 0!");
    return;
  }

  const { sum, terms } = calculateSeriesSum(n);
  const detail = `Dãy số: ${terms.join(" + ")} = ${sum}`;

  // Xuất ra hộp thoại của trình duyệt theo yêu cầu
  alert(`Tổng dãy số với n = ${n}:\n${detail}`);

  // Hiển thị ra giao diện
  resBox.innerHTML = `
    <p><strong>Giá trị n:</strong> ${n}</p>
    <p><strong>Các số hạng:</strong> ${terms.join(" + ")}</p>
    <p><strong>Tổng:</strong> <span class="badge highlight">${sum}</span></p>
  `;

  console.log(`[Câu 10] n = ${n} => ${detail}`);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(calcSeriesSumPrompt, 100);
});