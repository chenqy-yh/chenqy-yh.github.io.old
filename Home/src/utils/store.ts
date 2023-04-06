class Store {
  // 保存数据
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  // 获取数据
  async get<T>(key: string): Promise<T> {
    return JSON.parse(localStorage.getItem(key)!)
  }
  // 删除数据
  remove(key: string) {
    localStorage.removeItem(key)
  }
}

export default new Store()
