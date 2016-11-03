var crypto = require('crypto-js');

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
};
var secretKey= 'abc123';

//encrypt
var encryptMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted Message: '+ encryptMessage);

//decrypt
var bytes = crypto.AES.decrypt(encryptMessage, secretKey);
var decryptMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message: '+ decryptMessage);