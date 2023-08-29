import React from 'react'
import './Checkitem.css' 

const CheckItem = (props) => {
    const {checkItems,setCheckItems} = props
  return (
    <div>CheckItem
        <ul className='sosanh'>
            {checkItems.map(e => (
                <li>
                <div className='dealItem' key={e.id}>
                <div className='dealImg'>
                  <img src={e.image[0]} alt="" />
                </div>
                <div className='itemImg'>
                  {e.image.map((i, index) => {
                    return (
                      <img src={i} alt="" key={index} />
                    )
                  })}
                </div>
                <div className='itemInfo'>
                  <h4>{e.name}</h4>
                  <h6>{e.options[0].info[0].price * 0.9} VND<span>{e.options[0].info[0].price} VND</span></h6>
                </div>
              </div>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default CheckItem