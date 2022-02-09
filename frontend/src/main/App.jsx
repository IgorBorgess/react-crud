import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav menuHome="Início" menuUsers="Usuários"/>
            <Routes />
            <Footer />
        </div>
    </HashRouter>
    // Poderia utilizar BrowserRouter para evitar o hash na URL.
    // Nesse projeto não faz muita diferença.