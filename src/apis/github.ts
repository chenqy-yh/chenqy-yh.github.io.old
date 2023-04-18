import request from '@/utils/request'

export function getGithubContributions(username: string, sinceDate: string, untilDate: string) {
  const apiUrl = `https://api.github.com/users/${username}/events?since=${sinceDate}&until=${untilDate}`
  return request({
    url: apiUrl,
    method: 'get',
  })
}
