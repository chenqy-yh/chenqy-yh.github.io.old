interface categoryMate {
  id: string
  title_zh: string
  title_en: string
  categoryList: string[]
  route: string
}

interface Discipline {
  id: string
  title_zh: string
  title_en: string
  last_update: string
  pic: string
  description: string
  belongCategory: string
}
