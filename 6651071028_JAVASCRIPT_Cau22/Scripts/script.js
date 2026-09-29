// Câu 22: Nhân hoặc chia hai số theo sự kiện click nút
function getNumbers() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  return { n1, n2 };
}

function multiply() {
  const { n1, n2 } = getNumbers();
  const resElem = document.getElementById("resultVal");

  if (isNaN(n1) || isNaN(n2)) {
    resElem.innerText = "Vui lòng nhập đầy đủ 2 số!";
    return;
  }

  const result = n1 * n2;
  resElem.innerText = result;
  console.log(`[Câu 22] Multiply: ${n1} * ${n2} = ${result}`);
}

function divide() {
  const { n1, n2 } = getNumbers();
  const resElem = document.getElementById("resultVal");

  if (isNaN(n1) || isNaN(n2)) {
    resElem.innerText = "Vui lòng nhập đầy đủ 2 số!";
    return;
  }

  if (n2 === 0) {
    resElem.innerText = "Không thể chia cho số 0!";
    return;
  }

  const result = n1 / n2;
  // Nếu là số thập phân dài thì làm tròn 4 chữ số
  resElem.innerText = Number.isInteger(result) ? result : result.toFixed(4);
  console.log(`[Câu 22] Divide: ${n1} / ${n2} = ${result}`);
}

window.addEventListener("DOMContentLoaded", () => {
  multiply(); // Hiển thị kết quả mẫu 12 * 10 = 120 như đề bài
});