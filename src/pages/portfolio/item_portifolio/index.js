import React from 'react'

import '../styles.css'



export default function ItemPortifolio({ exp }) {
    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <div className='row' style={{ paddingTop: "20px", padding: "10px", }}>
                    {/* <div className='col-1 ' style={{}}></div> */}
                    <div className='col-3' style={{}}>
                        <img style={{ width: "150px" }} alt='...' src={exp.urlImage}></img>
                    </div>
                    <div className='col-5 media' style={{ textAlign: "left" }}>

                        <div class="media-heading" >
                            <h4>{exp.name}</h4>
                        </div>
                    </div>
                    <div className='col-4 media' style={{ textAlign: "left", alignSelf: "flex-end", padingTop: "10px" }}>
                        <div class="media-content" style={{
                            textAlign: "right",
                            paddingTop: "10px",
                            paddingBottom: "5px",
                            paddingRight: "5px",


                        }}>
                            <p style={{}}>{exp.periodo}</p>
                        </div>

                    </div>
                </div>
                <div className='row' style={{ padding: "10px" }}>
                    <p>
                        {exp.sobre}
                    </p>
                </div>
                <hr ></hr>
            </div>
        </>
    )
}