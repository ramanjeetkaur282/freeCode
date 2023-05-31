"Use strict";

var distribution = function (arr, visit) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    let mn = Math.min(...arr);
    if (arr[i] - mn !== 0) {
      a.push(arr[i] - mn);
    }
  }
  if (a.length !== 0) {
    visit = distribution(a, visit) + 1;
  }
  console.log(visit);
  return visit;
};

distribution([3, 2, 5, 6]);
