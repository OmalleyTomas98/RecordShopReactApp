//imports react and my png
import React, { Component } from 'react';
import disconnected from './Pictures/disconnected.png';

//MAINLY GUI / INFO PAGE

export class Introduction extends Component {
    render() {
    return <div className="Introduction">

    <img src={disconnected} alt=" myLogos" />

    <h1>Introduction To Store</h1>

    <h1>
        About us

    </h1>

    <h3>
Welcome to my MERN recordStore application Underneath you can find some of the features of  my application 

    </h3>

    <p> Welcome to my MERN recordStore application </p>

    </div>;
    }
    }

