
console.log('code started')
const { app, BrowserWindow } = require("electron")
const path = require ("path")

function createwin () {
    const wind = new BrowserWindow ({
    width: 900,
    heighth: 600
})
    wind.loadFile('index.html')
}
app.whenReady().then(createwin)
console.log('code ended')
