import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const api_key = "c7e263c257e3e6dfb955a855ea5f79ed";
const cors = "https://cors-anywhere.herokuapp.com/";

class Single extends Component {
    state = {activeRecipe: []}
    
    componentDidMount = async data => {

        const title = this.props.location.state.rec;
        const api_call = await `${cors}https://www.food2fork.com/api/search?key=${api_key}&q=${title}`;
        const response = await axios.get(api_call);
        
        this.setState({activeRecipe: response.data.recipes[0]});
    }

    render() {
        if(this.state.activeRecipe){
            return (
                <div className="container" key={this.state.activeRecipe.title}>  
                    <h1 style={{textAlign: 'center', margin: '30px 0'}}> Single Recipe</h1>
                    <NavLink to='/'>
                        <button class="ui secondary button">
                        Back
                        </button>
                    </NavLink>
                    <div className='single__reacipe'>
                        <img src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title} />
                        <h2> {this.state.activeRecipe.title} </h2>
                        <p> <b> Publisher: </b> {this.state.activeRecipe.publisher}</p>
                        <span> <b> Social Rank: </b> {this.state.activeRecipe.social_rank} </span>
                    </div>
            </div>
            );
        }
    }
 }

export default Single;