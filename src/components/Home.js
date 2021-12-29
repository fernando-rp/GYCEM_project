
import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'

import Contacto from './Contacto'


const Home = ()=>{
    return(

      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Ingeniería, Fabricación y Montaje de Estructuras Metálicas</h1>
                <h4>Más de 30 años de experiencia nos avalan</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Contamos con soldadores calificados</h1>
                <h4>Con calificación ISO</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Third slide label</h1>
                <h4>Some representative placeholder content for the third slide.</h4>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container mt-4">
        <div className="row">
            <div className="col-12 mt-4">
                <h1 className="title-views">¿Quiénes Somos?</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-4">
                <p className="text">El equipo de GYCEM se compone de Ingenieros Civiles Estructurales con experiencia demostrable en el cálculo de estructuras de diversa índole y en distintas etapas de la ingeniería. Nuestras áreas de experiencia abarca:</p>
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
        </div>

        <Contacto/>
        

      </div>

       

    )}

export default Home;