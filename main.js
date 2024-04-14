//const jwt = require('jsonwebtoken');
const jwt = require('./node_modules/jsonwebtoken');
const fs = require('fs');

const algorithm = 'RS256';
const ofsuser = 'cliente';
const privateKey = fs.readFileSync('./jwt-key', 'utf-8');
//const privateKey = require('./jwt-key'); nao funciona
//const privateKey2 = require('./teste-key'); nao funciona

const header = {
    alg: algorithm
};

const payload = {
    sub: ofsuser,
    iss: "C=br/ST=sp/L=sp/O=oracle/OU=cx/CN=flavio/emailAddress=flavio.franzolim@oracle.com",
    aud: "ofsc:ofsc-f73e42.test:chat",
    scope: "/REST",
    exp: 1799999999
}

 const token = jwt.sign(payload,privateKey,header);

 console.log(token);
