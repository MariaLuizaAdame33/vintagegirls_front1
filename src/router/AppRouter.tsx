import React from "react";

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Cadastro from "../components/CadastroCliente";
import Listagem from "../components/Listagem";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import CadastroProfissionais from "../components/CadastroProfissionais";
import ListagemProfissionais from "../components/ListagemProfissionais";

const AppRouter = () =>{
   return(
    <BrowserRouter>
        <Routes>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="listagem" element={<Listagem/>}/>
            <Route path="cadastro/servicos" element={<CadastroServicos/>}/>
            <Route path="listagem/servicos" element={<ListagemServicos/>}/>
            <Route path="cadastro/profissionais" element={<CadastroProfissionais/>}/>
            <Route path="listagem/profissionais" element={<ListagemProfissionais/>}/>
        </Routes>
    </BrowserRouter>
   )
}

export default AppRouter