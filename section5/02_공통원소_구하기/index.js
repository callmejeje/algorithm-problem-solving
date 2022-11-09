function solution(arr1, arr2) {
  let common = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = (j = 0);
  let length1 = arr1.length;
  let length2 = arr2.length;

  while (i < length1 && j < length2) {
    if (arr1[i] === arr2[j]) {
      common.push(arr1[i]);
      i++, j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return common;
}

let a = [1, 3, 9, 5, 2, 7];
let b = [3, 2, 5, 7, 8, 1, 11, 9];
console.log(solution(a, b));
