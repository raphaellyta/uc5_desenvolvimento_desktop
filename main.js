import {app,BrowserWindow} from 'electron'
import path from 'node path'
import {fileURLToPath, fileURLtOpath} from'node:url'


 const __filename= fileURLToPath(import.meta.url)//
 //console.log (__filename)
 const __dirname = path.__dirname(__filename)
 //console.log(__dirname)


function criar_janela001 (){
    const janela = new BrowserWindow ({
       width: "800px",
       height: "800px",
       title: "Aplicação Desktop",

       webPreferences:{

       }
 

    })

    janela.loadFile('./front_exercicio/advinhacao_numero.html')
    janela.removeMenu()
    janela.webContents.openDevTools()
}



app.whenReady().then(()=> {
    criar_janela001()
    console.log('Excutando')
})

// catch((erro) =>{
//     console.error(erro)
// )}
