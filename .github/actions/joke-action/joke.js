const axios = require('axios')
async function getJoke() {
  const res = await axios('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
  return res.data
}
module.exports = getJoke
