module.exports = function zeros(expression) {
  // your solution
  const arrOfDoubleFac = expression.split('*').filter(el => el.match(/[0-9]\!!/g)).map(el => +el.replace('!!', ''));
  const arrOfSingleFac = expression.split('*').filter(el => el.match(/[0-9]\!(?!\!)/)).map(el => +el.replace('!', ''));

  countTwo = (num) => {
    let numTwos = 0;
    while (num !== 0) {
      numTwos += Math.floor(num / 2);
      num = Math.floor(num / 2);
    }
    return numTwos;
  }

  countFive = (num) => {
    let numFives = 0;
    while (num !== 0) {
      numFives += Math.floor(num / 5);
      num = Math.floor(num / 5);
    }
    return numFives;
  }

  countTen = (num) => {
    let numTens = 0;
    while (num !== 0) {
      numTens += Math.floor(num / 10);
      num = Math.floor(num / 10)
    }
    return numTens + countFive(numTens) + countFive(countFive(numTens));
  }

  countHundred = (num) => {
    let numHundred = 0;
    while (num !== 0) {
      numHundred += Math.floor(num / 100);
      num = Math.floor(num / 100)
    }
    return numHundred + countTen(numHundred);
  }

  let numOfTwo = arrOfSingleFac.reduce((sum, el) => sum + countTwo(el), 0) +
    arrOfDoubleFac.filter(el => el % 2 === 0).reduce((sum, el) => sum + countTwo(el), 0);

  let numOfFive = arrOfSingleFac.reduce((sum, el) => sum + countFive(el), 0) +
    arrOfDoubleFac.filter(el => el % 2 !== 0).reduce((sum, el) => sum + countFive(el), 0) -
    arrOfDoubleFac.filter(el => el % 2 !== 0).reduce((sum, el) => sum + countTen(el), 0) -
    arrOfDoubleFac.filter(el => el % 2 === 0).reduce((sum, el) => sum + countHundred(el), 0) +
    arrOfDoubleFac.filter(el => el % 2 === 0).reduce((sum, el) => sum + countTen(el), 0);

  return Math.min(numOfTwo, numOfFive);

}