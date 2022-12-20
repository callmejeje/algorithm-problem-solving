function solution(s) {
  let vote = new Map();

  for (let i = 0, count; i < s.length; i++) {
    count = vote.get(s[i]);
    if (count) {
      vote.set(s[i], count + 1);
    } else {
      vote.set(s[i], 1);
    }
  }

  let max = 0;
  let elected;
  for (let [student, count] of vote) {
    if (count > max) {
      elected = student;
      max = count;
    }
  }

  return elected;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
