// Câu 7: Nhập 1 ngày cho trước (ngày, tháng, năm) từ prompt, tìm ngày kế tiếp và xuất ra console.log
function getNextDay(day, month, year) {
  // Trong JavaScript Date, month chạy từ 0 đến 11
  const current = new Date(year, month - 1, day);
  
  // Tăng thêm 1 ngày
  current.setDate(current.getDate() + 1);

  return {
    day: current.getDate(),
    month: current.getMonth() + 1,
    year: current.getFullYear()
  };
}

function findNextDayPrompt() {
  const dStr = prompt("Nhập ngày (1-31):");
  if (dStr === null) return;
  const mStr = prompt("Nhập tháng (1-12):");
  if (mStr === null) return;
  const yStr = prompt("Nhập năm (ví dụ 2024):");
  if (yStr === null) return;

  const d = parseInt(dStr);
  const m = parseInt(mStr);
  const y = parseInt(yStr);

  const resultElem = document.getElementById("dateResult");

  if (isNaN(d) || isNaN(m) || isNaN(y) || m < 1 || m > 12 || d < 1 || d > 31) {
    alert("Dữ liệu ngày tháng năm không hợp lệ!");
    return;
  }

  const next = getNextDay(d, m, y);

  // Xuất ra tab console.log theo đúng yêu cầu đề bài
  console.log("=== CÂU 7: TÌM NGÀY KẾ TIẾP ===");
  console.log(`Ngày vừa nhập: ${d}/${m}/${y}`);
  console.log(`Ngày kế tiếp: ${next.day}/${next.month}/${next.year}`);

  // Hiển thị ra giao diện web
  resultElem.innerHTML = `
    Ngày vừa nhập: <strong>${d}/${m}/${y}</strong><br>
    Ngày kế tiếp là: <span class="badge success">${next.day}/${next.month}/${next.year}</span>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(findNextDayPrompt, 100);
});