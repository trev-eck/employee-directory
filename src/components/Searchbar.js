import React from 'react'

export default function Searchbar(props) {
    return (
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
          <datalist id="filter">
              <option value="First Name" key="First Name" />
          </datalist>
        </div>
      </form>
    )
}
