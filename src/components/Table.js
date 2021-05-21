import React from 'react'

export default function Table(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {/* Creates our Table Column Heads as links that the user can click on to sort */}
                        <th scope="col"></th>
                        <th scope="col">Picture</th>
                        <th scope="col"><a href="/" onClick={props.handleRowClick}>First Name</a></th>
                        <th scope="col"><a href="/" onClick={props.handleRowClick}>Last Name</a></th>
                        <th scope="col"><a href="/" onClick={props.handleRowClick}>Email</a></th>
                        <th scope="col"><a href="/" onClick={props.handleRowClick}>Location</a></th>
                        <th scope="col"><a href="/" onClick={props.handleRowClick}>Age</a></th>
                    </tr>
                </thead>
                <tbody>
                    {/* populate our table with all of the information we gathered from the Random People API */}
                    {props.people.map(person => (
                        <tr>
                            <th scope="row"></th>
                            <td><img alt={person.name.first} src={person.picture.thumbnail}/></td>
                            <td>{person.name.first}</td>
                            <td>{person.name.last}</td>
                            <td>{person.email}</td>
                            <td>{person.location.city}</td>
                            <td>{person.dob.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
