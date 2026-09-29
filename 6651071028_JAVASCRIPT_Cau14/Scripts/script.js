// Câu 14: Định nghĩa object Student gồm {Name, NumberID, Gender}
function Student(name, numberID, gender) {
  this.Name = name;
  this.NumberID = numberID;
  this.Gender = gender;
}

function displayStudent() {
  // Khởi tạo một đối tượng Student
  const student1 = new Student("Nguyễn Nhật Huy", "6651071028", "Nam");

  // In ra màn hình
  const profileContainer = document.getElementById("studentProfile");
  profileContainer.innerHTML = `
    <div class="avatar-badge">👨‍🎓</div>
    <div class="profile-info">
      <h3>${student1.Name}</h3>
      <p><strong>Mã số sinh viên (NumberID):</strong> ${student1.NumberID}</p>
      <p><strong>Giới tính (Gender):</strong> ${student1.Gender}</p>
    </div>
  `;

  // In ra console
  console.log("=== CÂU 14: THÔNG TIN ĐỐI TƯỢNG STUDENT ===");
  console.log(student1);
}

window.addEventListener("DOMContentLoaded", () => {
  displayStudent();
});