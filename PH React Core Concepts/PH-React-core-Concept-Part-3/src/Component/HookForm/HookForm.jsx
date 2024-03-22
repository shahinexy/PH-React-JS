import useInputState from "../../hooks/hookFrom";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('sine')
    const nameState = useInputState('sine')

    const handleSubmit = e =>{
        e.preventDefault()
        console.log('form data', nameState.value);
    }
  return (
    <div>
      <h2>Custom Hook From</h2>

      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
        <br />
        <input {...nameState} type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
