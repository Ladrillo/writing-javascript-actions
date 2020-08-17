async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
  const parsed = await res.json()
  return parsed
}
module.exports = getJoke

