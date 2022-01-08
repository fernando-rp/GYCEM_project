const Contacto = ()=>{

    return(
        <div className="container mt-2 mb-4">
        <div className="row">
            <div className="col-12 mt-4 ">
                <h1 className="title-views">Nuestro Equipo</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-4">
                <p className="text"> Contamos con un equipo de primer nivel, dispuesto a dar soluciones y prestar el máximo apoyo a su proyecto.
                 Dentro de nuestro capital humano y estructura organizacional interna, 
                es posible comunicarse con nosotros con cualquiera de los siguientes contactos:</p>
                <ul className="">
                    <li className="teams"> Gerente General (CEO)
                        <ul>
                            <li className="team">Wilson González R. - wgonzalez@gycem.cl - +569 6306 0230</li>
                        </ul>
                    </li>
                    <li className="teams"> Gerente de Operaciones
                        <ul>
                            <li className="team">Hernán Fariña - hfarina@gycem.cl - +569 8479 2752</li>
                        </ul>
                    </li>
                    <li className="teams"> Jefe Administración, RRHH y Finanzas
                        <ul>
                            <li className="team">Cecilia Garrido - cgarrido@gycem.cl - +569 4799 9844</li>
                        </ul>
                    </li>
                    <li className="teams"> Coordinador de Proyectos
                        <ul>
                            <li className="team">Wilson González S. - contacto@gycem.cl - +569 4001 0761</li>
                        </ul>
                    </li>
                </ul>       

                <p className="text">También nos puedes encontrar en nuestras instalaciones. Nos ubicamos en:</p>
                <p className="text">Cacique Colin km. 9650, Comuna Lampa, R.M., Chile. Link ubicación: <a href="https://goo.gl/maps/ZRuU4wCLQzkC7wLG8" target="_blank" rel="noreferrer" >Click aquí</a> </p>  
            </div>
        </div>
        </div>
    )

}


export default Contacto;