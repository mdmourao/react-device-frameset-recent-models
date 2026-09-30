# React Device Frameset

![publish workflow](https://github.com/mdmourao/react-device-frameset-recent-models/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/mdmourao/react-device-frameset-recent-models/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/react-device-frameset-recent-models.svg)](https://www.npmjs.com/package/react-device-frameset-recent-models)

This is yet another device frameset component for React, forked from [react-device-frameset](https://github.com/zheeeng/react-device-frameset) with recent models (iPhone 17, iPhone Duo).

## [Demo](https://mdmourao.github.io/react-device-frameset-recent-models/)

## Features

* Powered by pure css device prototype showcase [Marvel Devices.css](http://marvelapp.github.io/devices.css/)
* [![language](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](http://typescriptlang.org/) Type Safe and under maintainable
* Recent devices: iPhone 17, iPhone Duo (unfolded and cover screen), plus the classic iPhone, Android, iPad and MacBook frames
* Device Emulator with device picker, zoom and landscape, [try it live](https://mdmourao.github.io/react-device-frameset-recent-models/)

  * iPhone 17
![iPhone 17 in the device emulator](https://raw.githubusercontent.com/mdmourao/react-device-frameset-recent-models/main/docs/screenshots/iphone-17.png)

  * iPhone Duo (unfolded)
![iPhone Duo in the device emulator](https://raw.githubusercontent.com/mdmourao/react-device-frameset-recent-models/main/docs/screenshots/iphone-duo.png)

  * iPhone X
![iPhone X in the device emulator](https://raw.githubusercontent.com/mdmourao/react-device-frameset-recent-models/main/docs/screenshots/iphone-x.png)

## Quick facts (for humans and AI agents)

* Package: `react-device-frameset-recent-models` (React 16.8+, 17, 18; TypeScript types included)
* Components: `DeviceFrameset` (one frame), `DeviceSelector` (frame + device picker), `DeviceEmulator` (picker + color + landscape + zoom), `Zoomable`
* Always import `react-device-frameset-recent-models/styles/marvel-devices.min.css`; add `device-selector.min.css` or `device-emulator.min.css` when using those components
* Devices: iPhone 17, iPhone Duo, iPhone Duo Cover, iPhone X, iPhone 8, iPhone 8 Plus, iPhone 5s, iPhone 5c, iPhone 4s, Galaxy Note 8, Nexus 5, Lumia 920, Samsung Galaxy S5, HTC One, iPad Mini, MacBook Pro
* Machine-readable summary: [llms.txt](https://mdmourao.github.io/react-device-frameset-recent-models/llms.txt)

## Installation

npm

```bash
npm install react-device-frameset-recent-models
```

pnpm

```bash
pnpm add react-device-frameset-recent-models
```

yarn

```bash
yarn add react-device-frameset-recent-models
```

bun

```bash
bun add react-device-frameset-recent-models
```

## Usage

### Stylesheet importing

`react-device-frameset-recent-models` supports [conditional exports](https://nodejs.org/api/packages.html#conditional-exports).

If the application bundler supports this feature and above node v12.11.0, you can import the stylesheet through the recommended path `react-device-frameset-recent-models/styles`, it is largely supported in real developing environments, otherwise, you need to import it from `react-device-frameset-recent-models/dist/styles`.

### Basic Example

```tsx
import { DeviceFrameset } from 'react-device-frameset-recent-models'
import 'react-device-frameset-recent-models/styles/marvel-devices.min.css'

export const App = () => {
    return (
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
            <div>Hello world</div>
        </DeviceFrameset>
    )
}
```

### Props Signature

DeviceFramesetProps:

```ts (signature)
| { device: 'iPhone 17', color: 'black' | 'white' | 'mist-blue' | 'sage' | 'lavender', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone Duo', color: 'night-sky' | 'star-white', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone Duo Cover', color: 'night-sky' | 'star-white', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone X', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 8 Plus', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5s', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 5c', color: 'white' | 'red' | 'yellow' | 'green' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPhone 4s', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Galaxy Note 8', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Nexus 5', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Lumia 920', color: 'black' | 'white' | 'yellow' | 'red' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'Samsung Galaxy S5', color: 'white' | 'black', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'HTC One', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'iPad Mini', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
| { device: 'MacBook Pro', width?: number, height?: number, zoom?: number }
```

## If you like the frameset selector?

```ts
type DeviceName = "iPhone 17" | "iPhone Duo" | "iPhone Duo Cover" | "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceName,
    onChange?: (deviceName: DeviceName) => void, 
}
```

```tsx
import { DeviceFrameset, DeviceSelector } from 'react-device-frameset-recent-models'
import 'react-device-frameset-recent-models/styles/marvel-devices.min.css'
import 'react-device-frameset-recent-models/styles/device-selector.min.css'

export const App = () => {
    return (
        <DeviceSelector>
            {props => <DeviceFrameset {...props} />}
        </DeviceSelector>
    )
}
```

## If you like the frameset emulator?

```ts
type DeviceName = "iPhone 17" | "iPhone Duo" | "iPhone Duo Cover" | "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 5c" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro"

type DeviceEmulatorProps = {
    banDevices?: DeviceName[]
    children: (props: DeviceFramesetProps) => React.ReactNode,
    value?: DeviceFramesetProps,
    onChange?: (deviceConfig: DeviceFramesetProps) => void, 
}
```

```tsx
import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset-recent-models'
import 'react-device-frameset-recent-models/styles/marvel-devices.min.css'
import 'react-device-frameset-recent-models/styles/device-emulator.min.css'

export const App = () => {
    return (
        <DeviceEmulator banDevices={["HTC One"]}>
            {props => <DeviceFrameset {...props} />}
        </DeviceEmulator>
    )
}
```

## Trademarks

iPhone, iPad and MacBook are trademarks of Apple Inc. Galaxy is a trademark of Samsung Electronics, Nexus of Google LLC, Lumia of Microsoft Corporation and HTC One of HTC Corporation. Device names are used only to describe which device a frame depicts. This project is not affiliated with, sponsored by or endorsed by any of these companies, and the frames are original CSS drawings, not official artwork.
