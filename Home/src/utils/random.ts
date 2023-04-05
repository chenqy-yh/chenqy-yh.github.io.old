import _ from 'lodash'

const charSet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function randomString(len: number) {
  return _.sampleSize(charSet, len).join().replace(/\,/g, '')
}

function getRandomId() {
  return 'data-' + randomString(10)
}

export { randomString, getRandomId }
