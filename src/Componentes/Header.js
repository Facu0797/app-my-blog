import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
    return ( 
        <div>
             <ContenedorHeader>
                <Titulo>Mi blog personal</Titulo>
                <Menu>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/acerca-de">Acerca de</NavLink>
                </Menu>
            </ContenedorHeader>
        </div>
       
    );
}

const ContenedorHeader = styled.header `
    text-align: center;
    margin-bottom: 40px;
`

const Titulo = styled.h1 `
    margin-bottom: 10px;
    font-size: 20px;
    text-transform: uppercase;
`

const Menu = styled.nav `
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }

    a:hover{
        color: #191668;
    }

    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }

`
 
export default Header;