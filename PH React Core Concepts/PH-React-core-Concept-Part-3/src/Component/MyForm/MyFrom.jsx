import { useState } from "react";

const MyFrom = () => {
  const [name, setName] = useState('shahin');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.phone.value);

    if(password.length < 6){
      setError('Password must be 6 cheracter or longer')
    }
    else{
      setError('')
      console.log(name);
      console.log(email);
      console.log(password);
    }
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
        <input value={name} onChange={handleName} type="text" name="name" id="" />
        <br />
        <input onChange={handleEmail} type="email" name="email" id="" required />
        <br />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />

        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default MyFrom;
