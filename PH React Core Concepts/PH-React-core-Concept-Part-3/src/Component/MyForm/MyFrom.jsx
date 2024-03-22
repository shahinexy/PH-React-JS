import { useState } from "react";

const MyFrom = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.phone.value);

    console.log(name);
    console.log(email);
    console.log(password);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>My simple form</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" id="" />
        <br />
        <input onChange={handleEmail} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyFrom;
