import readlineSync from 'readline-sync';

import welcome from './cli.js';

export default function game(gameTask, question) {
  console.log(gameTask);

  const username = welcome();

  for (let i = 0; i < 3; i += 1) {
    const [random, answer] = question();

    console.log(`Question: ${random}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct! ');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);

      console.log(`Let's try again, ${username}!`);

      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
}
