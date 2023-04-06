import request from '@/utils/request'

export function getDespline() {
  return request({
    url: '/discipline',
    method: 'get',
  })
}
