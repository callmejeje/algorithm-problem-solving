function solution(m, arr) {
  let sum = (cases = 0);
  let i = (j = 0);

  while (j < arr.length) {
    if (sum + arr[j] < m) {
      sum += arr[j++];
      continue;
    } else if (sum + arr[j] === m) {
      sum += arr[j++];
      cases++;
    }
    sum -= arr[i++];
  }

  return cases;
}

let a = [1, 1, 1, 1, 4, 1, 1];
console.log(solution(6, a));
