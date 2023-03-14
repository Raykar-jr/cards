export const makeStringDate = (data: string) => {
  let ms = Date.parse(data)
  let date = new Date(ms)

  return date.toLocaleDateString('ru-Ru')
}
