import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div id="search">
            <h2>
                Search
            </h2>

        <input type="text" placeholder="Enter Some" onChange={(e)=>this.props.handleSearch(e.target.value)} />

      </div>
    )
  }
}
