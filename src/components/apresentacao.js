import React from 'react'

import Header from '../pages/header'


export default function Apresentacao({ user }) {
    return (
        <>
            <div className="row  align-items-end  pb-2">
                <div className="col-md-12  col-lg-4 align-items-center  offset-lg-2  ">
                    <div className='align-text-bottom text-lg-start text-center '>
                        <p style={{ fontFamily: "League Spartan", fontWeight: "lighter" }} >
                            Bem vindo, <br />
                            Eu me chamo
                        </p>
                        <div>
                            <h1 style={
                                {
                                    fontFamily: "League Spartan",
                                    fontWeight: "bolder",
                                    color: "#FF9559",
                                    fontSize: "96"
                                }
                            }>{user.first_name} </h1>
                            <h1 style={{ fontFamily: "League Spartan", fontWeight: "bolder" }}>{user.last_name}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="row mb-3 mt-5">
                        <div>
                            <img className="" src={user.urlPerfil} alt="" width="200px" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}