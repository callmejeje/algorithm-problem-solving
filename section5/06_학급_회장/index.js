function solution(s) {
  let vote = new Map();

  for (let student of s) {
    let count = vote.get(student);
    if (count) {
      vote.set(student, count + 1);
    } else {
      vote.set(student, 1);
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
