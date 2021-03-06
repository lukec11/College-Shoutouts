import React, { Component } from 'react'
import { navigate } from "gatsby"
class EntryItem extends Component {
  render() {
    return (
      <div id={this.props.id} onClick={ () => navigate('/individual?id=' + encodeURI(this.props.id))} style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#ECECEC",
          minWidth: 250,
          width: "48%",
          margin: "1%",
          cursor: "pointer"
        }}>
        <h2>{this.props.name}</h2>
        <h3>By {this.props.display} on {this.props.date}</h3>
      </div>
    );
  }
}
export default EntryItem
