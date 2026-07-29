interface CompatResult {
  game: string
  platform: string
  status: 'Perfect' | 'Playable' | 'In-Game' | 'Boots' | 'Nothing'
  fps: string
  notes: string
}

export const COMPATIBILITY_LIST: CompatResult[] = [
  { game: 'Splatoon Raiders',   platform: 'Switch 2', status: 'Playable', fps: '60', notes: 'NS2 firmware required' },
  { game: 'Splatoon 3',         platform: 'Switch 1', status: 'Perfect',  fps: '60', notes: '4K with Vulkan' },
  { game: 'Splatoon 2',         platform: 'Switch 1', status: 'Perfect',  fps: '60', notes: 'Online via LDN' },
  { game: 'Splatoon (Wii U)',   platform: 'Wii U',    status: 'Playable', fps: '30-60', notes: 'via CEMU' },
]

export function getCompatStatus(gameName: string): CompatResult | undefined {
  return COMPATIBILITY_LIST.find(g =>
    g.game.toLowerCase().includes(gameName.toLowerCase())
  )
}