import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Blog from './Componentes/Blog';
import AcercaDe from './Componentes/AcercaDe';
import Header from './Componentes/Header';
import styled from "styled-components";
import Post from './Componentes/Post';
import Error404 from './Componentes/Error404';

const App = () => {
    return (
        <ContenedorPrincipal>
            <Header />
            <Main>
                <Routes>

                    <Route path='*' element={ <Error404 />}/>
                    <Route path='/' element={ <Inicio />}/>
                    <Route path='/blog' element={ <Blog />}/>
                    <Route path='/post/:id' element={ <Post />}> </Route>
                    <Route path='/acerca-de' element={ <AcercaDe />}/>
                </Routes>
            </Main>
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
`;

const Main = styled.main `
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`
 
export default App;