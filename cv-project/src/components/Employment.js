import React, {Component} from "react";

class Employment extends Component {
    constructor(props){
        super(props);
    };


    render() {
        if (!this.props.isEdit) { // If filling out multiple job forms (not editing)
            if (this.props.hasDelete === 'true'){ 
                return(
                    <div className='formDiv'>
                        <form className="jobForm" onChange={this.updateParent}>
                            <hr className='jobLine'></hr>
                            <div>
                                <label htmlFor='company' className='plain'>Company</label><br></br>
                                <input data-id='j' data={this.props.index} type='text' name='company' onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='position' className='plain'>Position</label><br></br>
                                <input data-id='j' data={this.props.index} type='text' name='position' onChange={this.props.track}></input>
                            </div>
                            <div className='bigInput'>
                                <label htmlFor='duties' className='plain'>Duties</label><br></br>
                                <input data-id='j' data={this.props.index} type='text' name='duties' className='bigBox' maxLength='400' onClick={this.props.track} onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                                <input data-id='j' data={this.props.index} name='startDate' type='date' onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                                <input data-id='j' data={this.props.index} name='endDate' type='date' onChange={this.props.track}></input>
                            </div>
                        </form>
                        <button className='deleteButton' data-id='j' data={this.props.index} onClick={this.props.delete}>Delete</button>
                    </div>
                );
            } // If there's only one job form
            return(
                <div className='formDiv'>
                    <form className="jobForm" onChange={this.updateParent}>
                        <hr className='jobLine'></hr>
                        <div>
                            <label htmlFor='company' className='plain'>Company</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='company' onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='position' className='plain'>Position</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='position' onChange={this.props.track}></input>
                        </div>
                        <div className='bigInput'>
                            <label htmlFor='duties' className='plain'>Duties</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='duties' className='bigBox' maxLength='400' onClick={this.props.track} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                            <input data-id='j' data={this.props.index} name='startDate' type='date' onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                            <input data-id='j' data={this.props.index} name='endDate' type='date' onChange={this.props.track}></input>
                        </div>
                        <br></br>
                    </form>
                </div>
            );
        } // If editing multiple jobs
        if (this.props.hasDelete === 'true') {
            return(
                <div className='formDiv'>
                    <form className="jobForm">
                        <hr className='jobLine'></hr>
                        <div>
                            <label htmlFor='company' className='plain'>Company</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='company' value={this.props.data.company} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='position' className='plain'>Position</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='position' value={this.props.data.position} onChange={this.props.track}></input>
                        </div>
                        <div className='bigInput'>
                            <label htmlFor='duties' className='plain'>Duties</label><br></br>
                            <input data-id='j' data={this.props.index} type='text' name='duties' className='bigBox' value={this.props.data.duties} onChange={this.props.track} maxLength='400'></input>
                        </div>
                        <div>
                            <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                            <input data-id='j' data={this.props.index} name='startDate' type='date'value={this.props.data.date} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                            <input data-id='j' data={this.props.index} name='endDate' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                        </div>
                    </form>
                    <button className='deleteButton' data-id='j' data={this.props.index} onClick={this.props.delete}>Delete</button>
                </div>
            );
        }// If there's only one job edit form
        return(
            <div className='formDiv'>
                <form className="jobForm">
                    <hr className='jobLine'></hr>
                    <div>
                        <label htmlFor='company' className='plain'>Company</label><br></br>
                        <input data-id='j' data={this.props.index} type='text' name='company' value={this.props.data.company} onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='position' className='plain'>Position</label><br></br>
                        <input data-id='j' data={this.props.index} type='text' name='position' value={this.props.data.position} onChange={this.props.track}></input>
                    </div>
                    <div className='bigInput'>
                        <label htmlFor='duties' className='plain'>Duties</label><br></br>
                        <input data-id='j' data={this.props.index} type='text' name='duties' className='bigBox' value={this.props.data.duties} onChange={this.props.track} maxLength='400'></input>
                    </div>
                    <div>
                        <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                        <input data-id='j' data={this.props.index} name='startDate' type='date'value={this.props.data.date} onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                        <input data-id='j' data={this.props.index} name='endDate' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                    </div>
                    <br></br>
                </form>
            </div>
        );
    };
};

export default Employment; 