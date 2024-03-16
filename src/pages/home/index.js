import React from 'react'

import './styles.css'


export default function Home({ user }) {
    return (
        <div>
            <div className="row">
                <div className="col-8 offset-2 text-start" >
                    <h2>Profile:</h2>

                    <p>Sou fascinado pelo ramo empresarial, sou multitarefa, autodidata, desenvolvedor de games, vendedor, gestor de tráfego e programador.</p>

                    <p>Passo meu tempo pesquisando sobre o funcionamento de diversas ferramentas, implementando códigos ou colocando sites no ar.</p>
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
            <div className="row">
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
    )
}