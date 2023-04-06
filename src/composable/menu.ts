class Menu {
  menuTags: MenuTag[] = []
  constructor() {
    this.menuTags = [
      {
        name: 'Index',
        icon: 'iconfont icon-home',
        children: [{}],
      },
      {
        name: 'Post',
        icon: 'iconfont icon-list',
        children: [{}],
      },
      {
        name: 'About',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        icon: 'iconfont icon-user-filling',
      },
    ] as MenuTag[]
  }
}

const menu = new Menu()
export default menu
