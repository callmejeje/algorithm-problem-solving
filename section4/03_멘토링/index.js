function solution(test) {
  let mentors = Array.from(new Set(test.map((el) => el[0])));
  let mentor,
    mentees = [];
  let students = test[0];
  let possible = 0;
  let canMentor;

  for (let i = 0; i < mentors.length; i++) {
    mentor = mentors[i];
    mentees = students.filter((el) => el !== mentor);

    for (let mentee of mentees) {
      canMentor = true;
      for (let j = 0; j < test.length; j++) {
        if (test[j].indexOf(mentor) > test[j].indexOf(mentee)) {
          canMentor = false;
          break;
        }
      }
      if (canMentor) {
        // console.log(mentor, mentee);
        possible++;
      }
    }
  }

  return possible;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
