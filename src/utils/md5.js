const crypto = require('crypto');

function md5(password) {
    const hash = crypto.createHash('md5');
    return hash.update(password).digest('hex');
}

module.exports = md5;
