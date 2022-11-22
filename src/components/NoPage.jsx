import react from 'react';
import "./css/styles.css";
import "./js/scripts.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import error from './assets/img/error-404.svg'

class Login extends react.Component {
    render(){
        return(
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mt-4">
                            <img className="mb-4 img-error" src={error} />
                            <p className="lead">This requested URL was not found on this server.</p>
                            <a href="./Main">
                                <i className="fas fa-arrow-left me-1" />
                                Regresar al Menu Principal
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </main>
                </div>
                <div id="layoutError_footer">
                    <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright © Your Website 2022</div>
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

        
        );
    }
};

export default Login;