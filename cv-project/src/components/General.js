import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        if (!this.props.isEdit){
            return(
                <form className='smallForm'>
                    <hr className='small1'></hr>
                    <div>
                        <label htmlFor='firstName' className='plain'>First Name</label><br></br>
                        <input data-id='g' type='text' name='firstName' onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                        <input data-id='g' type='text' name='lastName' onChange={this.props.track}></input>
                    </div>

                    <div>
                        <label id='email' htmlFor='email' className='plain'>Email</label><br></br>
                        <input data-id='g' type='text' name='email' onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='phone' className='plain'>Phone</label><br></br>
                        <input data-id='g' type='text' name='phone' onChange={this.props.track}></input>
                    </div>
                    <br></br>
                </form>
            );
        }
        return(
            <form className='smallForm'>
                <hr className='small1'></hr>
                <div>
                    <label htmlFor='firstName' className='plain'>First Name</label><br></br>
                    <input data-id='g' type='text' name='firstName' value={this.props.data.firstName} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                    <input data-id='g' type='text' name='lastName' value={this.props.data.lastName} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='email' className='plain'>Email</label><br></br>
                    <input data-id='g' type='text' name='email' value={this.props.data.email} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='phone' className='plain'>Phone Number</label><br></br>
                    <input data-id='g' type='text' name='phone' value={this.props.data.phone} onChange={this.props.track}></input>
                </div>
                <br></br>
            </form>
        );
    };
};

export default General; 