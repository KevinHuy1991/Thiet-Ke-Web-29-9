// Câu 11: Hàm đảo ngược một số nguyên
function reverseNumber(n) {
  const isNegative = n < 0;
  const reversedStr = Math.abs(n).toString().split("").reverse().join("");
  const reversedNum = parseInt(reversedStr, 10);
  return isNegative ? -reversedNum : reversedNum;
}

function handleReverse() {
  const input = document.getElementById("revInput");
  const n = parseInt(input.value);

  if (isNaN(n)) {
    alert("Vui lòng nhập số nguyên hợp lệ!");
    return;
  }

  const reversed = reverseNumber(n);
  const resultElem = document.getElementById("reverseResult");

  resultElem.innerHTML = `Số ban đầu: <strong>${n}</strong> &rarr; Số sau khi đảo ngược: <span class="badge highlight">${reversed}</span>`;

  console.log(`[Câu 11] Đảo ngược ${n} => ${reversed}`);
}

window.addEventListener("DOMContentLoaded", () => {
  handleReverse();
});