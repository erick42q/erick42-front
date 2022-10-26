import React from 'react'

import './styles.css'
import Header from './header.js'


import perfilredondo from "../../assets/perfilredondo.png"

export default function Home() {
    return (
        <div>
            <Header />

            <div class="container text-center">
                <div class="row mb-5">
                    <div class="col">
                        <div class="row mb-3 mt-5">
                            <div>
                                <img class="" src={perfilredondo} alt="" width="130" height="130" />
                            </div>
                        </div>
                        <div class="row">
                            <h1>Erick</h1>
                            <h1>Queiroz</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 offset-3">
                        <p>
                            Um espaço onde vou compartilho projetos pessoais, conhecimentos sobre programação, tecnologia e
                            algumas
                            curiosidades a mais, espero que encontre algo que te ajude assim como me ajudaram anteriormente 😊
                        </p>
                    </div>
                </div>

                <div class="row footer fixed-bottom bg-black">
                    <div class="col">
                        <p class="mt-3 text-muted">
                            Criado com <i class="bi-suit-heart-fill" style={{ "color": "red" }}></i> por <b>Erick
                                Queiroz</b>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}