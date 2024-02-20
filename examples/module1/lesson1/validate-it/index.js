import { isNumber } from '../../helpers/isNumber';
import { isBigerThen } from '../../helpers/isBiggerThen';
import { isLowerThen } from '../../helpers/isLowerThen';

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if (!input.value) return (result.innerHTML = 'type something');
    const value = Number(input.value);
    if (isNumber(value) && isBigerThen(value, 0) && isLowerThen(value, 100)) {
      result.innerHTML = 'Valid';
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
