module.exports = function reverse (n) {
    if (n<0){
        n = +String(n).split('').slice(1).join('');
        return Number(String(n).split('').reverse().join(''));
    }
  return Number(String(n).split('').reverse().join(''));
}
