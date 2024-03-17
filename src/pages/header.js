import React, { useState } from 'react'

import { Link } from 'react-router-dom';

export default function Header() {

    const [activeItem, setActiveItem] = useState(null)

    function Item(props) {
        let navLink = 'nav-link '

        if (props.children !== "Login") {
            navLink += props.isActive
        }

        let urlTo = props.children

        if (urlTo === "Home") {
            urlTo = ""
        }

        return (
            <li className="nav-item">
                <Link onClick={() => { setActiveItem(props.children.toLowerCase()) }} className={navLink} to={"/" + urlTo.toLowerCase()}>{props.children}</Link>
            </li>
        )
    }


    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor: "#191919" }} >
                <div className="container-fluid justify-content-center ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">

                        <ul className="navbar-nav text-center">
                            <Item isActive={activeItem === 'home' ? 'active' : ''} >Home</Item>
                            <Item isActive={activeItem === 'portifolio' ? 'active' : ''} >Portifolio</Item>
                            <Item isActive={activeItem === 'Contact' ? 'active' : ''} >Contact</Item>
                        </ul>

                    </div>
                </div >
            </nav >
        </div >
    )
}


