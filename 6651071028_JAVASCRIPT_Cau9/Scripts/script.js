// Câu 9: Viết hoa chữ cái đầu tiên của mỗi từ (dùng toUpperCase())
function capitalizeWords(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map(word => {
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function handleCapitalize() {
  const input = document.getElementById("strInput");
  const original = input.value;
  const capitalized = capitalizeWords(original);

  const resultElem = document.getElementById("capResult");
  resultElem.innerHTML = `<span class="badge success">${capitalized}</span>`;

  console.log("=== CÂU 9: VIẾT HOA CHỮ CÁI ĐẦU ===");
  console.log(`Chuỗi gốc: "${original}"`);
  console.log(`Kết quả:   "${capitalized}"`);
}

function testString(text) {
  document.getElementById("strInput").value = text;
  handleCapitalize();
}

window.addEventListener("DOMContentLoaded", () => {
  handleCapitalize();
});