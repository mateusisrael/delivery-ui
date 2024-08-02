export const isHomePath = (path: string) => {
  const homePath = ['app']
  const leftSpace = 1

  return path.split('/').length - leftSpace === homePath.length
}