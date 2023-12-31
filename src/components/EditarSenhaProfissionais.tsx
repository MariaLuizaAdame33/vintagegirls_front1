import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Header from './Header';

import styles from '../router/App.module.css';

import { useParams } from 'react-router-dom';

import axios from 'axios';
import { CadastroProfissionaisInterfaces } from '../interfaces/CadastroProfissionaisInterfaces';


const EditarSenhaProfissionais     = () => {


    
    const [email, setEmail] = useState<string>("");
    


   

    const parametro = useParams();
    const handleState = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === "email") {
            setEmail(e.target.value);
        }




    }

    const EsqueciSenha = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            

            email: email,


        }



        axios.put('http://127.0.0.1:8000/api/profissional/senha',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                window.location.href = "/listagem"
                console.log(response.data);
            }).catch(function (error) {
                console.log(error)

            });



         

    }






    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/profissional/find/" + parametro.id);
                if (response.data.status === true) {
                    
                    setEmail(response.data.data.email)
                }



            } catch (error) {
                console.log("erro ")
            }

        }
        fetchData();
    }, [])




    return (
        <div>
            <Header/>
            <main className={styles.main}>
                <div className='container'>

                    <div className='card'>
                        <div className='card-body'>
                            <h1 className='card-title display-6 '>senha</h1>
                            <hr />
                            <form onSubmit={EsqueciSenha} className='row g-3'>
                                <div className='col-12'>
                                    <label htmlFor="email" className='form-label text-start'>E-mail</label>
                                    <input type="email" value={email}  name='email' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-12 '>
                                    <button type='submit' className="cssbuttons-io-button centralizar " >
                                        Atualizar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
export default EditarSenhaProfissionais   ;