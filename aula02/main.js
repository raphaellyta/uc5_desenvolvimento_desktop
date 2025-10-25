import {app,BrowserWindow} from 'electron'

function criar_janela001 (){
    const janela = new BrowserWindow ({
       width: "800px",
       height: "800px"
 


    })

    janela.loadFile('index_conversor.html')
}



app.whenReady().then(()=> {
    criar_janela001()
    console.log('Excutando')
})
