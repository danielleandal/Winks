import {app, BrowserWindow, ipcMain} from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'

import {createMainWindow, createOverlayWindow} from './windows'
import { createOverlayGetClick } from './overlayGetClick'
import {overlayScroll, saveCursorPosition} from './overlay'
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createMainWindow()
  createOverlayWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
      createOverlayWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//region overlay functions

ipcMain.on('open-overlay-get-click', () => {
  createOverlayGetClick()
})

ipcMain.on('get-cursor-position', () => {
  saveCursorPosition()
})

ipcMain.on('move-cursor-and-scroll', (_event, arg) => {
  if (arg === 'up') {
    overlayScroll(false, 1);  // Scroll up
  } else if (arg === 'down') {
    overlayScroll(false, -1);  // Scroll down
  }
})


//endregion overlay functions
