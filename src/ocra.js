const assert = require('assert');
const crypto = require('crypto');

class OCRA {
  /**
   * Calculate OCRA value
   * @param {string} ocraSuite the suite definition, e.g. "OCRA-1:HOTP-SHA256-8:C-QN08-PSHA1"
   * @param {string} password the OCRA data input password - HEX encoded
   * @param {string} question the OCRA data input question - HEX encoded
   */
  ocra(ocraSuite, question, password) {
    console.log('ocraSuite = ', ocraSuite);
    console.log('question = ', question);
    console.log('password = ', password);
    return '123';
  }

  /**
   * Calculate PIN based OCRA value with challenge code in digit
   * @param {string} ocraSuite the suite definition, e.g. "OCRA-1:HOTP-SHA256-8:C-QN08-PSHA1"
   * @param {string} pin the PIN code for OCRA data input password hash
   * @param {number} challengeCode the challenge code in digits for OCRA data input question
   */
  ocraPINBased(ocraSuite, pin, challengeCode) {
    const ocraSuiteParts = ocraSuite.match('^OCRA-1:HOTP-SHA(1|256|512)-([4-8]):((?:C-)?)([A-Z0-9-]*)-PSHA(1|256|512)$');
    console.log('ocraSuiteParts', ocraSuiteParts);
    const hash = crypto.createHash('sha' + ocraSuiteParts[5]);
    const questionHex = parseInt(challengeCode, 10).toString(16);
    const passwordHex = hash.update(pin).digest('hex');
    return this.ocra(ocraSuite, passwordHex, questionHex);
  }
}

module.exports = OCRA;
