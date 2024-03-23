import "./App.css";
import Grandpa from "./Component/ContextApi/Grandpa/Grandpa";
import HookForm from "./Component/HookForm/HookForm";
import MyFrom from "./Component/MyForm/MyFrom";
import RefForm from "./Component/RefForm/RefForm";
import ReusableFrom from "./Component/ReusableForm/ReusableFrom";

function App() {
  const handleSingUp = (data) => {
    console.log("Sing up data:", data);
  };
  const handleProfileUpdate = (data) => {
    console.log("Profile update Data", data);
  };

  return (
    <>
      <h1>Forms</h1>
      {/*========== Simple From  ============*/}
      <MyFrom></MyFrom>

      {/*======== Ref From  ==========*/}
      <RefForm></RefForm>

      {/*========== Custom hook From  ==========*/}
      <HookForm></HookForm>

      {/*========== Reusable From ============ */}
      <div className="border">
        <h1>Reusable From</h1>
        <ReusableFrom
          title={"Sing Up"}
          handleSubmit={handleSingUp}
        >
          <p>Please sing up right now</p>
        </ReusableFrom>

        <ReusableFrom
          title={"Profile Update"}
          handleSubmit={handleProfileUpdate}
          submitBtnText="Update"
        >
          <p>Keep update your profile</p>
        </ReusableFrom>
      </div>

        {/*====== Context API ========== */}
        <Grandpa></Grandpa>
    </>
  );
}

export default App;
