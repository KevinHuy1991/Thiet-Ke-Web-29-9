// Câu 24: Xuất thứ trong tuần khi biết ngày, tháng, năm bằng đối tượng Date
const weekDays = [
  "Chủ nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7"
];

function displayWeekday() {
  const day = parseInt(document.getElementById("inputDay").value, 10);
  const month = parseInt(document.getElementById("inputMonth").value, 10);
  const year = parseInt(document.getElementById("inputYear").value, 10);
  const outputElem = document.getElementById("weekdayOutput");

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Vui lòng nhập ngày, tháng, năm hợp lệ!");
    return;
  }

  // Khởi tạo đối tượng Date (lưu ý: tháng trong JS từ 0 đến 11)
  const dateObj = new Date(year, month - 1, day);

  // Phương thức getDay() trả về 0 (Chủ nhật) đến 6 (Thứ 7)
  const dayIndex = dateObj.getDay();
  const dayStr = weekDays[dayIndex];

  // Định dạng xuất ra theo mẫu đề bài: "Thứ 2 Ngày 12 tháng 1 năm 2015"
  const formattedResult = `${dayStr} Ngày ${day} tháng ${month} năm ${year}`;
  outputElem.innerText = formattedResult;

  console.log(`[Câu 24] ${formattedResult}`);
}

window.addEventListener("DOMContentLoaded", () => {
  displayWeekday();
});