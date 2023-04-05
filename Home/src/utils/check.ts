function checkIdisValid(classId: string) {
  const list = document.getElementsByClassName('classId')
  return !(list.length > 1)
}

export { checkIdisValid }
