import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'





export default function Portifolio() {

    return (
        <div className='row' style={{}}>
            <div className='col-2'></div>
            <div className='col-8'>
                {/* Titulo */}
                <div className='row'   >
                    <h1 style={{ paddingTop: "10px" }}>Portifolio</h1>
                </div>
                <div className='row align-items-stretch' style={{ paddingBottom: "50px", paddingTop: "50px" }}>
                    <div className='col-lg-6 col-md-6  '>
                        <ItemPortifolio
                            itemid="0" />
                    </div>
                    <div className=' col-md-6'>
                        <ItemPortifolio
                            itemid="1" />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <ItemPortifolio
                            className=''
                            itemid="2" />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <ItemPortifolio
                            itemid="3" />
                    </div>
                </div>
            </div >

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