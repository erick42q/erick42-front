import React from 'react'

import './styles.css'




export default function Contact({ user }) {


    return (
        <div>
            <div>
                <div className="row mb-5">
                    <div className="col">
                        <div className="row mb-3 mt-5">
                            <div>
                                <img className="" src={user.urlPerfil} alt="" width="130" height="130" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-6 offset-3">
                        {/* <h1>$ whoami</h1> */}
                        <p></p>
                        <p>
                            Olá caro visitante,<br />
                            Atualmente sou programador especialista em python e atuo com o framework django,<br />
                            sou um Viking na <a href='https://gestaods.com.br' target="_blank" rel="noreferrer">GestãoDS</a> e estou sempre em busca de evolução,<br />
                            criei esse espaço para expor alguns estudos e trabalhos que tenho feito ao longo da minha jornada.
                        </p>
                        <p>
                            Meus cumprimentos
                        </p>
                        <br />
                        <br />
                        <h2>Contato:</h2>
                        <p>
                            erick42q@gmail.com<br />
                            <a href='https://linkedin.com/in/erick42/'>https://linkedin.com/in/erick42/</a>
                            <a aria-label="Chat on WhatsApp" href="https://wa.me/5561981786774?text=Ol%C3%A1,%20venho%20do%20seu%20site,%20tenho%20interesse%20de%20...
"><img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" /></a>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}