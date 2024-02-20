import { isNumber } from '../../helpers/isNumber';
import { isBigerThen0 } from '../../helpers/isBiggerThen0';
import { isLowerThen100 } from '../../helpers/isLowerThen100';

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if (!input.value) return (result.innerHTML = 'type something');
    if (isNumber(input.value)) {
      if (isBigerThen0(input.value) && isLowerThen100(input.value)) {
        result.innerHTML = 'Valid';
      } else {
        result.innerHTML = 'Invalid';
      }
    } else {
      result.innerHTML = 'Invalid sign';
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
