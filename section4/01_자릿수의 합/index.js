function solution(n, arr) {
  let sum = 0,
    answer = 0,
    maxSum = 0;
  for (let i = 0; i < n; i++) {
    sum = String(arr[i])
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);

    if (sum >= maxSum && arr[i] > answer) {
      maxSum = sum;
      answer = arr[i];
    }
  }

  return answer;
}

let arr = [1235, 128, 460, 603, 40, 521, 137, 123];
console.log(solution(8, arr));
