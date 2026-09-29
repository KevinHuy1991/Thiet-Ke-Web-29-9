// Câu 15: Thao tác với đối tượng User
function processUserSteps() {
  const timeline = document.getElementById("userTimeline");

  // Khởi tạo đối tượng User u
  const u = {
    Name: "Max",
    Age: 20
  };

  let html = "";

  // a) In ra thông tin của đối tượng u
  html += `
    <div class="step-card">
      <h4>a) Thông tin ban đầu của đối tượng u:</h4>
      <pre><code>${JSON.stringify(u, null, 2)}</code></pre>
      <p>Tên: <strong>${u.Name}</strong>, Tuổi: <strong>${u.Age}</strong></p>
    </div>
  `;
  console.log("Câu 15a - u ban đầu:", { ...u });

  // b) Thêm vào đối tượng u thuộc tính Surname với giá trị "Lee"
  u.Surname = "Lee";
  html += `
    <div class="step-card">
      <h4>b) Sau khi thêm thuộc tính Surname = "Lee":</h4>
      <pre><code>${JSON.stringify(u, null, 2)}</code></pre>
      <p>Họ và tên: <strong>${u.Surname} ${u.Name}</strong></p>
    </div>
  `;
  console.log("Câu 15b - sau khi thêm Surname:", { ...u });

  // c) Thay đổi giá trị thuộc tính Age thành 30
  u.Age = 30;
  html += `
    <div class="step-card highlight-step">
      <h4>c) Sau khi thay đổi Age = 30:</h4>
      <pre><code>${JSON.stringify(u, null, 2)}</code></pre>
      <p>Họ tên: <strong>${u.Surname} ${u.Name}</strong>, Tuổi mới: <span class="badge highlight">${u.Age}</span></p>
    </div>
  `;
  console.log("Câu 15c - sau khi sửa Age:", { ...u });

  timeline.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", () => {
  processUserSteps();
});