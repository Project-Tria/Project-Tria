import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

// class Home extends Component {
//   login() {
//     this.props.auth.login();
//   }
//   state = {
//     jobs: [],
//     crew: "",
//     jobName: "",
//     phoneNumber: "",
//     address: "",
//     estimatedJobTime: "",
//     jobDescription: ""
//   };

//   componentDidMount() {
//     this.loadJobs();
//   }

//   loadJobs = () => {
//     API.getJobs()
//       .then(res =>
//         this.setState({ jobs: res.data, crew: "", jobName: "", phoneNumber: "", address: "", estimatedJobTime: "", jobDescription: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteJob = id => {
//     API.deleteJob(id)
//       .then(res => this.loadJobs())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.crew && this.state.jobName && this.state.phoneNumber && this.state.address && this.state.estimatedJobTime && this.state.jobDescription) {
//       API.saveJob({
//         crew: this.state.crew,
//         jobName: this.state.jobName,
//         phoneNumber: this.state.phoneNumber,
//         address: this.state.address,
//         estimatedJobTime: this.state.estimatedJobTime,
//         jobDescription: this.state.jobDescription
//       })
//         .then(res => this.loadJobs())
//         .catch(err => console.log(err));
//     }
//   };
//   render() {
//     const { isAuthenticated } = this.props.auth;
//     return (
//       <div className="container">
//         {
//           isAuthenticated() && (
              
//               <form>
//               <Input
//                 value={this.state.crew}
//                 onChange={this.handleInputChange}
//                 name="crew"
//                 placeholder="Crew (required)"
//               />
//               <Input
//                 value={this.state.jonName}
//                 onChange={this.handleInputChange}
//                 name="jobName"
//                 placeholder="Name of Job (required)"
//               />
//               <Input
//                 value={this.state.phoneNumber}
//                 onChange={this.handleInputChange}
//                 name="phoneNumber"
//                 placeholder="Phone Number (required)"
//               />
//               <Input
//                 value={this.state.address}
//                 onChange={this.handleInputChange}
//                 name="address"
//                 placeholder="Adress (required)"
//               />
//               <Input
//                 value={this.state.estimatedJobTime}
//                 onChange={this.handleInputChange}
//                 name="estimatedJobTime"
//                 placeholder="Estimated Job Time (required)"
//               />
//               <TextArea
//                 value={this.state.jobDescription}
//                 onChange={this.handleInputChange}
//                 name="jobDescription"
//                 placeholder="Description of Job (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.crew && this.state.jobName && this.state.phoneNumber && this.state.address && this.state.estimatedJobTime && this.state.jobDescription)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Job
//               </FormBtn>
//             </form>
//             )
//         }
//         {
//           !isAuthenticated() && (
//               <h4>
//                 You are not logged in! Please{' '}
//                 <a
//                   style={{ cursor: 'pointer' }}
//                   onClick={this.login.bind(this)}
//                 >
//                   Log In
//                 </a>
//                 {' '}to continue.
//               </h4>
//             )
//         }
//       </div>
//     );
//   }
// }

// export default Home;

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  state = {
    crews: [],
    crewNameDB: "",
    
  };

  componentDidMount() {
    this.loadCrew();
  }

  loadCrew = () => {
    API.getCrews()
      .then(res =>
      {
        // console.log(res)
        this.setState({ crews: res.data, crewNameDB: ""}, () => {
			console.log(this.state.crews)
        })
        })
      .catch(err => console.log(err));
  };

  deleteCrew = id => {
    API.deleteCrew(id)
      .then(res => this.loadCrews())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.crewNameDB) {
      API.saveCrew({
        crewNameDB: this.state.crewNameDB
      })
        .then(res => this.loadCrews())
        .catch(err => console.log(err));
    }
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              
              <form>
              <Input
                value={this.state.crewNameDB}
                onChange={this.handleInputChange}
                name="crewNameDB"
                placeholder="Crew Name (required)"
              />
              <FormBtn
                disabled={!(this.state.crewNameDB)}
                onClick={this.handleFormSubmit}
              >
                Submit Crew
              </FormBtn>
            </form>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
