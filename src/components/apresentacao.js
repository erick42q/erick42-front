import React from 'react'




export default function Apresentacao({ user }) {
    return (
        <>
            <div className="row  align-items-end">
                <div className="col-4 offset-2 ">
                    <div className='align-text-bottom text-start'>
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
                <div className="col-4">
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