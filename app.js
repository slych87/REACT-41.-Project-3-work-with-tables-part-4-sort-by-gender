const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    }
  ]
}

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>User Information</p>
    <p>User age: <strong>{user.age}</strong></p>
    <p>User gender: {user.sex}</p>
  </div>
)
class ListItems extends React.Component {

  render() {
    let users = this.props.data.users
    users = users.filter((user) => user.sex === "female")
    const Items = users.map(user => <Item key={user.id} user={user} />)

    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
