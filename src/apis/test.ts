import request from '@/utils/request'

export const getList = () => {
  return request({
    url: '/getList',
    method: 'get',
  })
}
