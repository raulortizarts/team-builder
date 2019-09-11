import React, { useState } from 'react';
import logo from './logo.svg';

function Teams(props) {
    const baseTeam = { name: "", email: "", role: ""};

    const [newTeam, setNewTeam] = useState(baseTeam)

    const handleTextChange = event => {
        setNewTeam ({
            ...newTeam,

            [event.target.name]: event.target.value
        })
    }

    
    const handleSubmit = event => {
        event.preventDefault();
        props.setTeam([...props.team, newTeam]);
        resetForm();
    }

    const resetForm = () => {
        setNewTeam(baseTeam);
    }

    return (

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    )

}

export default Teams;