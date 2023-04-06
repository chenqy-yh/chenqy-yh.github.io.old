class Menu {
  menuTags: MenuTag[] = []
  showLeftMenu = ref(true)
  constructor() {
    this.menuTags = [
      {
        name: 'Index',
        icon: 'iconfont icon-home',
        route: 'home',
        children: [{}],
      },
      {
        name: 'Post',
        icon: 'iconfont icon-list',
        route: 'post',
        children: [{}],
      },
      {
        name: 'About',
        route: 'about',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'Follow Me',
        route: '',
        icon: 'iconfont icon-githubsquare',
        active: false,
      },
    ] as MenuTag[]
  }
}

const menu = new Menu()
export default menu
