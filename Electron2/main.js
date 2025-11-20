import {app, BrowserWindow, nativeTheme} from 'electron'



function criarJanela (){

 nativeTheme.thrmeSoyurce ='light'

    const janela = new BrowserWindow({
        
       
        width: 800,
        height: 600,
        resizable: false,
    })

        


   janela.loadFile('index.html') 
    janela.webContents.openDevTools()
    janela.removeMenu()
}

app.whenReady().then(() => { 
        criarJanela()
})
  
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})












