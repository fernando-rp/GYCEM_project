import { Link } from "react-router-dom";



const Footer= ()=>{

    return(
        <div className="footer">
            <div className="row">
                <div className="col p-4 mt-3">
                    <Link to="/" className="p-4 link">Inicio</Link>
                    <Link to="/nosotros" className="p-4 link">Nosotros</Link>
                    <Link to="/proyectos_destacados" className="p-4 link">Proyectos Destacados</Link>
                    <Link to="/contacto" className="p-4 link">Contacto</Link>
                </div>
            </div>
            <div className="row">
                <div className="col rights">TODOS LOS DERECHOS RESERVADOS 2022.</div>
                
            </div>  
            <div className="row">
                
                <div className="col rights">V1.0 @fwd</div>
            </div>       
        </div>
    )
}


export default Footer;