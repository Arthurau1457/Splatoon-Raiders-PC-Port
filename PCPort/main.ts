import { SplatoonSetupManager } from './setup-manager'
import { getControllerMappings } from './utils'
import { SPLATOON_TITLES, SUPPORTED_GAMES } from './config'

async function main() {
  console.log('Splatoon Raiders PC Port — Setup Check\n')

  const manager = new SplatoonSetupManager({
    emulator: 'ryujinx',
    resolution: '4K',
    renderer: 'vulkan',
    ldnEnabled: true,
    gyroMode: 'mouse',
    firmwarePath: '',
    keysPath: '',
  })

  console.log('=== Setup Steps ===')
  manager.getSetupSteps().forEach(s => console.log(s))

  console.log('\n=== Compatible Games ===')
  manager.getCompatibleGames().forEach(g =>
    console.log(`  ${g.name} [${g.platform}] — ${g.notes}`)
  )

  console.log('\n=== Controller Mapping ===')
  getControllerMappings().forEach(m =>
    console.log(`  ${m.action.padEnd(10)} → ${m.key} (${m.description})`)
  )

  console.log('\n=== Title IDs ===')
  Object.entries(SPLATOON_TITLES).forEach(([game, id]) =>
    console.log(`  ${game}: ${id}`)
  )
}

main().catch(console.error)