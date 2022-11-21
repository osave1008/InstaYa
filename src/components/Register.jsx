import react from 'react';
import "./css/styles.css";
import "./js/scripts.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import Logo from './Logo.png';

class Register extends react.Component {
    render(){
        return(
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-15">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear Cuenta</h3>
                                            <div className="figure-img" align="center">
                                                <img src={Logo} className="img-thumbnail" alt="..." width={100} height="auto" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="NombreUsuario" type="text" placeholder="Ingrese su Nombre" />
                                                            <label htmlFor="inputFirstName">Nombre</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="Apellido" type="text" placeholder="Ingrese su Apellido" />
                                                            <label htmlFor="inputLastName">Apellido</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="Email" type="email" placeholder="nombre@ejemplo.com" />
                                                    <label htmlFor="inputEmail">Correo Eletronico</label>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="Password" type="password" placeholder="Ingrese su Contraseña" />
                                                            <label htmlFor="inputPassword">Contraseña</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="Password2" type="password" placeholder="Confirme su Contraseña" />
                                                            <label htmlFor="inputPasswordConfirm">Confirme su Contraseña</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Crear Cuenta</a></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="login.html">Tiene una Cuenta? Vamos a Ingresar</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright © InstaYa 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        ·
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
};

export default Register;