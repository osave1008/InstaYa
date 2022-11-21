import react from 'react';
import "./css/styles.css";
import "./js/scripts.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";


class Creacion extends react.Component {
    render(){
        return(
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">            
                    <a className="navbar-brand ps-3" href="index.html">Inicio InstaYa</a>            
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>            
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Buscar Por..." aria-label="Buscar Por..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                        </div>
                    </form>            
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="login.html">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Menu</div>
                                        <a className="nav-link" href="index.html">
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
                                            <a className="nav-link" href="tables.html">Listado de Ordenes</a>
                                            <a className="nav-link" href="actualizacionOT.html">Actualizacion de Ordenes</a>
                                            <a className="nav-link" href="CreacionOT.html">Registro de ordenes</a>
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
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Creacion de Ordenes</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Creacion</li>
                                </ol>                        
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1" />
                                        Creacion
                                    </div>                            
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-4">
                                            <div className="col-md-3">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="Fecha" type="date" placeholder="Ingrese la fecha" />
                                                    <label htmlFor="inputDate">Fecha</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-floating">
                                                    <select className="form-control" id="Hora" type="date-hour" placeholder="Seleccione la Hora">
                                                    <option value={7}>7:00 AM</option>
                                                    <option value={8}>8:00 AM</option>
                                                    <option value={9}>9:00 AM</option>
                                                    <option value={10}>10:00 AM</option>
                                                    <option value={11}>11:00 AM</option>
                                                    <option value={12}>12:00 M</option>
                                                    <option value={13}>1:00 PM</option>
                                                    <option value={14}>2:00 PM</option>
                                                    <option value={15}>3:00 PM</option>
                                                    <option value={16}>4:00 PM</option>
                                                    <option value={17}>5:00 PM</option>
                                                    <option value={18}>6:00 PM</option>
                                                    <option value={19}>7:00 PM</option>
                                                    </select>
                                                    <label htmlFor="inputHour">Hora</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-floating">
                                                    <select className="form-control" id="Estado" type="text" placeholder="Seleccione el estado">
                                                    <option value="Guardado">Guardado</option>
                                                    <option value="Cancelado">Cancelado</option>
                                                    <option value="Cumplido">Cumplido</option>									
                                                    </select>
                                                    <label htmlFor="inputHour">Estado</label>
                                                </div>
                                            </div>							
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-3">
                                                <div className="col-md-2">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="Largo" type="text" placeholder="Ingrese el largo(CM)" />
                                                    <label htmlFor="inputLarge">Largo</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="Ancho" type="text" placeholder="Ingrese el Ancho(CM)" />
                                                        <label htmlFor="inputWidth">Ancho</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="Height" type="text" placeholder="Ingrese el Alto (CM)" />
                                                        <label htmlFor="inputHeight">Alto</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="Peso" type="text" placeholder="Ingrese el Peso (Kg)" />
                                                        <label htmlFor="inputWeight">Peso</label>
                                                    </div>
                                                </div>								
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="DireccionRecogida" type="text" placeholder="Ingrese la direccion de recogida" />
                                                        <label htmlFor="inputDireccion">Direccion de Recogida</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="CiudadRecogida" type="text" placeholder="Ingrese la ciudad de recogida" />
                                                        <label htmlFor="inputCiudad">Ciudad de Recogida</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="NombreDestinatario" type="text" placeholder="Ingrese el Nombre del Destinatario" />
                                                        <label htmlFor="inputDireccion">Nombre del Destinatario</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="IdentificacionDestinatario" type="text" placeholder="Ingrese la cedula/NIT del Destinatario" />
                                                        <label htmlFor="inputDireccion">Cedula/NIT del Destinatario</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="DireccionEntrega" type="text" placeholder="Ingrese la direccion de Entrega" />
                                                        <label htmlFor="inputDireccion">Direccion de Entrega</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="row mb-6">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="CiudadEntrega" type="text" placeholder="Ingrese la ciudad de Entrega" />
                                                        <label htmlFor="inputCiudad">Ciudad de Entrega</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-primary btn-block" href="tables.html">Crear</a></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © InstaYa</div>
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
        )         
    }
};

export default Creacion;