import { getRandomNumber, getRandomIntInclusive } from '../util.js';
import game from '../index.js';

const gameTask = 'What number is missing in the progression?';

const expression = () => {
  const randomSum = getRandomNumber(10);
  const randomLength = getRandomIntInclusive(5, 15);
  const arrayExpression = Array.from({
    length: Math.ceil(randomLength),
  }, (_, i) => (i + 1) * randomSum);
  const randomItem = arrayExpression[Math.floor(Math.random() * arrayExpression.length)];
  arrayExpression[arrayExpression.indexOf(randomItem)] = '..';
  const expressionString = arrayExpression.join(' ');
  return [expressionString, String(randomItem)];
};
export default function brainProgression() {
  game(gameTask, expression);
}
