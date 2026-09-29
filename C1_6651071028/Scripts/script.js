// Câu 1: Tìm diện tích tam giác có độ dài ba cạnh là 5, 6, 7
function calculateTriangleArea(a, b, c) {
  // Nửa chu vi
  const p = (a + b + c) / 2;
  // Công thức Heron
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return area;
}

function runCalculation() {
  const a = 5, b = 6, c = 7;
  const area = calculateTriangleArea(a, b, c);

  // 1. Xuất ra Tab Console (nguyên giá trị thực)
  console.log("=== CÂU 1: DIỆN TÍCH TAM GIÁC ===");
  console.log(area);

  // 2. Xuất ra giao diện trang web (The area of the triangle is: 14.70)
  const webResultElem = document.getElementById("webResult");
  if (webResultElem) {
    webResultElem.innerText = "The area of the triangle is: " + area.toFixed(2);
  }

  // 3. Xuất ra hộp thoại của trình duyệt (window.alert())
  window.alert("The area of the triangle is: " + area.toFixed(2));
}

// Chạy tự động khi tải trang
window.addEventListener("DOMContentLoaded", () => {
  runCalculation();
});