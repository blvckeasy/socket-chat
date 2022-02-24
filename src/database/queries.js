const GET_USER = `
  SELECT 
    id,
    username,
    img_url,
    online
  FROM users
  WHERE 
    username = $1 and password = $2;
`

const GET_ALL_USERS = `
  SELECT 
    id,
    username,
    img_url,
    online
  FROM users;
`


export default {
  GET_USER,
  GET_ALL_USERS,
  
}