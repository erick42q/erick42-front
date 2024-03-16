import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'





export default function Portifolio() {

    return (
        <div className='row ' style={{
            paddingBottom: "100px",
            backgroundColor: "#d9d9d9"
        }
        }>
            <div className='col-1'></div>
            <div className='col-10'>
                {/* Titulo */}
                <div className='row'   >
                    <h1 style={{ color: "#212529", paddingTop: "50px" }}>Portifolio:</h1>
                </div>
                {/* items do portifolio */}
                <div className='row' style={{ paddingBottom: "100px" }}>
                    <ItemPortifolio itemid="0" />
                    <ItemPortifolio itemid="1" />
                </div>
                <div className='row' style={{ paddingBottom: "100px" }}>
                    <div className='col-6'>
                        <img className="" src="https://erick42-front.onrender.com/static/media/perfilreddit.f42e37ca20ecbbf6998a.png" alt="" width="130" height="130" />
                        <h3>erick42.com.br:</h3>
                        <a href="https://erick42-front.onrender.com" target='blank' >erick42.com.br</a>
                    </div>
                    <div className='col-6'>
                        <img className="" src="https://instagram.fbsb11-1.fna.fbcdn.net/v/t51.2885-19/432384478_1597644794353177_5677820520651388519_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbsb11-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wUkvbUPDkLQAX8tpg2L&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDAW3zin3KngJvwGL9e5q6TvPTr8kJ_VUT-oBmKQS0JiQ&oe=65F9B83E&_nc_sid=8b3546" alt="" width="130" height="130" />
                        <h3>Floresta Sounds:</h3>
                        <a href="https://www.instagram.com/floresta.sounds/" target='blank'>Floresta Sounds</a>
                    </div>
                </div>

            </div >
            <div className='col-1'></div>

        </div >



    )
}



// const baseURL = "http://localhost:8000/brain/experiences/2/";

// export default function Portifolio() {
//     const [Post, setPost] = React.useState([]);

//     React.useEffect(() => {
//         axios.get(baseURL)
//             .then((response) => {
//                 setPost(response.data);
//             });
//     }, []);

//     if (!Post) return null;

//     return (
//         <div className='row' style={{ paddingBottom: "100px" }}>
//             <div className='col-1'></div>
//             <div className='col-10'>
//                 <ItemPortifolio exp={Post} />
//             </div>
//             <div className='col-1'></div>
//         </div>
//     )
// }