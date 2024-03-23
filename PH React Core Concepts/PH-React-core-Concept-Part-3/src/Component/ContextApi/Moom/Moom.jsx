import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import './Moom.css'
const Moom = ({prop}) => {
    return (
        <div className="border">
            <h3>Moom </h3>
            <div className="flex">
                <Myself></Myself>
                <Brother prop={prop}></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Moom;