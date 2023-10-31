import axios from 'axios';
import React, {Component, useState, ChangeEvent, FormEvent,useEffect} from 'react';
import styles from "../router/App.module.css";
import { CadastroProfissionaisInterfaces } from '../interfaces/CadastroProfissionaisInterfaces';


const ListagemProfissionais = () => {

    const[usuarios,setUsuarios] = useState<CadastroProfissionaisInterfaces[]>([]);
    const[pesquisa, setPesquisa]= useState<string>('');
    const[error,setError]=useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name ==="pesquisa"){
            setPesquisa(e.target.value);
        }
    }

    const buscar = (e:FormEvent)=>{
        e.preventDefault();

        async function fetchData(){
            try{
            
            const response = await axios.post('http://127.0.0.1:8000/api/profissional/nome',{nome : pesquisa},{
                headers:{
                    "Accept":"application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(response){
                setUsuarios(response.data.data);
            }).catch(function(error){
                console.log(error);
            });

            }catch(error){
                console.log(error);
            }
        }
        fetchData();

    }

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/profissional/all');
                setUsuarios(response.data.data);

            }catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }
        }

        fetchData();
            
        
    }, []);


    return(
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState}/>
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-sucess'>Pesquisar</button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Profissionais
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Celular</th>
                                        <th>Data de Nascimento</th>
                                        <th>Cidade</th>
                                        <th>Estado</th>
                                        <th>País</th>
                                        <th>Rua</th>
                                        <th>Numero</th>
                                        <th>Bairro</th>
                                        <th>Cep</th>
                                        <th>Complemento</th>
                                        <th>CPF</th>
                                        <th>E-mail</th>
                                        <th>Salario</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { usuarios.map(usuario=>(
                                    <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.celular}</td>
                                    <td>{usuario.dataNascimento}</td>
                                    <td>{usuario.cidade}</td>
                                    <td>{usuario.estado}</td>
                                    <td>{usuario.pais}</td>
                                    <td>{usuario.rua}</td>
                                    <td>{usuario.numero}</td>
                                    <td>{usuario.bairro}</td>
                                    <td>{usuario.cep}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.salario}</td>
                                    <td>
                                        <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                        <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                    </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}

export default ListagemProfissionais;