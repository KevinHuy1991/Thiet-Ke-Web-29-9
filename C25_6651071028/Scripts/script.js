// Câu 25: Tính tiền món ăn với phụ thu ban đêm
const itemNames = {
  BunBo: "Bún bò",
  HuTieu: "Hủ tiếu",
  BanhCanh: "Bánh canh",
  PhoBo: "Phở bò",
  Nuoi: "Nuôi",
  BanhMiThit: "Bánh mì thịt",
  BanhCuon: "Bánh cuốn",
  CaPheDa: "Cà phê đá",
  CaPheSua: "Cà phê sữa",
  ChanhDay: "Chanh dây",
  ChanhMuoi: "Chanh muối",
  XiMuoi: "Xí muội",
  SuaTuoi: "Sữa tươi",
  CamVat: "Cam vắt"
};

function calculateBill() {
  const foodSelect = document.getElementById("foodSelect");
  const drinkSelect = document.getElementById("drinkSelect");
  const isNight = document.querySelector('input[name="timePeriod"]:checked').value === "night";

  const selectedItems = [];
  let subtotal = 0;

  // Lấy các món ăn đã chọn
  for (let i = 0; i < foodSelect.options.length; i++) {
    const opt = foodSelect.options[i];
    if (opt.selected) {
      const [key, priceStr] = opt.value.split("|");
      const price = parseInt(priceStr, 10);
      selectedItems.push({ name: itemNames[key] || opt.text, price });
      subtotal += price;
    }
  }

  // Lấy các thức uống đã chọn
  for (let i = 0; i < drinkSelect.options.length; i++) {
    const opt = drinkSelect.options[i];
    if (opt.selected) {
      const [key, priceStr] = opt.value.split("|");
      const price = parseInt(priceStr, 10);
      selectedItems.push({ name: itemNames[key] || opt.text, price });
      subtotal += price;
    }
  }

  // Phụ thu ban đêm nếu có (+10%)
  const surcharge = isNight ? Math.round(subtotal * 0.1) : 0;
  const grandTotal = subtotal + surcharge;

  // Render ra bảng hóa đơn
  const tbody = document.getElementById("billItemsBody");
  let rowsHtml = "";

  selectedItems.forEach(item => {
    rowsHtml += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
      </tr>
    `;
  });

  if (isNight && surcharge > 0) {
    rowsHtml += `
      <tr class="surcharge-row">
        <td><em>Phụ thu ban đêm (10%)</em></td>
        <td>${surcharge}</td>
      </tr>
    `;
  }

  tbody.innerHTML = rowsHtml;
  document.getElementById("billTotalAmount").innerText = `${grandTotal} đồng`;

  console.log("=== CÂU 25: HÓA ĐƠN ===", { selectedItems, subtotal, surcharge, grandTotal });
}

window.addEventListener("DOMContentLoaded", () => {
  calculateBill();
});