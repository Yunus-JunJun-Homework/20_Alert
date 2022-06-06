import React from "react";

class Alert extends React.Component {
  render() {
    return(
      <div className="alert alert-warning"  role="alert">{this.props.text}</div>   
    )
  }
}

export default Alert;