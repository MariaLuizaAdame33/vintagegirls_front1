import React from "react";

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Cadastro from "../components/CadastroCliente";
import Listagem from "../components/Listagem";
import CadastroServicos from "../components/CadastroServicos";
import ListagemServicos from "../components/ListagemServicos";
import CadastroProfissionais from "../components/CadastroProfissionais";
import ListagemProfissionais from "../components/ListagemProfissionais";
import ClienteEditar from "../components/ClienteEditar";
import ProfissionalEditar from "../components/ProfissionalEditar";
import ServicosEditar from "../components/ServicosEditar";
import AgendaCliente from "../components/AgendaCliente";
import AgendaListagem from "../components/AgendaListagem";
import AgendaEditar from "../components/AgendaEditar";
import EditarSenhaCliente from "../components/EditarSenhaCliente";
import EditarSenhaProfissionais from "../components/EditarSenhaProfissionais";

const AppRouter = () =>{
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/listagem" element={<Listagem/>}/>

            <Route path="cadastro/servicos" element={<CadastroServicos/>}/>
            <Route path="/listagem/servicos" element={<ListagemServicos/>}/>

            <Route path="cadastro/profissionais" element={<CadastroProfissionais/>}/>
            <Route path="listagem/profissionais" element={<ListagemProfissionais/>}/>
            
            <Route path="cliente/editar/:id" element={<ClienteEditar/>}/>
            <Route path="profissional/editar/:id" element={<ProfissionalEditar/>}/>
            <Route path="servicos/editar/:id" element={<ServicosEditar/>}/>

            <Route path="agenda/cliente" element={<AgendaCliente/>}/>
            <Route path="agenda/listagem" element={<AgendaListagem/>}/>
            <Route path="agenda/editar/:id" element={<AgendaEditar/>}/>

            <Route path="recuperar/senha" element={<EditarSenhaCliente/>}/>
            <Route path="recuperar/senha/profissionais" element={<EditarSenhaProfissionais/>}/>



            

        </Routes>
    </BrowserRouter>
   )
}

export default AppRouter