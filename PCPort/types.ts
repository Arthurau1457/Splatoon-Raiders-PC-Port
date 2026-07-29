export interface EmulatorConfig {
  emulator: 'ryujinx' | 'yuzu'
  resolution: '4K' | '2K' | '1080p' | '720p'
  renderer: 'vulkan' | 'opengl'
  ldnEnabled: boolean
  gyroMode: 'mouse' | 'stick' | 'disabled'
  firmwarePath: string
  keysPath: string
}

export interface GameEntry {
  id: string
  name: string
  platform: 'Switch 1' | 'Switch 2' | 'Wii U'
  titleId: string
  compatible: boolean
  notes?: string
}

export interface ControllerMapping {
  action: string
  key: string
  description: string
}

export const SPLATOON_CONTROLS: ControllerMapping[] = [
  { action: 'shoot',   key: 'ZR / Right Trigger', description: 'Shoot ink' },
  { action: 'squid',   key: 'B / Cross',           description: 'Transform to squid form' },
  { action: 'jump',    key: 'A / Circle',           description: 'Jump / super jump' },
  { action: 'bomb',    key: 'R / Right Bumper',     description: 'Throw sub weapon' },
  { action: 'special', key: 'ZL + L',               description: 'Activate special weapon' },
  { action: 'gyro',    key: 'Mouse / Right Stick',  description: 'Aim with gyro' },
]