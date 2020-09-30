import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
                    
                    <img src={this.props.children}  alt='imageprofile' height='200px' width='200px' />
             
                    <div className="profile" >
                       
                        <h1>{this.props.Person.fullname}</h1> 
                        <h2>{this.props.Person.bio}</h2>
                        <h3>{this.props.Person.profession}</h3>
                    </div>

        </div>
        
         );
         
    }
}
export default Profile;