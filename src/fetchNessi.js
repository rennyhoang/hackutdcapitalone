import React from "react"
import fetch from 'node-fetch'

function fetchShit() {
  const getNessi = () {
    fetch('http://api.nessiisreal.com/atms?key=be19ccd868157d152650c0603639e19d')
      .then(response=>response.json())
      .then(data => this.setState({data}));
  }

  return (
    <div>
      My Api <br />

      <button>Fetch Api</button>
    </div>
  )
}