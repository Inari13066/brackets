module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str.split("");
  for (let b = 0; b < bracketsConfig.length; b++) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == bracketsConfig[b][0]) {
        for (let j = i; j < str.length; j++) {
          if (str[j] == bracketsConfig[b][1]) {
            if ((j - i) % 2 != 0) {
              str.splice(i, 1, "");
              str.splice(j, 1, "");
              break;
            }
          }
        }
      }
    }
  }
  console.log(str);
  for (let b = 0; b < bracketsConfig.length; b++) {
    if (str.includes(bracketsConfig[b][0])) {
      return false;
    } else if (str.includes(bracketsConfig[b][1])) {
      return false;
    }
  }
  return true;
};
