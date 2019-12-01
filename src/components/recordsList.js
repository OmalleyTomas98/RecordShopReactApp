//Import react  , axios through npm install ... 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//Takes records Schema incorporates to compoents and displays records in formatted BootStrap Table 
const Record = props => (

    //React BootStrap
    <tr>
        <td>{props.record.record_description}</td>
        <td>{props.record.record_artist}</td>
        <td>{props.record.record_year}</td>
        <td>{props.record.record_listened}</td>

        <td>
            <Link to={"/edit/"+props.record._id}>Edit</Link>

        </td>
    </tr>
)
export  class recordsList extends Component {

    //Initialise constructor
    constructor(props) {
        //super , access parent instances
        super(props);
        //Initialises an Empty array to store all records
        this.state = {records: []};
    }

    //Method  DEC componentDidMount
    componentDidMount() {
        //accesses my records held in my DB and displays to local host
        axios.get('http://localhost:4000/records/')
            .then(response => {
                //ASSIGN RESPONSE TO RECORDS PROPERTY
                this.setState({ records: response.data });
            })
            //ERROR HANDLING
            .catch(function (error){
                //OUTPUT TO CONSOLE THE ERROR
                console.log(error);
            })
    }
    //Records DEC - Itterates throuh records db
    yourRecordsList() {

        return this.state.records.map(function(currentRecord, i){
            return <Record record={currentRecord} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Records  List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Record Description</th>
                            <th>Record Artist</th>
                            <th>Record Year</th>
                            <th>record Format</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.yourRecordsList() }
                    </tbody>
                </table>
                <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
<ul>
</ul>
</div>
            </div>

            
        )
    }
}