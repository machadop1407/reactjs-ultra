function User(props) {
  const name = props.name;
  const age = props.age;
  return (
    <div>
      <h1> Name: {name}</h1>
      <h1> Age: {age}</h1>
    </div>
  );
}

export default User;
