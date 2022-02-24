import client from '../utils/postgres.js'
import queries from '../database/queries.js'
import path from 'path'

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
      ERROR: error.message
    })
  }
}

const REGISTER = async (req, res) => {
  try {
    const { file } = req.files
    const { username, password } = req.body
    const found_user = await fetch(queries.FOUND_USER, username)
    
    if (found_user) throw new Error('user already sign in!')
    if (!username || ! password) throw new Error('username and password is required!')
    if (username.length > 25 && username.length < 5) throw new Error('Username length must be 5 and 25 character!')
    if (password.length > 25 && password.length < 5) throw new Error('Password length must be 5 and 25 character!')
    if (file.mimetype.split('/')[0].toLowerCase() !== 'image') throw new Error('The file should be of type img only!') 

    const img_url = '/' + Date.now() % 1000 + file.name
    const file_path = path.join(process.cwd(), 'files', img_url)
    const data = await fetch(queries.INSERT_USER, username, password, img_url)
    
    file.mv(file_path, function (err) {
      if (err) throw new Error(err)
    })

    return res.json({
      data: data
    })
  } catch (error) {
    return res.json({
      ERROR: error.message
    })
  }
}

export default {
  LOGIN,
  REGISTER,
}
