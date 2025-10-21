import {app,BrowserWindow} from 'electron'

// const criar_janela = BrowserWindow (()=>({
    
//  width: 800,
//  height: 800

// })) 

function criar_janela001 (){
    const janela = new BrowserWindow ({
       width: "800px",
       height: "800px"
 


    })

    janela.loadFile('index.html')
}



app.whenReady().then(()=> {
    criar_janela001()
    console.log('Excutando')
})
// Cria o app ciclo de vida(obj) .then diz que diz que vai realizar proxima acao 

// console.log("Executando Eletron")
// console.log("Bem vindo")