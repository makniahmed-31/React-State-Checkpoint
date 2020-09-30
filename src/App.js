import React, { Component } from 'react';
import './App.css';
import Profile from './profile/Profile';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimePicker from 'react-time-picker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     timer:"",
      Person:
        { x:false,fullname:"Ahmed Makni",bio:"Ingenieur",profession:"Developpeur FullStack JS"},
          
        url:"https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg"
  }
}
componentDidMount(){
  setInterval(()=>{
    this.setState({timer:new Date().toString().slice(15,25)})
  },1000)
}

  render() { 
    return (  
      <div className="App" style={{display:'inline'}}>
         <div className="showbtn" >
    <h1>{this.state.timer}</h1>
           <Button variant="outline-info" onClick={()=>this.setState({Person:{...this.state.Person,x:!this.state.Person.x}})}>{this.state.Person.x===false?"Click !!!":"Wellcome"}</Button>
          </div>
          {this.state.Person.x===true?
          <div className="showcase">
            <Profile Person={this.state.Person} >{this.state.url}</Profile> 
          </div>:<h1>You are a GUOST</h1>}
      </div>
);
  }
}
export default App;
