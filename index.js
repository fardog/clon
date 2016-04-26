module.exports = clon

function clon (obj) {
  return JSON.parse(JSON.stringify(obj))
}
