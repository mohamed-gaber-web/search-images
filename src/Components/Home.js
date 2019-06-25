import React, { Component } from 'react';
import axios from 'axios';
import { FormSearch } from './FormSearch';
import ImageList from './imageList';

const api_key = "c7e263c257e3e6dfb955a855ea5f79ed";
const cors = "https://cors-anywhere.herokuapp.com/";

class Home extends Component {

state = { AllRecipes: [] }

onSearchSubmited = async data => {
    const api_call = await `${cors}https://www.food2fork.com/api/search?key=${api_key}&q=${data}&count=20`;
    const response = await axios.get(api_call);
    this.setState({AllRecipes: response.data.recipes});
}

render() {
return (
    <div className='ui container'>
        <FormSearch submit={this.onSearchSubmited} />
        <ImageList recipes={this.state.AllRecipes} />
    </div>
);
}
    
}

export default Home;