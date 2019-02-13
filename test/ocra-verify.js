import test from 'ava';
import ocra from '../index';

test('OCRA mock test result', (t) => {
  const result = ocra.ocra('ocraDefinition', 'question', 'password');
  console.log('mock result = ', result);
  t.is(result, '123');
});
