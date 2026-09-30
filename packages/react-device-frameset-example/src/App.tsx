import { DeviceFrameset, DeviceEmulator } from 'react-device-frameset-recent-models'
import 'react-device-frameset-recent-models/styles/marvel-devices.css'
import 'react-device-frameset-recent-models/styles/device-emulator.css'

const REPO_URL = 'https://github.com/mdmourao/react-device-frameset-recent-models'
const NPM_URL = 'https://www.npmjs.com/package/react-device-frameset-recent-models'

export const App = () => (
  <div className="app">
    <header className="app-header">
      <div>
        <h1>React Device Frameset</h1>
        <p>Pick a device to preview it. Includes iPhone 17 and iPhone Duo.</p>
      </div>
      <nav>
        <a href={REPO_URL}>GitHub</a>
        <a href={NPM_URL}>npm</a>
      </nav>
    </header>
    <main className="app-main">
      <DeviceEmulator>
        {props => (
          <DeviceFrameset {...props}>
            <div className="demo-screen">
              <strong>{props.device}</strong>
              <span>{props.landscape ? `${props.height ?? ''} × ${props.width ?? ''}` : `${props.width ?? ''} × ${props.height ?? ''}`}</span>
            </div>
          </DeviceFrameset>
        )}
      </DeviceEmulator>
    </main>
  </div>
)
