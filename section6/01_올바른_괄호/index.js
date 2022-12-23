function solution(s) {
  let leftBracket = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      leftBracket++;
    } else {
      if (leftBracket > 0) {
        leftBracket--;
      } else {
        return "NO";
      }
    }
  }

  if (leftBracket > 0) return "NO";
  else return "YES";
}

let a = "(()(()))(()";
console.log(solution(a));
