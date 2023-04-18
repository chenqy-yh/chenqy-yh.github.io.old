import request from '@/utils/request'

export function getTagList() {
  return request({
    url: '/tags',
    method: 'get',
  })
}

export function getDisciplineByCategoryName(tagName: string) {
  return request({
    url: `/tags/getdisciplinebycategoryname/${tagName}`,
    method: 'get',
  })
}

export function getTagsByDisciplineId(disciplineId: string | undefined) {
  if (disciplineId === undefined) {
    return request({
      url: '/tags',
      method: 'get',
    })
  } else {
    return request({
      url: '/tags/findtagsbydisciplineid/' + disciplineId,
      method: 'get',
    })
  }
}
