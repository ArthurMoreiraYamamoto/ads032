import { createContext, useState } from 'react'


const ContatosContext = createContext({
    meusContatos: [],
    incluirContato: () => { },
})

export function ContatosContextProvider(props) {
    const [contatos, setContatos] = useState([])

    function incluir(contato) {
        setContatos([...contatos, contato])
    }
    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,

    }
    return (

        <ContatosContext.Provider value={props.children}></ContatosContext.Provider>
    )
}
export default ContatosContext