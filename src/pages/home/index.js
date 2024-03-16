import React from 'react'

import './styles.css'


export default function Home({ user }) {
    return (
        <div >
            <div>
                {/* <div className="row mb-5 align-items-end">
                    <div className="col-4 offset-2 ">
                        <div className='align-text-bottom text-start'>
                            <p className='align-text-bottom'>
                                Bem vindo, <br />
                                Eu me chamo
                            </p>
                            <h1 >{user.first_name} </h1>
                            <h1 >{user.last_name}</h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row mb-3 mt-5">
                            <div>
                                <img className="" src={user.urlPerfil} alt="" width="200px" />
                            </div>
                        </div>

                    </div>
                </div> */}

                <div className="row">
                    <div className="col-8 offset-2 text-start" >
                        <h2>Profile:</h2>

                        <p>Fascinado pelo ramo empresarial, multi-task, alto de data, desenvolvedor de games, vendedor, gestor de trafego e programador.</p>

                        <p>Gosto de passar meu tempo pesquisando sobre como alguma ferramenta funciona,
                            implementando algum código, ou colocando algum site no ar.
                        </p>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2 text-start">
                        <h2>Habilidades:</h2>

                        <p>Habilidades com vendas, habilidades com gestão de tempo,habilidades em gestão de projetos utilizando os princípios do scrum, desenvolvedor Back-End, Desenvolvedor unreal.</p>
                    </div>
                    <br></br>
                </div>
                <div className="row mb-5 pb-5">
                    <div className="col-8 offset-2 text-start">
                        <h2>Experiencia:</h2>

                        <p>Gestor de uma empresa de locação de equipamentos de som.
                            Gestor de uma empresa de marketing.
                            1 ano trabalhando como desenvolvedor back-end em uma empresa de gestão de pacientes e medicos.
                            4 Anos trabalhando em uma startup de cloud servers</p>
                    </div>
                    <br></br>
                </div>
            </div >
        </div >
    )
}