import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            id: this.props.data
        }
    };

    updateId = () => {
        this.props.track(this.props.id, this.state);
    }

    trackChanges = (e) => {
        this.props.track(e);
    }

    render(){
        {this.updateID()};
        return(
            <form key={this.state.id}>
                <label for='firstName' className='plain'>First Name</label>
                <input type='text' name='firstName'></input>
                <label for='lastName' className='plain'>Last Name</label>
                <input type='text' name='lastName'></input>
                <label for='email' className='plain'>Email</label>
                <input type='text' name='email'></input>
                <label for='phone' className='plain'>Phone Number</label>
                <input type='text' name='phone'></input>
            </form>
        );
    };
};