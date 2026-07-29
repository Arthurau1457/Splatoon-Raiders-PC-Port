import type { EmulatorConfig } from './types'

export const DEFAULT_CONFIG: EmulatorConfig = {
  emulator: 'ryujinx',
  resolution: '4K',
  renderer: 'vulkan',
  ldnEnabled: true,
  gyroMode: 'mouse',
  firmwarePath: '',
  keysPath: '',
}

export const SPLATOON_TITLES = {
  splatoonRaiders:  '010056800E7BC000',
  splatoon3:        '0100C2500FC20000',
  splatoon2:        '01003BC0000A0000',
  splatoon1:        '0005001010184000', // Wii U
}

export const SUPPORTED_GAMES = [
  { id: 'splatoon-raiders', name: 'Splatoon Raiders', platform: 'Switch 2', titleId: SPLATOON_TITLES.splatoonRaiders },
  { id: 'splatoon-3',       name: 'Splatoon 3',       platform: 'Switch 1', titleId: SPLATOON_TITLES.splatoon3 },
  { id: 'splatoon-2',       name: 'Splatoon 2',       platform: 'Switch 1', titleId: SPLATOON_TITLES.splatoon2 },
]