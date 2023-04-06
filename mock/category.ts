import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
const imgNum = 6

export default [
  {
    url: '/api/discipline',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'get data success',
        status: 'success',
        data: new Array(6).fill(undefined).map((item, index) => {
          return {
            id: index + '',
            belongCategory: Random.ctitle(6),
            description: Random.ctitle(10),
            last_update: Random.datetime(),
            pic: `/images/${Math.floor(Math.random() * imgNum + 1)}.webp`,
            title_en: Random.first(),
            title_zh: Random.ctitle(6),
          } as Discipline
        }),
      }
    },
  },
] as MockMethod[]
