//Imports declaration , axios , react
import React, { Component } from 'react';
import axios from 'axios';

export  class editRecords extends Component {


    //constructor declaration 
    constructor(props) {
        // allow  access the constructor method of the parent class .
        super(props);

       //This keyword binding  object to eventhandlers
        this.onChangeRecordDescription = this.onChangeRecordDescription.bind(this);
        this.onChangeRecordArtist = this.onChangeRecordArtist.bind(this);
        this.onChangeRecordYear = this.onChangeRecordYear.bind(this);
        this.onChangeRecordListened = this.onChangeRecordListened.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        //Record object schema
        this.state = {
            record_description: '',
            record_artist: '',
            record_year: '',
            record_listened: ''
        }
    }

    //Method to receive the MongoDb records 
    componentDidMount() {
        axios.get('http://localhost:4000/records/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    record_description: response.data.record_description,
                    record_artist: response.data.record_artist,
                    record_year: response.data.record_year,
                    record_listened: response.data.record_listened
                })   
            })
            //Catch error and display the error to the console
            .catch(function (error) {
                console.log(error);
            })
    }

//Event handler updating the state  record_description
    onChangeRecordDescription(e) {
        this.setState({
            record_description: e.target.value
        });
    }

    //Event handler updating the state  record_description
    onChangeRecordArtist(e) {
        this.setState({
            record_artist: e.target.value
        });
    }

     //Event handler updating the state  record_year
    onChangeRecordYear(e) {
        this.setState({
            record_year: e.target.value
        });
    }

     //Event handler updating the state  record_listened
    onChangeRecordListened(e) {
        this.setState({
            record_listened: e.target.value
        });
    }
    
    //Event handler updating  backend of server when client clicks Submit button
    onSubmit(e) {
        e.preventDefault();
        //
        const obj = {
            record_description: this.state.record_description,
            record_artist: this.state.record_artist,
            record_year: this.state.record_year,
            record_listened: this.state.record_listened
        };

        //Output obj states to console
        console.log(obj);
        //Take new values entered into existing record and update and send to MONGODB Server
        axios.post('http://localhost:4000/records/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
            //Push to the / local:4000/ directory
        this.props.history.push('/');
    }





    
    handleChange(e) {
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (e.target.value !== "") {
            // Assign the original list to currentList
      currentList = this.props.record;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
        const lc = item.toLowerCase();
                // change search term to lowercase
        const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.record;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }



    render() {
        return (
            <div>
                <h3 align="center">Update Records</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label> Record Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.record_description}
                                onChange={this.onChangeRecordDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Record Artist : </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.record_artist}
                                onChange={this.onChangeRecordArtist}
                                />
                    </div>
                        <div className="form-group">
                        <label>Record Year : </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.record_year}
                                onChange={this.onChangeRecordYear}
                                />
                    </div>



                    <div className="form-group">
                        <label>Record Format : </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.record_listened}
                                onChange={this.onChangeRecordListened}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Record" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}