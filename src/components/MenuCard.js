import React from 'react'

function MenuCard({ menuData }) {
    console.log(menuData)
    return (
        <>
          <section className='main-card--cointainer'>
            {menuData.map((item) => {
                const {id, name, category, image, description} = item
                return (
                    <>
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{category}</span>
                                    <span className='card-title'>{name}</span>
                                    <span>{description}</span>
                                    <div className='card-read'>Ready</div>
                                    <img src={image} alt='images' className='card-media' />
                                </div>
                                <span className='card-tag'>Order Now</span>
                            </div>
                        </div>
                    </>
                )
            })}
            </section>
        </>
    )
}

export default MenuCard
