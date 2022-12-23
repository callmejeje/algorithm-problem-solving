function solution(str1, str2) {
  const strLength = str1.length;

  const str1Map = new Map();
  const str2Map = new Map();

  for (let i = 0; i < strLength; i++) {
    anagram(str1Map, str1[i]);
    anagram(str2Map, str2[i]);
  }

  let isAnagram = true;
  for (let [letter, count] of str1Map) {
    if (count !== str2Map.get(letter)) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram ? "YES" : "NO";
}

function anagram(strMap, str) {
  let letter = strMap.get(str);
  if (letter) {
    strMap.set(str, letter + 1);
  } else {
    strMap.set(str, 1);
  }
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

let c = "aDaCa";
let d = "Caaab";
console.log(solution(c, d));
