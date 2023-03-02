import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructing profile" + this.props.name);
  }
  componentDidMount() {
    console.log("componentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render" + this.props.name);
    return (
      <>
        <h1>Count:{this.state.count}</h1>
        <h1>Profile Class Component</h1>
        <h2>{this.props.name}</h2>
        <button
          onClick={() =>
            this.setState((state) => ({
              count: state.count + 1,
            }))
          }
        >
          IncCOunt
        </button>
      </>
    );
  }
}

export default Profile;
