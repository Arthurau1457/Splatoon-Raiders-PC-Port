import type { ControllerMapping } from './types'
import { SPLATOON_CONTROLS } from './config'

/**
 * Gyro aiming configuration for Splatoon Raiders PC port.
 * Maps Nintendo Switch gyro controls to mouse or right stick input.
 */
export function getGyroConfig(mode: 'mouse' | 'stick' | 'disabled') {
  const base = {
    gyroEnabled: mode !== 'disabled',
    gyroSensitivity: 1.0,
    gyroInvertX: false,
    gyroInvertY: false,
  }

  if (mode === 'mouse') {
    return { ...base, gyroTarget: 'Mouse', gyroSmoothing: 0.3 }
  }
  if (mode === 'stick') {
    return { ...base, gyroTarget: 'RightStick', gyroSmoothing: 0.5 }
  }
  return { ...base }
}

export function getControllerMappings(): ControllerMapping[] {
  return SPLATOON_CONTROLS
}

export function formatControllerButton(button: string): string {
  return button.replace('/', ' or ').replace(/\s+/g, ' ').trim()
}