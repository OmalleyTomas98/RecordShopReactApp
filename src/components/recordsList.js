import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Record = props => (
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

    constructor(props) {
        super(props);
        this.state = {records: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/records/')
            .then(response => {
                this.setState({ records: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

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
                            <th>record Listened</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.yourRecordsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}