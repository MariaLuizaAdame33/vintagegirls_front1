import React, { Component, useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../router/App.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const CadastroServicos = () => {

const [nome, setNome] = useState<string>("")
const [duracao, setDuracao] = useState<string>("")
const [descricao, setDescricao] = useState<string>("")
const [preco, setPreco] = useState<string>("")
const [nomeErro, setNomeErro] = useState<string>("")
const [duracaoErro, setDuracaoErro] = useState<string>("")
const [descricaoErro, setDescricaoErro] = useState<string>("")
const [precoErro, setPrecoErro] = useState<string>("")

//useState = estado do componente

const cadastrarUsuario = (e: FormEvent) => {
    setNomeErro("")
    setDuracaoErro("")
    setDescricaoErro("")
    setPrecoErro("")

e.preventDefault();

const dados = {
    nome: nome,
    duracao:duracao,
    descricao:descricao,
    preco:preco
    
}
axios.post('http://127.0.0.1:8000/api/store',
dados,
{
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}).then(function(response){
    if ('nome' in response.data.error) {
        setNomeErro(response.data.error.nome[0]);
    }
    if ('duracao' in response.data.error) {
        setDuracaoErro(response.data.error.duracao[0]);
    }
    if ('descricao' in response.data.error) {
        setDescricaoErro(response.data.error.descricao[0]);

    }
    if ('preco' in response.data.error) {
        setPrecoErro(response.data.error.preco[0]);
    }else{
        Swal.fire({
            title: "Cadastrado com Sucesso!",
            text: "Novo serviço cadastrado!",
            icon: "success"
          });
        
        window.location.href = "/listagem/servicos"
    }
   
}).catch(function(error){
    console.log(error);
    console.log(dados);
});



}

const handleState = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "nome"){
        setNome(e.target.value);
    }
    if(e.target.name === "duracao"){
        setDuracao(e.target.value);
    }
    if(e.target.name === "descricao"){
        setDescricao(e.target.value);
    }
    if(e.target.name === "preco"){
        setPreco(e.target.value);
    }
    
}

    return (
        <div>
        <Header />
            <main className= {styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>𝑪𝒂𝒅𝒂𝒔𝒕𝒓𝒐 𝒅𝒆 𝑺𝒆𝒓𝒗𝒊𝒄̧𝒐𝒔</h5> 
                            <form onSubmit={cadastrarUsuario} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name="nome" className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{nomeErro}</div>
                                   
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="duracao" className='form-label'>Duração</label>
                                    <input type="text" name='duracao' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{duracaoErro}</div>

                                </div>

                                <div className='col-6'>
                                    <label htmlFor="descricao" className='form-label'>Descrição</label>
                                    <input type="text" name='descricao' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{descricaoErro}</div>

                                </div>

                                <div className='col-6'>
                                    <label htmlFor="preco" className='form-label'>Preço</label>
                                    <input type="text" name='preco' className='form-control' required onChange={handleState}/>
                                    <div className='text-danger'>{precoErro}</div>

                                </div>

                               
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>
                             </form> 
           

                        </div>
                    </div>
                   

                </div>

            </main>
        <Footer />

        </div>
    );
}

export default CadastroServicos;