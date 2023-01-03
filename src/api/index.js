const baseUrl = 'http://majidsuzoki-001-site1.etempurl.com/api'

/**
 * @param {string} endpoint
 * @param {RequestInit} options
 * @returns Response Promise
 */
export function fetcher(endpoint, options) {
  return fetch(`${baseUrl}${endpoint}`, options)
}

