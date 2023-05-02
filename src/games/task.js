import readlineSync from 'readline-sync';

import welcome from '../cli.js';

// eslint-disable-next-line import/no-named-as-default
import getRandomIntInclusive from '../util.js';

const isEven = (number) => (number % 2 === 0);

const task = () => {
  const name = welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);

      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default task;
