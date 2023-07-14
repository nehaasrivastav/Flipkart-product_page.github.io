import React, { useState } from 'react'
import './Leftside.css'
import data from './Data'

export default function Leftside() {
  const [Data, setData] = useState(data);

  const filterResult = (val) => {
    const result = data.filter((currentData) => {
      return currentData.color === val;
    });
    setData(result);
  }
  return (
    <>
      <div className='back'>
        <div className='container d-flex flex-column' id='left'>
          <h5>Filters</h5><br />

              <div>
            <label className='filter-title' id='color'>Color
              <div className='colors'> <label>

                {/* <button onClick={()=>filterResult('Red')}>Red</button> */}
                <input type='checkbox' onClick={()=>filterResult('Red')
                }></input>
                Red
              </label>
                <label>
                  <input type='checkbox'></input>
                  Green
                </label>
                <label>
                  <input type='checkbox'></input>
                  Black
                </label>
                <label>
                  <input type='checkbox'></input>
                  Blue
                </label>
                <label>
                  <input type='checkbox'></input>
                  Pink
                </label>
                <label>
                  <input type='checkbox'></input>
                 Yellow
                </label>
                <label>
                  <input type='checkbox'></input>
               Multicolor
                </label>
                <label>
                  <input type='checkbox'></input>
               Purple
                </label>
              </div>

            </label>
            <label className='filter-title' id='color'>Brand
              <div className='colors'> <label>
                <input type='checkbox' onClick={()=>filterResult('Tokyo Talkies')}></input>
                Tokya Talkies
              </label>
                <label>
                  <input type='checkbox'></input>
                  SASSAFARAS
                </label>
                <label>
                  <input type='checkbox'></input>
                  Rare
                </label>
                <label>
                  <input type='checkbox'></input>
                  Harpa
                </label>
                <label>
                  <input type='checkbox'></input>
                  Pluss
                </label>
                <label>
                  <input type='checkbox'></input>
                  Dressberry
                </label>
                <label>
                  <input type='checkbox'></input>
                  Urbanic
                </label>
                <label>
                  <input type='checkbox'></input>
                  STREET9
                </label>
              </div>

            </label>
          </div>


          <label className='filter-title' id='color'>Price
            <div className='colors'> <label>
              <input type='checkbox'></input>
              Less than 400
            </label>
              <label>
                <input type='checkbox'></input>
                400-600
              </label>
              <label>
                <input type='checkbox'></input>
                600-800
              </label>
              <label>
                <input type='checkbox'></input>
                800-1000
              </label>
              <label>
                <input type='checkbox'></input>
                More than 1000
              </label>
            </div>

          </label>

          {/* <label className='filter-title' id='color'>Dress Length
            <div className='colors'> <label>
              <input type='checkbox'></input>
              maxi/Full length
            </label>
              <label>
                <input type='checkbox'></input>
                Mini/Short
              </label>
              <label>
                <input type='checkbox'></input>
                Midi/Calf Length
              </label>

            </div>

          </label> */}

        </div>
      </div>
    </>
  )
}


