const babel = require("@babel/core")
const plugin = require('../src/index')

it('test2', () => {
  const example = `
  console.log('a');debugger;
  console.log('b')
  debugger;
  console.log('c')
  `
  const { code } = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
})