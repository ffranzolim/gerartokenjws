const jsrsasign = require('./node_modules/jsrsasign');
//const jsrsasign = require('jsrsasign');

// const keyPair = jsrsasign.generateRSAKey();


// const publicKey = jsrsasign.KEYUTIL.getPublicKey(keyPair);
// const privateKey = jsrsasign.KEYUTIL.getPrivateKey(keyPair);

// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);


const privateKeyX = 'sss';


const data = 'This is the data to be signed';
const signature = jsrsasign.jws.sign('SHA256', data, privateKeyX);

console.log('Signature:', signature);