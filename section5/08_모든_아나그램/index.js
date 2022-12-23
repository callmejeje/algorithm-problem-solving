function solution(s, t) {
  let count = 0;
  let sMap = new Map();
  let tMap = new Map();
  let prev;

  // tMap 만들기
  for (let i = 0; i < t.length; i++) {
    makeMap(tMap, t[i]);
  }

  for (let i = 0; i < s.length; i++) {
    makeMap(sMap, s[i]);
    if (i >= t.length) {
      prev = sMap.get(s[i - t.length]);
      if (prev === 1) sMap.delete(s[i - t.length]);
      else sMap.set(s[i - t.length], prev - 1);
    }
    if (compareMaps(sMap, tMap)) count++;
  }

  return count;
}

function makeMap(strMap, str) {
  let letter = strMap.get(str);
  if (letter !== undefined) {
    strMap.set(str, letter + 1);
  } else {
    strMap.set(str, 1);
  }
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [letter, count] of map2) {
    if (count !== map1.get(letter)) {
      return false;
    }
  }
  return true;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
