import { ar } from 'element-plus/es/locale'
import { MockMethod } from 'vite-plugin-mock'

interface requestBody {
  url: string
  body: any
  headers: any
  query: any
}

function getDisciplineByCategoryName(obj: any) {
  const tt = disciplineList.filter(
    (discipline) => discipline.belongCategory === obj.query.categoryName,
  )

  return tt
}

const categoryList = [
  {
    id: '1',
    title_zh: '计算机科学',
    title_en: 'Computer Science',
    categoryList: ['1', '2', '3'],
    route: 'computerscience',
  },
  {
    id: '2',
    title_zh: '数学',
    title_en: 'Mathematics',
    categoryList: ['4', '5', '6'],
    route: 'math',
  },
  {
    id: '3',
    title_zh: '物理',
    title_en: 'Physics',
    categoryList: ['7', '8', '9'],
    route: 'physics',
  },
] as categoryMate[]

const disciplineList = [
  {
    id: '1',
    title_zh: '算法和数据结构',
    title_en: 'Algorithm and Data Structure',
    pic: `/images/1.webp`,
    description: '算法+数据结构',
    belongCategory: 'computerscience',
    last_update: '2021-08-01',
  },
  {
    id: '2',
    title_zh: '人工智能与机器学习',
    title_en: 'AI and Machine Learning',
    pic: `/images/2.webp`,
    description: '人工智能：让机器模拟人的智能。',
    belongCategory: 'computerscience',
    last_update: '2021-08-01',
  },
  {
    id: '3',
    title_zh: '软件工程',
    title_en: 'Software Engineering',
    pic: `/images/3.webp`,
    description: '软件工程：将软件开发过程规范化的学科。',
    belongCategory: 'computerscience',
    last_update: '2021-08-01',
  },
  {
    id: '4',
    title_zh: '线性代数',
    title_en: 'Linear Algebra',
    pic: `/images/4.webp`,
    description: '线性代数：研究向量空间的线性变换。',
    belongCategory: 'math',
    last_update: '2021-08-01',
  },
  {
    id: '5',
    title_zh: '概率论',
    title_en: 'Probability Theory',
    pic: `/images/5.webp`,
    description: '概率论：研究随机现象的数学理论的学科。',
    belongCategory: 'math',
    last_update: '2021-08-01',
  },
  {
    id: '6',
    title_zh: '数理统计',
    title_en: 'Mathematical Statistics',
    pic: `/images/6.webp`,
    description: '数理统计：研究统计学的数学理论的学科。',
    belongCategory: 'math',
    last_update: '2021-08-01',
  },
  {
    id: '7',
    title_zh: '力学',
    title_en: 'Mechanics',
    pic: `/images/7.webp`,
    description: '力学：研究物体运动的学科。',
    belongCategory: 'physics',
    last_update: '2021-08-01',
  },
  {
    id: '8',
    title_zh: '电磁学',
    title_en: 'Electromagnetism',
    pic: `/images/8.webp`,
    description: '电磁学：研究电磁场的学科。',
    belongCategory: 'physics',
    last_update: '2021-08-01',
  },
  {
    id: '9',
    title_zh: '光学',
    title_en: 'Optics',
    pic: `/images/9.webp`,
    description: '光学：研究光的性质和运动的学科。',
    belongCategory: 'physics',
    last_update: '2021-08-01',
  },
] as Discipline[]

export default [
  {
    url: '/api/discipline',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'get data success',
        status: 'success',
        data: disciplineList,
      }
    },
  },
  {
    url: '/api/category',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'get data success',
        status: 'success',
        data: categoryList,
      }
    },
  },
  {
    url: '/api/category/:categoryName',
    method: 'get',
    response: (obj: any) => {
      return {
        code: 200,
        message: 'get data success',
        status: 'success',
        data: getDisciplineByCategoryName(obj),
      }
    },
  },
] as MockMethod[]
