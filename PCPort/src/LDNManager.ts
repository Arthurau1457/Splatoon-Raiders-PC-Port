export interface LDNSession {
  id: string
  hostName: string
  gameName: string
  players: string[]
  maxPlayers: number
  region: string
  advertise: boolean
}

export class LDNManager {
  private _session: LDNSession | null = null

  createSession(gameName: string, maxPlayers = 4): LDNSession {
    this._session = {
      id: Math.random().toString(36).slice(2),
      hostName: 'Splatoon Host',
      gameName,
      players: ['Host'],
      maxPlayers,
      region: 'Worldwide',
      advertise: true,
    }
    return this._session
  }

  joinSession(id: string): boolean {
    if (!this._session || this._session.id !== id) return false
    if (this._session.players.length >= this._session.maxPlayers) return false
    this._session.players.push(`Player ${this._session.players.length + 1}`)
    return true
  }

  get session() { return this._session }
  get playerCount() { return this._session?.players.length ?? 0 }
}