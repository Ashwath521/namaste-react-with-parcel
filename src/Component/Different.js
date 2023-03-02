import React, { Component } from "react";

export class Different extends Component {
  constructor(props) {
    super(props);
    console.log("constructor" + this.props.name);
  }
  componentDidMount() {
    console.log("componentDidMount" + this.props.name);
  }
  render() {
    console.log("componentDidMount" + this.props.name);
    return <div>Diffrent</div>;
  }
}

export default Different;
