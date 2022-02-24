import client from '../utils/postgres.js'
import queries from '../database/queries.js'

const { fetch } = client

const LOGIN = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) throw new Error('username and password required!')

    const user = await fetch(queries.GET_USER, username, password)
    if (!user) throw new Error('User not defined!')

    return res.json(user)
  } catch (error) {
    return res.json({
      error: error.message
    })
  }
}

const REGISTER = (req, res) => {
  // ...
}

export default {
  LOGIN,
  REGISTER,
}
