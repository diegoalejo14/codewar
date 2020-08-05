const sumStrings= require('./solutions');

test('Case 1', () => {
  expect(sumStrings('123','456')).toBe('579')
})


test('Case 2', () => {
  expect(sumStrings('00103','08567')).toBe('8670')
})

