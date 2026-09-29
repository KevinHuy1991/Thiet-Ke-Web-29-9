// Câu 21: Áp dụng Date xác định thứ trong tuần của một ngày cụ thể
const dayNamesVietnamese = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy"
];

function getVietnameseDayOfWeek(dateObj) {
  const dayIndex = dateObj.getDay(); // 0: Chủ Nhật, 1: Thứ Hai, ..., 6: Thứ Bảy
  return dayNamesVietnamese[dayIndex];
}

function checkDayOfWeek() {
  const input = document.getElementById("targetDate").value;
  if (!input) {
    alert("Vui lòng chọn ngày!");
    return;
  }

  // Tách yyyy-mm-dd để tránh lỗi timezone
  const parts = input.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const dateObj = new Date(year, month, day);
  const dayOfWeek = getVietnameseDayOfWeek(dateObj);

  const resElem = document.getElementById("dayOfWeekResult");
  resElem.innerHTML = `
    Ngày <strong>${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}</strong> là: 
    <span class="badge highlight">${dayOfWeek}</span>
  `;

  console.log(`[Câu 21] Ngày ${day}/${month + 1}/${year} là: ${dayOfWeek}`);
}

function testDate(d) {
  document.getElementById("targetDate").value = d;
  checkDayOfWeek();
}

window.addEventListener("DOMContentLoaded", () => {
  checkDayOfWeek();
});