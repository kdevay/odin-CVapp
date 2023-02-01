import React, {Component} from "react";

class Employment extends Component {
    constructor(props){
        super(props){}
        this.state = {
            company: '',
            position: '',
            duties: '',
            startDate: '',
            endDate: '',
            id: this.props.data
        }
    }

    updateId = () => {
        this.props.track(this.props.id, this.state);
    }

    trackChanges = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
    this.props.track(this.props.id, this.state);
    };

    render(){
        {this.updateID()};
        return(
            <form key={this.state.id}>
                <label for='company' className='plain'>Company</label>
                <input type='text' name='company'></input>
                <label for='position' className='plain'>Position</label>
                <input type='text' name='position'></input>
                <label for='duties' className='plain'>Duties</label>
                <input class='bigBox' type='text' name='duties' maxlength='400'></input>
                <label for='startDate' className='plain'>Start Date</label>
                <input name='startDate' type='date'></input>
                <label for='endDate' className='plain'>End Date</label>
                <input name='endDate' type='date'></input>
            </form>
        );
    };
};

