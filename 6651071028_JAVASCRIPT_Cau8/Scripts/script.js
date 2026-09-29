// Câu 8: Đọc số nguyên có 2 chữ số
function readTwoDigitNumber(n) {
  const digits = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
  const tens = Math.floor(n / 10);
  const units = n % 10;

  let tensText = "";
  if (tens === 1) {
    tensText = "Mười";
  } else {
    tensText = digits[tens].charAt(0).toUpperCase() + digits[tens].slice(1) + " mươi";
  }

  let unitsText = "";
  if (units === 0) {
    unitsText = "";
  } else if (units === 1) {
    unitsText = (tens === 1) ? "một" : "mốt";
  } else if (units === 4) {
    unitsText = (tens === 1) ? "bốn" : "tư";
  } else if (units === 5) {
    unitsText = "lăm";
  } else {
    unitsText = digits[units];
  }

  return (tensText + " " + unitsText).trim();
}

function readTwoDigitPrompt() {
  const input = prompt("Nhập vào một số nguyên có 2 chữ số (10 - 99):");
  if (input === null) return;

  const n = parseInt(input.trim());
  const resultElem = document.getElementById("readResult");

  if (isNaN(n) || n < 10 || n > 99) {
    alert("Vui lòng nhập một số nguyên có đúng 2 chữ số (từ 10 đến 99)!");
    return;
  }

  const reading = readTwoDigitNumber(n);

  // Xuất ra hộp thoại alert của trình duyệt
  alert(`Số ${n} đọc là: "${reading}"`);

  // Hiển thị ra giao diện web
  resultElem.innerHTML = `Số <strong>${n}</strong> đọc là: <span class="badge highlight">${reading}</span>`;
  console.log(`[Câu 8] ${n} => ${reading}`);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(readTwoDigitPrompt, 100);
});