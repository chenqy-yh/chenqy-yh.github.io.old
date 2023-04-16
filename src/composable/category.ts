import { getDespline, getCategory } from '@/apis/category'

class Category {
  categories = ref([] as categoryMate[])
  disciplines = ref([] as Discipline[])
  constructor() {}

  public async initDisplines() {
    const { data } = (await getDespline()) as any
    return data as ResponseResult<Discipline[]>
  }

  public async initCategories() {
    const { data } = (await getCategory()) as any
    return data as ResponseResult<categoryMate[]>
  }
}

export default new Category()
