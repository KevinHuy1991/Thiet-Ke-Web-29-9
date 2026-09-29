// Câu 6: Giải phương trình bậc 2
function solveQuadratic(a, b, c) {
  if (a === 0) {
    // Phương trình bậc nhất: bx + c = 0
    if (b === 0) {
      if (c === 0) {
        return { msg: "Phương trình có vô số nghiệm.", type: "infinite" };
      } else {
        return { msg: "Phương trình vô nghiệm.", type: "none" };
      }
    } else {
      const x = -c / b;
      return { msg: `Phương trình bậc nhất có 1 nghiệm: x = ${x.toFixed(4)}`, type: "single", x };
    }
  }

  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return { msg: `Phương trình vô nghiệm thực (Delta = ${delta.toFixed(2)} < 0).`, type: "none" };
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return { msg: `Phương trình có nghiệm kép: x1 = x2 = ${x.toFixed(4)}`, type: "double", x };
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return {
      msg: `Phương trình có 2 nghiệm phân biệt:\nx1 = ${x1.toFixed(4)}\nx2 = ${x2.toFixed(4)}`,
      type: "two",
      x1, x2, delta
    };
  }
}

function solveQuadraticEquation() {
  const aStr = prompt("Nhập hệ số a:");
  if (aStr === null) return;
  const bStr = prompt("Nhập hệ số b:");
  if (bStr === null) return;
  const cStr = prompt("Nhập hệ số c:");
  if (cStr === null) return;

  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  const c = parseFloat(cStr);

  const stepsElem = document.getElementById("equationSteps");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    const err = "Hệ số nhập vào không hợp lệ!";
    alert(err);
    stepsElem.innerText = err;
    return;
  }

  const result = solveQuadratic(a, b, c);

  // Xuất ra hộp thoại của trình duyệt
  alert(`Phương trình: ${a}x² + ${b}x + ${c} = 0\n\n${result.msg}`);

  // Hiển thị trên web
  stepsElem.innerHTML = `
    <p><strong>Phương trình:</strong> ${a}x² + (${b})x + (${c}) = 0</p>
    <div class="badge ${result.type === 'none' ? 'danger' : 'success'}">${result.msg.replace(/\n/g, '<br>')}</div>
  `;

  console.log(`[Câu 6] ${a}x² + ${b}x + ${c} = 0 => ${result.msg}`);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(solveQuadraticEquation, 100);
});