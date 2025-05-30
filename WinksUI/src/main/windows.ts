import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { screen } from 'electron'

export let mainWindow: BrowserWindow
export let overlayWindow: BrowserWindow

export function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  console.log(join(__dirname, '../preload/index.js'))
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

export function createOverlayWindow(): void {

  const height  = screen.getPrimaryDisplay().workAreaSize.height
  const windowWidth = 400
  const windowHeight = 300

  // Calculate bottom-right position
  const x = 0
  const y = height-windowHeight

  overlayWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x,
    y,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    hasShadow: false,
    focusable: false,
    skipTaskbar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    overlayWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/Overlay.html`)
  } else {
    overlayWindow.loadFile(join(__dirname, '../renderer/Overlay.html'))
  }
}
