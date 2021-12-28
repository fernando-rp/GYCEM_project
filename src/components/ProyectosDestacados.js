


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
{
    nombre:"Taller de Fabricación y Oficina de Operaciones",
    año: "2000",
    descripción: ""
},
]




const ProyectosDestacados = ()=>{
   return(
    <div className="container mt-4">
    <div className="row">
        <div className="col-12 mt-4">
            <h1 className="title-views">Nuestros proyectos destacados:</h1>
        </div>
    </div>
    <div className="row">
        {
            !!proyectos &&
            proyectos.map((item, index)=>{
                return(
                <div key={index} className="col-xl-3 col-log-4 col-md-6 mt-4 mb-4 p-2">
                    <div class="card" >
                        <h5 class="card-title p-2">{item.nombre}</h5>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
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