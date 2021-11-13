
const Navbar = () => {

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container ">
                <a className="navbar-brand" href="/">GYCEM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/proyectos_destacados">Proyectos Destacados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto">Contacto</a>
                        </li>
                    </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                </div>
            </div>
        </div>
                )
}

export default Navbar;