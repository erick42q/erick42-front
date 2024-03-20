import React from 'react'

import '../styles.css'

var project = [{
    nome: "Path of the pads",
    url_img: "https://img.itch.zone/aW1nLzE1MTYwMTQxLnBuZw==/347x500/wqpSl%2B.png",
    site: "https://noxy42.itch.io/path-of-the-pads",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    nome: "Conexão Criativa",
    url_img: "https://conexaocriativadf.com.br/hs-fs/hubfs/Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png?width=170&height=106&name=Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png",
    site: "https://conexaocriativadf.com.br",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

}, {
    nome: "erick42.com.br",
    url_img: "https://erick42-front.onrender.com/static/media/perfilreddit.f42e37ca20ecbbf6998a.png",
    site: "https://erick42-front.onrender.com",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}, {
    nome: "Floresta Sounds",
    url_img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/427746211_334078232453945_2218494297382515589_n.jpg?ccb=11-4&oh=01_AdRJcjoLRm3ACKdl6UCcUe71-BR4sNdnj76QB3KgLjpk6Q&oe=66032B1C&_nc_sid=e6ed6c&_nc_cat=106",
    site: "https://www.instagram.com/floresta.sounds/",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}
]


export default function ItemPortifolio(props) {
    return (
        <>
            <div div className="row  pb-5 " style={{ height: "100%" }} >
                <div className="col-sm-6  ">
                    <div
                        className="d-flex  align-items-center justify-content-center "
                        style={{
                            backgroundColor: "#ffffff",
                            height: "100%"

                        }} >

                        <img className=""
                            src={project[parseInt(props.itemid)].url_img}
                            alt=""
                            style={{ width: "100%" }}
                        ></img>
                    </div>
                </div >
                <div className='  col-sm-6 d-flex  align-items-end c text-start  '>
                    <div>
                        <h5 className="card-title ">{project[parseInt(props.itemid)].nome}</h5>
                        <a className=""
                            href={project[parseInt(props.itemid)].site}
                            target='blank'

                        >saiba mais..</a>
                    </div>
                </div>
            </div >

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