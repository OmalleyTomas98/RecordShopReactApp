//imports  .. react , axios 
import React , {Component} from 'react';
import axios from 'axios';

export  class createRecords extends Component
{
    //constructor assigned to Record Object 
    constructor(props){
    super(props);

    //This keyword binding  object to eventhandlers
    this.onChangeRecordDescription =this.onChangeRecordDescription.bind(this);
    this.onChangeRecordArtist = this.onChangeRecordArtist.bind(this);
    this.onChangeRecordYear=this.onChangeRecordYear.bind(this);
    this.onChangeRecordListened = this.onChangeRecordListened.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    //States of object 
    this.state =
    {
        record_description: '',
        record_artist: '',
        record_year: '',
        record_listened: false
}   
}

//Event handler updating the state  record_description
onChangeRecordDescription(e)
{
    this.setState({
        record_description: e.target.value
    });
}

//Event handler updating the state  record_artist
onChangeRecordArtist(e)
{
    this.setState({
        record_artist: e.target.value
    });
}

//Event handler updating the state  record_year
onChangeRecordYear(e)
{
    this.setState({
        record_year: e.target.value
    });
}

//Event handler updating the state  record_listened
onChangeRecordListened(e)
{
    this.setState({
        record_listened: e.target.value
    });
}

//Submit button - event handler for when client hits enter
onSubmit(e)
{
    e.preventDefault();

    //DEBUG CONSOLE statement making sure application is storing states 
    console.log('Form Submitted');  
    console.log(`record_description: ${this.state.record_description}`);
    console.log(`record_artist: ${this.state.record_artist}`);
    console.log(`record_year: ${this.state.record_year}`);
    console.log(`record_listened: ${this.state.record_listened}`);

    //Create instance of record named newRecord 
    const newRecord = {
        //Pass current states to Record object 
        record_description: this.state.record_description,
        record_artist: this.state.record_artist,
        record_year: this.state.record_year,
        record_listened: this.state.record_listened
    };

    //HTTP Post method adding newRecord created to my MongoDB database
    axios.post('http://localhost:4000/records/add', newRecord)
        .then(res => console.log(res.data));

//update client states
    this.setState({

        record_description: '',
        record_artist: '',
        record_year: '',
        record_listened: false
    })
}
 render() {
    return (
        <div style = {{marginTop: 20}}>
            <h3>Create new Recordlist</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Record Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.record_description}
                            onChange={this.onChangeRecordDescription}
                            />
                </div>
                <div className="form-group">
                    <label> Record Artist: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.record_artist}
                            onChange={this.onChangeRecordArtist}
                            />
                </div>
                <div className="form-group">
                    <label> Record year: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.record_year}
                            onChange={this.onChangeRecordYear}
                            />
                </div>
                <div className="form-group">
                    <label> Record listened: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.record_listened}
                            onChange={this.onChangeRecordListened}
                            />
                </div>
                <div className ="form-group">
                            <input type="submit" value="Create RecordList" className="btn btn-primary "/>
                            </div>
                </form>
                </div>
            )
        }
}
