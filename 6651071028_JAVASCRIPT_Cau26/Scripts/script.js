// Câu 26: Tính can chi từ năm dương lịch có validate
const CAN_LIST = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
const CHI_LIST = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

function calculateCanChi() {
  const yearInput = document.getElementById("solarYear");
  const resultInput = document.getElementById("lunarYear");
  const msgElem = document.getElementById("canchiMsg");

  const val = yearInput.value.trim();

  // Validate kiểm tra rỗng
  if (val === "") {
    msgElem.innerHTML = `<span class="badge danger">Lỗi: Vui lòng nhập năm dương lịch!</span>`;
    resultInput.value = "";
    yearInput.focus();
    return;
  }

  // Validate kiểm tra chỉ chứa số nguyên
  if (!/^\d+$/.test(val)) {
    msgElem.innerHTML = `<span class="badge danger">Lỗi: Năm dương lịch phải là số nguyên dương!</span>`;
    resultInput.value = "";
    yearInput.focus();
    return;
  }

  const year = parseInt(val, 10);
  if (year <= 0) {
    msgElem.innerHTML = `<span class="badge danger">Lỗi: Năm phải lớn hơn 0!</span>`;
    resultInput.value = "";
    return;
  }

  // Xóa thông báo lỗi nếu hợp lệ
  msgElem.innerHTML = "";

  // Thuật toán Can Chi:
  // Can: Canh(0), Tân(1), ..., Giáp(4), Ất(5) -> theo số cuối năm dương lịch (year % 10)
  const canIndex = ((year % 10) + 10) % 10;
  const can = CAN_LIST[canIndex];

  // Chi: 12 con giáp, (year - 4) % 12
  const chiIndex = (((year - 4) % 12) + 12) % 12;
  const chi = CHI_LIST[chiIndex].toLowerCase(); // Để hiển thị "Ất mùi" đúng mẫu đề bài

  const canChi = `${can} ${chi}`;
  resultInput.value = canChi;

  console.log(`[Câu 26] Năm ${year} âm lịch là: ${canChi}`);
}

window.addEventListener("DOMContentLoaded", () => {
  calculateCanChi();
});