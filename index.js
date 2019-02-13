const OCRA = require('./src/ocra');
const ocra = new OCRA();

const ocraSuite = 'OCRA-1:HOTP-SHA256-8:QN08-PSHA1';
const result = ocra.ocraPINBased(ocraSuite, '1234', '111111');
console.log('result = ', result);

module.exports = ocra;
