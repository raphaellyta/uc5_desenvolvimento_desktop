import {app, BrowserWindow, nativeTheme} from 'electron'



function CriarJanela (){

 nativeTheme.thrmeSoyurce ='light'

    const janela = new BrowserWindow({
        
       
        width: 800,
        height: 600,
        resizable: false,

        


    })

}