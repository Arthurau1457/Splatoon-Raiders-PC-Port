# Splatoon Raiders PC Setup Guide

## Quick Start
1. Install Ryujinx (latest canary) or Yuzu (v1734)
2. Dump `prod.keys` from your Nintendo Switch 2
3. Install firmware via emulator tools menu
4. Add Splatoon Raiders `.nsp` or `.xci` game file
5. Apply controller preset from `/resources/controller-mapping.json`

## Resolution Settings
| Setting | Config Value | Notes |
|---|---|---|
| 4K (2160p) | `scale=3` | RTX 3070+ recommended |
| 2K (1440p) | `scale=2` | GTX 1080+ |
| 1080p | `scale=1.5` | GTX 1060+ |
| 720p native | `scale=1` | Minimum spec |

## LDN Multiplayer
Enable LDN mode in Ryujinx network settings.
All players must use the same Ryujinx version with LDN enabled.

## Gyro Aiming
Set `gyroMode` to `"mouse"` in `default-config.json` for mouse gyro aiming.