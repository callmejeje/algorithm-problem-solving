function solution(k, arr) {
  let lt = 0,
    rt = k;
  let sum = arr.slice(0, k).reduce((prev, cur) => prev + cur);
  let max = sum;

  while (rt < arr.length) {
    sum = sum - arr[lt++] + arr[rt++];
    if (sum > max) {
      max = sum;
    }
    console.log(max, sum);
  }

  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
