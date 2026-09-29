// Câu 17: Áp dụng Math.pow để chuyển nhị phân thành thập phân
function binaryToDecimalWithMath(binaryStr) {
  let decimal = 0;
  const len = binaryStr.length;
  const steps = [];

  for (let i = 0; i < len; i++) {
    const bit = parseInt(binaryStr[i], 10);
    const power = len - 1 - i;
    // Áp dụng đối tượng Math.pow
    const weight = bit * Math.pow(2, power);
    decimal += weight;
    if (bit === 1) {
      steps.push(`1 × 2<sup>${power}</sup> (${Math.pow(2, power)})`);
    }
  }

  return { decimal, stepText: steps.join(" + ") };
}

function convertBinary() {
  const input = document.getElementById("binInput").value.trim();
  const resElem = document.getElementById("decResult");
  const stepsElem = document.getElementById("binSteps");

  // Kiểm tra chuỗi nhị phân hợp lệ
  if (!/^[01]+$/.test(input)) {
    alert("Vui lòng chỉ nhập các ký tự 0 và 1!");
    return;
  }

  const { decimal, stepText } = binaryToDecimalWithMath(input);

  resElem.innerHTML = `Số nhị phân <strong>${input}₂</strong> = <span class="badge highlight">${decimal}₁₀</span>`;
  stepsElem.innerHTML = `<p><strong>Các bước phân tích:</strong> ${stepText} = <strong>${decimal}</strong></p>`;

  console.log(`[Câu 17] ${input}₂ => ${decimal}₁₀`);
}

window.addEventListener("DOMContentLoaded", () => {
  convertBinary();
});