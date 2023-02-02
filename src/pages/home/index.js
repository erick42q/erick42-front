import React from 'react'

import './styles.css'


import perfilredondo from "../../assets/perfilredondo.png"

export default function Home() {
    return (
        <div>
            <div>
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
            </div >
        </div >
    )
}