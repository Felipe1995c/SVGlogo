import { Circle, Square, Triangle } from './shapes.js';

test('Circle renders correctly', () => {
  const shape = new Circle('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
  const shape = new Square('blue');
  expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="blue" />');
});

test('Triangle renders correctly', () => {
  const shape = new Triangle('green');
  expect(shape.render()).toBe('<polygon points="150,10 290,290 10,290" fill="green" />');
});