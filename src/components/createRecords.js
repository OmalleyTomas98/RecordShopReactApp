import React , {Component} from 'react';

export  class createRecords extends Component
{
    constructor(props){
    super(props);


    this.onChangeRecordDescription =this.onChangeRecordDescription.bind(this);
    this.onChangeRecordArtist = this.onChangeRecordArtist.bind(this);
    this.onChangeRecordYear=this.onChangeRecordYear.bind(this);
    this.onChangeRecordListened = this.onChangeRecordListened.bind(this);
    this.onSubmit=this.onSubmit.bind(this);




    this.state =
    {
        record_description: '',
        record_artist: '',
        record_year: '',
        record_listened: false

    
}   
}

onChangeRecordDescription(e)
{
    this.setState({
        record_description: e.target.value
    });
}




onChangeRecordArtist(e)
{
    this.setState({
        record_artist: e.target.value
    });
}




onChangeRecordYear(e)
{
    this.setState({
        record_year: e.target.value
    });
}


onChangeRecordListened(e)
{
    this.setState({
        record_listened: e.target.value
    });
}


onSubmit(e)
{
    e.preventDefault();




    
    
     console.log('Form Submitted');
    console.log('Record Description: ${this.state.record_description}');
    console.log('Record artist: ${this.state.record_artist}');
    console.log('Record year: ${this.state.record_year}');
    console.log('Record listened: ${this.state.record_listened}'); 
  





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
