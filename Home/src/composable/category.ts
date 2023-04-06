import { getDespline } from '@/apis/category'

class Category {
  categories = ref([] as categoryMate[])
  disciplines = ref([] as Discipline[])
  constructor() {}

  public async initDisplines() {
    const { data } = (await getDespline()) as any
    return data
  }
}

export default new Category()
