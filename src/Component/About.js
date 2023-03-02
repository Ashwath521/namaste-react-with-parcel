import { Outlet, Link } from "react-router-dom";
import Profile from "./ProfileClass";
import React from "react";
import Different from "./Different";
// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       <p>This is something</p>
//       sss
//       {/* <Link to="/about/profile">Profile</Link>
//       <Outlet /> */}
//       <Profile />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <Profile name="First child" />
        <Different name="Different" />
        {/* <Profile name="Second child" /> */}
        {/* <Profile /> */}
      </>
    );
  }
}

export default About;
