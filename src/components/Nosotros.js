
import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'
import card3 from '../img/card3.jpeg'
import card4 from '../img/card4.jpeg'

const Nosotros = ()=> {
return (

    <div className="container mt-4">
        <div className="row">
            <div className="col-12 mt-4">
                <h1 className="title-views">¿Quiénes Somos?</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-4">
                <p className="text">El equipo de GYCEM se compone de Ingenieros Civiles Estructurales con experiencia desmotrable en el cálculo de estructuras de diversa índole y en distintas etapas de la ingeniería. Nuestras áreas de experiencia abarca:</p>
                <ul>
                    <li>Estructuras de Hormigón Armado: estructuras enterradas de grandes proporciones, fundaciones en general, estructuras de retención, puentes de acceso, entre otros</li>
                    <li>Estructuras de Acero: galpones industriales, plataformas elevadas, edificios de acero (torres de transferencias), galerías para correas trasnportadoras, estructuras esporádicas, estructuras de soporte para equipos, entre otros</li>
                    <li>Estructuras Portuarias: cabezos, muelles de penetración, muelles marginales, estructuras de amarre y atraque, puentes de acceso, entre otros</li>
                    <li>Otros análisis: <ul>
                        <li>Análisis Sísmico Especializados</li>
                        <li>Estructuras Prefabricadas</li>
                        <li>Reguralizaciones de Construcciones Privadas</li>
                        <li>Asesorías a la Construcción</li>
                        </ul>
                        </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-4">
                <h1 className="title-views">Nuestra Especialidad</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-log-4 col-md-6 mt-4 mb-4 p-2">
                <div class="card" >
                    <img src={slide3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text text-center">Ingeniería y Diseño de Estructuras</p>
                    </div> 
                </div>
            </div>
            <div className="col-xl-3 col-log-4 col-md-6 mt-4 mb-4 p-2">
                <div class="card" >
                    <img src={slide2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text text-center">Fabricación y Montaje de Estructuras Metálicas</p>
                    </div> 
                </div>
            </div>
            <div className="col-xl-3 col-log-4 col-md-6 mt-4 mb-4 p-2">
                <div class="card" >
                    <img src={card3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text text-center">Carpintería Metálica en General</p>
                    </div> 
                </div>
            </div>
            <div className="col-xl-3 col-log-4 col-md-6 mt-4 mb-4 p-2">
                <div class="card" >
                    <img src={card4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text text-center">Asesores Externos Especializados</p>
                    </div> 
                </div>
            </div>



            
        </div>


    </div>

)

}

export default Nosotros;