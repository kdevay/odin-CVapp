import React, {Component} from "react";

class Employment extends Component {
    render(){
        return(
            <div>
                <label for='firstName'>First Name</label>
                <input type='text' name='firstName'></input>
                <label for='lastName'>Last Name</label>
                <input type='text' name='lastName'></input>
                <label for='email'>Email</label>
                <input type='text' name='email'></input>
                <label for='phone'>Phone Number</label>
                <input type='text' name='phone'></input>
                <button>Submit</button>
                <button>Add New</button>
            </div>
        );
    };
};