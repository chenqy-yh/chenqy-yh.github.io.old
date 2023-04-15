interface MenuTag {
  name: string
  route?: string
  icon?: string
  children?: MenuTag[]
  active?: boolean
  link?: string
}
