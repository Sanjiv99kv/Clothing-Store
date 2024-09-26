import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa debitis iure, ex saepe provident excepturi consequatur error magnam delectus voluptatibus quia perferendis quod animi quisquam libero! Similique, sit deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium a qui eligendi. Quae, debitis cum. Distinctio veniam, quibusdam ullam voluptate vero similique rem voluptates maiores, officia, voluptatibus necessitatibus rerum!</p>
            </div>
        </div>
    )
}

export default DescriptionBox
