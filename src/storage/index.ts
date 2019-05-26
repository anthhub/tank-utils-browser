/**
 * @description 设置缓存
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} key
 * @param {PlainObject} value
 */
export function setCache(key: string, value: PlainObject) {
  if (typeof key !== 'string') {
    throw TypeError('The first property must be a string')
  }

  let params: any = value
  if (typeof value === 'object') {
    params = JSON.stringify(value)
  }

  localStorage.setItem(key, params)
}

/**
 * @description 读取缓存
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} key
 * @returns
 */
export function getCache(key: string) {
  if (typeof key !== 'string') {
    throw TypeError('The first property must be a string')
  }
  const result = localStorage.getItem(key)
  if (result) {
    return JSON.parse(result)
  } else {
    return null
  }
}
