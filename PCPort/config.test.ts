import { SPLATOON_TITLES, SUPPORTED_GAMES } from './config'

describe('Game config', () => {
  test('all title IDs are valid hex strings', () => {
    Object.values(SPLATOON_TITLES).forEach(id => {
      expect(id).toMatch(/^[0-9A-F]{16}$/)
    })
  })

  test('supported games list is non-empty', () => {
    expect(SUPPORTED_GAMES.length).toBeGreaterThan(0)
  })

  test('each game has required fields', () => {
    SUPPORTED_GAMES.forEach(g => {
      expect(g).toHaveProperty('id')
      expect(g).toHaveProperty('name')
      expect(g).toHaveProperty('platform')
      expect(g).toHaveProperty('titleId')
    })
  })
})