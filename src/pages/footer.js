import React from 'react'

export default function Footer() {
    return (
        <div>
            <div
                className="row footer mt-5 fixed-bottom text-center"
                style={{ backgroundColor: "#212529" }}
            >
                <div className="col">
                    <p className="mt-3 text-muted">
                        Criado com <i className="bi-suit-heart-fill" style={{ "color": "red" }}></i> por <b>Erick
                            Queiroz</b>
                    </p>
                </div>
            </div>
        </div >
    )
}