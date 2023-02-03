import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Employment from "./components/Employment";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      isDone: false,
      person: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      job: {
        company: '',
        position: '',
        duties: '',
        startDate: '',
        endDate: ''
      },
      school: {
        school:'',
        major:'',
        degreeType:'',
        gradDate:''
      },
      schools: [{school:'', major:'', degreeType:'', gradDate:''}],
      jobs: [{company: '', position: '', duties: '', startDate: '', endDate: ''}]
    };
  };

  handleDisplay = (e) => {
    if (e.target.id === 'edit') {
      let bool = this.state.isEdit;
      this.setState({
        isEdit: !bool,
        isDone: false
      });
      return;
    }
    let status = e.target.id === 'done' ? true : false;
    this.setState({
      isDone: status,
      isEdit: false
    });
  };

  addField = (e) => {
    if (e.target.id === 's'){
      console.log('school');
      this.setState({
        schools: this.state.schools.concat(this.state.school)
      });
      return;
    }
    this.setState({
      jobs: this.state.jobs.concat(this.state.job)
    });
  };

  trackGeneral = (e) => {
    let {name, value} = e.target;
    let obj = this.state.person;
    obj[name] = value;
    
    this.setState({
      person: obj
    });
  };

  trackJob = (e) => {
    let {index, name, value} = e.target;
    let arr = this.state.jobs.slice();
    let obj = arr[index];
    obj[name] = value;
    arr[index] = obj;
    this.setState({
      jobs: arr
    });
  };

  trackSchool = (e) => {
    let {index, name, value} = e.target;
    let arr = this.state.schools.slice();
    let obj = arr[index];
    obj[name] = value;
    arr[index] = obj;
    this.setState({
      schools: arr
    });
  }


  render() {
      // If editing or filling for for the first time
    if (!this.state.isDone) {
      return(
      <div id='main'>
        <h1>CV Generator</h1>

        <div className='topHeading'><h2>General</h2></div>
        <div className='formBox'>
          <General isEdit={this.state.isEdit} data={this.state.person} track={this.trackGeneral}></General>
        </div>

        <div className='heading'>
          <h2>Education</h2>
          <button className='add' id='s' onClick={this.addField}> + </button>
        </div>
        <div className='formBox'>
          {
            this.state.schools.map((school, index) => {
              if (index < this.state.schools.length){
                return (
                  <Education hasLine='true' isEdit={this.state.isEdit} data={school} index={index} key={index} track={this.trackSchool}></Education>
                );
              }
              return (
                <Education hasLine='false' isEdit={this.state.isEdit} data={school} index={index} key={index} id={index} track={this.trackSchool}></Education>
              );
            })
          }
        </div>

        <div className='heading'>
          <h2>Employment</h2>
          <button className='add' id='j'  onClick={this.addField}> + </button>
        </div>
        <div className='formBox'>
          {
            this.state.jobs.map((job, index) => {
              return <Employment onChange={this.trackJob2} isEdit={this.state.isEdit} data={job} key={index} index={index} track={this.trackJob}></Employment>;
            })
          }
        </div>

        <button id='done' onClick={this.handleDisplay}>Done</button>
      </div>
      );
    }
    // If done filling out form
    return(
      <div id='main'>
        <h1>CV Generator</h1>
        <div className='formBox' key={this.state.id}>
          <p className='biggest'>{this.state.person.firstName + ' ' + this.state.person.lastName}</p>
          <p className='plain'>{this.state.person.email}</p>
          <p className='plain'>{this.state.person.phone}</p>
        </div>
        <div className="formBox">
          <h2>Education</h2>
          {this.state.schools.map((school, index)  => {
            console.log('degree: ', school.degreeType)
            console.log('grad d8: : ', school.gradDate)
            return (
              <div className='item' key={index}>
                <p className='title'>{school.school}</p>
                <p className='plain'>{school.major + ' ' + school.degreeType}</p>
                <p className='plain'>{'Graduated '+ school.gradDate}</p>
              </div>
            );
          })}
        </div>
        <div className="formBox">
          <h2>Employment</h2>
          {this.state.jobs.map((job, index) => {
            if (job.duties === '') {
              return ( 
                <div className='item' key={index}>
                  <p className='title'>{job.company}</p>
                  <p className='plain'>{'Position: ' + job.position}</p>
                  <p className='plain'>{job.endDate + ' - ' + job.startDate}</p>
                </div>
              );
            } else {
              return (
                <div className='item' key={index}>
                  <p className='title'>{job.company}</p>
                  <p className='plain'>{'Position: ' + job.position}</p>
                  <p className='plain'>{'Duties: ' + job.duties}</p>
                  <p className='plain'>{job.endDate + ' - ' + job.startDate}</p>
                </div>
              );
            }
          })}
        </div>
        <button id='edit' onClick={this.handleDisplay}>Edit</button>
      </div>
    );
  };
};

export default App; 