
import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpeg'
import slide3 from '../img/slide3.jpeg'
import logogycemor from '../img/logogycemor.jpg'

import card3 from '../img/card3.jpeg'
import card4 from '../img/card4.jpeg'

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
                <h1 className='title-slide'>Ingeniería, Fabricación y Montaje de Estructuras Metálicas</h1>
                <h4 className='subtitle-slide'>Más de 30 años de experiencia nos avalan</h4>
              </div>
            </div>
            <div className="home carousel-item">
              <img src={slide2} className="carousel-img d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h1 className='title-slide'>Contamos con Soldadores Calificados</h1>
                <h4 className='subtitle-slide'> Con certificación ISO XXXX</h4>
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
              
                <p className="text"> Somos una empresa de ingenería con más de 30 años de experiencia en diseño, cálculo, fabricación y montajes de estructuras metálicas, donde hemos participado en proyectos habitacionales e industriales. 
                Contamos con un gran equipo humano de XXXX personas compuesto por profesionales y técnicos del área de ingeniería, comprometidos en cumplir el más alto estándar de calidad
                en todos nuestros proyectos.
                Nuestro gran desempeño y experiencia nos ha permitado trabajar con clientes como: XXX,XXX,XXX, entre otros.
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