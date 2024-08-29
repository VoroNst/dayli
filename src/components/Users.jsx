import React from "react";

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Lorem ipsum dolor',
            age: 40,
            isHappy: true

        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Lorem ipsum dolor',
            age: 22,
            isHappy: false

        }
    ]
    render() {
        return (<div>
            {this.users.map((el) => (<div>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.bio}</p>
            </div>))}
        </div>)
    }
}

export default Users
