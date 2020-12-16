import CodeEncode from './CodeEncode.js'


test('без второго аргумента должна выводить ошибку', () => {
  expect(() => CodeEncode('testmodule')).toThrow();
});
test('без первого аргумента должна выводить ошибку', () => {
  expect(() => CodeEncode(undefined, 'load')).toThrow();
  expect(() => CodeEncode(null, 'load')).toThrow();
})
test('тест на правильный ответ CodeEncode', () => {
    expect(CodeEncode("молоко", 3)).toEqual("псоснс");
    expect(CodeEncode("псоснс", -3)).toEqual("молоко");
  });
test('тест на неправильный ответ CodeEncode', () => {
  expect(CodeEncode("орнрмр", -3)).toEqual("молоко");
  
});
    
  