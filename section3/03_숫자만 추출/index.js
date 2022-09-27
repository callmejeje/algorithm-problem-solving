function solution(str) {
  return +str.replace(/[^0-9]/g, "");
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
