import React, {Component} from "react";

class Employment extends Component {
  // state: {
  //  company: '',
  //  position: '',
  //  position: '',
  //  duties: '',
  //  startDate: '',
  //  endDate: ''
  // }
    render(){
        return(
            <div>
                <label for='company'>Company</label>
                <input type='text' name='company'></input>
                <label for='position'>Position</label>
                <input type='text' name='position'></input>
                <label>Degree Type</label>
                <label for='duties'>Duties</label>
                <input class='bigBox' type='text' name='duties' maxlength='400'></input>
                <label for='startDate'>Start Date</label>
                <input name='startDate' type='date'></input>
                <label for='endDate'>End Date</label>
                <input name='endDate' type='date'></input>
                <button>Submit</button>
                <button>Add New</button>
            </div>
        );
    };
};

