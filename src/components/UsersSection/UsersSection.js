import React, { Component } from 'react';


export default class UsersSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };


  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)

          this.setState({
            isLoaded: true,
            users: result
          });
          // this.users = result;


          // console.log(this.users)
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
  }

  render() {
    return (
      <div className="users-section">
        {this.state.users.map(user => (
          <div className="users-section__user-timeline" id="user-timeline">
            <div className="users-section__user-start-time" id="user-start-time">
              01:19:00
            </div>
            <div className="users-section__user-name" id="user-name">
              {user.name}
            </div>
          </div>
        ))}

      </div>
    )
  }

}