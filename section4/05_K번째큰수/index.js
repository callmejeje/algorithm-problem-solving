function solution(n, k, card) {
  let sums = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let m = j + 1; m < n; m++) {
        sums.add(card[i] + card[j] + card[m]);
      }
    }
  }
  sums = Array.from(sums).sort((a, b) => b - a);

  return sums[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
