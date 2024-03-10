import './App.css'

function App() {
  const HandelClick = ()=>{
    alert( 'Click Me');
  }

  const HendelCilck2 = (num) => {
    const sum = num + 5;
    alert(sum);
  }
  return (
    <>
      <h2>React Core Concept part 2</h2>
      {/* even handlear  */}
      <button onClick={HandelClick}>Click Me</button>
      <button onClick={()=>{alert('Click Me 2')}}>Click Me 2</button>
      <button onClick={()=>{HendelCilck2(5)}}>Cilck Me 3</button>
    </>
  )
}

export default App
