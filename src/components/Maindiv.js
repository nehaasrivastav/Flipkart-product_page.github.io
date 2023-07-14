import React, { useEffect, useState } from 'react'
import './Navbar'
import './Leftside.css'
import './Maindiv.css'
import data from './Data'

export default function Maindiv() {


    const [Data, setData] = useState(data);


    const filterResult = (val) => {
        const result = data.filter((currentData) => {
            return (
                currentData.color === val

            )
        });
        setData(result);
    }

    const filterBrand = (val) => {
        const result = data.filter((currentData) => {
            return (
                currentData.Brand === val

            );
        });
        setData(result);
    }



    return (
        <>
            <div className='back' id='left'>
                <div className='container d-flex flex-column' >
                    <h5>Filters</h5><br />

                    <div>
                        <label className='filter-title' id='color'>Color
                            <div className='colors'> <label>
                                      <input type='checkbox' onClick={() => filterResult('Red')}></input>
                                Red
                            </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Green')}></input>
                                    Green
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Black')}></input>
                                    Black
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Blue')}></input>
                                    Blue
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Pink')}></input>
                                    Pink
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Yellow')}></input>
                                    Yellow
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Multicolor')}></input>
                                    Multicolor
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterResult('Purple')} ></input>
                                    Purple
                                </label>
                            </div>

                        </label>
                        <label className='filter-title' id='color'>Brand
                            <div className='colors'> <label>
                                <input type='checkbox' onClick={() => filterBrand('Tokyo Talkies')}></input>
                                Tokya Talkies
                            </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('SASSAFARAS')}></input>
                                    SASSAFARAS
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('Rare')}></input>
                                    Rare
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('Harpa')}></input>
                                    Harpa
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('Pluss')}></input>
                                    Pluss
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('Dressberry')}></input>
                                    Dressberry
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('Urbanic')}></input>
                                    Urbanic
                                </label>
                                <label>
                                    <input type='checkbox' onClick={() => filterBrand('STREET9')}></input>
                                    STREET9
                                </label>
                            </div>

                        </label>
                    </div>

                </div>
            </div>

            <div id='back'>
                <div>
                    <div id='main' className='d-flex flex-row flex-wrap'>
                        {
                            Data.map((val) => {
                                const { title, price, image, Brand } = val;
                                return (
                                    <>
                                        <div class="product">
                                            <div class="imgbox">
                                                <img src={image} />
                                                <i class="fa-solid fa-heart fa-lg" id='heart-icon'></i>
                                            </div>
                                            <div class="specifies">

                                                <div className='d-flex flex-row'>
                                                    <h2><span>{Brand}</span><br />{title}</h2>
                                                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' className='card-logo'></img>
                                                </div>

                                                <div className='d-block'>
                                                    <ul className='price'>

                                                        <li>₹{price}</li>
                                                        <strike> <span> <li>₹1200</li></span></strike>
                                                        <li>30% off</li>

                                                    </ul><br />
                                                </div>
                                                <label>Free delivery</label><br />
                                                <label className='card-text'>Daily Saver</label>

                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }



                    </div>
                </div>
            </div>

        </>
    )
}
