import React from 'react'

export default function Footer() {
    return (
        <div>
            <div
                className=" footer  text-center"
                style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    backgroundColor: "#191919"
                }}
            >
                <div className="col">
                    <p className="mt-3 ">
                        Criado com <i className="bi-suit-heart-fill" style={{ "color": "red" }}></i> por <b>Erick
                            Queiroz</b>
                    </p>
                </div>
            </div>
        </div >
    )
}