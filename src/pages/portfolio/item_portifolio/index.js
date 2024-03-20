import React from 'react'

import '../styles.css'
import turnpad from "../../../assets/TurnPadImage.webp"
import conexaocriativa from "../../../assets/LogoConexãoCriativa.webp"
import erick from "../../../assets/perfil_site.webp"
import floresta from "../../../assets/FlorestaSoundsLogo2.webp"

var project = [{
    nome: "Path of the pads",
    url_img: turnpad,
    site: "../../../assets/TurnPadImage.webp",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    nome: "Conexão Criativa",
    url_img: conexaocriativa,
    site: "https://conexaocriativadf.com.br",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

}, {
    nome: "erick42.com.br",
    url_img: erick,
    site: "https://erick42-front.onrender.com",
    desc: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}, {
    nome: "Floresta Sounds",
    url_img: floresta,
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