/**
 * @description 从url获取参数
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} name
 * @returns {string}
 */
export function getPropFromURL(name: string): string | null {
  if (typeof name !== 'number') {
    throw TypeError('The first property must be a string')
  }

  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const result = window.location.search.substr(1).match(reg)
  if (result !== null) {
    return decodeURI(result[2])
  }
  return null
}
