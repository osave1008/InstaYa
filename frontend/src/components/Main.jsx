import react from 'react';
import "./css/styles.css";
import "./js/scripts.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import Logo from './Logo.png';

class Main extends react.Component {
    render(){
        return(
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    
                    <a className="navbar-brand ps-3" href="/Main">Inicio InstaYa</a>                    
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>                    
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">                    
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Buscar Por..." aria-label="Buscar Por..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                        </div>
                    </form>
                    
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user fa-fw" />
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Logout</a></li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Menu</div>
                                    <a className="nav-link" href="/Main">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Inicio
                                    </a>							
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                                        Gestion de Paquetes
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                                    </a>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav" align="left">
                                            <a className="nav-link" href="/Listar">Listado de Ordenes</a>
                                            <a className="nav-link" href="/Actualizacion">Actualizacion de Ordenes</a>
                                            <a className="nav-link" href="/Creacion">Registro de ordenes</a>
                                        </nav>
                                    </div>
                                </div>                            
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Loggueado como:</div>
                                Invitado
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4" align="center">
                            <h1 className="mt-4">InstaYa Mensajeria</h1>                        
                            <img src={Logo} className="img-fluid" alt="..." />                        
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © InstaYa 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>            
        );
    }
};

export default Main;