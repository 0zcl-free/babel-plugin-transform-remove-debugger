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