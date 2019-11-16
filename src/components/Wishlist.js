import React, { Component } from 'react';


import disconnected from './disconnected.png'

import hammer from './Pictures/hammer.png'

import headphones from './Pictures/headphones.png'


export class Wishlist   extends Component {
    render() {
    return <div className="Wishlist">
    <h1>Welcome to your Wishlist</h1>

    <p  id="rcorners1" >Listen<img src={headphones} alt=" myLogos" width="100" height="100"></img>

    </p>

    <p  id="rcorners1" >Create<img src={hammer} alt=" myLogos" width="100" height="100"></img>

</p>


    </div>
    }
    }

