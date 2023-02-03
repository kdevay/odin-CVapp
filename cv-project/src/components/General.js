import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props);
        // this.props.data.firstName = React.createRef();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    };

    trackChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.track(this.state);
    }

    render() {
        if (!this.props.isEdit){
            return(
                <form className='smallForm'>
                    <hr className='small1'></hr>
                    <div>
                        <label htmlFor='firstName' className='plain'>First Name</label><br></br>
                        <input type='text' name='firstName' onChange={this.trackChanges}></input>
                    </div>
                    <div>
                        <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                        <input type='text' name='lastName' onChange={this.trackChanges}></input>
                    </div>

                    <div>
                        <label id='email' htmlFor='email' className='plain'>Email</label><br></br>
                        <input type='text' name='email' onChange={this.trackChanges}></input>
                    </div>
                    <div>
                        <label htmlFor='phone' className='plain'>Phone</label><br></br>
                        <input type='text' name='phone' onChange={this.trackChanges}></input>
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
                    <input type='text' name='firstName' value={this.props.data.firstName} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                    <input type='text' name='lastName' value={this.props.data.lastName} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='email' className='plain'>Email</label><br></br>
                    <input type='text' name='email' value={this.props.data.email} onChange={this.trackChanges}></input>
                </div>
                <div>
                    <label htmlFor='phone' className='plain'>Phone Number</label><br></br>
                    <input type='text' name='phone' value={this.props.data.phone} onChange={this.trackChanges}></input>
                </div>
                <br></br>
            </form>
        );
    };
};

export default General; 