import React from 'react'

import './styles.css'


export default function Home({ user }) {
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
                        <p>
<<<<<<< Updated upstream
                            Um espaço onde compartilho projetos pessoais, conhecimentos sobre programação, tecnologia e algumas curiosidades a mais, espero que encontre algo que te ajude  assim como me ajudaram anteriormente 😊
=======
                            Bem vindo, <br />
                            Eu me chamo
                        </p>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8 offset-2">
                        <h2> Sobre mim:</h2>

                        <p>Fascinado pelo ramo empresarial, multi-task, alto de data, desenvolvedor de games, vendedor, gestor de trafego e programador.</p>

                        <p>Gosto de passar meu tempo pesquisando sobre como alguma ferramenta funciona,
                            implementando algum código, ou colocando algum site no ar.
>>>>>>> Stashed changes
                        </p>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <h2>Habilidades:</h2>

                        <p>Habilidades com vendas, habilidades com gestão de tempo, habilidades em gestão de projetos utilizando os princípios do scrum, desenvolvedor Back-End, Desenvolvedor unreal.</p>
                    </div>
                    <br></br>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <h2>Experiencia:</h2>

                        <p>Gestor de uma empresa de locação de equipamentos de som.</p>
                        <p>Gestor de uma empresa de marketing.</p>
                        <p>1 ano trabalhando como desenvolvedor back-end em uma empresa de gestão de pacientes e medicos. </p>
                        <p>4 Anos trabalhando em uma startup de cloud servers</p>
                    </div>
                    <br></br>
                </div>
            </div >
        </div >
    )
}