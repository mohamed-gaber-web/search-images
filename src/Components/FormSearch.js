import React, { Component } from 'react';


// Component Based Class [ Container Component ]
export class FormSearch extends Component {

    state = {
        dataFromInput: ''
    }

    // When Change In Input 
    handleInputChange = (e) => {
        const UpdateData = e.target.value;
        this.setState({ dataFromInput: UpdateData });
    }

    // when submit or enter form
    handleSubmitForm = (e) => {
        e.preventDefault(); // stop redirect form
        this.props.submit(this.state.dataFromInput);
        this.setState({dataFromInput: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm} className="FormSearch" 
                style={{ margin: '50px auto', textAlign: 'center' }}>
                    <label htmlFor="image"> Image Search </label>
                    <div className='ui massive icon input'>
                    <input type="text" id="image"
                        placeholder='Search name'
                        style={{ width: '80%', height: '40px', padding: '0 10px' }}
                        value={this.state.dataFromInput.toLowerCase()}
                        onChange={this.handleInputChange}
                    />
                    <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
} 