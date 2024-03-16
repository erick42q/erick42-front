import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'





export default function Portifolio() {

    return (
        <div className='row ' style={{
            paddingBottom: "10px",
            // backgroundColor: "#d9d9d9"
        }
        }>
            <div className='col-2'></div>
            <div className='col-8'>
                {/* Titulo */}
                <div className='row'   >
                    <h1 style={{ color: "#212529", paddingTop: "50px" }}>Portifolio:</h1>
                </div>
                {/* items do portifolio */}
                <div className='row' style={{ paddingBottom: "50px", paddingTop: "50px" }}>
                    {/* <div className='col-1 bg-light'></div> */}
                    <ItemPortifolio className='col-4' itemid="0" />
                    {/* <div className='col-1 bg-light'></div> */}
                    <ItemPortifolio className='col-4' itemid="1" />
                    {/* <div className='col-1 bg-light'></div> */}
                    <ItemPortifolio className='col-4' itemid="2" />
                </div>
                <div className='row' style={{ paddingBottom: "50px" }}>
                    <ItemPortifolio className='col-4' itemid="3" />
                    <div className='col-8 '></div>

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