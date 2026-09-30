import { useState } from 'react'

const PACKAGE = 'react-device-frameset-recent-models'

const COMMANDS = {
  npm: `npm install ${PACKAGE}`,
  pnpm: `pnpm add ${PACKAGE}`,
  yarn: `yarn add ${PACKAGE}`,
  bun: `bun add ${PACKAGE}`,
}

type Manager = keyof typeof COMMANDS

const MANAGERS = Object.keys(COMMANDS) as Manager[]

export const InstallCommand = () => {
  const [manager, setManager] = useState<Manager>('npm')
  const [copied, setCopied] = useState(false)
  const command = COMMANDS[manager]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="install">
      <div className="install-tabs" role="tablist">
        {MANAGERS.map(m => (
          <button
            key={m}
            role="tab"
            aria-selected={m === manager}
            className={m === manager ? 'active' : ''}
            onClick={() => { setManager(m); setCopied(false) }}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="install-command">
        <code>{command}</code>
        <button onClick={() => void copy()} aria-label={`Copy ${manager} install command`}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
