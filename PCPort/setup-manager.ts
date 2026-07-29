import type { EmulatorConfig, GameEntry } from './types'
import { SUPPORTED_GAMES, DEFAULT_CONFIG } from './config'

export class SplatoonSetupManager {
  private config: EmulatorConfig

  constructor(config: Partial<EmulatorConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  getSetupSteps(): string[] {
    return [
      `1. Download this package and extract to a folder`,
      `2. Download ${this.config.emulator === 'ryujinx' ? 'Ryujinx Canary' : 'Yuzu v1734'} from the respective GitHub`,
      `3. Dump prod.keys from your Nintendo Switch 2 using Lockpick_RCM`,
      `4. Place prod.keys at the correct path for ${this.config.emulator}`,
      `5. Install firmware via the emulator's Tools menu`,
      `6. Add your Splatoon Raiders game file (.nsp or .xci)`,
      `7. Configure controller mapping using the presets below`,
      `8. Enable LDN multiplayer for online play`,
    ]
  }

  getCompatibleGames(): GameEntry[] {
    return SUPPORTED_GAMES.map(g => ({
      ...g,
      compatible: true,
      notes: g.platform === 'Switch 2'
        ? `Requires Switch 2 firmware — use ${this.config.emulator} NS2 build`
        : 'Runs on standard Switch 1 emulator build',
    }))
  }

  getResolutionConfig(): Record<string, string> {
    const scalings: Record<string, string> = {
      '4K':   'resolution_setup.ini -> scale=3',
      '2K':   'resolution_setup.ini -> scale=2',
      '1080p':'resolution_setup.ini -> scale=1.5',
      '720p': 'resolution_setup.ini -> scale=1 (native)',
    }
    return { scaling: scalings[this.config.resolution], renderer: this.config.renderer }
  }
}