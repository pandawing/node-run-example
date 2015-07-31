# run-example

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save run-example
```


## Usage

```js
var runExample = require('run-example');

runExample('unicorns');
//=> unicorns & rainbows
```



## CLI

```
$ npm install --global run-example
```
```
$ run-example --help

  Usage
    run-example [input]

  Example
    run-example
    unicorns & rainbows

    run-example ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```



## API

### runExample(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/run-example
[travis-image]: https://img.shields.io/travis/sanemat/run-example/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/run-example/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/run-example/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/run-example
[npm-image]: https://img.shields.io/npm/v/run-example.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/run-example
[daviddm-image]: https://img.shields.io/david/sanemat/run-example.svg?style=flat-square
