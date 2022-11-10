function solution(m, arr) {
  let sum = 0,
    cases = 0,
    i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (sum <= m) {
      cases++;
    }
    sum += arr[j];
    if (sum <= m) {
      cases++;
    }
    while (sum > m) {
      sum -= arr[i++];
      if (sum <= m) cases++;
    }
  }

  return cases;
}

let a = [1, 3, 1, 2, 3, 2];
console.log(solution(5, a));
