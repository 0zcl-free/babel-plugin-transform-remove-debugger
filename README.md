## babel-plugin-remove-debugger
this plugin for removing debugger statements


## Usage
```js
{
  "plugins": ["remove-debugger"]
}
```

## Via Node API
```js
const babel = require("@babel/core")
it('test1', () => {
  const example = `
  console.log('a')
  debugger
  console.log('b')
  debugger;
  console.log('c')
  `
  const { code } = babel.transform(example, {plugins: [plugin]});
})
```

参考：
[深入浅出 Babel 上篇：架构和原理 + 实战](https://bobi.ink/2019/10/01/babel/)
[astexplorer](https://astexplorer.net/)
[Babel插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

