import React from 'react'

import './styles.css'




export default function About({ user }) {


    return (
        <div>
            <div>
                <div class="row mb-5">
                    <div class="col">
                        <div class="row mb-3 mt-5">
                            <div>
                                <img class="" src={user.urlPerfil} alt="" width="130" height="130" />
                            </div>
                        </div>
                        <div class="row">
                            <h1>{user.first_name}</h1>
                            <h1>{user.last_name}</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 offset-3">
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
                            61 98178-6774<br />
                            <a href='https://linkedin.com/in/erick42/'>https://linkedin.com/in/erick42/</a>

                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}