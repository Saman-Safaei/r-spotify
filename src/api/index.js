const baseUrl = process.env.REACT_APP_API_URL

/**
 * @param {string} endpoint
 * @param {RequestInit} options
 * @returns ResponsePromise
 */
export function fetcher(endpoint, options) {
  return fetch(`${baseUrl}${endpoint}`, options)
}

