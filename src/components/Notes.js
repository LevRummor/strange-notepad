import React, { Component } from 'react';

export default class Notes extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            note: e.target.value
        })
    }

    
    addElement = () => {
       this.notes.push(this.state.note) 
    }
    render(){

        return(
            <div className='notes'> 
                <h1>{this.state.note}</h1>
                <input type='text' value={this.state.note} onChange={ (e) => this.handleChange(e) }/>
            
                <button onClick={ () => this.addElement() }>Add</button>
            </div>
        )
    }
}