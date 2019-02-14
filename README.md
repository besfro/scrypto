# scrypto

> Cipher类加密数据

数据创建一个实例用于加密解密数据。加密数据输出'binary'、'hex'或'base64'格式


## Install

```
$ npm install scrypto
```


## Usage

```js
const crypt = require('scrypto')('secret key')

crypt.encrypt('aiyou aiyou')
//=> '85c1730658ed77d92cd233d27570c158'

crypt.decrypt(encrypt)
//=> 'aiyou aiyou'
```


## API

### encrypt(data)

#### decrypt(data)

Type: `Buffer` `string`


