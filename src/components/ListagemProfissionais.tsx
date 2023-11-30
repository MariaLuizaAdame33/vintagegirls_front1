import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../router/App.module.css";
import { CadastroProfissionaisInterfaces } from '../interfaces/CadastroProfissionaisInterfaces';
import { Link, useNavigate } from 'react-router-dom';


const ListagemProfissionais = () => {

    const [usuarios, setUsuarios] = useState<CadastroProfissionaisInterfaces[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisa") {
            setPesquisa(e.target.value);
        }
    }

    function excluir(id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/profissional/excluir/' + id)
                .then(function (response) {
                    window.location.href = "/listagem/profissionais/"
                }).catch(function (error) {
                    console.log('Ocorreu um erro ao excluir');
                })
    }

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {

                const response = await axios.post('http://127.0.0.1:8000/api/profissional/nome', { nome: pesquisa }, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    setUsuarios(response.data.data);
                }).catch(function (error) {
                    console.log(error);
                });

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/profissional/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);

            }
        }

        fetchData();


    }, []);


    return (
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>ℙ𝕖𝕤𝕢𝕦𝕚𝕤𝕒𝕣</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState} />
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
                                𝑳𝒊𝒔𝒕𝒂𝒈𝒆𝒎 𝒅𝒆 𝑷𝒓𝒐𝒇𝒊𝒔𝒔𝒊𝒐𝒏𝒂𝒊𝒔
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
                                        <th>Rua</th>
                                        <th>Numero</th>
                                        <th>Bairro</th>
                                        <th>Cep</th>
                                        <th>CPF</th>
                                        <th>E-mail</th>
                                        <th>Salario</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.celular}</td>
                                            <td>{usuario.dataNascimento}</td>
                                            <td>{usuario.cidade}</td>
                                            <td>{usuario.estado}</td>
                                            <td>{usuario.rua}</td>
                                            <td>{usuario.numero}</td>
                                            <td>{usuario.bairro}</td>
                                            <td>{usuario.cep}</td>
                                            <td>{usuario.cpf}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.salario}</td>
                                            <td>
                                                <td className='col-20'>
                                                    <Link to={"/editarProfissional/" + usuario.id} className='btn btn-primary ' > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-pencil-fill' viewBox="0 0 16 16">
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                    </svg></Link>

                                                    <a onClick={() => excluir(usuario.id)} className='btn-danger btn m-1 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-trash3-fill' viewBox="0 0 16 16">
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                    </svg></a>
                                                </td>
                                                <Link to={"/recuperarsenha"} className='btn btn-success'>Alterar</Link>
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