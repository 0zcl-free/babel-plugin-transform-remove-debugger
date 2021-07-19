const babel = require("@babel/core")
const plugin = require('../src/index')

it('test1', () => {
  const example = `
  console.log('a')
  debugger
  console.log('b')
  debugger;
  console.log('c')
  `
  const { code } = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
})


// 快照测试 https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-unit-testing