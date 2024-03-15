import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'

<<<<<<< Updated upstream

=======
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

export default function Portifolio() {

>>>>>>> Stashed changes

export default function Portifolio() {
    const exp = {
        configr: {
            name: 'testeProjeto1',
            sobre: 'Mostly they’re about CSS, although there are a few exceptions here and there. Books include CSS: The Definitive Guide, Fourth Edition, CSS Pocket Reference: Fifth Edition, and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium. and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium.',
            periodo: "and Cascading Style Sheets 2.0 Programmer’s Reference",
            urlImage: "https://yt3.googleusercontent.com/O10vN__XVP-N0_0PPGdwBHfMQWurfx6_yEIjzgpFYk-YSBG7LHSSc2CnLWIkxCDNoamQC-gnyw=s900-c-k-c0x00ffffff-no-rj"
        },
        gestaods: {
            name: 'testeProjeto2',
            sobre: 'Mostly they’re about CSS, although there are a few exceptions here and there. Books include CSS: The Definitive Guide, Fourth Edition, CSS Pocket Reference: Fifth Edition, and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium. and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium',
            periodo: "and Cascading Style Sheets 2.0 Programmer’s Reference",
            urlImage: "https://yt3.googleusercontent.com/O10vN__XVP-N0_0PPGdwBHfMQWurfx6_yEIjzgpFYk-YSBG7LHSSc2CnLWIkxCDNoamQC-gnyw=s900-c-k-c0x00ffffff-no-rj"
        },
        teste3: {
            name: 'testeProjeto3',
            sobre: 'Mostly they’re about CSS, although there are a few exceptions here and there. Books include CSS: The Definitive Guide, Fourth Edition, CSS Pocket Reference: Fifth Edition, and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium. and Cascading Style Sheets 2.0 Programmer’s Reference, among others. The articles are mostly from last millennium',
            periodo: "and Cascading Style Sheets 2.0 Programmer’s Reference",
            urlImage: "https://yt3.googleusercontent.com/O10vN__XVP-N0_0PPGdwBHfMQWurfx6_yEIjzgpFYk-YSBG7LHSSc2CnLWIkxCDNoamQC-gnyw=s900-c-k-c0x00ffffff-no-rj"
        }
    }
    return (
        <div className='row' style={{ paddingBottom: "100px" }}>
            <div className='col-1'></div>
            <div className='col-10'>
<<<<<<< Updated upstream
                <ItemPortifolio exp={exp.configr} />

                <ItemPortifolio exp={exp.gestaods} />
                <ItemPortifolio exp={exp.teste3} />
=======
                <div className='row' style={{ paddingBottom: "100px" }}>
                    <h1>Portifolio:</h1>
                </div>
                <div className='row' style={{ paddingBottom: "100px" }}>
                    <div className='col-6'>
                        <img className="" src="https://img.itch.zone/aW1nLzE1MTYwMTQxLnBuZw==/347x500/wqpSl%2B.png" alt="" width="130" height="130" />
                        <h3>Path of the pads:</h3>
                        <a href="https://noxy42.itch.io/path-of-the-pads" target='blank' >Path of the Pads</a>
                    </div>
                    <div className='col-6'>
                        <img className="" src="https://conexaocriativadf.com.br/hs-fs/hubfs/Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png?width=170&height=106&name=Logo%20-%20Conex%C3%A3o%20Criativa%20OFICIAL.png" alt="" width="200" height="130" />
                        <h3>Conexão Criativa:</h3>
                        <a href="https://conexaocriativadf.com.br" target='blank' >Conexão Criativa</a>
                    </div>
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
>>>>>>> Stashed changes
            </div>
            <div className='col-1'></div>

        </div>



    )
}