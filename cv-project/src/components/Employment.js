import React, {Component} from "react";

class Employment extends Component {
    constructor(props){
        super(props);
    };


    render() {
        if (!this.props.isEdit) {
        return(
            <form className="jobForm" onChange={this.updateParent}>
                <hr className='jobLine'></hr>
                <div>
                    <label htmlFor='company' className='plain'>Company</label><br></br>
                    <input data={this.props.index} type='text' name='company' onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input data={this.props.index} type='text' name='position' onChange={this.props.track}></input>
                </div>
                <div id='bigInput'>
                    <label htmlFor='duties' className='plain'>Duties</label><br></br>
                    <input data={this.props.index} type='text' name='duties' className='bigBox' maxLength='400' onClick={this.props.track} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input data={this.props.index} name='startDate' type='date' onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input data={this.props.index} name='endDate' type='date' onChange={this.props.track}></input>
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
                    <input data={this.props.index} type='text' name='company' value={this.props.data.company} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input data={this.props.index} type='text' name='position' value={this.props.data.position} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='duties' className='plain'>Duties</label>
                    <input data={this.props.index} type='text' name='duties' className='bigBox' value={this.props.data.duties} onChange={this.props.track} maxLength='400'></input>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input data={this.props.index} name='startDate' type='date'value={this.props.data.date} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input data={this.props.index} name='endDate' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                </div>
                <br></br>
            </form>
        );
    };
};

export default Employment; 