import React from 'react'
import './Header.css'
import { useState } from 'react'
import imglogo from '/src/assets/logo.png'


export const Header = () => {
  return (
        
        <nav className='header'>
           <a href=""> <img src={imglogo} alt=""  /></a>
            <ul className='menu'>
                <li >
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Quem somos</a>
                </li>
                <li>
                    <a href="">Cursos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>

            <aside id='cadastrar'>
                <a href="" id='cadastrar'>CADASTRAR</a>
                <a href="" id='login'>LOGIN</a>
            </aside>
    
        </nav>
    

  )
}
