import React from 'react'

export default function Table(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
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
