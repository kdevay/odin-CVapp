import React, {Component} from "react";

class Employment extends Component {
    constructor(props){
        super(props);
        this.state = {
            company: '',
            position: '',
            duties: '',
            startDate: '',
            endDate: '',
        }
    };

    trackChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.track(this.state, this.props.index);
    };

    render() {
        if (!this.props.isEdit) {
        return(
            <form className="jobForm" onChange={this.updateParent}>
                <hr className='jobLine'></hr>
                <div>
                    <label htmlFor='company' className='plain'>Company</label><br></br>
                    <input type='text' name='company' onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input type='text' name='position' onChange={this.trackChanges}></input>
                </div>
                <div id='bigInput'>
                    <label htmlFor='duties' className='plain'>Duties</label><br></br>
                    <input type='text' name='duties' className='bigBox' maxLength='400' onClick={this.trackChanges} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input name='startDate' type='date' onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input name='endDate' type='date' onChange={this.trackChanges}></input>
                </div>
                <br></br>
            </form>
        );
        }
        return(
            <form className="jobForm">
                <hr className='jobLine'></hr>
                <div>
                    <label htmlFor='company' className='plain'>Company</label><br></br>
                    <input type='text' name='company' value={this.props.data.company} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input type='text' name='position' value={this.props.data.position} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='duties' className='plain'>Duties</label>
                    <input type='text' name='duties' className='bigBox' value={this.props.data.duties} onChange={this.trackChanges} maxLength='400'></input>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input name='startDate' type='date'value={this.props.data.date} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input name='endDate' type='date' value={this.props.data.date} onChange={this.trackChanges}></input>
                </div>
                <br></br>
            </form>
        );
    };
};

export default Employment; 