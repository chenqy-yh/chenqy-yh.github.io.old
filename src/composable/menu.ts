class Menu {
  menuTags: MenuTag[] = []
  showLeftMenu = ref(false)
  constructor() {
    this.menuTags = [
      {
        name: 'Index',
        icon: 'iconfont icon-home',
        route: 'home.content',
      },
      {
        name: 'Post',
        icon: 'iconfont icon-list',
        route: 'post',
        children: [
          {
            name: 'Tags',
            icon: 'iconfont icon-tags-fill',
            route: 'tags.content',
          },
          {
            name: 'Categories',
            icon: 'iconfont icon-list',
            route: 'category.content',
          },
        ],
      },
      {
        name: 'About',
        route: 'about.content',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about.content',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about.content',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about.content',
        icon: 'iconfont icon-user-filling',
      },
      {
        name: 'About',
        route: 'about.content',
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
