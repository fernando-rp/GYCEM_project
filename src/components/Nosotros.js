
//import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'
import card3 from '../img/card3.jpeg'
import card4 from '../img/card4.jpeg'
import taller1 from '../img/taller1.png'
import taller2 from '../img/taller2.png'



const Nosotros = ()=> {
return (

    <div className="container mt-4">
        <div className="row">
            <div className="col-12 mt-4">
                <h1 className="title-views">Nuestra Compañía</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-4">
                <p className="text">El equipo de GYCEM se compone de profesionales y técnicos altamente calificados con experiencia demostrable en el 
                diseño y cálculo de estructuras, y en la fabricación y el montaje de diversas estructuras metálicas. Nuestras áreas de experiencia abarcan:</p>
                <ul>
                    <li>Estructuras de Hormigón Armado: estructuras enterradas de grandes proporciones, fundaciones en general, estructuras de retención, puentes de acceso, entre otros.</li>
                    <li>Estructuras de Acero: galpones industriales con/sin puente grúa, plataformas elevadas, edificios de acero (torres de transferencias), galerías para correas transportadoras, estructuras temporales, estructuras de soporte para equipos, entre otros.</li>
                    <li>Otros análisis: <ul>
                        <li>Análisis Sísmico Especializado</li>
                        <li>Estructuras Prefabricadas</li>
                        <li>Estructuras portuarias</li>
                        <li>Estructuras para la Minería</li>
                        <li>Asesorías a la Construcción</li>
                        <li>Elaboración de planos de diseño y de fabricación</li>
                        </ul>
                        </li>
                </ul>
            </div>
        </div>

        {/* <div className="row">
            <div className="col-12 mt-2">
                <h1 className="title-views">Nuestras Especialidades</h1>
            </div>
        </div> */}
        <div className="row">
        <p className="text">Nos especializamos en los siguientes servicios:</p>

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

        <div className="row">
            <div className="col-12 mt-2">
                <h1 className="title-views">Área de Producción - Maestranza</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-2">
                <p className="text">Contamos con un taller de fabricación y oficina de operaciones en la comuna de Lampa. Las características de nuestro taller son:</p>
                <ul>
                    <li>Área de fabricación: <ul>
                        <li>1500m2 de superficie techada.</li>
                        <li>1500m2 patio de pintura, acopio, maniobras de carga y descarga.</li>
                        <li>46m2 de oficinas de administración.</li>
                        </ul>
                    </li>
                    <li>Equipamiento: <ul>
                        <li>Máquinas MIG, arco Manual (MMAW) y arco sumergido (SAW).</li>
                        <li>Equipo de corte; oxicorte y por plasma.</li>
                        <li>Equipo de corte; oxicorte y por plasma.</li>
                        </ul>
                    </li>
                    <li>Operaciones : <ul>
                        <li>Grúa horquilla 5.0ton.</li>
                        <li>Puente grúa 8mx5m/3.0ton.</li>
                        <li>Camiones pluma 5.0ton y 7.0ton.</li>
                        <li>Camiones 3/4 de transporte.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-6 col-log-8 col-md-12 p-2">
                <div className="card">
                    <img src={taller1} class="card-img-top" alt="..." />
                </div>
            </div>
            <div className="col-xl-6 col-log-8 col-md-12 p-2">
                <div className="card" >
                    <img src={taller2} class="card-img-top" alt="..." />
                </div>
            </div>
            {/* <div className="col-xl-6 col-log-8 col-md-12 mb-4 p-2">
                <div className="card" >
                    <img src={taller3} class="card-img-top" alt="..." />
                </div>
            </div>
            <div className="col-xl-6 col-log-8 col-md-12 mb-4 p-2">
                <div className="card" >
                    <img src={taller4} class="card-img-top" alt="..." />
                </div>
            </div> */}
        </div>

        <div className="row mb-4">
            <div className="col-12 mt-2">
                <p className="text">En GYCEM nos preocupamos por la seguridad de nuestros trabajadores y es por eso, que contamos con manuales y certificaciones para operar bajo los estándares vigentes de seguridad. Nuestra compañía cuenta con: </p>
                <ul>
                    <li>Afiliación a Mutual de Seguridad.</li>
                    <li>Manual interno de Orden, Higiene y Seguridad.</li>
                    <li>Manual de Procedimientos Interno de Trabajo Seguro.</li>
                    <li>Manual de Procedimientos Interno de Trabajo Seguro en Altura.</li>
                    <li>Manual de Procedmientos Interno en Caso de Emergencia.</li>
                    <li>Manual de Procedmientos Interno para Fabricación de Estructuras Metálicas.</li>
                </ul>

                <p className="text"> Y tambien nos preocupamos de la calidad de nuestros trabajos, por lo que contamos con:</p>
                <ul>
                    <li>Soldadores Calificados.</li>
                    <li>Manual de Certificación y Procesos Internos de Soldaduras.</li>
                </ul>
            </div>
        </div>



       

    </div>

)

}

export default Nosotros;