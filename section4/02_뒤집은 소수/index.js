function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(length, nums) {
  let answer = "";
  let reverse;

  for (let i = 0; i < length; i++) {
    reverse = +String(nums[i]).split("").reverse().join("");
    if (isPrime(reverse)) answer += reverse + " ";
  }

  return answer.trim();
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
