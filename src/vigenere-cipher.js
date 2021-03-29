class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = !direct
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.str = '';
  }

  encrypt(message, key) {
    if (message, key === undefined) throw new Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    const keyLen = key.length,
      messageClear = message.replace(/[^a-zA-Z0-9' ']/g, ''),
      messageLen = message.length;
    var maxLen = 0;
    // if (messageLen >= keyLen) {
    //   console.log(545);
    //   maxLen = messageLen;
    // } else {
    //   maxLen = keyLen;
    // }
    //var str = '';
    var fullKey = [];
    for (var i = 0, n = 0; i < message.length; i++, n++) {
      if (n < key.length && message.charCodeAt(i) <= 90 && message.charCodeAt(i) >= 65) {
        fullKey.push(key[n])
      } else if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        n--;
      } else if (n >= key.length) {
        n = 0;
        fullKey.push(key[n])
      }
    }
    console.log(this.str);

    fullKey = fullKey.join('')
    for (var i = 0; i < message.length; i++) {
      // console.log(String.fromCharCode(message.charCodeAt(i) + 7));

      if (message.charCodeAt(i) > fullKey.charCodeAt(i)) {
        console.log(1);
        this.str.concat(String.fromCharCode(message.charCodeAt(i) - 7))
        console.log(this.str);
      } else if (message.charCodeAt(i) < fullKey.charCodeAt(i)) {
        console.log(2);
        console.log(String.fromCharCode(message.charCodeAt(i) + 7));
        this.str.concat(String.fromCharCode(message.charCodeAt(i) + 7))
        console.log(this.str);
      } else {
        console.log(3);
        this.str.concat(String.fromCharCode(i))
        console.log(this.str);
      }
    }
    console.log(this.str);
    return this.str
    // console.log(this.alphabet.indexOf('L'), this.alphabet.indexOf('T'), this.alphabet.indexOf('E'));
    // console.log(message, message.length);
    // console.log(fullKey, fullKey.length, typeof fullKey[0]);
  }
  decrypt(message, key) {
    if (message, key === undefined) throw new Error;
  }
}

module.exports = VigenereCipheringMachine;
