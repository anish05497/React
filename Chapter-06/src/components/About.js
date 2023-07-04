// const About = () => {
//   return <h1>About Page</h1>;
// };

// export default About;

import React, { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("Component is getting mounted")
  } 

  render() {
    return (
      <>
        <h1>About Page</h1>
        <UserContext.Consumer>
          {({user})=>(
            <h1>{user.name}-{user.email}</h1>
          )}
        </UserContext.Consumer>

      </>
    );
  }
}

export default About;
