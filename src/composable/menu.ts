class Menu {
  menuTags: MenuTag[] = []
  showLeftMenu = ref(false)
  constructor() {
    this.menuTags = [
      {
        name: 'Index',
        icon: 'iconfont icon-home',
        route: 'home',
      },
      {
        name: 'Post',
        icon: 'iconfont icon-list',
        route: 'post',
        children: [
          {
            name: 'Categories',
            icon: 'iconfont icon-list',
            route: 'categories',
          },
        ],
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
        icon: 'iconfont icon-githubsquare',
        active: false,
        link: 'https://github.com/chenqy-yh',
      },
    ] as MenuTag[]
  }
}

const menu = new Menu()
export default menu
