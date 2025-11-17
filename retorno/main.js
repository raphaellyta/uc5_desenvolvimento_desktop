import { app, BrowserWindow } from "electron"
let janela = null

function criarjanela(){

     janela=new BrowserWindow({ 
        width:600,
        height:600

     })
   
     janela.removeMenu
     janela.loadFile('conversor.html') 


}

app.whenReady().then( () => {
    criarjanela()
} )