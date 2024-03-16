import React from 'react'

import '../styles.css'

var project = [{
    nome: "Path of the pads",
    url_img: "https://img.itch.zone/aW1nLzE1MTYwMTQxLnBuZw==/347x500/wqpSl%2B.png",
    site: "https://noxy42.itch.io/path-of-the-pads",
},
{
    nome: "Conexão Criativa",
    url_img: "https://conexaocriativadf.com.br/hs-fs/hubfs/Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png?width=170&height=106&name=Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png",
    site: "https://conexaocriativadf.com.br",
}, {
    nome: "erick42.com.br",
    url_img: "https://erick42-front.onrender.com/static/media/perfilreddit.f42e37ca20ecbbf6998a.png",
    site: "https://erick42-front.onrender.com",
}, {
    nome: "Floresta Sounds",
    url_img: "/src/assets/FlorestaSounds Logo2.png",
    site: "https://www.instagram.com/floresta.sounds/",
}
]


export default function ItemPortifolio(props) {
    return (
        <>
            < div className='col-6 align-text-bottom' >


                <img
                    className=""
                    src=
                    {project[parseInt(props.itemid)].url_img}
                    alt=""
                    height="130"
                />

                <h3>
                    {project[parseInt(props.itemid)].nome}
                </h3>

                <a
                    href={project[parseInt(props.itemid)].site}
                    target='blank' >
                    {project[parseInt(props.itemid)].nome}
                </a>

            </ div >


        </>
    )
}








// export default function ItemPortifolio({ exp }) {
//     return (
//         <>
//             <div style={{ marginTop: "20px" }}>
//                 <div className='row' style={{ paddingTop: "20px", padding: "10px", }}>
//                     {/* <div className='col-1 ' style={{}}></div> */}
//                     <div className='col-3' style={{}}>
//                         <img style={{ width: "150px" }} alt='...' src={exp.urlImage}></img>
//                     </div>
//                     <div className='col-5 media' style={{ textAlign: "left" }}>

//                         <div className="media-heading" >
//                             <h4>{exp.name}</h4>
//                         </div>
//                     </div>
//                     <div className='col-4 media' style={{ textAlign: "left", alignSelf: "flex-end", padingTop: "10px" }}>
//                         <div className="media-content" style={{
//                             textAlign: "right",
//                             paddingTop: "10px",
//                             paddingBottom: "5px",
//                             paddingRight: "5px",


//                         }}>
//                             <p style={{}}>{exp.periodo}</p>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='row' style={{ padding: "10px" }}>
//                     <p>
//                         {exp.sobre}
//                     </p>
//                 </div>
//                 <hr ></hr>
//             </div>
//         </>
//     )
// }