// Câu 5: Kiểm tra số nguyên tố
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function promptAndCheck() {
  const input = prompt("Nhập một số nguyên dương bất kì:");
  if (input === null) return; // Người dùng ấn Cancel

  const n = parseInt(input.trim());
  const resultElem = document.getElementById("primeResult");

  if (isNaN(n) || n <= 0) {
    const errorMsg = "Vui lòng nhập một số nguyên dương hợp lệ (lớn hơn 0)!";
    alert(errorMsg);
    resultElem.innerHTML = `<span class="badge danger">${errorMsg}</span>`;
    return;
  }

  const check = isPrime(n);
  const msg = check ? `Số ${n} LÀ số nguyên tố.` : `Số ${n} KHÔNG PHẢI là số nguyên tố.`;

  // Xuất ở hộp thoại của trình duyệt theo đúng yêu cầu
  alert(msg);

  // Hiển thị thêm trên giao diện
  resultElem.innerHTML = check
    ? `<span class="badge success">${msg}</span>`
    : `<span class="badge danger">${msg}</span>`;

  console.log(`[Câu 5] ${msg}`);
}

// Chạy tự động khi tải trang lần đầu
window.addEventListener("DOMContentLoaded", () => {
  // Trì hoãn nhẹ 100ms để trình duyệt render DOM trước khi bật prompt
  setTimeout(promptAndCheck, 100);
});