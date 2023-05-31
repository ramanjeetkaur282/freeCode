var numDecodings = function (s) {
  if (s.charAt(0) === "0") return 0;
  let n = s.length;
  let one = 1;
  let two = 1;
  for (let i = 1; i < n; i++) {
    let current = 0;
    if (s.charAt(i) !== "0") {
      current += oneway;
      console.log(one);
    }
    let twoDigits = parseInt(s.substring(i - 1, i + 1));
    if (twoDigits >= 10 && twoDigits < 27) {
      current += two;
    }
    two = one;
    console.log(two);
    current = one;
  }
  console.log(current);
  return one;
};
