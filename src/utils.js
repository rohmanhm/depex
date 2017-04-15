module.exports.parsePkg = json => {
  return Object.keys(json).map(v => {
    return {
      name: v,
      version: json[v]
    }
  })
}
