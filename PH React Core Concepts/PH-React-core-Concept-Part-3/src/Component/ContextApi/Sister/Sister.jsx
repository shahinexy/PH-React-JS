import { useContext } from "react";
import { moneyContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div className="border">
            <h3>Sister</h3>
            <p>Context API to add money</p>
            {money}Tk
            <br />
            <button onClick={() => setMoney(money + 1000)}>Add money</button>
        </div>
    );
};

export default Sister;