import react from 'react';
import "./css/styles.css";
import "./js/scripts.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import Logo from './Logo.png';

class Login extends react.Component {
    render(){
        return(
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-15">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3>
                                            <div className="figure-img" align="center">
                                                <img src={Logo} className="img-thumbnail" alt="..." width={100} height="auto" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="Usuario" type="input" placeholder="Usuario" />
                                                    <label htmlFor="inputEmail">Usuario</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="Password" type="password" placeholder="Contraseña" />
                                                    <label htmlFor="inputPassword">Contraseña</label>
                                                </div>                                           
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid"><a className="btn btn-primary btn-block" href="./Main">ingresar</a></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="./Register">Necesita Cuenta? Registrese!</a></div>
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
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
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

export default Login;