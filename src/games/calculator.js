import welcome from '../cli.js';

import { getRandomIntInclusive, askUserAnswer } from '../util.js';

const getCalcAnswerAndQuestion = (number1, number2) => {
  const selector = getRandomIntInclusive(0, 2);

  let answer = 0;

  let question = '';

  switch (selector) {
    case 0:

      answer = number1 + number2;

      question = `${number1} + ${number2}`;

      break;

    case 1:

      answer = number1 - number2;

      question = `${number1} - ${number2}`;

      break;

    case 2:

      answer = number1 * number2;

      question = `${number1} * ${number2}`;

      break;

    default:

      break;
  }

  return [answer, question];
};

const NUMBER_OF_QUESTIONS = 3;

const calculator = () => {
  const name = welcome();
  console.log('What is the result of the expression?');

  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const num1 = getRandomIntInclusive(1, 100);

    const num2 = getRandomIntInclusive(1, 100);

    const [answer, question] = getCalcAnswerAndQuestion(num1, num2);

    console.log(`Question: ${question}`);

    const userAnswer = askUserAnswer();

    if (`${userAnswer}` === `${answer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);

      console.log(`Let's try again, ${name}!`);

      return null;
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default calculator;
