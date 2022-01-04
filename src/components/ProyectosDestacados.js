import estadio1 from '../img/pro/estadio1.png'
import estadio2 from '../img/pro/estadio2.png'
import estadio3 from '../img/pro/estadio3.png'
import semaiz1 from '../img/pro/semaiz1.png'
import semaiz2 from '../img/pro/semaiz2.png'
import semaiz3 from '../img/pro/semaiz3.png'
import gaf1 from '../img/pro/gaf1.png'
import gaf2 from '../img/pro/gaf2.png'
import gaf3 from '../img/pro/gaf3.png'
import p1 from '../img/pro/p1.jpeg'
import p2 from '../img/pro/p2.jpeg'
import p3 from '../img/pro/p3.jpeg'
import m1 from '../img/pro/m1.png'
import m2 from '../img/pro/m2.png'
import m3 from '../img/pro/m3.png'
import mod1 from '../img/pro/mod1.png'
import mod2 from '../img/pro/mod2.png'
import mod3 from '../img/pro/mod3.png'


const proyectos=[{
    nombre:"Estadio Copiapo",
    año: "2020",
    descripción: "Estadio Luis Valenzuela Hermosilla. Maestranza Guleica Ltda. Copiapo.",
    foto1: estadio1,
    foto2: estadio2,
    foto3: estadio3,
    c_id:"c",
},
{
    nombre:"Secador de Maiz",
    año: "2000",
    descripción: "Secador de Maíz. Maestranza H&S. San Fracisco de Mostazal.",
    foto1: semaiz1,
    foto2: semaiz2,
    foto3: semaiz3,
    c_id:"c2"

},
{
    nombre:"Galpón Acería Forjados S.A.",
    año: "2000",
    descripción: "Proyecto que consistió en Puente de Grúa 25tof, filtro de manga, calderas y hornos de temple. Lampa.",
    foto1: gaf1,
    foto2: gaf2,
    foto3: gaf3,
    c_id:"c3"
},
{
    nombre:"Puente Vial Metálico Las Bermejas",
    año: "2019",
    descripción: "Puente de Acero ubicado en las Bermejas. Curacaví. ",
    foto1: p1,
    foto2: p2,
    foto3: p3,
    c_id:"c4"
},
{
    nombre:"Molino Huertos Familiares",
    año: "2020",
    descripción: "Ingeniería y Construcción Proyecto Molino Huertos Familiares. Til Til.",
    foto1: m1,
    foto2: m2,
    foto3: m3,
    c_id:"c5",
},
{
    nombre:"Soluciones Modulares",
    año: "2021",
    descripción: "Fabricación de módulos prefabricados para oficinas, sector habitacional e industrial.",
    foto1: mod1,
    foto2: mod2,
    foto3: mod3,
    c_id:"c6"
},
]




const ProyectosDestacados = ()=>{
   return(
    <div className="container mt-4">
    <div className="row">
        <div className="col-12 mt-4">
            <h1 className="title-views mb-4">Proyectos destacados:</h1>
            <p>A partir de nuestros más 15 años de experiencia en la industria, contamos con una variada y extensa carpeta de proyectos en los que nos hemos participado. 
                Estos proyectos, con diversas complejidades, son parte de la base de nuestra experiencia y una muestra de nuestras capacidades. 
                A continuación, destacamos algunos de ellos:</p>
        </div>
    </div>
    <div className="row">
        {
            !!proyectos &&
            proyectos.map((item, index)=>{
                return(
                    <div key={index} className="prodest col-xl-6 col-log-8 col-md-12 mt-2 mb-2 p-0">
                        <div class="card b-0" >
                            <h5 class="card-title p-2">{index+1} - {item.nombre}</h5>
                            <div class="card-body">
                                <div id={item.c_id} className="carousel slide mb-0" data-bs-ride="carousel">
                                    <div className="carousel-inner mb-2">
                                        <div className="carousel-item active">
                                            <img src={item.foto1} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={item.foto2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={item.foto3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#${item.c_id}`}  data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#${item.c_id}`}   data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
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