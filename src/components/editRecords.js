import React, { Component } from 'react';
import axios from 'axios';

export  class editRecords extends Component {


    
    constructor(props) {
        super(props);

        this.onChangeRecordDescription = this.onChangeRecordDescription.bind(this);
        this.onChangeRecordArtist = this.onChangeRecordArtist.bind(this);
        this.onChangeRecordYear = this.onChangeRecordYear.bind(this);
        this.onChangeRecordListened = this.onChangeRecordListened.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            record_description: '',
            record_artist: '',
            record_year: '',
            record_listened: false
        }
    }
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
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeRecordDescription(e) {
        this.setState({
            record_description: e.target.value
        });
    }
    onChangeRecordArtist(e) {
        this.setState({
            record_artist: e.target.value
        });
    }
    onChangeRecordYear(e) {
        this.setState({
            record_year: e.target.value
        });
    }
    onChangeRecordListened(e) {
        this.setState({
            record_listened: !this.state.record_listened
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            record_description: this.state.record_description,
            record_artist: this.state.record_artist,
            record_year: this.state.record_year,
            record_listened: this.state.record_listened
        };
        console.log(obj);
        axios.post('http://localhost:4000/records/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3 align="center">Update Records</h3>
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeRecordListened}
                                checked={this.state.record_listened}
                                value={this.state.record_listened}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}