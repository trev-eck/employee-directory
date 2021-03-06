import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Searchbar from "../components/Searchbar";
import API from "../utils/API";

class Directory extends Component {
  //state values, we will fill the people array on page load and use the filter array for the filter input, purpose of the other variables is to switch between ascending and descending sort
  state = {
    people: [],
    filterpeople: [],
    sortby: "",
    fn: 1,
    ln: 1,
    em: 1,
    lo: 1,
    ag: 1,
  };
  //when the page loads populate both of our arrays with random people data
  componentDidMount() {
    API.getRandomPeople()
      .then((res) => {
        this.setState({
          people: res.data.results,
          filterpeople: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }
  //when user clicks on table row head, sort the table by that category
  handleRowClick = (event) => {
    event.preventDefault();
    switch (event.target.text) {
      case "First Name":
        this.setState({
          filterpeople: this.state.filterpeople.sort((a, b) =>
            a.name.first > b.name.first ? this.state.fn : -this.state.fn
          ),
        });
        this.setState({ fn: -this.state.fn });
        break;
      case "Last Name":
        this.setState({
          filterpeople: this.state.filterpeople.sort((a, b) =>
            a.name.last > b.name.last ? this.state.ln : -this.state.ln
          ),
        });
        this.setState({ ln: -this.state.ln });
        break;
      case "Email":
        this.setState({
          filterpeople: this.state.filterpeople.sort((a, b) =>
            a.email > b.email ? this.state.em : -this.state.em
          ),
        });
        this.setState({ em: -this.state.em });
        break;
      case "Location":
        this.setState({
          filterpeople: this.state.filterpeople.sort((a, b) =>
            a.location.city > b.location.city ? this.state.lo : -this.state.lo
          ),
        });
        this.setState({ lo: -this.state.lo });
        break;
      case "Age":
        this.setState({
          filterpeople: this.state.filterpeople.sort((a, b) =>
            a.dob.age > b.dob.age ? this.state.ag : -this.state.ag
          ),
        });
        this.setState({ ag: -this.state.ag });
        break;
    }
  };
  //when the user enters text into the filter form, update the table with only matching names
  handleFilterBy = (event) => {
    this.setState({
      filterpeople: this.state.people.filter(function (person) {
        return person.name.first.includes(event.target.value, 0);
      }),
    });
  };

//Generate the navbar, the searchbar, and table, passing them all the data and functions they need
  render() {
    return (
      <div className="container">
        <Navbar />
        <Searchbar
          handleFilterBy={this.handleFilterBy}
          sortby={this.state.sortby}
        />
        <Table
          people={this.state.filterpeople}
          handleRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

export default Directory;
