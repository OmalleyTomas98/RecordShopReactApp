//imports react and my png
import React, { Component } from 'react';
import disconnected from './Pictures/disconnected.png';
import blank from './Pictures/blank.png';

import galway from './Pictures/galway.jpg';
import gorillaz from './Pictures/gorillaz.png';
import vinyl from './Pictures/turn.png';


//MAINLY GUI / INFO PAGE

export class Introduction extends Component {
    render() {
    return <div className="Introduction">
<p class="text-center"></p>

    <img src={gorillaz}  class="rounded float-right" alt="myLogos"/>
    <img src={blank}  class="rounded float-right" alt="myLogos"/>

    <img src={vinyl}  class="rounded float-left" alt="myLogos"/>

    <h1 class="text-left">Welcome to my React Application !</h1>
    <br>
    </br> <br>
    </br>
    <h1 class="text-left">Click the 'create record Inventory' button in the top bar to create your own record inventory </h1>
    
<br>

</br>
    <h1 class="text-left">You will br prompted to a new page where you can fill out the detials of all your favourite albums that you want to store </h1>
    <br>
    </br>
    


    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <h1 class="text-left">       Click the 'View  record Inventory' button in the top bar to View  your own record inventory </h1>
<br>
</br>


    <h1 class="text-left">       You may also Edit any existing records  in your system incase you purcahsed that album in a new format e.g vinyl , CD , Flac etc  </h1>




    </div>;
    }
    }

