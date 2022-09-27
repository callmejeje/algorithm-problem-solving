function solution(s) {
  let answer = "";
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    count++;
    if (s[i - 1] !== s[i]) {
      if (count > 1) answer += count;
      count = 0;
      if (s[i]) answer += s[i];
    }
  }
  return answer;
}

let str = "KKHSSSSSSSEEEE";
console.log(solution(str));
