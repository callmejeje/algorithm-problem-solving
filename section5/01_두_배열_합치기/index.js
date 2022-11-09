function solution(arr1, arr2) {
  let sorted = [];
  let length1 = arr1.length;
  let length2 = arr2.length;
  let i = (j = 0);
  while (i < length1 && j < length2) {
    if (arr1[i] <= arr2[j]) {
      sorted.push(arr1[i++]);
    } else {
      sorted.push(arr2[j++]);
    }
  }
  if (i === length1) {
    sorted.push(...arr2.slice(j));
  } else {
    sorted.push(...arr1.slice(i));
  }
  return sorted;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
