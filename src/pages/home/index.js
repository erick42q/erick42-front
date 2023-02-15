import React from 'react'

import './styles.css'


export default function Home({ user }) {
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
                        <p>
                            Um espaço onde compartilho projetos pessoais, conhecimentos sobre programação, tecnologia e algumas curiosidades a mais, espero que encontre algo que te ajude  assim como me ajudaram anteriormente 😊
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}