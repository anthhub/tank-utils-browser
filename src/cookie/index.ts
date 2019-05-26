/**
 * @description 设置cookie
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} name
 * @param {string} value
 * @param {number} [expiredays=365]
 */
export function setCookie(name: string, value: string, expiredays = 365) {
  if (typeof name !== 'string') {
    throw TypeError('The first property must be a string')
  }
  if (typeof value !== 'string') {
    throw TypeError('The second property must be a string')
  }
  if (typeof expiredays !== 'string') {
    throw TypeError('The third property must be a number')
  }

  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = `${name}=${escape(value)};expires=${exdate.toUTCString()}`
}

/**
 * @description 获取cookie
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} name
 * @returns
 */
export function getCookie(name: string) {
  if (typeof name !== 'string') {
    throw TypeError('The first property must be a string')
  }

  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(name + '=')
    if (cStart !== -1) {
      cStart = cStart + name.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) {
        cEnd = document.cookie.length
      }
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

/**
 * @description 清楚cookie
 * @author anthhub
 * @date 2019-05-26
 * @export
 * @param {string} name
 */
export function clearCookie(name: string) {
  if (typeof name !== 'string') {
    throw TypeError('The first property must be a string')
  }
  setCookie(name, '')
}
