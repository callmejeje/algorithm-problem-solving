function solution(m, product) {
  // 상품 가격 50% 할인을 모든 상품에 적용시켜 보기
  let max = 0,
    nowMax;
  let saledProduct = product.slice();
  let sortedProduct;
  let sum;

  for (let i = 0; i < product.length; i++) {
    (nowMax = 0), (sum = 0);
    saledProduct[i][0] = saledProduct[i][0] / 2;
    if (i > 0) saledProduct[i - 1][0] = saledProduct[i - 1][0] * 2;
    sortedProduct = saledProduct
      .slice()
      .sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let j = 0; j < sortedProduct.length; j++) {
      sum += sortedProduct[j][0] + sortedProduct[j][1];
      nowMax++;
      if (sum === m) {
        break;
      } else if (sum > m) {
        sum -= sortedProduct[j][0] + sortedProduct[j][1];
        nowMax--;
        break;
      }
    }
    if (nowMax > max) {
      max = nowMax;
    }
  }

  return max;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
