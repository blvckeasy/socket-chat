const { fetch, fetchAll } = require('../utils/postgres')

const LOGIN = (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) throw new Error('username and password required!')

    

  } catch (error) {
    return error.message
  }
}

const REGISTER = (req, res) => {
  // ...
}

export default {
  LOGIN,
  REGISTER,
}