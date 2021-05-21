import React from 'react'

export default function Searchbar(props) {
    return (
      // Generates the search/filter form, when the form changes update our table data
        <form className="search">
        <div className="form-group">
          <label htmlFor="filter">Filter Employees by First Name:</label>
          <input
            value={props.search}
            onChange={props.handleFilterBy}
            name="filter"
            list="cats"
            type="text"
            className="form-control"
            placeholder="Case Sensitive"
            id="filter"
          />
        </div>
      </form>
    )
}
