import readlineSync from 'readline-sync';

import welcome from '../cli.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeGame = () => {
  const name = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  const roundsCount = 3;
  let correctAnswersCount = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer -_-. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}! You won!\nYour score: ${correctAnswersCount}/${roundsCount}`);
};

export default playPrimeGame;
