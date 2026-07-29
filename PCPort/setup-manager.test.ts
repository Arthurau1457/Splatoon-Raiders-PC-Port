import { SplatoonSetupManager } from './setup-manager'
import { getGyroConfig, getControllerMappings } from './utils'

describe('SplatoonSetupManager', () => {
  let manager: SplatoonSetupManager

  beforeEach(() => {
    manager = new SplatoonSetupManager({ emulator: 'ryujinx', resolution: '4K', renderer: 'vulkan', ldnEnabled: true, gyroMode: 'mouse', firmwarePath: '', keysPath: '' })
  })

  test('getSetupSteps returns 8 steps', () => {
    const steps = manager.getSetupSteps()
    expect(steps).toHaveLength(8)
  })

  test('getCompatibleGames returns all splatoon titles', () => {
    const games = manager.getCompatibleGames()
    expect(games.length).toBeGreaterThan(0)
    expect(games.every(g => g.compatible)).toBe(true)
  })

  test('getResolutionConfig returns 4K config', () => {
    const cfg = manager.getResolutionConfig()
    expect(cfg.scaling).toContain('scale=3')
    expect(cfg.renderer).toBe('vulkan')
  })
})

describe('gyro configuration', () => {
  test('mouse mode enables gyro with mouse target', () => {
    const cfg = getGyroConfig('mouse')
    expect(cfg.gyroEnabled).toBe(true)
    expect(cfg.gyroTarget).toBe('Mouse')
  })

  test('disabled mode disables gyro', () => {
    const cfg = getGyroConfig('disabled')
    expect(cfg.gyroEnabled).toBe(false)
  })
})