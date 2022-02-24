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

const FOUND_USER = `
  SELECT 
    id,
    username,
    img_url,
    online
  FROM users
  WHERE 
    username = $1;
`

const INSERT_USER = `
  insert into users 
    (username, password, img_url) 
  values ($1, $2, $3) 
  returning id, username, img_url, online;
`


export default {
  GET_USER,
  GET_ALL_USERS,
  FOUND_USER,
  INSERT_USER,
}