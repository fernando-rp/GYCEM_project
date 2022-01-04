const Contacto = ()=>{

    return(
        <div className="container mt-2 mb-4">
        <div className="row">
            <div className="col-12 mt-4 ">
                <h1 className="title-views">Contacto</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-4">
                <p className="text"> Para cualquier tipo de información o si necesitas cotizar alguno de nuestros servicios, por favor comunícate con nosotros a cualquiera de los siguientes contactos:</p>
                <ul className="">
                    <li className="">contacto@gycem.cl</li>
                    <li className="">Wilson González / Gerente de Operaciones: wgonzalez@gycem.cl / +569 6306 0230.</li>
                </ul>       

                <p className="text">También nos puedes encontrar en nuestras instalaciones. Nos ubicamos en:</p>
                <p className="text">Cacique Colin km. 9650, Comuna Lampa, R.M., Chile. Link ubicación: <a href="https://goo.gl/maps/ZRuU4wCLQzkC7wLG8" target="_blank" >Pincha aquí para conocer ubicación</a>       </p>  
            </div>
        </div>
        </div>
    )

}


export default Contacto;