import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
  const minimal = Math.ceil(min);

  const maximal = Math.floor(max);

  return Math.floor(Math.random() * (maximal - minimal + 1)) + minimal;
}

export default getRandomIntInclusive;

const askUserAnswer = () => {
  const userAnswer = readlineSync.question('Answer: ');

  return userAnswer;
};

const areUserRight = (answer, correctAnswer, name) => {
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');

    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);

  return false;
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getRandomNumber = (number = 100) => Math.floor(Math.random() * number);

export {

  gcd,

  getRandomIntInclusive,

  askUserAnswer,

  areUserRight,

  getRandomNumber,
};
