// Câu 16: Đối tượng HinhTru
function processCylinder() {
  const HinhTru = {
    radius: 10,
    height: 15,
    // Hàm tính thể tích: V = pi * r^2 * h
    getVolume: function() {
      return Math.PI * Math.pow(this.radius, 2) * this.height;
    },
    // Hàm tính diện tích toàn phần: Stp = 2*pi*r*h + 2*pi*r^2 = 2*pi*r*(h + r)
    getTotalSurfaceArea: function() {
      return 2 * Math.PI * this.radius * (this.height + this.radius);
    }
  };

  const container = document.getElementById("cylinderResults");
  let html = "";

  // a) Thể tích ban đầu (radius = 10, height = 15)
  const volumeA = HinhTru.getVolume();
  html += `
    <div class="step-card">
      <h4>a) Thể tích hình trụ ban đầu (r = ${HinhTru.radius}, h = ${HinhTru.height}):</h4>
      <p>Công thức: <code>V = π × r² × h = π × ${HinhTru.radius}² × ${HinhTru.height}</code></p>
      <p>Thể tích V = <span class="badge highlight">${volumeA.toFixed(2)}</span> (đvtt)</p>
    </div>
  `;
  console.log(`[Câu 16a] Thể tích ban đầu: ${volumeA.toFixed(2)}`);

  // b) Cập nhật height = 30 và tính diện tích toàn phần
  HinhTru.height = 30;
  const areaB = HinhTru.getTotalSurfaceArea();
  html += `
    <div class="step-card highlight-step">
      <h4>b) Sau khi cập nhật height = 30:</h4>
      <p>Thông số mới: Bán kính r = ${HinhTru.radius}, Chiều cao h = ${HinhTru.height}</p>
      <p>Công thức diện tích toàn phần: <code>S_tp = 2πr(h + r) = 2 × π × ${HinhTru.radius} × (${HinhTru.height} + ${HinhTru.radius})</code></p>
      <p>Diện tích toàn phần S_tp = <span class="badge success">${areaB.toFixed(2)}</span> (đvdt)</p>
    </div>
  `;
  console.log(`[Câu 16b] Diện tích toàn phần (h=30): ${areaB.toFixed(2)}`);

  container.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", () => {
  processCylinder();
});