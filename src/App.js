import React, { Component } from 'react';
import { FormSearch } from './Components/FormSearch';
import axios from 'axios';
import ImageList from './Components/imageList';

class App extends Component {

  state = {
    images: [] 
  }

  onSearchSubmited = async (data) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: data},
      headers: {
        authorization: 'Client-ID 937f4cca75d048185bcdd4bcd8a2021f36fd100a1a1f1e3a6cf253471ba63ede'
      }
    })

    this.setState({images: response.data.results})
  }
  render() {
    return (
        <div className='ui container'>
          <FormSearch submit={this.onSearchSubmited} />
          <h1> Result : {this.state.images.length} </h1>
          <ImageList images={this.state.images} />
        </div>
    );
  }
}
export default App;

