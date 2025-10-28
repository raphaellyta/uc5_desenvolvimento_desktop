import { contextBridge } from "electron";
import { version } from "react";

contextBridge.exposeInMainWorld('api,' { 
    nome:'Aplicação Desktop'
    versionNode:() =>{ console.log ('Node ')
    versionElectron: ()
    }

})