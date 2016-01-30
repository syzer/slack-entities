const REGEXES = {
  channels: '<#(C.*?)>',
  users: '<@(U.*?)>',
  groups: '<!subteam\\^(S.*?)(?:\\|@.*?)>',
  files: '<(http.*.slack.com\/files\/.*\/F.*?)>',
}

Object.keys(REGEXES).forEach(key => {
  module.exports[`get${key[0].toUpperCase()}${key.slice(1)}`] = string => {
    const matches = string.match(new RegExp(REGEXES[key], 'g'))
    return matches ? matches.map(match => ({
      tag: match,
      id: match.match(REGEXES[key])[1],
    })) : []
  }
})
