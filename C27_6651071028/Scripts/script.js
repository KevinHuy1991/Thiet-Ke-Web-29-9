// Câu 27: Xóa dòng tương ứng khi nhấn nút Xóa
function deleteRow(buttonElement) {
  // Tìm thẻ tr cha chứa nút Xóa
  const row = buttonElement.closest("tr");
  if (row) {
    // Hiệu ứng mờ dần nhẹ trước khi xóa
    row.style.transition = "opacity 0.25s, transform 0.25s";
    row.style.opacity = "0";
    row.style.transform = "translateX(20px)";
    setTimeout(() => {
      row.remove();
      console.log("[Câu 27] Đã xóa 1 dòng thành công.");
    }, 250);
  }
}

function updateRowTotal(inputElem) {
  const row = inputElem.closest("tr");
  const qty = parseFloat(row.querySelector(".qty-input").value) || 0;
  const price = parseFloat(row.querySelector(".price-input").value) || 0;
  row.querySelector(".row-total").innerText = qty * price;
}

function addRow() {
  const tbody = document.querySelector("#productTable tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input type="number" class="qty-input" value="1" onchange="updateRowTotal(this)"></td>
    <td><input type="number" class="price-input" value="100000" onchange="updateRowTotal(this)"></td>
    <td class="row-total">100000</td>
    <td>
      <button type="button" class="btn btn-delete" onclick="deleteRow(this)">Xóa</button>
    </td>
  `;
  tbody.appendChild(newRow);
}

function resetTable() {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = `
    <tr>
      <td><input type="number" class="qty-input" value="2" onchange="updateRowTotal(this)"></td>
      <td><input type="number" class="price-input" value="1000000" onchange="updateRowTotal(this)"></td>
      <td class="row-total">2000000</td>
      <td>
        <button type="button" class="btn btn-delete" onclick="deleteRow(this)">Xóa</button>
      </td>
    </tr>
    <tr>
      <td><input type="number" class="qty-input" value="1" onchange="updateRowTotal(this)"></td>
      <td><input type="number" class="price-input" value="500000" onchange="updateRowTotal(this)"></td>
      <td class="row-total">500000</td>
      <td>
        <button type="button" class="btn btn-delete" onclick="deleteRow(this)">Xóa</button>
      </td>
    </tr>
  `;
}