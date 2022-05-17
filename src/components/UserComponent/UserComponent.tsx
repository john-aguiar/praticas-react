import { useContext, useState } from "react"
import { Context } from "../../contexts/Context"
import { Link } from "react-router-dom";
import './style.css'


export const UserComponent= () => {

    const {state, dispatch} = useContext(Context)
    const [name, setName] = useState(state.user.name)
    const [age, setAge] = useState(state.user.age)
    const [course, setCourse] = useState(state.user.course)

    const handleSaveChanges = (e: any) => {
        e.preventDefault();
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: name
            }
        })

        dispatch({
            type: 'CHANGE_COURSE',
            payload: {
                course: course
            }
        })

        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: age
            }
        })
    }

    return(
        <div className="container">
            <h1>UserComponent</h1>

            <div className=".infos">
                <h3>Seu Perfil</h3>
                <span>Nome: {state.user.name}</span> <br/>
                <span>Idade: {state.user.age}</span> <br/>       
                 <span>Curso: {state.user.course} </span>
            </div>

            <form>
                <span>Novo Nome</span>
                <input placeholder="Insira o novo nome" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

                <span>Nova Idade</span>
                <input  type="text" value={age} onChange={(e)=>setAge(parseInt(e.target.value))}/>

                <span>Novo Curso</span>
                <input placeholder="Insira o novo curso" type="text" value={course} onChange={(e)=>setCourse(e.target.value)}/>
                <button onClick={(e)=>handleSaveChanges(e)}>Salvar Mudanças</button>
            </form>
                <Link className="links" to='/register'>Ir para: Registrar</Link>
                <Link  className="links"to='/exibir'>Ir para: Exibir</Link>
        </div>
    )
}