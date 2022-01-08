
import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'
import logogycemor from '../img/logogycemor.jpg'

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
            <div className="home carousel-item active">
              <img src={slide1} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Ingeniería, Diseño, Fabricación y Montaje de Estructuras Metálicas</h1>
                <h4 className='subtitle-slide'>Más de 15 años de experiencia nos avalan</h4>
              </div>
            </div>
            <div className="home carousel-item">
              <img src={slide2} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Carpintería Metálica en General</h1>
                <h4 className='subtitle-slide'>Nos encargamos de concretar tus proyectos en acero</h4>
              </div>
            </div>
            <div className="home carousel-item">
              <img src={slide3} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>¿Necesitas asesorías?</h1>
                <h4 className='subtitle-slide'>Te podemos ayudar</h4>
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
            <div className="d-flex align-items-center col-xl-6 col-log-6 col-md-6 mt-4">
              
                <p className="text-justify"> Somos una empresa dedicada a la conformación de proyectos industiales desde sus inicios, con experiencia
                en diseño, cálculo, fabricación y montaje de estructuras metálicas en general. Llevamos más de 15 años prestando servicios a la industriales y
                nuestros clientes nos respaldan.
                Contamos con un gran equipo humano y con un personal sumamente calificado en cada una de las especializadas de nuestros servicios, 
                los que nos encontramos comprometidos en cumplir el más alto estándar de calidad en todos nuestros proyectos.
                Nuestro gran desempeño y experiencia nos ha permitido trabajar con clientes como: Walmart, Constructura e Inmobiliaria Santolaya, Banco Estado, 
                Espacio Urbano, Guleica, Forjados, Autoplanet, Dismelec, Felton, entre otros.
                </p>
            </div>
            <div className="d-flex align-items-center col-xl-6 col-log-6 col-md-6 mt-4">
                <img src={logogycemor} alt="" className="logo-gycem-home" />
            </div>
        </div>
        </div>

        <Contacto/>
        

      </div>

       

    )}

export default Home;