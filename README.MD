# TDD - Mocha.js

> Javascrip 测试框架，支持TDD，BDD等多种接口

Mocha.js是被广泛使用的Javascript测试框架，官网：[http://mochajs.org/](http://mochajs.org/)

官方对其的定义是：

> Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing
> simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught
> exceptions to the correct test cases.

使用Mocha.js，可以写测试用例，并跑用例来得到结果，同时还支持多种格式的Report来显示结果。支持TDD，BDD等接口，是TDD开发过程中的好帮手。
由于TDD和BDD，Mocha提供的接口不同，这里我的例子主要是使用TDD。

**首先要安装Mocha.js，可通过NPM**

```bash
npm install -g mocha
```

安装好后，可使用mocha命令来使用mocha提供的功能。
例如`mocha -h`可查看命令帮助，如下。

![](https://raw.githubusercontent.com/sokis/mocha-test/master/assets/b860940c-b642-465d-8621-0eedee09e5d8.jpg)

几个重要的接口：
 * **suite**：定义一组测试用例。
 * **suiteSetup**：此方法会在这个suite所有测试用例执行前执行一次，只一次，这是跟setup的区别。
 * **setup**：此方法会在每个测试用例执行前都执行一遍。
 * **test**：具体执行的测试用例实现代码。
 * **teardown**：此方法会在每个测试用例执行后都执行一遍，与setup相反。
 * **suiteTeardown**：此方法会在这个suite所有测试用例执行后执行一次，与suiteSetup相反。

测试用例代码如下：

环境配置

```
npm install babel-core babel-preset-es2015 mocha -S
```

.babelrc

```
{ "presets": [ "es2015" ]}
```

mocha.test.js

```js
import assert from 'assert';
import mocha from 'mocha';

global.assert = assert;
global.suite = mocha.suite;
global.suiteSetup = mocha.suiteSetup;
global.setup = mocha.setup;
global.test = mocha.test;

//test case
suite('Array', () => {
 suiteSetup(() => { 
   //suiteSetup will run only 1 time in suite Array, before all suite 
   console.log('suitSetup...');
 });
 setup(() => {
   //setup will run 1 time before every suite runs in suite Array 
   console.log('steup..'); 
  });
 suite('indexOf()', () => { 
    test('should return -1 when not present', () => { 
        assert.equal(-1, [1, 2, 3].indexOf(4)); 
    }) 
  });
});
```

run

```
./node_modules/.bin/_mocha mocha.test.js --compilers js:babel-register
```
