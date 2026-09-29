// Câu 13: Liệt kê các số nguyên tố nhỏ hơn n
function checkPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function getPrimesLessThan(n) {
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function listPrimes() {
  const n = parseInt(document.getElementById("limitN").value);
  if (isNaN(n) || n <= 2) {
    alert("Vui lòng nhập n là số nguyên lớn hơn 2!");
    return;
  }

  const primes = getPrimesLessThan(n);
  const stats = document.getElementById("primeStats");
  const container = document.getElementById("primesContainer");

  stats.innerHTML = `Có <strong>${primes.length}</strong> số nguyên tố nhỏ hơn <strong>${n}</strong>:`;
  container.innerHTML = primes.map(p => `<span class="num-chip prime-chip">${p}</span>`).join("");

  console.log(`[Câu 13] Các số nguyên tố < ${n}: ${primes.join(", ")}`);
}

window.addEventListener("DOMContentLoaded", () => {
  listPrimes();
});