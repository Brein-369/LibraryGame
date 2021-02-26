const bcrypt = require('bcryptjs')

const genPassword = (password) => {
    const salt = bcrypt.genSalt(10)
    const hash = bcrypt.hashSync(password, salt);
    return hash
}
const comparePassword = (input, passwordDB) => {
    return bcrypt.compareSync(input, passwordDB)
}

module.exports = { genPassword, comparePassword }