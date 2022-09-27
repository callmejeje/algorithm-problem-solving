function solution(s, t) {
  let answer = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === t) {
        answer[i] = Math.abs(i - j);
        break;
      }
    }
    for (let j = i; j >= 0; j--) {
      if (s[j] === t) {
        if (answer[i] > Math.abs(i - j)) answer[i] = Math.abs(i - j);
        break;
      }
    }
  }
  return answer.join(" ").trim();
}

let str = "teachermode";
console.log(solution(str, "e"));
