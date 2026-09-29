// Câu 3: Tìm số lớn nhất trong ba số
function findMaxOfThree(a, b, c) {
  // Có thể dùng Math.max hoặc cấu trúc rẽ nhánh if else
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

function findMax() {
  const a = parseFloat(document.getElementById("numA").value);
  const b = parseFloat(document.getElementById("numB").value);
  const c = parseFloat(document.getElementById("numC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập đầy đủ cả 3 số!");
    return;
  }

  const maxVal = findMaxOfThree(a, b, c);
  const resultElem = document.getElementById("maxResult");
  resultElem.innerHTML = `Số lớn nhất trong ba số (<strong>${a}</strong>, <strong>${b}</strong>, <strong>${c}</strong>) là: <span class="badge highlight">${maxVal}</span>`;

  console.log(`[Câu 3] Ba số: ${a}, ${b}, ${c} => Số lớn nhất: ${maxVal}`);
}

function resetDefault() {
  document.getElementById("numA").value = 15;
  document.getElementById("numB").value = 28;
  document.getElementById("numC").value = 9;
  findMax();
}

window.addEventListener("DOMContentLoaded", () => {
  findMax();
});