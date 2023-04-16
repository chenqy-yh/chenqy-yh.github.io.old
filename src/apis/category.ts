import request from '@/utils/request'

export function getDespline() {
  return request({
    url: '/discipline',
    method: 'get',
  })
}

export function getCategory() {
  return request({
    url: '/category',
    method: 'get',
  })
}

export function getDisciplineByCategoryName(categoryName: string) {
  return request({
    url: '/category/' + categoryName,
    method: 'get',
  })
}
