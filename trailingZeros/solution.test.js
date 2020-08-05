const zeros= require('./solution');

test('num 0', () => {
  expect(zeros(0)).toBe(0);
});


test('num 5', () => {
  expect(zeros(5)).toBe(1);
});

test('num 15', () => {
  expect(zeros(15)).toBe(3);
});


test('num 20', () => {
  expect(zeros(20)).toBe(4);
});

test('num 30', () => {
  expect(zeros(30)).toBe(7);
});



test('num 101', () => {
  expect(zeros(101)).toBe(24);
});


test('num 1000', () => {
  expect(zeros(1000)).toBe(249);
});


test('num 100000', () => {
  expect(zeros(100000)).toBe(24999);
});

test('num 1000000', () => {
  expect(zeros(1000000)).toBe(249998);
})

test('num 10000000', () => {
  expect(zeros(10000000)).toBe(2499999);
})

test('num 100000000', () => {
  expect(zeros(100000000)).toBe(24999999);
})


test('num 1000000000', () => {
  expect(zeros(1000000000)).toBe(249999998);
})

