import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Simple Form</h1>
      <label htmlFor="name"> Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="email"> Email: </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <button type="submit"> Submit Form</button>

      {hasSubmitted && (
        <p>
          Hello, {name}! Your email is: {email}
        </p>
      )}
    </form>
  );
}

export default Form;
