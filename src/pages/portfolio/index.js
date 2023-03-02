import React from 'react'
import ItemPortifolio from './item_portifolio'
import './styles.css'



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
                <ItemPortifolio exp={exp.configr} />

                <ItemPortifolio exp={exp.gestaods} />
                <ItemPortifolio exp={exp.teste3} />
            </div>
            <div className='col-1'></div>
        </div>
    )
}