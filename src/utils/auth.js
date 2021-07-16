const SYSTEM_APPID = process.env.VUE_APP_SYSTEM_APPID
const VUE_APP_URL = process.env.VUE_APP__URL

const accessTokenKey = 'ACCESS_TOKEN'
const refreshTokenKey = 'REFRESH_TOKEN'
const accessTokenTTLKey = 'ACCESS_TOKEN_TTL'

/**
 * 跳转OneID登录页
 * @returns {null}
 */
export function goLoginPage() {
  window.location.href = VUE_APP_URL + '?appID=' + SYSTEM_APPID + '&redirectUri=' + encodeURIComponent(window.location.origin) + '&responseType=code&state='
}

export function getAccessToken() {
  return window.localStorage.getItem(accessTokenKey)
}

export function setAccessToken(token) {
  window.localStorage.setItem(accessTokenKey, token)
}

export function removeAccessToken() {
  window.localStorage.removeItem(accessTokenKey)
}

export function getRefreshToken() {
  return window.localStorage.getItem(refreshTokenKey)
}

export function setRefreshToken(token) {
  window.localStorage.setItem(refreshTokenKey, token)
}

export function removeRefreshToken() {
  window.localStorage.removeItem(refreshTokenKey)
}

export function getAccessTokenTTL() {
  return window.localStorage.getItem(accessTokenTTLKey)
}

export function setAccessTokenTTL(ttl) {
  window.localStorage.setItem(accessTokenTTLKey, ttl)
}

export function removeAccessTokenTTL() {
  window.localStorage.removeItem(accessTokenTTLKey)
}

export function clearTokenAndTTL() {
  removeAccessToken()
  removeRefreshToken()
  removeAccessTokenTTL()
}
