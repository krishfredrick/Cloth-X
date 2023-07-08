import React from 'react'
import  './category.style.scss'

function Cateagory({title, imageUrl}) {
  return (
    <div className="category_container">
        <div className="catergory_bg_img" style={{backgroundImage: `url(${imageUrl})`}}>
          <div className="category_body">
            <h2>{title}</h2>
            <p>Buy now 1</p>
          </div>
        </div>
      </div>
    )
}

export default Cateagory
