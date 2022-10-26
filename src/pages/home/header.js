import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">sobre</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">projetos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}