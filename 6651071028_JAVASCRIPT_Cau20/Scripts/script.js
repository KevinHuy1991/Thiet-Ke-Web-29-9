// Câu 20: Minh hoạ Date hiển thị ngày giờ hiện tại của hệ thống
function getFormattedDateTime() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1; // Month bắt đầu từ 0
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Định dạng theo mẫu trang 4: "Ngày: 1/9/2023 Giờ: 11:50:53"
  const formatted = `Ngày: ${day}/${month}/${year} Giờ: ${hours}:${minutes}:${seconds}`;
  return { formatted, day, month, year, hours, minutes, seconds };
}

function showSystemDateTimeAlert() {
  const { formatted } = getFormattedDateTime();

  // 1. Xuất ra hộp thoại của trình duyệt
  alert(formatted);

  // 2. Xuất ra màn hình web
  const textElem = document.getElementById("alertDateText");
  if (textElem) {
    textElem.innerHTML = `<span class="badge highlight">${formatted}</span>`;
  }

  console.log("=== CÂU 20: NGÀY GIỜ HIỆN TẠI ===");
  console.log(formatted);
}

function updateLiveClock() {
  const { formatted, day, month, year, hours, minutes, seconds } = getFormattedDateTime();
  const liveClock = document.getElementById("liveClock");
  const liveDate = document.getElementById("liveDate");

  if (liveClock) liveClock.innerText = `${hours}:${minutes}:${seconds}`;
  if (liveDate) liveDate.innerText = `Ngày ${day} tháng ${month} năm ${year}`;
}

window.addEventListener("DOMContentLoaded", () => {
  setInterval(updateLiveClock, 1000);
  updateLiveClock();
  // Hiển thị alert theo yêu cầu đề bài
  setTimeout(showSystemDateTimeAlert, 200);
});