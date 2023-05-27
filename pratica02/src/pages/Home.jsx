import { useContext, ContatosContex } from "react"
export default function Home() {

    const { meusContatos } = useContext(ContatosContex);
    return (<>
        <h2>Meus Contatos</h2>
        <ul>
            {meusContatos.map((contato, key) => <li id={key}>{contato.nome} - {contato.telefone}</li>)}
        </ul>
        
    </>
    )
}