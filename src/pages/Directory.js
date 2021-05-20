import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import API from "../utils/API";

class Directory extends Component {
  state = {
    people: [],
    sortby: "",
  };
  componentDidMount() {
    API.getRandomPeople()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ people: res.data.results });
      })
      .catch((err) => console.log(err));
  }
  handleRowClick = (event) => {
    event.preventDefault();
    console.log(event.target.text);
    console.log(this.state.people);
    switch (event.target.text) {
      case "First Name":
          this.setState({people: this.state.people.sort((a, b) => a.name.first > b.name.first ? 1 : -1)})
        break;
      case "Last Name":
        this.setState({people: this.state.people.sort((a, b) => a.name.last > b.name.last ? 1 : -1)})
        break;
      case "Email":
        this.setState({people: this.state.people.sort((a, b) => a.email > b.email ? 1 : -1)})
        break;
      case "Location":
        this.setState({people: this.state.people.sort((a, b) => a.location.city > b.location.city ? 1 : -1)})
        break;
      case "Age":
        this.setState({people: this.state.people.sort((a, b) => a.dob.age > b.dob.age ? 1 : -1)})
        break;
    }
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <Table
          people={this.state.people}
          handleRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

export default Directory;
