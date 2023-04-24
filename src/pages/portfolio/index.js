import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'
import axios from "axios";

const baseURL = "http://localhost:8000/brain/experiences/2/";

export default function Portifolio() {
    const [Post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPost(response.data);
            });
    }, []);

    if (!Post) return null;

    return (
        <div className='row' style={{ paddingBottom: "100px" }}>
            <div className='col-1'></div>
            <div className='col-10'>
                <ItemPortifolio exp={Post} />
            </div>
            <div className='col-1'></div>
        </div>
    )
}