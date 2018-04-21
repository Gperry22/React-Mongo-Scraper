import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import {FormBtn} from "./components/Form";
import './App.css';



class App extends Component {

  state = {
    title:"",
    begin:'',
    end: ""
  }



  handleChange = (event) =>{
    console.log("Helloooo");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("August");

    console.log(this.state);

  };


  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <form className='container'>

        <input className='' type='text' name='title' onChange={this.handleChange }value={this.state.title} />
        <input className='' type='text' name='begin' onChange={this.handleChange} value={this.state.begin} />
         <input className='' type='text' name='end' onChange={this.handleChange} value={this.state.end} />


          <FormBtn onClick={this.handleClick}/>
        </form >
      </React.Fragment>


    );
  }
}

export default App;
