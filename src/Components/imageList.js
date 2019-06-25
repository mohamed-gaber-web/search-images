import React from 'react';
import './imageList.css';
import { NavLink } from 'react-router-dom';

const ImageList = (props) => {

    let All_Recipe =  props.recipes.map((r) => {
        return (
            <div key={r.recipe_id}>
                <img src={r.image_url} alt={r.title} />
                <h3> 
                    <NavLink to={{
                        pathname: `/single-recipe/${r.recipe_id}`, 
                        state: {rec: r.title}}}>
                        {r.title.length > 30 ? r.title.substr(0, 15) : r.title + '...'} 
                    </NavLink>
                </h3> 
            </div>
        );
    });
    
    return (
        <div className='image-list' >
            {All_Recipe.length === 0 ? <h3 style={{textAlign: 'center'}}> Enter Your Search Word </h3> :  All_Recipe}
        </div>
    );
}

export default ImageList;