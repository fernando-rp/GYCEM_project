import taller1 from '../img/taller1.png'
import taller2 from '../img/taller2.png'
import taller3 from '../img/taller3.png'
import taller4 from '../img/taller4.png'


const proyectos=[{
    nombre:"Estadio Copiapo",
    año: "2020",
    descripción: "Estadio Luis Valenzuela Hermosilla. Maestranza Guleica Ltda. Copiapo"
},
{
    nombre:"Secador de Maiz",
    año: "2000",
    descripción: "Secador de Maíz. Maestranza H&S. San Fracisco de Mostazal."
},
{
    nombre:"Galpón Acería Forjados S.A.",
    año: "2000",
    descripción: "Proyecto que consistió en Puente de Grúa 25tof, filtro de manga, calderas y hornos de temple. Lampa"
},
{
    nombre:"Galpón de Acopio",
    año: "2000",
    descripción: "Galpón de Acopio. Constructura PROYEKTA. Curacaví"
},
]




const ProyectosDestacados = ()=>{
   return(
    <div className="container mt-4">
    <div className="row">
        <div className="col-12 mt-4">
            <h1 className="title-views mb-4">Proyectos destacados:</h1>
            <p>A partir de nuestros más 30 años de experiencia en la ingeniería y fabricación de estructuras de acero, contamos con una variada carperta de proyectos que hemos logrado llevar a cabo. Estos proyectos con diversas complejidades, son parte de la base de nuestra experiencia y una muestra de nuestras capacidades. A continuación, destacamos algunos de ellos:</p>
        </div>
    </div>
    <div className="row">
        {
            !!proyectos &&
            proyectos.map((item, index)=>{
                return(
                    <div key={index} className="prodest col-xl-6 col-log-8 col-md-12 mt-4 mb-4 p-2">
                        <div class="card b-0" >
                            <h5 class="card-title p-2">{index+1} - {item.nombre}</h5>
                            <div class="card-body">
                                <div id="carouselExampleControls" className="carousel slide mb-2" data-bs-ride="carousel">
                                    <div className="carousel-inner" id="carousel_card">
                                        <div className="carousel-item active">
                                            <img src={taller1} className="d-block w-100" alt="d" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={taller2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={taller3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button> */}
                                </div>

                                <p class="card-text text-center">{item.descripción}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
            
    </div>
    </div>
   )
}

export default ProyectosDestacados;