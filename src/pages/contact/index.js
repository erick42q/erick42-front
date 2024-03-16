import React from 'react'
import { Widget } from '@typeform/embed-react'


import './styles.css'

export default function Contact({ user }) {


    return (
        <div>
            <div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>Contact:</h1>
                        <br></br>
                    </div>
                    <div className="col-8 ">
                        <Widget id="mQVoTwA3" style={{ width: '100%', height: '400px' }} className="my-form" />
                    </div>
                    <div className="col-4 align-self-center ">
                        <a href='https://wa.me/5561981786774?text=Ol%C3%A1,%20venho%20do%20seu%20site,%20tenho%20interesse%20de%20...' target='blanck'>Whatsapp</a><br></br>
                        <a href='https://linkedin.com/in/erick42/' target='blanck'>Linkedin</a><br></br>
                        <a href='https://instagram.com/erick42q/' target='blanck'>instagram.com</a><br></br>
                        <a href='https://github.com/erick42q/' target='blanck'>github</a>
                    </div>
                </div>
            </div >
        </div >
    )
}