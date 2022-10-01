import React from 'react'

import CorvoPefil from "../../assets/corvo-perfil.jpg"
import './styles.css'

export default function Home() {
    return (
        <div class="container fundo-cinza">
            {/* <!-- Dados de perfil --> */}
            <div class="row rounded text-bg-dark pt-2 pb-2">
                <div class="col-sm-2">
                    <img src={CorvoPefil} class="img-perfil img-thumbnail" width="220" alt="Erick, foto de perfil" />
                </div>
                <div class="col-sm-7">
                    <h1 class="display-4 fst-italic">Erick Queiroz</h1>
                    <p class="lead my-3">A liberdade não é a meta, é o modo de seguir a viagem.</p>
                </div>
                <div class="col-sm-3">
                    <h3> Não sei o que colocar aqui ainda :/ </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum nihil </p>
                </div>
            </div>
            {/* <!-- Conteudo --> */}
            <div class="row">
                <div class="col-sm-9 fundo-texto">
                    {/* <!-- Conquistas --> */}
                    <div class="row">
                        <h1>Conquistas mais raras</h1>
                    </div>
                    <div class="row ">
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                        <div class="col">
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/256410/988994407272b5ae7af5a96bbd491f27f5a8316a.jpg"
                                alt="" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <h1>1,056</h1>
                            <h3>Conquistas</h3>
                        </div>
                        <div class="col-sm-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                            architecto qui
                            labore molestiae consectetur beatae unde esse. Tempora alias quas dolorum mollitia,
                        </div>
                    </div>

                    <div class="row rounded text-bg-dark">
                        <h1>Atividades recentes</h1>
                        <div class="row p-4 d-flex flex-column position-static ">
                            <strong class="d-inline-block mb-2 text-primary">Empresa anterior</strong>
                            {/* <!-- <h3 class="mb-0">empresa anterior</h3> --> */}
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Molestiae necessitatibus
                                eum
                                dolor
                                sint tenetur sed pariatur. Voluptates, nihil ipsa accusamus omnis porro deserunt
                                eaque
                                voluptate hic quaerat dolorum natus aliquid!</p>
                            <a href="#atividades" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="row p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">Empresa anterior</strong>
                            {/* <!-- <h3 class="mb-0">empresa anterior</h3> --> */}
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Molestiae necessitatibus
                                eum
                                dolor
                                sint tenetur sed pariatur. Voluptates, nihil ipsa accusamus omnis porro deserunt
                                eaque
                                voluptate hic quaerat dolorum natus aliquid!</p>
                            <a href="#empresa" class="stretched-link">Continue reading</a>
                        </div>
                    </div>
                    {/* <!-- Comentários --> */}
                    <div class="row fundo-vermelho pb-2">
                        <div class="col">
                            <div class="row">
                                <h1>Comentários</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-2">
                                    <img src={CorvoPefil} class="img-fluid" width="100" alt="" />
                                </div>
                                <div class="col-sm-10">
                                    <div>
                                        <form>
                                            <textarea name="Comente" id="" cols="80" rows="3" class="form-text"></textarea>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-sm-3 ">
                    <div class="row">
                        <h2>AMIGOS:</h2>

                        <p> Lorem, ipsum dolor sit amet consecteturadipisicing elit. Tempore consectetur et
                            placeat rovident tenetur quidem quae voluptatibus quis cupiditate sunt repudiandae
                            maiores
                            ipsamvoluptas commodi illo similique possimus, perspiciatis nostrum! Lorem ipsum dolor
                            sit
                            amet
                            consectetur adipisicing elit. Dolorem praesentium accusamus autem cumque consequatur
                            reprehenderit nobis? Temporibus deleniti blanditiis consequuntur tempore fugit. Nam
                            dicta,
                            voluptatem repudiandae obcaecati dignissimos quisquam esse? loren Lorem ipsum dolor sit
                            amet
                            consectetur adipisicing elit. Inventore, similique! Molestias debitis pariatur incidunt
                            dolorum
                            harum omnis, magni officiis illo asperiores saepe magnam earum aliquam rerum nulla, eius
                            rem
                            ipsa.</p>

                    </div>

                </div>
            </div>
        </div>

    )
}