import React, {Component} from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Employment from './components/Employment';

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
      schools: [{school:'', major:'', degreeType:'', gradDate:'', key: uniqid()}],
      jobs: [{company: '', position: '', duties: '', startDate: '', endDate: '', key: uniqid()}]
    };
  };

  formatDate = (string) => {
    let months = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'April', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'};
    // [year, month, day]
    let arr = string.split('-')
    let month = months[arr[1]];
    // index = index[0] === '0' ? parseInt(index[1]) : parseInt(index[1]);
    return month + ' ' + arr[0]
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
      let school = {
        school:'',
        major:'',
        degreeType:'',
        gradDate:'',
        key: uniqid()
      };
      this.setState({
        schools: this.state.schools.concat(school)
      });
      return;
    }
    let job = {
      company: '',
      position: '',
      duties: '',
      startDate: '',
      endDate: '',
      key: uniqid()
    };
    this.setState({
      jobs: this.state.jobs.concat(job)
    });
  };

  trackChanges = (e) => {
    let {name, value} = e.target;
    if (e.target.getAttribute('data-id') === 'g') {
      let obj = this.state.person;
      obj[name] = value;
      this.setState({
        person: obj
      });
      return;
    }
    let index = e.target.getAttribute('data');
    let arrName = e.target.getAttribute('data-id') === 's' ? 'schools' : 'jobs';
    let arr = this.state[arrName].slice();
    let obj = arr[index];
    obj[name] = value;
    arr[index] = obj;
    this.setState({
      [arrName]: arr
    });
  };

  deleteItem = (e) => {
    let index = e.target.getAttribute('data');
    let arrName = e.target.getAttribute('data-id') === 's' ? 'schools' : 'jobs';
    let arr = this.state[arrName].slice();
    arr.splice(index, 1);
    this.setState({
      [arrName]: arr
    });
  };


  render() {
      // If editing or filling for for the first time
    if (!this.state.isDone) {
      return(
      <div id='main'>
        <h1>CV Generator</h1>

        <div className='topHeading'><h2>General</h2></div>
        <hr className='topLine'></hr>
        <div className='formBox'>
          <General isEdit={this.state.isEdit} data={this.state.person} track={this.trackChanges}></General>
        </div>

        <div className='heading'>
          <h2>Education</h2>
          <button className='add' id='s' onClick={this.addField}> + </button>
        </div>
        <hr className='topLine'></hr>
        <div className='formBox'>
          {
            this.state.schools.map((school, index) => {
              if (this.state.schools.length > 1){
                return (
                  <Education hasDelete='true' delete={this.deleteItem} isEdit={this.state.isEdit} data={school} index={index} key={school.key}
                  track={this.trackChanges}></Education>
                );
              }
              return (
                <Education hasDelete='false' isEdit={this.state.isEdit} data={school} index={index} key={school.key}
                track={this.trackChanges}></Education>
              );
            })
          }
        </div>

        <div className='heading'>
          <h2>Employment</h2>
          <button className='add' id='j'  onClick={this.addField}> + </button>
        </div>
        <hr className='topLine'></hr>
        <div className='formBox'>
          {
            this.state.jobs.map((job, index) => {
              if (this.state.jobs.length > 1){
                return (
                  <Employment hasDelete='true' delete={this.deleteItem} isEdit={this.state.isEdit} data={job} index={index} key={job.key} 
                  track={this.trackChanges}></Employment>
                  );
              }
              return (
                <Employment hasDelete='false' isEdit={this.state.isEdit} data={job} index={index} key={job.key} 
                track={this.trackChanges}></Employment>
                );
            })
          }
        </div>

        <button id='done' onClick={this.handleDisplay}>Done</button>
      </div>
      );
    }
    // If done filling out form
    return(
      <div id='displayMain'>
        <div id='cvPdf'>
          <div className='topBox' key={this.state.id}>
            <h2>{this.state.person.firstName + ' ' + this.state.person.lastName}</h2>
            <div className='sameLine'>
              <p className='plain'>{this.state.person.email}</p>
              <p className='plain'>{this.state.person.phone}</p>
            </div>
          </div>
          <div className='mainGrid'>
            <div className="SchoolBox">
              <h2>Education</h2>
              {this.state.schools.map((school, index)  => {
                return (
                  <div className='item' key={school.key}>
                    <p className='displayTitle'>{school.school}</p>
                    <p className='plain'>{school.major + ' ' + school.degreeType}</p>
                    <p className='plain'>{'Graduated '+ this.formatDate(school.gradDate)}</p>
                  </div>
                );
              })}
            </div>
            <div className="jobBox">
              <h2>Employment</h2>
              {this.state.jobs.map((job, index) => {
                if (job.duties === '' || !job.duties) {
                  return ( 
                    <div className='item' key={job.key}>
                      <div className='dateLine'>
                        <p className='displayTitle'>{job.company}</p>
                        <p className='date'>{this.formatDate(job.startDate) + ' - ' + this.formatDate(job.endDate)}</p>
                      </div>
                      <p className='plain'>{'Position: ' + job.position}</p>
                    </div>
                  );
                } else {
                  return (
                    <div className='item' key={job.key}>
                      <div className='dateLine'>
                        <p className='displayTitle'>{job.company}</p>
                        <p className='date'>{this.formatDate(job.startDate) + ' - ' + this.formatDate(job.endDate)}</p>
                      </div>
                      <p className='plain'>{'Position: ' + job.position}</p>
                      <p className='plain'>{'Duties: ' + job.duties}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <button id='edit' onClick={this.handleDisplay}>Edit</button>
      </div>
    );
  };
};

export default App; 