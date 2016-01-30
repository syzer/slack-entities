const assert = require('assert')

const slackEntities = require('../')
const getChannels = slackEntities.getChannels
const getUsers = slackEntities.getUsers
const getGroups = slackEntities.getGroups
const getFiles = slackEntities.getFiles

const user = {
  tag: '<@USLACKBOT>',
  id: 'USLACKBOT',
}
const channel = {
  tag: '<#C0000000>',
  id: 'C0000000',
}
const group = {
  tag: '<!subteam^S0000000|@besties>',
  id: 'S0000000',
}
const internalFile = {
  tag: '<https://austinprivatelibrary.slack.com/files/flip/F00000000/README.md>',
  id: 'https://austinprivatelibrary.slack.com/files/flip/F00000000/README.md',
}
const html = '<HTML/>'
const externalLink = '<https://get.slack.help/hc/en-us/articles/204399343-Sharing-links-in-Slack>'

describe('getChannels', () => {
  it('extracts tags for channels', () => {
    assert.deepEqual(getChannels(`hey ${user.tag} check out ${channel.tag}`), [
      channel,
    ])
  })
})
describe('getUsers', () => {
  it('extracts tags for users', () => {
    assert.deepEqual(getUsers(`i bet ${user.tag} knows ${html}`), [
      user,
    ])
  })
})
describe('getGroups', () => {
  it('extracts tags for groups of users', () => {
    assert.deepEqual(getGroups(`lylas ${group.tag}`), [
      group,
    ])
  })
})
describe('getFiles', () => {
  it('extracts tags for internal files, snippets, and posts', () => {
    assert.deepEqual(getFiles(`${internalFile.tag} and ${externalLink}`), [
      internalFile,
    ])
  })
})
