const c = require("crypto");

class Crypt {
  constructor(key = 'scrypto', iv = 'scryptiv') {

  	const buffer = Buffer.from;
  	const keyBuf = buffer(this.randomStr(key, 192/8))
  	const ivBuf = buffer(this.randomStr(iv))

  	this.getParams = () => {
  		return {
	  		key: keyBuf,
		    iv: ivBuf,
		    alg: "aes192",
		    encrypt: "utf8",
		    decrypt: "hex"
	  	}
  	}
  }

  encrypt(data) {
    if (!this.checkedType(data)) {
      return;
    }
    const pars = this.getParams();
    const cipher = c.createCipheriv(pars.alg, pars.key, pars.iv);
    var cryptoed = cipher.update(data, pars.encrypt, pars.decrypt);
    return cryptoed += cipher.final(pars.decrypt);
  }

  decrypt(data, newkey) {
    if (!this.checkedType(data)) {
      return;
    }
    const pars = this.getParams();
    const decipher = c.createDecipheriv(pars.alg, pars.key, pars.iv);
    var cryptoed = decipher.update(data, pars.decrypt, pars.encrypt);
    return cryptoed += decipher.final(pars.encrypt);
  }

  checkedType(data) {
    if (typeof data !== "string" && !Buffer.isBuffer(data)) {
      throw new TypeError("Expected a Buffer or String");
      return false;
    }
    return true;
  }

  randomStr(input, len = 16) {
  	const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  	var result = '';
  	for(let i = len; i > 0; i--) {
  		result += str[Math.floor(Math.random() * str.length)]
  	}
  	return (input + result).slice(0, len)
  }
}

module.exports = key => {
  return new Crypt(key);
};
