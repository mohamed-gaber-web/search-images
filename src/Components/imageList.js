import React from 'react';
import './imageList.css';

const ImageList = (props) => {

    const image = props.images.map(image => {
        return (
            <img src={image.urls.regular} alt={image.description}  /> 
        );
    })
    return (
        <div key={image.id} className='image-list'>
            {image} 
        </div>
    );
}

export default ImageList;