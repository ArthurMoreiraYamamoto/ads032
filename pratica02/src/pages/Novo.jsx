import {useForm} from 'react-hook-form'


export default function Novo() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    function onSubmit(data){

    }
    return (
        <>
        <h1>Novo Contato</h1>

        <form onSubmit = {handleSubmit(onSubmit)}>
            <label> Nome</label>
            <input  type="text" {...register("nome", {required: "Campo obrigatório"})}/>
            {errors.nome && <p>{errors.nome.message}</p>}
            <label>Telefone</label>
            <input type="number" {...register("telefone", {required: "Numero obrigatório"})}/>
            {errors.telefone && <p>{errors.telefone.message}</p>}
            <button>Enviar</button>
        </form>
        </>
    )
}
